/* Demo only (version 1.16.2): the sales page and the pages for each kind of team show the prices and founding offer set in the demo's
   price editor. The demo app keeps its public price list in this browser under hv-demo-prices; live, main.js reads api?prices instead. */
(function () {
  function apply() {
    try { var r = JSON.parse(localStorage.getItem('hv-demo-prices') || 'null'); if (r && Array.isArray(r.plans) && window.HL_PRICES) window.HL_PRICES.apply(r); } catch (e) {}
  }
  apply();
  window.addEventListener('storage', function (e) { if (e.key === 'hv-demo-prices') apply(); });
  window.addEventListener('pageshow', apply);
})();
