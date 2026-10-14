/* Sales page and legal pages script. Loaded after app/config.js.
   Contact details come from app/config.js so they live in one place:
     contactEmail     the address customers write to (also shown on the legal pages)
     supportWhatsApp  optional WhatsApp number for support, international format, for example '+2348012345678'
     company          optional registered business name for the legal pages (defaults to the brand)
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
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();

  /* prices */
  var fmt=function(n){return Number(n).toLocaleString('en-US');};
  var CUR='usd',PER='month';
  function show(cur,per){CUR=cur||CUR;PER=per||PER;var y=PER==='year';
    $$('.amt').forEach(function(e){e.innerHTML=(CUR==='usd'?'$':'₦')+fmt(e.getAttribute('data-'+CUR)*(y?10:1))+' <small>/ '+(y?'year':'month')+'</small>';});
    $$('[data-cur]').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-cur')===CUR));});
    $$('[data-per]').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-per')===PER));});}
  $$('[data-cur]').forEach(function(b){b.addEventListener('click',function(){show(b.getAttribute('data-cur'));});});
  $$('[data-per]').forEach(function(b){b.addEventListener('click',function(){show(null,b.getAttribute('data-per'));});});

  /* a customer's referral link: remember the code for sign up, and say what it is worth */
  try{var rf=new URLSearchParams(location.search).get('ref');if(/^[A-Za-z2-9]{7}$/.test(rf||''))localStorage.setItem('hv-ref',rf.toUpperCase());
    if(localStorage.getItem('hv-ref')&&$('.amt')){var bar=document.createElement('div');bar.className='refbar';bar.setAttribute('role','status');
      bar.innerHTML='You were invited by a '+brand.replace(/[<>&"]/g,'')+' customer: <b>44 days free</b> instead of 14 when you sign up.';document.body.insertBefore(bar,document.body.firstChild);
      $$('.lead').forEach(function(e){e.innerHTML=e.innerHTML.replace('14 days free','44 days free');});}}catch(e){}
  if($('.amt')){var ng=false;try{ng=/Africa\/Lagos/.test(Intl.DateTimeFormat().resolvedOptions().timeZone);}catch(e){}
    show(ng?'ngn':'usd');}

  /* live clocks in the hero chip */
  var chip=$('.chip.c1 span:last-child');
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
