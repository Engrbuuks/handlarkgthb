/* Handlark importers: Excel workbooks (.xlsx) and Trello board exports, read in the browser with no library.
   Both give the same rows or items the paste and CSV importer already uses, so the preview and confirm step is shared.
   The same file runs in node for the tests (test/features.test.js loads it with vm). Nothing here touches the network. */
(function (root) {
  'use strict';
  var MAX_FILE = 10 * 1048576;        // the largest workbook or board export we read
  var MAX_UNZIPPED = 60 * 1048576;    // all the parts we unpack together, so a zip bomb stops early
  var MAX_ROWS = 5000, MAX_COLS = 60;

  function fail(msg) { var e = new Error(msg); e.importer = true; return e; }
  function u16(b, i) { return b[i] | (b[i + 1] << 8); }
  function u32(b, i) { return (b[i] | (b[i + 1] << 8) | (b[i + 2] << 16)) + b[i + 3] * 16777216; }
  function concat(parts, n) { var out = new Uint8Array(n), at = 0; parts.forEach(function (p) { out.set(p, at); at += p.length; }); return out; }
  function utf8(b) { return new TextDecoder('utf-8').decode(b); }

  /* ---------- zip: the central directory, stored and deflated entries, with a cap on what is unpacked ---------- */
  function zipEntries(b) {
    if (!(b instanceof Uint8Array) || b.length < 22) throw fail('This file is not an Excel workbook');
    var end = -1;
    for (var i = b.length - 22; i >= Math.max(0, b.length - 65557); i--) if (u32(b, i) === 0x06054b50) { end = i; break; }
    if (end < 0) throw fail('This file is not an Excel workbook. Save it as .xlsx and try again');
    var count = u16(b, end + 10), off = u32(b, end + 16), list = [];
    if (count === 0xFFFF || off === 0xFFFFFFFF) throw fail('This workbook is too large to read here. Save it as CSV instead');
    for (var k = 0; k < count; k++) {
      if (off + 46 > b.length || u32(b, off) !== 0x02014b50) throw fail('This workbook looks damaged. Open it in Excel and save it again');
      var nameLen = u16(b, off + 28), extra = u16(b, off + 30), note = u16(b, off + 32);
      list.push({ name: utf8(b.subarray(off + 46, off + 46 + nameLen)), method: u16(b, off + 10), flags: u16(b, off + 8),
        size: u32(b, off + 20), full: u32(b, off + 24), local: u32(b, off + 42) });
      off += 46 + nameLen + extra + note;
    }
    return list;
  }
  function inflateRaw(data, cap) {
    if (typeof DecompressionStream === 'undefined') return Promise.reject(fail('This browser cannot open Excel files. Save the sheet as CSV instead'));
    var ds = new DecompressionStream('deflate-raw'), w = ds.writable.getWriter(), r = ds.readable.getReader(), parts = [], n = 0;
    w.write(data).catch(function () {}); w.close().catch(function () {});
    return (function pull() {
      return r.read().then(function (x) {
        if (x.done) return concat(parts, n);
        n += x.value.length;
        if (n > cap.left) { r.cancel().catch(function () {}); throw fail('This workbook unpacks to far more than its size. It cannot be imported'); }
        parts.push(x.value); return pull();
      });
    })().then(function (out) { cap.left -= out.length; return out; }, function (e) { throw e && e.importer ? e : fail('This workbook looks damaged. Open it in Excel and save it again'); });
  }
  /** Unpacks the named entries of a zip. Missing ones come back undefined. */
  function unzip(b, names, cap) {
    cap = cap || { left: MAX_UNZIPPED };
    var list = zipEntries(b), out = {}, chain = Promise.resolve();
    names.forEach(function (name) {
      var e = list.find(function (x) { return x.name === name; });
      if (!e) return;
      chain = chain.then(function () {
        if (e.flags & 1) throw fail('This workbook is protected with a password. Remove the password and try again');
        var at = e.local;
        if (at + 30 > b.length || u32(b, at) !== 0x04034b50) throw fail('This workbook looks damaged. Open it in Excel and save it again');
        var start = at + 30 + u16(b, at + 26) + u16(b, at + 28), data = b.subarray(start, start + e.size);
        if (e.method === 0) { if (data.length > cap.left) throw fail('This workbook is too large to import'); cap.left -= data.length; out[name] = data.slice(); return; }
        if (e.method !== 8) throw fail('This workbook uses a kind of packing we cannot read. Save it again from Excel');
        return inflateRaw(data, cap).then(function (x) { out[name] = x; });
      });
    });
    return chain.then(function () { return out; });
  }

  /* ---------- the little XML we need ---------- */
  function unxml(s) {
    return String(s).replace(/&(#x[0-9a-f]+|#\d+|lt|gt|amp|quot|apos);/gi, function (m, c) {
      var l = c.toLowerCase();
      if (l === 'lt') return '<'; if (l === 'gt') return '>'; if (l === 'amp') return '&'; if (l === 'quot') return '"'; if (l === 'apos') return "'";
      var n = l.charAt(1) === 'x' ? parseInt(l.slice(2), 16) : parseInt(l.slice(1), 10);
      try { return String.fromCodePoint(n); } catch (e) { return ''; }
    }).replace(/_x([0-9A-Fa-f]{4})_/g, function (m, h) { return String.fromCharCode(parseInt(h, 16)); });
  }
  function attr(tag, name) { var m = tag.match(new RegExp('\\s(?:\\w+:)?' + name + '\\s*=\\s*("([^"]*)"|\'([^\']*)\')')); return m ? unxml(m[2] !== undefined ? m[2] : m[3]) : ''; }
  /** The text of a shared string or inline string: every <t> outside phonetic runs, joined. */
  function textOf(xml) {
    var s = String(xml).replace(/<(\w+:)?rPh\b[\s\S]*?<\/(\w+:)?rPh>/g, ''), out = '', re = /<(?:\w+:)?t(?:\s[^>]*)?\/>|<(?:\w+:)?t(?:\s[^>]*)?>([\s\S]*?)<\/(?:\w+:)?t>/g, m;
    while ((m = re.exec(s))) out += m[1] ? unxml(m[1]) : '';
    return out;
  }
  function colIndex(ref) { var m = /^([A-Z]+)/i.exec(ref || ''), n = 0; if (!m) return -1; for (var i = 0; i < m[1].length; i++) n = n * 26 + (m[1].toUpperCase().charCodeAt(i) - 64); return n - 1; }

  /* ---------- dates: Excel keeps them as day numbers ---------- */
  var DATE_IDS = { 14: 1, 15: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 45: 1, 46: 1, 47: 1, 50: 1, 51: 1, 52: 1, 53: 1, 54: 1, 55: 1, 56: 1, 57: 1, 58: 1 };
  /** Whether a number format shows a date or time: d, m, y, h or s outside quoted text and [colour] codes. */
  function isDateFormat(code) {
    var s = String(code || '').replace(/"[^"]*"/g, '').replace(/\\./g, '').replace(/\[(?!h\]|m\]|s\])[^\]]*\]/gi, '');
    return /[dmyhs]/i.test(s) && !/^(General|@)$/i.test(s.trim());
  }
  /** An Excel day number as YYYY-MM-DD, with HH:MM when it has a time. The 1900 system copies Lotus 1-2-3's leap day in 1900. */
  function excelDate(v, date1904) {
    var n = Number(v);
    if (!isFinite(n) || n < 0 || n > 2958465) return String(v);
    var days = Math.floor(n), secs = Math.round((n - days) * 86400);
    if (secs >= 86400) { days++; secs -= 86400; }
    var base = date1904 ? Date.UTC(1904, 0, 1) : days >= 61 ? Date.UTC(1899, 11, 30) : Date.UTC(1899, 11, 31);
    var d = new Date(base + days * 864e5 + secs * 1000), iso = d.toISOString();
    return secs ? iso.slice(0, 10) + ' ' + iso.slice(11, 16) : iso.slice(0, 10);
  }
  function numText(v) { var n = Number(v); if (!isFinite(n)) return String(v); return Math.abs(n) >= 1e15 || Number.isInteger(n) ? String(n) : String(Number(n.toPrecision(12))); }

  /* ---------- workbooks ---------- */
  function resolve(target) { var t = String(target || ''); if (t.charAt(0) === '/') return t.slice(1); var parts = ('xl/' + t).split('/'), out = []; parts.forEach(function (p) { if (p === '..') out.pop(); else if (p && p !== '.') out.push(p); }); return out.join('/'); }
  /**
   * Opens an .xlsx file. Resolves to { sheets: [{ name, hidden }], rows(index) } where rows(index) resolves to the rows of
   * that sheet as arrays of text, the shape the CSV importer reads. Shared strings, inline strings, booleans, numbers and
   * dates (found through the cell's number format) are all turned into text.
   */
  function readXlsx(bytes) {
    var b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    if (b.length > MAX_FILE) return Promise.reject(fail('Files can be up to 10 MB'));
    var cap = { left: MAX_UNZIPPED };
    return Promise.resolve().then(function () { return unzip(b, ['xl/workbook.xml', 'xl/_rels/workbook.xml.rels', 'xl/sharedStrings.xml', 'xl/styles.xml'], cap); }).then(function (parts) {
      if (!parts['xl/workbook.xml']) throw fail('This file is not an Excel workbook. Save it as .xlsx and try again');
      var wb = utf8(parts['xl/workbook.xml']), rels = parts['xl/_rels/workbook.xml.rels'] ? utf8(parts['xl/_rels/workbook.xml.rels']) : '';
      var pr = (wb.match(/<(?:\w+:)?workbookPr\b[^>]*>/) || [''])[0], d1904 = /^(1|true)$/i.test(attr(pr, 'date1904'));
      var targets = {};
      (rels.match(/<(?:\w+:)?Relationship\b[^>]*>/g) || []).forEach(function (t) { targets[attr(t, 'Id')] = resolve(attr(t, 'Target')); });
      var sheets = (wb.match(/<(?:\w+:)?sheet\b[^>]*>/g) || []).map(function (t) { return { name: attr(t, 'name') || 'Sheet', hidden: /hidden/i.test(attr(t, 'state')), path: targets[attr(t, 'id')] || '' }; }).filter(function (x) { return x.path; });
      if (!sheets.length) throw fail('This workbook has no sheets we can read');
      var strings = [];
      if (parts['xl/sharedStrings.xml']) { var ss = utf8(parts['xl/sharedStrings.xml']), re = /<(?:\w+:)?si\b[^>]*\/>|<(?:\w+:)?si\b[^>]*>([\s\S]*?)<\/(?:\w+:)?si>/g, m; while ((m = re.exec(ss))) strings.push(m[1] ? textOf(m[1]) : ''); }
      var dateXf = [];
      if (parts['xl/styles.xml']) {
        var st = utf8(parts['xl/styles.xml']), custom = {};
        (st.match(/<(?:\w+:)?numFmt\b[^>]*>/g) || []).forEach(function (t) { custom[attr(t, 'numFmtId')] = attr(t, 'formatCode'); });
        var xfs = (st.match(/<(?:\w+:)?cellXfs\b[^>]*>([\s\S]*?)<\/(?:\w+:)?cellXfs>/) || ['', ''])[1];
        (xfs.match(/<(?:\w+:)?xf\b[^>]*>/g) || []).forEach(function (t) { var id = attr(t, 'numFmtId'); dateXf.push(!!(DATE_IDS[id] || (custom[id] !== undefined && isDateFormat(custom[id])))); });
      }
      return {
        sheets: sheets.map(function (x) { return { name: x.name, hidden: x.hidden }; }),
        date1904: d1904,
        rows: function (index) {
          var sh = sheets[index || 0];
          if (!sh) return Promise.reject(fail('That sheet is not in this workbook'));
          return Promise.resolve().then(function () { return unzip(b, [sh.path], cap); }).then(function (got) {
            if (!got[sh.path]) throw fail('That sheet is empty or missing');
            return sheetRows(utf8(got[sh.path]), strings, dateXf, d1904);
          });
        }
      };
    });
  }
  function sheetRows(xml, strings, dateXf, d1904) {
    var rows = [], next = 0, rowRe = /<(?:\w+:)?row\b([^>]*?)(?:\/>|>([\s\S]*?)<\/(?:\w+:)?row>)/g, m;
    while ((m = rowRe.exec(xml)) && rows.length <= MAX_ROWS) {
      var r = Number(attr('<x ' + m[1] + '>', 'r')) || next + 1;
      if (r > MAX_ROWS + 1) break;
      next = r;
      var cells = [], col = 0, cellRe = /<(?:\w+:)?c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/(?:\w+:)?c>)/g, c;
      while ((c = cellRe.exec(m[2] || ''))) {
        var tag = '<c ' + c[1] + '>', inner = c[2] || '', ci = colIndex(attr(tag, 'r'));
        if (ci < 0) ci = col;
        col = ci + 1;
        if (ci >= MAX_COLS) continue;
        var t = attr(tag, 't'), v = (inner.match(/<(?:\w+:)?v\b[^>]*>([\s\S]*?)<\/(?:\w+:)?v>/) || [])[1], val = '';
        if (t === 's') val = strings[Number(v)] || '';
        else if (t === 'inlineStr') val = textOf((inner.match(/<(?:\w+:)?is\b[^>]*>([\s\S]*?)<\/(?:\w+:)?is>/) || ['', ''])[1]);
        else if (t === 'b') val = v === undefined ? '' : String(v).trim() === '1' ? 'TRUE' : 'FALSE';
        else if (t === 'str' || t === 'e') val = v === undefined ? '' : unxml(v);
        else if (t === 'd') val = v === undefined ? '' : unxml(v).slice(0, 16).replace('T', ' ').replace(/ 00:00$/, '');
        else if (v !== undefined && String(v).trim() !== '') val = dateXf[Number(attr(tag, 's')) || 0] ? excelDate(v, d1904) : numText(unxml(v).trim());
        while (cells.length < ci) cells.push('');
        cells[ci] = val;
      }
      while (rows.length < r - 1) rows.push([]);
      rows[r - 1] = cells;
    }
    var width = 0;
    rows.forEach(function (x) { for (var i = x.length - 1; i >= 0; i--) if (String(x[i]).trim()) { width = Math.max(width, i + 1); break; } });
    return rows.map(function (x) { var o = x.slice(0, width); while (o.length < width) o.push(''); return o; }).filter(function (x) { return x.some(function (v) { return String(v).trim(); }); });
  }

  /* ---------- Trello board exports ---------- */
  var STATUSES = ['new', 'in_progress', 'waiting', 'done'];
  /** A sensible status for a Trello list from its name; the person can change each one before importing. */
  function trelloStatus(name) {
    var n = String(name || '').toLowerCase();
    if (/\b(done|complete[d]?|finished|closed|shipped|delivered|paid|archived?)\b/.test(n)) return 'done';
    if (/\b(wait(ing)?|blocked|on hold|hold|pending|stuck|parked)\b/.test(n)) return 'waiting';
    if (/\b(doing|in progress|progress|working|started|active|current|this week|today|review|testing|qa)\b/.test(n)) return 'in_progress';
    return 'new';
  }
  /** Reads a Trello board export (Menu, Print, export and share, Export as JSON). Throws when it is something else. */
  function trelloParse(input) {
    var j = input;
    if (typeof input === 'string') { if (input.length > MAX_FILE) throw fail('Files can be up to 10 MB'); try { j = JSON.parse(input); } catch (e) { throw fail('This is not a Trello board export. In Trello choose Menu, Print, export and share, Export as JSON'); } }
    if (!j || typeof j !== 'object' || !Array.isArray(j.cards) || !Array.isArray(j.lists)) throw fail('This is not a Trello board export. In Trello choose Menu, Print, export and share, Export as JSON');
    var count = {};
    j.cards.forEach(function (c) { if (c && c.idList) count[c.idList] = (count[c.idList] || 0) + 1; });
    return {
      name: String(j.name || 'Trello board').slice(0, 80),
      lists: j.lists.filter(function (l) { return l && l.id; }).map(function (l) { return { id: String(l.id), name: String(l.name || 'List').slice(0, 120), closed: !!l.closed, cards: count[l.id] || 0, status: trelloStatus(l.name) }; }),
      archivedCards: j.cards.filter(function (c) { return c && c.closed; }).length,
      raw: j
    };
  }
  /**
   * Trello cards as import items: { title, details, due, status, client, assignee, priority, checklist }.
   * o.status: list id to new, in_progress, waiting, done or skip. o.archived: also bring archived cards (and cards on
   * archived lists). o.client: 'board' (the board name), 'label' (each card's first label), 'list' or 'none'.
   * o.person(name): a person id for a Trello member name, or ''. o.day(iso): the date of a due time (defaults to its UTC date).
   */
  function trelloItems(board, o) {
    o = o || {};
    var j = board.raw, lists = {}, labels = {}, members = {}, checks = {};
    board.lists.forEach(function (l) { lists[l.id] = l; });
    (j.labels || []).forEach(function (l) { if (l && l.id) labels[l.id] = l; });
    (j.members || []).forEach(function (m) { if (m && m.id) members[m.id] = m; });
    (j.checklists || []).forEach(function (c) { if (c && c.idCard) (checks[c.idCard] = checks[c.idCard] || []).push(c); });
    var day = o.day || function (iso) { return String(iso || '').slice(0, 10); };
    var person = o.person || function () { return ''; };
    return j.cards.slice().sort(function (a, b) { return (Number(a.pos) || 0) - (Number(b.pos) || 0); }).map(function (c) {
      if (!c || !c.name) return null;
      var l = lists[c.idList] || { name: '', closed: false, status: 'new' };
      if ((c.closed || l.closed) && !o.archived) return null;
      var st = (o.status && o.status[c.idList]) || l.status || 'new';
      if (st === 'skip') return null;
      if (STATUSES.indexOf(st) < 0) st = 'new';
      if (c.dueComplete) st = 'done';
      var labs = (c.labels && c.labels.length ? c.labels : (c.idLabels || []).map(function (id) { return labels[id]; })).filter(Boolean).map(function (x) { return String(x.name || x.color || '').trim(); }).filter(Boolean);
      var client = o.client === 'label' ? labs[0] || '' : o.client === 'list' ? l.name : o.client === 'none' ? '' : board.name;
      var shown = o.client === 'label' ? labs.slice(1) : labs;
      var who = '';
      (c.idMembers || []).some(function (id) { var m = members[id]; if (!m) return false; who = person(m.fullName || '') || person(m.username || ''); return !!who; });
      var cl = [], many = (checks[c.id] || []).length > 1;
      (checks[c.id] || []).sort(function (a, b) { return (Number(a.pos) || 0) - (Number(b.pos) || 0); }).forEach(function (ck) {
        (ck.checkItems || []).slice().sort(function (a, b) { return (Number(a.pos) || 0) - (Number(b.pos) || 0); }).forEach(function (it) {
          if (it && it.name && cl.length < 100) cl.push({ text: String((many ? ck.name + ': ' : '') + it.name).slice(0, 300), done: it.state === 'complete' });
        });
      });
      var details = [String(c.desc || '').trim(), shown.length ? 'Labels: ' + shown.join(', ') : ''].filter(Boolean).join('\n\n').slice(0, 5000);
      return { title: String(c.name).trim().slice(0, 300), details: details, due: c.due ? day(c.due) : '', status: st, client: String(client || '').slice(0, 80), assignee: who,
        priority: labs.some(function (x) { return /urgent|high|priority|asap/i.test(x); }) ? 'high' : 'normal', checklist: cl };
    }).filter(Boolean);
  }

  var api = { MAX_FILE: MAX_FILE, MAX_UNZIPPED: MAX_UNZIPPED, unzip: unzip, readXlsx: readXlsx, excelDate: excelDate, isDateFormat: isDateFormat,
    trelloParse: trelloParse, trelloItems: trelloItems, trelloStatus: trelloStatus, STATUSES: STATUSES };
  root.HLImport = api;
})(typeof self !== 'undefined' ? self : globalThis);
