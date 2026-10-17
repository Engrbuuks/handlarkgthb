/* Handlark help centre search (version 1.15.0). Everything happens in the browser, from search_index.js (built with the pages by
   tools/build_pages.py): no server, no outside library and nothing sent anywhere. Article pages send a search to index.html?q=. */
(function () {
  'use strict';
  var IDX = window.HELP_INDEX || [], $ = function (s) { return document.querySelector(s); };
  var fold = function (s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
  var words = function (q) { return fold(q).split(/[^a-z0-9%]+/).filter(function (w) { return w.length > 1 || /\d/.test(w); }).slice(0, 8); };
  var STOP = { the: 1, and: 1, how: 1, do: 1, can: 1, my: 1, to: 1, is: 1, in: 1, of: 1, for: 1, an: 1, on: 1, it: 1, what: 1, why: 1, does: 1, with: 1, are: 1 };
  IDX.forEach(function (d) { d._t = fold(d.t); d._s = fold(d.s); d._k = fold(d.k); d._b = fold(d.b); });

  function score(d, ws) {
    var total = 0, hits = 0;
    ws.forEach(function (w) {
      var s = 0, re = new RegExp('(^|[^a-z0-9])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      if (re.test(d._t)) s += 8; else if (d._t.indexOf(w) >= 0) s += 4;
      if (re.test(d._k)) s += 5;
      if (re.test(d._s)) s += 3;
      if (re.test(d._b)) s += 1 + Math.min(3, d._b.split(w).length - 1) * 0.5;
      if (s) hits++;
      total += s;
    });
    return { total: total, all: hits === ws.length };
  }
  function search(q) {
    var ws = words(q).filter(function (w) { return !STOP[w]; });
    if (!ws.length) ws = words(q);
    if (!ws.length) return [];
    var list = IDX.map(function (d) { var r = score(d, ws); return { d: d, s: r.total, all: r.all }; }).filter(function (x) { return x.s > 0; });
    var strict = list.filter(function (x) { return x.all; });
    return (strict.length ? strict : list).sort(function (a, b) { return b.s - a.s; }).slice(0, 20).map(function (x) { return x.d; });
  }
  /** The sentence of the article that best shows why it matched, with the words marked. */
  function snippet(d, q) {
    var ws = words(q), sents = String(d.b || d.s).split(/(?<=[.!?])\s+/), best = d.s, top = 0;
    sents.forEach(function (s) { var f = fold(s), n = ws.filter(function (w) { return f.indexOf(w) >= 0; }).length; if (n > top) { top = n; best = s; } });
    return best.length > 220 ? best.slice(0, 217) + '…' : best;
  }
  /**
   * The folded text (lower case, accents taken off) with, for each of its characters, where it came from in the original. Folding
   * can change the length (a letter typed as e plus a combining accent becomes one e, some capitals become two characters), so a
   * match found in the folded text is mapped back to the original through this, never by its position alone (version 1.15.1).
   */
  function foldMap(text) {
    var out = '', at = [], i = 0, t = String(text || '');
    while (i < t.length) {
      var cp = t.codePointAt(i), ch = String.fromCodePoint(cp), j = i + ch.length;
      while (j < t.length && /[\u0300-\u036f]/.test(t[j])) j++;   // combining accents belong to the letter before them
      var f = fold(t.slice(i, j));
      for (var k = 0; k < f.length; k++) at.push(i);
      out += f; i = j;
    }
    at.push(t.length);
    return { s: out, at: at };
  }
  function marked(el, text, q) {
    var ws = words(q).filter(function (w) { return w.length > 2; });
    if (!ws.length) { el.textContent = text; return; }
    var re = new RegExp('(' + ws.map(function (w) { return w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')', 'ig'), last = 0, m;
    var fm = foldMap(text), plain = fm.s;
    while ((m = re.exec(plain)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      var a = fm.at[m.index], e = m.index + m[0].length < fm.at.length - 1 ? fm.at[m.index + m[0].length] : text.length;
      if (a < last) continue;
      if (a > last) el.append(text.slice(last, a));
      var k = document.createElement('mark'); k.textContent = text.slice(a, e); el.append(k);
      last = e;
    }
    if (last < text.length) el.append(text.slice(last));
  }
  window.HL_HELP_SEARCH = { fold: fold, foldMap: foldMap, marked: marked, search: search };
  function show(q) {
    var res = $('#results'), cnt = $('#count'), cats = $('#browse');
    if (!res) return;
    res.replaceChildren();
    if (!q.trim()) { cnt.textContent = ''; if (cats) cats.hidden = false; return; }
    var hits = search(q);
    if (cats) cats.hidden = hits.length > 0;
    cnt.textContent = hits.length ? hits.length + (hits.length === 1 ? ' article matches ' : ' articles match ') + '“' + q.trim() + '”' : 'Nothing matches “' + q.trim() + '”. Try other words, or ask us below.';
    hits.forEach(function (d) {
      var li = document.createElement('li'), a = document.createElement('a'), b = document.createElement('b'), s = document.createElement('small');
      a.href = d.u; marked(b, d.t, q); marked(s, snippet(d, q), q);
      a.append(b, s); li.append(a); res.append(li);
    });
  }
  var form = $('#search'), input = $('#q');
  if (!form || !input) return;
  var onIndex = !!$('#results');
  if (onIndex) {
    var q0 = '';
    try { q0 = new URLSearchParams(location.search).get('q') || ''; } catch (e) {}
    if (q0) { input.value = q0; show(q0); }
    var t = null;
    input.addEventListener('input', function () { clearTimeout(t); t = setTimeout(function () { show(input.value); try { history.replaceState(null, '', input.value.trim() ? '?q=' + encodeURIComponent(input.value.trim()) : location.pathname); } catch (e) {} }, 150); });
    form.addEventListener('submit', function (e) { e.preventDefault(); show(input.value); var c = $('#count'); if (c) c.focus(); });
  }
})();
