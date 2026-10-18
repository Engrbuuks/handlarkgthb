/* Sales page and legal pages script. Loaded after app/config.js.
   Contact details come from app/config.js so they live in one place:
     contactEmail     the address customers write to (also shown on the legal pages)
     supportWhatsApp  optional WhatsApp number for support, international format, for example '+2348012345678'
     company          optional registered business name for the legal pages (defaults to the brand)
     supportChatUrl   optional link to a hosted live chat page (for example Tawk.to's Direct Chat Link), opened in a new tab
     statusUrl        optional link to a public uptime status page (for example Better Stack), shown on the status page and in help
   Every part below checks that its elements exist, so the same file serves every page. */
(function(){
  var cfg=window.APP_CONFIG||{},brand=cfg.brand||'Handlark';
  var email=cfg.supportEmail||cfg.contactEmail||'';
  var wa=String(cfg.supportWhatsApp||'').replace(/[^0-9]/g,'');
  var $=function(s){return document.querySelector(s);},$$=function(s){return document.querySelectorAll(s);};

  $$('[data-brand]').forEach(function(e){e.textContent=brand;});
  $$('[data-cfg="company"]').forEach(function(e){e.textContent=cfg.company||brand;});
  if(document.body.hasAttribute('data-home'))document.title=brand==='Handlark'?'Handlark: hand it over, see it done':brand;
  if(email){
    $$('[data-cfg="email"]').forEach(function(e){e.textContent=email;if(e.tagName==='A')e.href='mailto:'+email;});
    $$('[data-cfg="mailto"]').forEach(function(e){e.href='mailto:'+email;});
  }
  if(wa){$$('[data-cfg="whatsapp"]').forEach(function(e){e.href='https://wa.me/'+wa;e.hidden=false;});}
  /* live chat and the status monitor (version 1.15.0): links to pages of their own, opened in a new tab, never loaded into these pages */
  var chat=String(cfg.supportChatUrl||''),stat=String(cfg.statusUrl||'');
  if(/^https:\/\/[^\s"'<>]+$/.test(chat))$$('[data-cfg="chat"]').forEach(function(e){e.href=chat;e.hidden=false;});
  if(/^https:\/\/[^\s"'<>]+$/.test(stat))$$('[data-cfg="status"]').forEach(function(e){e.href=stat;e.hidden=false;});
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
  /* the API guide: the address of this app's own API */
  var sb=String(cfg.supabaseUrl||'').replace(/\/+$/,'');if(/^https:\/\/[\w.-]+$/.test(sb)&&!/YOUR_PROJECT_REF/.test(sb))$$('[data-cfg="apibase"]').forEach(function(e){e.textContent=sb+'/functions/v1/api/v1';});

  /* prices (version 1.16.0): the cards and data-p numbers carry the starting prices from prices.json (written by tools/sync_prices.mjs),
     so the page is never empty. Then the current prices and any founding offer come from the public price list
     (GET .../functions/v1/api?prices, or pricesUrl in app/config.js), which the platform admin changes in the app. */
  var fmt=function(n){return Number(n).toLocaleString('en-US',{maximumFractionDigits:2});};
  var CUR='usd',PER='month',OFFER=null;
  function show(cur,per){CUR=cur||CUR;PER=per||PER;var y=PER==='year';
    $$('.amt').forEach(function(e){var m=y?Number(e.getAttribute('data-yearly'))||10:1,full=Number(e.getAttribute('data-'+CUR))*m,sym=CUR==='usd'?'$':'₦',per=' <small>/ '+(y?'year':'month')+'</small>';
      if(OFFER){var off=CUR==='usd'?Math.round(full*(100-OFFER.percent))/100:Math.round(full*(100-OFFER.percent)/100);
        e.innerHTML='<s>'+sym+fmt(full)+'</s>'+sym+fmt(off)+per+'<span class="off">Founding price, '+OFFER.percent+'% off for life</span>';}
      else e.innerHTML=sym+fmt(full)+per;});
    $$('[data-cur]').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-cur')===CUR));});
    $$('[data-per]').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-per')===PER));});}
  $$('[data-cur]').forEach(function(b){b.addEventListener('click',function(){show(b.getAttribute('data-cur'));});});
  $$('[data-per]').forEach(function(b){b.addEventListener('click',function(){show(null,b.getAttribute('data-per'));});});
  var cdT=null;
  function countdown(){var box=$('#offer');if(!box||!OFFER)return;var left=new Date(OFFER.endsAt).getTime()-Date.now();
    if(!(left>0)){OFFER=null;box.hidden=true;show();clearInterval(cdT);return;}
    var d=Math.floor(left/864e5),h=Math.floor(left%864e5/36e5),m=Math.floor(left%36e5/6e4),s=Math.floor(left%6e4/1e3);
    var t=d>0?d+(d===1?' day ':' days ')+h+(h===1?' hour':' hours'):h>0?h+(h===1?' hour ':' hours ')+m+(m===1?' minute':' minutes'):m+' min '+s+' s';
    $$('[data-offer="countdown"]').forEach(function(e){e.textContent=t;});}
  function offerShow(o){OFFER=o&&o.percent>0&&new Date(o.endsAt).getTime()>Date.now()&&(o.spotsLeft===null||o.spotsLeft===undefined||o.spotsLeft>0)?o:null;
    $$('#offer').forEach(function(box){box.hidden=!OFFER;});
    if(!OFFER)return;
    $$('[data-offer="percent"]').forEach(function(e){e.textContent=OFFER.percent;});
    $$('[data-offer="spots"]').forEach(function(e){var n=OFFER.spotsLeft;e.hidden=!(n>0);if(n>0)e.textContent=n===1?'1 spot left':n+' spots left';});
    countdown();clearInterval(cdT);cdT=setInterval(countdown,1000);}
  function applyPrices(r){if(!r||!Array.isArray(r.plans))return;
    r.plans.forEach(function(p){if(!p||!/^[a-z]+$/.test(p.id))return;
      $$('.amt[data-plan="'+p.id+'"]').forEach(function(e){if(p.usd>0)e.setAttribute('data-usd',p.usd);if(p.ngn>0)e.setAttribute('data-ngn',p.ngn);if(p.yearly>0)e.setAttribute('data-yearly',p.yearly);});
      var y=Number(p.yearly)||10,v={people:fmt(p.people),usd:fmt(p.usd),ngn:fmt(p.ngn),yearlyUsd:fmt(p.usd*y),yearlyNgn:fmt(p.ngn*y),yearly:String(y),free:(12-y)+(12-y===1?' month':' months')};
      Object.keys(v).forEach(function(k){$$('[data-p="'+p.id+'.'+k+'"]').forEach(function(e){e.textContent=v[k];});});});
    offerShow(r.offer);show();}
  window.HL_PRICES={apply:applyPrices};   // the admin screen's preview and the walkthroughs use the same drawing
  var sbase=String(cfg.supabaseUrl||'').replace(/\/+$/,''),purl=String(cfg.pricesUrl||'')||(/^https:\/\/[\w.-]+$/.test(sbase)&&!/YOUR_PROJECT_REF/.test(sbase)?sbase+'/functions/v1/api?prices':'');
  if(/^https:\/\/[^\s"'<>]+$/.test(purl)&&document.body.hasAttribute('data-prices')&&window.fetch){   // only pages whose policy allows it (site/_headers)
    fetch(purl,{credentials:'omit'}).then(function(r){return r.ok?r.json():null;}).then(applyPrices).catch(function(){});}

  /* the hero headline turns through the problems Handlark solves and what it brings, one pair at a time (version 1.16.3).
     Screen readers get the first pair only; with reduced motion, or with the tab hidden, it stays still. */
  var rot=$$('.rotor .pair');
  if(rot.length>1){var ri=0,still=false;try{still=matchMedia('(prefers-reduced-motion: reduce)').matches;}catch(e){}
    if(!still)setInterval(function(){if(document.hidden)return;rot[ri].classList.remove('on');ri=(ri+1)%rot.length;rot[ri].classList.add('on');},3400);}

  /* a customer's referral link: remember the code for sign up, and say what it is worth */
  try{var rf=new URLSearchParams(location.search).get('ref');if(/^[A-Za-z2-9]{7}$/.test(rf||''))localStorage.setItem('hv-ref',rf.toUpperCase());
    if(localStorage.getItem('hv-ref')&&$('.amt')){var bar=document.createElement('div');bar.className='refbar';bar.setAttribute('role','status');
      bar.innerHTML='You were invited by a '+brand.replace(/[<>&"]/g,'')+' customer: <b>44 days free</b> instead of 14 when you sign up.';document.body.insertBefore(bar,document.body.firstChild);
      $$('.lead').forEach(function(e){e.innerHTML=e.innerHTML.replace('14 days free','44 days free');});}}catch(e){}
  if($('.amt')){var ng=false;try{ng=/Africa\/Lagos/.test(Intl.DateTimeFormat().resolvedOptions().timeZone);}catch(e){}
    show(ng?'ngn':'usd');}

  /* live clocks: any [data-clock] box shows Lagos and Chicago time */
  var chip=$('[data-clock]');
  function clocks(){try{var f=function(tz){return new Intl.DateTimeFormat('en-GB',{timeZone:tz,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date());};
    chip.innerHTML='<b>'+f('Africa/Lagos')+' Lagos</b><small>'+f('America/Chicago')+' Chicago</small>';}catch(e){}}
  if(chip){clocks();setInterval(clocks,30000);}

  /* email boxes go straight to sign up with the email filled in */
  $$('form[data-mail]').forEach(function(f){f.addEventListener('submit',function(ev){ev.preventDefault();var v=f.querySelector('input').value.trim();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){f.querySelector('input').focus();return;}location.href='app/?signup&email='+encodeURIComponent(v);});});

  /* mobile menu */
  var m=document.getElementById('menu'),d=document.getElementById('drawer');
  if(m&&d){m.addEventListener('click',function(){var o=!d.classList.contains('open');d.classList.toggle('open',o);m.setAttribute('aria-expanded',String(o));});
    d.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){d.classList.remove('open');m.setAttribute('aria-expanded','false');});});}
})();
