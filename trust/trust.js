/* Trust centre pages: the Print button on the data processing agreement, and the status page drawn from status.js. */
(function () {
  'use strict';
  var p = document.getElementById('print');
  if (p) p.addEventListener('click', function () { window.print(); });
  var box = document.getElementById('status'), S = window.HANDLARK_STATUS;
  if (!box || !S) return;
  var W = { ok: ['Working', 'ok'], degraded: ['Slow or partly working', 'warn'], down: ['Not working', 'bad'], maintenance: ['Planned maintenance', 'info'] };
  var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
  var o = W[S.overall] || W.ok;
  var head = el('div'); head.style.cssText = 'display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:12px';
  head.append(el('span', 'badge ' + o[1], o[0]), el('b', '', S.message || ''));
  var tbl = el('div', 'tbl'), t = el('table'), tb = el('tbody');
  (S.parts || []).forEach(function (x) { var w = W[x.state] || W.ok, tr = el('tr'), a = el('td', '', x.name), b = el('td'); b.append(el('span', 'badge ' + w[1], w[0])); tr.append(a, b); tb.append(tr); });
  t.style.minWidth = '0'; t.append(tb); tbl.append(t);
  box.replaceChildren(head, tbl, el('p', 'note', 'Updated ' + (S.updated || '')));
  box.lastChild.style.cssText = 'margin:8px 0 0;font-size:13px;color:var(--muted)';
  var inc = document.getElementById('incidents');
  if (inc && (S.incidents || []).length) {
    inc.replaceChildren();
    S.incidents.forEach(function (x) { var d = el('div'); d.style.cssText = 'padding:12px 0;border-top:1px solid var(--line)';
      var h = el('p'); h.style.margin = '0 0 4px'; h.append(el('b', '', x.date + ': ' + x.title + ' '), el('span', 'badge ' + (x.state === 'resolved' ? 'ok' : 'warn'), x.state === 'resolved' ? 'Resolved' : 'Ongoing'));
      d.append(h, el('p', '', x.text || '')); d.lastChild.style.margin = '0'; inc.append(d); });
  }
})();
