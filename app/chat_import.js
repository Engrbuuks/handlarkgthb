/* Tasks from a WhatsApp chat (version 1.17.0): reads a chat exported with WhatsApp's Export chat, without media, in the browser.
   Nothing here talks to the server. It understands the Android style (12/10/2026, 09:14 - Kemi: text) and the iPhone style
   ([12/10/2026, 09:14:03] Kemi: text), 12 and 24 hour times, day first and month first dates, messages over several lines, and
   drops the lines WhatsApp writes itself (encryption notice, joins, media left out, deleted messages), in English and French.
   Before anything is sent, phone numbers and emails are taken out of the messages and of the names; a sender saved only as a
   number becomes Contact 1, Contact 2 and so on. A .zip export is opened here too: only its chat text is read, never its media.
   Loaded as a file (CSP: script-src 'self'), and by the unit tests through module.exports. */
(function (root) {
  'use strict';
  var BIDI = /[‎‏‪-‮⁦-⁩﻿]/g;
  // [date, time] or date, time - : the header of a message line. Dates use / . or - ; times may have seconds and AM or PM
  var HEAD = /^\[?(\d{1,4})[\/.\-](\d{1,2})[\/.\-](\d{1,4}),?\s*(?:à\s+|a las\s+|um\s+)?(\d{1,2})[:.](\d{2})(?:[:.](\d{2}))?\s*([ap]\.?\s?m\.?)?\]?\s*(?:[\-–—]\s+)?/i;
  var SYSTEM = [
    /end.to.end encrypted/i, /chiffr[ée]s de bout en bout/i, /joined using (this|the) group'?s invite link/i, /a rejoint (ce|le) groupe/i,
    /^<?\s*media omitted\s*>?$/i, /^<?\s*m[ée]dias? omis\s*>?$/i, /^(image|video|audio|sticker|document|gif|contact card|vid[ée]o|autocollant|carte de contact)\s+(omitted|absente?|omis)$/i,
    /^this message was deleted\.?$/i, /^you deleted this message\.?$/i, /^ce message a [ée]t[ée] supprim[ée]\.?$/i, /^vous avez supprim[ée] ce message\.?$/i,
    /^missed (voice|video) call/i, /^appel (vocal|vid[ée]o) manqu[ée]/i, /^null$/i, /^document omitted$/i, /\.(jpg|jpeg|png|webp|mp4|opus|pdf|vcf) \(file attached\)$/i, /\(fichier joint\)$/i,
    /^(waiting for this message|en attente de ce message)/i, /^POLL:/, /^SONDAGE ?:/
  ];
  var EDITED = /\s*<(this message was edited|ce message a [ée]t[ée] modifi[ée])>\s*$/i;

  /**
   * Phone numbers and emails out of a text. A number counts as a phone with 9 or more digits, or 7 or more after a plus, with
   * spaces, dots, dashes, slashes, underscores or brackets between its digits. Dates (2026-10-20, 12/10/2026, each with a time)
   * are kept, each on its own, so a phone number written right after one is still found (version 1.17.1).
   */
  var DATE = /\b\d{4}-\d{2}-\d{2}(?:[ T]\d{1,2}:\d{2}(?::\d{2})?)?(?![\d\/_-])|\b\d{1,2}[\/.]\d{1,2}[\/.](?:\d{4}|\d{2})(?![\d\/._-])/g;
  function scrub(text) {
    var keep = [];
    return String(text || '').replace(/[\uE100-\uE8FF]/g, '')
      .replace(DATE, function (m) { keep.push(m); return String.fromCharCode(0xE100 + keep.length - 1); })
      .replace(/[^\s@<>()\[\]"',;:]+@[^\s@<>()\[\]"',;:]+\.[a-z0-9-]{2,}/gi, '[email]')
      .replace(/(\+|\b00)?\d[\d\s().\-\/_\u00A0]{5,}\d/g, function (m, plus) { var n = m.replace(/\D/g, '').length; return n >= 9 || (plus && n >= 7) ? '[phone]' : m; })
      .replace(/[\uE100-\uE8FF]/g, function (c) { return keep[c.charCodeAt(0) - 0xE100]; });
  }
  var looksPhone = function (s) { var d = String(s).replace(/\D/g, ''); return d.length >= 7 && !/[A-Za-zÀ-ɏ]/.test(s); };

  /**
   * The messages of an export: [{ at, sender, text }], oldest first, with what was dropped counted, and whether the dates are
   * day first. opts.order: 'dmy' or 'mdy' to choose when the file does not say (dates where both parts are 12 or less).
   */
  function parse(raw, opts) {
    opts = opts || {};
    var lines = String(raw || '').replace(/\r\n?/g, '\n').split('\n'), heads = [], cur = null, msgs = [];
    lines.forEach(function (line) {
      var l = line.replace(BIDI, '').replace(/ | /g, ' '), m = l.match(HEAD);
      if (m && (m[0].indexOf('-') >= 0 || m[0].indexOf('–') >= 0 || m[0].indexOf(']') >= 0 || /^\[/.test(l))) {
        cur = { p: [Number(m[1]), Number(m[2]), Number(m[3])], ys: m[1].length === 4 ? 0 : 2, h: Number(m[4]), mi: Number(m[5]), s: Number(m[6] || 0), ap: (m[7] || '').replace(/[.\s]/g, '').toLowerCase(), body: l.slice(m[0].length) };
        heads.push(cur); msgs.push(cur);
      } else if (cur) cur.body += '\n' + l;
    });
    // which part of the date is the day: a part over 12 settles it; year first when the first part has four digits
    var dmy = 0, mdy = 0;
    heads.forEach(function (x) { if (x.ys === 0) return; if (x.p[0] > 12) dmy++; if (x.p[1] > 12) mdy++; });
    var order = heads.length && heads[0].ys === 0 ? 'ymd' : dmy && !mdy ? 'dmy' : mdy && !dmy ? 'mdy' : (opts.order === 'mdy' ? 'mdy' : 'dmy');
    if (opts.order && order !== 'ymd' && !(dmy && !mdy) && !(mdy && !dmy)) order = opts.order === 'mdy' ? 'mdy' : 'dmy';
    var ambiguous = order !== 'ymd' && !dmy && !mdy && heads.length > 0;
    var out = [], dropped = 0, names = {}, contacts = 0;
    msgs.forEach(function (x) {
      var d, mo, y;
      if (order === 'ymd') { y = x.p[0]; mo = x.p[1]; d = x.p[2]; } else if (order === 'mdy') { mo = x.p[0]; d = x.p[1]; y = x.p[2]; } else { d = x.p[0]; mo = x.p[1]; y = x.p[2]; }
      if (y < 100) y += 2000;
      var h = x.h; if (x.ap === 'pm' && h < 12) h += 12; if (x.ap === 'am' && h === 12) h = 0;
      var at = new Date(y, mo - 1, d, h, x.mi, x.s).getTime();
      // sender: up to the first colon and space; a line without one is WhatsApp's own (joins, changes, the encryption notice)
      var body = x.body, i = body.indexOf(': ');
      if (i <= 0 || i > 80 || !isFinite(at)) { dropped++; return; }
      var who = body.slice(0, i).replace(/^~\s*/, '').trim(), text = body.slice(i + 2).replace(EDITED, '').trim();
      if (!text || SYSTEM.some(function (re) { return re.test(text); })) { dropped++; return; }
      if (!names[who]) names[who] = looksPhone(who) ? 'Contact ' + (++contacts) : scrub(who).replace(/\[(phone|email)\]/g, '').replace(/\(\s*\)|\[\s*\]/g, '').replace(/\s+/g, ' ').trim() || 'Contact ' + (++contacts);
      out.push({ at: at, sender: names[who], text: scrub(text) });
    });
    out.sort(function (a, b) { return a.at - b.at; });
    return { messages: out, order: order, ambiguous: ambiguous, dropped: dropped, senders: Object.keys(names).length };
  }

  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var stamp = function (ms) { var d = new Date(ms); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()); };
  /** The start of a period: { days: 1, 7 or 30 } back from now, or { since: 'YYYY-MM-DD' }. */
  function since(period, nowMs) {
    period = period || {}; var n = nowMs || Date.now();
    if (period.since && /^\d{4}-\d{2}-\d{2}$/.test(period.since)) { var p = period.since.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]).getTime(); }
    var days = [1, 7, 30].indexOf(Number(period.days)) >= 0 ? Number(period.days) : 7;
    return n - days * 864e5;
  }
  /**
   * What will be sent: the messages from the period, one line each ([date time] sender: text), at most cap characters (40,000),
   * keeping the most recent when it has to cut. Returns the text and what it holds, for the What will be sent box.
   */
  function pack(messages, period, opts) {
    opts = opts || {};
    var cap = opts.cap || 40000, from = since(period, opts.now), list = (messages || []).filter(function (m) { return m.at >= from && m.at <= (opts.now || Date.now()) + 864e5; });
    var lines = list.map(function (m) { return '[' + stamp(m.at) + '] ' + m.sender + ': ' + String(m.text).replace(/\s*\n\s*/g, ' / '); });
    var kept = [], size = 0, cut = false;
    for (var i = lines.length - 1; i >= 0; i--) { if (size + lines[i].length + 1 > cap) { cut = true; break; } kept.unshift(lines[i]); size += lines[i].length + 1; }
    var keptMsgs = list.slice(list.length - kept.length), senders = {};
    keptMsgs.forEach(function (m) { senders[m.sender] = 1; });
    return { text: kept.join('\n'), count: kept.length, senders: Object.keys(senders).length, cut: cut, skipped: list.length - kept.length, first: keptMsgs.length ? keptMsgs[0].at : 0, last: keptMsgs.length ? keptMsgs[keptMsgs.length - 1].at : 0 };
  }

  var MAX_TEXT = 2 * 1024 * 1024, MAX_ZIP = 64 * 1024 * 1024;
  /** The chat text inside a .zip WhatsApp made: _chat.txt (iPhone) or the one .txt (Android). Media files are never opened. */
  function readZip(buf) {
    var b = new Uint8Array(buf), dv = new DataView(b.buffer, b.byteOffset, b.byteLength), end = -1;
    if (b.length > MAX_ZIP) return Promise.reject(new Error('toolarge'));
    for (var i = b.length - 22; i >= Math.max(0, b.length - 65557); i--) if (dv.getUint32(i, true) === 0x06054b50) { end = i; break; }
    if (end < 0) return Promise.reject(new Error('notzip'));
    var count = dv.getUint16(end + 10, true), off = dv.getUint32(end + 16, true), pick = null, txt = [];
    for (var k = 0; k < count && off + 46 <= b.length; k++) {
      if (dv.getUint32(off, true) !== 0x02014b50) break;
      var method = dv.getUint16(off + 10, true), csize = dv.getUint32(off + 20, true), usize = dv.getUint32(off + 24, true), nl = dv.getUint16(off + 28, true), xl = dv.getUint16(off + 30, true), cl = dv.getUint16(off + 32, true), lo = dv.getUint32(off + 42, true);
      var name = new TextDecoder().decode(b.subarray(off + 46, off + 46 + nl)), e = { name: name, method: method, csize: csize, usize: usize, lo: lo };
      if (/(^|\/)_chat\.txt$/i.test(name)) pick = e; else if (/\.txt$/i.test(name) && !/^__MACOSX\//.test(name)) txt.push(e);
      off += 46 + nl + xl + cl;
    }
    pick = pick || (txt.length === 1 ? txt[0] : null);
    if (!pick) return Promise.reject(new Error('nochat'));
    if (pick.usize > MAX_TEXT) return Promise.reject(new Error('toolarge'));
    var start = pick.lo + 30 + dv.getUint16(pick.lo + 26, true) + dv.getUint16(pick.lo + 28, true), data = b.subarray(start, start + pick.csize);
    if (pick.method === 0) return data.length > MAX_TEXT ? Promise.reject(new Error('toolarge')) : Promise.resolve(decode(data));
    if (pick.method !== 8 || typeof DecompressionStream === 'undefined') return Promise.reject(new Error('notzip'));
    // the size written in the zip may lie (a zip bomb): the bytes are counted as they come out, and it stops past 2 MB (version 1.17.1)
    var reader = new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw')).getReader(), parts = [], n = 0;
    var pump = function () {
      return reader.read().then(function (r) {
        if (r.done) return;
        n += r.value.length;
        if (n > MAX_TEXT) { try { reader.cancel(); } catch (e) {} throw new Error('toolarge'); }
        parts.push(r.value); return pump();
      });
    };
    return pump().then(function () { var all = new Uint8Array(n), o = 0; parts.forEach(function (x) { all.set(x, o); o += x.length; }); return decode(all); });
  }
  function decode(bytes) { return new TextDecoder('utf-8').decode(bytes).replace(/^﻿/, ''); }
  /** A file the person picked: .txt up to 2 MB, or .zip (its chat text only). Resolves to the chat text. */
  function readFile(file) {
    if (!file) return Promise.reject(new Error('nofile'));
    var zip = /\.zip$/i.test(file.name || '') || /zip/.test(file.type || '');
    if (!zip && file.size > MAX_TEXT) return Promise.reject(new Error('toolarge'));
    return file.arrayBuffer().then(function (ab) { return zip ? readZip(ab) : decode(new Uint8Array(ab)); });
  }

  var api = { parse: parse, pack: pack, since: since, scrub: scrub, readZip: readZip, readFile: readFile, MAX_TEXT: MAX_TEXT };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.HL_CHAT = api;
})(typeof window !== 'undefined' ? window : this);
