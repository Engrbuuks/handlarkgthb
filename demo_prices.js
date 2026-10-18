/* Demo only (version 1.16.3): the sales page and the pages for each kind of team show the prices and founding offer set in the demo's
   price editor. The demo app keeps its public price list in this browser under hv-demo-prices. When the sales page is served from
   another address than the app, "Back to the sales page" in the demo bar carries the list in the link (#demo-prices=...), and this
   page keeps its own copy for later visits. Every value is checked and turned into a number before it is drawn. Live, main.js reads
   api?prices instead. */
(function () {
  var num = function (v) { v = Number(v); return isFinite(v) && v >= 0 && v < 1e9 ? v : 0; };
  function clean(r) {
    if (!r || !Array.isArray(r.plans)) return null;
    var plans = r.plans.slice(0, 6).filter(function (p) { return p && /^[a-z]{1,20}$/.test(p.id); })
      .map(function (p) { return { id: p.id, usd: num(p.usd), ngn: num(p.ngn), yearly: num(p.yearly), people: num(p.people) }; });
    var o = r.offer, offer = null;
    if (o && num(o.percent) > 0 && num(o.percent) < 100 && !isNaN(new Date(o.endsAt).getTime()))
      offer = { percent: num(o.percent), endsAt: new Date(o.endsAt).toISOString(), spotsLeft: o.spotsLeft === null || o.spotsLeft === undefined ? null : num(o.spotsLeft) };
    return plans.length ? { plans: plans, offer: offer } : null;
  }
  function read() { try { return clean(JSON.parse(localStorage.getItem('hv-demo-prices') || 'null')); } catch (e) { return null; } }
  function apply(r) { if (r && window.HL_PRICES) window.HL_PRICES.apply(r); }
  var m = /[#&]demo-prices=([^&]+)/.exec(location.hash || ''), fromLink = null;
  if (m) {
    try { fromLink = clean(JSON.parse(decodeURIComponent(m[1]))); } catch (e) {}
    if (fromLink) { try { localStorage.setItem('hv-demo-prices', JSON.stringify(fromLink)); } catch (e) {} }
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
  }
  apply(fromLink || read());
  window.addEventListener('storage', function (e) { if (e.key === 'hv-demo-prices') apply(read()); });
  window.addEventListener('pageshow', function () { apply(read() || fromLink); });
})();
