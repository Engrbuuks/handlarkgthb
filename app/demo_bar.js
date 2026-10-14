/* Demo only: the demo bar (who you are viewing as, reset). Loaded right after the bar in the page body. */
(function(){var D=window.HANDLARK_DEMO,sel=document.getElementById('demo-who'),more=document.getElementById('demo-more');if(!D)return;
  sel.value=D.current()||'owner';
  sel.addEventListener('change',function(){D.signInAs(sel.value);location.reload();});
  document.getElementById('demo-reset').addEventListener('click',function(){more.open=false;D.reset();});
  document.addEventListener('click',function(e){if(more.open&&!more.contains(e.target))more.open=false;});})();
