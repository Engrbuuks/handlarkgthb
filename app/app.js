/* Handlark app. Loaded by index.html at the end of the page, after config.js and importers.js. */
(function(){
'use strict';
/* ---------- tiny helpers ---------- */
var $=function(s,r){return (r||document).querySelector(s);};
function h(tag,attrs){var e=document.createElement(tag),val,k,v;
  if(attrs)for(k in attrs){v=attrs[k];if(v==null||v===false)continue;
    if(k==='class')e.className=v;else if(k==='text')e.textContent=v;else if(k==='html')e.innerHTML=v;else if(k==='value')val=v;
    else if(k==='style')e.style.cssText=v;else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),v);else e.setAttribute(k,v===true?'':v);}
  var kids=Array.prototype.slice.call(arguments,2);
  (function add(a){a.forEach(function(c){if(c==null||c===false)return;if(Array.isArray(c))return add(c);e.append(c.nodeType?c:document.createTextNode(String(c)));});})(kids);
  if(val!==undefined)e.value=val;return e;}
var P=function(d){return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>';};
var I={
  home:P('<rect x="3.5" y="3.5" width="7" height="7" rx="2.2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2.2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2.2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2.2"/>'),
  tasks:P('<path d="M9 6h11M9 12h11M9 18h11"/><path d="M3.5 6l1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2"/>'),
  cal:P('<rect x="3" y="5" width="18" height="16" rx="4"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  chart:P('<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M8 16v-3M12 16V8M16 16v-5"/>'),
  plus:P('<path d="M12 5v14M5 12h14"/>'),video:P('<rect x="3" y="6" width="13" height="12" rx="3"/><path d="M16 10l5-3v10l-5-3"/>'),bell:P('<path d="M6 9a6 6 0 1112 0c0 6 2 7 2 7H4s2-1 2-7zM10 20a2 2 0 004 0"/>'),
  l:P('<path d="M15 5l-7 7 7 7"/>'),r:P('<path d="M9 5l7 7-7 7"/>'),x:P('<path d="M6 6l12 12M18 6L6 18"/>'),
  gear:P('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>'),
  cog:P('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>'),
  search:P('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),mic:P('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>'),pin:P('<path d="M12 21s-7-6.2-7-11.2a7 7 0 0114 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.6"/>'),
  check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>'
};
var LOGO='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><rect width="1000" height="1000" rx="220" fill="#2E1C47"/><g transform="translate(140.0 214.3) scale(0.8072)"><path fill="#FFFFFF" fill-rule="evenodd" d="M22.7 707.5C13.7 704.4 11.4 697.3 16.6 689.4C24.4 677.6 51.1 654.9 87.2 629.0C102.4 618.2 102.5 618.1 88.5 620.7C73.8 623.5 38.1 623.2 27.2 620.2C7.3 614.8 -2.7 605.6 1.5 596.6C4.1 591.2 10.3 588.8 47.0 578.9C172.7 545.0 237.8 521.1 299.5 486.0C317.6 475.7 317.7 475.5 305.2 474.6C234.8 469.1 166.1 440.7 122.8 399.1C92.7 370.2 82.7 345.4 99.2 340.9C102.8 340.0 105.3 340.1 114.6 341.9C130.8 344.9 131.3 344.7 122.2 337.9C89.5 313.3 59.7 268.6 47.7 226.5C39.9 199.1 40.4 184.7 49.4 181.7C54.5 180.0 58.8 182.0 78.3 194.9C113.5 218.3 142.7 235.2 173.4 250.0C201.7 263.7 233.4 276.9 234.7 275.6C235.1 275.2 232.3 271.9 228.5 268.2C192.0 233.2 170.3 194.4 168.3 160.3C166.3 127.0 180.6 120.0 209.9 139.9C215.7 143.9 218.0 144.8 218.0 143.2C218.0 142.8 215.8 137.0 213.1 130.5C195.1 86.9 192.1 43.0 205.1 15.0C210.2 4.1 216.9 -1.1 224.1 0.5C229.0 1.6 234.9 7.8 250.3 27.8C282.0 69.1 305.2 95.2 360.5 152.0C427.5 220.7 449.7 250.8 465.3 294.0C473.6 317.0 475.4 327.8 475.5 354.8C475.5 367.5 475.8 378.0 476.1 378.0C476.8 378.0 483.4 370.5 494.5 357.0C533.7 309.5 556.4 293.0 589.7 288.1C622.1 283.2 652.6 297.3 670.8 325.5C673.6 329.9 676.6 334.5 677.4 335.6C678.2 336.8 687.8 342.6 698.7 348.5C709.6 354.4 720.9 360.8 723.8 362.7C728.8 365.9 732.1 370.2 730.7 371.6C730.3 372.0 716.7 371.5 700.3 370.5L670.5 368.6L663.0 372.6C658.0 375.2 652.5 379.3 646.6 385.0C631.9 399.0 621.7 413.8 594.5 460.5C568.5 505.0 557.3 520.8 538.1 540.1C517.3 560.9 495.9 575.2 469.0 586.2C427.8 603.1 388.4 607.3 326.0 601.6C287.6 598.0 273.5 597.4 261.5 598.9C231.0 602.8 213.8 611.5 154.5 653.0C101.3 690.3 72.1 704.2 39.1 708.0C28.3 709.2 27.3 709.2 22.7 707.5ZM622.6 358.1C639.6 350.4 634.1 325.0 615.4 325.0C601.3 325.0 592.9 341.4 601.4 352.5C604.6 356.6 610.9 360.0 615.5 360.0C617.1 360.0 620.4 359.1 622.6 358.1Z"/><path fill="#FF7059" fill-rule="evenodd" d="M715.0 551.1C701.4 546.9 693.4 537.2 689.1 519.5C686.2 507.9 669.1 443.8 663.8 425.0C659.1 408.4 658.5 400.6 661.4 392.2C663.7 385.3 669.6 378.0 676.0 374.1C679.0 372.2 680.8 370.5 680.4 369.8C679.9 369.1 681.3 368.9 685.1 369.3C695.8 370.5 730.0 372.3 730.7 371.7C732.2 370.1 728.6 365.7 722.9 362.0C719.5 359.8 717.5 358.0 718.4 358.0C719.4 358.0 743.2 351.6 771.3 343.8C820.8 330.0 822.8 329.5 832.0 329.5C842.8 329.5 846.1 330.8 854.0 337.8C862.9 345.6 861.8 342.1 886.4 445.2C895.5 483.2 895.2 490.9 884.3 503.0C878.4 509.6 873.6 511.9 857.0 516.5C849.6 518.5 831.1 523.7 816.0 528.0C729.6 552.6 724.1 553.8 715.0 551.1Z"/><path fill="#FFFFFF" fill-rule="evenodd" d="M760.5 492.7C751.9 487.7 718.4 465.3 717.1 463.7C713.0 458.7 715.3 448.6 721.3 445.0C727.3 441.3 730.3 442.1 745.6 452.0C753.2 456.9 760.0 461.0 760.6 461.0C761.3 461.0 772.5 444.2 785.5 423.8C798.5 403.3 810.3 385.5 811.6 384.3C819.9 376.6 834.3 384.5 832.7 395.9C832.4 398.3 827.0 407.6 816.5 424.0C807.8 437.5 795.0 457.5 788.0 468.5C780.9 479.5 774.1 489.7 772.9 491.3C769.5 495.1 765.4 495.6 760.5 492.7Z"/></g></svg>';
/* illustrations: decorative, so they carry no alt text */
/* Today's Schedule in two staggered columns, like a masonry board: cards 1 and 3 on the left, 2 and 4 on the right */
var PHONE=function(){try{return matchMedia('(max-width:899px)').matches;}catch(e){return false;}};
function schedCols(cards){if(PHONE()&&cards.length&&cards[0].classList.contains('sc'))return h('div',{class:'sched list'},cards);if(cards.length<2||!cards[0].classList.contains('sc'))return h('div',{class:'sched one'},cards);
  return h('div',{class:'sched mas'},h('div',{class:'col'},cards.filter(function(c,i){return i%2===0;})),h('div',{class:'col'},cards.filter(function(c,i){return i%2===1;})));}
var ill=function(n,c){return h('img',{class:'ill '+(c||''),src:'ill_'+n+'.webp',alt:'',loading:'lazy',decoding:'async',width:'560',height:'560'});};
var APP_VERSION='1.7.0';
var pad=function(n){return String(n).padStart(2,'0');};
var ymd=function(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());};
var parse=function(s){var p=String(s).split('-').map(Number);return new Date(p[0],p[1]-1,p[2]);};
/* "today" and "overdue" follow the agreed deadline time zone, so both people see the same answer */
var dayOf=function(ms){try{if(S&&S.settings&&S.settings.deadlineTz){var o=tzParts(S.settings.deadlineTz,ms);return o.year+'-'+o.month+'-'+o.day;}}catch(e){}return ymd(new Date(ms));};
var today=function(){return dayOf(Date.now());};
var addDays=function(s,n){var d=parse(s);d.setDate(d.getDate()+n);return ymd(d);};
var diff=function(s){return Math.round((parse(s)-parse(today()))/864e5);};
var MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],MONL=['January','February','March','April','May','June','July','August','September','October','November','December'],
    DAY=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],DAYL=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var short=function(s){var d=parse(s);return d.getDate()+' '+MON[d.getMonth()];};
var ord=function(n){var s=['th','st','nd','rd'],v=n%100;return n+(s[(v-20)%10]||s[v]||s[0]);};
var stamp=function(ms){var d=new Date(ms);return d.getDate()+' '+MON[d.getMonth()]+', '+pad(d.getHours())+':'+pad(d.getMinutes());};
var uid=function(){return (Date.now().toString(36)+Math.random().toString(36).slice(2,8)).slice(-12);};
var store={get:function(k){try{return localStorage.getItem(k);}catch(e){return null;}},set:function(k,v){try{localStorage.setItem(k,v);}catch(e){}},
  del:function(k){try{localStorage.removeItem(k);}catch(e){}},keys:function(){var o=[];try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k)o.push(k);}}catch(e){}return o;}};
/* for this tab only: a pending invite is never kept after the tab closes */
var tabStore={get:function(k){try{return sessionStorage.getItem(k);}catch(e){return null;}},set:function(k,v){try{if(v)sessionStorage.setItem(k,v);else sessionStorage.removeItem(k);}catch(e){}}};
var toastT;function toast(m){var t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(function(){t.hidden=true;},3600);}

/* ---------- state ---------- */
var CFG=window.APP_CONFIG||{};
var BRAND=CFG.brand||'Handlark';
var SB=String(CFG.supabaseUrl||'').replace(/\/+$/,''),ANON=CFG.supabaseAnonKey||'',FBKEY=CFG.firebaseApiKey||'';
var LIVE=true;
var S=null, me='', wsId=store.get('hv-ws')||'', wsList=[];
var V={tab:'home',cal:today(),subject:'all',status:'open',q:''};
var M=null;                      // open sheet (modal) model
var offline=false, installEvt=null, pumping=false, uploads=0;
var Q=[],qOwner='';               // changes waiting to reach the server, kept per signed in person and workspace; qOwner is whose they are
function uidNow(){return sess&&sess.user&&sess.user.id?String(sess.user.id):'';}
var qKey=function(){return 'hv-queue-'+qOwner+'-'+wsId;},stKey=function(){return 'hv-state-'+uidNow()+'-'+wsId;};
/* only the signed in person's own changes for this workspace are loaded; any change written by someone else is dropped */
function loadQ(){qOwner=uidNow();Q=[];if(!qOwner||!wsId)return;try{Q=JSON.parse(store.get(qKey())||'[]')||[];}catch(e){Q=[];}
  if(!Array.isArray(Q))Q=[];var n=Q.length;Q=Q.filter(function(it){return it&&it.a&&it.u===qOwner;});if(Q.length!==n)saveQ();}
function saveQ(){if(!qOwner||!wsId)return;if(Q.length)store.set(qKey(),JSON.stringify(Q));else store.del(qKey());}
/* the cached copy of the workspace, for opening fast and offline; kept per person and workspace like the queue */
function saveState(res){if(!uidNow()||!wsId||!res)return;var keep=Object.assign({},res);delete keep.upload;delete keep.exportData;delete keep.msg;store.set(stKey(),JSON.stringify(keep));}
function norm(c){c.features=c.features||{mail:true,wa:true,ai:true};c.templates=c.templates||[];c.shifts=c.shifts||[];c.presence=c.presence||[];c.invoices=c.invoices||[];c.leaves=c.leaves||[];c.focusNow=c.focusNow||[];c.guides=c.guides||[];c.meetings=c.meetings||[];c.expenses=c.expenses||[];c.myPush=c.myPush||[];c.myCal=c.myCal||'';c.myFocus=c.myFocus||[];c.myStuck=c.myStuck||[];c.stuckSignals=c.stuckSignals||[];c.myPatterns=c.myPatterns||{hours:[],stuck:{},focus:{}};c.time=c.time||[];c.sheets=c.sheets||[];c.timeTotals=c.timeTotals||[];c.budgets=c.budgets||[];c.trash=c.trash||[];c.settings=c.settings||{};c.settings.workSites=c.settings.workSites||[];c.tasks.forEach(function(t){t.files=t.files||[];t.time=t.time||[];t.updates=t.updates||[];t.checklist=t.checklist||[];});return c;}
function cached(){if(!uidNow()||!wsId)return null;try{var c=JSON.parse(store.get(stKey())||'null');return c&&c.tasks?norm(c):null;}catch(e){return null;}}
var COLORS=['#5A6FD1','#FF7059','#C93A6B','#8B6CC9','#2E9E7A','#6B4FA0','#E07AB0','#B98A2E'];
var STAT=[['new','New'],['in_progress','In progress'],['waiting','Waiting'],['done','Done']];
var FIELDS=['title','subjectId','details','due','start','end','priority','status','waitingOn','assignee','repeat','checklist','private','needsApproval','firstStep','planAt','planWhere','estimateMin','startBy','goodEnough','guideId'];

var subj=function(id){return S.subjects.find(function(s){return s.id===id;});};
var sName=function(id){var s=subj(id);return s?s.name:'General';};
var sColor=function(id){var s=subj(id);return s?s.color:'#A79DB5';};
var person=function(id){return S.people.find(function(p){return p.id===id;});};
var pName=function(id){var p=person(id);return p?p.name:id?'Former member':'Someone';};
var initials=function(n){return n.split(/\s+/).map(function(w){return w[0];}).join('').slice(0,2).toUpperCase();};
var liveSubjects=function(){return S.subjects.filter(function(s){return !s.archived;});};
var open=function(t){return t.status!=='done';};
var late=function(t){return open(t)&&!!t.due&&deadline(t)<Date.now();};
var forMe=function(t){return open(t)&&me&&t.assignee===me&&!t.seenAt&&t.createdBy!==me;};
var doneOn=function(t,day){return t.status==='done'&&t.doneAt&&dayOf(t.doneAt)===day;};
function sortT(a,b){var x=open(a)?0:1,y=open(b)?0:1;if(x!==y)return x-y;
  if(x)return (b.doneAt||0)-(a.doneAt||0);
  var da=a.due||'9999',db=b.due||'9999';if(da!==db)return da<db?-1:1;
  var ta=a.start||'99',tb=b.start||'99';if(ta!==tb)return ta<tb?-1:1;
  var pr={high:0,normal:1,low:2};if(pr[a.priority]!==pr[b.priority])return pr[a.priority]-pr[b.priority];
  return (a.createdAt||0)-(b.createdAt||0);}
function dueText(t){if(!t.due)return null;var n=diff(t.due),tm=t.start?', '+t.start:'';
  if(t.status==='done')return {text:short(t.due),cls:''};
  if(late(t))return {text:'Overdue, '+short(t.due)+tm,cls:'late'};
  if(n<0)return {text:short(t.due)+tm,cls:''};
  if(n===0)return {text:'Today'+tm,cls:''};if(n===1)return {text:'Tomorrow'+tm,cls:''};
  return {text:DAY[parse(t.due).getDay()]+' '+short(t.due)+tm,cls:''};}
function nextDue(due,rep){var d=parse(due);
  if(rep==='daily')d.setDate(d.getDate()+1);
  else if(rep==='weekdays'){do{d.setDate(d.getDate()+1);}while(d.getDay()===0||d.getDay()===6);}
  else if(rep==='weekly')d.setDate(d.getDate()+7);
  else if(rep==='monthly'){var day=d.getDate();d=new Date(d.getFullYear(),d.getMonth()+1,1);var last=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();d.setDate(Math.min(day,last));}
  return ymd(d);}

/* The same rules the server applies, used for instant feedback before the server answers. */
function blank(d,by,now){now=now||Date.now();return {id:d.id||uid(),title:(d.title||'').trim(),subjectId:d.subjectId||'',details:d.details||'',due:d.due||'',start:d.start||'',end:d.end||'',
  priority:d.priority||'normal',status:d.status||'new',waitingOn:d.waitingOn||'',assignee:d.assignee||'',repeat:d.repeat||'none',checklist:(d.checklist||[]).slice(),updates:[],
  createdBy:by||'',createdAt:now,updatedAt:now,doneAt:d.status==='done'?now:0,seenAt:0,private:!!d.private,needsApproval:!!d.needsApproval&&!d.private,files:[],time:[],approvedBy:'',approvedAt:0,
  firstStep:d.firstStep||'',planAt:d.planAt||0,planWhere:d.planWhere||'',estimateMin:d.estimateMin||0,startBy:d.startBy||'',goodEnough:d.goodEnough||'',startByAuto:d.startByAuto||'',guideId:d.guideId||''};}
function mentionIds(text){var low=' '+String(text).toLowerCase()+' ',tags={},out=[];(low.match(/@[a-z0-9']+/g)||[]).forEach(function(t){tags[t]=1;});
  S.people.forEach(function(p){var n=p.name.toLowerCase(),first=n.split(/\s+/)[0];if(tags['@'+first]||low.indexOf('@'+n)>=0)out.push(p.id);});return out;}
function mutate(action,p){var now=p._at||Date.now(),T=function(id){return S.tasks.find(function(t){return t.id===id;});},t;
  if(action==='saveTask'){var d=p.task;t=d.id&&T(d.id);
    if(!t){S.tasks.push(blank(d,p.by,now));return;}
    var was=t.status,who=t.assignee;FIELDS.forEach(function(k){if(k in d)t[k]=d[k];});t.updatedAt=now;
    if(t.private)t.needsApproval=false;
    if(t.needsApproval&&t.status==='done'&&was!=='done'&&p.by!==t.createdBy)t.status='review';
    if(t.status==='review'&&!t.needsApproval)t.status='done';
    if(t.status==='done'&&was!=='done'){t.doneAt=now;if(t.needsApproval){t.approvedBy=p.by;t.approvedAt=now;}
      if(t.repeat!=='none'&&t.due){var n=blank(t,t.createdBy,now);n.id=uid();n.status='new';n.doneAt=0;n.due=nextDue(t.due,t.repeat);n.waitingOn='';
        n.checklist=t.checklist.map(function(c){return {id:c.id,text:c.text,done:false};});S.tasks.push(n);}}
    if(t.status!=='done'){t.doneAt=0;t.approvedBy='';t.approvedAt=0;}if(t.assignee!==who)t.seenAt=0;}
  else if(action==='bulkAdd'){(p.items||p.titles.map(function(title,i){return {title:title,id:p.ids[i]};})).forEach(function(it){var d=Object.assign({},p.base,{title:it.title,id:it.id,checklist:[]});['due','assignee','subjectId','priority','details','status','checklist'].forEach(function(k){if(k in it)d[k]=it[k];});if(it.title.trim()&&!T(it.id))S.tasks.push(blank(d,p.by,now));});}
  else if(action==='addUpdate'){t=T(p.id);if(t){t.updates.forEach(function(u){if(u.question&&u.to===p.by&&!u.answeredAt)u.answeredAt=now;});t.updates=t.updates.concat([{at:now,by:p.by,text:p.text,mentions:mentionIds(p.text)}]);t.updatedAt=now;}}
  else if(action==='sendBack'){t=T(p.id);if(t&&t.status==='review'){t.status='in_progress';t.doneAt=0;t.updates=t.updates.concat([{at:now,by:p.by,text:'Sent back'+(p.text?': '+p.text:'')}]);t.updatedAt=now;}}
  else if(action==='attach'){t=T(p.id);if(t)t.files=t.files.concat([{id:'',name:p.name,url:'',size:p.size,by:p.by,at:now,uploading:true}]);}
  else if(action==='addLink'){t=T(p.id);if(t)t.files=t.files.concat([{id:'',name:p.name||p.url,url:p.url,link:true,by:p.by,at:now}]);}
  else if(action==='removeFile'){t=T(p.id);if(t)t.files=t.files.filter(function(f){return (f.id||f.url)!==p.key;});}
  else if(action==='timerStart'){S.tasks.forEach(function(x){x.time.forEach(function(e){if(e.by===p.by&&!e.end&&e.source!=='clock')e.end=now;});});S.time.forEach(function(e){if(e.personId===p.by&&!e.end&&e.source!=='clock'){e.end=now;e.minutes=Math.round((now-e.start)/6e4);}});
    t=T(p.id);if(t){var te={id:'o'+p._op,by:p.by,start:now,end:0,source:'timer'};t.time=t.time.concat([te]);S.time.push({id:te.id,personId:p.by,subjectId:t.subjectId,taskId:t.id,start:now,end:0,minutes:0,source:'timer',billable:billDefOf(subj(t.subjectId)),status:'draft',invoiceId:'',note:''});}}
  else if(action==='timerStop'){t=T(p.id);if(t)t.time.forEach(function(e){if(e.by===p.by&&!e.end)e.end=now;});S.time.forEach(function(e){if(e.personId===p.by&&!e.end&&e.taskId===p.id){e.end=now;e.minutes=Math.round((now-e.start)/6e4);}});}
  else if(action==='addTime'){t=T(p.id);if(t){t.time=t.time.concat([{by:p.by,start:now-p.minutes*6e4,end:now,manual:true,source:'manual'}]);S.time.push({id:'o'+p._op,personId:p.by,subjectId:t.subjectId,taskId:t.id,start:now-p.minutes*6e4,end:now,minutes:p.minutes,source:'manual',billable:billDefOf(subj(t.subjectId)),status:'draft',invoiceId:'',note:''});}}
  else if(action==='saveTime'){var en=p.entry,ex2=S.time.find(function(x){return x.id===en.id;});var base2={minutes:Math.round((en.end-en.start)/6e4)};
    if(ex2)Object.assign(ex2,en,base2,{status:S.owner?ex2.status:'draft',editedBy:p.by,editedAt:now});else S.time.push(Object.assign({personId:p.by,source:'manual',status:'draft',invoiceId:'',billable:billDefOf(subj(en.subjectId)),createdAt:now},en,base2));}
  else if(action==='deleteTime'){S.time=S.time.filter(function(x){return x.id!==p.id;});}
  else if(action==='submitWeek'){var sw0=S.time.filter(function(e){return e.personId===p.by&&weekStart(dayOf(e.start))===p.week&&!e.invoiceId&&(e.status==='draft'||e.status==='rejected');});sw0.forEach(function(e){e.status='submitted';});
    var sh0=sheetOf(p.by,p.week);if(!sh0){sh0={id:p.by+'_'+p.week,personId:p.by,week:p.week};S.sheets.push(sh0);}Object.assign(sh0,{status:'submitted',submittedAt:now,minutes:sw0.reduce(function(a,e){return a+(e.minutes||0);},0)});}
  else if(action==='decideWeek'){var sd=(S.sheets||[]).find(function(x){return x.id===p.id;});if(sd){sd.status=p.status;sd.note=p.note||'';S.time.forEach(function(e){if(e.personId===sd.personId&&e.status==='submitted'&&weekStart(dayOf(e.start))===sd.week)e.status=p.status;});}}
  else if(action==='switchClient'){var swS=myShift();if(swS){S.time.forEach(function(e){if(e.shiftId===swS.id&&!e.end){e.end=now;e.minutes=Math.round((now-e.start)/6e4);}});swS.subjectId=p.subjectId||'';swS.taskId=p.taskId||'';
    if(swS.subjectId)S.time.push({id:'o'+p._op,personId:p.by,subjectId:swS.subjectId,taskId:swS.taskId,start:now,end:0,minutes:0,source:'clock',shiftId:swS.id,billable:billDefOf(subj(swS.subjectId)),status:'draft',invoiceId:'',note:''});}}
  else if(action==='saveTemplate'){var tp=S.templates.find(function(x){return x.id===p.template.id;});if(tp)Object.assign(tp,p.template);else S.templates.push(Object.assign({createdBy:p.by,createdAt:now},p.template));}
  else if(action==='deleteTemplate'){S.templates=S.templates.filter(function(x){return x.id!==p.id;});}
  else if(action==='seen'){t=T(p.id);if(t&&!t.seenAt)t.seenAt=now;}
  else if(action==='deleteTask'){t=T(p.id);if(t){S.trash=(S.trash||[]).concat([{id:t.id,title:t.title,subjectId:t.subjectId,deletedAt:now,deletedBy:p.by,files:(t.files||[]).length}]);}S.tasks=S.tasks.filter(function(x){return x.id!==p.id;});}
  else if(action==='restoreTask'){S.trash=(S.trash||[]).filter(function(x){return x.id!==p.id;});}
  else if(action==='setMyEmailPrefs'){S.settings.mailOff=!!p.mailOff;}
  else if(action==='saveWorkSites'){S.settings.workSites=(p.sites||[]).map(function(x){return Object.assign({},x);});}
  else if(action==='saveSubject'){var s=subj(p.subject.id);if(s){Object.assign(s,p.subject);if(p.subject.private===false)s.privateTo='';}else S.subjects.push(Object.assign({createdAt:now,archived:false,privateTo:p.subject.private?me:''},p.subject));}
  else if(action==='savePerson'){var x=person(p.person.id);if(x)Object.assign(x,p.person);else S.people.push(Object.assign({},p.person));}
  else if(action==='saveSettings'){var ss0=Object.assign({},p.settings);delete ss0.paystackKey;Object.assign(S.settings,ss0);if(p.settings.workspaceName&&S.workspace)S.workspace.name=p.settings.workspaceName;
    if('paystackKey' in p.settings&&!p.settings.paystackKey){S.settings.hasPaystackKey=false;S.settings.payKeySet=false;S.settings.paystackKeyMasked='';}}
  else if(action==='removePerson'){S.people=S.people.filter(function(x){return x.id!==p.id;});}
  else if(action==='setMyTz'){var mp=person(p.by);if(mp)mp.tz=p.tz;}
  else if(action==='clockIn'){if(!S.shifts.some(function(x){return x.id===p.id;})&&!myShift()){S.shifts.push({id:p.id,personId:p.by,in:now,out:0,breaks:[],tz:p.tz||myTz,inLoc:p.loc||undefined,subjectId:p.subjectId||'',taskId:p.taskId||''});S.presence.push({personId:p.by,since:now,onBreak:false});
    if(p.subjectId)S.time.push({id:'o'+p._op,personId:p.by,subjectId:p.subjectId,taskId:p.taskId||'',start:now,end:0,minutes:0,source:'clock',shiftId:p.id,billable:billDefOf(subj(p.subjectId)),status:'draft',invoiceId:'',note:''});}}
  else if(action==='breakStart'){var a1=myShift();if(a1&&!a1.breaks.some(function(b){return !b.end;})){a1.breaks.push({start:now,end:0});S.presence.forEach(function(x){if(x.personId===p.by)x.onBreak=true;});}}
  else if(action==='breakEnd'){var a2=myShift();if(a2)a2.breaks.forEach(function(b){if(!b.end)b.end=now;});S.presence.forEach(function(x){if(x.personId===p.by)x.onBreak=false;});}
  else if(action==='clockOut'){var a3=myShift();if(a3){a3.breaks.forEach(function(b){if(!b.end)b.end=now;});a3.out=now;S.time.forEach(function(e){if(e.shiftId===a3.id&&!e.end){e.end=now;e.minutes=Math.round((now-e.start)/6e4);}});}S.presence=S.presence.filter(function(x){return x.personId!==p.by;});}
  else if(action==='editShift'){var a4=S.shifts.find(function(x){return x.id===p.id;});if(a4){a4.in=p.in;a4.out=p.out||0;a4.edited={by:p.by,at:now};a4.autoClosed=false;}}
  else if(action==='deleteShift'){S.shifts=S.shifts.filter(function(x){return x.id!==p.id;});}
  else if(action==='requestLeave'){var lv=p.leave;if(!S.leaves.some(function(x){return x.id===lv.id;}))S.leaves.push(Object.assign({personId:S.owner&&lv.personId?lv.personId:p.by,status:S.owner?'approved':'pending',type:'annual'},lv));}
  else if(action==='decideLeave'){S.leaves.forEach(function(x){if(x.id===p.id)x.status=p.status;});}
  else if(action==='cancelLeave'){S.leaves=S.leaves.filter(function(x){return x.id!==p.id;});}
  else if(action==='invoiceStatus'){S.invoices.forEach(function(x){if(x.id===p.id)x.status=p.status;});if(p.status==='void')S.time.forEach(function(e){if(e.invoiceId===p.id)e.invoiceId='';});}
  else if(action==='deleteInvoice'){S.invoices=S.invoices.filter(function(x){return x.id!==p.id;});S.time.forEach(function(e){if(e.invoiceId===p.id)e.invoiceId='';});}
  else if(action==='focusStart'){if(S.myFocus.some(function(f){return f.id===p.id;}))return;
    S.myFocus.forEach(function(f){if(!f.end){f.end=now;f.outcome='switched';}});S.focusNow=S.focusNow.filter(function(f){return f.personId!==p.by;});
    if(p.taskId){mutate('timerStart',{id:p.taskId,by:p.by,_at:now});t=T(p.taskId);if(t&&t.status==='new'&&(t.assignee===p.by||!t.assignee))t.status='in_progress';}
    S.myFocus.push({id:p.id,personId:p.by,taskId:p.taskId||'',start:now,plannedMin:p.minutes,end:0,outcome:''});S.focusNow.push({personId:p.by,since:now,plannedMin:p.minutes,taskId:p.taskId||''});
    if(!S.myPatterns.startedToday){S.myPatterns.startedToday=true;S.myPatterns.streak=(S.myPatterns.streak||0)+1;}}
  else if(action==='focusEnd'){var fo=S.myFocus.find(function(f){return !f.end;});if(fo){fo.end=now;fo.outcome=p.outcome||'stopped';
    if(fo.taskId){mutate('timerStop',{id:fo.taskId,by:p.by,_at:now});if(p.outcome==='done')mutate('saveTask',{task:{id:fo.taskId,status:'done'},by:p.by,_at:now});}}
    S.focusNow=S.focusNow.filter(function(f){return f.personId!==p.by;});}
  else if(action==='logStuck'){S.myStuck=S.myStuck.concat([{id:p.id,personId:p.by,taskId:p.taskId||'',reason:p.reason,at:now}]);S.myPatterns.stuck[p.reason]=(S.myPatterns.stuck[p.reason]||0)+1;}
  else if(action==='askQuestion'){t=T(p.id);if(t){var qto=t.createdBy&&t.createdBy!==p.by?t.createdBy:'';t.updates=t.updates.concat([{at:now,by:p.by,text:p.text,mentions:qto?[qto]:[],question:true,kind:p.kind||'question',to:qto,answeredAt:0}]);t.updatedAt=now;}}
  else if(action==='saveGuide'){var gd=p.guide,gx=S.guides.find(function(x){return x.id===gd.id;});if(gx)Object.assign(gx,gd,{updatedAt:now,updatedBy:p.by});else S.guides.push(Object.assign({createdBy:p.by,createdAt:now,updatedAt:now,updatedBy:p.by},gd));}
  else if(action==='deleteGuide'){S.guides=S.guides.filter(function(x){return x.id!==p.id;});S.tasks.forEach(function(x){if(x.guideId===p.id)x.guideId='';});}
  else if(action==='saveExpense'){var ed=p.expense,ex=S.expenses.find(function(x){return x.id===ed.id;});if(ex)Object.assign(ex,ed,{status:S.owner?ex.status:'pending'});else S.expenses.push(Object.assign({createdAt:now,status:S.owner?'approved':'pending',personId:p.by},ed));}
  else if(action==='decideExpense'){S.expenses.forEach(function(x){if(x.id===p.id){x.status=p.status;x.reason=p.reason||'';}});}
  else if(action==='deleteExpense'){S.expenses=S.expenses.filter(function(x){return x.id!==p.id;});}
  else if(action==='acceptRequest'){t=T(p.id);if(t&&t.request){t.request.state='accepted';if(p.assignee)t.assignee=p.assignee;}}
  else if(action==='declineRequest'){S.tasks=S.tasks.filter(function(x){return x.id!==p.id;});}
  else if(action==='removePush'){S.myPush=S.myPush.filter(function(d){return p.endpoint&&d.endpoint!==p.endpoint;});}
  else if(action==='saveMeeting'){var md=p.meeting,mx=S.meetings.find(function(x){return x.id===md.id;});if(mx)Object.assign(mx,md,{updatedAt:now});else S.meetings.push(Object.assign({createdBy:p.by,createdAt:now,status:'scheduled',rsvp:{},joined:{},notes:'',actions:[],agenda:[],canEdit:true,joinUrl:'',gcal:'',repeat:'none'},md));}
  else if(action==='rsvpMeeting'){var mr=S.meetings.find(function(x){return x.id===p.id;});if(mr){mr.rsvp=Object.assign({},mr.rsvp);mr.rsvp[p.by]=p.answer;}}
  else if(action==='saveMeetingNotes'){var mn=S.meetings.find(function(x){return x.id===p.id;});if(mn){if('notes' in p)mn.notes=p.notes;if('agenda' in p)mn.agenda=p.agenda;if('actions' in p){var oldA={};(mn.actions||[]).forEach(function(a){oldA[a.id]=a;});mn.actions=p.actions.map(function(a){return Object.assign({},a,{taskId:(oldA[a.id]||{}).taskId||''});});}mn.updatedBy=p.by;}}
  else if(action==='cancelMeeting'){S.meetings.forEach(function(x){if(x.id===p.id)x.status='cancelled';});}
  else if(action==='deleteMeeting'||action==='declineMeetingRequest'){S.meetings=S.meetings.filter(function(x){return x.id!==p.id;});}
  else if(action==='acceptMeetingRequest'){S.meetings.forEach(function(x){if(x.id===p.id){x.status='scheduled';x.startAt=p.startAt;x.attendees=p.attendees||[p.by];}});}
  else if(action==='saveMyProfile'){var pp=person(p.by);if(pp){if('phone' in p&&p.phone!==pp.phone){pp.phone=p.phone;pp.waOn=false;}if('waOn' in p&&(!p.waOn||pp.phoneVerified===pp.phone))pp.waOn=p.waOn;}}
}
/* ---------- accounts (Firebase Authentication, free) ---------- */
var sess=null;try{sess=JSON.parse(store.get('hv-session')||'null');}catch(e){sess=null;}
function saveSess(x){sess=x;if(x)store.set('hv-session',JSON.stringify(x));else store.del('hv-session');}
/* App 1.6.0 and earlier kept the queue and the cached copy per workspace only (hv-queue-<workspace>). They move under the
   person (hv-queue-<user>-<workspace>) only when the signed in person is provably the one who wrote them: the cached copy
   says who it belonged to, its email must be this account's, and every queued change must be theirs. Otherwise they are dropped. */
function migrateKeys(){if(store.get('hv-keys-v2')==='1')return;var u=uidNow(),email=String(sess&&sess.user&&sess.user.email||'').toLowerCase(),old={};
  store.keys().forEach(function(k){var m=/^hv-(queue|state)-(.+)$/.exec(k);if(m){old[m[2]]=old[m[2]]||{};old[m[2]][m[1]]=k;}});
  Object.keys(old).forEach(function(w){var o=old[w],st=null,q=[];try{st=JSON.parse(store.get(o.state)||'null');}catch(e){}try{q=JSON.parse(store.get(o.queue)||'[]')||[];}catch(e){q=[];}
    var mine=!!(u&&email&&st&&st.me&&(st.people||[]).some(function(x){return x&&x.id===st.me&&String(x.email||'').toLowerCase()===email;}));
    if(mine&&Array.isArray(q)&&q.length)mine=q.every(function(it){return it&&it.a&&it.p&&it.p.by===st.me;});
    if(mine){if(Array.isArray(q)&&q.length)store.set('hv-queue-'+u+'-'+w,JSON.stringify(q.map(function(it){return Object.assign({},it,{u:u});})));if(st)store.set('hv-state-'+u+'-'+w,JSON.stringify(st));}
    if(o.queue)store.del(o.queue);if(o.state)store.del(o.state);});
  store.set('hv-keys-v2','1');}
migrateKeys();loadQ();
/* someone else signed in on this device: their cached copies of other people's work are dropped (queues wait for their owner) */
function forgetOthers(u){if(!u)return;store.keys().forEach(function(k){if(k.indexOf('hv-state-')===0&&k.indexOf('hv-state-'+u+'-')!==0)store.del(k);});}
function appUrl(){return location.origin+location.pathname;}
function authErr(){var e=new Error('Please sign in');e.signin=true;return e;}
function fbErr(j,status){var e=new Error(authText(String((j&&j.error&&j.error.message)||'Something went wrong')));e.status=status;return e;}
function fb(method,body){return fetch('https://identitytoolkit.googleapis.com/v1/accounts:'+method+'?key='+encodeURIComponent(FBKEY),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})
  .then(function(r){return r.json().catch(function(){return {};}).then(function(j){if(!r.ok)throw fbErr(j,r.status);return j;});});}
function authText(m){
  if(/INVALID_LOGIN_CREDENTIALS|INVALID_PASSWORD|EMAIL_NOT_FOUND|INVALID_CREDENTIAL/.test(m))return 'That email and password do not match.';
  if(/EMAIL_EXISTS/.test(m))return 'There is already an account with this email. Sign in instead.';
  if(/WEAK_PASSWORD/.test(m))return 'Choose a longer password, at least 8 characters.';
  if(/TOO_MANY_ATTEMPTS/.test(m))return 'Too many tries. Wait a few minutes and try again.';
  if(/USER_DISABLED/.test(m))return 'This account has been switched off.';
  if(/INVALID_EMAIL/.test(m))return 'Enter a valid email address.';
  if(/TOKEN_EXPIRED|INVALID_REFRESH_TOKEN|USER_NOT_FOUND|INVALID_ID_TOKEN/.test(m))return 'Please sign in again.';
  if(/UNAUTHORIZED_DOMAIN|INVALID_CONTINUE_URI/.test(m))return 'This web address is not allowed in Firebase yet. Add it under Authentication, Settings, Authorized domains.';
  return 'Something went wrong ('+m.replace(/_/g,' ').toLowerCase()+').';}
function keepSess(j,user){var t=j.idToken||j.id_token;if(!t)return null;
  saveSess({access_token:t,refresh_token:j.refreshToken||j.refresh_token,expires_at:Date.now()+(+(j.expiresIn||j.expires_in)||3600)*1000,
    user:Object.assign({},(sess&&sess.user)||{},user||{},{id:j.localId||j.user_id||(sess&&sess.user&&sess.user.id),email:j.email||(sess&&sess.user&&sess.user.email)||''})});
  if(qOwner!==uidNow()){forgetOthers(uidNow());loadQ();}return sess;}
var refreshing=null;
function refreshNow(){if(!sess||!sess.refresh_token)return Promise.reject(authErr());
  if(!refreshing)refreshing=fetch('https://securetoken.googleapis.com/v1/token?key='+encodeURIComponent(FBKEY),{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:'grant_type=refresh_token&refresh_token='+encodeURIComponent(sess.refresh_token)})
    .then(function(r){return r.json().catch(function(){return {};}).then(function(j){refreshing=null;if(!r.ok){if(r.status>=400&&r.status<500){saveSess(null);throw authErr();}throw fbErr(j,r.status);}keepSess(j);return sess.access_token;});},
      function(e){refreshing=null;throw e;});
  return refreshing;}
function token(){if(!sess||!sess.access_token)return Promise.reject(authErr());
  if(sess.expires_at-Date.now()>60000)return Promise.resolve(sess.access_token);return refreshNow();}
/* whether this account's email is confirmed, read fresh from Firebase */
function checkVerified(){return refreshNow().then(function(tk){return fb('lookup',{idToken:tk});}).then(function(j){var u=(j.users||[])[0]||{};if(sess){sess.user.verified=!!u.emailVerified;sess.user.name=u.displayName||sess.user.name;saveSess(sess);}return !!u.emailVerified;});}
function sendVerify(){return token().then(function(tk){return fb('sendOobCode',{requestType:'VERIFY_EMAIL',idToken:tk,continueUrl:appUrl()}).catch(function(e){if(/web address/.test(e.message))return fb('sendOobCode',{requestType:'VERIFY_EMAIL',idToken:tk});throw e;});});}
/* one call to an edge function, with a fresh login token */
/* opt.blob: send a file (a voice note) as the body itself, with opt.qs added to the address */
function call(fn,body,again,opt){opt=opt||{};return token().then(function(tk){var hd={'Content-Type':opt.blob?opt.type:'application/json',Authorization:'Bearer '+tk,'x-handlark-codes':'1'};if(ANON)hd.apikey=ANON;var pf=store.get(proofKey());if(pf)hd['x-handlark-2fa']=pf;
    return fetch(SB+'/functions/v1/'+fn+(opt.qs||''),{method:'POST',headers:hd,body:opt.blob||JSON.stringify(body)});})
  .then(function(r){return r.json().catch(function(){return null;}).then(function(j){
    if(r.status===401&&!(j&&j.code==='signed_out')){if(!again&&sess){sess.expires_at=0;return call(fn,body,true,opt);}saveSess(null);throw authErr();}
    if(j&&j.ok===false)return j;
    if(!r.ok||!j){var e0=new Error('The server did not answer ('+r.status+')');e0.status=r.status;e0.retry=!r.status||r.status>=500||r.status===429||r.status===408;e0.refused=!e0.retry;throw e0;}
    return j;});},function(e){if(e&&(e.signin||e.status))throw e;var n=new Error('No connection');n.network=true;n.retry=true;throw n;})
  .then(function(res){if(res&&res.ok===false){var e;
    if(res.code==='signed_out'){signedOut();throw authErr();}
    if(res.error==='auth'){saveSess(null);throw authErr();}
    if(res.error==='nomember'){e=new Error('You are not a member of this workspace');e.nomember=true;throw e;}
    if(res.error==='2fa'){e=new Error(res.message||'Enter your code');e.twofa=true;throw e;}
    if(res.error==='need2fa'){e=new Error(res.message||'Two step sign in is needed');e.need2fa=true;throw e;}
    e=new Error(res.message||'The request was refused');e.code=res.code||res.error||'';e.retry=!!res.retry;e.refused=!e.retry;throw e;}return res;});}
/* Sign out everywhere was chosen on some device: this login no longer works, so the session and this device's proof go */
function signedOut(){wipeDevice(true);A0.err='';A0.done='You were signed out on every device. Please sign in again.';}
/* Signing out leaves nothing of anyone's work behind on a shared device: unsent changes, cached copies, alert settings,
   this tab's storage, the offline copy of the app (Cache Storage) and any browser database go. Kept: the referral code,
   the code lock time, and a two step proof only for someone who ticked "Trust this device" (dropTrust drops this person's too). */
function wipeDevice(dropTrust){var u=uidNow(),keep={'hv-ref':1,'hv-keys-v2':1,'hv-2fa-lock':1};
  store.keys().forEach(function(k){var m=/^hv-2fa-trust-(.+)$/.exec(k);if(m&&store.get(k)==='1'&&!(dropTrust&&m[1]===u)){keep[k]=1;keep['hv-2fa-'+m[1]]=1;}});
  store.keys().forEach(function(k){if(k.indexOf('hv-')===0&&!keep[k]&&k.indexOf('hv-demo-')!==0)store.del(k);});   // hv-demo-: the demo's own sample data
  try{sessionStorage.clear();}catch(e){}
  try{if(window.caches)caches.keys().then(function(l){l.forEach(function(k){caches.delete(k);});}).catch(function(){});}catch(e){}
  try{if(window.indexedDB&&indexedDB.databases)indexedDB.databases().then(function(l){(l||[]).forEach(function(d){if(d&&d.name)indexedDB.deleteDatabase(d.name);});}).catch(function(){});}catch(e){}
  Q=[];qOwner='';sess=null;wsId='';wsList=[];me='';S=null;pushEp=null;A0.invite='';A0.inv=null;clearTimeout(pumpT);pumpT=null;}
function server(action,p){return call('api',{workspace:wsId,action:action,payload:Object.assign({_app:appUrl()},p)});}
/* sign in again, or pick another workspace, when the server says this device has lost access */
function lost(err){if(err&&err.signin){S=null;closeSheet();authScreen('in');return true;}
  if(err&&err.twofa){S=null;closeSheet();store.del(proofKey());store.del('hv-2fa-trust-'+uidNow());twofaScreen();return true;}
  if(err&&err.need2fa){S=null;closeSheet();needTwofaScreen(err.message);return true;}
  if(err&&err.nomember){store.del(stKey());wsId='';store.set('hv-ws','');S=null;closeSheet();pickWorkspace();return true;}return false;}
function accept(res){if(!sess||!res||!res.tasks)return false;   // a late reply after signing out is ignored
  if(res.workspaces)wsList=res.workspaces;if(res.workspace&&res.workspace.id&&res.workspace.id!==wsId){wsId=res.workspace.id;store.set('hv-ws',wsId);loadQ();}S=norm(res);offline=false;
  saveState(res);setTimeout(checkAlerts,0);return true;}
/* Every change is shown at once, kept in a queue on this device, and sent to the server in order.
   If the connection drops the queue simply waits, so nothing typed offline is lost. */
function send(action,p,quiet){p=p||{};if(action==='saveSettings'&&p.settings&&p.settings.paystackKey){p.settings=Object.assign({},p.settings);delete p.settings.paystackKey;if(!Object.keys(p.settings).length)return;}   // a secret key is never kept in the offline queue
  p.by=me;p._op=uid();p._at=Date.now();
  try{mutate(action,p);}catch(e){}
  if(qOwner!==uidNow())loadQ();if(!qOwner)return;   // nobody signed in: nothing is queued
  Q.push({a:action,p:p,q:!!quiet,u:qOwner});saveQ();
  render();if(M)renderSheet();pump();}
function rebuild(){var c=cached();if(c){S=c;pickMe();Q.forEach(function(it){try{mutate(it.a,it.p);}catch(e){}});}render();if(M)renderSheet();}
function pump(){if(qOwner!==uidNow()){if(!uidNow())return;loadQ();}   // the queue only ever goes out under the login of the person who wrote it
  if(pumping||!Q.length)return;var it=Q[0];if(it.u!==qOwner){Q.shift();saveQ();pump();return;}pumping=true;
  server(it.a,it.p).then(function(res){pumping=false;
    Q.shift();saveQ();
    if(!Q.length){if(accept(res)){pickMe();render();if(M)renderSheet();}}
    else{if(res&&res.tasks)saveState(res);if(offline){offline=false;render();}}
    if(res&&res.msg&&!it.q)toast(res.msg);
    pump();
  }).catch(function(err){pumping=false;
    if(lost(err))return;                                          // signed out or removed: the queue waits for the next sign in
    // the rules said no (retry false): drop it and say why. Network trouble, 429 and 5xx: keep it and try again, waiting longer each time
    if(err&&err.refused&&!err.retry){Q.shift();saveQ();toast('Could not save: '+err.message+'.');rebuild();if(Q.length)pump();else refresh();return;}
    it.n=(it.n||0)+1;saveQ();
    if(err&&err.code==='rate'&&it.n===1)toast(err.message+'.');
    var was=offline;offline=navigator.onLine===false||!!(err&&err.network)||it.n>2;
    clearTimeout(pumpT);pumpT=setTimeout(function(){pumpT=null;pump();},Math.min(120000,2000*Math.pow(2,Math.min(it.n-1,6)))+Math.round(Math.random()*800));
    if(offline!==was){render();if(M)renderSheet();}});}
var pumpT=null;
function refresh(){if(!wsId||!sess||FULL)return;if(Q.length){pump();return;}server('load',{}).then(function(res){if(!Q.length&&accept(res)){pickMe();render();}}).catch(function(err){if(lost(err))return;if(!offline&&!(err&&err.refused)){offline=true;render();}});}
function pickMe(){me=S.me||'';syncTz();}
/* each device tells the server its own time zone once per visit, so clocks and "their time" follow people automatically */
var tzSent=false;
function syncTz(){if(tzSent||!S||!me||!myTz)return;var p=person(me);if(!p||p.tz===myTz)return;tzSent=true;setTimeout(function(){send('setMyTz',{tz:myTz},true);},0);}
var STLABEL={'new':'New',in_progress:'In progress',waiting:'Waiting',review:'Awaiting sign off',done:'Done'};
function spent(t,by){var now=Date.now(),sum=0;(t.time||[]).forEach(function(e){if(!by||e.by===by)sum+=Math.max(0,(e.end||now)-e.start);});return sum;}
function dur(ms){var m=Math.round(ms/6e4),hh=Math.floor(m/60);return hh?hh+'h '+pad(m%60)+'m':m+'m';}
function running(by){var hit=null;S.tasks.forEach(function(t){(t.time||[]).forEach(function(e){if(e.by===(by||me)&&!e.end)hit={t:t,e:e};});});return hit;}
function seenM(){try{return JSON.parse(store.get('hv-seen-m')||'{}')||{};}catch(e){return {};}}
function newMentions(t){var s=seenM()[t.id]||0;return (t.updates||[]).filter(function(u){return u.by!==me&&u.at>s&&(u.mentions||[]).indexOf(me)>=0;}).length;}
function markMentions(t){var s=seenM();s[t.id]=Date.now();store.set('hv-seen-m',JSON.stringify(s));}
var toSign=function(t){return t.status==='review'&&t.createdBy===me;};
var canPriv=function(){var p=person(me);return !!(S.owner||(p&&p.canPrivate));};
var hidden=function(t){var sb=subj(t.subjectId);return !!(t.private||(sb&&sb.privateTo));};

/* ---------- shared pieces ---------- */
/* time zones: deadlines are read in one agreed zone so a due time means the same moment for everyone */
function tzParts(tz,ms){var o={};new Intl.DateTimeFormat('en-US',{timeZone:tz,hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',weekday:'short'}).formatToParts(new Date(ms)).forEach(function(p){o[p.type]=p.value;});return o;}
function tzOffset(tz,ms){ms-=ms%1000;var o=tzParts(tz,ms);return Date.UTC(+o.year,o.month-1,+o.day,+o.hour%24,+o.minute,+o.second)-ms;}
function zoneList(){var out=[];(S.settings.clocks||'').split(',').forEach(function(c){var a=c.split('|');if(a.length>1)out.push({city:a[0].trim(),tz:a[1].trim()});});return out;}
function zoneName(tz){var z=zoneList().find(function(x){return x.tz===tz;});return z?z.city:String(tz||'').split('/').pop().replace(/_/g,' ');}
function deadline(t){if(!t.due)return 0;var p=t.due.split('-'),m=(t.end||t.start||'23:59').split(':'),g=Date.UTC(+p[0],p[1]-1,+p[2],+m[0],+m[1]),tz=S.settings.deadlineTz;
  try{return g-tzOffset(tz,g-tzOffset(tz,g));}catch(e){return new Date(+p[0],p[1]-1,+p[2],+m[0],+m[1]).getTime();}}
function span(ms){var s=Math.floor(Math.abs(ms)/1000),d=Math.floor(s/86400);return {d:d,h:Math.floor(s%86400/3600),m:Math.floor(s%3600/60),s:s%60};}
var myTz='';try{myTz=Intl.DateTimeFormat().resolvedOptions().timeZone;}catch(e){}

/* one ticker drives every live clock and countdown on screen, without redrawing the page */
function tick(){var now=Date.now();
  [].forEach.call(document.querySelectorAll('[data-clk]'),function(el){try{var o=tzParts(el.getAttribute('data-clk'),now);
    el.querySelector('.hm').textContent=o.hour+':'+o.minute;el.querySelector('.ss').textContent=o.second;el.querySelector('.dt').textContent=o.weekday+' '+(+o.day)+' '+MON[o.month-1];}catch(e){}});
  [].forEach.call(document.querySelectorAll('[data-run]'),function(el){var x=span((now-(+el.getAttribute('data-run')))*(+el.getAttribute('data-mult')||1)+(+el.getAttribute('data-base')||0));el.textContent=pad(x.d*24+x.h)+':'+pad(x.m)+':'+pad(x.s);});
  [].forEach.call(document.querySelectorAll('[data-rec]'),function(el){var sec=Math.max(0,Math.floor((now-(+el.getAttribute('data-rec')))/1000));el.textContent=Math.floor(sec/60)+':'+pad(sec%60);});
  [].forEach.call(document.querySelectorAll('[data-cd]'),function(el){var left=+el.getAttribute('data-cd')-now,sec=Math.max(0,Math.ceil(left/1000));el.textContent=pad(Math.floor(sec/60))+':'+pad(sec%60);
    if(left<=0&&S){var f=myFocusNow();if(f&&f.id===el.getAttribute('data-fid'))focusUp(f);}});
  [].forEach.call(document.querySelectorAll('[data-dl]'),function(el){var left=+el.getAttribute('data-dl')-now,x=span(left),u=el.querySelectorAll('b');
    u[0].textContent=pad(x.d);u[1].textContent=pad(x.h);u[2].textContent=pad(x.m);u[3].textContent=pad(x.s);
    var over=left<0;if(el.classList.contains('over')!==over){el.classList.toggle('over',over);el.querySelector('.cdl').textContent=over?'Overdue by':'Time left';}
    el.classList.toggle('soon',!over&&left<36e5);});}
(function loop(){try{tick();}catch(e){}setTimeout(loop,1000-Date.now()%1000+8);})();   // flips exactly on each new second
function tzCity(tz){var t=(typeof TZS!=='undefined')&&TZS.find(function(x){return x[1]===tz;});return t?t[0]:String(tz||'').split('/').pop().replace(/_/g,' ');}
function offMin(tz){try{return Math.round(tzOffset(tz,Date.now())/6e4);}catch(e){return 0;}}
/* Automatic clocks: you first, then the places your people are, by how many people are there. */
function autoZones(){var mine=myTz||S.settings.deadlineTz,out=[{city:tzCity(mine),tz:mine,me:true}],used={};used[offMin(mine)]=1;
  var groups={};S.people.forEach(function(p){if(p.id===me||!p.tz)return;(groups[p.tz]=groups[p.tz]||[]).push(p.name.split(/\s+/)[0]);});
  if(S.settings.deadlineTz&&!groups[S.settings.deadlineTz])groups[S.settings.deadlineTz]=[];
  Object.keys(groups).sort(function(a,b){return groups[b].length-groups[a].length;}).forEach(function(z){if(out.length>=3||used[offMin(z)])return;used[offMin(z)]=1;out.push({city:tzCity(z),tz:z,names:groups[z]});});
  zoneList().forEach(function(z){if(out.length>=3||used[offMin(z.tz)])return;used[offMin(z.tz)]=1;out.push({city:tzCity(z.tz),tz:z.tz,names:[]});});   // the clocks chosen at setup fill any space left
  return out;}
function clockRow(){var auto=S.settings.clockMode!=='fixed',zs=auto?autoZones():zoneList();if(!zs.length&&myTz)zs=[{city:zoneName(myTz),tz:myTz}];
  if(auto)return h('div',{class:'clocks'},zs.map(function(z){var label=z.me?'You · '+z.city:z.city+(z.names&&z.names.length?' · '+(z.names.length>2?z.names.slice(0,2).join(', ')+' +'+(z.names.length-2):z.names.join(', ')):' time');
    return h('div',{class:'clk'+(z.me?' mine':''),'data-clk':z.tz,role:'timer','aria-label':'Time in '+z.city},h('small',{text:label}),h('div',{class:'dg'},h('span',{class:'hm'},'00:00'),h('span',{class:'ss'},'00')),h('span',{class:'dt'},''));}));
  return h('div',{class:'clocks'},zs.map(function(z){return h('div',{class:'clk'+(z.tz===myTz||zs.length===1?' mine':''),'data-clk':z.tz,role:'timer','aria-label':'Time in '+z.city},
    h('small',{text:z.city+' time'}),h('div',{class:'dg'},h('span',{class:'hm'},'00:00'),h('span',{class:'ss'},'00')),h('span',{class:'dt'},'')) ;}));}
function greeting(){var p=person(me),hr=new Date().getHours(),part=hr<5?'Still up':hr<12?'Good morning':hr<17?'Good afternoon':hr<22?'Good evening':'Good night',td=today();
  var mine=S.tasks.filter(function(t){return open(t)&&(t.assignee===me||(!person(t.assignee)&&t.createdBy===me));});
  var due=mine.filter(function(t){return t.due===td;}).length,lt=mine.filter(late).length,nw=S.tasks.filter(forMe),doneT=S.tasks.filter(function(t){return doneOn(t,td)&&t.assignee===me;}).length;
  var bits=[],link=function(n,label,st){return h('button',{class:'gl',type:'button',onclick:function(){goTasks(st);}},h('b',{text:n}),' '+label);};
  if(lt)bits.push(link(lt,'overdue','late'));if(due)bits.push(link(due,'due today','today'));
  if(nw.length){var from={};nw.forEach(function(t){from[t.createdBy]=1;});var ids=Object.keys(from);bits.push(link(nw.length,'new from '+(ids.length===1?pName(ids[0]):ids.length+' people'),'forme'));}
  var sg=S.tasks.filter(toSign).length,mn=S.tasks.filter(function(t){return newMentions(t)>0;}).length;
  if(sg)bits.push(link(sg,'to sign off','review'));if(mn)bits.push(link(mn,mn===1?'mention':'mentions','mention'));
  var line=bits.length?null:(mine.length?'Nothing is due today. A good day to get ahead.':doneT?'Everything for today is done. Well played.':'Your list is clear. Add a task whenever you are ready.');
  return h('div',{class:'greet'},h('div',{class:'hi'},h('span',{class:'wave','aria-hidden':'true'},hr<17&&hr>=5?'☀️':'🌙'),part+(p?', '+p.name.split(' ')[0]:'')),
    bits.length?h('div',{class:'brief'},h('span',null,'You have'),bits):h('p',{text:line}));}
function topbar(title,sub,big){var n=S.tasks.filter(function(t){return forMe(t)||toSign(t)||newMentions(t)>0;}).length,p=person(me);
  return h('header',{class:'top'+(big?' home':'')},
    h('div',{class:'tt'},big?[greeting(),h('h1',{html:"Let's become<br>more productive"})]:[h('h1',{class:'plain',text:title}),sub?h('p',{text:sub}):null]),
    big?clockRow():null,
    h('div',{class:'tools'},h('span',{class:'logo',html:LOGO,'aria-hidden':'true'}),
      h('div',{class:'appid'},h('b',{text:BRAND}),(S.workspace&&S.workspace.name)?h('small',{text:S.workspace.name}):null),
      h('div',{class:'tl a'},h('button',{class:'ic',type:'button','aria-label':n+' things need you',html:I.bell,onclick:function(){V.tab='tasks';V.status='needme';V.subject='all';V.q='';render();}},n?h('span',{class:'badge',text:n}):null),h('small',null,'Alerts')),
      h('div',{class:'tl z'},S.owner?h('button',{class:'av',type:'button','aria-label':'Settings',html:I.cog,onclick:function(){V.tab='more';render();window.scrollTo(0,0);}})
        :h('button',{class:'av',type:'button','aria-label':'Your account',text:p?initials(p.name):'?',onclick:function(){openMe();}}),h('small',{text:S.owner?'Settings':'Account'}))));}
function toggleDone(t){if(t.status==='review'&&!toSign(t)){toast('This is waiting for sign off from '+pName(t.createdBy)+'.');return;}
  send('saveTask',{task:{id:t.id,status:open(t)?'done':'in_progress'}},true);
  if(t.status==='review')toast('Sent to '+pName(t.createdBy)+' for sign off.');else if(open(t)===false&&t.repeat!=='none')toast('Done. The next one is scheduled.');}
function row(t,showSubject){var d=dueText(t),meta=[],cl=t.checklist||[],last=t.updates[t.updates.length-1];
  if(showSubject)meta.push(h('span',null,h('i',{class:'dot',style:'background:'+sColor(t.subjectId)}),sName(t.subjectId)));
  if(d)meta.push(h('span',{class:d.cls,text:d.text}));
  if(t.priority==='high'&&open(t))meta.push(h('span',{class:'hi',text:'High'}));
  if(t.status==='waiting')meta.push(h('span',{class:'wait',text:'Waiting'+(t.waitingOn?' on '+t.waitingOn:'')}));
  if(t.status==='in_progress')meta.push(h('span',{text:'In progress'}));
  if(t.status==='review')meta.push(h('span',{class:'wait',text:toSign(t)?'Needs your sign off':'Awaiting sign off'}));
  if(newMentions(t))meta.push(h('span',{class:'hi',text:'Mentioned you'}));
  if((t.files||[]).length)meta.push(h('span',{text:t.files.length+(t.files.length===1?' file':' files')}));
  if(spent(t)>=6e4)meta.push(h('span',{text:dur(spent(t))+' tracked'}));
  if(cl.length)meta.push(h('span',{text:cl.filter(function(c){return c.done;}).length+' of '+cl.length+' steps'}));
  if(t.repeat&&t.repeat!=='none')meta.push(h('span',{text:'Repeats'}));
  if(hidden(t))meta.push(h('span',{text:'Private'}));
  if(forMe(t))meta.push(h('span',{class:'wait',text:'New for you'}));
  else if(last)meta.push(h('span',{text:'Updated '+stamp(last.at)}));
  return h('div',{class:'row'+(open(t)?'':' done')},
    h('button',{class:'ck'+(open(t)?(t.status==='waiting'||t.status==='review'?' w':t.status==='in_progress'?' i':''):' on'),type:'button','aria-label':(open(t)?'Mark done: ':'Reopen: ')+t.title,html:I.check,onclick:function(){toggleDone(t);}}),
    h('button',{class:'rb',type:'button',onclick:function(){openTask(t.id);}},h('strong',{text:t.title}),meta.length?h('div',{class:'meta'},meta):null),
    t.assignee&&person(t.assignee)?h('span',{class:'who',title:pName(t.assignee),text:initials(pName(t.assignee))}):null);}
function ring(pct){var c=2*Math.PI*34;return h('div',{class:'ring'},
  h('div',{html:'<svg width="84" height="84" viewBox="0 0 84 84"><circle cx="42" cy="42" r="34" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="8"/>'+(pct?'<circle cx="42" cy="42" r="34" fill="none" stroke="#FF7059" stroke-width="8" stroke-linecap="round" stroke-dasharray="'+(c*pct/100).toFixed(1)+' '+c.toFixed(1)+'" transform="rotate(-90 42 42)"/>':'')+'</svg>'}),
  h('b',{text:pct+'%'}));}
function goTasks(status,subject){V.tab='tasks';V.status=status;V.subject=subject||'all';V.q='';render();window.scrollTo(0,0);}

/* ---------- Home ---------- */
function viewHome(){var td=today(),p=person(me);
  var plan=S.tasks.filter(function(t){return open(t)&&t.due&&t.due<=td;}),doneT=S.tasks.filter(function(t){return doneOn(t,td);});
  var total=plan.length+doneT.length,pct=total?Math.round(doneT.length/total*100):0;
  var msg=!total?'Nothing is planned for today yet':pct===100?"Great, your today's plan is done":pct>=70?"Great, your today's plan almost done":pct>=30?'Good pace, keep going':"Today's plan is waiting for you";
  var sched=plan.slice().sort(sortT),show=sched.slice(0,sched.length>4?3:4);
  var n={late:S.tasks.filter(late).length,wait:S.tasks.filter(function(t){return t.status==='waiting';}).length,mine:S.tasks.filter(forMe).length};
  var cards=show.map(function(t,i){var d=dueText(t),lt=d&&d.cls==='late';return h('button',{class:'sc'+(i%4===1||i%4===2?' p':''),type:'button',onclick:function(){openTask(t.id);}},
    h('strong',{text:t.title}),h('small',{style:lt?'color:var(--danger)':'',text:lt?d.text:t.start?(t.start+(t.end?' to '+t.end:'')):'Any time today'}),
    h('span',{class:'tag'},h('i',{class:'dot',style:'background:'+sColor(t.subjectId)}),sName(t.subjectId)),i%4===1?ill('card_meeting','sc-ill'):i%4===2?ill('card_planning','sc-ill'):null);});
  if(sched.length>show.length)cards.push(h('button',{class:'sc more',type:'button',onclick:function(){goTasks('today');}},h('strong',null,'Click to view more'),h('small',{text:'+'+(sched.length-show.length)+' schedule'})));
  if(!cards.length)cards=[h('div',{class:'empty'},ill('empty_today'),h('b',null,'Nothing due today'),'Use the plus button to add a task.')];
  var next=S.tasks.filter(function(t){return open(t)&&t.due&&t.due>td;}).sort(sortT).slice(0,5),undated=S.tasks.filter(function(t){return open(t)&&!t.due;}).length;
  var subs=liveSubjects().map(function(s){var all=S.tasks.filter(function(t){return t.subjectId===s.id;}),o=all.filter(open).length,pc=all.length?Math.round((all.length-o)/all.length*100):0;
    return h('button',{class:'sb',type:'button',onclick:function(){goTasks('open',s.id);}},h('i',{class:'dot',style:'background:'+s.color+';width:12px;height:12px'}),
      h('strong',{text:s.name}),h('small',{text:(s.privateTo?'Private, ':'')+o+' open'+(all.length?', '+pc+'% done':'')}),h('div',{class:'bar'},h('i',{style:'width:'+pc+'%;background:'+s.color})));});
  subs.push(h('button',{class:'sb add',type:'button',onclick:function(){openSubject();}},'New client'));
  var rn=running(),fNow=myFocusNow();
  var summary=h('div',{class:'hgrid'},
      h('section',{class:'hero'},h('div',null,h('h2',{text:msg}),total?h('small',{text:doneT.length+' of '+total+' done'}):null,
        h('button',{class:'btn sm',type:'button',onclick:function(){goTasks('today');}},'View today')),h('div',{class:'hart'},ill(total&&pct===100?'all_done':'home_hero','hero-ill'),ring(pct))),
      h('div',{class:'glance'},
        h('button',{class:'pill r',type:'button',onclick:function(){goTasks('late');}},h('b',{text:n.late}),h('span',null,'Overdue')),
        h('button',{class:'pill o',type:'button',onclick:function(){goTasks('waiting');}},h('b',{text:n.wait}),h('span',null,'Waiting')),
        h('button',{class:'pill t',type:'button',onclick:function(){goTasks('forme');}},h('b',{text:n.mine}),h('span',null,'New for you'))));
  /* phones: the day at a glance first, then what needs an answer, then the rest */
  var ph=PHONE();
  return [topbar('','',true),meetBanner(),ph?summary:null,setupCard(),ph?null:clockCard(),ph?null:timeCard(),ph?requestsBlock():null,ph?questionsBlock():null,ph?clockCard():null,ph?timeCard():null,startCard(),S.owner?focusStrip():null,ph?null:requestsBlock(),ph?null:questionsBlock(),quietBlock(),!fNow&&rn?h('div',{class:'runbar'},h('div',null,h('small',null,'Timer running'),h('strong',{text:rn.t.title})),h('b',{'data-run':String(rn.e.start)},''),
      h('button',{class:'btn sm',type:'button',onclick:function(){send('timerStop',{id:rn.t.id},true);}},'Stop')):null,h('div',{class:'page'},
    ph?null:summary,
    h('div',{class:'hgrid b'},
      h('div',{class:'blk'},h('div',{class:'sec'},h('h3',null,"Today's schedule"),h('span',{text:DAYL[parse(td).getDay()]+', '+short(td)})),schedCols(cards)),
      h('div',{class:'blk'},h('div',{class:'sec'},h('h3',null,'Coming up'),h('button',{type:'button',onclick:function(){V.tab='cal';render();}},'Calendar')),
        next.length?h('div',{class:'rows'},next.map(function(t){return row(t,true);})):h('div',{class:'empty'},h('b',null,'Nothing coming up'),'Tasks with a later due date show here.'),
        undated?h('button',{class:'btn ghost sm',style:'margin-top:12px',type:'button',onclick:function(){goTasks('open');},text:undated+(undated===1?' open task has':' open tasks have')+' no due date'}):null)),
    h('div',{class:'blk'},h('div',{class:'sec'},h('h3',null,'Clients'),S.owner?h('button',{type:'button',onclick:function(){V.tab='more';render();}},'Manage'):null),h('div',{class:'subs'},subs)))];}

/* ---------- beating procrastination ----------
   Putting things off is mostly about feelings, not laziness: a task feels unclear, too big, dull or risky,
   so we avoid the feeling by avoiding the task. Everything here makes starting smaller and kinder. */
var REASONS=[['unclear',"I'm not sure what to do"],['too_big','It feels too big'],['boring',"It's boring"],['perfect','I want it to be perfect'],
  ['tired',"I'm tired or anxious"],['distracted','I keep getting distracted'],['why',"I don't see why it matters"],['waiting',"I'm waiting on someone"]];
var RLABEL={};REASONS.forEach(function(r){RLABEL[r[0]]=r[1];});
var FX={hide:false,tip:'',full:false,park:[],upFor:''};
function myFocusNow(){return (S.myFocus||[]).find(function(f){return !f.end;})||null;}
function focusOf(pid){return (S.focusNow||[]).find(function(f){return f.personId===pid;})||null;}
function mineOpen(t){return open(t)&&t.status!=='review'&&(t.assignee===me||(!person(t.assignee)&&t.createdBy===me));}
function days(n){return n+(n===1?' day':' days');}
function first(n){return String(n||'').split(/\s+/)[0];}
/* the task to start now: anything past its date, then what has reached its start by day, then the nearest deadline */
function startList(){var td=today(),pr={high:0,normal:1,low:2};
  var rank=function(t){return late(t)?0:(t.startByAuto&&t.startByAuto<=td)||t.due===td?1:t.due?2:3;};
  return S.tasks.filter(function(t){return mineOpen(t)&&t.status!=='waiting';}).sort(function(a,b){return rank(a)-rank(b)||(deadline(a)||9e15)-(deadline(b)||9e15)||pr[a.priority]-pr[b.priority]||(a.createdAt||0)-(b.createdAt||0);});}
function startFocus(taskId,mins,opts){opts=opts||{};if(S.workspace&&S.workspace.active===false){toast('This workspace is read only until the plan is renewed.');return;}
  FX={hide:false,tip:opts.tip||'',full:!!opts.full,park:FX.park||[],upFor:''};
  send('focusStart',{id:uid(),taskId:taskId||'',minutes:mins},true);closeSheet();
  if(opts.full&&document.documentElement.requestFullscreen){try{document.documentElement.requestFullscreen().catch(function(){});}catch(e){}}
  renderFocus();}
function endFocus(outcome){var f=myFocusNow();if(!f)return;var keepGoing=outcome==='more';
  send('focusEnd',{outcome:keepGoing?'kept':outcome},true);
  if(keepGoing){send('focusStart',{id:uid(),taskId:f.taskId,minutes:f.plannedMin},true);FX.upFor='';renderFocus();return;}
  if(document.fullscreenElement&&document.exitFullscreen){try{document.exitFullscreen().catch(function(){});}catch(e){}}
  var mins=Math.max(1,Math.round((Date.now()-f.start)/6e4));
  toast(outcome==='done'?'Done. That is how it is done, one start at a time.':mins+(mins===1?' minute':' minutes')+' of focus. Every start counts.');
  if(FX.park.length){var items=FX.park.map(function(x){return {title:x,id:uid()};});FX.park=[];send('bulkAdd',{items:items,base:{assignee:me,subjectId:'',priority:'normal',status:'new',repeat:'none'}},true);toast('Your parked thoughts are saved as tasks.');}
  renderFocus();}
function chime(){try{var C=window.AudioContext||window.webkitAudioContext;if(!C)return;var c=new C(),o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=660;g.gain.setValueAtTime(.0001,c.currentTime);
  g.gain.exponentialRampToValueAtTime(.2,c.currentTime+.05);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+1.2);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+1.3);}catch(e){}}
function focusUp(f){if(FX.upFor===f.id)return;FX.upFor=f.id;chime();if(alertsOn())notify('Focus session finished','Keep going, or stop here with a clear conscience.','hv-focus');FX.hide=false;renderFocus();}
/* the full screen focus view: one task, a countdown, and somewhere to park stray thoughts */
function renderFocus(){var el=$('#fx'),f=S&&myFocusNow();
  if(!f||FX.hide){if(el)el.hidden=true;return;}
  if(!el){el=h('div',{id:'fx',role:'dialog','aria-modal':'true','aria-label':'Focus session'});document.body.appendChild(el);}
  el.hidden=false;var t=f.taskId?S.tasks.find(function(x){return x.id===f.taskId;}):null,end=f.start+f.plannedMin*6e4,up=Date.now()>=end;
  var park=h('input',{class:'in',id:'fx-park',maxlength:200,placeholder:'A thought popped up? Park it here','aria-label':'Park a thought for later',value:FX.draft||'',oninput:function(e){FX.draft=e.target.value;},onkeydown:function(e){if(e.key==='Enter'){e.preventDefault();addPark();}}});
  var addPark=function(){var v=park.value.trim();if(!v)return;FX.park.push(v);park.value='';FX.draft='';renderFocus();var n=$('#fx-park');if(n)n.focus();};
  el.replaceChildren(h('div',{class:'fxi'},
    h('small',{class:'fxl',text:up?'Time is up':'Focus · '+f.plannedMin+' minutes'}),
    h('h2',{text:t?t.title:'Focus time'}),
    t&&t.firstStep?h('p',null,h('b',null,'First step: '),t.firstStep):null,
    t&&t.goodEnough?h('p',{class:'ge'},h('b',null,'Good enough: '),t.goodEnough):null,
    h('div',{class:'fxt','data-cd':String(end),'data-fid':f.id,role:'timer'},'00:00'),
    up?h('p',null,'Nice work. Starting was the hard part. Keep going for another '+f.plannedMin+' minutes, or stop here with a clear conscience.')
      :h('p',{text:FX.tip||'Just this one task. If something else comes to mind, park it below and get back to it later.'}),
    h('div',{class:'acts'},up?[h('button',{class:'btn',type:'button',onclick:function(){endFocus('more');}},'Keep going'),
        h('button',{class:'btn ghost',type:'button',onclick:function(){endFocus('stopped');}},'Stop here'),
        t?h('button',{class:'btn ghost',type:'button',onclick:function(){endFocus('done');}},'The task is done'):null]
      :[t?h('button',{class:'btn ghost sm',type:'button',onclick:function(){endFocus('done');}},'The task is done'):null,
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){endFocus('stopped');}},'End now'),
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){FX.hide=true;renderFocus();render();}},'Hide')]),
    h('div',{class:'park'},park,h('button',{class:'btn ghost sm',type:'button',onclick:addPark},'Park')),
    FX.park.length?h('ul',null,FX.park.map(function(x){return h('li',{text:'Parked: '+x});}),h('li',null,'These become tasks for you when the session ends.')):null));
  tick();}
function focusBar(f){var t=f.taskId?S.tasks.find(function(x){return x.id===f.taskId;}):null;
  return h('div',{class:'runbar',style:'border-left-color:var(--plum-ink)'},h('div',null,h('small',null,'In focus'),h('strong',{text:t?t.title:'Focus time'})),
    h('b',{'data-cd':String(f.start+f.plannedMin*6e4),'data-fid':f.id},''),h('button',{class:'btn sm plum',type:'button',onclick:function(){FX.hide=false;renderFocus();}},'Open'));}
/* the Start here card at the top of Home */
function startCard(){var f=myFocusNow();if(f)return focusBar(f);
  var list=startList();if(!list.length)return null;var i=(V.si||0)%list.length,t=list[i],pt=S.myPatterns||{},d=dueText(t),td=today();
  var saveStep=function(){var v=(V.stepDraft||'').trim();if(!v){toast('Write one small first step.');return;}V.stepDraft='';send('saveTask',{task:{id:t.id,firstStep:v}},true);};
  return h('section',{class:'start','aria-label':'Start here'},
    h('div',{class:'sh1'},h('small',null,'Start here'),pt.streak?h('span',{class:'badge-s g',text:pt.startedToday?'You started today · '+pt.streak+(pt.streak===1?' day':' days')+' in a row':pt.streak+(pt.streak===1?' day':' days')+' in a row. Start one thing to keep it going'}):h('span',{class:'badge-s',text:'Small starts count'})),
    h('button',{class:'stt',type:'button',onclick:function(){openTask(t.id);}},t.title),
    h('div',{class:'meta'},d?h('span',{class:d.cls,text:d.cls==='late'?'Past its date. Start small, it still counts':'Due '+d.text}):null,
      t.startByAuto&&t.startByAuto<=td&&!late(t)&&t.due!==td?h('span',null,'A good day to start'):null,t.estimateMin?h('span',{text:'About '+dur(t.estimateMin*6e4)}):null,
      t.planAt&&t.planAt>Date.now()?h('span',{text:'Planned for '+stamp(t.planAt)+(t.planWhere?', '+t.planWhere:'')}):null),
    t.firstStep?h('p',{class:'fs'},h('b',null,'First step: '),t.firstStep)
      :h('div',{class:'addrow',style:'margin-top:0'},h('input',{class:'in',id:'sh-step',maxlength:200,placeholder:'Tiny first step, for example: open the file','aria-label':'First step',value:V.stepDraft||'',oninput:function(e){V.stepDraft=e.target.value;},onkeydown:function(e){if(e.key==='Enter'){e.preventDefault();saveStep();}}}),
        h('button',{class:'btn ghost sm',type:'button',onclick:saveStep},'Save')),
    h('div',{class:'acts'},h('button',{class:'btn sm',type:'button',onclick:function(){startFocus(t.id,10);}},'Start for 10 minutes'),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){openStuck(t.id);}},"I'm stuck"),
      list.length>1?h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.si=i+1;V.stepDraft='';render();}},'Another task'):null));}
/* questions people asked you so they can get going */
function openQuestions(){var out=[];S.tasks.forEach(function(t){(t.updates||[]).forEach(function(u){if(u.question&&u.to===me&&!u.answeredAt)out.push({t:t,u:u});});});return out.sort(function(a,b){return a.u.at-b.u.at;});}
function questionsBlock(){var qs=openQuestions();if(!qs.length)return null;V.qa=V.qa||{};
  return h('div',{class:'blk',style:'margin-bottom:22px'},h('div',{class:'sec'},h('h3',null,'Questions for you'),h('span',{text:qs.length+(qs.length===1?' person is waiting':' people are waiting')+' to get going'})),
    h('div',{class:'qlist'},qs.map(function(x){var k=x.t.id+x.u.at,id='qa-'+x.t.id.replace(/\W/g,'')+x.u.at;
      return h('div',{class:'qcard'},h('button',{class:'lk',type:'button',onclick:function(){openTask(x.t.id);},text:x.t.title}),h('p',{text:x.u.text}),
        h('small',{text:pName(x.u.by)+(x.u.kind==='why'?' asked why this matters · ':' asked · ')+stamp(x.u.at)}),
        h('div',{class:'addrow',style:'margin-top:2px'},h('input',{class:'in',id:id,maxlength:2000,placeholder:'Your answer','aria-label':'Answer to '+pName(x.u.by),value:V.qa[k]||'',oninput:function(e){V.qa[k]=e.target.value;}}),
          h('button',{class:'btn plum sm',type:'button',onclick:function(){var v=(V.qa[k]||'').trim();if(!v)return;V.qa[k]='';send('addUpdate',{id:x.t.id,text:'@'+first(pName(x.u.by))+' '+v},true);toast('Answer sent');}},'Reply')));})));}
/* for the boss: tasks that might be stuck. Never the reason, only the task and how quiet it has been */
function quietBlock(){var list=(S.stuckSignals||[]).map(function(x){return {x:x,t:S.tasks.find(function(t){return t.id===x.taskId;})};}).filter(function(o){return o.t;});if(!list.length)return null;
  return h('div',{class:'blk',style:'margin-bottom:22px'},h('div',{class:'sec'},h('h3',null,'Might be stuck'),h('span',null,'No movement in 3 days, due soon')),
    h('div',{class:'slist'},list.slice(0,6).map(function(o){var who=pName(o.x.assignee);
      return h('div',{class:'srow'},h('span',{class:'who',text:initials(who)}),h('div',null,h('strong',{text:o.t.title}),h('small',{text:who+' · quiet for '+o.x.quietDays+' days · '+(o.x.overdue?'past its date':dueText(o.t).text)})),
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){openTask(o.t.id);M.note='@'+first(who)+' how is this one going? Is anything in the way that I can clear for you?';renderSheet();var n=$('#t-note');if(n)n.focus();}},'Check in'));})),
    h('p',{class:'note tip',style:'margin:8px 0 0'},'A kind check in works better than pressure. People often go quiet when a task is unclear or feels too big.'));}
function focusStrip(){var others=(S.focusNow||[]).filter(function(f){return f.personId!==me&&person(f.personId);});if(!others.length)return null;
  return h('div',{class:'fnow'},'In focus now',others.map(function(f){var t=f.taskId&&S.tasks.find(function(x){return x.id===f.taskId;});return h('span',{class:'badge-s',title:t?t.title:'',text:first(pName(f.personId))+(t?' · '+(t.title.length>28?t.title.slice(0,28)+'…':t.title):'')});}),h('span',null,'Best not to interrupt.'));}

/* ---------- Why am I stuck? ---------- */
function openStuck(taskId,reason){M={kind:'stuck',id:taskId||'',reason:'',q:'',ge:'',steps:null,pick:{},wait:'',waitWho:'',nudge:''};$('#ov').hidden=false;if(reason)pickReason(reason,true);else renderSheet();}
function pickReason(r,quiet){var t=S.tasks.find(function(x){return x.id===M.id;});M.reason=r;
  send('logStuck',{id:uid(),taskId:M.id,reason:r},true);
  if(r==='unclear')M.q='To get started, could you tell me what the finished result should look like?';
  if(r==='why')M.q='Could you tell me who this helps and why it matters now? It will help me get it right.';
  if(r==='perfect')M.ge=t&&t.goodEnough||'';
  if(r==='waiting'){M.wait=t&&t.waitingOn||'';M.nudge='A quick nudge: I need this from you to move "'+(t?t.title:'this task')+'" forward. Thank you!';}
  if(r==='too_big')loadSteps();
  if(r==='tired')M.breath=Date.now();
  renderSheet();}
function loadSteps(){var id=M.id,t=S.tasks.find(function(x){return x.id===id;});M.steps=null;M.busy=true;
  var local=['Open everything you need for this task','Write what done looks like in one line','Do the smallest first piece, rough is fine','Do the next piece','Check it and hand it over'];
  var priv=!!t&&(t.private||!!(subj(t.subjectId)||{}).privateTo);   // private tasks are never sent to the AI: the free rules write their steps
  (navigator.onLine===false||!t?Promise.reject(new Error('offline')):whenSaved().then(function(){return server(S.features.ai&&!priv?'aiSteps':'stepIdeas',{id:id});}))
    .then(function(res){return res.steps&&res.steps.length?res.steps:local;},function(){return local;})
    .then(function(steps){if(!M||M.kind!=='stuck'||M.id!==id)return;M.busy=false;M.steps=steps;M.pick={};steps.forEach(function(s,i){M.pick[i]=true;});renderSheet();});}
function tiredCount(){var since=Date.now()-14*864e5;return (S.myStuck||[]).filter(function(x){return x.reason==='tired'&&x.at>since;}).length;}
function renderStuck(){var t=M.id?S.tasks.find(function(x){return x.id===M.id;}):null,out=[];
  if(!M.reason){out.push(head('What is getting in the way?'),
    h('p',{class:'note',style:'margin:0;font-size:13px'},'Getting stuck is normal. It is usually about how a task feels, not about being lazy. Pick what fits best; only you can see your answer.'),
    t?h('p',{style:'margin:0;font-weight:600',text:t.title}):null,
    h('div',{class:'reasons'},REASONS.map(function(r){return h('button',{type:'button',onclick:function(){pickReason(r[0]);}},r[1]);})));return out;}
  var canAsk=!!t&&(t.createdBy!==me||!S.owner),giverName=t&&t.createdBy&&t.createdBy!==me?first(pName(t.createdBy)):'your manager';
  var go=function(mins,label,opts){return h('button',{class:'btn'+(opts&&opts.ghost?' ghost':''),type:'button',onclick:function(){startFocus(M.id,mins,opts);}},label);};
  var back=h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.reason='';renderSheet();}},'Something else is in the way');
  out.push(head(RLABEL[M.reason]));
  if(M.reason==='unclear'){out.push(h('p',{class:'note',style:'margin:0;font-size:13px'},'Unclear tasks are the most common reason people put work off. One good question usually clears it.'));
    if(canAsk)out.push(h('textarea',{class:'in',id:'st-q',rows:3,maxlength:1000,'aria-label':'Your question',value:M.q,oninput:bind(M,'q')}),
      h('button',{class:'btn',type:'button',onclick:function(){var v=M.q.trim();if(!v)return;var id=M.id;closeSheet();send('askQuestion',{id:id,text:v},true);toast('Question sent'+' to '+giverName+'. It shows on their home screen.');}},'Send question'+' to '+giverName));
    else out.push(h('p',{class:'panel',style:'margin:0'},'You gave yourself this one. Write down the one thing you are unsure about, and decide it in two minutes. Any decision beats waiting.'));
    out.push(h('p',{class:'note',style:'margin:0'},'While you wait for an answer, do the part you are sure about.'),go(10,'Do what I can for 10 minutes',{ghost:true}));}
  if(M.reason==='too_big'){out.push(h('p',{class:'note',style:'margin:0;font-size:13px'},'Big tasks feel heavy because you can see the whole mountain. You only need to see the first step.'));
    if(M.busy||!M.steps)out.push(h('p',{class:'note'},'Breaking it into steps…'));
    else out.push(h('div',{class:'panel'},h('strong',null,'Suggested steps'),M.steps.map(function(s,i){return h('label',{class:'switch',style:'padding:6px 0'},h('input',{type:'checkbox',checked:!!M.pick[i],onchange:function(e){M.pick[i]=e.target.checked;}}),s);}),
      h('p',{class:'note',style:'margin:6px 0 0'},'Untick any that do not fit. You can change them later.')),
      h('button',{class:'btn',type:'button',onclick:function(){var chosen=M.steps.filter(function(s,i){return M.pick[i];});if(!chosen.length){toast('Keep at least one step.');return;}
        var cl=(t.checklist||[]).concat(chosen.map(function(s){return {id:uid().slice(-6),text:s,done:false};})),patch={id:t.id,checklist:cl};if(!t.firstStep)patch.firstStep=chosen[0];
        send('saveTask',{task:patch},true);startFocus(t.id,10,{tip:'Only the first step: '+chosen[0]+'. Nothing else yet.'});}},'Add these steps and start the first one'));}
  if(M.reason==='boring'){out.push(h('p',{class:'note',style:'margin:0;font-size:13px'},'Dull tasks feel much worse in your head than they are. Make it short, and give yourself something nice for doing it.'),
    h('ul',{class:'ideas'},h('li',null,'Race the clock: see how much you get done in 10 minutes'),h('li',null,'Put on music you like while you do it'),h('li',null,'Pair it with something nice: a coffee now, a walk after'),h('li',null,'Do it on a call with a teammate, both working quietly')),
    go(10,'Start a 10 minute sprint'));}
  if(M.reason==='perfect'){out.push(h('p',{class:'note',style:'margin:0;font-size:13px'},'Aim for done, not perfect. A rough version you can improve beats a perfect one that never starts. Decide what good enough means before you begin.'),
    fld('Good enough looks like',h('input',{class:'in',id:'st-ge',maxlength:300,placeholder:'For example: two pages, numbers checked, no polish','aria-label':'Good enough looks like',value:M.ge,oninput:bind(M,'ge')}),true),
    h('button',{class:'btn',type:'button',onclick:function(){var v=M.ge.trim();if(v&&t&&v!==t.goodEnough)send('saveTask',{task:{id:t.id,goodEnough:v}},true);startFocus(M.id,25,{tip:'Draft mode: rough is fine. Stop when you reach your good enough line.'});}},'Start a 25 minute rough draft'));}
  if(M.reason==='tired'){var n=tiredCount();
    out.push(h('p',{class:'note',style:'margin:0;font-size:13px'},'When you are tired or anxious, a task can feel like a threat. Calm your body first, then do something very small.'),
      h('div',{class:'breath'+(M.breath&&Date.now()-M.breath<62000?' go':''),'aria-hidden':'true'},'Breathe'),
      h('p',{class:'note',style:'margin:0;text-align:center'},'Breathe in slowly as the circle grows, and out as it shrinks. One minute is enough.'),
      go(5,'Now just 5 minutes on the first step'),
      n>=3?h('p',{class:'panel',style:'margin:0;font-size:13px'},'You have felt this way a few times in the last two weeks. That is worth noticing. Try to rest properly, and if it keeps up, talk to someone you trust, or to your manager about your workload.'):null);}
  if(M.reason==='distracted'){out.push(h('ul',{class:'ideas'},h('li',null,'Put your phone in another room, or face down and silent'),h('li',null,'Close every tab and app except the one you need'),h('li',null,'Tell people you are focusing for 25 minutes'),h('li',null,'Park stray thoughts in the box on the focus screen instead of acting on them')),
    go(25,'Start 25 minutes, full screen',{full:true,tip:'Full screen, one task. Park anything else in the box below.'}));}
  if(M.reason==='why'){out.push(h('p',{class:'note',style:'margin:0;font-size:13px'},'It is hard to start work that feels pointless. Knowing who it helps makes it much easier.'),
    t?h('div',{class:'panel'},h('strong',null,'Who this is for'),h('p',{style:'margin:6px 0 0',text:sName(t.subjectId)+(t.createdBy&&t.createdBy!==me?', asked for by '+pName(t.createdBy):'')+(t.due?', due '+dueText(t).text:'')}),t.details?h('p',{class:'note',style:'margin:6px 0 0',text:t.details}):null):null);
    if(canAsk)out.push(h('textarea',{class:'in',id:'st-q',rows:3,maxlength:1000,'aria-label':'Your question',value:M.q,oninput:bind(M,'q')}),
      h('button',{class:'btn',type:'button',onclick:function(){var v=M.q.trim();if(!v)return;var id=M.id;closeSheet();send('askQuestion',{id:id,text:v,kind:'why'},true);toast('Asked '+giverName+' why it matters.');}},'Ask '+giverName+' why'));
    else out.push(h('p',{class:'panel',style:'margin:0'},'You set this one yourself. Ask: what happens if it never gets done? If the answer is "nothing much", delete it. If not, that is your why.'));}
  if(M.reason==='waiting'){var others=S.people.filter(function(p){return p.id!==me;});
    out.push(h('p',{class:'note',style:'margin:0;font-size:13px'},'Mark it as waiting, send one friendly nudge, then move to another task so waiting does not stop your whole day.'),
      fld('Waiting on whom or what?',h('input',{class:'in',id:'st-wait',maxlength:200,value:M.wait,oninput:bind(M,'wait')}),true),
      others.length?fld('Nudge someone here',h('select',{class:'in',id:'st-who',value:M.waitWho,onchange:bind(M,'waitWho')},h('option',{value:'',text:'Nobody here, I will send it myself'}),others.map(function(p){return h('option',{value:p.id,text:p.name});})),true):null,
      fld('Your nudge',h('textarea',{class:'in',id:'st-nudge',rows:2,maxlength:600,value:M.nudge,oninput:bind(M,'nudge')}),true),
      h('button',{class:'btn',type:'button',onclick:function(){if(!t)return;send('saveTask',{task:{id:t.id,status:'waiting',waitingOn:M.wait.trim()}},true);var msg=M.nudge.trim();
        if(M.waitWho&&msg){send('addUpdate',{id:t.id,text:'@'+first(pName(M.waitWho))+' '+msg},true);toast('Marked as waiting. '+first(pName(M.waitWho))+' has your nudge.');}
        else if(msg){try{navigator.clipboard.writeText(msg);toast('Marked as waiting. Your nudge is copied, paste it to them.');}catch(e){toast('Marked as waiting.');}}else toast('Marked as waiting.');
        V.si=(V.si||0)+1;closeSheet();}},'Mark as waiting and nudge'));}
  out.push(back);return out;}

/* ---------- My patterns: private to each person ---------- */
function viewPatterns(tabRow){var pt=S.myPatterns||{},hrs=pt.hours||[],hm2=Math.max.apply(null,hrs.concat([1])),st=pt.stuck||{},ks=Object.keys(st).sort(function(a,b){return st[b]-st[a];}),sm=Math.max.apply(null,ks.map(function(k){return st[k];}).concat([1])),fc=pt.focus||{};
  return [topbar('My patterns','Only you can see this page'),tabRow,
    h('p',{class:'note',style:'margin:-6px 0 14px;font-size:12.5px'},'Your manager sees which tasks might be stuck and who is focusing right now. Never your reasons, moods or these patterns.'),
    h('div',{class:'ptip'},h('small',null,'This week, try this'),h('p',{text:pt.tip||'Pick one task and give it 10 minutes. Starting is the hard part.'})),
    h('div',{class:'tiles',style:'margin-top:14px'},
      h('div',{class:'tile dark'},h('b',{text:pt.streak||0}),h('span',null,(pt.streak===1?'Day':'Days')+' in a row you started something')),
      h('div',{class:'tile'},h('b',{text:dur((fc.minutes||0)*6e4)}),h('span',null,'Focus in 14 days')),
      h('div',{class:'tile'},h('b',{text:(fc.kept||0)+' of '+(fc.sessions||0)}),h('span',null,'Sessions you kept going')),
      h('div',{class:'tile'},h('b',{text:pt.multiplier?pt.multiplier+'×':'…'}),h('span',{text:pt.multiplier?'How long tasks take against your guess':'Estimate '+Math.max(0,3-(pt.samples||0))+' more finished tasks to see your multiplier'}))),
    h('div',{class:'two',style:'margin-top:14px'},
      h('div',{class:'panel'},h('strong',null,'When you start most easily'),
        hrs.some(function(x){return x;})?[h('div',{class:'cols h24'},hrs.map(function(n,i){return h('div',{class:pt.bestHours&&pt.bestHours.indexOf(i)>=0?'t':'',style:'height:'+Math.max(3,n/hm2*100)+'%',title:pad(i)+':00, '+n+(n===1?' start':' starts')});})),
          h('div',{class:'axis'},h('span',null,'00:00'),h('span',null,'12:00'),h('span',null,'23:00')),
          pt.bestHours&&pt.bestHours.length?h('p',{class:'note',style:'margin:8px 0 0',text:'Your best hour is around '+pad(pt.bestHours[0])+':00. Put your hardest task there.'}):null]
        :h('p',{class:'note',style:'margin:6px 0 0'},'Use focus sessions or the timer, and this fills in with the hours you get going most easily.')),
      h('div',{class:'panel'},h('strong',null,'What gets in your way'),h('small',{class:'note',style:'display:block'},'Last 30 days'),
        ks.length?h('div',{style:'margin-top:8px'},ks.map(function(k){return h('div',{class:'hb'},h('div',{class:'nm'},h('span',{text:RLABEL[k]||k})),h('div',{class:'stack',style:'width:'+Math.max(4,st[k]/sm*100)+'%'},h('i',{style:'width:100%;background:var(--coral)'})),h('em',{text:st[k]}));}))
        :h('p',{class:'note',style:'margin:6px 0 0'},"Nothing yet. When starting feels hard, tap I'm stuck on the task. Over time you will see what usually gets in your way."))),
    h('div',{class:'panel',style:'margin-top:14px'},h('strong',null,'Do first steps help you?'),
      h('p',{style:'margin:6px 0 0',text:pt.firstStep?'With a first step written, you finish tasks in about '+days(pt.firstStep.withDays)+'. Without one, about '+days(pt.firstStep.withoutDays)+'.':'Write a first step on a few tasks. Once you have finished some with and some without, this shows whether they help you.'})),
    h('p',{class:'note',style:'margin:14px 0 0'},'Missed a day? That is fine. Streaks are a nudge, not a test. Start one small thing and you are back.')];}

/* planned starts: a reminder on this device at the time you chose */
function planCheck(){if(!S)return;var seen={};try{seen=JSON.parse(store.get('hv-plan-seen')||'{}')||{};}catch(e){}var now=Date.now(),hit=null;
  S.tasks.forEach(function(t){if(!mineOpen(t)||!t.planAt||t.planAt>now||t.planAt<now-30*6e4||seen[t.id+':'+t.planAt])return;seen[t.id+':'+t.planAt]=now;hit=hit||t;});
  if(!hit)return;store.set('hv-plan-seen',JSON.stringify(seen));
  var body=hit.firstStep?'First step: '+hit.firstStep:hit.planWhere?'Where: '+hit.planWhere:'Just 10 minutes to begin.';
  if(alertsOn())notify('Time to start: '+hit.title,body,'hv-plan-'+hit.id);
  if(!myFocusNow())toast('You planned to start "'+hit.title+'" now. '+body);}
setInterval(planCheck,30000);

/* ---------- getting started: a checklist for new owners ---------- */
var STARTER_NAMES=/^(First client|Second client|General|Internal|Operations|Programmes|Admin|Agency internal|Firm internal)$/;
function setupSteps(){var others=S.people.filter(function(p){return p.id!==me;});
  return [
    {done:S.subjects.some(function(s){return !STARTER_NAMES.test(s.name);}),title:'Add your first real client',text:'Rename a sample client or add your own.',go:function(){openSubject(S.subjects[0]&&STARTER_NAMES.test(S.subjects[0].name)?S.subjects[0].id:null);},btn:'New client'},
    {done:others.length>0,title:'Invite someone',text:'Copy their invite link and send it on WhatsApp.',go:function(){openPerson();},btn:'New person'},
    {done:S.tasks.some(function(t){return t.assignee&&t.assignee!==me;}),title:'Give someone a task',text:'They see it on their home screen straight away.',go:function(){openTask(null,others[0]?{assignee:others[0].id}:{});},btn:'New task'},
    {done:!!S.settings.digestOn,title:'Turn on the daily summary',text:'A summary of the day at the hour you choose.',go:function(){V.tab='more';render();setTimeout(function(){var e=$('#dg-on');if(e)e.scrollIntoView({behavior:'smooth',block:'center'});},60);},btn:'Set it up'},
    {done:S.subjects.some(function(s){return !!s.shareToken;}),title:'Share a client page',text:'Your client follows progress without asking.',go:function(){var s=liveSubjects().find(function(x){return !x.privateTo;});openSubject(s?s.id:null);},btn:'Open a client'},
    {done:(S.myPush||[]).length>0||alertsOn(),title:'Get alerts on your phone',text:'New tasks, questions and reminders, free.',go:function(){openMe();},btn:'Turn on'}];}
function setupCard(){if(!S.owner||S.settings.setupHidden)return null;var steps=setupSteps(),done=steps.filter(function(x){return x.done;}).length;if(done===steps.length)return null;
  var next=steps.find(function(x){return !x.done;});
  return h('section',{class:'setup','aria-label':'Getting started'},
    h('div',{class:'sh1'},h('div',null,h('small',null,'Getting started'),h('strong',{text:done+' of '+steps.length+' done'})),
      h('button',{class:'linkb',type:'button',onclick:function(){send('saveSettings',{settings:{setupHidden:true}},true);toast('Hidden. You can do these any time from Settings.');}},'Hide this')),
    h('div',{class:'bar'},h('i',{style:'width:'+Math.round(done/steps.length*100)+'%'})),
    h('div',{class:'steps'},steps.map(function(x){return h('div',{class:'st'+(x.done?' on':'')+(x===next?' nx':'')},
      h('span',{class:'ck'+(x.done?' on':''),html:I.check,'aria-hidden':'true'}),h('div',null,h('b',{text:x.title}),h('small',{text:x.text})),
      x.done?null:h('button',{class:'btn sm'+(x===next?'':' ghost'),type:'button',onclick:x.go},x.btn));})));}

/* ---------- client requests (owner) ---------- */
function requestsBlock(){if(!S.owner)return null;var list=S.tasks.filter(function(t){return t.request&&t.request.state==='new';});if(!list.length)return null;V.rq=V.rq||{};
  return h('div',{class:'blk',style:'margin-bottom:22px'},h('div',{class:'sec'},h('h3',null,'Client requests'),h('span',{text:list.length+' waiting for you'})),
    h('div',{class:'qlist'},list.map(function(t){var k=V.rq[t.id]=V.rq[t.id]||{who:'',note:'',dec:false};
      return h('div',{class:'qcard',style:'border-left-color:var(--coral)'},h('button',{class:'lk',type:'button',onclick:function(){openTask(t.id);},text:t.title}),
        t.details?h('p',{text:t.details}):null,
        h('small',{text:t.request.by+' at '+sName(t.subjectId)+' · '+stamp(t.request.at)+(t.due?' · wants it by '+short(t.due):'')+(t.priority==='high'?' · urgent':'')}),
        k.dec?h('div',{class:'addrow',style:'margin-top:2px'},h('input',{class:'in',id:'rq-n-'+t.id,maxlength:300,placeholder:'A short reason the client will see','aria-label':'Reason',value:k.note,oninput:function(e){k.note=e.target.value;}}),
            h('button',{class:'btn danger sm',type:'button',onclick:function(){send('declineRequest',{id:t.id,note:k.note.trim()});}},'Decline'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){k.dec=false;render();}},'Back'))
          :h('div',{class:'addrow',style:'margin-top:2px;flex-wrap:wrap'},h('select',{class:'in',id:'rq-w-'+t.id,'aria-label':'Assign to',value:k.who,style:'flex:1;min-width:140px',onchange:function(e){k.who=e.target.value;}},h('option',{value:'',text:'Assign later'}),S.people.map(function(p){return h('option',{value:p.id,text:p.name+(p.id===me?' (me)':'')});})),
            h('button',{class:'btn sm',type:'button',onclick:function(){send('acceptRequest',{id:t.id,assignee:k.who});}},'Accept'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){k.dec=true;render();}},'Decline')));})));}

/* ---------- guides: how we do things, client by client ---------- */
function guideHtml(body){var out=[],list=null,kind='';
  var flush=function(){if(list){out.push(h(kind,null,list));list=null;}};
  var linkify=function(text){var parts=String(text).split(/(https?:\/\/[^\s]+)/g);return parts.map(function(p){return /^https?:\/\//.test(p)?h('a',{href:p,target:'_blank',rel:'noopener noreferrer',text:p}):p;});};
  String(body||'').split('\n').forEach(function(l){var m;
    if((m=l.match(/^\s*\d+[.)]\s+(.*)$/))){if(kind!=='ol')flush();kind='ol';list=list||[];list.push(h('li',null,linkify(m[1])));}
    else if((m=l.match(/^\s*[*•]\s+(.*)$/))){if(kind!=='ul')flush();kind='ul';list=list||[];list.push(h('li',null,linkify(m[1])));}
    else{flush();kind='';if((m=l.match(/^#+\s+(.*)$/)))out.push(h('h4',{text:m[1]}));else if(l.trim())out.push(h('p',null,linkify(l)));}});
  flush();return h('div',{class:'gbody'},out);}
function viewGuides(){var q=(V.gq||'').toLowerCase(),gs=(S.guides||[]).filter(function(g){return !q||(g.title+' '+g.body+' '+sName(g.subjectId)).toLowerCase().indexOf(q)>=0;});
  var groups={};gs.forEach(function(g){var k=subj(g.subjectId)?g.subjectId:'';(groups[k]=groups[k]||[]).push(g);});
  return [topbar('Guides','How the team does things, client by client'),
    h('div',{class:'acts',style:'margin:-6px 0 14px'},h('button',{class:'btn sm',type:'button',onclick:function(){openGuide(null,true);}},'New guide'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.tab='tasks';render();}},'Back to tasks')),
    h('div',{class:'search'},h('span',{html:I.search}),h('input',{id:'gq',type:'search',placeholder:'Search guides','aria-label':'Search guides',value:V.gq||'',oninput:function(e){V.gq=e.target.value;render();}})),
    gs.length?Object.keys(groups).sort(function(a,b){return sName(a).localeCompare(sName(b));}).map(function(k){return h('section',{class:'grp'},h('h4',null,h('i',{class:'dot',style:'background:'+sColor(k)}),sName(k),h('span',{text:groups[k].length+(groups[k].length===1?' guide':' guides')})),
      h('div',{class:'panel list'},groups[k].sort(function(a,b){return a.title.localeCompare(b.title);}).map(function(g){var n=S.tasks.filter(function(t){return t.guideId===g.id&&open(t);}).length;
        return h('button',{class:'li',type:'button',onclick:function(){openGuide(g.id);}},h('div',null,h('strong',{text:g.title}),h('small',{text:String(g.body||'').split('\n').filter(Boolean)[0]||'No steps yet'})),h('span',{class:'tagr',text:n?n+' open '+(n===1?'task':'tasks'):'Updated '+short(dayOf(g.updatedAt))}));})));})
    :h('div',{class:'empty',style:'margin-top:16px'},h('b',null,q?'No guide matches':'No guides yet'),q?'Try another word.':'Write down how a job is done once, so anyone can pick it up. Link it to tasks so the steps are one tap away.')];}
function openGuide(id,edit){var g=id?(S.guides||[]).find(function(x){return x.id===id;}):null;
  M={kind:'guide',id:id||null,edit:!!edit||!g,del:false,d:g?{id:g.id,title:g.title,subjectId:g.subjectId,body:g.body}:{id:uid(),title:'',subjectId:V.subject!=='all'?V.subject:'',body:''}};$('#ov').hidden=false;renderSheet();var f=$('#g-title');if(f&&!id)f.focus();}
function renderGuide(){var d=M.d,g=M.id?(S.guides||[]).find(function(x){return x.id===M.id;}):null;
  if(!M.edit&&g){var linked=S.tasks.filter(function(t){return t.guideId===g.id&&open(t);});
    return [head(g.title),h('small',{class:'note',text:sName(g.subjectId)+' · updated by '+pName(g.updatedBy)+' on '+stamp(g.updatedAt)}),h('div',{class:'panel'},guideHtml(g.body)),
      linked.length?h('div',{class:'panel'},h('strong',null,'Open tasks that use this guide'),linked.map(function(t){return h('div',{class:'cl'},h('button',{class:'linkb',type:'button',style:'background:none;border:0;padding:0;text-align:left;color:var(--plum-ink);font-weight:600',onclick:function(){openTask(t.id);},text:t.title}));})):null,
      h('div',{class:'acts'},S.owner||g.createdBy===me?h('button',{class:'btn sm',type:'button',onclick:function(){M.edit=true;renderSheet();}},'Edit'):h('small',{class:'note'},'Only '+pName(g.createdBy)+' or the owner can edit this guide.'),
        M.del?[h('button',{class:'btn danger sm',type:'button',onclick:function(){var x=g.id;closeSheet();send('deleteGuide',{id:x});}},'Confirm delete'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=false;renderSheet();}},'Keep it')]
          :(S.owner||g.createdBy===me?h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=true;renderSheet();}},'Delete'):null))];}
  return [head(M.id?'Edit guide':'New guide'),
    h('input',{class:'title-in',id:'g-title',maxlength:120,placeholder:'For example: Month end for Brooks Dental','aria-label':'Guide title',value:d.title,oninput:bind(d,'title')}),
    fld('Client',h('select',{class:'in',id:'g-sub',value:d.subjectId,onchange:bind(d,'subjectId')},h('option',{value:'',text:'Every client'}),liveSubjects().map(function(s){return h('option',{value:s.id,text:s.name});}))),
    fld('Steps and notes',h('textarea',{class:'in',id:'g-body',rows:12,maxlength:20000,placeholder:'1. Download the bank statements\n2. Reconcile each account\n- Flag anything over $500 with no receipt\n\nLinks and logins live in the shared drive.',value:d.body,oninput:bind(d,'body')}),true),
    h('p',{class:'note',style:'margin:0'},'Start a line with 1. for numbered steps, with * for bullets, and with # for a heading. Never put passwords here; say where they are kept instead.'),
    h('button',{class:'btn wide',type:'button',onclick:function(){d.title=d.title.trim();if(!d.title){toast('Give the guide a title.');return;}var v=Object.assign({},d);send('saveGuide',{guide:v},true);M.edit=false;M.id=v.id;toast('Guide saved');renderSheet();}},'Save guide')];}

/* ---------- meetings ---------- */
var REPL={none:'Does not repeat',daily:'Every day',weekdays:'Every weekday',weekly:'Every week',fortnightly:'Every two weeks',monthly:'Every month'};
var RSVPL={yes:'Going',maybe:'Maybe',no:'Not going'};
function meetTz(){return myTz||S.settings.deadlineTz||'Africa/Lagos';}
function mEnd(m){return m.startAt+m.durationMin*6e4;}
function mDay(ms){var o=tzParts(meetTz(),ms);return o.year+'-'+o.month+'-'+o.day;}
function mHm(ms,tz){var o=tzParts(tz||meetTz(),ms);return o.hour+':'+o.minute;}
function mWhen(m){var o=tzParts(meetTz(),m.startAt),d=mDay(m.startAt),n=diff(d);
  return (n===0?'Today':n===1?'Tomorrow':n===-1?'Yesterday':o.weekday+' '+(+o.day)+' '+MON[o.month-1])+', '+mHm(m.startAt)+' to '+mHm(mEnd(m));}
function mZones(ms){var mine=meetTz();return zoneList().filter(function(z){return z.tz!==mine;}).map(function(z){return mHm(ms,z.tz)+' '+z.city;}).join(' · ');}
function mLive(m){var n=Date.now();return m.status==='scheduled'&&n>=m.startAt-10*6e4&&n<mEnd(m);}
function mineM(m){return m.attendees.indexOf(me)>=0||m.createdBy===me;}
function meetSorted(){return (S.meetings||[]).filter(function(m){return m.status!=='requested';}).slice().sort(function(a,b){return a.startAt-b.startAt;});}
function nextMeeting(){var n=Date.now();return meetSorted().filter(function(m){return m.status==='scheduled'&&mineM(m)&&mEnd(m)>n&&m.startAt<n+24*36e5&&(m.rsvp||{})[me]!=='no';})[0]||null;}
function joinM(m){if(!m.joinUrl){toast('This meeting has no video link. '+(m.place?'It is at '+m.place+'.':''));return;}send('joinMeeting',{id:m.id},true);window.open(m.joinUrl,'_blank','noopener,noreferrer');}
function avatars(ids,m){return h('span',{class:'avs'},ids.slice(0,6).map(function(id){var r=m&&(m.rsvp||{})[id];return h('i',{class:r?'r-'+r:'',title:pName(id)+(r?', '+RSVPL[r]:''),text:initials(pName(id))});}),ids.length>6?h('i',{text:'+'+(ids.length-6)}):null);}
function meetCardRow(m){var live=mLive(m),past=mEnd(m)<Date.now(),cx=m.status==='cancelled';
  return h('div',{class:'mc'+(live?' live':'')+(past||cx?' past':'')},
    h('button',{class:'mcb',type:'button',onclick:function(){openMeet(m.id);}},
      h('div',{class:'mt'},h('b',{text:mHm(m.startAt)}),h('small',{text:m.durationMin+' min'})),
      h('div',{class:'mi'},h('strong',{text:m.title}),h('div',{class:'meta'},
        h('span',null,h('i',{class:'dot',style:'background:'+sColor(m.subjectId)}),m.subjectId?sName(m.subjectId):'Internal'),
        cx?h('span',{class:'hi',text:'Cancelled'}):live?h('span',{class:'livep',text:'Live now'}):null,
        m.repeat&&m.repeat!=='none'?h('span',{text:REPL[m.repeat]}):null,
        m.client?h('span',{text:'Client invited'}):null,
        (m.rsvp||{})[me]?h('span',{text:'You: '+RSVPL[m.rsvp[me]]}):(!past&&!cx&&m.createdBy!==me?h('span',{class:'wait',text:'Reply needed'}):null),
        past&&!cx&&(m.actions||[]).length?h('span',{text:m.actions.length+' action items'}):null),
        mZones(m.startAt)?h('small',{class:'note',text:mZones(m.startAt)}):null),
      avatars(m.attendees,m)),
    !past&&!cx&&m.joinUrl?h('button',{class:'btn sm'+(live?'':' ghost'),type:'button',onclick:function(){joinM(m);}},live?'Join now':'Join'):null);}
function viewMeet(){var n=Date.now(),list=meetSorted(),show=V.mp?list.filter(function(m){return mEnd(m)<n||m.status==='cancelled';}).reverse():list.filter(function(m){return mEnd(m)>=n&&m.status!=='cancelled';});
  var reqs=S.owner?(S.meetings||[]).filter(function(m){return m.status==='requested';}):[],groups={},order=[];
  show.forEach(function(m){var d=mDay(m.startAt);if(!groups[d]){groups[d]=[];order.push(d);}groups[d].push(m);});
  return [topbar('Meetings','Plan them, hold them, and turn what was said into tasks'),
    h('div',{class:'seg s2',style:'margin:-4px 0 14px;max-width:360px'},h('button',{type:'button','aria-pressed':'false',onclick:function(){V.tab='cal';render();}},'Calendar'),h('button',{type:'button','aria-pressed':'true'},'Meetings')),
    h('div',{class:'acts',style:'margin:0 0 14px'},h('button',{class:'btn sm',type:'button',onclick:function(){openMeet(null);}},'New meeting'),
      h('div',{class:'seg s2',style:'min-width:220px'},h('button',{type:'button','aria-pressed':String(!V.mp),onclick:function(){V.mp=false;render();}},'Coming up'),h('button',{type:'button','aria-pressed':String(!!V.mp),onclick:function(){V.mp=true;render();}},'Past'))),
    reqs.length?h('section',{class:'panel preq',style:'margin-bottom:16px'},h('strong',null,'Clients asking to meet'),reqs.map(function(m){var r=m.request||{};
      return h('div',{class:'mreq'},h('div',null,h('b',{text:m.title}),h('small',{class:'note',text:sName(m.subjectId)+' · asked by '+(r.by||'the client')+(r.note?' · "'+r.note+'"':'')})),
        h('div',{class:'acts'},(r.options||[]).map(function(ms){return h('button',{class:'btn sm ghost',type:'button',onclick:function(){send('acceptMeetingRequest',{id:m.id,startAt:ms,attendees:[me]});toast('Booked. Add teammates from the meeting.');}},'Book '+mWhen({startAt:ms,durationMin:m.durationMin}).split(' to ')[0]);}),
          h('button',{class:'btn sm ghost',type:'button',onclick:function(){var note=prompt('A short note for the client (optional)','');if(note===null)return;send('declineMeetingRequest',{id:m.id,note:note});}},'Decline')));})):null,
    order.length?order.map(function(d){var x=parse(d),k=diff(d);return h('section',{class:'grp'},h('h4',null,(k===0?'Today':k===1?'Tomorrow':k===-1?'Yesterday':DAYL[x.getDay()])+', '+short(d),h('span',{text:groups[d].length+(groups[d].length===1?' meeting':' meetings')})),
      h('div',{class:'mlist'},groups[d].map(meetCardRow)));})
    :h('div',{class:'empty'},ill('card_meeting'),h('b',null,V.mp?'No past meetings yet':'No meetings coming up'),V.mp?'Meetings you held show here with their notes and action items.':'Set one up with a free video room. Everyone gets an invitation, a reminder and the link.')];}
function meetBanner(){var m=nextMeeting();if(!m)return null;var live=mLive(m),mins=Math.round((m.startAt-Date.now())/6e4);
  return h('div',{class:'mban'+(live?' live':'')},h('div',null,h('small',{text:live?'Happening now':mins<=60?'Starts in '+Math.max(1,mins)+' minutes':'Next meeting'}),h('strong',{text:m.title}),h('span',{class:'note',text:mWhen(m)+(m.subjectId?' · '+sName(m.subjectId):'')})),
    h('div',{class:'acts'},m.joinUrl?h('button',{class:'btn sm',type:'button',onclick:function(){joinM(m);}},live?'Join now':'Join'):null,h('button',{class:'btn ghost sm',type:'button',onclick:function(){openMeet(m.id);}},'Agenda and notes')));}
/* times when everyone invited is inside their working day (9:00 to 17:00 their time, Monday to Friday) and free */
function freeSlots(day,ids,dur,skip){var out=[],p=day.split('-').map(Number);
  for(var mm=0;mm<24*60;mm+=30){var start=new Date(p[0],p[1]-1,p[2],Math.floor(mm/60),mm%60).getTime(),end=start+dur*6e4;if(start<Date.now())continue;
    var good=ids.every(function(id){var x=person(id),tz=(x&&x.tz)||S.settings.deadlineTz,a=tzParts(tz,start),b=tzParts(tz,end-6e4),sh=+a.hour*60+ +a.minute,eh=+b.hour*60+ +b.minute;
      if(a.weekday==='Sat'||a.weekday==='Sun'||a.day!==b.day)return false;if(sh<9*60||eh>=17*60)return false;
      if((S.leaves||[]).some(function(l){return l.personId===id&&l.status==='approved'&&l.from<=dayOf(start)&&l.to>=dayOf(start);}))return false;
      return !(S.meetings||[]).some(function(o){return o.id!==skip&&o.status==='scheduled'&&mineOf(o,id)&&o.startAt<end&&mEnd(o)>start;});});
    if(good)out.push(start);}
  return out;}
function mineOf(o,id){return o.attendees.indexOf(id)>=0||o.createdBy===id;}
function clashes(d){if(!d.startAt)return [];var end=d.startAt+d.durationMin*6e4,out=[];
  d.attendees.forEach(function(id){var c=(S.meetings||[]).find(function(o){return o.id!==d.id&&o.status==='scheduled'&&mineOf(o,id)&&o.startAt<end&&mEnd(o)>d.startAt;});
    if(c)out.push(pName(id)+' has "'+c.title+'" then');
    var dd=dayOf(d.startAt);if((S.leaves||[]).some(function(l){return l.personId===id&&l.status==='approved'&&l.from<=dd&&l.to>=dd;}))out.push(pName(id)+' is on leave that day');
    var x=person(id),tz=(x&&x.tz)||'';if(tz&&id!==me){var a=tzParts(tz,d.startAt),hr=+a.hour;if(hr<7||hr>=20)out.push('It is '+a.hour+':'+a.minute+' for '+pName(id).split(' ')[0]);}});
  return out;}
function openMeet(id,preset){var m=id?(S.meetings||[]).find(function(x){return x.id===id;}):null;
  if(id&&!m){toast('That meeting is not in your list.');return;}
  if(m){M={kind:'meet',id:id,edit:false,notes:null,del:false,toClient:!!m.client};}
  else{var st=new Date(Date.now()+864e5);st.setMinutes(0,0,0);st.setHours(Math.max(9,Math.min(16,new Date().getHours()+1)));
    M={kind:'meet',id:null,edit:true,d:Object.assign({id:uid(),title:'',subjectId:V.subject&&V.subject!=='all'?V.subject:'',day:ymd(st),time:pad(st.getHours())+':00',durationMin:30,attendees:[me],client:false,video:'jitsi',link:'',place:'',repeat:'none',agendaText:''},preset||{})};}
  $('#ov').hidden=false;renderSheet();}
function meetDraft(m){var o=new Date(m.startAt);return {id:m.id,title:m.title,subjectId:m.subjectId||'',day:ymd(o),time:pad(o.getHours())+':'+pad(o.getMinutes()),durationMin:m.durationMin,attendees:m.attendees.slice(),client:!!m.client,
  video:m.video,link:m.link||'',place:m.place||'',repeat:m.repeat||'none',agendaText:(m.agenda||[]).map(function(a){return a.text;}).join('\n')};}
function draftStart(d){var p=String(d.day).split('-').map(Number),t=String(d.time||'').split(':').map(Number);if(p.length!==3||t.length!==2||isNaN(t[0]))return 0;return new Date(p[0],p[1]-1,p[2],t[0],t[1]).getTime();}
function renderMeetEdit(){var d=M.d,m=M.id?(S.meetings||[]).find(function(x){return x.id===M.id;}):null,sb=subj(d.subjectId),start=draftStart(d);
  var probe={id:d.id,startAt:start,durationMin:+d.durationMin,attendees:d.attendees},warn=clashes(probe),slots=d.day?freeSlots(d.day,d.attendees,+d.durationMin,d.id).slice(0,10):[];
  var ppl=S.people.filter(function(x){return x.joined||x.email;});
  return [head(m?'Edit meeting':'New meeting'),
    h('input',{class:'title-in',id:'m-title',maxlength:160,placeholder:'For example: Brooks month end review','aria-label':'Meeting title',value:d.title,oninput:bind(d,'title')}),
    h('div',{class:'frow'},
      fld('Client',h('select',{class:'in',id:'m-sub',value:d.subjectId,onchange:function(e){d.subjectId=e.target.value;if(!d.subjectId)d.client=false;renderSheet();}},h('option',{value:'',text:'Internal, no client'}),liveSubjects().map(function(s){return h('option',{value:s.id,text:s.name});}))),
      fld('Repeats',h('select',{class:'in',id:'m-rep',value:d.repeat,onchange:bind(d,'repeat')},Object.keys(REPL).map(function(k){return h('option',{value:k,text:REPL[k]});}))),
      fld('Day',h('input',{class:'in',id:'m-day',type:'date',value:d.day,onchange:function(e){d.day=e.target.value;renderSheet();}})),
      fld('Time ('+zoneName(meetTz())+')',h('input',{class:'in',id:'m-time',type:'time',step:300,value:d.time,onchange:function(e){d.time=e.target.value;renderSheet();}})),
      fld('Length',h('select',{class:'in',id:'m-dur',value:String(d.durationMin),onchange:function(e){d.durationMin=+e.target.value;renderSheet();}},[15,30,45,60,90,120,180].map(function(n){return h('option',{value:String(n),text:n<60?n+' minutes':n===60?'1 hour':(n/60)+' hours'});}))),
      fld('Video',h('select',{class:'in',id:'m-video',value:d.video,onchange:function(e){d.video=e.target.value;renderSheet();}},h('option',{value:'jitsi',text:'Free video room'}),h('option',{value:'link',text:'My Zoom, Meet or Teams link'}),h('option',{value:'none',text:'No video, in person or phone'})))),
    d.video==='link'?fld('Meeting link',h('input',{class:'in',id:'m-link',type:'url',placeholder:'https://zoom.us/j/...',value:d.link,oninput:bind(d,'link')}),true):null,
    d.video==='none'?fld('Where',h('input',{class:'in',id:'m-place',maxlength:120,placeholder:'Office, phone number or address',value:d.place,oninput:bind(d,'place')}),true):null,
    start?h('p',{class:'note',style:'margin:0',text:mZones(start)?'That is '+mZones(start)+'.':''}):null,
    h('div',{class:'f full'},'Who is coming',h('div',{class:'chips',style:'padding-top:6px'},ppl.map(function(x){var on=d.attendees.indexOf(x.id)>=0;
      return h('button',{class:'chip',type:'button','aria-pressed':String(on),onclick:function(){if(x.id===me&&on&&!S.owner){toast('You are in the meeting you set up.');return;}d.attendees=on?d.attendees.filter(function(i){return i!==x.id;}):d.attendees.concat([x.id]);renderSheet();}},initials(x.name)+'  '+x.name.split(' ')[0]);}))),
    sb?h('label',{class:'switch'},h('input',{type:'checkbox',id:'m-client',checked:!!d.client,onchange:function(e){d.client=e.target.checked;}}),'Invite '+sb.name+' too',sb.clientEmail?'':h('small',{class:'note'},' (they see it on their client page; add their email in Settings to email them)')):null,
    warn.length?h('div',{class:'mwarn',role:'status'},h('b',null,'Heads up'),warn.map(function(w){return h('div',{text:w});})):null,
    d.attendees.length>1||slots.length?h('div',{class:'f full'},'Times that suit everyone on '+(d.day?short(d.day):'this day'),
      slots.length?h('div',{class:'chips',style:'padding-top:6px'},slots.map(function(ms){return h('button',{class:'chip o',type:'button','aria-pressed':String(ms===start),onclick:function(){d.time=mHm(ms);renderSheet();}},mHm(ms)+(mZones(ms)?' · '+mZones(ms):''));}))
        :h('p',{class:'note',style:'margin:6px 0 0'},'No shared free time inside everyone\'s working day (9:00 to 17:00 their time). Try another day.')):null,
    fld('Agenda, one item per line',h('textarea',{class:'in',id:'m-agenda',rows:4,maxlength:6000,placeholder:'September close\nMissing receipts\nNext month\'s plan',value:d.agendaText,oninput:bind(d,'agendaText')}),true),
    h('button',{class:'btn wide',type:'button',onclick:function(){d.title=d.title.trim();var at=draftStart(d);if(!d.title){toast('Give the meeting a title.');return;}if(!at){toast('Choose a day and time.');return;}
      if(d.video==='link'&&!/^https:\/\/\S+$/.test(d.link.trim())){toast('Paste the full meeting link, starting with https://');return;}
      var old=m?m.agenda||[]:[],agenda=d.agendaText.split('\n').map(function(t){return t.trim();}).filter(Boolean).map(function(t){var hit=old.find(function(a){return a.text===t;});return hit?hit:{id:uid(),text:t,done:false};});
      var v={id:d.id,title:d.title,subjectId:d.subjectId,startAt:at,durationMin:+d.durationMin,attendees:d.attendees,client:!!d.client&&!!d.subjectId,video:d.video,link:d.link.trim(),place:d.place.trim(),repeat:d.repeat,agenda:agenda,tz:meetTz()};
      send('saveMeeting',{meeting:v});M={kind:'meet',id:v.id,edit:false,notes:null,del:false,toClient:v.client};renderSheet();}},m?'Save changes':'Set up meeting and send invitations')];}
function saveNotesSoon(m){clearTimeout(M.nt);M.nt=setTimeout(function(){if(M&&M.kind==='meet'&&M.notes!==null){var v=M.notes;send('saveMeetingNotes',{id:m.id,notes:v},true);}},1200);}
function renderMeet(){if(M.edit)return renderMeetEdit();var m=(S.meetings||[]).find(function(x){return x.id===M.id;});if(!m){closeSheet();return [];}
  var live=mLive(m),past=mEnd(m)<Date.now(),cx=m.status==='cancelled',can=m.canEdit,acts=m.actions||[];
  var wr=m.status==='scheduled'&&(S.owner||m.createdBy===me||(m.attendees||[]).indexOf(me)>=0);   // who may write notes and the agenda: the organiser, the owner and people invited
  var setAct=function(i,patch){var list=acts.map(function(a){return Object.assign({},a);});Object.assign(list[i],patch);send('saveMeetingNotes',{id:m.id,actions:list},true);};
  var notesVal=M.notes!==null?M.notes:(m.notes||'');
  return [head(m.title),
    h('div',{class:'mhead'+(live?' live':'')},h('div',null,h('strong',{text:mWhen(m)}),h('small',{class:'note',text:[mZones(m.startAt),m.subjectId?sName(m.subjectId):'Internal',m.repeat!=='none'?REPL[m.repeat]:'',m.place].filter(Boolean).join(' · ')})),
      cx?h('b',{class:'badge-s r',text:'Cancelled'}):live?h('b',{class:'badge-s g',text:'Live now'}):past?h('b',{class:'badge-s',text:'Finished'}):null),
    !cx&&!past?h('div',{class:'acts'},m.joinUrl?h('button',{class:'btn',type:'button',onclick:function(){joinM(m);}},live?'Join the video call now':'Join the video call'):null,
      h('a',{class:'btn ghost sm',href:m.gcal,target:'_blank',rel:'noopener noreferrer'},'Add to Google Calendar')):null,
    !cx&&!past&&m.createdBy!==me&&m.attendees.indexOf(me)>=0?h('div',{class:'seg s3'},['yes','maybe','no'].map(function(a){return h('button',{type:'button','aria-pressed':String((m.rsvp||{})[me]===a),onclick:function(){send('rsvpMeeting',{id:m.id,answer:a});}},RSVPL[a]);})):null,
    h('div',{class:'panel'},h('strong',null,'Who'),h('div',{class:'mwho'},m.attendees.map(function(id){var r=(m.rsvp||{})[id],j=(m.joined||{})[id];return h('span',{class:'mp'},h('i',{class:r?'r-'+r:'',text:initials(pName(id))}),pName(id),
        h('small',{text:id===m.createdBy?'Organiser':r?RSVPL[r]:'No reply yet'}),j?h('small',{class:'ok',text:'Joined '+mHm(j)}):null);}),
      m.client&&m.subjectId?h('span',{class:'mp'},h('i',{class:'cl',text:initials(sName(m.subjectId))}),sName(m.subjectId),h('small',{text:m.clientRsvp?RSVPL[m.clientRsvp.answer]+' ('+m.clientRsvp.name+')':'Client, invited'}),(m.clientJoined||[]).length?h('small',{class:'ok',text:'Joined'}):null):null)),
    h('div',{class:'panel'},h('div',{class:'phd'},h('strong',null,'Agenda'),h('button',{class:'linkb',type:'button',onclick:function(){send('agendaFromWork',{id:m.id});}},'+ Add open work'+(m.subjectId?' for '+sName(m.subjectId):''))),
      (m.agenda||[]).length?(m.agenda||[]).map(function(a,i){return h('label',{class:'cl'},h('input',{type:'checkbox',checked:!!a.done,disabled:!wr,title:wr?null:'Only the organiser, the owner and the people invited can tick the agenda',onchange:function(e){if(!wr)return;var ag=m.agenda.map(function(x){return Object.assign({},x);});ag[i].done=e.target.checked;send('saveMeetingNotes',{id:m.id,agenda:ag},true);}}),
        h('span',{text:a.text+(a.mins?' ('+a.mins+' min)':''),style:a.done?'text-decoration:line-through;color:var(--muted)':''}),a.taskId&&S.tasks.some(function(t){return t.id===a.taskId;})?h('button',{class:'linkb',type:'button',onclick:function(){openTask(a.taskId);}},'Open task'):null);})
        :h('p',{class:'note',style:'margin:4px 0 0'},'No agenda yet. Add open work for this client, or edit the meeting to write one.'),
      !wr?null:h('div',{class:'row',style:'margin-top:8px'},h('input',{class:'in',id:'m-newag',style:'flex:1',placeholder:'Add an agenda item','aria-label':'Add an agenda item',value:M.ag||'',oninput:function(e){M.ag=e.target.value;},onkeydown:function(e){if(e.key==='Enter'){e.preventDefault();addAg();}}}),
        h('button',{class:'btn ghost sm',type:'button',onclick:addAg},'Add'))),
    h('div',{class:'panel'},h('div',{class:'phd'},h('strong',null,'Notes'),h('small',{class:'note',text:m.updatedBy&&m.notes?'Everyone invited can write here':'Shared with everyone invited'})),
      h('textarea',{class:'in',id:'m-notes',rows:7,maxlength:20000,readonly:!wr,placeholder:'What was said and decided. Start a line with "todo:" or "action:" and it becomes an action item when you tap Pull out actions.',value:notesVal,
        oninput:function(e){M.notes=e.target.value;saveNotesSoon(m);}}),
      h('div',{class:'acts',style:'margin-top:8px'},!wr?null:h('button',{class:'btn ghost sm',type:'button',onclick:function(){var txt=M.notes!==null?M.notes:m.notes||'',add=[];
          txt.split('\n').forEach(function(l){var x=l.match(/^\s*[-*]?\s*(todo|action|to do)\s*[:\-]\s*(.+)$/i);if(x){var t=x[2].trim(),who=S.people.find(function(p){return new RegExp('(^|\\s)@?'+p.name.split(' ')[0]+'\\b','i').test(t);});
            if(!acts.some(function(a){return a.text===t;}))add.push({id:uid(),text:t,assignee:who?who.id:'',due:'',taskId:''});}});
          if(!add.length){toast('No lines start with todo: or action:');return;}send('saveMeetingNotes',{id:m.id,notes:txt,actions:acts.concat(add)},true);toast(add.length+(add.length===1?' action item':' action items')+' added');}},'Pull out actions'),
        S.features.ai?h('button',{class:'btn ghost sm',type:'button',disabled:!!M.ai,onclick:function(){var txt=M.notes!==null?M.notes:m.notes||'';M.ai=true;renderSheet();
          var go=function(){server('aiMeeting',{id:m.id}).then(function(res){M.ai=false;if(accept(res)){pickMe();render();}if(M)renderSheet();toast('Summary written');}).catch(function(e){M.ai=false;if(M)renderSheet();toast(e.message+'.');});};
          if(txt!==(m.notes||''))server('saveMeetingNotes',{id:m.id,notes:txt}).then(go).catch(function(e){M.ai=false;renderSheet();toast(e.message+'.');});else go();}},M.ai?'Writing…':'Write summary with AI'):null)),
    m.summary?h('div',{class:'panel msum'},h('strong',null,'Summary'),h('p',{text:m.summary})):null,
    h('div',{class:'panel'},h('div',{class:'phd'},h('strong',null,'Action items'),!wr?null:h('button',{class:'linkb',type:'button',onclick:function(){send('saveMeetingNotes',{id:m.id,actions:acts.concat([{id:uid(),text:'New action item',assignee:'',due:'',taskId:''}])},true);}},'+ Add')),
      acts.length?acts.map(function(a,i){var tk=a.taskId&&S.tasks.find(function(t){return t.id===a.taskId;});
        return h('div',{class:'mact'},h('input',{class:'in',id:'m-act-'+a.id,value:a.text,maxlength:300,'aria-label':'Action item',disabled:!!tk||!wr,onchange:function(e){setAct(i,{text:e.target.value});}}),
          h('select',{class:'in',value:a.assignee||'','aria-label':'Who',disabled:!!tk||!wr,onchange:function(e){setAct(i,{assignee:e.target.value});}},h('option',{value:'',text:'Who?'}),S.people.map(function(p){return h('option',{value:p.id,text:p.name});})),
          h('input',{class:'in',type:'date',value:a.due||'','aria-label':'Due',disabled:!!tk||!wr,onchange:function(e){setAct(i,{due:e.target.value});}}),
          tk?h('button',{class:'linkb',type:'button',onclick:function(){openTask(tk.id);}},open(tk)?'Task':'Done'):!wr?null:h('button',{class:'linkb',type:'button','aria-label':'Remove',onclick:function(){send('saveMeetingNotes',{id:m.id,actions:acts.filter(function(x,j){return j!==i;})},true);}},'Remove'));})
        :h('p',{class:'note',style:'margin:4px 0 0'},'Who does what, by when. Each one becomes a real task with one tap.'),
      acts.some(function(a){return !a.taskId;})?h('button',{class:'btn sm',type:'button',style:'margin-top:10px',onclick:function(){send('meetingTasks',{id:m.id});}},'Make them tasks and hand them out'):null),
    h('div',{class:'panel'},h('strong',null,'Follow up'),h('p',{class:'note',style:'margin:4px 0 8px',text:m.followUpAt?'Sent '+stamp(m.followUpAt)+'. You can send it again after changes.':'Email the summary, notes and action items to everyone invited.'}),
      m.client&&m.subjectId&&(S.owner||m.createdBy===me)?h('label',{class:'switch'},h('input',{type:'checkbox',checked:!!M.toClient,onchange:function(e){M.toClient=e.target.checked;}}),'Also send '+sName(m.subjectId)+' the summary and action items (not the notes)'):null,
      h('button',{class:'btn sm',type:'button',style:'margin-top:8px',onclick:function(){var txt=M.notes!==null?M.notes:null;if(txt!==null&&txt!==(m.notes||''))send('saveMeetingNotes',{id:m.id,notes:txt},true);send('sendFollowUp',{id:m.id,toClient:!!M.toClient&&(S.owner||m.createdBy===me)});}},'Send follow up')),
    can?h('div',{class:'acts'},!cx?h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.edit=true;M.d=meetDraft(m);renderSheet();}},'Edit or move'):null,
      !cx&&!past?(M.del==='cancel'?[h('button',{class:'btn danger sm',type:'button',onclick:function(){M.del=false;send('cancelMeeting',{id:m.id});}},'Confirm cancel'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=false;renderSheet();}},'Keep it')]
        :h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del='cancel';renderSheet();}},'Cancel meeting')):null,
      M.del==='delete'?[h('button',{class:'btn danger sm',type:'button',onclick:function(){var x=m.id;closeSheet();send('deleteMeeting',{id:x});}},'Confirm delete'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=false;renderSheet();}},'Keep it')]
        :(past||cx?h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del='delete';renderSheet();}},'Delete'):null)):null];
  function addAg(){var t=(M.ag||'').trim();if(!t)return;M.ag='';send('saveMeetingNotes',{id:m.id,agenda:(m.agenda||[]).concat([{id:uid(),text:t,done:false}])},true);}}

/* ---------- import tasks from a spreadsheet ---------- */
function parseCsv(text){text=String(text||'').replace(/^﻿/,'');var first=text.split('\n')[0]||'',delim=(first.match(/\t/g)||[]).length>(first.match(/,/g)||[]).length?'\t':(first.match(/;/g)||[]).length>(first.match(/,/g)||[]).length?';':',';
  var rows=[],row=[],cell='',q=false;for(var i=0;i<text.length;i++){var c=text[i];
    if(q){if(c==='"'){if(text[i+1]==='"'){cell+='"';i++;}else q=false;}else cell+=c;continue;}
    if(c==='"')q=true;else if(c===delim){row.push(cell);cell='';}else if(c==='\n'||c==='\r'){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);rows.push(row);row=[];cell='';}else cell+=c;}
  if(cell||row.length){row.push(cell);rows.push(row);}return rows.filter(function(r){return r.some(function(x){return String(x).trim();});});}
var IMPF=[['title','Task title',/^(title|task|name|summary|card name|what)/i],['client','Client',/(client|subject|project|board|list|customer)/i],['assignee','Assigned to',/(assign|owner|who|person|member|responsible)/i],
  ['due','Due date',/(due|deadline|date)/i],['priority','Priority',/(priority|urgent|importance)/i],['status','Status',/(status|state|stage|done|complete)/i],['details','Details',/(detail|desc|note|comment)/i]];
function impDate(v,fmt){v=String(v||'').trim();if(!v)return '';var m;
  if((m=v.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)))return m[1]+'-'+pad(+m[2])+'-'+pad(+m[3]);
  if((m=v.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})/))){var y=m[3].length===2?'20'+m[3]:m[3],a=+m[1],b=+m[2];var dd=fmt==='mdy'?b:a,mm=fmt==='mdy'?a:b;if(mm>12){var t=dd;dd=mm;mm=t;}return mm>=1&&mm<=12&&dd>=1&&dd<=31?y+'-'+pad(mm)+'-'+pad(dd):'';}
  var d=new Date(v);return isNaN(d)?'':ymd(d);}
function impStatus(v){v=String(v||'').toLowerCase();return /done|complete|closed|finished|yes|true/.test(v)?'done':/progress|doing|started|active/.test(v)?'in_progress':/wait|hold|blocked/.test(v)?'waiting':'new';}
function impPeople(v){v=String(v||'').trim().toLowerCase();if(!v)return '';var p=S.people.find(function(x){return (x.email&&x.email.toLowerCase()===v)||x.name.toLowerCase()===v||x.name.toLowerCase().split(/\s+/)[0]===v.split(/\s+/)[0];});return p?p.id:'';}
function openImport(){M={kind:'import',text:'',rows:null,map:{},fmt:'dmy',busy:false,wb:null,sheet:0,board:null,tstat:{},tarch:false,tclient:'board',err:''};$('#ov').hidden=false;renderSheet();}
function impRead(text){var rows=parseCsv(text);if(rows.length<2){toast('Paste a header row and at least one task.');return;}impRows(rows);}
function impRows(rows){M.rows=rows;M.map={};M.err='';var hd=rows[0];
  IMPF.forEach(function(f){var i=hd.findIndex(function(x,j){return f[2].test(String(x).trim())&&Object.keys(M.map).map(function(k){return M.map[k];}).indexOf(j)<0;});if(i>=0)M.map[f[0]]=i;});
  if(M.map.title===undefined)M.map.title=0;renderSheet();}
function impItems(){var body=M.rows.slice(1),get=function(r,k){var i=M.map[k];return i===undefined||i===''?'':String(r[i]||'').trim();};
  return body.map(function(r){return {title:get(r,'title').slice(0,300),client:get(r,'client'),assignee:impPeople(get(r,'assignee')),due:impDate(get(r,'due'),M.fmt),priority:/high|urgent|1/i.test(get(r,'priority'))?'high':/low|3/i.test(get(r,'priority'))?'low':'normal',
    status:M.map.status!==undefined?impStatus(get(r,'status')):'new',details:get(r,'details').slice(0,5000)};}).filter(function(x){return x.title;});}
function impFail(e){if(!M||M.kind!=='import')return;M.busy=false;M.err=(e&&e.message)||'This file could not be read';renderSheet();}
/* a file chosen to import: an Excel workbook, a Trello board export, or CSV and other text */
function impFile(f){if(!f)return;var n=String(f.name||'').toLowerCase();M.err='';
  if(f.size>HLImport.MAX_FILE){M.err='Files can be up to 10 MB';renderSheet();return;}
  if(/\.xls$/.test(n)){M.err='This is an older Excel file. Open it in Excel, save it as .xlsx, then choose it again';renderSheet();return;}
  if(/\.xlsx$/.test(n)){M.busy=true;renderSheet();f.arrayBuffer().then(function(buf){return HLImport.readXlsx(new Uint8Array(buf));})
    .then(function(wb){M.wb=wb;var i=wb.sheets.findIndex(function(x){return !x.hidden;});return impSheet(i<0?0:i);}).catch(impFail);return;}
  if(/\.json$/.test(n)||f.type==='application/json'){M.busy=true;renderSheet();f.text().then(function(t){var b=HLImport.trelloParse(t);M.busy=false;M.board=b;M.tstat={};b.lists.forEach(function(l){M.tstat[l.id]=l.status;});renderSheet();}).catch(impFail);return;}
  var r=new FileReader();r.onload=function(){impRead(String(r.result));};r.readAsText(f);}
function impSheet(i){M.sheet=i;M.busy=true;renderSheet();return M.wb.rows(i).then(function(rows){if(!M||M.kind!=='import')return;M.busy=false;
  if(rows.length<2){M.rows=null;M.err='The sheet '+M.wb.sheets[i].name+' needs a header row and at least one task';renderSheet();return;}impRows(rows);}).catch(impFail);}
function trelloNow(){return HLImport.trelloItems(M.board,{status:M.tstat,archived:M.tarch,client:M.tclient,person:impPeople,day:function(iso){var t=Date.parse(iso);return isNaN(t)?'':dayOf(t);}});}
function impPreview(items){var newClients={};items.forEach(function(x){if(x.client&&!S.subjects.some(function(s){return s.name.toLowerCase()===x.client.toLowerCase();}))newClients[x.client]=1;});
  return {clients:Object.keys(newClients),parts:[h('div',{class:'tsheet'},h('table',null,h('thead',null,h('tr',null,['Task','Client','Assigned to','Due','Status'].map(function(c){return h('th',{scope:'col',text:c});}))),
      h('tbody',null,items.slice(0,6).map(function(x){return h('tr',null,h('td',{text:x.title+((x.checklist||[]).length?' ('+x.checklist.length+' steps)':'')}),h('td',{text:x.client||'General'}),h('td',{text:x.assignee?pName(x.assignee):''}),h('td',{text:x.due?short(x.due):''}),h('td',{text:STLABEL[x.status]}));})))),
    h('p',{class:'note',style:'margin:0',text:items.length+(items.length===1?' task':' tasks')+' ready'+(Object.keys(newClients).length?'. New clients to add: '+Object.keys(newClients).slice(0,8).join(', ')+(Object.keys(newClients).length>8?' and more':''):'')+'. Names that match nobody here are left unassigned.'})]};}
function impGo(items,clients,again){return h('div',{class:'acts'},h('button',{class:'btn',type:'button',disabled:!items.length||M.busy,onclick:function(){doImport(items,clients);}},M.busy?'Importing…':'Import '+items.length+(items.length===1?' task':' tasks')),
  h('button',{class:'btn ghost sm',type:'button',onclick:again},'Start again'));}
function renderImport(){var out=[head(M.board?'Import from Trello':'Import tasks')],restart=function(){var t=M.text;openImport();M.text=t;renderSheet();};
  if(M.board){var b=M.board,items=trelloNow(),pv=impPreview(items),live=b.lists.filter(function(l){return !l.closed||M.tarch;});
    out.push(h('p',{class:'note',style:'margin:0',text:'Board: '+b.name+'. Choose what each Trello list means here. Lists named like Doing or Done are matched for you.'}),
      h('div',{class:'frow tmap'},live.map(function(l){return fld(l.name+' ('+l.cards+(l.cards===1?' card':' cards')+(l.closed?', archived list':'')+')',h('select',{class:'in','aria-label':'Status for '+l.name,value:M.tstat[l.id]||'new',onchange:function(e){M.tstat[l.id]=e.target.value;renderSheet();}},
        [['new','New'],['in_progress','In progress'],['waiting','Waiting'],['done','Done'],['skip','Leave out']].map(function(o){return h('option',{value:o[0],text:o[1]});})));})),
      fld('Client for the cards',h('select',{class:'in',id:'tr-client',value:M.tclient,onchange:function(e){M.tclient=e.target.value;renderSheet();}},
        [['board','The board: '+b.name],['label','Each card\'s first label'],['list','Each card\'s list'],['none','No client']].map(function(o){return h('option',{value:o[0],text:o[1]});}))),
      b.archivedCards||b.lists.some(function(l){return l.closed;})?h('label',{class:'switch'},h('input',{type:'checkbox',id:'tr-arch',checked:M.tarch,onchange:function(e){M.tarch=e.target.checked;renderSheet();}}),'Also bring archived cards'+(b.archivedCards?' ('+b.archivedCards+')':'')):null,
      h('p',{class:'note',style:'margin:0'},'Titles, descriptions, labels, due dates and checklists come across. Members are matched to your people by name.'),
      pv.parts,impGo(items,pv.clients,restart));return out;}
  if(!M.rows){out.push(h('p',{class:'note',style:'margin:0;font-size:13px'},'Bring in tasks from Excel, Google Sheets, Trello or another tool. Choose an Excel workbook (.xlsx), a CSV file, or a Trello board export (.json). Or copy the cells and paste them here. The first row must be the column names.'),
    h('label',{class:'btn ghost sm filebtn',style:'align-self:flex-start'},M.busy?'Reading the file…':'Choose a file',h('input',{type:'file',id:'imp-file',accept:'.xlsx,.csv,.tsv,.txt,.json,text/csv,application/json,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',hidden:true,onchange:function(e){var f=e.target.files[0];e.target.value='';impFile(f);}})),
    M.err?h('p',{class:'err',role:'alert',text:M.err+'.'}):null,
    h('details',{class:'imphelp'},h('summary',null,'From Trello'),h('p',{class:'note',style:'margin:6px 0 0'},'Open the board, then Menu, Print, export and share, Export as JSON. Save the file and choose it here.')),
    h('textarea',{class:'in',id:'imp-text',rows:7,placeholder:'Task\tClient\tAssigned to\tDue\nSend October invoice\tBrooks Dental\tKemi\t31/10/2026',value:M.text,oninput:bind(M,'text')}),
    h('button',{class:'btn wide',type:'button',onclick:function(){impRead(M.text);}},'Next: match the columns'));return out;}
  var hd=M.rows[0],items2=impItems(),pv2=impPreview(items2);
  out.push(M.wb&&M.wb.sheets.length>1?fld('Sheet',h('select',{class:'in',id:'imp-sheet',value:String(M.sheet),onchange:function(e){impSheet(Number(e.target.value));}},M.wb.sheets.map(function(x,i){return h('option',{value:String(i),text:x.name+(x.hidden?' (hidden)':'')});}))):null,
    M.err?h('p',{class:'err',role:'alert',text:M.err+'.'}):null,
    h('p',{class:'note',style:'margin:0'},'Tell us which column holds what. Columns you leave out are skipped.'),
    h('div',{class:'frow'},IMPF.map(function(f){return fld(f[1],h('select',{class:'in',id:'imp-'+f[0],value:M.map[f[0]]===undefined?'':String(M.map[f[0]]),onchange:function(e){if(e.target.value==='')delete M.map[f[0]];else M.map[f[0]]=Number(e.target.value);renderSheet();}},
      h('option',{value:'',text:f[0]==='title'?'Choose a column':'Not in my file'}),hd.map(function(x,i){return h('option',{value:String(i),text:String(x).trim()||'Column '+(i+1)});})));}),
      fld('Dates are written as',h('select',{class:'in',id:'imp-fmt',value:M.fmt,onchange:function(e){M.fmt=e.target.value;renderSheet();}},h('option',{value:'dmy',text:'Day first, 31/10/2026'}),h('option',{value:'mdy',text:'Month first, 10/31/2026'})))),
    pv2.parts,impGo(items2,pv2.clients,restart));return out;}
function doImport(items,clients){if(S.workspace&&S.workspace.active===false){toast('This workspace is read only until the plan is renewed.');return;}
  var ids={};S.subjects.forEach(function(s){ids[s.name.toLowerCase()]=s.id;});
  clients.forEach(function(name,i){var id=uid();ids[name.toLowerCase()]=id;send('saveSubject',{subject:{id:id,name:name.slice(0,80),kind:'Client',color:COLORS[(S.subjects.length+i)%COLORS.length],archived:false}},true);});
  var batch=[],size=0,flushB=function(){if(batch.length)send('bulkAdd',{base:{subjectId:'',priority:'normal',status:'new',repeat:'none'},items:batch},true);batch=[];size=0;};
  items.forEach(function(x){var it={id:uid(),title:x.title,subjectId:x.client?ids[x.client.toLowerCase()]||'':'',assignee:x.assignee,due:x.due,priority:x.priority,status:x.status,details:x.details};
    if((x.checklist||[]).length)it.checklist=x.checklist.map(function(c,j){return {id:it.id.slice(-6)+j,text:c.text,done:!!c.done};});
    var n=JSON.stringify(it).length;if(batch.length>=50||size+n>300000)flushB();batch.push(it);size+=n;});   // each request stays well under the server's size limit
  flushB();
  closeSheet();toast(items.length+(items.length===1?' task':' tasks')+' imported'+(clients.length?', with '+clients.length+' new '+(clients.length===1?'client':'clients'):''));V.tab='tasks';V.status='all';render();}

/* ---------- expenses ---------- */
var EXT=[['travel','Travel'],['software','Software'],['supplies','Supplies'],['meals','Meals'],['data and airtime','Data and airtime'],['other','Other']];
var EXS={pending:['Waiting for approval','badge-s o'],approved:['Approved','badge-s g'],rejected:['Declined','badge-s r'],invoiced:['On an invoice','badge-s']};
function expenseSection(){var f=V.ef||'all',list=(S.expenses||[]).filter(function(e){return f==='all'||e.status===f;}).sort(function(a,b){return b.date.localeCompare(a.date)||(b.createdAt||0)-(a.createdAt||0);});
  var month=today().slice(0,7),sums={},wait={};(S.expenses||[]).forEach(function(e){if(e.date.slice(0,7)===month&&e.status!=='rejected')sums[e.currency]=(sums[e.currency]||0)+e.amount;if(e.status==='pending')wait[e.currency]=(wait[e.currency]||0)+e.amount;});
  var fmt=function(o){return Object.keys(o).map(function(c){return fmtMoney(o[c],c);}).join(' and ')||'Nothing';};
  return [h('div',{class:'sec'},h('h3',null,'Expenses'),h('button',{type:'button',onclick:function(){openExpense();}},'Add expense')),
    h('div',{class:'tiles',style:'grid-template-columns:repeat(2,1fr)'},h('div',{class:'tile'},h('b',{style:'font-size:19px',text:fmt(sums)}),h('span',null,'Spent this month')),h('div',{class:'tile'},h('b',{style:'font-size:19px',text:fmt(wait)}),h('span',null,S.owner?'Waiting for your approval':'Waiting for approval'))),
    h('div',{class:'chips',style:'margin:14px 0 6px'},[['all','All'],['pending','Waiting'],['approved','Approved'],['invoiced','On an invoice'],['rejected','Declined']].map(function(x){return h('button',{class:'chip',type:'button','aria-pressed':String(f===x[0]),onclick:function(){V.ef=x[0];render();}},x[1]);})),
    list.length?h('div',{class:'panel list'},list.map(function(e){var st=EXS[e.status]||EXS.pending;return h('button',{class:'li',type:'button',onclick:function(){openExpense(e.id);}},
      h('div',null,h('strong',{text:fmtMoney(e.amount,e.currency)+' · '+(e.note||(EXT.find(function(x){return x[0]===e.category;})||['','Other'])[1])}),h('small',{text:[short(e.date),S.owner?pName(e.personId):'',e.subjectId?sName(e.subjectId)+(e.billable?', billable':''):'',e.receipt?'Receipt':''].filter(Boolean).join(' · ')})),h('span',null,h('b',{class:st[1]},st[0])));}))
      :h('div',{class:'empty'},h('b',null,'No expenses here'),'Add receipts for travel, data, software and other costs. '+(S.owner?'Billable ones can go straight onto a client invoice.':'Your manager approves them.')),
    (S.expenses||[]).length?h('button',{class:'btn ghost sm',type:'button',style:'margin-top:12px',onclick:function(){downloadCsv([['Date','Person','Amount','Currency','Category','Client','Billable','Status','Note']].concat((S.expenses||[]).map(function(e){return [e.date,pName(e.personId),e.amount,e.currency,e.category,e.subjectId?sName(e.subjectId):'',e.billable?'Yes':'',(EXS[e.status]||[''])[0],e.note];})),BRAND+' expenses '+today().replace(/-/g,'')+'.csv');}},'Export expenses'):null];}
function openExpense(id){var e=id?(S.expenses||[]).find(function(x){return x.id===id;}):null;
  M={kind:'expense',id:id||null,del:false,reason:'',d:e?JSON.parse(JSON.stringify(e)):{id:uid(),date:today(),amount:'',currency:S.settings.currency||'USD',category:'other',note:'',subjectId:'',billable:false,personId:me}};$('#ov').hidden=false;renderSheet();}
function renderExpense(){var d=M.d,e=M.id?(S.expenses||[]).find(function(x){return x.id===M.id;}):null,locked=e&&!S.owner&&(e.status==='approved'||e.status==='invoiced'),st=e?EXS[e.status]||EXS.pending:null;
  var save=function(){var v=Object.assign({},d,{amount:Number(d.amount)||0});if(!(v.amount>0)){toast('Add the amount.');return null;}delete v.receipt;send('saveExpense',{expense:v},true);M.id=v.id;return v;};
  return [head(M.id?'Expense':'New expense'),e?h('div',{class:'acts',style:'margin:0'},h('b',{class:st[1]},st[0]),S.owner&&e.personId!==me?h('small',{class:'note',text:'From '+pName(e.personId)}):null,e.reason?h('small',{class:'note',text:'Reason: '+e.reason}):null):null,
    h('div',{class:'frow'},fld('Amount',h('input',{class:'in',id:'e-amt',type:'number',min:'0',step:'0.01',disabled:locked,value:String(d.amount),oninput:function(ev){d.amount=ev.target.value;}})),
      fld('Currency',h('select',{class:'in',id:'e-cur',disabled:locked,value:d.currency,onchange:bind(d,'currency')},CURS.map(function(c){return h('option',{value:c[0],text:c[1]});}))),
      fld('Date',h('input',{class:'in',id:'e-date',type:'date',disabled:locked,value:d.date,onchange:bind(d,'date')})),
      fld('Type',h('select',{class:'in',id:'e-cat',disabled:locked,value:d.category,onchange:bind(d,'category')},EXT.map(function(c){return h('option',{value:c[0],text:c[1]});}))),
      fld('What was it for?',h('input',{class:'in',id:'e-note',maxlength:300,disabled:locked,placeholder:'For example: airtime for client calls',value:d.note,oninput:bind(d,'note')}),true),
      fld('Client, optional',h('select',{class:'in',id:'e-sub',disabled:locked,value:d.subjectId,onchange:function(ev){d.subjectId=ev.target.value;if(!d.subjectId)d.billable=false;renderSheet();}},h('option',{value:'',text:'No client'}),liveSubjects().map(function(s){return h('option',{value:s.id,text:s.name});})))),
    d.subjectId?h('label',{class:'switch'},h('input',{type:'checkbox',id:'e-bill',disabled:locked,checked:!!d.billable,onchange:function(ev){d.billable=ev.target.checked;}}),'Bill this to the client on their next invoice'):null,
    S.owner&&!M.id?fld('Whose expense',h('select',{class:'in',id:'e-who',value:d.personId,onchange:bind(d,'personId')},S.people.map(function(p){return h('option',{value:p.id,text:p.name+(p.id===me?' (me)':'')});}))):null,
    h('div',{class:'panel'},h('strong',null,'Receipt'),e&&e.receipt?h('div',{class:'cl'},e.receipt.url?h('a',{href:e.receipt.url,target:'_blank',rel:'noopener noreferrer',class:'fl',text:e.receipt.name}):h('span',{text:e.receipt.name+' (uploading)'})):h('p',{class:'note',style:'margin:4px 0 0'},'A photo or PDF of the receipt, up to 10 MB.'),
      locked?null:h('label',{class:'btn ghost sm filebtn',style:'margin-top:8px'},e&&e.receipt?'Replace receipt':'Add receipt',h('input',{type:'file',id:'e-file',accept:'image/*,application/pdf',hidden:true,onchange:function(ev){var f=ev.target.files[0];ev.target.value='';if(!f)return;var v=e?null:save();if(!e&&!v)return;attachReceiptFile(M.id,f);}}))),
    locked?null:h('button',{class:'btn wide',type:'button',onclick:function(){if(save()){closeSheet();toast(S.owner?'Expense saved':'Expense sent for approval');}}},M.id?'Save expense':S.owner?'Add expense':'Send for approval'),
    S.owner&&e&&e.status!=='invoiced'?h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},h('strong',null,'Approval'),
      h('input',{class:'in',id:'e-why',maxlength:200,placeholder:'Reason, if declining','aria-label':'Reason',value:M.reason,oninput:bind(M,'reason')}),
      h('div',{class:'acts',style:'margin:0'},e.status!=='approved'?h('button',{class:'btn sm',type:'button',onclick:function(){send('decideExpense',{id:e.id,status:'approved'});closeSheet();}},'Approve'):null,
        e.status!=='rejected'?h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('decideExpense',{id:e.id,status:'rejected',reason:M.reason.trim()});closeSheet();}},'Decline'):null)):null,
    e&&(S.owner||e.status==='pending'||e.status==='rejected')&&e.status!=='invoiced'?h('div',{class:'acts'},M.del?[h('button',{class:'btn danger sm',type:'button',onclick:function(){closeSheet();send('deleteExpense',{id:e.id});}},'Confirm removal'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=false;renderSheet();}},'Keep it')]
      :h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=true;renderSheet();}},'Remove expense')):null];}
function attachReceiptFile(id,f){if(f.size>10*1048576){toast('Files can be up to 10 MB.');return;}if(navigator.onLine===false){toast('You are offline. Receipts can only be added while online.');return;}
  uploads++;toast('Uploading '+f.name);var mime=f.type||'application/octet-stream';
  whenSaved().then(function(){return server('expenseUpload',{id:id,name:f.name,size:f.size,mime:mime});})
    .then(function(res){if(!res.upload||!res.upload.url)throw new Error('no upload link came back');
      return fetch(res.upload.url,{method:'PUT',headers:Object.assign({'Content-Type':mime},res.upload.headers||{}),body:f}).then(function(r){if(!r.ok)throw new Error('the upload failed ('+r.status+')');
        return server('attachReceipt',{id:id,path:res.upload.path,name:f.name,size:f.size,mime:mime});}).then(function(r2){accept(r2);render();if(M&&M.kind==='expense')renderSheet();toast('Receipt attached');});})
    .catch(function(e){if(!lost(e))toast('Could not attach '+f.name+': '+e.message+'.');}).then(function(){uploads--;});}
function billableExpenses(subjectId,currency){return (S.expenses||[]).filter(function(e){return e.status==='approved'&&e.billable&&e.subjectId===subjectId&&e.currency===currency;});}

/* ---------- history (owner) ---------- */
var HPAGE=40;
function openHistory(){M={kind:'history',rows:null,who:'',what:'',from:'',to:'',err:'',next:'',busy:false,open:{}};$('#ov').hidden=false;renderSheet();loadHistory();}
/* one page of the history; more=true adds the next page under the rows already shown */
function loadHistory(more){var f={who:M.who,what:M.what.trim(),from:M.from?new Date(M.from+'T00:00:00').getTime():0,to:M.to?new Date(M.to+'T00:00:00').getTime()+864e5:0},key=JSON.stringify(f);M.key=key;M.busy=true;
  server('history',Object.assign({limit:HPAGE,before:more?M.next:''},f)).then(function(r){if(!M||M.kind!=='history'||M.key!==key)return;M.busy=false;M.rows=(more&&M.rows?M.rows:[]).concat(r.history||[]);M.next=r.nextCursor||'';renderSheet();})
    .catch(function(e){if(lost(e))return;if(M&&M.kind==='history'){M.busy=false;M.err=e.message;renderSheet();}});}
var HFIELD={title:'title',status:'status',assignee:'assigned to',due:'due',subjectId:'client',details:'details',checklist:'checklist',name:'name',email:'email',in:'clock in',out:'clock out',minutes:'minutes',billable:'billable',paystackKey:'Paystack key',workSites:'work sites'};
function hValue(f,v){var x=String(v==null?'':v);if((f==='assignee'||f==='personId')&&person(x))return pName(x);if(f==='subjectId'&&subj(x))return sName(x);if(/^\d{13}$/.test(x)&&/^(in|out|start|end|at|deletedAt|doneAt)$/.test(f))return stamp(+x);return x===''?'(empty)':x;}
function renderHistory(){var refilter=function(){if(!M||M.kind!=='history')return;M.rows=null;M.next='';M.err='';renderSheet();loadHistory();};
  var out=[head('History'),h('p',{class:'note',style:'margin:0'},'Who changed what in this workspace, newest first, with what it was before and after. Secrets show only as set, and private work as private.'),
    h('div',{class:'frow hfil'},fld('Person',h('select',{class:'in',id:'hi-who',value:M.who,onchange:function(e){M.who=e.target.value;refilter();}},h('option',{value:'',text:'Everyone'}),S.people.map(function(p){return h('option',{value:p.name,text:p.name});}))),
      fld('Action',h('input',{class:'in',id:'hi-what',type:'search',maxlength:60,placeholder:'deleted, clocked in, settings',value:M.what,oninput:function(e){M.what=e.target.value;clearTimeout(M.wt);M.wt=setTimeout(refilter,500);}})),
      fld('From',h('input',{class:'in',id:'hi-from',type:'date',value:M.from,max:today(),onchange:function(e){M.from=e.target.value;refilter();}})),
      fld('To',h('input',{class:'in',id:'hi-to',type:'date',value:M.to,max:today(),onchange:function(e){M.to=e.target.value;refilter();}})))];
  if(M.err)out.push(h('p',{class:'err',text:M.err+'.'}));else if(!M.rows)out.push(h('p',{class:'note'},'Loading…'));
  else if(!M.rows.length)out.push(h('p',{class:'note'},M.who||M.what||M.from||M.to?'Nothing matches these filters.':'Nothing yet.'));
  else{var day='';M.rows.forEach(function(r){var d=dayOf(r.at),det=r.detail||[],k=String(r.id||r.at);if(d!==day){day=d;out.push(h('div',{class:'lbl',style:'margin:6px 0 -8px',text:DAYL[parse(d).getDay()]+', '+short(d)}));}
    out.push(h('div',{class:'hrow'},h('span',{class:'tm',text:tIn(r.at)}),h('div',null,h('b',{text:r.who||'Someone'}),' '+r.action,r.summary?h('small',{text:r.summary}):null,
      det.length?(M.open[k]?h('ul',{class:'hdet'},det.map(function(x){var nm=(x.kind&&x.kind!=='task'?x.kind+' ':'')+(HFIELD[x.field]||x.field);
          return h('li',null,x.field?[h('b',{text:nm+': '}),hValue(x.field,x.before)+' → '+hValue(x.field,x.after)]:h('span',{text:x.kind+' '+(x.after||x.before)}));}))
        :h('button',{class:'linkb hmore',type:'button',onclick:function(){M.open[k]=true;renderSheet();}},det.length===1?'See the change':'See the '+det.length+' changes')):null)));});
    if(M.next)out.push(h('button',{class:'btn ghost wide',type:'button',disabled:M.busy,onclick:function(){loadHistory(true);renderSheet();}},M.busy?'Loading…':'Load more'));}
  return out;}

/* ---------- the bin: deleted tasks, restorable for 30 days ---------- */
function openBin(){M={kind:'bin'};$('#ov').hidden=false;renderSheet();}
function renderBin(){var list=(S.trash||[]).slice().sort(function(a,b){return b.deletedAt-a.deletedAt;});
  return [head('Bin'),h('p',{class:'note',style:'margin:0'},'Deleted tasks wait here for 30 days, with their files. '+(S.owner?'You can restore any of them.':'You can restore the ones you created.')),
    list.length?h('div',{class:'panel list'},list.map(function(x){var left=Math.max(0,Math.ceil((x.deletedAt+30*864e5-Date.now())/864e5));
      return h('div',{class:'li rs'},h('i',{class:'dot',style:'background:'+sColor(x.subjectId)+';width:12px;height:12px'}),
        h('div',null,h('strong',{text:x.title||'Private task'}),h('small',{text:[sName(x.subjectId),'deleted '+stamp(x.deletedAt)+(x.deletedBy&&x.deletedBy!==me?' by '+pName(x.deletedBy):''),x.files?x.files+(x.files===1?' file':' files'):'',left+(left===1?' day':' days')+' left'].filter(Boolean).join(' · ')})),
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('restoreTask',{id:x.id});}},'Restore'));}))
    :h('div',{class:'empty'},h('b',null,'The bin is empty'),'Tasks you delete stay here for 30 days.')];}

/* ---------- phone alerts, calendar link and two step sign in: the account sheet ---------- */
function b64uBytes(s){s=String(s).replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';var b=atob(s),u=new Uint8Array(b.length);for(var i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u;}
function deviceName(){var u=navigator.userAgent;return /iphone/i.test(u)?'iPhone':/ipad/i.test(u)?'iPad':/android/i.test(u)?'Android phone':/mac/i.test(u)?'Mac':/windows/i.test(u)?'Windows computer':'This device';}
var pushEp=null;
function checkPushEp(){if(!('serviceWorker' in navigator)||!navigator.serviceWorker.controller)return;navigator.serviceWorker.ready.then(function(r){return r.pushManager&&r.pushManager.getSubscription();}).then(function(s){var ep=s?s.endpoint:'';if(ep!==pushEp){pushEp=ep;if(M&&M.kind==='me')renderSheet();}}).catch(function(){});}
function pushOn(){if(!S.features.push){toast('Phone alerts are not switched on for this app yet.');return;}
  if(!('serviceWorker' in navigator)||!('PushManager' in window)||typeof Notification==='undefined'){toast(/iphone|ipad|ipod/i.test(navigator.userAgent)?'On iPhone, first add the app to your Home Screen, then open it from there and try again.':'This browser cannot get alerts. Try Chrome, Edge or Safari.');return;}
  Notification.requestPermission().then(function(r){if(r!=='granted')throw new Error('Alerts are blocked for this site. Allow notifications in your browser settings');return navigator.serviceWorker.ready;})
    .then(function(reg){return reg.pushManager.getSubscription().then(function(s){return s||reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64uBytes(S.features.push)});});})
    .then(function(sub){var j=sub.toJSON();pushEp=j.endpoint;store.set('hv-alerts','1');send('savePush',{sub:{endpoint:j.endpoint,keys:j.keys},device:deviceName()});})
    .catch(function(e){toast((e&&e.message||'Could not turn on alerts')+'.');});}
function pushOff(){var ep=pushEp;pushEp='';navigator.serviceWorker.ready.then(function(r){return r.pushManager.getSubscription();}).then(function(s){if(s)return s.unsubscribe();}).catch(function(){}).then(function(){send('removePush',{endpoint:ep||''});});}
function calUrl(){return S.myCal?SB+'/functions/v1/portal?cal='+S.myCal:'';}
function copyText(v,done){(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(function(){toast(done||'Copied');},function(){toast('Select the text and copy it');});}
function alertsBlock(){var onHere=!!pushEp&&(S.myPush||[]).some(function(d){return d.endpoint===pushEp;});if(pushEp===null)setTimeout(checkPushEp,0);
  return h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},h('strong',null,'Phone alerts'),
    h('p',{class:'note',style:'margin:0'},S.features.push?'New tasks, questions, mentions and reminders arrive on this device, even when the app is closed. Free.':'Not switched on for this app yet. The app owner adds the alert keys; see the setup guide.'),
    S.features.push?h('div',{class:'acts',style:'margin:0'},onHere?h('button',{class:'btn ghost sm',type:'button',onclick:pushOff},'Turn off on this device'):h('button',{class:'btn sm',type:'button',onclick:pushOn},'Turn on for this device'),
      (S.myPush||[]).length?h('small',{class:'note',text:'On '+S.myPush.length+(S.myPush.length===1?' device':' devices')+': '+S.myPush.map(function(d){return d.device||'a device';}).join(', ')}):null):null);}
function calendarBlock(){var u=calUrl();
  return h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},h('strong',null,'Your tasks in your calendar'),
    h('p',{class:'note',style:'margin:0'},'Your due tasks, planned starts and leave go into Google, Apple or Outlook calendar. The feed updates automatically; Google and Outlook check it every few hours. The link is private to you.'),
    u?[h('input',{class:'in',id:'cal-link',readonly:true,value:u,onclick:function(e){e.target.select();}}),
      h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn sm',type:'button',onclick:function(){copyText(u,'Calendar link copied');}},'Copy link'),
        h('a',{class:'btn ghost sm',href:'https://calendar.google.com/calendar/r?cid='+encodeURIComponent(u.replace(/^https:/,'webcal:')),target:'_blank',rel:'noopener noreferrer'},'Add to Google'),
        h('a',{class:'btn ghost sm',href:u.replace(/^https:/,'webcal:')},'Add to Apple or Outlook'),
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('calendarLink',{rotate:true});}},'Make a new link')),
      h('p',{class:'note',style:'margin:0'},'In Outlook on the web: Add calendar, Subscribe from web, then paste the link.')]
    :h('button',{class:'btn sm',type:'button',style:'align-self:flex-start',onclick:function(){send('calendarLink',{});}},'Get my calendar link'));}
function twofaBlock(){if(!S.features.twofa)return null;var on=!!S.twofa,TF=V.tf=V.tf||{off:false,code:''},redraw=function(){render();if(M)renderSheet();};
  return h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},h('strong',null,'Two step sign in'),
    h('p',{class:'note',style:'margin:0'},on?'On. Signing in on a new device asks for a code from your authenticator app.':'Protect your account with a six digit code from an app such as Google Authenticator, Microsoft Authenticator or Authy.'+(S.settings.require2fa?' This workspace requires it.':'')),
    on?(TF.off?h('div',{class:'addrow',style:'margin:0'},h('input',{class:'in',id:'tf-off',inputmode:'numeric',autocomplete:'one-time-code',placeholder:'Code or recovery code','aria-label':'Code to turn off',value:TF.code,oninput:function(e){TF.code=e.target.value;}}),
        h('button',{class:'btn danger sm',type:'button',disabled:(TF.until||0)>Date.now(),onclick:function(){call('api',{action:'twofaDisable',payload:{code:TF.code}}).then(function(r){S.twofa=false;V.tf=null;toast(r.message||'Two step sign in is off');redraw();})
          .catch(function(e){if(lost(e))return;var u=lockedUntil(e);if(u){TF.until=u;redraw();setTimeout(redraw,u-Date.now()+500);}toast(e.message+'.');});}},'Turn off'))
      :h('button',{class:'btn ghost sm',type:'button',style:'align-self:flex-start',onclick:function(){TF.off=true;redraw();}},'Turn off'))
    :h('button',{class:'btn sm',type:'button',style:'align-self:flex-start',onclick:function(){openTwofaSetup();}},'Turn on'));}
function proofKey(){return 'hv-2fa-'+(sess&&sess.user?sess.user.id:'');}
var QRLIB='qrcode.min.js';
function drawQr(el,text){var go=function(){try{el.innerHTML='';new window.QRCode(el,{text:text,width:176,height:176,colorDark:'#25173B',colorLight:'#FFFFFF'});}catch(e){}};
  if(window.QRCode)return go();var s=document.createElement('script');s.src=QRLIB;s.onload=go;document.head.appendChild(s);}
/* The setup steps, used in the account sheet and on the "this workspace requires it" screen. */
function twofaSetupParts(T,rerender,finish){
  if(T.codes)return [h('p',{style:'margin:0;font-weight:600'},'Two step sign in is on. Save these recovery codes'),h('p',{class:'note',style:'margin:0'},'Each code signs you in once if you lose your phone. Keep them somewhere safe, such as a password manager. They are not shown again.'),
    h('div',{class:'codes'},T.codes.map(function(c){return h('code',{text:c});})),
    h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){copyText(T.codes.join('\n'),'Recovery codes copied');}},'Copy codes'),h('button',{class:'btn sm',type:'button',onclick:finish},'I have saved them'))];
  if(!T.secret){if(!T.busy){T.busy=true;call('api',{action:'twofaSetup',payload:{}}).then(function(r){T.busy=false;T.secret=r.secret;T.url=r.url;rerender();}).catch(function(e){T.busy=false;T.err=e.message;rerender();});}
    return [T.err?h('p',{class:'err',text:T.err+'.'}):h('p',{class:'note'},'Preparing…')];}
  var qr=h('div',{class:'qr','aria-label':'QR code for your authenticator app'});setTimeout(function(){drawQr(qr,T.url);},0);
  return [h('p',{class:'note',style:'margin:0;font-size:13px'},'1. Install an authenticator app on your phone if you do not have one: Google Authenticator, Microsoft Authenticator or Authy.'),
    h('p',{class:'note',style:'margin:0;font-size:13px'},'2. In the app, add an account and scan this code. On this phone? Tap "Open in my app" instead.'),
    qr,h('div',{class:'acts',style:'margin:0;justify-content:center'},h('a',{class:'btn ghost sm',href:T.url},'Open in my app'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){copyText(T.secret,'Key copied');}},'Copy the key')),
    h('p',{class:'note',style:'margin:0;text-align:center;word-break:break-all',text:'Key: '+T.secret.replace(/(.{4})/g,'$1 ').trim()}),
    h('p',{class:'note',style:'margin:0;font-size:13px'},'3. Type the six digit code the app shows.'),
    h('div',{class:'addrow',style:'margin:0'},h('input',{class:'in',id:'tf-code',inputmode:'numeric',autocomplete:'one-time-code',maxlength:7,placeholder:'123456','aria-label':'Six digit code',value:T.code||'',oninput:function(e){T.code=e.target.value;}}),
      h('button',{class:'btn sm',type:'button',disabled:(T.until||0)>Date.now(),onclick:function(){call('api',{action:'twofaEnable',payload:{code:T.code}}).then(function(r){store.set(proofKey(),r.proof);if(S)S.twofa=true;T.codes=r.codes;rerender();})
        .catch(function(e){if(lost(e))return;var u=lockedUntil(e);if(u){T.until=u;rerender();setTimeout(rerender,u-Date.now()+500);}toast(e.message+'.');});}},'Turn on')),lockNote(T.until||0)];}
function openTwofaSetup(){M={kind:'twofa',T:{}};$('#ov').hidden=false;renderSheet();}
function renderTwofa(){return [head('Two step sign in')].concat(twofaSetupParts(M.T,renderSheet,function(){closeSheet();render();toast('Two step sign in is on');}));}
/* asked on a new device when two step sign in is on */
/* after 5 wrong codes the server pauses codes ("Try again in 15 minutes"): the box stays disabled until then */
function lockedUntil(e){if(!e||e.code!=='locked')return 0;var m=/(\d+)\s*minute/.exec(e.message||'');return Date.now()+(m?+m[1]:15)*6e4;}
function lockNote(until){return until>Date.now()?h('p',{class:'err',role:'alert',text:'Too many wrong codes. Codes are paused until '+tIn(until)+'. We emailed you about it.'}):null;}
function twofaScreen(){var T={code:'',rec:false,trust:false,until:Number(store.get('hv-2fa-lock'))||0};
  var draw=function(){var lk=T.until>Date.now();screen([shell('Enter your code',T.rec?'Type one of the recovery codes you saved.':'Open your authenticator app and type the six digit code for '+BRAND+'.',[
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:12px;text-align:left'},
      h('input',{class:'in',id:'tf-in',disabled:lk,inputmode:T.rec?'text':'numeric',autocomplete:'one-time-code',placeholder:T.rec?'abcd efgh':'123456','aria-label':T.rec?'Recovery code':'Six digit code',value:T.code,oninput:function(e){T.code=e.target.value;},onkeydown:function(e){if(e.key==='Enter')go();}}),
      lockNote(T.until),
      h('label',{class:'switch'},h('input',{type:'checkbox',id:'tf-trust',checked:T.trust,onchange:function(e){T.trust=e.target.checked;}}),'Trust this device'),
      h('p',{class:'note',style:'margin:-6px 0 0;font-size:12.5px'},'Skip the code here next time, even after signing out. Only tick this on your own device.'),
      h('button',{class:'btn wide',type:'button',disabled:lk,onclick:go},'Continue'),
      h('button',{class:'linkb',type:'button',onclick:function(){T.rec=!T.rec;T.code='';draw();}},T.rec?'Use a code from the app instead':'Lost your phone? Use a recovery code')),
    h('div',{class:'alt'},h('button',{class:'linkb',type:'button',onclick:signOut},'Sign out'))])]);setTimeout(function(){var f=$('#tf-in');if(f)f.focus();},30);};
  var go=function(){if(T.until>Date.now())return;call('api',{action:'twofaVerify',payload:{code:T.code}}).then(function(r){store.set('hv-2fa-lock','');store.set(proofKey(),r.proof);if(T.trust)store.set('hv-2fa-trust-'+uidNow(),'1');else store.del('hv-2fa-trust-'+uidNow());if(r.message)setTimeout(function(){toast(r.message);},600);if(wsId)boot();else pickWorkspace();})
    .catch(function(e){if(lost(e))return;var u=lockedUntil(e);if(u){T.until=u;store.set('hv-2fa-lock',String(u));draw();setTimeout(function(){if($('#tf-in')){T.until=0;draw();}},u-Date.now()+500);return;}toast(e.message+'.');});};
  draw();}
/* the workspace asks everyone to use two step sign in, and this person has not turned it on yet */
function needTwofaScreen(msg){var T={};var draw=function(){screen([shell('Two step sign in needed',msg,[h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:12px;text-align:left'},
    twofaSetupParts(T,draw,function(){boot();}))].concat([h('div',{class:'alt'},h('button',{class:'linkb',type:'button',onclick:function(){store.set('hv-ws','');wsId='';pickWorkspace();}},'Open another workspace'),' ',h('button',{class:'linkb',type:'button',onclick:signOut},'Sign out'))]))]);};
  draw();}

/* ---------- refer and earn, getting paid, security (owner settings) ---------- */
function referPanel(){var w=S.workspace||{};if(!w.referralCode)return null;var link=(CFG.marketingUrl?String(CFG.marketingUrl).replace(/\/?$/,'/'):location.origin+location.pathname.replace(/app\/?(index\.html)?$/,''))+'?ref='+w.referralCode;
  var msg='I run my team on '+BRAND+'. Sign up with my link and get 30 extra free days: '+link;
  return [h('div',{class:'sec'},h('h3',null,'Refer and earn'),w.refCredits?h('span',{text:w.refCredits+(w.refCredits===1?' free month':' free months')+' earned'}):null),
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},
      h('p',{style:'margin:0'},'Every business that signs up with your link gets 30 extra free days. When they start paying, you get a free month.'),
      h('input',{class:'in',id:'ref-link',readonly:true,value:link,onclick:function(e){e.target.select();}}),
      h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn sm',type:'button',onclick:function(){copyText(link,'Referral link copied');}},'Copy link'),
        h('a',{class:'btn ghost sm',href:'https://wa.me/?text='+encodeURIComponent(msg),target:'_blank',rel:'noopener noreferrer'},'Share on WhatsApp')),
      h('p',{class:'note',style:'margin:0',text:'Your code: '+w.referralCode+'. While you are on the free trial, each free month is added to your trial straight away. Once you pay, it comes off a later bill.'}))];}
function payPanel(){var st=S.settings;M2=M2||{};
  return [h('div',{class:'sec'},h('h3',null,'Get paid online')),
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:12px'},
      h('p',{style:'margin:0'},'Clients pay invoices by card, bank transfer or USSD from their client page, and the invoice is marked paid by itself. The money goes straight to your own Paystack account.'),
      st.hasPaystackKey?h('div',{class:'pkon'},h('p',{class:'ok-note',style:'margin:0',text:'Connected ('+(st.paystackKeyMasked||'saved key')+')'}),
        M2.replace?null:h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){M2.replace=true;render();var f=$('#pk-key');if(f)f.focus();}},'Replace'),
          h('button',{class:'btn ghost sm',type:'button',onclick:function(){M2={};send('saveSettings',{settings:{paystackKey:''}});}},'Disconnect'))):null,
      !st.hasPaystackKey||M2.replace?[fld(st.hasPaystackKey?'New Paystack secret key':'Your Paystack secret key',h('input',{class:'in',id:'pk-key',type:'password',autocomplete:'off',spellcheck:'false',placeholder:'sk_live_…',value:M2.pk||'',oninput:function(e){M2.pk=e.target.value;}})),
        h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn sm',type:'button',disabled:!!M2.busy,onclick:savePayKey},M2.busy?'Connecting…':'Connect Paystack'),M2.replace?h('button',{class:'btn ghost sm',type:'button',onclick:function(){M2={};render();}},'Cancel'):null)]:null,
      h('p',{class:'note',style:'margin:0'},'In Paystack: Settings, API Keys and Webhooks, then copy the Secret Key. It goes straight to the server, encrypted, and is never shown again, not even to you.'),
      st.hasPaystackKey&&st.payWebhookUrl?[copyRow('Webhook URL, so a paid invoice marks itself paid even if the client does not come back',st.payWebhookUrl,'pk-hook'),
        h('p',{class:'note',style:'margin:0'},'Paste it in the same Paystack page as the live Webhook URL. Each payment is checked with your secret key.')]:null,
      h('p',{class:'note',style:'margin:0'},'Online payment works for invoices in naira, cedis, rand, shillings and US dollars. Pounds and euros show your payment link instead.'),
      fld('Or a payment link, for clients outside Paystack',h('input',{class:'in',id:'pk-link',type:'url',maxlength:300,placeholder:'https://paystack.com/pay/yourname or a PayPal or Stripe link',value:M2.link===undefined?st.payLink:M2.link,oninput:function(e){M2.link=e.target.value;}})),
      h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){if(M2.link===undefined){toast('Nothing to save.');return;}var v=M2.link.trim();M2.link=undefined;send('saveSettings',{settings:{payLink:v}});}},'Save payment link')))];}
/* the secret key is sent once, straight to the server, while online. It never enters the offline queue or this device's storage */
function savePayKey(){var k=String(M2.pk||'').trim();if(!k){toast('Paste your Paystack secret key first.');return;}
  if(!/^sk_(test|live)_[A-Za-z0-9]+$/.test(k)){toast('That does not look like a Paystack secret key. It starts with sk_live_ or sk_test_.');return;}
  if(navigator.onLine===false){toast('You are offline. Connect to the internet to save the key.');return;}
  M2.busy=true;M2.pk='';var f=$('#pk-key');if(f)f.value='';render();
  whenSaved().then(function(){return server('saveSettings',{settings:{paystackKey:k}});}).then(function(r){M2={};accept(r);pickMe();render();toast(r.msg||'Paystack is connected');})
    .catch(function(e){M2.busy=false;render();if(!lost(e))toast('Not saved: '+e.message+'.');});}
var M2=null;
function copyRow(label,value,id){return h('div',{style:'display:flex;flex-direction:column;gap:6px'},h('small',{class:'note',text:label}),
  h('div',{class:'copyrow'},h('input',{class:'in mono',id:id,readonly:true,value:value,'aria-label':label,onclick:function(e){e.target.select();}}),h('button',{class:'btn ghost sm',type:'button',onclick:function(){copyText(value,label+' copied');}},'Copy')));}
/* each owner can send WhatsApp from their own WhatsApp Business number; the shared number stays the default */
function waOwnPanel(){var o=S.settings.waOwn||{},F=V.wa=V.wa||{},form=o.on?!!F.edit:!!F.open,busy=!!F.busy;
  var val=function(k){return String(F[k]||'').trim();},inp=function(k,attrs,start){return h('input',Object.assign({class:'in',id:'wo-'+k,autocomplete:'off',value:F[k]!==undefined?F[k]:start||'',oninput:function(e){F[k]=e.target.value;}},attrs));};
  var go=function(action,payload,done){F.busy=true;render();server(action,payload).then(function(r){F.busy=false;if(r.tasks){accept(r);pickMe();}if(done)done();render();if(r.msg)toast(r.msg);})
    .catch(function(e){F.busy=false;render();if(!lost(e))toast(e.message+'.');});};
  return [h('div',{class:'sec',id:'wa-own'},h('h3',null,'WhatsApp number'),h('span',{text:o.on?'Your own number':'Shared '+BRAND+' number'})),
    h('div',{class:'panel wo',style:'display:flex;flex-direction:column;gap:12px'},
      h('p',{style:'margin:0'},o.on?'Alerts, codes and replies come from your own WhatsApp Business number, with no monthly limit from '+BRAND+'. Meta bills you for the messages.'
        :'Alerts come from the shared '+BRAND+' number, up to your plan\'s monthly allowance. You can use your own WhatsApp Business number instead.'),
      o.on?h('p',{class:'ok-note',text:'Connected: phone number ID '+o.phoneId+', token '+o.tokenMasked+'.'}):null,
      !o.on&&!form?h('button',{class:'btn ghost sm',style:'align-self:flex-start',type:'button',onclick:function(){F.open=true;render();}},'Use your own number'):null,
      form?[
        h('div',{class:'frow'},fld('Phone number ID',inp('pid',{inputmode:'numeric'},o.phoneId)),fld('WhatsApp Business Account ID',inp('waba',{inputmode:'numeric'},o.wabaId))),
        h('div',{class:'frow'},fld('Permanent access token',inp('tok',{type:'password',placeholder:o.tokenMasked?'Saved, leave empty to keep':'EAAG…'})),fld('App secret',inp('sec',{type:'password',placeholder:o.secretSet?'Saved, leave empty to keep':'32 letters and numbers'}))),
        h('div',{class:'frow'},fld('Approved template name',inp('tpl',{placeholder:'handlark_update'},o.template)),fld('Template language',inp('lang',{placeholder:'en'},o.lang||'en'))),
        h('p',{class:'note',style:'margin:0'},'In your Meta app: WhatsApp, API Setup has both IDs; Business Settings, System users makes the permanent token; App settings, Basic has the app secret. The template needs one variable. The token and secret are stored encrypted and never shown again.'),
        h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn sm',type:'button',disabled:busy,onclick:function(){go('saveWaOwn',{phoneId:val('pid'),wabaId:val('waba'),token:val('tok'),appSecret:val('sec'),template:val('tpl'),lang:val('lang')},function(){F.tok='';F.sec='';F.edit=false;});}},busy?'Saving…':'Save'),
          h('button',{class:'btn ghost sm',type:'button',onclick:function(){F.open=false;F.edit=false;render();}},o.on?'Cancel':'Not now'))]:null,
      o.on&&!form?[o.webhookUrl?[copyRow('Callback URL, for WhatsApp, Configuration, Edit webhook in Meta',o.webhookUrl,'wo-url'),copyRow('Verify token',o.verifyToken,'wo-vt'),
          h('p',{class:'note',style:'margin:0'},'Paste both, choose Verify and save, then subscribe to messages.')]:null,
        h('div',{class:'copyrow'},inp('test',{type:'tel',placeholder:(person(me)||{}).phone||'Your number, +234…','aria-label':'Number for the test'}),
          h('button',{class:'btn ghost sm',type:'button',disabled:busy,onclick:function(){go('waTest',{phone:val('test')});}},'Send a test')),
        h('div',{class:'acts',style:'margin:0;align-items:center'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){F.edit=true;render();}},'Edit details'),
          h('button',{class:'linkb',style:'color:var(--danger)',type:'button',disabled:busy,onclick:function(){go('saveWaOwn',{off:true},function(){F.open=false;F.edit=false;});}},'Disconnect'))]:null)];}
/* work sites: where people are expected to clock in. A shift away from every site that applies is flagged, never blocked */
function sitesPanel(){var st=S.settings,list=st.workSites||[];
  return [h('div',{class:'sec',id:'sites'},h('h3',null,'Work sites'),h('button',{type:'button',onclick:openSites},list.length?'Edit':'Add a site')),
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},
      h('p',{style:'margin:0'},'Clock ins with a shared location are checked against these places. Shifts away from site are flagged for you; nobody is stopped from clocking in.'),
      st.clockLoc===false?h('p',{class:'note-warn',style:'margin:0'},'Location at clock in is switched off under Workspace, so nothing is checked.'):null,
      list.length?h('div',{class:'list'},list.map(function(x){return h('div',{class:'li'},h('span',{class:'who pin',html:I.pin}),h('div',null,h('strong',{text:x.name}),
        h('small',{text:'Within '+far(x.radius)+' · '+((x.people||[]).length?x.people.map(pName).join(', '):'Everyone')})));})):null,
      h('p',{class:'note',style:'margin:0'},'Locations are only recorded when a person allows it on their phone. Other members never see where anyone clocked in.'))];}
function openSites(){M={kind:'sites',list:(S.settings.workSites||[]).map(function(x){return Object.assign({},x,{people:(x.people||[]).slice()});}),busy:-1};if(!M.list.length)M.list.push({id:uid(),name:'',lat:'',lng:'',radius:150,people:[]});$('#ov').hidden=false;renderSheet();}
function renderSites(){var L=M.list;
  var here=function(x,i){if(!navigator.geolocation){toast('This device cannot share its location.');return;}M.busy=i;renderSheet();
    navigator.geolocation.getCurrentPosition(function(pos){M.busy=-1;x.lat=Math.round(pos.coords.latitude*1e6)/1e6;x.lng=Math.round(pos.coords.longitude*1e6)/1e6;renderSheet();toast('Location filled in. Check it, then save.');},
      function(){M.busy=-1;renderSheet();toast('Could not get your location. Type it in, or allow location for this site.');},{enableHighAccuracy:true,timeout:10000,maximumAge:0});};
  return [head('Work sites'),h('p',{class:'note',style:'margin:0'},'Add the office, a client\'s premises or anywhere people should clock in. Latitude and longitude are on any map app: press and hold the place to see them.'),
    L.map(function(x,i){return h('div',{class:'panel site',style:'display:flex;flex-direction:column;gap:10px'},
      h('div',{class:'phd'},h('strong',{text:x.name||'Site '+(i+1)}),h('button',{class:'linkb',type:'button',style:'color:var(--danger)',onclick:function(){L.splice(i,1);renderSheet();}},'Remove')),
      fld('Name',h('input',{class:'in',id:'ws-n'+i,maxlength:80,placeholder:'Head office',value:x.name,oninput:function(e){x.name=e.target.value;}}),true),
      h('div',{class:'frow'},fld('Latitude',h('input',{class:'in',id:'ws-lat'+i,inputmode:'decimal',placeholder:'6.5244',value:String(x.lat),oninput:function(e){x.lat=e.target.value;}})),
        fld('Longitude',h('input',{class:'in',id:'ws-lng'+i,inputmode:'decimal',placeholder:'3.3792',value:String(x.lng),oninput:function(e){x.lng=e.target.value;}})),
        fld('Counts as on site within, metres',h('input',{class:'in',id:'ws-r'+i,type:'number',min:'20',max:'5000',step:'10',value:String(x.radius||150),oninput:function(e){x.radius=Number(e.target.value)||150;}}))),
      h('button',{class:'btn ghost sm',type:'button',style:'align-self:flex-start',disabled:M.busy===i,onclick:function(){here(x,i);}},M.busy===i?'Finding you…':'Use where I am now'),
      h('div',{class:'lbl'},'For'),
      h('div',{class:'chips wrap'},h('button',{class:'chip',type:'button','aria-pressed':String(!x.people.length),onclick:function(){x.people=[];renderSheet();}},'Everyone'),
        S.people.map(function(p){var on=x.people.indexOf(p.id)>=0;return h('button',{class:'chip',type:'button','aria-pressed':String(on),onclick:function(){if(on)x.people=x.people.filter(function(v){return v!==p.id;});else x.people.push(p.id);renderSheet();}},p.name);})));}),
    h('button',{class:'btn ghost wide',type:'button',onclick:function(){L.push({id:uid(),name:'',lat:'',lng:'',radius:150,people:[]});renderSheet();var f=$('#ws-n'+(L.length-1));if(f)f.focus();}},'Add another site'),
    h('button',{class:'btn wide',type:'button',onclick:function(){var bad=L.find(function(x){return !String(x.name).trim()||!isFinite(parseFloat(x.lat))||!isFinite(parseFloat(x.lng))||Math.abs(parseFloat(x.lat))>90||Math.abs(parseFloat(x.lng))>180;});
      if(bad){toast((String(bad.name).trim()||'Each site')+' needs a name, and a latitude and longitude.');return;}
      var sites=L.map(function(x){return {id:x.id,name:String(x.name).trim(),lat:parseFloat(x.lat),lng:parseFloat(x.lng),radius:Math.max(20,Math.min(5000,Math.round(Number(x.radius)||150))),people:x.people.slice()};});
      closeSheet();send('saveWorkSites',{sites:sites});}},'Save work sites')];}
/* leaving, deleting the workspace and deleting your account */
function dangerPanel(){return [h('div',{class:'sec'},h('h3',null,'Hand over or delete')),
  h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:12px'},
    h('p',{style:'margin:0'},'To give this workspace to someone else, open them under People and choose Make owner.'),
    h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn danger sm',type:'button',onclick:openDeleteWs},'Delete workspace'),h('button',{class:'btn ghost sm',type:'button',onclick:openDeleteMe},'Delete my account')),
    h('p',{class:'note',style:'margin:0'},'Deleting the workspace cancels its plan and closes it for everyone at once. You can restore it for 30 days; then its tasks, files and records are purged.'))];}
function goElsewhere(list,msg){closeSheet();store.del(stKey());Q=[];saveQ();S=null;wsId='';store.set('hv-ws','');if(list)wsList=list;if(msg)toast(msg);pickWorkspace();}
function openDeleteWs(){M={kind:'delws',name:'',busy:false,err:''};$('#ov').hidden=false;renderSheet();var f=$('#dw-name');if(f)f.focus();}
function renderDelWs(){var n=S.workspace.name,match=function(v){return v.trim().toLowerCase()===n.trim().toLowerCase();};
  return [head('Delete '+n+'?'),
    h('p',{style:'margin:0'},'Everyone loses access straight away, client page links stop working, and the plan is cancelled, so nothing more is charged.'),
    h('p',{class:'note',style:'margin:0'},'You can restore it for 30 days when you sign in. After that its tasks, files and records are removed for good.'),
    h('button',{class:'btn ghost sm',style:'align-self:flex-start',type:'button',onclick:function(){exportZip('exportData','everything');}},'Export everything first'),
    fld('Type the workspace name to confirm',h('input',{class:'in',id:'dw-name',autocomplete:'off',placeholder:n,value:M.name,oninput:function(e){M.name=e.target.value;var b=$('#dw-go');if(b)b.disabled=!match(M.name)||M.busy;}})),
    M.err?h('p',{class:'err',role:'alert',text:M.err}):null,
    h('button',{class:'btn danger wide',id:'dw-go',type:'button',disabled:!match(M.name)||M.busy,onclick:function(){M.busy=true;M.err='';renderSheet();
      server('deleteWorkspace',{confirm:M.name}).then(function(r){goElsewhere(r.workspaces,r.message);})
        .catch(function(e){if(lost(e))return;M.busy=false;M.err=e.message+'.';renderSheet();});}},M.busy?'Deleting…':'Delete workspace')];}
function openDeleteMe(){M={kind:'delme',pw:'',typed:'',busy:false,err:''};$('#ov').hidden=false;renderSheet();}
function renderDelMe(){var email=(sess&&sess.user&&sess.user.email)||'',ready=function(){return M.typed.trim().toUpperCase()==='DELETE'&&M.pw.length>0&&!M.busy;};
  var upd=function(){var b=$('#dm-go');if(b)b.disabled=!ready();};
  return [head('Delete my account'),
    h('p',{style:'margin:0'},'You leave every workspace, and your profile, phone alerts, email settings and two step sign in are deleted. The work you did stays with each workspace, shown as by a former member.'),
    wsList.some(function(w){return w.owner;})?h('p',{class:'note',style:'margin:0'},'A workspace you own with other people in it needs a new owner first (People, Make owner), or must be deleted. A workspace with only you in it is deleted with your account.'):null,
    fld('Your password, to confirm it is you',h('input',{class:'in',id:'dm-pw',type:'password',autocomplete:'current-password',oninput:function(e){M.pw=e.target.value;upd();}})),
    fld('Type DELETE',h('input',{class:'in',id:'dm-typed',autocomplete:'off',value:M.typed,oninput:function(e){M.typed=e.target.value;upd();}})),
    M.err?h('p',{class:'err',role:'alert',text:M.err}):null,
    h('button',{class:'btn danger wide',id:'dm-go',type:'button',disabled:!ready(),onclick:function(){M.busy=true;M.err='';renderSheet();
      // a fresh sign in first: Firebase only deletes an account for a recent login
      fb('signInWithPassword',{email:email,password:M.pw,returnSecureToken:true}).then(function(j){keepSess(j);return call('api',{action:'deleteAccount',payload:{confirm:'DELETE'}});})
        .then(function(r){return (r.authDelete==='browser'?fb('delete',{idToken:sess.access_token}).catch(function(){return null;}):Promise.resolve()).then(function(){return r;});})
        .then(function(r){closeSheet();endSession(true);toast(r.message||'Your account is deleted');})
        .catch(function(e){M.busy=false;M.pw='';M.err=(e&&e.message)||'Something went wrong';renderSheet();var f=$('#dm-pw');if(f)f.focus();});}},M.busy?'Deleting…':'Delete my account')];}
function leaveWs(){server('leaveWorkspace',{}).then(function(r){goElsewhere(r.workspaces,r.msg);}).catch(function(e){if(lost(e))return;M.leave=false;M.busy=false;renderSheet();toast(e.message+'.');});}
function securityPanel(){if(!S.features.twofa)return null;var st=S.settings;
  return [h('div',{class:'sec'},h('h3',null,'Security')),
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:12px'},
      h('p',{style:'margin:0',text:S.twofa?'Your two step sign in is on.':'Your two step sign in is off. Turn it on in your account first.'}),
      h('label',{class:'switch'},h('input',{type:'checkbox',id:'sec-req',checked:!!st.require2fa,disabled:!S.twofa&&!st.require2fa,onchange:function(e){send('saveSettings',{settings:{require2fa:e.target.checked}});}}),'Ask everyone in this workspace to use two step sign in'),
      h('p',{class:'note',style:'margin:0'},'People without it are asked to set it up the next time they open the workspace. It takes two minutes with a free authenticator app.'),
      h('div',{class:'acts',style:'margin:0'},S.twofa?null:h('button',{class:'btn sm',type:'button',onclick:openTwofaSetup},'Turn on for me'),h('button',{class:'btn ghost sm',type:'button',onclick:openHistory},'See the history of changes')))];}

/* ---------- the owner dashboard: every customer, for the people who run the app ---------- */
function viewAdmin(){if(!S.admin){V.tab='more';return viewMore();}
  if(!V.adm&&!V.admBusy){V.admBusy=true;server('adminStats',{}).then(function(r){V.adm=r.admin;V.admBusy=false;render();}).catch(function(e){V.admBusy=false;V.admErr=e.message;render();});}
  var A=V.adm,top=topbar('Business',BRAND+' across every customer');
  if(!A)return [top,V.admErr?h('p',{class:'err',text:V.admErr+'.'}):h('p',{class:'note'},'Loading…')];
  var t=A.totals,f=V.admF||'all',now=Date.now();
  var list=A.workspaces.filter(function(w){return f==='all'||(f==='trial'&&w.status==='trialing'&&w.active)||(f==='paying'&&w.paying&&w.status!=='cancelled')||(f==='risk'&&w.active&&w.quietDays>=7)||(f==='ended'&&!w.active);});
  var wm=Math.max.apply(null,A.weeks.map(function(x){return x.signups;}).concat([1]));
  var act=function(kind,w,extra){server('adminAction',Object.assign({kind:kind,id:w.id},extra||{})).then(function(r){V.adm=r.admin;render();toast('Done');}).catch(function(e){toast(e.message+'.');});};
  var stc=function(w){return w.status==='active'?'g':w.status==='past_due'||(w.active&&w.quietDays>=7)?'o':!w.active?'r':'';};
  return [top,h('div',{class:'acts',style:'margin:-6px 0 14px'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.adm=null;render();}},'Refresh'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.tab='more';render();}},'Back to settings')),
    h('div',{class:'tiles'},h('div',{class:'tile dark'},h('b',{text:fmtMoney(t.mrrNgn,'NGN').replace(/\.00$/,'')}),h('span',null,'Monthly income in naira')),h('div',{class:'tile'},h('b',{text:fmtMoney(t.mrrUsd,'USD')}),h('span',null,'Monthly income in dollars')),
      h('div',{class:'tile'},h('b',{text:t.paying}),h('span',null,'Paying customers')),h('div',{class:'tile'},h('b',{text:t.trialing}),h('span',null,'On a free trial'))),
    h('div',{class:'two',style:'margin-top:14px'},h('div',{class:'panel'},h('strong',null,'Sign ups per week'),h('div',{class:'cols'},A.weeks.map(function(x,i){return h('div',{class:i===A.weeks.length-1?'t':'',style:'height:'+Math.max(3,x.signups/wm*100)+'%',title:x.signups+' in the week to '+short(dayOf(x.end))},x.signups?h('span',{text:x.signups}):null);})),
        h('div',{class:'axis'},h('span',null,'12 weeks ago'),h('span',null,'This week'))),
      h('div',{class:'panel',style:'display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start'},[[t.signups7,'New this week'],[t.signups30,'New in 30 days'],[t.atRisk,'Quiet for 7 days or more'],[t.pastDue,'Payment failed'],[t.cancelled,'Cancelled'],[t.credits,'Free months owed']].map(function(x){return h('div',null,h('b',{style:'font:650 22px var(--fd);display:block',text:x[0]}),h('small',{class:'note',text:x[1]}));}))),
    h('div',{class:'chips',style:'margin:18px 0 8px'},[['all','All '+A.workspaces.length],['trial','On trial'],['paying','Paying'],['risk','At risk'],['ended','Ended']].map(function(x){return h('button',{class:'chip',type:'button','aria-pressed':String(f===x[0]),onclick:function(){V.admF=x[0];render();}},x[1]);})),
    h('div',{class:'tsheet'},h('table',null,h('thead',null,h('tr',null,['Workspace','Owner','Plan','People','Last active','Referrals','',''].map(function(c){return h('th',{scope:'col',text:c});}))),
      h('tbody',null,list.map(function(w){var left=w.trialEndsAt?Math.ceil((new Date(w.trialEndsAt)-now)/864e5):0;
        return h('tr',null,h('td',null,h('b',{text:w.name}),h('br'),h('small',{class:'note',text:w.kind+', since '+short(String(w.createdAt).slice(0,10))})),
          h('td',null,w.owner,h('br'),h('small',{class:'note',text:w.ownerEmail})),
          h('td',null,h('b',{class:'badge-s '+stc(w),text:w.status==='trialing'?(w.active?'Trial, '+left+'d left':'Trial ended'):w.status==='active'?(w.plan.charAt(0).toUpperCase()+w.plan.slice(1))+(w.interval==='year'?', yearly':''):w.status.replace('_',' ')})),
          h('td',{text:w.people}),h('td',{class:w.quietDays>=7?'':'z',text:w.quietDays?w.quietDays+' days ago':'Today'}),
          h('td',{text:w.referrals+(w.credits?', '+w.credits+' owed':'')}),
          h('td',null,w.credits?h('button',{class:'btn ghost sm',type:'button',onclick:function(){act('useCredit',w);}},'Mark a free month given'):null),
          h('td',null,w.status==='trialing'||w.status==='expired'?h('button',{class:'btn ghost sm',type:'button',onclick:function(){act('extendTrial',w,{days:14});}},'Add 14 trial days'):null));})))),
    h('p',{class:'note',text:'Monthly income counts active plans; yearly plans are spread over 12 months. A free month owed is applied by you, for example as a refund of one month in Paystack or Lemon Squeezy, then marked here.'})];}

/* ---------- Time clock ---------- */
function myShift(){return (S.shifts||[]).find(function(x){return x.personId===me&&!x.out;})||null;}
function brkMs(sh,end){return (sh.breaks||[]).reduce(function(a,b){return a+Math.max(0,(b.end||end)-b.start);},0);}
function workedMs(sh){var end=sh.out||Date.now();return Math.max(0,end-sh.in-brkMs(sh,end));}
function hm(ms){var m=Math.round(ms/6e4);return Math.floor(m/60)+'h '+pad(m%60)+'m';}
function tIn(ms,tz){try{return new Intl.DateTimeFormat('en-GB',{timeZone:tz||undefined,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date(ms));}catch(e){var d=new Date(ms);return pad(d.getHours())+':'+pad(d.getMinutes());}}
function dIn(ms,tz){try{var o=tzParts(tz||myTz,ms);return o.weekday+' '+(+o.day)+' '+MON[o.month-1];}catch(e){return short(ymd(new Date(ms)));}}
function dayKey(ms,tz){try{var o=tzParts(tz||myTz,ms);return o.year+'-'+o.month+'-'+o.day;}catch(e){return ymd(new Date(ms));}}
function isLate(sh){var p=person(sh.personId);if(!p||!p.workStart)return false;var t=tIn(sh.in,sh.tz||p.tz),w=p.workStart.split(':'),x=t.split(':');return (+x[0])*60+(+x[1])>(+w[0])*60+(+w[1])+10;}
/* "their time now", with a hint when it is outside their working hours */
function theirTime(p){if(!p||!p.tz)return '';var t=tIn(Date.now(),p.tz),s=t+' in '+tzCity(p.tz);
  if(p.workStart&&p.workEnd){var n=t.split(':'),m=(+n[0])*60+(+n[1]),a=p.workStart.split(':'),b=p.workEnd.split(':'),st=(+a[0])*60+(+a[1]),en=(+b[0])*60+(+b[1]);
    var inside=st<=en?(m>=st&&m<en):(m>=st||m<en);s+=inside?', working hours':', outside working hours';}
  return s;}
function presenceOf(pid){return (S.presence||[]).find(function(x){return x.personId===pid;})||null;}
function where(){return new Promise(function(ok){if(!S.settings.clockLoc||!navigator.geolocation)return ok(null);var done=false;
  var t=setTimeout(function(){if(!done){done=true;ok(null);}},9000);
  try{navigator.geolocation.getCurrentPosition(function(pos){if(done)return;done=true;clearTimeout(t);ok({lat:pos.coords.latitude,lng:pos.coords.longitude,acc:pos.coords.accuracy});},
    function(){if(done)return;done=true;clearTimeout(t);ok(null);},{enableHighAccuracy:true,timeout:8000,maximumAge:60000});}catch(e){done=true;clearTimeout(t);ok(null);}});}
var clocking=false;
function punch(action,note,extra){if(clocking)return;if(action==='clockOut'&&note===undefined){openHandoff();return;}if(S.workspace&&S.workspace.active===false){toast('This workspace is read only until the plan is renewed.');return;}
  if(action==='breakStart'||action==='breakEnd'){send(action,{});return;}
  clocking=true;if(S.settings.clockLoc&&navigator.geolocation)toast('Getting your location');render();
  var at=Date.now();
  where().then(function(loc){clocking=false;var p=Object.assign({tz:myTz,_at:at},extra||{});if(loc)p.loc=loc;if(action==='clockIn')p.id=uid();if(note)p.note=note;
    send(action,p);if(S.settings.clockLoc&&!loc)setTimeout(function(){toast(action==='clockIn'?'Clocked in. Your location was not shared.':'Clocked out. Your location was not shared.');},400);});}
function clockCard(){var sh=myShift(),br=sh&&sh.breaks.find(function(b){return !b.end;}),td=today();
  var tot=(S.shifts||[]).filter(function(x){return x.personId===me&&dayKey(x.in)===dayKey(Date.now());}).reduce(function(a,x){return a+workedMs(x);},0);
  var cls=!sh?'off':br?'brk':'on',run=!sh?0:br?br.start:sh.in+brkMs(sh,Date.now());
  var p=person(me),lateB=sh&&isLate(sh);
  return h('section',{class:'clock '+cls,'aria-label':'Time clock'},
    h('div',{class:'tm','data-run':sh?String(run):null,'data-base':'0'},sh?'00:00:00':'--:--:--'),
    h('div',{class:'st'},h('small',null,'Time clock'),h('strong',{text:!sh?'You are off the clock':br?'On a break':'Clocked in'}),
      h('span',{text:sh?(sh.subjectId?'For '+sName(sh.subjectId)+(sh.taskId&&S.tasks.find(function(x){return x.id===sh.taskId;})?', '+S.tasks.find(function(x){return x.id===sh.taskId;}).title:'')+' · ':'')+(br?'Break started at '+tIn(br.start):'Since '+tIn(sh.in)+(sh.inLoc?' · location shared':''))+' · today '+hm(tot):(tot?'Today so far: '+hm(tot):(p&&p.workStart?'Your hours start at '+p.workStart:'Tap clock in when you start work'))}),
      sh?h('span',null,h('button',{class:'linkb',type:'button',onclick:function(){openClockFor('switch');}},sh.subjectId?'Switch client':'Count this for a client')):null,
      lateB?h('span',null,h('b',{class:'badge-s o'},'Later than '+p.workStart)):null),
    h('div',{class:'bt'},!sh?[h('button',{class:'btn sm',type:'button',disabled:clocking,onclick:function(){punch('clockIn');}},clocking?'Clocking in':'Clock in'),
        liveSubjects().length?h('button',{class:'btn ghost sm',type:'button',disabled:clocking,onclick:function(){openClockFor('in');}},'For a client'):null]
      :[br?h('button',{class:'btn ghost sm',type:'button',onclick:function(){punch('breakEnd');}},'End break'):h('button',{class:'btn ghost sm',type:'button',onclick:function(){punch('breakStart');}},'Take a break'),
        h('button',{class:'btn sm',type:'button',disabled:clocking,onclick:function(){punch('clockOut');}},'Clock out')]));}
/* who is working right now, with each person's own local time */
function teamNow(){var list=S.people.filter(function(p){return S.owner||!p.hidden;});
  return h('div',{class:'team'},list.map(function(p){var pr=presenceOf(p.id),cls=pr?(pr.onBreak?'brk':'on'):'off';
    var mine=(S.shifts||[]).filter(function(x){return x.personId===p.id&&dayKey(x.in,p.tz)===dayKey(Date.now(),p.tz);}).reduce(function(a,x){return a+workedMs(x);},0);
    return h('div',{class:'mate '+cls},h('span',{class:'who',text:initials(p.name)}),h('div',null,h('strong',{text:p.name+(p.id===me?' (you)':'')}),
      h('small',{text:(pr?(pr.onBreak?'On a break':'Working since '+tIn(pr.since,p.tz)):'Off the clock')+(mine?' · '+hm(mine)+' today':'')}),
      focusOf(p.id)?h('small',{style:'color:var(--info);font-weight:600',text:'In focus, '+focusOf(p.id).plannedMin+' minute session'}):null,
      p.tz?h('small',{text:theirTime(p)}):null));}));}
function far(m){return m>=1000?(m/1000).toFixed(m>=10000?0:1)+' km':Math.round(m)+' m';}
function awayOf(x){return [x.inSite,x.outSite].filter(function(c){return c&&c.away;});}
function weekSheet(){var days=[];for(var i=6;i>=0;i--)days.push(addDays(today(),-i));
  var ppl=S.people.filter(function(p){return S.owner?(S.shifts.some(function(x){return x.personId===p.id;})||!p.hidden):p.id===me;});
  var cell=function(p,day){return (S.shifts||[]).filter(function(x){return x.personId===p.id&&dayKey(x.in,x.tz||p.tz)===day;}).reduce(function(a,x){return a+workedMs(x);},0);};
  return h('div',{class:'tsheet'},h('table',null,h('thead',null,h('tr',null,h('th',{scope:'col'},'Person'),days.map(function(d){var x=parse(d);return h('th',{scope:'col',text:DAY[x.getDay()]+' '+x.getDate()});}),h('th',{scope:'col'},'Week'))),
    h('tbody',null,ppl.map(function(p){var sum=0;return h('tr',null,h('td',{text:p.name}),days.map(function(d){var v=cell(p,d);sum+=v;
      var aw=S.owner?(S.shifts||[]).filter(function(x){return x.personId===p.id&&dayKey(x.in,x.tz||p.tz)===d;}).reduce(function(a,x){return a.concat(awayOf(x));},[]):[];
      return h('td',{class:(v?'':'z')+(aw.length?' aw':''),title:aw.length?aw.map(function(c){return 'Away from site, '+far(c.m)+' from '+c.site;}).join('; '):null},v?hm(v):'0h',aw.length?h('i',{class:'awd','aria-label':'Away from site'}):null);}),h('td',{class:'tot',text:hm(sum)}));}))),
    S.owner&&(S.settings.workSites||[]).length?h('p',{class:'note',style:'margin:6px 0 0'},h('i',{class:'awd'}),' Clocked in or out away from a work site. Tap the shift below for the distance.'):null);}
function shiftRow(x){var p=person(x.personId)||{name:'Someone'},z=x.tz||p.tz,fl=[];
  if(!x.out)fl.push(h('b',{class:'badge-s g'},'Clocked in now'));if(isLate(x))fl.push(h('b',{class:'badge-s o'},'Late start'));
  if(x.autoClosed)fl.push(h('b',{class:'badge-s r'},'Not clocked out, check the times'));if(x.edited)fl.push(h('b',{class:'badge-s'},'Edited'));
  if(S.owner&&(x.lateIn||x.lateOut))fl.push(h('b',{class:'badge-s o',title:'The device sent this time later than it happened, for example after being offline'},'Sent late'));
  if(S.owner)[['inSite','Clocked in'],['outSite','Clocked out']].forEach(function(k){var c=x[k[0]];if(c&&c.away)fl.push(h('b',{class:'badge-s r'},k[1]+' away from site, '+far(c.m)+' from '+c.site));});
  if(x.breaks&&x.breaks.length)fl.push(h('b',{class:'badge-s'},'Breaks '+hm(brkMs(x,x.out||Date.now()))));
  var map=function(l,label){return h('a',{href:'https://www.openstreetmap.org/?mlat='+l.lat+'&mlon='+l.lng+'#map=17/'+l.lat+'/'+l.lng,target:'_blank',rel:'noopener noreferrer',onclick:function(e){e.stopPropagation();}},label+' location');};
  if(x.inLoc)fl.push(map(x.inLoc,'In'));if(x.outLoc)fl.push(map(x.outLoc,'Out'));if(x.note)fl.push(h('small',{style:'flex-basis:100%',text:'Handoff: '+x.note}));
  var inner=[h('div',null,h('strong',{text:(S.owner?p.name+' · ':'')+dIn(x.in,z)+(x.subjectId?' · '+sName(x.subjectId):'')}),h('br'),h('small',{text:tIn(x.in,z)+' to '+(x.out?tIn(x.out,z):'now')+' '+tzCity(z)+' time'+(z&&z!==myTz?' ('+tIn(x.in)+' to '+(x.out?tIn(x.out):'now')+' yours)':'')})),
    h('span',{class:'hrs',text:hm(workedMs(x))}),fl.length?h('div',{class:'fl'},fl):null];
  return S.owner?h('button',{class:'shift',type:'button',onclick:function(){openShift(x.id);}},inner):h('div',{class:'shift'},inner);}
function exportTimes(){var rows=[['Person','Date','Clock in','Clock out','Time zone','Breaks (minutes)','Worked (hours)','Late','In location','Out location','Notes']];
  (S.shifts||[]).slice().sort(function(a,b){return a.in-b.in;}).forEach(function(x){var p=person(x.personId)||{name:''},z=x.tz||p.tz;
    rows.push([p.name,dayKey(x.in,z),tIn(x.in,z),x.out?tIn(x.out,z):'',z||'',Math.round(brkMs(x,x.out||Date.now())/6e4),(workedMs(x)/36e5).toFixed(2),isLate(x)?'Yes':'',x.inLoc?x.inLoc.lat+' '+x.inLoc.lng:'',x.outLoc?x.outLoc.lat+' '+x.outLoc.lng:'',(x.autoClosed?'Closed automatically ':'')+(x.note||'')]);});
  downloadCsv(rows,BRAND+' timesheet '+today().replace(/-/g,'')+'.csv');}
function clockSection(){var recent=(S.shifts||[]).slice().sort(function(a,b){return b.in-a.in;}).slice(0,S.owner?20:10);
  return [h('div',{class:'sec'},h('h3',null,'Time clock'),h('button',{type:'button',onclick:exportTimes},'Export timesheet')),h('div',{style:'display:grid;gap:22px'},
    h('div',{class:'blk'},h('div',{class:'sec',style:'margin-top:0'},h('h3',{style:'font-size:15px'},'Right now'),h('span',{text:(S.presence||[]).length+' clocked in'})),teamNow()),
    h('div',{class:'blk'},h('div',{class:'sec'},h('h3',{style:'font-size:15px'},'This week'),h('span',null,'Hours worked, breaks taken out')),weekSheet()),
    h('div',{class:'blk'},h('div',{class:'sec'},h('h3',{style:'font-size:15px'},'Recent shifts'),S.owner?h('span',null,'Tap a shift to correct it'):null),
      recent.length?h('div',{class:'shifts'},recent.map(shiftRow)):h('div',{class:'empty'},h('b',null,'No shifts yet'),'Clock in from the home screen when work starts.')))];}
function toLocalInput(ms){if(!ms)return '';var d=new Date(ms);return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())+'T'+pad(d.getHours())+':'+pad(d.getMinutes());}
function openShift(id){var x=S.shifts.find(function(v){return v.id===id;});if(!x)return;M={kind:'shift',id:id,del:false,d:{in:toLocalInput(x.in),out:toLocalInput(x.out)}};$('#ov').hidden=false;renderSheet();}
function renderShift(){var x=S.shifts.find(function(v){return v.id===M.id;}),d=M.d;if(!x){closeSheet();return [];}var p=person(x.personId)||{name:'Someone'};
  return [head('Shift for '+p.name),h('p',{class:'note',style:'margin:0',text:'Times here are in your own time zone ('+tzCity(myTz)+'). '+(x.tz&&x.tz!==myTz?p.name.split(' ')[0]+' clocked in from '+tzCity(x.tz)+' time.':'')}),
    h('div',{class:'frow'},fld('Clock in',h('input',{class:'in',id:'sh-in',type:'datetime-local',value:d.in,oninput:bind(d,'in')})),fld('Clock out',h('input',{class:'in',id:'sh-out',type:'datetime-local',value:d.out,oninput:bind(d,'out')}))),
    h('p',{class:'note',style:'margin:0'},'Leave clock out empty to keep the shift open.'),
    h('button',{class:'btn wide',type:'button',onclick:function(){var i=new Date(d.in).getTime(),o=d.out?new Date(d.out).getTime():0;
      if(!(i>0)){toast('Add a clock in time.');return;}if(o&&o<=i){toast('Clock out must be after clock in.');return;}if(o&&o-i>864e5){toast('A shift can be at most 24 hours.');return;}
      var id=M.id;closeSheet();send('editShift',{id:id,in:i,out:o});}},'Save shift'),
    h('div',{class:'acts'},M.del?[h('button',{class:'btn danger sm',type:'button',onclick:function(){var id=M.id;closeSheet();send('deleteShift',{id:id});}},'Confirm removal'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=false;renderSheet();}},'Keep it')]
      :h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=true;renderSheet();}},'Remove shift'))];}

/* ---------- Public holidays for any year: fixed dates, Easter based dates and, for Nigeria, the Islamic (Umm al Qura) calendar.
   The same rules as publicHolidays in the server's core.js; test/billing.test.js checks both give the same days. ---------- */
/* HOLIDAYS START */
function publicHolidays(region,year){
  var y=Number(year),out=[];if(!(y>1900&&y<2200))return out;
  var two=function(n){return (n<10?'0':'')+n;};
  var ymdU=function(yy,m,d){return new Date(Date.UTC(yy,m,d)).toISOString().slice(0,10);};
  var wdOf=function(s){return new Date(Date.parse(s+'T12:00:00Z')).getUTCDay();};
  var plus=function(s,n){return new Date(Date.parse(s+'T12:00:00Z')+n*864e5).toISOString().slice(0,10);};
  var nth=function(m,wd,n){if(n>0){var f=new Date(Date.UTC(y,m,1)).getUTCDay();return ymdU(y,m,1+((wd-f+7)%7)+(n-1)*7);}
    var lastD=new Date(Date.UTC(y,m+1,0)).getUTCDate(),last=new Date(Date.UTC(y,m,lastD)).getUTCDay();return ymdU(y,m,lastD-((last-wd+7)%7));};
  var easter=function(){var a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),hh=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-hh-k)%7,m=Math.floor((a+11*hh+22*l)/451);
    return ymdU(y,Math.floor((hh+l-7*m+114)/31)-1,((hh+l-7*m+114)%31)+1);};
  var islamic=function(wanted){var f=null,cals=['islamic-umalqura','islamic-civil','islamic'],res=[];
    for(var c=0;c<cals.length&&!f;c++){try{var x=new Intl.DateTimeFormat('en-u-ca-'+cals[c],{timeZone:'UTC',day:'numeric',month:'numeric',year:'numeric'});if(x.resolvedOptions().calendar.indexOf('islamic')===0)f=x;}catch(e){}}
    if(!f)return res;
    for(var t=Date.UTC(y,0,1);t<Date.UTC(y+1,0,1);t+=864e5){var p={};f.formatToParts(new Date(t)).forEach(function(q){p[q.type]=q.value;});
      wanted.forEach(function(w){if(+p.month===w[0]&&+p.day===w[1])res.push([new Date(t).toISOString().slice(0,10),w[2]]);});}
    return res;};
  if(region==='US'){
    var obs=function(s,name){var w=wdOf(s);if(w===6)out.push([plus(s,-1),name+' (observed)']);else if(w===0)out.push([plus(s,1),name+' (observed)']);else out.push([s,name]);};
    var ny=ymdU(y,0,1);if(wdOf(ny)!==6)obs(ny,"New Year's Day");
    out.push([nth(0,1,3),'Martin Luther King Jr. Day'],[nth(1,1,3),"Washington's Birthday"],[nth(4,1,-1),'Memorial Day']);
    obs(ymdU(y,5,19),'Juneteenth');obs(ymdU(y,6,4),'Independence Day');
    out.push([nth(8,1,1),'Labor Day'],[nth(9,1,2),'Columbus Day']);
    obs(ymdU(y,10,11),'Veterans Day');out.push([nth(10,4,4),'Thanksgiving Day']);obs(ymdU(y,11,25),'Christmas Day');
    if(wdOf(ymdU(y+1,0,1))===6)out.push([ymdU(y,11,31),"New Year's Day (observed)"]);
  }else if(region==='NG'){
    var e0=easter(),fixed=[[ymdU(y,0,1),"New Year's Day"],[ymdU(y,4,1),"Workers' Day"],[ymdU(y,5,12),'Democracy Day'],[ymdU(y,9,1),'Independence Day'],[ymdU(y,11,25),'Christmas Day'],[ymdU(y,11,26),'Boxing Day']];
    var isl=islamic([[10,1,'Eid al Fitr, may move'],[10,2,'Eid al Fitr holiday, may move'],[12,10,'Eid al Adha, may move'],[12,11,'Eid al Adha holiday, may move'],[3,12,'Eid el Maulud, may move']]);
    var base=fixed.concat(isl,[[plus(e0,-2),'Good Friday'],[plus(e0,1),'Easter Monday']]),taken={};base.forEach(function(x){taken[x[0]]=1;});
    base.sort(function(a,b){return a[0].localeCompare(b[0]);}).forEach(function(x){out.push(x);var w=wdOf(x[0]);if(w!==0&&w!==6)return;
      var d=plus(x[0],1);while(wdOf(d)===0||wdOf(d)===6||taken[d])d=plus(d,1);taken[d]=1;
      if(d.slice(0,4)===String(y))out.push([d,x[1].replace(/ holiday(, may move)?$/,'$1').replace(/(, may move)?$/,' holiday$1')]);});
  }
  void two;
  return out.filter(function(x){return x[0].slice(0,4)===String(y);}).sort(function(a,b){return a[0].localeCompare(b[0]);});}
/* HOLIDAYS END */
var HOLY={};function holidaysYear(r,y){var k=r+y;if(!HOLY[k])HOLY[k]=publicHolidays(r,y);return HOLY[k];}
var REGION={NG:'Nigeria',US:'United States'};
function holidaysOn(day){var out=[],regs=String((S.settings.holidayRegions===undefined?'NG,US':S.settings.holidayRegions)||'').split(',').filter(Boolean);
  regs.forEach(function(r){holidaysYear(r,+String(day).slice(0,4)).forEach(function(x){if(x[0]===day)out.push({name:x[1],region:REGION[r]||r});});});
  String(S.settings.customHolidays||'').split(',').forEach(function(c){var a=c.split('|');if(a[0]&&a[0].trim()===day)out.push({name:(a[1]||'Holiday').trim(),region:'Workspace'});});
  return out;}
function onLeave(day){return (S.leaves||[]).filter(function(l){return l.status==='approved'&&l.from<=day&&l.to>=day;});}
function weekdaysBetween(a,b){var n=0,d=a;while(d<=b){var w=parse(d).getDay();if(w&&w<6)n++;d=addDays(d,1);}return n;}

/* ---------- money ---------- */
function fmtMoney(n,c){try{return new Intl.NumberFormat('en-US',{style:'currency',currency:c||'USD',minimumFractionDigits:2}).format(Number(n)||0);}catch(e){return (c||'')+' '+(Number(n)||0).toFixed(2);}}
var CURS=[['USD','US dollars'],['NGN','Naira'],['GBP','Pounds'],['EUR','Euros'],['GHS','Cedis'],['KES','Kenyan shillings'],['ZAR','Rand']];
/* a CSV cell: text a spreadsheet would read as a formula (= + - @ tab or carriage return first) gets a leading quote mark, like the server does */
function csvCell(v){var x=v==null?'':String(v);if(typeof v==='string'&&/^[=+\-@\t\r]/.test(x))x="'"+x;return '"'+x.replace(/"/g,'""')+'"';}
/* every CSV this page builds goes through here, so every cell passes the one formula guard above */
function csvText(rows){return '﻿'+rows.map(function(r){return r.map(csvCell).join(',');}).join('\r\n');}
function downloadCsv(rows,name){downloadBlob(new Blob([csvText(rows)],{type:'text/csv'}),name);}

/* ---------- Leave ---------- */
var LTYPE={annual:'Annual leave',sick:'Sick leave',unpaid:'Unpaid leave',other:'Other leave'};
function openLeave(){M={kind:'leave',d:{id:uid(),personId:me,from:today(),to:today(),type:'annual',note:''}};$('#ov').hidden=false;renderSheet();}
function renderLeave(){var d=M.d,days=d.from&&d.to&&d.to>=d.from?weekdaysBetween(d.from,d.to):0;
  return [head(S.owner?'Add leave':'Ask for leave'),
    S.owner?fld('Person',h('select',{class:'in',id:'lv-who',value:d.personId,onchange:bind(d,'personId')},S.people.map(function(p){return h('option',{value:p.id,text:p.name+(p.id===me?' (me)':'')});}))):null,
    h('div',{class:'frow'},fld('First day',h('input',{class:'in',id:'lv-from',type:'date',value:d.from,onchange:function(e){d.from=e.target.value;if(d.to<d.from)d.to=d.from;renderSheet();}})),
      fld('Last day',h('input',{class:'in',id:'lv-to',type:'date',value:d.to,onchange:function(e){d.to=e.target.value;renderSheet();}}))),
    fld('Type',h('select',{class:'in',id:'lv-type',value:d.type,onchange:bind(d,'type')},Object.keys(LTYPE).map(function(k){return h('option',{value:k,text:LTYPE[k]});}))),
    fld('Note, optional',h('input',{class:'in',id:'lv-note',maxlength:300,value:d.note,oninput:bind(d,'note')})),
    h('p',{class:'note',style:'margin:0',text:days?days+(days===1?' working day':' working days')+'. '+(S.owner?'It is approved straight away.':'The owner is told and approves it.'):'Choose the dates.'}),
    h('button',{class:'btn wide',type:'button',onclick:function(){if(!d.from||d.to<d.from){toast('Check the dates.');return;}var l=Object.assign({},d);closeSheet();send('requestLeave',{leave:l});}},S.owner?'Add leave':'Send request')];}
function leaveRow(l){var p=person(l.personId)||{name:'Someone'},mine=l.personId===me,days=weekdaysBetween(l.from,l.to);
  var chip=l.status==='approved'?h('b',{class:'badge-s g'},'Approved'):l.status==='declined'?h('b',{class:'badge-s r'},'Declined'):h('b',{class:'badge-s o'},'Waiting for approval');
  return h('div',{class:'lv'},h('div',null,h('strong',{text:p.name+' · '+(LTYPE[l.type]||'Leave')}),h('br'),h('small',{text:short(l.from)+(l.to!==l.from?' to '+short(l.to):'')+' · '+days+(days===1?' working day':' working days')+(l.note?' · '+l.note:'')})),chip,
    (S.owner&&l.status==='pending')||(mine&&l.status==='pending')||S.owner?h('div',{class:'acts'},
      S.owner&&l.status==='pending'?[h('button',{class:'btn sm',type:'button',onclick:function(){send('decideLeave',{id:l.id,status:'approved'});}},'Approve'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('decideLeave',{id:l.id,status:'declined'});}},'Decline')]:null,
      (mine&&l.status==='pending')||S.owner?h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('cancelLeave',{id:l.id});}},S.owner?'Remove':'Withdraw'):null):null);}
function leaveSection(){var td=today(),list=(S.leaves||[]).slice().sort(function(a,b){return (a.status==='pending'?0:1)-(b.status==='pending'?0:1)||a.from.localeCompare(b.from);});
  var upcoming=list.filter(function(l){return l.to>=td;}),past=list.filter(function(l){return l.to<td;}).reverse().slice(0,8);
  var hols=[];for(var i=0;i<90;i++){var day=addDays(td,i);holidaysOn(day).forEach(function(x){hols.push({day:day,name:x.name,region:x.region});});}
  return [h('div',{class:'sec'},h('h3',null,'Leave'),h('button',{type:'button',onclick:openLeave},S.owner?'Add leave':'Ask for leave')),
    h('div',{style:'display:grid;gap:22px'},
      h('div',{class:'blk'},h('div',{class:'sec',style:'margin-top:0'},h('h3',{style:'font-size:15px'},'Coming up and waiting'),h('span',{text:upcoming.filter(function(l){return l.status==='pending';}).length+' waiting'})),
        upcoming.length?h('div',{class:'shifts'},upcoming.map(leaveRow)):h('div',{class:'empty'},h('b',null,'No leave booked'),S.owner?'Add leave for anyone, or approve requests here.':'Ask for leave and the owner gets a message.')),
      h('div',{class:'blk'},h('div',{class:'sec'},h('h3',{style:'font-size:15px'},'Public holidays, next 90 days'),S.owner?h('button',{type:'button',onclick:function(){V.tab='more';render();setTimeout(function(){var b=$('#hol-set');if(b)b.scrollIntoView({behavior:'smooth'});},60);}},'Choose countries'):null),
        hols.length?h('div',null,hols.map(function(x){return h('div',{class:'hol'},h('b',{text:DAY[parse(x.day).getDay()]+' '+short(x.day)}),h('span',{text:x.name+' · '+x.region}));})):h('p',{class:'note'},'No public holidays in the next 90 days.')),
      past.length?h('div',{class:'blk'},h('div',{class:'sec'},h('h3',{style:'font-size:15px'},'Earlier')),h('div',{class:'shifts'},past.map(leaveRow))):null)];}

/* ---------- Payroll (owner) ---------- */
function monthRange(off){var t=parse(today()),d=new Date(t.getFullYear(),t.getMonth()+off,1),e=new Date(d.getFullYear(),d.getMonth()+1,0);return {from:ymd(d),to:ymd(e),label:MONL[d.getMonth()]+' '+d.getFullYear()};}
function monthOf(m){var q=String(m).split('-').map(Number),d=new Date(q[0],q[1]-1,1),e=new Date(q[0],q[1],0);return {from:ymd(d),to:ymd(e),label:MONL[d.getMonth()]+' '+d.getFullYear()};}
/* shifts for a payroll month: recent ones are on this device; older and archived ones come from the server */
function payShifts(r){var m=r.from.slice(0,7),P=V.payData=V.payData||{},L=V.payLoad=V.payLoad||{},live=S.shifts||[],cut=Date.now()-60*864e5;
  if(!P[m]&&!L[m]){L[m]=1;server('payrollData',{month:m}).then(function(res){P[m]=(res.pay&&res.pay.shifts)||[];L[m]=0;if(V.tab==='stats'&&V.ins==='pay')render();})
    .catch(function(e){L[m]=0;P[m]=[];if(!lost(e))toast('Could not load older shifts: '+e.message+'.');});}
  return live.concat((P[m]||[]).filter(function(x){return (x.archived||x.in<cut)&&!live.some(function(y){return y.id===x.id;});}));}
function payRows(r,shifts){return S.people.map(function(p){var z=p.tz||myTz,sh=(shifts||S.shifts||[]).filter(function(x){var k=dayKey(x.in,x.tz||z);return x.personId===p.id&&k>=r.from&&k<=r.to&&x.out;});
    var total=sh.reduce(function(a,x){return a+workedMs(x);},0),weeks={},days={};
    sh.forEach(function(x){var k=dayKey(x.in,x.tz||z),d=parse(k),wk=addDays(k,-((d.getDay()+6)%7));weeks[wk]=(weeks[wk]||0)+workedMs(x);days[k]=1;});
    var otAfter=(p.otAfter||40)*36e5,ot=Object.keys(weeks).reduce(function(a,w){return a+Math.max(0,weeks[w]-otAfter);},0),reg=total-ot;
    var lv=(S.leaves||[]).filter(function(l){return l.personId===p.id&&l.status==='approved'&&l.to>=r.from&&l.from<=r.to;});
    var leaveDays=lv.reduce(function(a,l){return a+weekdaysBetween(l.from<r.from?r.from:l.from,l.to>r.to?r.to:l.to);},0);
    var unpaid=lv.filter(function(l){return l.type==='unpaid';}).reduce(function(a,l){return a+weekdaysBetween(l.from<r.from?r.from:l.from,l.to>r.to?r.to:l.to);},0);
    var hol=0,d0=r.from;while(d0<=r.to){var w0=parse(d0).getDay();if(w0&&w0<6&&holidaysOn(d0).length)hol++;d0=addDays(d0,1);}
    var late=sh.filter(isLate).length,rate=p.payRate||0,gross=0,wd=weekdaysBetween(r.from,r.to);
    if(p.payType==='hourly')gross=reg/36e5*rate+ot/36e5*rate*(p.otRate||1.5);
    else if(p.payType==='monthly')gross=rate*Math.max(0,(wd-unpaid))/Math.max(1,wd);
    var exp={};(S.expenses||[]).forEach(function(e){if(e.personId===p.id&&(e.status==='approved'||e.status==='invoiced')&&e.date>=r.from&&e.date<=r.to)exp[e.currency]=(exp[e.currency]||0)+e.amount;});
    var expText=Object.keys(exp).map(function(c){return fmtMoney(exp[c],c);}).join(', ');
    return {p:p,days:Object.keys(days).length,total:total,reg:reg,ot:ot,late:late,leave:leaveDays,unpaid:unpaid,hol:hol,gross:gross,exp:expText,cur:p.payCurrency||S.settings.currency||'USD'};});}
function paySection(){var cur0=today().slice(0,7);if(!V.payMonth)V.payMonth=cur0;var r=monthOf(V.payMonth),rows=payRows(r,payShifts(r)),loading=!!(V.payLoad||{})[V.payMonth];
  var sums={};rows.forEach(function(x){if(x.gross)sums[x.cur]=(sums[x.cur]||0)+x.gross;});
  return [h('div',{class:'sec'},h('h3',null,'Payroll'),h('button',{type:'button',onclick:function(){downloadCsv([['Person','Month','Days worked','Hours','Regular hours','Overtime hours','Late starts','Leave days','Unpaid leave days','Public holidays','Expenses to repay','Pay type','Rate','Currency','Gross pay']].concat(rows.map(function(x){
      return [x.p.name,r.label,x.days,(x.total/36e5).toFixed(2),(x.reg/36e5).toFixed(2),(x.ot/36e5).toFixed(2),x.late,x.leave,x.unpaid,x.hol,x.exp||'',x.p.payType||'',x.p.payRate||'',x.cur,x.gross.toFixed(2)];})),BRAND+' payroll '+r.from.slice(0,7).replace('-','')+'.csv');}},'Export payroll')),
    h('div',{class:'itabs',style:'margin-top:0'},[0,-1,-2].map(function(o){var m=monthRange(o),k=m.from.slice(0,7);return h('button',{type:'button','aria-pressed':String(V.payMonth===k),onclick:function(){V.payMonth=k;render();}},m.label);}),
      h('input',{class:'in',type:'month',id:'pay-m','aria-label':'Another month',max:cur0,value:V.payMonth,style:'width:auto;flex:none;padding:7px 10px;border-radius:999px',onchange:function(e){if(/^\d{4}-\d{2}$/.test(e.target.value)){V.payMonth=e.target.value;render();}}})),
    loading?h('p',{class:'note',style:'margin:-6px 0 10px'},'Loading older shifts from the archive…'):null,
    h('div',{class:'tsheet'},h('table',null,h('thead',null,h('tr',null,['Person','Days','Hours','Overtime','Late','Leave','Holidays','Expenses to repay','Gross pay'].map(function(c){return h('th',{scope:'col',text:c});}))),
      h('tbody',null,rows.map(function(x){return h('tr',null,h('td',null,h('button',{class:'linkb',type:'button',style:'background:none;border:0;padding:0;color:var(--plum-ink);font-weight:600;cursor:pointer',onclick:function(){openPerson(x.p.id);}},x.p.name)),
        h('td',{text:x.days}),h('td',{text:hm(x.total)}),h('td',{class:x.ot?'':'z',text:x.ot?hm(x.ot):'0h'}),h('td',{class:x.late?'':'z',text:x.late}),h('td',{class:x.leave?'':'z',text:x.leave}),h('td',{class:x.hol?'':'z',text:x.hol}),h('td',{class:x.exp?'':'z',text:x.exp||'None'}),
        h('td',{class:'tot',text:x.p.payType?fmtMoney(x.gross,x.cur):'Set pay'}));})))),
    h('p',{class:'note',text:'Gross pay before tax, pension and other deductions. '+(Object.keys(sums).length?'Total: '+Object.keys(sums).map(function(c){return fmtMoney(sums[c],c);}).join(' and ')+'. ':'')+'Set each person\'s pay and overtime under Settings, People. Hourly pay uses clocked hours; overtime counts hours past the weekly limit.'})];}

/* ---------- Invoices (owner) ---------- */
var IST={draft:['Draft','badge-s'],sent:['Sent','badge-s o'],paid:['Paid','badge-s g'],void:['Void','badge-s r']};
function invTotals(v){var sub=0;(v.lines||[]).forEach(function(l){sub+=Math.round(Number(l.qty)*Number(l.rate)*100)/100;});sub=Math.round(sub*100)/100;var tax=Math.round(sub*(Number(v.taxPct)||0))/100;return {sub:sub,tax:tax,total:Math.round((sub+tax)*100)/100};}
function invoiceSection(){var list=(S.invoices||[]).slice().sort(function(a,b){return (b.createdAt||0)-(a.createdAt||0);});
  var owed={};list.filter(function(v){return v.status==='sent';}).forEach(function(v){owed[v.currency]=(owed[v.currency]||0)+(v.total||0);});
  return [h('div',{class:'sec'},h('h3',null,'Invoices'),h('button',{type:'button',onclick:function(){openInvoice();}},'New invoice')),
    Object.keys(owed).length?h('p',{class:'note',style:'margin:-6px 0 12px',text:'Waiting to be paid: '+Object.keys(owed).map(function(c){return fmtMoney(owed[c],c);}).join(' and ')}):null,
    h('div',{class:'acts',style:'margin:0 0 12px'},h('button',{class:'btn sm',type:'button',onclick:function(){openBill('',{});}},'Bill hours'),
      (function(){var u=(S.timeTotals||[]).reduce(function(a,x){return a+(x.unbilled||0);},0);return u?h('small',{class:'note',text:mins(u)+' of time is not billed yet'}):null;})()),
    list.length?h('div',{class:'invl'},list.map(function(v){var st=IST[v.status]||IST.draft;return h('button',{class:'inv',type:'button',onclick:function(){viewInvoice(v.id);}},
      h('div',null,h('strong',{text:(v.number||'New')+' · '+v.clientName}),h('br'),h('small',{text:'Issued '+short(v.issued)+' · due '+short(v.due)})),h('span',{class:'money',text:fmtMoney(v.total,v.currency)}),
      h('span',null,h('b',{class:st[1]},st[0])));})):h('div',{class:'empty'},h('b',null,'No invoices yet'),'Create one from a client\'s tracked hours in a couple of taps.')];}
function openInvoice(id){var v=id?(S.invoices||[]).find(function(x){return x.id===id;}):null,sb=liveSubjects()[0]||{},r=monthRange(-1);
  M={kind:'invoice',id:id||null,d:v?JSON.parse(JSON.stringify(v)):{id:uid(),subjectId:sb.id||'',clientName:sb.name||'',clientEmail:sb.clientEmail||'',currency:sb.currency||S.settings.currency||'USD',
    issued:today(),due:addDays(today(),14),from:r.from,to:r.to,lines:[],taxPct:0,notes:''}};
  if(!v)M.d.lines=[{desc:'',qty:1,rate:0}];
  $('#ov').hidden=false;renderSheet();}
function renderInvoice(){var d=M.d,t=invTotals(d);
  return [head(M.id?'Edit invoice '+(d.number||''):'New invoice'),
    fld('Client',h('select',{class:'in',id:'iv-sub',value:d.subjectId,onchange:function(e){var sb=subj(e.target.value)||{};d.subjectId=sb.id;d.clientName=sb.name;d.clientEmail=sb.clientEmail||'';d.currency=sb.currency||d.currency;renderSheet();}},liveSubjects().map(function(s){return h('option',{value:s.id,text:s.name});}))),
    h('div',{class:'frow'},fld('Bill to',h('input',{class:'in',id:'iv-name',maxlength:120,value:d.clientName,oninput:bind(d,'clientName')})),fld('Client email',h('input',{class:'in',id:'iv-mail',type:'email',maxlength:120,value:d.clientEmail,oninput:bind(d,'clientEmail')}))),
    h('div',{class:'frow'},fld('Work from',h('input',{class:'in',id:'iv-from',type:'date',value:d.from,onchange:bind(d,'from')})),fld('Work to',h('input',{class:'in',id:'iv-to',type:'date',value:d.to,onchange:bind(d,'to')}))),
    M.id?null:h('button',{class:'btn ghost sm',type:'button',onclick:function(){var sid=d.subjectId;closeSheet();openBill(sid,{});}},'Bill hours instead'),
    (function(){var ex=billableExpenses(d.subjectId,d.currency).filter(function(e){return (d.expenseIds||[]).indexOf(e.id)<0;});return ex.length?h('button',{class:'btn ghost sm',type:'button',onclick:function(){d.expenseIds=(d.expenseIds||[]).concat(ex.map(function(e){return e.id;}));
      ex.forEach(function(e){d.lines.push({desc:'Expense: '+(e.note||e.category)+' ('+short(e.date)+')',qty:1,rate:e.amount});});renderSheet();toast(ex.length+(ex.length===1?' expense':' expenses')+' added');}},'Add '+ex.length+' billable '+(ex.length===1?'expense':'expenses')):null;})(),
    h('div',{class:'lbl'},'Lines: description, hours or quantity, price'),
    h('div',{class:'lines'},d.lines.map(function(l,i){return h('div',{class:'ln'},h('input',{class:'in','aria-label':'Description',maxlength:200,value:l.desc,oninput:function(e){l.desc=e.target.value;}}),
      h('input',{class:'in','aria-label':'Quantity',type:'number',step:'0.1',min:'0',value:String(l.qty),onchange:function(e){l.qty=Number(e.target.value)||0;renderSheet();}}),
      h('input',{class:'in','aria-label':'Price',type:'number',step:'0.01',min:'0',value:String(l.rate),onchange:function(e){l.rate=Number(e.target.value)||0;renderSheet();}}),
      h('button',{class:'rm',type:'button','aria-label':'Remove line',html:I.x,onclick:function(){d.lines.splice(i,1);renderSheet();}}));}),
      h('button',{class:'btn ghost sm',type:'button',style:'justify-self:start',onclick:function(){d.lines.push({desc:'',qty:1,rate:0});renderSheet();}},'Add a line')),
    h('div',{class:'frow'},fld('Currency',h('select',{class:'in',id:'iv-cur',value:d.currency,onchange:function(e){d.currency=e.target.value;renderSheet();}},CURS.map(function(c){return h('option',{value:c[0],text:c[1]});}))),
      fld('Tax %',h('input',{class:'in',id:'iv-tax',type:'number',step:'0.1',min:'0',max:'100',value:String(d.taxPct||0),onchange:function(e){d.taxPct=Number(e.target.value)||0;renderSheet();}})),
      fld('Issued',h('input',{class:'in',id:'iv-iss',type:'date',value:d.issued,onchange:bind(d,'issued')})),fld('Due',h('input',{class:'in',id:'iv-due',type:'date',value:d.due,onchange:bind(d,'due')}))),
    fld('Note on the invoice, optional',h('textarea',{class:'in',id:'iv-notes',rows:2,maxlength:600,value:d.notes,oninput:bind(d,'notes')})),
    h('p',{class:'note',style:'margin:0',text:'Subtotal '+fmtMoney(t.sub,d.currency)+(d.taxPct?' · tax '+fmtMoney(t.tax,d.currency):'')+' · total '+fmtMoney(t.total,d.currency)}),
    h('button',{class:'btn wide',type:'button',onclick:function(){d.lines=d.lines.filter(function(l){return String(l.desc).trim();});if(!d.subjectId){toast('Choose a client.');return;}if(!d.lines.length){toast('Add at least one line.');return;}
      var v=JSON.parse(JSON.stringify(d)),xs=v.expenseIds||[];delete v.expenseIds;closeSheet();send('saveInvoice',{invoice:v,expenseIds:xs});setTimeout(refresh,700);}},M.id?'Save invoice':'Create invoice')];}
function invoicePaper(v,from,note){var t=invTotals(v);
  return h('div',{class:'paper'},h('div',{class:'top'},h('div',null,h('h3',null,'Invoice '+(v.number||'')),h('div',{class:'pre',text:from||''})),
      h('div',{style:'text-align:right'},h('div',null,h('b',null,'Bill to: '),v.clientName),h('div',{text:'Issued '+v.issued}),h('div',{text:'Due '+v.due}),v.from?h('div',{class:'pre',text:'Work '+v.from+' to '+v.to}):null)),
    h('table',null,h('thead',null,h('tr',null,h('th',null,'Description'),h('th',null,'Qty'),h('th',null,'Price'),h('th',null,'Amount'))),
      h('tbody',null,(v.lines||[]).map(function(l){return h('tr',null,h('td',{text:l.desc}),h('td',{text:l.qty}),h('td',{text:fmtMoney(l.rate,v.currency)}),h('td',{text:fmtMoney(l.qty*l.rate,v.currency)}));}),
        h('tr',{class:'tot'},h('td',{colspan:'3',text:'Subtotal'}),h('td',{text:fmtMoney(t.sub,v.currency)})),
        v.taxPct?h('tr',{class:'tot'},h('td',{colspan:'3',text:'Tax '+v.taxPct+'%'}),h('td',{text:fmtMoney(t.tax,v.currency)})):null,
        h('tr',{class:'tot'},h('td',{colspan:'3',text:'Total'}),h('td',{text:fmtMoney(t.total,v.currency)})))),
    v.notes?h('p',{class:'pre',text:v.notes}):null,note?h('p',{class:'pre',text:note}):null);}
function viewInvoice(id){M={kind:'invview',id:id};$('#ov').hidden=false;renderSheet();}
function renderInvView(){var v=(S.invoices||[]).find(function(x){return x.id===M.id;});if(!v){closeSheet();return [];}var st=IST[v.status]||IST.draft;
  return [head('Invoice '+(v.number||'')),h('div',{class:'acts',style:'margin:0'},h('b',{class:st[1]},st[0]),v.sentAt?h('small',{class:'note',text:'Sent '+stamp(v.sentAt)}):null,
      v.paidOnline?h('small',{class:'note',text:'Paid online '+stamp(v.paidOnline.at)+', reference '+v.paidOnline.ref}):null,v.clientSaysPaidAt&&v.status!=='paid'?h('b',{class:'badge-s o',text:'Client says paid, '+stamp(v.clientSaysPaidAt)}):null),
    invoicePaper(v,S.settings.invoiceFrom||S.workspace.name,S.settings.invoiceNote),
    v.fromTime?h('p',{class:'note',style:'margin:0',text:'Made from '+v.fromTime.entries+(v.fromTime.entries===1?' time entry':' time entries')+', '+mins(v.fromTime.minutes||0)+'. '+(v.status==='void'?'The time was freed when it was voided.':'The time is locked to this invoice; delete or void it to bill the time again.')}):null,
    v.status==='void'?h('div',{class:'acts'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){try{window.print();}catch(e){}}},'Print or save as PDF'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){closeSheet();send('deleteInvoice',{id:v.id});}},'Delete'))
    :h('div',{class:'acts'},h('button',{class:'btn sm',type:'button',onclick:function(){send('sendInvoice',{id:v.id});}},v.status==='draft'?'Email to client':'Email again'),
      v.status!=='paid'?h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('invoiceStatus',{id:v.id,status:'paid'});}},'Mark paid'):h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('invoiceStatus',{id:v.id,status:'sent'});}},'Mark unpaid'),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){try{window.print();}catch(e){}}},'Print or save as PDF'),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){openInvoice(v.id);}},'Edit'),
      v.status==='draft'?h('button',{class:'btn ghost sm',type:'button',onclick:function(){closeSheet();send('deleteInvoice',{id:v.id});}},'Delete'):h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('invoiceStatus',{id:v.id,status:'void'});}},'Void')),
    v.clientEmail?null:h('p',{class:'note',style:'margin:0'},'Add the client email on the invoice to send it. The email links to the client page, where the invoice is shown.')];}

/* ---------- Time billing: time entries, timesheets, client budgets, billing from hours ---------- */
var RANGES=[['week','This week'],['lastweek','Last week'],['month','This month'],['lastmonth','Last month'],['custom','Custom'],['all','All time']];
var ROUNDS=[[0,'No rounding'],[6,'6 minutes'],[15,'15 minutes'],[30,'30 minutes']];
var TST={draft:['Not sent','badge-s'],submitted:['Waiting for approval','badge-s o'],approved:['Approved','badge-s g'],rejected:['Sent back','badge-s r']};
function weekStart(day){var d=parse(day);return addDays(day,-((d.getDay()+6)%7));}
function rangeOf(k,from,to){var td=today(),w;
  if(k==='week'){w=weekStart(td);return {from:w,to:addDays(w,6)};}
  if(k==='lastweek'){w=addDays(weekStart(td),-7);return {from:w,to:addDays(w,6)};}
  if(k==='month')return monthRange(0);if(k==='lastmonth')return monthRange(-1);
  if(k==='7d')return {from:addDays(td,-6),to:td};if(k==='30d')return {from:addDays(td,-29),to:td};
  if(k==='custom'){var a=from||addDays(td,-29),b=to||td;return b<a?{from:b,to:a}:{from:a,to:b};}
  return {from:'',to:''};}
function inRange(ms,r){var d=dayOf(ms);return (!r.from||d>=r.from)&&(!r.to||d<=r.to);}
function roundMin(m,step){m=Math.max(0,Math.round(m));step=+step||0;return step&&m?Math.ceil(m/step)*step:m;}
function eMin(e,now){return Math.max(0,Math.round(((e.end||now||Date.now())-e.start)/6e4));}
/* one name per client type: Client (an outside customer), Internal (your own company's work), Private (a member's own) */
function kindOf(sb){return !sb?'Client':sb.privateTo?'Private':/^(internal|personal|team)$/i.test(sb.kind||'')?'Internal':'Client';}
function billDefOf(sb){return sb&&typeof sb.billableDefault==='boolean'?sb.billableDefault:!!sb&&!/^(internal|personal|team)$/i.test(sb.kind||'');}
/* what a client pays for an hour of someone's time: their rate on that client, else their own bill rate, else the client rate (owner only) */
function rateOf(sb,pid){if(!sb)return 0;var o=+((sb.personRates||{})[pid]);if(o>0)return o;var p=person(pid);if(p&&+p.billRate>0)return +p.billRate;return +sb.rate||0;}
function curOf(sid){var sb=subj(sid);return (sb&&sb.currency)||S.settings.currency||'USD';}
function mins(m){return hm(m*6e4);}
function sumUp(list){var now=Date.now(),o={min:0,bill:0,unbilled:0,amt:{},run:0};
  list.forEach(function(e){var sb=subj(e.subjectId),m=eMin(e,now),rm=roundMin(m,sb&&sb.rounding);o.min+=m;if(!e.end)o.run++;
    if(!e.billable||e.status==='rejected')return;var bm=e.invoiceId&&e.billedMinutes>=0?e.billedMinutes:rm;o.bill+=bm;if(!e.invoiceId)o.unbilled+=rm;
    if(S.owner&&sb){var c=curOf(e.subjectId);o.amt[c]=(o.amt[c]||0)+bm/60*(e.invoiceId&&e.billedRate>=0?e.billedRate:rateOf(sb,e.personId));}});
  return o;}
function amtText(map){var k=Object.keys(map).filter(function(c){return map[c]>=.005;});return k.length?k.map(function(c){return fmtMoney(map[c],c);}).join(' and '):fmtMoney(0,S.settings.currency||'USD');}
function myWeekEntries(week){return (S.time||[]).filter(function(e){return e.personId===me&&weekStart(dayOf(e.start))===week;}).sort(function(a,b){return a.start-b.start;});}
function sheetOf(pid,week){return (S.sheets||[]).find(function(x){return x.personId===pid&&x.week===week;})||null;}
function taskTitle(e){if(e.taskHidden)return 'Private task';var t=e.taskId&&S.tasks.find(function(x){return x.id===e.taskId;});return t?t.title:'';}
function entryLabel(e){var t=taskTitle(e);return (e.subjectId?sName(e.subjectId):'No client')+(t?' · '+t:'');}
function entryBadges(e){var b=[];if(!e.end)b.push(h('b',{class:'badge-s g'},e.source==='clock'?'Clocked in now':'Running'));
  if(e.invoiceId){var v=(S.invoices||[]).find(function(x){return x.id===e.invoiceId;});b.push(h('b',{class:'badge-s'},'On '+(v?v.number:'an invoice')));}
  else if(e.status!=='draft'&&TST[e.status])b.push(h('b',{class:TST[e.status][1]},TST[e.status][0]));
  if(!e.billable)b.push(h('b',{class:'badge-s'},'Not billable'));if(e.flag==='auto')b.push(h('b',{class:'badge-s r'},'Stopped automatically, check it'));
  if(e.source==='clock')b.push(h('b',{class:'badge-s'},'Clock'));return b;}
function entryRow(e,showWho){var z=myTz;
  return h('button',{class:'shift',type:'button',onclick:function(){openEntry(e.id);}},
    h('div',null,h('strong',{text:(showWho?first(pName(e.personId))+' · ':'')+entryLabel(e)}),h('br'),h('small',{text:dIn(e.start,z)+', '+tIn(e.start,z)+' to '+(e.end?tIn(e.end,z):'now')+(e.note?' · '+e.note:'')})),
    h('span',{class:'hrs','data-run':e.end?null:String(e.start),'data-base':e.end?null:'0'},e.end?mins(e.minutes):''),h('div',{class:'fl'},entryBadges(e)));}
/* the Time view: totals for a range, grouped by client, then person, then task, with a live total while anything runs */
function timeSection(){var T=V.tm=V.tm||{k:'week',from:'',to:'',sid:'',open:{},all:false,wk:weekStart(today())};
  var r=rangeOf(T.k,T.from,T.to),tArch=T.k==='custom'?archFor(r):null,list=(tArch?(S.time||[]).concat(tArch.time):(S.time||[])).filter(function(e){return inRange(e.start,r)&&(!T.sid||e.subjectId===T.sid);}),sum=sumUp(list),now=Date.now();
  var runMs=list.filter(function(e){return !e.end;}).reduce(function(a,e){return a+(now-e.start);},0),doneMs=list.filter(function(e){return e.end;}).reduce(function(a,e){return a+e.minutes*6e4;},0);
  var out=[h('div',{class:'sec'},h('h3',null,'Time'),h('button',{type:'button',onclick:function(){openEntry(null,{subjectId:T.sid});}},'Add time')),
    h('div',{class:'chips',style:'padding-top:0'},RANGES.map(function(x){return h('button',{class:'chip',type:'button','aria-pressed':String(T.k===x[0]),onclick:function(){T.k=x[0];render();}},x[1]);})),
    T.k==='custom'?h('div',{class:'frow',style:'margin-top:8px'},fld('From',h('input',{class:'in',id:'tm-from',type:'date',value:r.from,onchange:function(e){T.from=e.target.value;render();}})),fld('To',h('input',{class:'in',id:'tm-to',type:'date',value:r.to,onchange:function(e){T.to=e.target.value;render();}}))):null,
    tArch?h('div',{style:'margin-top:8px'},archNote(tArch)):null,
    h('div',{class:'rngrow'},h('select',{class:'in',id:'tm-sub','aria-label':'Client',value:T.sid,onchange:function(e){T.sid=e.target.value;render();}},h('option',{value:'',text:'All clients'}),S.subjects.map(function(s){return h('option',{value:s.id,text:s.name+(s.archived?' (archived)':'')});})),
      h('span',{class:'note',text:r.from?(r.from===r.to?short(r.from):short(r.from)+' to '+short(r.to)):'Since the start'})),
    h('div',{class:'tiles',style:'margin-top:12px'},
      h('div',{class:'tile dark'},h('b',{'data-run':sum.run?String(now):null,'data-base':sum.run?String(doneMs+runMs):null,'data-mult':sum.run>1?String(sum.run):null,text:mins(Math.round((doneMs+runMs)/6e4))}),h('span',{text:sum.run?'Total, '+sum.run+' running now':'Total time'})),
      h('div',{class:'tile'},h('b',{text:mins(sum.bill)}),h('span',null,'Billable, rounded')),
      h('div',{class:'tile'},h('b',{style:sum.unbilled?'color:var(--coral-ink)':'',text:mins(sum.unbilled)}),h('span',null,'Not billed yet')),
      S.owner?h('div',{class:'tile'},h('b',{style:'font-size:19px',text:amtText(sum.amt)}),h('span',null,'Amount')):h('div',{class:'tile'},h('b',{text:String(list.length)}),h('span',null,'Entries')))];
  if(S.owner&&(S.budgets||[]).length)out.push(h('div',{class:'sec'},h('h3',null,'Retainers this month')),h('div',{class:'panel'},S.budgets.map(budgetRow)));
  var groups={},order=[];list.forEach(function(e){var k=e.subjectId||'';if(!groups[k]){groups[k]=[];order.push(k);}groups[k].push(e);});
  order.sort(function(a,b){return sumUp(groups[b]).min-sumUp(groups[a]).min;});
  out.push(h('div',{class:'sec'},h('h3',null,'By client'),h('span',{text:order.length?'Tap a client for people and tasks':''})),
    order.length?h('div',{class:'tgl'},order.map(function(k){var g=groups[k],s=sumUp(g),open=!!T.open[k]||order.length===1;
      var byP={},pOrd=[];g.forEach(function(e){if(!byP[e.personId]){byP[e.personId]=[];pOrd.push(e.personId);}byP[e.personId].push(e);});
      return h('div',{class:'tg'},h('button',{class:'tgh',type:'button','aria-expanded':String(open),onclick:function(){T.open[k]=!open;render();}},h('i',{class:'dot',style:'background:'+sColor(k)}),h('strong',{text:k?sName(k):'No client'}),h('b',{text:mins(s.min)}),
          h('small',{text:mins(s.bill)+' billable'+(s.unbilled?' · '+mins(s.unbilled)+' not billed':'')+(S.owner&&Object.keys(s.amt).length?' · '+amtText(s.amt):'')+(s.run?' · running now':'')})),
        open?h('div',{class:'tgb'},pOrd.map(function(pid){var pl=byP[pid],ps=sumUp(pl),byT={},tOrd=[];pl.forEach(function(e){var tk=e.taskHidden?'#private':e.taskId||'';if(!byT[tk]){byT[tk]=0;tOrd.push(tk);}byT[tk]+=eMin(e,now);});
            return [h('div',{class:'tp'},h('span',{text:pName(pid)}),h('span',{text:mins(ps.min)+(S.owner&&Object.keys(ps.amt).length?' · '+amtText(ps.amt):'')})),
              tOrd.map(function(tk){var t=tk&&tk!=='#private'&&S.tasks.find(function(x){return x.id===tk;});return h('div',{class:'tt2'},h('span',{text:tk==='#private'?'Private task':t?t.title:'General work'}),h('span',{text:mins(byT[tk])}));})];}),
          S.owner&&k&&s.unbilled?h('div',{class:'acts',style:'margin-top:10px'},h('button',{class:'btn sm',type:'button',onclick:function(){openBill(k,r);}},'Bill hours')):null):null);}))
      :h('div',{class:'empty'},ill('empty_time'),h('b',null,'No time in this range'),'Start a timer on a task, clock in for a client, or add time by hand.'));
  if(S.owner&&(S.timeTotals||[]).length){var tt=S.timeTotals.slice().filter(function(x){return x.minutes>0;}).sort(function(a,b){return b.minutes-a.minutes;});
    out.push(h('div',{class:'sec'},h('h3',null,'All time by client'),h('span',null,'Hours, billable, not billed, amount')),h('div',{class:'tsheet'},h('table',null,
      h('thead',null,h('tr',null,['Client','Hours','Billable','Not billed','Amount'].map(function(c){return h('th',{scope:'col',text:c});}))),
      h('tbody',null,tt.map(function(x){return h('tr',null,h('td',{text:x.subjectId?sName(x.subjectId):'No client'}),h('td',{text:mins(x.minutes)}),h('td',{text:mins(x.billable)}),h('td',{class:x.unbilled?'':'z',text:mins(x.unbilled)}),h('td',{class:'tot',text:fmtMoney(x.amount,x.currency)}));})))));}
  out.push(sheetsBlock(T));
  var shown=list.slice().sort(function(a,b){return b.start-a.start;}),cut=T.all?shown:shown.slice(0,20);
  out.push(h('div',{class:'sec'},h('h3',null,'Entries'),h('button',{type:'button',onclick:function(){exportTimeCsv(r,T.sid);}},'Export time')),
    cut.length?h('div',{class:'shifts'},cut.map(function(e){return entryRow(e,S.owner);})):h('p',{class:'note',style:'margin:0'},'Nothing in this range yet.'),
    shown.length>cut.length?h('button',{class:'btn ghost sm',type:'button',style:'margin-top:10px',onclick:function(){T.all=true;render();}},'Show all '+shown.length):null);
  return out;}
function budgetRow(b){var pct=Math.min(100,b.pct),col=b.pct>=100?'var(--danger)':b.pct>=80?'var(--coral2)':'var(--ok)';
  return h('div',{class:'bud'},h('span',null,h('i',{class:'dot',style:'background:'+sColor(b.subjectId)+';margin-right:8px'}),sName(b.subjectId)),h('b',{text:b.pct+'%'}),
    h('div',{class:'bar'},h('i',{style:'width:'+pct+'%;background:'+col})),
    h('small',{class:'note',style:'grid-column:1/-1',text:[b.capHours?b.hours+' of '+b.capHours+' hours':'',b.capAmount?fmtMoney(b.amount,b.currency)+' of '+fmtMoney(b.capAmount,b.currency):''].filter(Boolean).join(' · ')+(b.block?' · billing stops at the cap':'')}));}
/* weekly timesheets: everyone sends their week; the owner approves or sends it back */
function sheetsBlock(T){var wk=T.wk,ents=myWeekEntries(wk),sh=sheetOf(me,wk),tot=ents.reduce(function(a,e){return a+eMin(e);},0),open=ents.filter(function(e){return !e.invoiceId&&(e.status==='draft'||e.status==='rejected');});
  var run=ents.some(function(e){return !e.end;}),td=today();
  var wait=S.owner?(S.sheets||[]).filter(function(x){return x.status==='submitted';}).sort(function(a,b){return a.week.localeCompare(b.week);}):[];
  return [S.owner?[h('div',{class:'sec'},h('h3',null,'Timesheets to approve'),h('span',{text:wait.length?wait.length+' waiting':'None waiting'})),
      wait.length?h('div',{class:'shifts'},wait.map(function(x){var aw=(S.shifts||[]).filter(function(v){return v.personId===x.personId&&weekStart(dayOf(v.in))===x.week&&awayOf(v).length;}).length;
        return h('div',{class:'lv'},h('div',null,h('strong',{text:pName(x.personId)+' · week of '+short(x.week)}),h('br'),h('small',{text:mins(x.minutes||0)+' · sent '+stamp(x.submittedAt)})),h('b',{class:'badge-s o'},'Waiting'),
        aw?h('b',{class:'badge-s r',title:'Shifts that week clocked in or out away from a work site'},aw+(aw===1?' shift':' shifts')+' away from site'):null,
        h('div',{class:'acts'},h('button',{class:'btn sm',type:'button',onclick:function(){send('decideWeek',{id:x.id,status:'approved'});}},'Approve'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){openSendBack(x.id);}},'Send back'),
          h('button',{class:'btn ghost sm',type:'button',onclick:function(){T.k='custom';T.from=x.week;T.to=addDays(x.week,6);T.sid='';T.all=true;render();window.scrollTo(0,0);}},'See the entries')));})):null]:null,
    h('div',{class:'sec'},h('h3',null,'My week'),h('span',{text:'Week of '+short(wk)})),
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},
      h('div',{class:'wkn'},h('button',{class:'x',type:'button','aria-label':'Previous week',html:I.l,onclick:function(){T.wk=addDays(wk,-7);render();}}),
        h('div',null,h('strong',{text:mins(tot)}),h('small',{text:sh&&TST[sh.status]?TST[sh.status][0]+(sh.status==='rejected'&&sh.note?': '+sh.note:''):ents.length?'Not sent yet':'No time this week'})),
        h('button',{class:'x',type:'button','aria-label':'Next week',html:I.r,disabled:addDays(wk,7)>td,onclick:function(){T.wk=addDays(wk,7);render();}})),
      ents.length?h('div',{class:'shifts'},ents.map(function(e){return entryRow(e,false);})):h('p',{class:'note',style:'margin:0'},'Time from timers, the client clock and time added by hand shows here.'),
      h('div',{class:'acts',style:'margin:0'},open.length?h('button',{class:'btn sm',type:'button',disabled:run,onclick:function(){send('submitWeek',{week:wk});}},run?'Stop the clock to send':'Send this week'):null,
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){openEntry(null,{day:addDays(wk,Math.min(6,Math.max(0,diff(td)-diff(wk))))});}},'Add time')))];}
function exportTimeCsv(r,sid){toast('Preparing your export');server('exportTime',{from:r.from||'',to:r.to||'',subjectId:sid||''}).then(function(res){var f=res.exportData&&res.exportData.files;if(!f)throw new Error('nothing came back');
  downloadBlob(new Blob([f['time_entries.csv']],{type:'text/csv'}),BRAND+' time '+(r.from||'all')+(r.to&&r.to!==r.from?' to '+r.to:'')+'.csv');})
  .catch(function(e){if(!lost(e))toast('Could not export: '+e.message+'.');});}
/* one time entry, added or changed by hand */
function openEntry(id,preset){var e=id?(S.time||[]).find(function(x){return x.id===id;}):null,p=preset||{},td=today();
  var d=e?{id:e.id,personId:e.personId,subjectId:e.subjectId,taskId:e.taskId,day:ymd(new Date(e.start)),start:tIn(e.start),end:e.end?tIn(e.end):'',note:e.note||'',noteInternal:!!e.noteInternal,billable:e.billable}
    :{id:uid(),personId:me,subjectId:p.subjectId||'',taskId:p.taskId||'',day:p.day||td,start:'09:00',end:'10:00',note:'',noteInternal:false,billable:null};
  if(!e&&d.subjectId===''&&!p.none){var ls=liveSubjects().find(function(s){return billDefOf(s);});if(ls)d.subjectId=ls.id;}
  M={kind:'entry',id:id||null,d:d,del:false};$('#ov').hidden=false;renderSheet();}
function renderEntry(){var d=M.d,e=M.id?(S.time||[]).find(function(x){return x.id===M.id;}):null;if(M.id&&!e){closeSheet();return [];}
  var locked=!!(e&&(e.invoiceId||!e.end||(!S.owner&&(e.status==='approved'||e.personId!==me))));
  var why=!e?'':e.invoiceId?'This time is on an invoice, so it cannot change. Remove it from the invoice first.':!e.end?'This time is still running. Stop the timer or clock out first.':!S.owner&&e.status==='approved'?'This week is approved, so only the owner can change it.':'';
  var tasks=S.tasks.filter(function(t){return t.subjectId===d.subjectId&&(open(t)||t.id===d.taskId);}).sort(sortT);
  var sb=subj(d.subjectId),bill=d.billable===null?billDefOf(sb):d.billable;
  var toMs=function(day,t){return new Date(day+'T'+(t||'00:00')).getTime();};
  var a=toMs(d.day,d.start),b=toMs(d.day,d.end);if(b<=a)b+=864e5;var len=Math.round((b-a)/6e4);
  return [head(e?'Time entry':'Add time'),
    e?h('div',{class:'acts',style:'margin:0'},entryBadges(e),S.owner&&e.personId!==me?h('small',{class:'note',text:'By '+pName(e.personId)+(e.editedBy?', changed by '+pName(e.editedBy)+' on '+stamp(e.editedAt):'')}):null):null,
    S.owner&&!e?fld('Whose time',h('select',{class:'in',id:'en-who',value:d.personId,onchange:bind(d,'personId')},S.people.map(function(x){return h('option',{value:x.id,text:x.name+(x.id===me?' (me)':'')});}))):null,
    h('div',{class:'frow'},fld('Client',h('select',{class:'in',id:'en-sub',disabled:locked,value:d.subjectId,onchange:function(ev){d.subjectId=ev.target.value;d.taskId='';d.billable=null;renderSheet();}},h('option',{value:'',text:'No client'}),liveSubjects().concat(sb&&sb.archived?[sb]:[]).map(function(s){return h('option',{value:s.id,text:s.name});}))),
      fld('Task, optional',h('select',{class:'in',id:'en-task',disabled:locked,value:d.taskId,onchange:bind(d,'taskId')},h('option',{value:'',text:e&&e.taskHidden?'Private task':'No task'}),tasks.map(function(t){return h('option',{value:t.id,text:t.title});}))),
      fld('Date',h('input',{class:'in',id:'en-day',type:'date',disabled:locked,max:today(),value:d.day,onchange:function(ev){d.day=ev.target.value;renderSheet();}}),true),
      fld('From and to',h('div',{class:'tmr'},h('input',{class:'in',id:'en-start',type:'time',disabled:locked,value:d.start,onchange:function(ev){d.start=ev.target.value;renderSheet();},'aria-label':'From'}),
        h('input',{class:'in',id:'en-end',type:'time',disabled:locked,value:d.end,onchange:function(ev){d.end=ev.target.value;renderSheet();},'aria-label':'To'})),true),
      fld('Note, optional',h('input',{class:'in',id:'en-note',maxlength:300,disabled:locked&&!(e&&!e.end),value:d.note,oninput:bind(d,'note'),placeholder:'What you did'}),true)),
    h('label',{class:'switch'},h('input',{type:'checkbox',id:'en-int',disabled:locked,checked:d.noteInternal,onchange:function(ev){d.noteInternal=ev.target.checked;}}),'Keep the note inside the team. The client never sees it.'),
    S.owner?h('label',{class:'switch'},h('input',{type:'checkbox',id:'en-bill',disabled:locked,checked:bill,onchange:function(ev){d.billable=ev.target.checked;}}),'Billable to the client'):h('p',{class:'note',style:'margin:0',text:bill?'Billable to the client':'Not billed to anyone'}),
    why?h('p',{class:'note',style:'margin:0',text:why}):h('p',{class:'note',style:'margin:0',text:d.start&&d.end?'That is '+mins(len)+'.'+(b-a>12*36e5?' One entry can be at most 12 hours.':''):'Choose the times.'}),
    locked?null:h('button',{class:'btn wide',type:'button',onclick:function(){if(!d.start||!d.end){toast('Choose the times.');return;}
      if(len>720){toast('One entry can be at most 12 hours. Split longer work into two.');return;}if(b>Date.now()+5*6e4){toast('Time cannot end in the future.');return;}
      var en={id:d.id,subjectId:d.subjectId,taskId:d.taskId,start:a,end:b,note:d.note.trim(),noteInternal:d.noteInternal};if(S.owner){en.billable=bill;if(!e)en.personId=d.personId;}
      closeSheet();send('saveTime',{entry:en});}},e?'Save time':'Add time'),
    e&&!locked?h('div',{class:'acts'},M.del?[h('button',{class:'btn danger sm',type:'button',onclick:function(){var id=M.id;closeSheet();send('deleteTime',{id:id});}},'Confirm removal'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=false;renderSheet();}},'Keep it')]
      :h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=true;renderSheet();}},'Remove this time')):null];}
function openSendBack(id){M={kind:'sendback',id:id,note:''};$('#ov').hidden=false;renderSheet();var f=$('#sb-note');if(f)f.focus();}
function renderSendBack(){var x=(S.sheets||[]).find(function(s){return s.id===M.id;});if(!x){closeSheet();return [];}
  return [head('Send back '+first(pName(x.personId))+"'s week"),h('p',{class:'note',style:'margin:0',text:'Week of '+short(x.week)+', '+mins(x.minutes||0)+'. They can change the time and send it again.'}),
    fld('What should change?',h('textarea',{class:'in',id:'sb-note',rows:3,maxlength:300,value:M.note,oninput:bind(M,'note'),placeholder:'For example: split Tuesday between Brooks and Hard Shoulder'})),
    h('button',{class:'btn wide',type:'button',onclick:function(){var id=M.id,n=M.note.trim();closeSheet();send('decideWeek',{id:id,status:'rejected',note:n});}},'Send back')];}
/* bill a client's unbilled time: the server makes the draft invoice and locks the time to it */
function openBill(sid,r){var sb=subj(sid)||liveSubjects().find(function(s){return billDefOf(s);})||{};M={kind:'bill',d:{subjectId:sb.id||'',from:(r&&r.from)||'',to:(r&&r.to)||'',group:'task'},busy:false};$('#ov').hidden=false;renderSheet();}
function billableEntries(d){return (S.time||[]).filter(function(e){var day=dayOf(e.start);return e.subjectId===d.subjectId&&e.billable&&!e.invoiceId&&e.end&&e.status!=='rejected'&&(!S.settings.billApprovedOnly||e.status==='approved')&&(!d.from||day>=d.from)&&(!d.to||day<=d.to);});}
function renderBill(){var d=M.d,sb=subj(d.subjectId),list=billableEntries(d),s=sumUp(list),waiting=S.settings.billApprovedOnly?(S.time||[]).filter(function(e){return e.subjectId===d.subjectId&&e.billable&&!e.invoiceId&&e.end&&e.status!=='approved'&&e.status!=='rejected';}).length:0;
  return [head('Bill hours'),
    fld('Client',h('select',{class:'in',id:'bl-sub',value:d.subjectId,onchange:function(e){d.subjectId=e.target.value;renderSheet();}},S.subjects.filter(function(x){return !x.privateTo;}).map(function(x){return h('option',{value:x.id,text:x.name});}))),
    h('div',{class:'frow'},fld('From, optional',h('input',{class:'in',id:'bl-from',type:'date',value:d.from,onchange:function(e){d.from=e.target.value;renderSheet();}})),fld('To, optional',h('input',{class:'in',id:'bl-to',type:'date',value:d.to,onchange:function(e){d.to=e.target.value;renderSheet();}}))),
    h('div',{class:'lbl'},'Invoice lines'),h('div',{class:'seg s2'},[['task','A line per task'],['person','A line per person']].map(function(o){return h('button',{type:'button','aria-pressed':String(d.group===o[0]),onclick:function(){d.group=o[0];renderSheet();}},o[1]);})),
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:6px'},h('strong',{text:list.length?mins(s.bill)+' to bill, about '+amtText(s.amt):'Nothing to bill'}),
      h('small',{class:'note',text:list.length?list.length+(list.length===1?' entry':' entries')+(sb&&sb.rounding?', each rounded up to '+sb.rounding+' minutes':'')+'. Rates come from the client and each person.':(waiting?'Only approved time can be invoiced, and '+waiting+(waiting===1?' entry is':' entries are')+' not approved yet.':'Every billable entry for this client is already on an invoice.')}),
      sb&&sb.retainerBlock&&(sb.retainerHours||sb.retainerAmount)?h('small',{class:'note',text:'Billing stops at the monthly retainer cap; time past it stays unbilled.'}):null),
    h('button',{class:'btn wide',type:'button',disabled:!list.length||M.busy,onclick:function(){M.busy=true;renderSheet();
      server('billTime',{subjectId:d.subjectId,from:d.from,to:d.to,group:d.group}).then(function(res){M=null;closeSheet();if(accept(res)){pickMe();render();}if(res.msg)toast(res.msg);if(res.billed)viewInvoice(res.billed);})
        .catch(function(e){if(lost(e))return;if(M&&M.kind==='bill'){M.busy=false;renderSheet();}toast(e.message+'.');});}},M.busy?'Making the invoice…':'Create draft invoice'),
    h('p',{class:'note',style:'margin:0'},'The time is locked to the draft so it is never billed twice. Delete or void the invoice to free it again.')];}
/* clock in for a client, or move the running clock to another one */
function openClockFor(mode){var sh=myShift();M={kind:'clockfor',mode:mode,d:{subjectId:mode==='switch'&&sh?sh.subjectId||'':((liveSubjects().find(function(s){return billDefOf(s);})||{}).id||''),taskId:''}};$('#ov').hidden=false;renderSheet();}
function renderClockFor(){var d=M.d,sw=M.mode==='switch',sh=myShift(),tasks=S.tasks.filter(function(t){return d.subjectId&&t.subjectId===d.subjectId&&open(t)&&(t.assignee===me||!t.assignee||S.owner);}).sort(sortT);
  return [head(sw?'Switch client':'Clock in for a client'),
    h('p',{class:'note',style:'margin:0',text:sw?'The time so far stays with '+(sh&&sh.subjectId?sName(sh.subjectId):'your own hours')+'. From now it counts for the client you pick.':'Your hours count for this client until you switch or clock out. Breaks are never billed.'}),
    fld('Client',h('select',{class:'in',id:'cf-sub',value:d.subjectId,onchange:function(e){d.subjectId=e.target.value;d.taskId='';renderSheet();}},h('option',{value:'',text:'No client, just my hours'}),liveSubjects().map(function(s){return h('option',{value:s.id,text:s.name});}))),
    d.subjectId?fld('Task, optional',h('select',{class:'in',id:'cf-task',value:d.taskId,onchange:bind(d,'taskId')},h('option',{value:'',text:'No particular task'}),tasks.map(function(t){return h('option',{value:t.id,text:t.title});}))):null,
    h('button',{class:'btn wide',type:'button',onclick:function(){var p={subjectId:d.subjectId,taskId:d.taskId};closeSheet();if(sw)send('switchClient',p);else punch('clockIn',undefined,p);}},sw?'Switch':'Clock in')];}
/* a small card on Home: this week's time, and what is waiting to be billed or approved */
function timeCard(){var wk=weekStart(today()),list=(S.time||[]).filter(function(e){return weekStart(dayOf(e.start))===wk&&(S.owner||e.personId===me);});
  var unb=S.owner?(S.timeTotals||[]).reduce(function(a,x){return a+(x.unbilled||0);},0):0,wait=S.owner?(S.sheets||[]).filter(function(x){return x.status==='submitted';}).length:0;
  if(!list.length&&!unb&&!wait)return null;var s=sumUp(list),run=list.some(function(e){return !e.end;});
  var mine=sheetOf(me,wk);
  return h('button',{class:'tw',type:'button',onclick:function(){V.tab='stats';V.ins='hours';V.tm=V.tm||null;render();window.scrollTo(0,0);}},
    h('div',null,h('small',null,S.owner?'Team time this week':'Your time this week'),h('strong',{text:mins(s.min)+(run?', running now':'')})),
    h('em',{text:wait?wait+(wait===1?' timesheet to approve':' timesheets to approve'):unb?mins(unb)+' not billed':mine&&TST[mine.status]?TST[mine.status][0]:'See time'}));}
/* exports: a ZIP made right here, with a tiny store only writer */
var CRCT=null;
function crc32(b){if(!CRCT){CRCT=new Uint32Array(256);for(var n=0;n<256;n++){var c=n;for(var k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;CRCT[n]=c>>>0;}}
  var x=0xFFFFFFFF;for(var i=0;i<b.length;i++)x=CRCT[(x^b[i])&255]^(x>>>8);return (x^0xFFFFFFFF)>>>0;}
function makeZip(files){var enc=new TextEncoder(),parts=[],central=[],off=0,d=new Date(),names=Object.keys(files);
  var dt=((d.getHours()<<11)|(d.getMinutes()<<5)|(d.getSeconds()>>1))&0xFFFF,dd=(((Math.max(1980,d.getFullYear())-1980)<<9)|((d.getMonth()+1)<<5)|d.getDate())&0xFFFF;
  names.forEach(function(name){var data=enc.encode(files[name]),nm=enc.encode(name),crc=crc32(data),L=new DataView(new ArrayBuffer(30)),C=new DataView(new ArrayBuffer(46));
    [[0,0x04034b50,4],[4,20,2],[6,0x0800,2],[8,0,2],[10,dt,2],[12,dd,2],[14,crc,4],[18,data.length,4],[22,data.length,4],[26,nm.length,2],[28,0,2]].forEach(function(f){if(f[2]===4)L.setUint32(f[0],f[1],true);else L.setUint16(f[0],f[1],true);});
    [[0,0x02014b50,4],[4,20,2],[6,20,2],[8,0x0800,2],[10,0,2],[12,dt,2],[14,dd,2],[16,crc,4],[20,data.length,4],[24,data.length,4],[28,nm.length,2],[30,0,2],[32,0,2],[34,0,2],[36,0,2],[38,0,4],[42,off,4]].forEach(function(f){if(f[2]===4)C.setUint32(f[0],f[1],true);else C.setUint16(f[0],f[1],true);});
    parts.push(new Uint8Array(L.buffer),nm,data);central.push(new Uint8Array(C.buffer),nm);off+=30+nm.length+data.length;});
  var size=central.reduce(function(a,x){return a+x.length;},0),E=new DataView(new ArrayBuffer(22));
  [[0,0x06054b50,4],[4,0,2],[6,0,2],[8,names.length,2],[10,names.length,2],[12,size,4],[16,off,4],[20,0,2]].forEach(function(f){if(f[2]===4)E.setUint32(f[0],f[1],true);else E.setUint16(f[0],f[1],true);});
  return new Blob(parts.concat(central,[new Uint8Array(E.buffer)]),{type:'application/zip'});}
/* the temporary link to the file is let go once the browser has started the download */
function downloadBlob(blob,name){var u=URL.createObjectURL(blob),a=h('a',{href:u,download:name});document.body.appendChild(a);a.click();a.remove();
  setTimeout(function(){try{URL.revokeObjectURL(u);}catch(e){}},30000);toast('Downloaded');}
function exportZip(action,label){toast('Preparing your export');server(action,{}).then(function(res){var d=res.exportData;if(!d||!d.files)throw new Error('nothing came back');
  downloadBlob(makeZip(d.files),BRAND+' '+label+' '+today().replace(/-/g,'')+'.zip');}).catch(function(e){if(!lost(e))toast('Could not export: '+e.message+'.');});}
/* the archive: finished work older than 90 days, loaded from the server on demand */
function viewArchive(){var A=V.arch=V.arch||{q:'',sid:'',from:'',to:'',res:null,busy:false};
  var go=function(){A.busy=true;render();server('archiveSearch',{q:A.q,subjectId:A.sid,from:A.from,to:A.to}).then(function(r){A.busy=false;A.res=r.archive||{items:[],total:0};render();}).catch(function(e){A.busy=false;if(!lost(e)){toast(e.message+'.');render();}});};
  if(!A.res&&!A.busy)setTimeout(go,0);
  var items=(A.res&&A.res.items)||[];
  return [topbar('Archive','Finished work older than 90 days. Nothing is ever deleted.'),
    h('div',{class:'acts tacts',style:'margin:-6px 0 14px'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.tab='tasks';render();window.scrollTo(0,0);}},'Back to tasks')),
    h('div',{class:'narrow'},h('div',{class:'search'},h('span',{html:I.search}),h('input',{id:'ar-q',type:'search',placeholder:'Search archived tasks','aria-label':'Search archived tasks',value:A.q,oninput:function(e){A.q=e.target.value;},onkeydown:function(e){if(e.key==='Enter')go();}})),
      h('div',{class:'frow',style:'margin-top:10px'},fld('Client',h('select',{class:'in',id:'ar-sub',value:A.sid,onchange:function(e){A.sid=e.target.value;}},h('option',{value:'',text:'All clients'}),S.subjects.map(function(s){return h('option',{value:s.id,text:s.name});})),true),
        fld('Finished from',h('input',{class:'in',id:'ar-from',type:'date',value:A.from,onchange:function(e){A.from=e.target.value;}})),fld('Finished by',h('input',{class:'in',id:'ar-to',type:'date',value:A.to,onchange:function(e){A.to=e.target.value;}}))),
      h('div',{class:'acts',style:'margin:12px 0 0'},h('button',{class:'btn sm',type:'button',disabled:A.busy,onclick:go},A.busy?'Searching…':'Search')),
      h('div',{class:'sec'},h('h3',null,'Found'),h('span',{text:A.res?A.res.total+(A.res.total===1?' task':' tasks')+(A.res.total>items.length?', showing the newest '+items.length:''):''})),
      A.res&&!items.length?h('div',{class:'empty'},h('b',null,'Nothing in the archive matches'),'Tasks move here 90 days after they are done.'):null,
      items.length?h('div',{class:'rows'},items.map(function(t){return h('div',{class:'row done'},h('span',{class:'ck on',html:I.check,'aria-hidden':'true'}),
        h('div',{class:'rb'},h('strong',{text:t.title}),h('div',{class:'meta'},h('span',null,h('i',{class:'dot',style:'background:'+sColor(t.subjectId)}),sName(t.subjectId)),t.doneAt?h('span',{text:'Done '+stamp(t.doneAt)}):null,t.assignee&&person(t.assignee)?h('span',{text:pName(t.assignee)}):null,t.private?h('span',null,'Private'):null)),
        t.canReopen?h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('reopenArchived',{id:t.id});A.res.items=A.res.items.filter(function(x){return x.id!==t.id;});A.res.total--;render();toast('Reopened. It is back on the task list');}},'Reopen'):null);})):null)];}

/* ---------- AI ---------- */
/* the AI summary of today: for the team, or for one client (subjectId), which the owner can edit and email to that client */
function aiStandup(sid){sid=typeof sid==='string'?sid:'';M={kind:'ai',busy:true,text:'',sid:sid};$('#ov').hidden=false;renderSheet();
  server('aiStandup',sid?{subjectId:sid}:{}).then(function(r){if(!M||M.kind!=='ai')return;M.busy=false;M.text=r.aiText||'';renderSheet();})
    .catch(function(e){if(lost(e))return;if(M&&M.kind==='ai'){M.busy=false;M.err=e.message;renderSheet();}});}
function renderAi(){var sb=M.sid?subj(M.sid):null;
  return [head(sb?'Today for '+sb.name:"Today's summary"),M.busy?h('p',{class:'note'},'Reading today\'s updates, tasks and hours…'):M.err?h('p',{class:'err',text:M.err+'.'})
      :sb?h('textarea',{class:'in',id:'ai-text',rows:9,maxlength:4000,value:M.text,'aria-label':'Summary for the client',oninput:function(e){M.text=e.target.value;}}):h('div',{class:'summary',id:'ai-text',text:M.text}),
  M.text?h('div',{class:'acts'},sb?h('button',{class:'btn sm',type:'button',disabled:!sb.clientEmail||!!M.sending,onclick:function(){M.sending=true;renderSheet();
      server('sendClientSummary',{id:sb.id,text:M.text.trim()}).then(function(r){closeSheet();toast(r.msg||'Sent');}).catch(function(e){if(lost(e))return;M.sending=false;renderSheet();toast(e.message+'.');});}},M.sending?'Sending…':'Email to client'):null,
    h('button',{class:sb?'btn ghost sm':'btn sm',type:'button',onclick:function(){var t=M.text;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){toast('Copied');},function(){var r=document.createRange();r.selectNodeContents($('#ai-text'));var sel=getSelection();sel.removeAllRanges();sel.addRange(r);toast('Selected. Copy it from here.');});}},'Copy'),
    h('button',{class:'btn ghost sm',type:'button',onclick:function(){aiStandup(M.sid);}},'Again')):null,
  h('p',{class:'note',style:'margin:0'},sb?(sb.clientEmail?'Goes to '+sb.clientEmail+'. ':'Add the client email to send it. ')+'Written by AI from this client\'s work today, without private tasks, hidden people or team updates. Edit it first.':'Written by AI from what your team posted today. Check it before you send it on. Private tasks are left out.')];}
var REC=null;
function dictate(target){var SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){toast('Voice typing is not available in this browser. Try Chrome, or use the microphone on your keyboard.');return;}
  if(REC){REC.stop();return;}REC=new SR();REC.lang='en-NG';REC.continuous=true;REC.interimResults=false;
  REC.onresult=function(e){for(var i=e.resultIndex;i<e.results.length;i++)if(e.results[i].isFinal)M.aiText=(M.aiText?M.aiText+' ':'')+e.results[i][0].transcript.trim();var f=$('#'+target);if(f)f.value=M.aiText;};
  REC.onend=function(){REC=null;if(M)renderSheet();};REC.onerror=function(){REC=null;toast('Voice typing stopped.');if(M)renderSheet();};
  try{REC.start();renderSheet();}catch(e){REC=null;}}
/* voice notes: recorded here (at most 3 minutes) or uploaded, sent to the server, turned into text to check, then into tasks */
var VREC=null,VEXT={m4a:'audio/mp4',mp3:'audio/mpeg',ogg:'audio/ogg',opus:'audio/ogg',wav:'audio/wav',webm:'audio/webm'};
function voiceUpload(blob,type){if(!blob||!blob.size){toast('That voice note is empty.');return;}if(blob.size>20*1048576){toast('Voice notes can be up to 20 MB.');return;}
  if(navigator.onLine===false){toast('You are offline. Voice notes need a connection.');return;}
  M.voiceBusy=true;renderSheet();
  call('api',null,false,{blob:blob,type:type,qs:'?workspace='+encodeURIComponent(wsId)}).then(function(r){if(!M||!M.ai)return;M.voiceBusy=false;
      M.aiText=((M.aiText||'').trim()?M.aiText.trim()+'\n':'')+String(r.text||'').trim();M.aiList=null;renderSheet();var f=$('#t-ai');if(f)f.focus();toast('Check the words, then tap Turn into tasks');})
    .catch(function(e){if(lost(e))return;if(M){M.voiceBusy=false;renderSheet();}toast(e.message+'.');});}
function voiceFile(f){if(!f)return;var ext=String(f.name||'').toLowerCase().split('.').pop(),type=/^(audio|video)\//.test(f.type||'')?f.type:VEXT[ext];
  if(!type||!(VEXT[ext]||/^audio\//.test(f.type||''))){toast('Choose a voice note: m4a, mp3, ogg, opus, wav or webm.');return;}voiceUpload(f,type);}
function recStart(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||typeof MediaRecorder==='undefined'){toast('This browser cannot record. Upload a voice note instead.');return;}
  if(REC)REC.stop();
  navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
    var type=['audio/webm;codecs=opus','audio/webm','audio/mp4','audio/ogg;codecs=opus'].find(function(t){try{return MediaRecorder.isTypeSupported(t);}catch(e){return false;}})||'';
    var rec=new MediaRecorder(stream,type?{mimeType:type}:undefined),chunks=[],v={rec:rec,start:Date.now(),cancel:false};VREC=v;
    rec.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data);};
    rec.onstop=function(){clearTimeout(v.timer);stream.getTracks().forEach(function(t){t.stop();});if(VREC===v)VREC=null;if(v.cancel||!M||!M.ai){if(M)renderSheet();return;}
      var bt=String(rec.mimeType||type||'audio/webm');voiceUpload(new Blob(chunks,{type:bt}),bt);};
    v.timer=setTimeout(function(){if(VREC===v){toast('Three minutes is the longest a voice note can be.');try{rec.stop();}catch(e){}}},180000);
    rec.start(1000);renderSheet();})
  .catch(function(){toast('The microphone is blocked. Allow it in your browser settings, or upload a voice note instead.');});}
function recStop(cancel){if(!VREC)return;VREC.cancel=!!cancel;try{VREC.rec.stop();}catch(e){VREC=null;}if(cancel)renderSheet();}
function aiBlock(){var list=M.aiList||null,canV=!!S.features.transcribe,canLive=!!(window.SpeechRecognition||window.webkitSpeechRecognition);
  var voice=VREC?h('div',{class:'recbar',role:'status'},h('i',{class:'recdot','aria-hidden':'true'}),h('b',{'data-rec':String(VREC.start)},'0:00'),h('small',null,'of 3:00'),
      h('button',{class:'btn sm',type:'button',onclick:function(){recStop(false);}},'Stop'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){recStop(true);}},'Cancel'))
    :M.voiceBusy?h('p',{class:'note',role:'status',style:'margin:0'},'Turning your voice note into text…')
    :canV||canLive?h('div',{class:'acts vacts',style:'margin:0'},canV?h('button',{class:'btn ghost sm',type:'button',onclick:recStart},'Record a voice note'):null,
      canV?h('label',{class:'btn ghost sm filebtn',style:'margin:0'},'Upload a voice note',h('input',{type:'file',id:'t-voice',hidden:true,accept:'audio/*,.m4a,.mp3,.ogg,.opus,.wav,.webm',onchange:function(e){var f=e.target.files[0];e.target.value='';voiceFile(f);}})):null,
      canLive?h('button',{class:'btn ghost sm mic'+(REC?' on':''),type:'button','aria-label':REC?'Stop listening':'Speak',onclick:function(){dictate('t-ai');}},h('span',{class:'mico',html:I.mic}),h('span',{class:'mlb'},REC?'Stop listening':'Speak')):null):null;
  return [h('textarea',{class:'in',id:'t-ai',rows:5,maxlength:8000,placeholder:'Paste a WhatsApp message, an email or meeting notes'+(canV?', or record a voice note':'')+'. For example: Kemi, send the Brooks invoice by Friday, it is urgent. Tunde, update the payroll tracker tomorrow.',value:M.aiText||'',oninput:bind(M,'aiText')}),
    voice,
    h('div',{class:'acts',style:'margin:0'},
      h('button',{class:'btn sm',type:'button',disabled:!!M.aiBusy||!!VREC||!!M.voiceBusy,onclick:function(){var txt=(M.aiText||'').trim();if(!txt){toast('Type, paste or say what needs doing first.');return;}if(REC)REC.stop();M.aiBusy=true;renderSheet();
        server('aiTasks',{text:txt}).then(function(r){M.aiBusy=false;M.aiList=(r.aiTasks||[]).map(function(t){return Object.assign({on:true,id:uid()},t);});if(!M.aiList.length)toast('No tasks found in that text.');renderSheet();})
          .catch(function(e){M.aiBusy=false;if(!lost(e)){toast(e.message+'.');renderSheet();}});}},M.aiBusy?'Reading…':'Turn into tasks')),
    list&&list.length?[h('div',{class:'lbl'},'Check them, then add'),h('div',{class:'aip'},list.map(function(t){return h('div',{class:'ai'},h('input',{type:'checkbox',checked:t.on,'aria-label':'Include',onchange:function(e){t.on=e.target.checked;}}),
        h('input',{class:'in','aria-label':'Task title',value:t.title,oninput:function(e){t.title=e.target.value;}}),
        h('div',{class:'row2'},h('select',{class:'in','aria-label':'Assigned to',value:t.assignee,onchange:function(e){t.assignee=e.target.value;}},h('option',{value:'',text:'Nobody yet'}),S.people.map(function(p){return h('option',{value:p.id,text:p.name});})),
          h('input',{class:'in',type:'date','aria-label':'Due date',value:t.due,onchange:function(e){t.due=e.target.value;}})));})),
      h('button',{class:'btn wide',type:'button',onclick:function(){var items=list.filter(function(t){return t.on&&t.title.trim();}).map(function(t){return {id:t.id,title:t.title.trim(),due:t.due,assignee:t.assignee,subjectId:t.subjectId||M.d.subjectId,priority:t.priority};});
        if(!items.length){toast('Tick at least one task.');return;}var sid=M.d.subjectId;closeSheet();send('bulkAdd',{items:items,base:{status:'new',subjectId:sid}},true);toast(items.length+(items.length===1?' task added':' tasks added'));}},'Add '+list.filter(function(t){return t.on;}).length+' tasks')]:null,
    h('p',{class:'note',style:'margin:0'},'AI reads the text and suggests tasks with people and dates. Nothing is added until you tap Add.'+(canV?' Voice notes are turned into text first and are not kept.':''))];}

/* ---------- WhatsApp settings for each person ---------- */
function waBlock(){if(!S.features.wa)return null;var p=person(me)||{},d=M&&M.wa?M.wa:{phone:p.phone||'',on:!!p.waOn},W=V.wav=V.wav||{code:'',busy:false};
  if(!S.settings.waOn)return null;
  var waiting=!p.waOn&&p.waVerify&&p.waVerify.phone===p.phone&&p.waVerify.exp>Date.now();
  var redraw=function(){render();if(M)renderSheet();};
  var confirm=function(){var c=W.code.replace(/\D/g,'');if(c.length!==6){toast('Type the six digit code from WhatsApp.');return;}if(navigator.onLine===false){toast('You are offline. Connect to confirm the code.');return;}
    W.busy=true;redraw();server('verifyPhone',{code:c}).then(function(r){W.busy=false;W.code='';accept(r);pickMe();redraw();toast(r.msg||'Done');}).catch(function(e){W.busy=false;redraw();if(!lost(e))toast(e.message+'.');});};
  return h('div',{class:'wa'},h('strong',null,'WhatsApp alerts'),
    h('p',{class:'note',style:'margin:0'},'Get new tasks, reminders and approvals on WhatsApp, and reply to update your work'+(S.features.transcribe?', or send a voice note to add a task.':'.')),
    fld('Your WhatsApp number',h('input',{class:'in',id:'wa-phone',type:'tel',placeholder:'+2348012345678',value:d.phone,disabled:!!p.waOn||waiting,oninput:function(e){d.phone=e.target.value;if(M)M.wa=d;}})),
    waiting?h('div',{class:'wacode'},h('p',{class:'note',style:'margin:0',text:'We sent a six digit code to '+p.phone+' on WhatsApp. Type it here to switch alerts on. It works for 15 minutes.'}),
        h('div',{class:'addrow',style:'margin:0'},h('input',{class:'in',id:'wa-code',inputmode:'numeric',autocomplete:'one-time-code',maxlength:7,placeholder:'123456','aria-label':'Code from WhatsApp',value:W.code,oninput:function(e){W.code=e.target.value;},onkeydown:function(e){if(e.key==='Enter')confirm();}}),
          h('button',{class:'btn sm',type:'button',disabled:W.busy,onclick:confirm},W.busy?'Checking…':'Confirm')),
        h('div',{class:'acts',style:'margin:0'},h('button',{class:'linkb',type:'button',onclick:function(){send('saveMyProfile',{phone:p.phone,waOn:true});}},'Send a new code'),
          h('button',{class:'linkb',type:'button',onclick:function(){send('saveMyProfile',{phone:'',waOn:false});d.phone='';}},'Use another number')))
    :p.waOn?h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('saveMyProfile',{waOn:false});}},'Turn off WhatsApp alerts')
      :h('button',{class:'btn sm',type:'button',onclick:function(){send('saveMyProfile',{phone:d.phone,waOn:true});}},'Turn on WhatsApp alerts'),
    h('div',{class:'cmd'},'Reply to the business number with: TASKS, DONE 2, UPDATE 2 your note, ADD a new task, IN, OUT, BREAK, BACK, TODAY.'+(S.features.transcribe?' A voice note becomes a task too.':'')));}
/* reminder, handoff, report and meeting emails: each person switches them for themselves */
function emailBlock(){if(!S.features.mail)return null;var off=!!S.settings.mailOff;
  return h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},h('strong',null,'Emails'),
    h('label',{class:'switch'},h('input',{type:'checkbox',id:'em-on',checked:!off,onchange:function(e){send('setMyEmailPrefs',{mailOff:!e.target.checked});}}),'Reminders, the daily summary, weekly reports and meeting emails'),
    h('p',{class:'note',style:'margin:0'},'Invitations and security emails always arrive, whatever you choose here.'));}
/* help, contacts, legal pages and a ready made problem report */
function supportMail(){var e=String(CFG.supportEmail||CFG.contactEmail||'').trim();return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)&&e!=='hello@example.com'?e:'';}
function openHelp(){M={kind:'help'};$('#ov').hidden=false;renderSheet();}
function renderHelp(){var em=supportMail(),wa=String(CFG.supportWhatsApp||'').replace(/\D/g,'');
  var info=[BRAND+' version '+APP_VERSION,'Device: '+deviceName()+', '+innerWidth+' by '+innerHeight,'Browser: '+navigator.userAgent,'Language: '+(navigator.language||''),'Time zone: '+(myTz||''),'Workspace: '+((S&&S.workspace&&S.workspace.name)||''),'Online: '+(navigator.onLine===false?'no':'yes')+', unsent changes: '+Q.length];
  var report='mailto:'+em+'?subject='+encodeURIComponent('Problem report, '+BRAND+' '+APP_VERSION)+'&body='+encodeURIComponent('What happened:\n\n\nWhat I expected:\n\n\n'+info.join('\n'));
  var link=function(href,label){return h('a',{class:'li',href:href,target:'_blank',rel:'noopener noreferrer'},h('div',null,h('strong',{text:label})),h('span',{class:'tagr',html:I.r}));};
  return [head('Help and support'),
    h('div',{class:'panel list'},em?h('a',{class:'li',href:'mailto:'+em},h('div',null,h('strong',null,'Email us'),h('small',{text:em}))):null,
      wa?h('a',{class:'li',href:'https://wa.me/'+wa,target:'_blank',rel:'noopener noreferrer'},h('div',null,h('strong',null,'WhatsApp us'),h('small',{text:'+'+wa}))):null,
      em?h('a',{class:'li',href:report},h('div',null,h('strong',null,'Report a problem'),h('small',null,'Opens an email with your app version and device, so we can help faster'))):null,
      !em&&!wa?h('p',{class:'note',style:'margin:0;padding:12px 0'},'Ask the person who runs your workspace for help.'):null),
    h('div',{class:'lbl'},'The small print'),
    h('div',{class:'panel list'},link('../privacy.html','Privacy policy'),link('../terms.html','Terms'),link('../refunds.html','Refunds'),link('../security.html','Security')),
    h('p',{class:'note',style:'margin:0;text-align:center',text:BRAND+' version '+APP_VERSION})];}

/* ---------- Clock out with a handoff note ---------- */
function openHandoff(){M={kind:'handoff',note:''};$('#ov').hidden=false;renderSheet();var f=$('#ho-note');if(f)f.focus();}
function renderHandoff(){var sh=myShift();return [head('Clock out'),h('p',{class:'note',style:'margin:0',text:sh?'Worked '+hm(workedMs(sh))+' this shift.':''}),
  fld('Handoff note, optional',h('textarea',{class:'in',id:'ho-note',rows:4,maxlength:200,placeholder:'What you finished, and what is next for whoever picks up',value:M.note,oninput:bind(M,'note')})),
  h('p',{class:'note',style:'margin:0'},'The note goes on your shift and into the daily summary email.'),
  h('button',{class:'btn wide',type:'button',onclick:function(){var n=M.note.trim();closeSheet();punch('clockOut',n);}},'Clock out')];}

/* ---------- Tasks ---------- */
var FILT=[['open','Open'],['today','Today'],['late','Overdue'],['waiting','Waiting'],['needme','Needs me'],['review','Sign off'],['mine','Mine'],['done','Done'],['all','All']];
function match(t){var td=today(),q=V.q.trim().toLowerCase();
  if(V.subject!=='all'&&t.subjectId!==V.subject)return false;
  if(q&&(t.title+' '+t.details+' '+sName(t.subjectId)+' '+t.waitingOn).toLowerCase().indexOf(q)<0)return false;
  switch(V.status){case 'open':return open(t);case 'today':return (open(t)&&t.due&&t.due<=td)||doneOn(t,td);case 'late':return late(t);
    case 'waiting':return t.status==='waiting';case 'forme':return forMe(t);case 'needme':return forMe(t)||toSign(t)||newMentions(t)>0;
    case 'review':return t.status==='review'&&(t.createdBy===me||t.assignee===me);case 'mention':return newMentions(t)>0;case 'mine':return open(t)&&t.assignee===me;case 'done':return !open(t);default:return true;}}
function viewTasks(){var list=S.tasks.filter(match),groups={},order=[];
  list.forEach(function(t){var k=subj(t.subjectId)?t.subjectId:'';if(!groups[k]){groups[k]=[];order.push(k);}groups[k].push(t);});
  order.sort(function(a,b){return sName(a).localeCompare(sName(b));});
  var body=order.map(function(k){var g=groups[k].sort(sortT);return h('section',{class:'grp'},
    h('h4',null,h('i',{class:'dot',style:'background:'+sColor(k)}),sName(k),h('span',{text:g.length+(g.length===1?' task':' tasks')})),h('div',{class:'rows'},g.map(function(t){return row(t,false);})));});
  if(!list.length)body=[h('div',{class:'empty',style:'margin-top:20px'},ill(S.tasks.length?'empty_tasks':'empty_today'),h('b',null,S.tasks.length?'Nothing matches this view':'No tasks yet'),S.tasks.length?'Try another filter, or clear the search.':'Tap the plus button to add the first task.')];
  return [topbar('Tasks',list.filter(open).length+' open in this view'),
    h('div',{class:'acts tacts',style:'margin:-6px 0 14px'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.tab='guides';render();window.scrollTo(0,0);}},'Guides'+((S.guides||[]).length?' ('+S.guides.length+')':'')),
      h('button',{class:'btn ghost sm',type:'button',onclick:openImport},'Import'),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.tab='archive';render();window.scrollTo(0,0);}},'Archive'),
      (S.trash||[]).length?h('button',{class:'btn ghost sm',type:'button',onclick:openBin},'Bin ('+S.trash.length+')'):null),
    h('div',{class:'narrow'},h('div',{class:'search'},h('span',{html:I.search}),h('input',{id:'q',type:'search',placeholder:'Search tasks, clients, notes','aria-label':'Search tasks',value:V.q,oninput:function(e){V.q=e.target.value;render();}})),
    h('div',{class:'chips'},FILT.map(function(f){return h('button',{class:'chip o',type:'button','aria-pressed':String(V.status===f[0]),onclick:function(){V.status=f[0];render();}},f[1]);})),
    h('div',{class:'chips',style:'padding-top:4px'},[h('button',{class:'chip',type:'button','aria-pressed':String(V.subject==='all'),onclick:function(){V.subject='all';render();}},'All clients')].concat(
      liveSubjects().map(function(s){return h('button',{class:'chip',type:'button','aria-pressed':String(V.subject===s.id),onclick:function(){V.subject=s.id;render();}},h('i',{class:'dot',style:'background:'+s.color}),s.name);}))),
    body)];}

/* ---------- Calendar ---------- */
function viewCal(){var sel=V.cal,d=parse(sel),start=addDays(sel,-((d.getDay()+6)%7)),td=today(),days=[];
  for(var i=0;i<7;i++)days.push(addDays(start,i));
  var on=function(day){return S.tasks.filter(function(t){return t.due===day;});};
  var list=on(sel).sort(function(a,b){return (a.start||'99')<(b.start||'99')?-1:(a.start||'99')>(b.start||'99')?1:sortT(a,b);});
  var timed=list.filter(function(t){return t.start;}),any=list.filter(function(t){return !t.start;}),carried=sel===td?S.tasks.filter(late).sort(sortT):[];
  var meets=meetSorted().filter(function(m){return mDay(m.startAt)===sel&&m.status==='scheduled';});
  var card=function(t,i){return h('button',{class:'tc'+(i%2===0?' p':'')+(open(t)?'':' done'),type:'button',onclick:function(){openTask(t.id);}},
    h('strong',{text:t.title}),h('div',{class:'meta'},h('span',null,h('i',{class:'dot',style:'background:'+sColor(t.subjectId)}),sName(t.subjectId)),
      t.start?h('span',{text:t.start+(t.end?' to '+t.end:'')}):null,t.assignee&&person(t.assignee)?h('span',{text:pName(t.assignee)}):null,
      t.status==='waiting'?h('span',{class:'wait',text:'Waiting'+(t.waitingOn?' on '+t.waitingOn:'')}):null,open(t)?null:h('span',{text:'Done'})));};
  var tl=[],nowT=pad(new Date().getHours())+':'+pad(new Date().getMinutes()),placed=false;
  var mi=0;timed.forEach(function(t,i){while(mi<meets.length&&mHm(meets[mi].startAt)<=t.start){tl.push(h('time',{text:mHm(meets[mi].startAt)}),meetCardRow(meets[mi]));mi++;}if(sel===td&&!placed&&t.start>nowT){tl.push(h('div',{class:'nowline'}));placed=true;}tl.push(h('time',{text:t.start}),card(t,i));});
  for(;mi<meets.length;mi++)tl.push(h('time',{text:mHm(meets[mi].startAt)}),meetCardRow(meets[mi]));
  any.forEach(function(t,i){tl.push(h('time',{text:i?'':'Any time'}),card(t,i+timed.length));});
  var hd=holidaysOn(sel),lvs=onLeave(sel);
  var right=h('div',null,
    h('div',{class:'sec'},h('h3',{text:DAYL[d.getDay()]+', '+ord(d.getDate())}),h('span',{text:list.length+(list.length===1?' task':' tasks')+(meets.length?', '+meets.length+(meets.length===1?' meeting':' meetings'):'')})),
    hd.map(function(x){return h('div',{class:'hol'},h('b',null,'Public holiday'),h('span',{text:x.name+' · '+x.region}));}),
    lvs.length?h('div',{class:'hol',style:'background:var(--sunk)'},h('b',null,'On leave'),h('span',{text:lvs.map(function(l){return pName(l.personId);}).join(', ')})):null,
    list.length||meets.length?h('div',{class:'tl'},tl):h('div',{class:'empty'},ill('empty_calendar'),h('b',null,'A clear day'),'Nothing is scheduled. Use the button on the calendar to add a task for this day.'),
    carried.length?[h('div',{class:'sec'},h('h3',null,'Carried over'),h('span',{text:carried.length+' overdue'})),h('div',{class:'rows'},carried.map(function(t){return row(t,true);}))]:null);
  var cal=h('section',{class:'cal'},
    h('div',{class:'calh'},h('button',{type:'button','aria-label':'Previous week',html:I.l,onclick:function(){V.cal=addDays(sel,-7);render();}}),
      h('b',{text:MONL[d.getMonth()]+' '+d.getFullYear()}),h('button',{type:'button','aria-label':'Next week',html:I.r,onclick:function(){V.cal=addDays(sel,7);render();}})),
    h('div',{class:'week'},days.map(function(day){var x=parse(day);return h('button',{class:'dayb'+(day===sel?' sel':'')+(day===td?' tod':'')+(on(day).some(open)?' has':''),type:'button','aria-pressed':String(day===sel),
      'aria-label':DAYL[x.getDay()]+' '+short(day)+(holidaysOn(day).length?', public holiday':''),onclick:function(){V.cal=day;render();}},h('small',{text:DAY[x.getDay()]}),h('b',{text:x.getDate(),style:holidaysOn(day).length?'color:var(--coral-ink)':null}),h('i'));})),
    h('div',{class:'acts',style:'margin-top:12px'},h('button',{class:'btn sm',type:'button',onclick:function(){openTask(null,{due:sel});}},'Add task for this day'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){openMeet(null,{day:sel});}},'Set up a meeting')));
  return [topbar('Calendar',sel===td?'Today':diff(sel)===1?'Tomorrow':short(sel)),h('div',{class:'seg s2',style:'margin:-4px 0 14px;max-width:360px'},h('button',{type:'button','aria-pressed':'true'},'Calendar'),h('button',{type:'button','aria-pressed':'false',onclick:function(){V.tab='meet';render();window.scrollTo(0,0);}},'Meetings'+(nextMeeting()?' ·  next '+mHm(nextMeeting().startAt):''))),h('div',{class:'calwrap'},h('div',null,cal,sel!==td?h('button',{class:'btn ghost sm',style:'margin-top:12px',type:'button',onclick:function(){V.cal=td;render();}},'Back to today'):null),right)];}

/* ---------- Insights ---------- */
var IRANGES=[['7d','7 days'],['30d','30 days'],['month','This month'],['lastmonth','Last month'],['custom','Custom']];
/* Insights for a custom range that reaches back more than 90 days: archived tasks and time for it, loaded on demand */
var ARCH={};
function archFor(r){if(!r||!r.from||r.from>=addDays(today(),-90))return null;var k=wsId+'|'+r.from+'|'+(r.to||'');var a=ARCH[k];
  if(!a){a=ARCH[k]={busy:true,tasks:[],time:[]};server('archiveSearch',{insights:true,from:r.from,to:r.to||''}).then(function(res){var x=res.archive||{};a.tasks=x.tasks||[];a.time=x.time||[];a.busy=false;render();})
    .catch(function(e){a.busy=false;a.failed=true;if(!lost(e))toast(e.message+'.');render();});}
  return a;}
function archNote(a){return a?h('p',{class:'note',style:'margin:0 0 10px',text:a.busy?'Loading archived work for this range…':a.failed?'Archived work could not be loaded, so older figures may be low.':'Includes archived work from more than 90 days ago.'}):null;}
function viewStats(){var td=today(),o=S.tasks.filter(open);
  var IR=V.ir=V.ir||{k:'7d',from:'',to:''},rr=rangeOf(IR.k,IR.from,IR.to),rLabel=IR.k==='7d'?'7 days':IR.k==='30d'?'30 days':IR.k==='month'?'this month':IR.k==='lastmonth'?'last month':short(rr.from)+' to '+short(rr.to);
  var arch=IR.k==='custom'?archFor(rr):null,allT=arch?S.tasks.concat(arch.tasks):S.tasks;
  var done7=allT.filter(function(t){return !open(t)&&t.doneAt&&inRange(t.doneAt,rr);}),onTime=done7.filter(function(t){return !t.due||t.doneAt<=deadline(t);});
  var subs=liveSubjects().map(function(s){var all=S.tasks.filter(function(t){return t.subjectId===s.id;});return {s:s,open:all.filter(open).length,done:all.length-all.filter(open).length,late:all.filter(late).length};});
  var mx=Math.max.apply(null,subs.map(function(x){return x.open+x.done;}).concat([1]));
  var days=[],span0=Math.round((parse(rr.to)-parse(rr.from))/864e5)+1,step=span0>31?7:1;   // more than a month shows weeks
  for(var i=0;i<span0;i+=step){var day=addDays(rr.from,i),last=addDays(day,step-1)>rr.to?rr.to:addDays(day,step-1);if(day>td)break;
    days.push({day:day,last:last,n:allT.filter(function(t){return t.status==='done'&&t.doneAt&&dayOf(t.doneAt)>=day&&dayOf(t.doneAt)<=last;}).length});}
  if(!days.length)days.push({day:td,last:td,n:0});
  var dm=Math.max.apply(null,days.map(function(x){return x.n;}).concat([1]));
  var load=S.people.map(function(p){return {p:p,n:o.filter(function(t){return t.assignee===p.id;}).length};});load.push({p:{name:'Unassigned'},n:o.filter(function(t){return !person(t.assignee);}).length});
  var lm=Math.max.apply(null,load.map(function(x){return x.n;}).concat([1]));
  var stale=o.filter(function(t){return Date.now()-(t.updatedAt||t.createdAt)>5*864e5;}).sort(function(a,b){return (a.updatedAt||0)-(b.updatedAt||0);}).slice(0,5);
  var tabs=[['work','Work'],['hours','Time'],['me','My patterns'],['exp','Expenses'],['time','Time clock'],['leave','Leave and holidays']].concat(S.owner?[['pay','Payroll'],['inv','Invoices']]:[]);if(!V.ins||!tabs.some(function(x){return x[0]===V.ins;}))V.ins='work';
  var tabRow=h('div',{class:'itabs',role:'tablist'},tabs.map(function(x){return h('button',{type:'button',role:'tab','aria-pressed':String(V.ins===x[0]),onclick:function(){V.ins=x[0];render();}},x[1]);}));
  if(V.ins==='me')return viewPatterns(tabRow);
  if(V.ins==='hours')return [topbar('Insights','How the work, hours and money are moving'),tabRow,timeSection()];
  if(V.ins==='exp')return [topbar('Insights','How the work, hours and money are moving'),tabRow,expenseSection()];
  if(V.ins!=='work')return [topbar('Insights','How the work, hours and money are moving'),tabRow,V.ins==='time'?clockSection():V.ins==='leave'?leaveSection():V.ins==='pay'?paySection():invoiceSection()];
  return [topbar('Insights','How the work, hours and money are moving'),tabRow,
    S.owner&&S.features.ai?h('div',{class:'runbar',style:'border-left-color:var(--plum-ink)'},h('div',null,h('small',null,'AI writer'),h('strong',null,'Get a short summary of today for your boss or client')),h('button',{class:'btn sm',type:'button',onclick:aiStandup},'Write summary')):null,
    h('div',{class:'chips',style:'padding-top:0;margin-bottom:6px'},IRANGES.map(function(x){return h('button',{class:'chip',type:'button','aria-pressed':String(IR.k===x[0]),onclick:function(){IR.k=x[0];render();}},x[1]);})),
    IR.k==='custom'?h('div',{class:'frow',style:'margin-bottom:12px'},fld('From',h('input',{class:'in',id:'ir-from',type:'date',value:rr.from,onchange:function(e){IR.from=e.target.value;render();}})),fld('To',h('input',{class:'in',id:'ir-to',type:'date',value:rr.to,onchange:function(e){IR.to=e.target.value;render();}}))):null,
    archNote(arch),
    h('div',{class:'tiles'},
      h('div',{class:'tile dark'},h('b',{text:o.length}),h('span',null,'Open tasks')),
      h('div',{class:'tile'},h('b',{style:'color:var(--danger)',text:S.tasks.filter(late).length}),h('span',null,'Overdue')),
      h('div',{class:'tile'},h('b',{text:done7.length}),h('span',{text:'Done in '+rLabel})),
      h('div',{class:'tile'},h('b',{text:done7.length?Math.round(onTime.length/done7.length*100)+'%':'0%'}),h('span',null,'Finished on time'))),
    h('div',{class:'sec'},h('h3',null,'By client')),
    h('div',{class:'panel'},h('div',{class:'legend'},h('span',null,h('i',{class:'dot',style:'background:var(--plum-ink)'}),'Open'),h('span',null,h('i',{class:'dot',style:'background:var(--coral)'}),'Done')),
      subs.length?subs.map(function(x){return h('div',{class:'hb'},h('div',{class:'nm'},h('i',{class:'dot',style:'background:'+x.s.color}),h('span',{text:x.s.name})),
        h('div',{class:'stack',style:'width:'+Math.max(4,(x.open+x.done)/mx*100)+'%'},h('i',{style:'width:'+(x.open+x.done?x.open/(x.open+x.done)*100:0)+'%;background:var(--plum-ink)'}),h('i',{style:'flex:1;background:'+(x.done?'var(--coral)':'var(--line)')})),
        h('em',{text:x.open+' open'+(x.late?', '+x.late+' late':'')}));}):h('p',{class:'note'},'Add a client to see it here.')),
    h('div',{class:'two',style:'margin-top:14px'},
      h('div',{class:'panel'},h('strong',{text:(step===7?'Done per week, ':'Done per day, ')+rLabel}),h('div',{class:'cols'},days.map(function(x){return h('div',{class:x.day<=td&&x.last>=td?'t':'',style:'height:'+Math.max(3,x.n/dm*100)+'%',title:short(x.day)+(step===7?' week':'')+': '+x.n},x.n?h('span',{text:x.n}):null);})),
        h('div',{class:'axis'},h('span',{text:short(days[0].day)}),h('span',{text:days[days.length-1].last>=td?'Today':short(days[days.length-1].last)}))),
      h('div',{class:'panel'},h('strong',null,'Open work by person'),h('div',{style:'margin-top:8px'},load.map(function(x){return h('div',{class:'hb'},h('div',{class:'nm'},h('span',{text:x.p.name})),
        h('div',{class:'stack',style:'width:'+Math.max(4,x.n/lm*100)+'%'},h('i',{style:'width:100%;background:var(--plum2)'})),h('em',{text:x.n}));})))),
    (function(){var bySub={},byWho={},tot=0;(S.time||[]).forEach(function(e){if(!inRange(e.start,rr))return;var ms=(e.end||Date.now())-e.start;if(ms<=0)return;var k=subj(e.subjectId)?e.subjectId:'';bySub[k]=(bySub[k]||0)+ms;byWho[e.personId]=(byWho[e.personId]||0)+ms;tot+=ms;});
      var bar=function(label,ms,max,color){return h('div',{class:'hb'},h('div',{class:'nm'},color?h('i',{class:'dot',style:'background:'+color}):null,h('span',{text:label})),h('div',{class:'stack',style:'width:'+Math.max(4,ms/max*100)+'%'},h('i',{style:'width:100%;background:'+(color||'var(--plum2)')})),h('em',{text:dur(ms)}));};
      var ks=Object.keys(bySub).sort(function(a,b){return bySub[b]-bySub[a];}),ws=Object.keys(byWho).sort(function(a,b){return byWho[b]-byWho[a];}),mx=Math.max.apply(null,ks.map(function(k){return bySub[k];}).concat([1])),wx=Math.max.apply(null,ws.map(function(k){return byWho[k];}).concat([1]));
      return [h('div',{class:'sec'},h('h3',null,'Time tracked'),h('button',{type:'button',onclick:function(){V.ins='hours';render();window.scrollTo(0,0);}},(rLabel.charAt(0).toUpperCase()+rLabel.slice(1))+' · '+dur(tot))),
        tot?h('div',{class:'two'},h('div',{class:'panel'},h('strong',null,'By client'),h('div',{style:'margin-top:8px'},ks.map(function(k){return bar(sName(k),bySub[k],mx,sColor(k));}))),
          h('div',{class:'panel'},h('strong',null,'By person'),h('div',{style:'margin-top:8px'},ws.map(function(k){return bar(pName(k),byWho[k],wx);}))))
        :h('div',{class:'empty'},ill('empty_time'),h('b',null,'No time tracked in '+rLabel),'Start a timer on a task, clock in for a client, or add time by hand.')];})(),
    h('div',{class:'sec'},h('h3',null,'Going quiet'),h('span',null,'Open, no change in 5 days')),
    stale.length?h('div',{class:'rows'},stale.map(function(t){return row(t,true);})):h('div',{class:'empty'},h('b',null,'Nothing is going quiet'),'Every open task has moved in the last 5 days.')];}

/* ---------- Settings ---------- */
/* time zones offered when setting up clocks and deadlines */
var TZS=[['Nigeria','Africa/Lagos'],['Ghana','Africa/Accra'],['Kenya','Africa/Nairobi'],['South Africa','Africa/Johannesburg'],['Egypt','Africa/Cairo'],
  ['UK','Europe/London'],['Central Europe','Europe/Berlin'],['UAE','Asia/Dubai'],['India','Asia/Kolkata'],['Philippines','Asia/Manila'],['Singapore','Asia/Singapore'],
  ['US Eastern','America/New_York'],['US Central','America/Chicago'],['US Mountain','America/Denver'],['US Pacific','America/Los_Angeles'],['Canada Eastern','America/Toronto'],
  ['Brazil','America/Sao_Paulo'],['Mexico','America/Mexico_City'],['Australia East','Australia/Sydney'],['New Zealand','Pacific/Auckland']];
function tzLabel(tz){var z=TZS.find(function(x){return x[1]===tz;});return z?z[0]:String(tz||'').split('/').pop().replace(/_/g,' ');}
function tzOptions(sel,blank){var list=TZS.slice();if(myTz&&!TZS.some(function(x){return x[1]===myTz;}))list.unshift([tzLabel(myTz)+' (this device)',myTz]);
  if(sel&&!list.some(function(x){return x[1]===sel;}))list.unshift([tzLabel(sel),sel]);
  return (blank?[h('option',{value:'',text:blank})]:[]).concat(list.map(function(z){return h('option',{value:z[1],text:z[0]+' time'});}));}
var PLANLIST=(CFG.plans||[{id:'starter',name:'Starter',people:5,usd:15,ngn:12000},{id:'team',name:'Team',people:15,usd:39,ngn:30000},{id:'agency',name:'Agency',people:50,usd:99,ngn:75000}]);
var money=function(n){return Number(n).toLocaleString('en-US');};
var longDate=function(v){var d=new Date(v);return isNaN(d)?'':d.getDate()+' '+MONL[d.getMonth()]+' '+d.getFullYear();};
function planStatus(w){var left=w.trialEndsAt?Math.ceil((new Date(w.trialEndsAt)-Date.now())/864e5):0;
  if(w.status==='trialing')return w.active?'Free trial, '+left+(left===1?' day':' days')+' left':'Your free trial has ended';
  if(w.status==='active')return w.planLabel+' plan, active'+(w.periodEnd?', renews by '+longDate(w.periodEnd):'');
  if(w.status==='past_due')return w.planLabel+' plan, the last payment did not go through'+(w.active?'. Access continues for a few days.':'');
  if(w.status==='cancelled')return w.planLabel+' plan, cancelled'+(w.active&&w.periodEnd?'. Access continues until '+longDate(w.periodEnd):'');
  return 'Your plan has ended';}
/* ---------- plan and billing: what the plan allows and uses, and the subscription itself (owner only; the billing function checks 2FA) ---------- */
var GBtext=function(b){var g=b/1073741824;return g>=10?Math.round(g)+' GB':g>=1?(Math.round(g*10)/10)+' GB':Math.max(0,Math.round(b/1048576))+' MB';};
function planOf(id){return PLANLIST.find(function(x){return x.id===id;})||null;}
function tooSmall(id){var x=planOf(id);return !!x&&x.people<S.people.length;}
function seatMsg(id){var x=planOf(id)||{},n=S.people.length,k=n-x.people;return 'You have '+n+' people, and the '+x.name+' plan allows '+x.people+'. Remove '+k+(k===1?' person':' people')+' first, or choose a larger plan.';}
function billCall(action,extra){if(V.billBusy)return;V.billBusy=action;render();
  call('billing',Object.assign({workspace:wsId,action:action,returnUrl:appUrl()+'?paid=1'},extra||{})).then(function(r){V.billBusy='';if(r.url){location.href=r.url;return;}
      V.change=false;V.cancelAsk=false;if(r.msg)toast(r.msg);refresh();render();})
    .catch(function(e){V.billBusy='';render();if(!lost(e))toast(e.message+'.');});}
function checkout(provider){var plan=V.plan;if(!plan){toast('Choose a plan first.');return;}if(tooSmall(plan)){toast(seatMsg(plan));return;}
  toast('Opening the payment page');billCall('checkout',{plan:plan,provider:provider,interval:V.yearly?'year':'month'});}
function usageRows(u){var row=function(label,used,limit,text){var pct=limit?Math.min(100,Math.round(used/limit*100)):0,col=pct>=100?'var(--danger)':pct>=80?'var(--coral2)':'var(--ok)';
    return h('div',null,h('div',{class:'hd'},h('strong',{text:label}),h('span',{text:text})),h('div',{class:'bar'},h('i',{style:'width:'+pct+'%;background:'+col})));};
  return h('div',{class:'usg'},row('People',u.seats.used,u.seats.limit,u.seats.used+' of '+u.seats.limit),
    row('File storage',u.storage.used,u.storage.limit,GBtext(u.storage.used)+' of '+u.storage.gb+' GB'),
    u.wa.own?h('div',null,h('div',{class:'hd'},h('strong',null,'WhatsApp this month'),h('span',{text:money(u.wa.used)+' sent'})),h('small',null,'From your own number, with no limit from '+BRAND))
      :row('WhatsApp this month',u.wa.used,u.wa.limit,money(u.wa.used)+' of '+money(u.wa.limit)),
    row('AI requests today',u.ai.used,u.ai.limit,u.ai.used+' of '+u.ai.limit));}
function planCards(){var used=S.people.length;
  return [h('div',{class:'plans-iv',role:'group','aria-label':'Billing period'},h('button',{type:'button','aria-pressed':String(!V.yearly),onclick:function(){V.yearly=false;render();}},'Monthly'),h('button',{type:'button','aria-pressed':String(!!V.yearly),onclick:function(){V.yearly=true;render();}},'Yearly, 2 months free')),
    h('div',{class:'plans',role:'group','aria-label':'Plans'},PLANLIST.map(function(x){var small=x.people<used;
      return h('button',{class:'plan',type:'button','aria-pressed':String(V.plan===x.id),style:small?'opacity:.5':null,onclick:function(){V.plan=x.id;render();}},
        h('b',{text:x.name}),h('small',{text:'Up to '+x.people+' people'+(small?', too few for your team':'')}),h('span',{class:'pr',text:V.yearly?'$'+money(x.usd*10)+' or ₦'+money(x.ngn*10)+' a year':'$'+money(x.usd)+' or ₦'+money(x.ngn)+' a month'}));})),
    tooSmall(V.plan)?h('p',{class:'err',role:'alert',text:seatMsg(V.plan)}):null];}
function paidLive(w){return w.status==='active'||w.status==='past_due';}
/* a member who still pays for this workspace's plan (they owned it before): they can cancel it or change its card */
function payerBlock(){var y=S.workspace&&S.workspace.youPay;if(!y||S.owner)return null;var busy=!!V.billBusy,end=y.periodEnd?longDate(y.periodEnd):'the end of the period';
  return [h('div',{class:'lbl'},'Plan you pay for'),h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},
    h('p',{style:'margin:0;font-size:14px',text:y.canCancel?'Your card still pays for the plan in '+S.workspace.name+'. Cancel it so the new owner can choose their own; it keeps working until '+end+'.':'Your plan in '+S.workspace.name+' is cancelled and ends on '+end+'. Nothing more is charged.'}),
    M.payCancel?h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn danger sm',type:'button',disabled:busy,onclick:function(){M.payCancel=false;billCall('cancel');}},V.billBusy==='cancel'?'Cancelling…':'Yes, cancel at the end of the period'),
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.payCancel=false;renderSheet();}},'Keep it'))
      :h('div',{class:'acts',style:'margin:0'},y.canCancel?h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.payCancel=true;renderSheet();}},'Cancel my plan'):null,
        y.canCard?h('button',{class:'btn ghost sm',type:'button',disabled:busy,onclick:function(){billCall('card');}},y.provider==='paystack'?'Manage card':'Update card'):null))];}
function billingPanel(){var w=S.workspace||{},used=S.people.length,u=w.usage,b=w.billing||{},busy=!!V.billBusy,iv=V.yearly?'year':'month';
  if(!V.plan){var fit=PLANLIST.find(function(x){return x.people>=used&&(w.plan===x.id||w.plan==='trial'||!w.plan);})||PLANLIST.find(function(x){return x.people>=used;});V.plan=(PLANLIST.find(function(x){return x.id===w.plan;})||fit||PLANLIST[PLANLIST.length-1]).id;}
  var manage=b.canCancel||b.canResume,cur=planOf(w.plan),pick=planOf(V.plan)||{},same=V.plan===w.plan&&iv===(w.interval||'month');
  var nextMonth=function(){var d=new Date();return '1 '+MONL[(d.getMonth()+1)%12];};
  return [h('div',{class:'sec',id:'billing'},h('h3',null,'Plan and billing'),h('span',{text:used+' of '+(w.people||'?')+' people used'})),
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:14px'},
      h('div',{class:'planrow'},h('div',null,w.status==='trialing'||!cur?h('b',{style:'font-size:15px',text:planStatus(w)}):[h('b',{text:cur.name+' plan'}),h('p',{text:planStatus(w).replace(/^\w+ plan, /,'').replace(/^./,function(c){return c.toUpperCase();})})]),
        manage&&b.provider?h('span',{class:'badge-s',text:(w.interval==='year'?'Yearly':'Monthly')+', '+(b.provider==='paystack'?'Paystack':'Lemon Squeezy')}):null),
      u&&u.seats.over?h('p',{class:'note-warn',role:'status',text:'You have '+u.seats.used+' people on a plan for '+u.seats.limit+'. Everyone keeps working, but nobody new can be added until some leave or you choose a larger plan.'}):null,
      b.payerUnknown?h('p',{class:'note-warn',role:'status',text:'We could not tell which account pays for this plan, so it cannot be changed here. Contact support from Help and support to link it to your account.'}):null,
      b.paidByOther?h('p',{class:'note-warn',role:'status',text:paidLive(w)?'This plan is paid by the previous owner, so only they can cancel it or change its card, from their account. Once they cancel it, choose your own plan here.':'The previous owner\'s plan ends on '+(w.periodEnd?longDate(w.periodEnd):'the end of its period')+'. Choose your own plan here before then so nothing stops.'}):null,
      b.freeMonth?h('p',{class:'ok-note',text:'Free month applied, thanks to your referral. Next charge on '+longDate(b.freeMonth.nextCharge)+'.'}):null,
      u&&!u.wa.own&&u.wa.limit&&u.wa.used>=u.wa.limit?h('p',{class:'note-warn',text:'This month\'s WhatsApp messages are used up. Alerts go by email and phone alerts until '+nextMonth()+'.'}):null,
      u&&u.storage.used>=u.storage.limit*0.8?h('p',{class:'note-warn',text:u.storage.used>=u.storage.limit?'File storage is full, so new files cannot be attached. Delete old files or choose a larger plan.':'File storage is over 80% full.'}):null,
      u?usageRows(u):null,
      manage?[h('div',{class:'acts',style:'margin:0'},
          b.canChange?h('button',{class:'btn sm',type:'button','aria-expanded':String(!!V.change),onclick:function(){V.change=!V.change;V.cancelAsk=false;render();}},V.change?'Keep this plan':'Change plan'):null,
          b.canResume?h('button',{class:'btn sm',type:'button',disabled:busy,onclick:function(){billCall('resume');}},V.billBusy==='resume'?'Resuming…':'Resume plan'):null,
          b.canCard?h('button',{class:'btn ghost sm',type:'button',disabled:busy,onclick:function(){billCall('card');}},b.provider==='paystack'?'Manage card':'Update card'):null,
          b.canCancel?h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.cancelAsk=!V.cancelAsk;V.change=false;render();}},'Cancel plan'):null),
        V.change?[planCards(),h('p',{class:'note',style:'margin:0'},b.provider==='lemonsqueezy'?'The change happens straight away. Lemon Squeezy adjusts the price for the rest of this period.':'You pay for the new plan on Paystack. Your current plan stops as soon as that payment goes through, so you are never charged twice.'),
          h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn sm',type:'button',disabled:busy||tooSmall(V.plan)||same,onclick:function(){billCall('change',{plan:V.plan,interval:iv,provider:b.provider});}},
            same?'This is your plan':V.billBusy==='change'?'Switching…':'Switch to '+pick.name+(V.yearly?', yearly':'')))]:null,
        V.cancelAsk?h('div',{class:'panel dz',style:'display:flex;flex-direction:column;gap:10px'},h('strong',null,'Cancel your plan?'),
          h('p',{style:'margin:0;font-size:14px',text:'Everything keeps working until '+(w.periodEnd?longDate(w.periodEnd):'the end of the period you paid for')+'. Then the workspace becomes read only, and nothing more is charged. You can resume until then.'}),
          h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn danger sm',type:'button',disabled:busy,onclick:function(){billCall('cancel');}},V.billBusy==='cancel'?'Cancelling…':'Yes, cancel the plan'),
            h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.cancelAsk=false;render();}},'Keep my plan'))):null]
      :(b.paidByOther||b.payerUnknown)&&paidLive(w)?null:[planCards(),
        h('div',{class:'bill-acts'},h('button',{class:'btn sm',type:'button',disabled:busy,onclick:function(){checkout('paystack');}},'Pay in naira with Paystack'),
          h('button',{class:'btn ghost sm',type:'button',disabled:busy,onclick:function(){checkout('lemonsqueezy');}},'Pay in US dollars with Lemon Squeezy')),
        h('p',{class:'note',style:'margin:0'},(V.yearly?'Yearly plans renew every year and cost the same as 10 months. ':'Plans renew every month. ')+'Once you pay, you can change, cancel or update your card here.')],
      h('p',{class:'note',style:'margin:0'},'Cancelling takes effect at the end of the period you paid for. ',h('a',{href:'../refunds.html',target:'_blank',rel:'noopener noreferrer'},'Refund policy')))];}
function wsSwitcher(){return [wsList.length||DELWS.length?h('div',{class:'panel list wsl'},wsList.map(function(w){var cur=w.id===wsId;
    return h('button',{class:'li',type:'button','aria-current':cur?'true':null,onclick:function(){if(!cur){closeSheet();chooseWs(w.id);}}},h('span',{class:'who',text:initials(w.name)}),
      h('div',null,h('strong',{text:w.name}),h('small',{text:w.owner?'You own this workspace':'Member'})),cur?h('span',{class:'tagr'},'Open now'):null);}),
    DELWS.map(function(w){return h('div',{class:'li rs'},h('span',{class:'who',style:'opacity:.5',text:initials(w.name)}),
      h('div',null,h('strong',{text:w.name}),h('small',{text:'Deleted. Restore it by '+longDate(w.purgeAfter)})),
      h('button',{class:'btn sm',type:'button',onclick:function(e){restoreWs(w,e.target);}},'Restore workspace'));})):null,
  h('div',{class:'acts'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){closeSheet();createScreen(!wsList.length);}},wsList.length?'Create another workspace':'Create a new workspace'))];}
var DELWS=[];
function restoreWs(w,btn){busy(btn,true);call('api',{workspace:w.id,action:'restoreWorkspace',payload:{_app:appUrl()}}).then(function(res){DELWS=DELWS.filter(function(x){return x.id!==w.id;});
    wsId=w.id;store.set('hv-ws',wsId);loadQ();closeSheet();accept(res);pickMe();V.tab='home';FULL=false;render();toast(res.msg||'Workspace restored');})
  .catch(function(err){busy(btn,false);if(!lost(err))toast(err.message+'.');});}
function videoPanel(){var st=S.settings;return [h('div',{class:'sec'},h('h3',null,'Video calls')),h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},
    h('p',{class:'note',style:'margin:0'},'Meetings get a free video room on meet.jit.si. The first person to arrive may be asked to sign in with Google or GitHub to open the room. If you run your own Jitsi server, type its address here. Anyone can also paste a Zoom, Google Meet or Teams link on a meeting instead.'),
    h('input',{class:'in',id:'jitsi-dom',placeholder:'meet.jit.si','aria-label':'Your own Jitsi server',value:st.jitsiDomain||''}),
    h('div',{class:'acts'},h('button',{class:'btn sm',type:'button',onclick:function(){send('saveSettings',{settings:{jitsiDomain:$('#jitsi-dom').value.trim()}});}},'Save')))];}
function viewMore(){var p=person(me),st=S.settings,hours=[];for(var i=0;i<24;i++)hours.push(i);
  var clk=zoneList();
  return [topbar('Settings',p?'Signed in as '+p.name+(sess&&sess.user?' ('+sess.user.email+')':''):''),
    h('div',{class:'two'},
      h('div',null,h('div',{class:'sec',style:'margin-top:6px'},h('h3',null,'People'),S.owner?h('button',{type:'button',onclick:function(){openPerson();}},'New person'):null),
        h('div',{class:'panel list'},S.people.map(function(x){return h(S.owner?'button':'div',{class:'li',type:S.owner?'button':null,onclick:S.owner?function(){openPerson(x.id);}:null},h('span',{class:'who',text:initials(x.name)}),
          h('div',null,h('strong',{text:x.name}),h('small',{text:[x.role,x.email,x.id===me?'':x.joined?'Joined':x.inviteExpired?'Invite expired':'Not joined yet',x.id!==me&&x.tz?tIn(Date.now(),x.tz)+' '+tzCity(x.tz):'',x.workStart&&x.workEnd?'Hours '+x.workStart+' to '+x.workEnd:'',x.canPrivate&&x.id!==me?'Can make private':'',x.hidden?(x.ownerSees?'Hidden, visible to you':'Hidden'):''].filter(Boolean).join(' · ')||'No details yet'})),x.id===me?h('span',{class:'tagr'},'This is you'):null);})),
        S.owner?h('p',{class:'note',text:'Add someone, then open them to copy their invite link and send it, for example on WhatsApp. They join as soon as they create an account from the link.'+(S.features.mail?' If you add their email, they also get the invitation by email.':'')}):null),
      h('div',null,h('div',{class:'sec',style:'margin-top:6px'},h('h3',null,'Clients'),h('button',{type:'button',onclick:function(){openSubject();}},'New client')),
        h('div',{class:'panel list'},S.subjects.map(function(s){return h('button',{class:'li',type:'button',onclick:function(){openSubject(s.id);}},h('i',{class:'dot',style:'background:'+s.color+';width:14px;height:14px'}),
          h('div',null,h('strong',{text:s.name}),h('small',{text:kindOf(s)+', '+S.tasks.filter(function(t){return t.subjectId===s.id&&open(t);}).length+' open'})),h('span',{class:'tagr',text:s.archived?'Archived':''}));})))),
    h('div',{class:'sec'},h('h3',null,'Templates'),h('button',{type:'button',onclick:function(){openTemplate();}},'New template')),
    h('div',{class:'panel list'},S.templates.length?S.templates.map(function(x){var n=tplItems(x,'').length;return h('button',{class:'li',type:'button',onclick:function(){openTemplate(x.id);}},h('div',null,h('strong',{text:x.name}),h('small',{text:n+(n===1?' step':' steps')})));})
      :h('p',{class:'note',style:'margin:0'},'A template is a saved list of steps you can turn into tasks in one go.')),
    S.owner?[h('div',{class:'sec'},h('h3',null,'Workspace')),
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:12px'},
      fld('Workspace name',h('input',{class:'in',id:'ws-name',maxlength:80,value:S.workspace.name})),
      h('label',{class:'switch'},h('input',{id:'ck-auto',type:'checkbox',checked:st.clockMode!=='fixed',onchange:function(e){st.clockMode=e.target.checked?'auto':'fixed';render();}}),'Pick home screen clocks automatically from where each person is'),
      st.clockMode!=='fixed'?h('p',{class:'note',style:'margin:0'},'Everyone sees their own time first, then the places their teammates are. Each device reports its time zone when it opens the app.'):null,
      h('label',{class:'switch'},h('input',{id:'ck-loc',type:'checkbox',checked:st.clockLoc!==false}),'Ask for location when people clock in and out'),
      h('p',{class:'note',style:'margin:0'},'The phone asks each person for permission. If they say no, they still clock in, without a location.'),
      st.clockMode==='fixed'?h('div',{class:'lbl'},'Clocks on the home screen'):null,
      st.clockMode==='fixed'?h('div',{class:'frow'},[0,1,2].map(function(i){return h('label',{class:'f'},'Clock '+(i+1),h('select',{class:'in',id:'ck-'+i,value:clk[i]?clk[i].tz:''},tzOptions(clk[i]&&clk[i].tz,i?'None':null)));})):null,
      h('div',{class:'acts'},h('button',{class:'btn sm',type:'button',onclick:function(){var n=$('#ws-name').value.trim();if(!n){toast('Give the workspace a name.');return;}
          var c=$('#ck-0')?[0,1,2].map(function(i){return $('#ck-'+i).value;}).filter(function(v,i,a){return v&&a.indexOf(v)===i;}).map(function(tz){var old=clk.find(function(z){return z.tz===tz;});return (old?old.city:tzLabel(tz))+'|'+tz;}).join(', '):null;
          var ss={workspaceName:n,clockMode:$('#ck-auto').checked?'auto':'fixed',clockLoc:$('#ck-loc').checked};if(c)ss.clocks=c;send('saveSettings',{settings:ss});}},'Save'),
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){exportZip('exportData','everything');}},'Export everything'),h('button',{class:'btn ghost sm',type:'button',onclick:openHistory},'History of changes'),
        st.setupHidden?h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('saveSettings',{settings:{setupHidden:false}});V.tab='home';}},'Show the getting started list'):null)),
    sitesPanel(),billingPanel(),referPanel(),payPanel(),securityPanel(),videoPanel(),
    S.admin?[h('div',{class:'sec'},h('h3',null,'Running '+BRAND)),h('div',{class:'panel',style:'display:flex;gap:12px;align-items:center;flex-wrap:wrap'},h('p',{style:'margin:0;flex:1;min-width:200px'},'Every customer workspace, sign ups, trials, paying plans and monthly income. Only you see this.'),h('button',{class:'btn sm',type:'button',onclick:function(){V.tab='admin';V.adm=null;render();window.scrollTo(0,0);}},'Open business dashboard'))]:null,
    h('div',{class:'sec',id:'hol-set'},h('h3',null,'WhatsApp, AI, holidays and invoices')),
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:12px'},
      h('label',{class:'switch',hidden:!S.features.wa},h('input',{id:'x-wa',type:'checkbox',checked:!!st.waOn}),'Send alerts on WhatsApp to people who turn it on'),
      h('label',{class:'switch',hidden:!S.features.wa},h('input',{id:'x-dwa',type:'checkbox',checked:!!st.digestWa}),'Send me a short daily summary on WhatsApp too'),
      h('label',{class:'switch',hidden:!S.features.ai||!S.features.mail},h('input',{id:'x-ai',type:'checkbox',checked:!!st.aiDigest}),'Start the daily summary email with an AI written summary'),
      !S.features.wa||!S.features.ai?h('p',{class:'note',style:'margin:0',text:[!S.features.wa?'WhatsApp':'',!S.features.ai?'AI':''].filter(Boolean).join(' and ')+' can be switched on later, once you add the keys in Supabase. See the setup guide.'}):null,
      h('div',{class:'lbl'},'Public holidays to show'),
      h('div',{class:'acts',style:'margin:0'},[['NG','Nigeria'],['US','United States']].map(function(r){var on=String(st.holidayRegions===undefined?'NG,US':st.holidayRegions).split(',').indexOf(r[0])>=0;
        return h('label',{class:'switch'},h('input',{type:'checkbox',class:'x-reg',value:r[0],checked:on}),r[1]);})),
      fld('Your own holidays, one per line as date and name',h('textarea',{class:'in',id:'x-ch',rows:2,placeholder:'2026-12-31|Office closed',value:String(st.customHolidays||'').split(', ').join('\n')})),
      h('div',{class:'frow'},fld('Invoice numbers start with',h('input',{class:'in',id:'x-pre',maxlength:8,value:st.invoicePrefix||'INV'})),
        fld('Main currency',h('select',{class:'in',id:'x-cur',value:st.currency||'USD'},CURS.map(function(c){return h('option',{value:c[0],text:c[1]});})))),
      h('label',{class:'switch'},h('input',{id:'x-appr',type:'checkbox',checked:!!st.billApprovedOnly}),'Only approved timesheets can be billed'),
      fld('Your business name and address, for invoices',h('textarea',{class:'in',id:'x-from',rows:2,maxlength:400,value:st.invoiceFrom||''})),
      fld('How clients pay you, shown on invoices',h('textarea',{class:'in',id:'x-note',rows:2,maxlength:600,placeholder:'Bank, account name and number, or a payment link',value:st.invoiceNote||''})),
      h('div',{class:'acts'},h('button',{class:'btn sm',type:'button',onclick:function(){var regs=[].map.call(document.querySelectorAll('.x-reg'),function(c){return c.checked?c.value:'';}).filter(Boolean).join(',');
        send('saveSettings',{settings:{waOn:$('#x-wa').checked,digestWa:$('#x-dwa').checked,aiDigest:$('#x-ai').checked,holidayRegions:regs,customHolidays:$('#x-ch').value,invoicePrefix:$('#x-pre').value,currency:$('#x-cur').value,invoiceFrom:$('#x-from').value,invoiceNote:$('#x-note').value,billApprovedOnly:$('#x-appr').checked}});}},'Save'))),
    st.waOn?waBlock():null,waOwnPanel(),
    h('div',{class:'sec'},h('h3',null,'Emails and deadlines')),
    h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:12px'},
      S.features.mail?null:h('p',{class:'ok-note',style:'margin:0;background:var(--blush);color:var(--ink)'},'Email is not set up yet, so reminders and the daily handoff email are on hold. Everything else works. Add a domain and Resend when you are ready; see the setup guide.'),
      h('label',{class:'switch'},h('input',{id:'rm-on',type:'checkbox',checked:st.remindOn}),'Email reminders: new assignments, due within 24 hours, due within the hour, overdue'),
      h('p',{class:'note',style:'margin:0'},'Reminders go to the email saved for each person under People.'),
      fld('Deadlines and countdowns use this time zone',h('select',{class:'in',id:'dl-tz',value:st.deadlineTz},tzOptions(st.deadlineTz))),
      h('label',{class:'switch',style:'margin-top:6px'},h('input',{id:'dg-on',type:'checkbox',checked:st.digestOn}),'Daily summary email: done, in progress, waiting and overdue'),
      h('div',{class:'frow'},h('label',{class:'f'},'Send at, deadline time',h('select',{class:'in',id:'dg-hour',value:String(st.digestHour)},hours.map(function(x){return h('option',{value:String(x),text:pad(x)+':00'});}))),
        h('label',{class:'f'},'Send to, separate with commas',h('input',{class:'in',id:'dg-to',type:'text',placeholder:'name@example.com',value:st.digestEmails}))),
      h('div',{class:'acts'},h('button',{class:'btn sm',type:'button',onclick:function(){send('saveSettings',{settings:{remindOn:$('#rm-on').checked,deadlineTz:$('#dl-tz').value,digestOn:$('#dg-on').checked,digestHour:Number($('#dg-hour').value),digestEmails:$('#dg-to').value.trim()}});}},'Save'),
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('sendDigestNow',{});}},'Send summary now')))]:null,
    h('div',{class:'sec'},h('h3',null,'Your workspaces')),wsSwitcher(),S.owner?dangerPanel():null,
    h('div',{class:'sec'},h('h3',null,'Alerts, calendar and sign in')),h('div',{class:'two'},alertsBlock(),calendarBlock()),
    twofaBlock()||emailBlock()?h('div',{class:'two',style:'margin-top:14px'},twofaBlock(),emailBlock()):null,
    h('div',{class:'sec'},h('h3',null,'This device'),h('button',{type:'button',onclick:openHelp},'Help and support')),
    h('div',{class:'acts'},h('button',{class:'btn ghost sm',type:'button',onclick:signOut},'Sign out'),
      V.allOut?[h('button',{class:'btn danger sm',type:'button',onclick:function(e){signOutAll(e.target);}},'Yes, sign out on every device'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.allOut=false;render();}},'Cancel')]
        :h('button',{class:'btn ghost sm',type:'button',onclick:function(){V.allOut=true;render();}},'Sign out everywhere'),installBtn(),alertBtn()),
    h('p',{class:'note',style:'margin:8px 0 0',text:V.allOut?'Every phone and computer signed in to your account, this one too, must sign in again. Phone alerts stop until you switch them back on.':BRAND+' version '+APP_VERSION})];}

/* ---------- render ---------- */
var VIEWS={home:viewHome,tasks:viewTasks,cal:viewCal,stats:viewStats,more:viewMore,guides:viewGuides,admin:viewAdmin,meet:viewMeet,archive:viewArchive};
function keep(fn){var a=document.activeElement,id=a&&a.id,ss,se;try{ss=a.selectionStart;se=a.selectionEnd;}catch(e){}
  fn();if(id&&document.activeElement.id!==id){var n=document.getElementById(id);if(n){n.focus();try{if(ss!=null)n.setSelectionRange(ss,se);}catch(e){}}}}
function render(){if(!S||FULL)return;if(V.tab==='more'&&!S.owner)V.tab='home';if(V.tab==='admin'&&!S.admin)V.tab='home';keep(function(){
  var app=$('#app'),parts=[];(function f(a){a.forEach(function(x){if(Array.isArray(x))f(x);else if(x!=null&&x!==false)parts.push(x);});})(VIEWS[V.tab]());
  var sl=[].map.call(document.querySelectorAll('#app .chips'),function(c){return c.scrollLeft;});
  if(S.workspace&&S.workspace.active===false)parts.splice(1,0,h('div',{class:'banner ro',role:'status'},S.owner?['Your free trial or plan has ended, so this workspace is read only.',h('button',{class:'btn sm',type:'button',onclick:function(){V.tab='more';render();setTimeout(function(){var b=$('#billing');if(b)b.scrollIntoView({behavior:'smooth'});},50);}},'Choose a plan')]:'This workspace is read only until its owner renews the plan. You can still export what you can see from your account.'));
  var us=S.owner&&S.workspace&&S.workspace.usage;
  if(us&&us.seats.over&&V.tab!=='more')parts.splice(1,0,h('div',{class:'banner ro',role:'status'},'You have '+us.seats.used+' people on a plan for '+us.seats.limit+'. Everyone keeps working, but nobody new can be added.',
    h('button',{class:'btn sm',type:'button',onclick:function(){V.tab='more';render();setTimeout(function(){var b=$('#billing');if(b)b.scrollIntoView({behavior:'smooth'});},50);}},'See the plan')));
  if(offline)parts.splice(1,0,h('div',{class:'banner off',role:'status'},ill('offline','off-ill'),Q.length?'You are offline. '+Q.length+(Q.length===1?' change is':' changes are')+' saved on this device and will be sent when you reconnect.':'You are offline. Showing the last saved view. New changes will be sent when you reconnect.'));
  app.replaceChildren.apply(app,parts.filter(Boolean));
  [].forEach.call(document.querySelectorAll('#app .chips'),function(c,i){if(sl[i])c.scrollLeft=sl[i];});
  var nav=$('#nav');nav.hidden=false;
  var tab=function(k,label,cls){return h('button',{class:cls,type:'button','aria-label':label,'aria-current':V.tab===k||(k==='tasks'&&(V.tab==='guides'||V.tab==='archive'))||(k==='more'&&V.tab==='admin')||(k==='cal'&&V.tab==='meet')?'page':null,html:I[k==='stats'?'chart':k==='more'?'cog':k],onclick:function(){V.tab=k;render();window.scrollTo(0,0);}},h('span',{class:'lb',text:label}));};
  var items=[h('div',{class:'brand'},h('span',{class:'logo',html:LOGO}),h('span',{class:'bn'},h('span',{text:BRAND}),h('br'),h('em',{text:S.workspace&&S.workspace.name||''}))),tab('home','Home'),tab('tasks','Tasks'),
    h('button',{class:'fab',type:'button','aria-label':'Add task',html:I.plus,onclick:function(){openTask(null,V.tab==='cal'?{due:V.cal}:{});}},h('span',{class:'lb'},'New task')),
    tab('cal','Calendar'),tab('stats','Insights')];
  if(S.owner)items.push(tab('more','Settings','only-d'));
  nav.replaceChildren.apply(nav,items);renderFocus();tick();});}

/* ---------- sheets (modals) ---------- */
function closeSheet(){if(VREC)recStop(true);if(REC){try{REC.stop();}catch(e){}}M=null;$('#ov').hidden=true;document.body.style.overflow='';}
$('#ov').addEventListener('click',function(e){if(e.target.id==='ov'&&M&&!M.force)closeSheet();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&M&&!M.force)closeSheet();});
function head(title){return h('div',{class:'shh'},h('h2',{text:title}),M.force?null:h('button',{class:'x',type:'button','aria-label':'Close',html:I.x,onclick:closeSheet}));}
function fld(label,ctl,full){return h('label',{class:'f'+(full?' full':'')},label,ctl);}
function bind(obj,key){return function(e){obj[key]=e.target.value;};}

function openTask(id,preset){var t=id?S.tasks.find(function(x){return x.id===id;}):null,d={};
  if(t){FIELDS.forEach(function(k){d[k]=k==='checklist'?t.checklist.map(function(c){return Object.assign({},c);}):t[k];});
    if(forMe(t))send('seen',{id:id},true);}
  else d=Object.assign({title:'',subjectId:V.subject!=='all'?V.subject:((liveSubjects()[0]||{}).id||''),details:'',due:'',start:'',end:'',priority:'normal',status:'new',waitingOn:'',
    assignee:store.get('hv-last-who')||'',repeat:'none',checklist:[],private:false,needsApproval:false},preset||{});
  if(d.assignee&&!person(d.assignee))d.assignee='';
  if(t&&newMentions(t)){markMentions(t);setTimeout(render,0);}
  M={kind:'task',id:id||null,d:d,multi:false,tpl:false,tplId:(S.templates[0]||{}).id||'',bulk:'',note:'',step:'',del:false,link:'',back:''};$('#ov').hidden=false;renderSheet();
  if(!id){var f=$('#t-title');if(f)f.focus();}}
function renderTask(){var d=M.d,t=M.id?S.tasks.find(function(x){return x.id===M.id;}):null,isNew=!M.id;
  if(M.id&&!t){closeSheet();return [];}
  var live=function(patch){Object.assign(d,patch);if(t)send('saveTask',{task:Object.assign({id:t.id},patch)},true);else renderSheet();};
  var out=[head(isNew?'New task':'Task')];
  if(t){var dl=deadline(t),zn=zoneName(S.settings.deadlineTz),when=dl?(function(){var o=tzParts(S.settings.deadlineTz,dl);return o.weekday+' '+(+o.day)+' '+MON[o.month-1]+', '+o.hour+':'+o.minute+' '+zn+' time';})():'';
    if(!open(t))out.push(h('div',{class:'cd done'},h('span',{class:'cdl'},'Completed'),h('strong',{text:t.doneAt?stamp(t.doneAt):'Done'})));
    else if(!dl)out.push(h('div',{class:'cd none'},h('span',{class:'cdl'},'No deadline'),h('strong',null,'Set a due date to start the countdown')));
    else out.push(h('div',{class:'cd'+(dl<Date.now()?' over':''),'data-dl':String(dl),role:'timer'},h('span',{class:'cdl',text:dl<Date.now()?'Overdue by':'Time left'}),
      h('div',{class:'cdn'},['days','hrs','min','sec'].map(function(u){return h('span',null,h('b',null,'00'),h('i',null,u));})),h('small',{text:'Due '+when})));}
  if(t&&t.status==='review'){var mineToSign=toSign(t);out.push(h('div',{class:'panel rv'},ill('sign_off','rv-ill'),h('strong',{text:mineToSign?'Ready for your sign off':'Awaiting sign off from '+pName(t.createdBy)}),
      mineToSign?[h('p',{class:'note',style:'margin:2px 0 8px',text:pName(t.assignee)+' has marked this finished. Sign it off, or send it back with a note.'}),
        h('input',{class:'in',id:'t-back',maxlength:1000,placeholder:'Note if sending back, optional','aria-label':'Note for sending back',value:M.back,oninput:bind(M,'back')}),
        h('div',{class:'acts',style:'margin-top:10px'},h('button',{class:'btn sm',type:'button',onclick:function(){d.status='done';send('saveTask',{task:{id:t.id,status:'done'}},true);toast('Signed off');}},'Sign off'),
          h('button',{class:'btn ghost sm',type:'button',onclick:function(){var v=M.back.trim();M.back='';d.status='in_progress';send('sendBack',{id:t.id,text:v},true);toast('Sent back to '+pName(t.assignee));}},'Send back'))]
      :h('p',{class:'note',style:'margin:2px 0 0'},'It counts as done once it is signed off.')));}
  if(isNew)out.push(h('div',{class:'seg'},[['One task','one'],['Several','many'],['Template','tpl']].concat(S.features.ai?[['From text','ai']]:[]).map(function(o){var cur=M.ai?'ai':M.tpl?'tpl':M.multi?'many':'one';return h('button',{type:'button','aria-pressed':String(cur===o[1]),onclick:function(){M.ai=o[1]==='ai';M.multi=o[1]!=='one'&&!M.ai;M.tpl=o[1]==='tpl';renderSheet();}},o[0]);})));
  if(isNew&&M.ai){out.push(aiBlock());return out;}
  if(M.tpl){var tp=S.templates.find(function(x){return x.id===M.tplId;})||S.templates[0];
    out.push(S.templates.length?[fld('Template',h('select',{class:'in',id:'t-tpl',value:tp.id,onchange:function(e){M.tplId=e.target.value;renderSheet();}},S.templates.map(function(x){return h('option',{value:x.id,text:x.name});}))),
      h('div',{class:'panel'},h('strong',null,'This will add'),tplItems(tp,d.due).map(function(it){return h('div',{class:'cl'},h('span',{text:it.title}),h('small',{class:'note',text:it.due?short(it.due):'No date'}));}),
        h('p',{class:'note',style:'margin:8px 0 0'},'Set the due date below as the start date. Steps marked with a plus number fall that many days later.'))]
      :h('p',{class:'note'},'No templates yet. The owner can add them under Settings.'));}
  else if(M.multi)out.push(h('textarea',{class:'in',id:'t-bulk',rows:6,placeholder:'One task per line. Paste a list straight from a message.',value:M.bulk,oninput:bind(M,'bulk')}));
  else out.push(h('input',{class:'title-in',id:'t-title',maxlength:300,placeholder:'What needs doing?','aria-label':'Task title',value:d.title,oninput:bind(d,'title')}));
  if(!isNew)out.push(h('div',{class:'seg'},STAT.map(function(s){return h('button',{type:'button','aria-pressed':String(d.status===s[0]),onclick:function(){live({status:s[0]});var nt=S.tasks.find(function(x){return x.id===M.id;});if(nt&&nt.status!==d.status){d.status=nt.status;renderSheet();if(nt.status==='review')toast('Sent to '+pName(nt.createdBy)+' for sign off.');}}},s[1]);})));
  if(d.status==='waiting')out.push(h('div',{class:'addrow',style:'margin-top:0'},h('input',{class:'in',id:'t-wait',maxlength:200,placeholder:'Waiting on whom or what?','aria-label':'Waiting on',value:d.waitingOn,oninput:bind(d,'waitingOn')}),
    t?h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('saveTask',{task:{id:t.id,waitingOn:d.waitingOn}},true);toast('Saved');}},'Save'):null));
  out.push(h('div',{class:'frow'},
    fld('Client',h('select',{class:'in',id:'t-subject',value:d.subjectId,onchange:function(e){d.subjectId=e.target.value;renderSheet();}},liveSubjects().concat(subj(d.subjectId)&&subj(d.subjectId).archived?[subj(d.subjectId)]:[]).map(function(s){return h('option',{value:s.id,text:s.name});}),h('option',{value:'',text:'General'}))),
    fld('Assigned to',[h('select',{class:'in',id:'t-who',disabled:d.private,value:d.private?me:d.assignee,onchange:function(e){d.assignee=e.target.value;renderSheet();}},h('option',{value:'',text:'Nobody yet'}),S.people.map(function(p){return h('option',{value:p.id,text:p.name+(p.id===me?' (me)':'')});})),
      (function(){var ap=person(d.private?me:d.assignee);return ap&&ap.id!==me&&ap.tz?h('span',{class:'their',style:'margin:2px 0 0',text:'For '+ap.name.split(' ')[0]+' it is '+theirTime(ap)}):null;})()]),
    fld(M.tpl?'Start date':'Due date',h('input',{class:'in',id:'t-due',type:'date',value:d.due,onchange:function(e){d.due=e.target.value;if(M.tpl)renderSheet();}})),
    fld('Priority',h('select',{class:'in',id:'t-pri',value:d.priority,onchange:bind(d,'priority')},[['normal','Normal'],['high','High'],['low','Low']].map(function(o){return h('option',{value:o[0],text:o[1]});}))),
    fld('Start time, optional',h('input',{class:'in',id:'t-start',type:'time',value:d.start,onchange:bind(d,'start')})),
    fld('End time, optional',h('input',{class:'in',id:'t-end',type:'time',value:d.end,onchange:bind(d,'end')})),
    fld('Repeats',h('select',{class:'in',id:'t-rep',value:d.repeat,onchange:bind(d,'repeat')},[['none','Does not repeat'],['daily','Every day'],['weekdays','Every weekday'],['weekly','Every week'],['monthly','Every month']].map(function(o){return h('option',{value:o[0],text:o[1]});})),true),
    M.multi?null:fld('Details',h('textarea',{class:'in',id:'t-details',rows:3,maxlength:5000,placeholder:'Context, links, what done looks like',value:d.details,oninput:bind(d,'details')}),true)));
  out.push(moveTimeAsk(t,d));
  if((isNew||t.createdBy===me)&&!d.private)out.push(h('label',{class:'switch'},h('input',{type:'checkbox',id:'t-appr',checked:d.needsApproval,onchange:function(e){live({needsApproval:e.target.checked});}}),'Needs my sign off before it counts as done.'));
  if((isNew||t.createdBy===me)&&(canPriv()||d.private))out.push(h('label',{class:'switch'},h('input',{type:'checkbox',id:'t-priv',checked:d.private,onchange:function(e){var on=e.target.checked;live(on?{private:true,assignee:me,needsApproval:false}:{private:false});if(t)renderSheet();}}),'Private. Only I can see this task.'));
  if(!M.multi){var addStep=function(){var v=M.step.trim();if(!v)return;M.step='';live({checklist:d.checklist.concat([{id:uid().slice(-6),text:v,done:false}])});if(!t)renderSheet();var f=$('#t-step');if(f)f.focus();};
    out.push(h('div',{class:'panel'},h('strong',null,'Steps'),d.checklist.length?null:h('p',{class:'note',style:'margin:4px 0 0'},'Break the task into steps you can tick off.'),
      d.checklist.map(function(c){return h('div',{class:'cl'+(c.done?' on':'')},
        h('button',{class:'ck'+(c.done?' on':''),type:'button','aria-label':(c.done?'Untick: ':'Tick: ')+c.text,html:I.check,onclick:function(){live({checklist:d.checklist.map(function(x){return x.id===c.id?{id:x.id,text:x.text,done:!x.done}:x;})});}}),
        h('span',{text:c.text}),h('button',{class:'rm',type:'button','aria-label':'Remove step: '+c.text,html:I.x,onclick:function(){live({checklist:d.checklist.filter(function(x){return x.id!==c.id;})});}}));}),
      h('div',{class:'addrow'},h('input',{class:'in',id:'t-step',maxlength:300,placeholder:'Add a step','aria-label':'New step',value:M.step,oninput:bind(M,'step'),onkeydown:function(e){if(e.key==='Enter'){e.preventDefault();addStep();}}}),
        h('button',{class:'btn plum sm',type:'button',onclick:addStep},'Add'))));}
  if(!M.multi&&!M.tpl&&(isNew||open(t)))out.push(startPanel(d,t,live));
  if(!M.multi&&!M.tpl&&(S.guides||[]).length){var gopts=S.guides.filter(function(g){return !g.subjectId||g.subjectId===d.subjectId||g.id===d.guideId;});
    out.push(h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},h('strong',null,'Guide'),
      h('div',{class:'addrow',style:'margin:0'},h('select',{class:'in',id:'t-guide','aria-label':'Guide for this task',value:d.guideId||'',onchange:function(e){live({guideId:e.target.value});}},h('option',{value:'',text:'No guide'}),gopts.map(function(g){return h('option',{value:g.id,text:g.title});})),
        d.guideId?h('button',{class:'btn ghost sm',type:'button',onclick:function(){openGuide(d.guideId);}},'Open guide'):null)));}
  if(t&&t.meetingId){var tm=(S.meetings||[]).find(function(x){return x.id===t.meetingId;});if(tm)out.push(h('div',{class:'panel',style:'display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap'},h('div',null,h('strong',null,'From a meeting'),h('br'),h('small',{class:'note',text:tm.title+', '+mWhen(tm)})),h('button',{class:'btn ghost sm',type:'button',onclick:function(){openMeet(tm.id);}},'Open the meeting')));}
  out.push(h('button',{class:'btn wide',type:'button',onclick:saveTask},isNew?(M.multi?'Add these tasks':'Add task'):'Save changes'));
  if(t){var run=running(),mineRun=run&&run.t.id===t.id,tot=spent(t),who={};t.time.forEach(function(e){who[e.by]=1;});
    out.push(h('div',{class:'panel'},h('strong',null,'Time'),
      h('div',{class:'tm'},h('div',null,h('b',{class:'tmd',text:mineRun?'':dur(tot),'data-run':mineRun?String(run.e.start):null,'data-base':mineRun?String(spent(t)-(Date.now()-run.e.start)):null}),h('small',{text:mineRun?'Timer running':'Tracked on this task'})),
        mineRun?h('button',{class:'btn danger sm',type:'button',onclick:function(){send('timerStop',{id:t.id},true);}},'Stop timer'):h('button',{class:'btn plum sm',type:'button',onclick:function(){send('timerStart',{id:t.id},true);}},'Start timer')),
      S.owner||t.assignee===me||t.createdBy===me?h('div',{class:'acts',style:'margin-top:10px'},[15,30,60].map(function(m){return h('button',{class:'btn ghost sm',type:'button',onclick:function(){send('addTime',{id:t.id,minutes:m},true);toast('Added '+(m===60?'1 hour':m+' minutes'));}},'+ '+(m===60?'1 hr':m+' min'));})):null,
      Object.keys(who).length>1?h('p',{class:'note',style:'margin:8px 0 0',text:Object.keys(who).map(function(id){return pName(id)+' '+dur(spent(t,id));}).join(' · ')}):null));
    out.push(h('div',{class:'panel'},h('strong',null,'Files and links'),
      t.files.length?t.files.map(function(f){return h('div',{class:'cl'},f.uploading?h('span',{text:f.name+' (uploading)'}):h('a',{href:f.url,target:'_blank',rel:'noopener noreferrer',class:'fl',text:f.name}),
        h('small',{class:'note',text:f.link?'Link':f.size?(f.size>1048576?(f.size/1048576).toFixed(1)+' MB':Math.max(1,Math.round(f.size/1024))+' KB'):''}),
        f.uploading||!(S.owner||t.createdBy===me||f.by===me)?null:h('button',{class:'rm',type:'button','aria-label':'Remove '+f.name,html:I.x,onclick:function(){send('removeFile',{id:t.id,key:f.id||f.url},true);}}));}):h('p',{class:'note',style:'margin:4px 0 0'},'Nothing attached yet.'),
      h('div',{class:'addrow'},h('input',{class:'in',id:'t-link',type:'url',maxlength:1000,placeholder:'Paste a link','aria-label':'Link to add',value:M.link,oninput:bind(M,'link')}),
        h('button',{class:'btn plum sm',type:'button',onclick:function(){var v=M.link.trim();if(!/^https?:\/\/\S+$/.test(v)){toast('Paste a full link that starts with https://');return;}M.link='';send('addLink',{id:t.id,url:v,name:v.replace(/^https?:\/\/(www\.)?/,'').slice(0,60)},true);}},'Add link')),
      h('label',{class:'btn ghost sm filebtn'},'Attach a file',h('input',{type:'file',id:'t-file',hidden:true,onchange:function(e){var f=e.target.files[0];if(f)attachFile(t.id,f);e.target.value='';}})),
      h('p',{class:'note',style:'margin:8px 0 0'},'Files up to 10 MB are kept in private storage. Only people who can see this task can open them.')));
    var ups=t.updates.slice().reverse(),others=S.people.filter(function(x){return x.id!==me;});
    out.push(h('div',{class:'panel'},h('strong',null,'Progress updates'),
      h('div',{class:'addrow',style:'margin-bottom:12px'},h('textarea',{class:'in',id:'t-note',rows:2,maxlength:2000,placeholder:'Write a progress update','aria-label':'Progress update',value:M.note,oninput:bind(M,'note')}),
        h('button',{class:'btn plum sm',type:'button',style:'align-self:flex-end',onclick:function(){var v=M.note.trim();if(!v)return;M.note='';send('addUpdate',{id:t.id,text:v},true);toast('Update posted');}},'Post')),
      others.length?h('div',{class:'acts',style:'margin:-4px 0 12px'},h('small',{class:'note'},'Mention'),others.map(function(x){return h('button',{class:'gl',type:'button',onclick:function(){M.note=(M.note&&!/\s$/.test(M.note)?M.note+' ':M.note)+'@'+x.name.split(/\s+/)[0]+' ';renderSheet();var f=$('#t-note');if(f){f.focus();try{f.setSelectionRange(f.value.length,f.value.length);}catch(e){}}}},'@'+x.name.split(/\s+/)[0]);})):null,
      ups.length?ups.map(function(u){return h('div',{class:'up'+(u.question?' q':(u.mentions||[]).indexOf(me)>=0?' me':'')},u.question?h('span',{class:'qt',text:(u.kind==='why'?'Asked why, to ':'Question for ')+(u.to===me?'you':pName(u.to))+(u.answeredAt?' · answered':' · waiting for an answer')}):null,h('p',{text:u.text}),h('small',{text:pName(u.by)+' · '+stamp(u.at)+((u.mentions||[]).indexOf(me)>=0?' · mentioned you':'')}));}):h('p',{class:'note',style:'margin:0'},'No updates yet.')));
    out.push(h('p',{class:'note',style:'margin:0',text:'Added by '+pName(t.createdBy)+' on '+stamp(t.createdAt)+(t.assignee&&person(t.assignee)&&t.createdBy!==t.assignee?(t.seenAt?'. Seen by '+pName(t.assignee)+' on '+stamp(t.seenAt):'. Not yet seen by '+pName(t.assignee)):'')+(t.approvedBy?'. Signed off by '+pName(t.approvedBy)+' on '+stamp(t.approvedAt):'')+'.'}));
    if(S.owner||t.createdBy===me)out.push(h('div',{class:'acts'},M.del?[h('button',{class:'btn danger sm',type:'button',onclick:function(){var id=t.id;closeSheet();send('deleteTask',{id:id},true);toast('Task deleted. You can restore it from the bin for 30 days');}},'Confirm delete'),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=false;renderSheet();}},'Keep it')]:h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=true;renderSheet();}},'Delete task')));}
  return out;}
/* Getting started: a tiny first step, an estimate, a start by day, and a plan for when and where */
var ESTS=[[0,'No estimate'],[15,'15 minutes'],[30,'30 minutes'],[45,'45 minutes'],[60,'1 hour'],[90,'1.5 hours'],[120,'2 hours'],[180,'3 hours'],[240,'4 hours'],[360,'6 hours'],[480,'1 day'],[960,'2 days'],[1440,'3 days'],[2400,'1 week']];
function startPanel(d,t,live){var pt=S.myPatterns||{},mineT=(d.private?me:d.assignee)===me,mult=mineT&&pt.multiplier>1.05?pt.multiplier:0,td=today();
  var auto=t?t.startByAuto:'',sb=d.startBy||auto,cps=[];
  if(t&&sb&&d.due&&diff(d.due)-diff(sb)>=6){var a=parse(sb).getTime(),b=parse(d.due).getTime();[[.25,'a quarter'],[.5,'half'],[.75,'three quarters']].forEach(function(x){cps.push(x[1]+' by '+short(ymd(new Date(a+(b-a)*x[0]))));});}
  var ests=ESTS.slice();if(d.estimateMin&&!ests.some(function(e){return e[0]===+d.estimateMin;}))ests.push([+d.estimateMin,dur(d.estimateMin*6e4)]);
  return h('div',{class:'panel'},h('strong',null,'Getting started'),
    h('p',{class:'note',style:'margin:2px 0 10px'},'The smaller the first step, the easier it is to begin.'),
    h('div',{class:'frow'},
      fld('First step',h('input',{class:'in',id:'t-first',maxlength:200,placeholder:'For example: open the file and write the heading',value:d.firstStep||'',oninput:t?null:bind(d,'firstStep'),onchange:t?function(e){live({firstStep:e.target.value.trim()});}:null}),true),
      fld('How long will it take?',h('select',{class:'in',id:'t-est',value:String(d.estimateMin||0),onchange:function(e){live({estimateMin:+e.target.value});if(t)return;renderSheet();}},ests.map(function(e){return h('option',{value:String(e[0]),text:e[1]});}))),
      fld('Start by',h('input',{class:'in',id:'t-startby',type:'date',value:d.startBy||'',max:d.due||null,onchange:function(e){live({startBy:e.target.value});}})),
      fld('When will you start?',h('input',{class:'in',id:'t-plan',type:'datetime-local',value:toLocalInput(d.planAt),onchange:function(e){live({planAt:e.target.value?new Date(e.target.value).getTime():0});}})),
      fld('Where?',h('input',{class:'in',id:'t-where',maxlength:80,placeholder:'For example: my desk, after standup',value:d.planWhere||'',oninput:t?null:bind(d,'planWhere'),onchange:t?function(e){live({planWhere:e.target.value.trim()});}:null})),
      fld('Good enough looks like',h('input',{class:'in',id:'t-ge',maxlength:300,placeholder:'When can you call it done?',value:d.goodEnough||'',oninput:t?null:bind(d,'goodEnough'),onchange:t?function(e){live({goodEnough:e.target.value.trim()});}:null}),true)),
    mult&&d.estimateMin?h('p',{class:'note',style:'margin:8px 0 0',text:'Your tasks usually take about '+mult+' times your guess, so plan for about '+dur(d.estimateMin*mult*6e4)+'.'}):null,
    !d.startBy&&auto&&!late(t)?h('p',{class:'note',style:'margin:8px 0 0',text:(auto<=td?'Start today':'Start by '+DAY[parse(auto).getDay()]+' '+short(auto))+' to finish without a rush.'}):null,
    cps.length?h('p',{class:'note',style:'margin:6px 0 0',text:'Checkpoints: '+cps.join(', ')+'.'}):null,
    d.planAt?h('p',{class:'note',style:'margin:6px 0 0'},'You will get a reminder on this device at that time'+(alertsOn()?'.':'. Turn on alerts in your account to get it even when the app is closed.')):null,
    t?h('div',{class:'acts',style:'margin-top:12px'},h('small',{class:'note'},'Focus'),[10,25,50].map(function(m){return h('button',{class:'btn sm'+(m===10?'':' ghost'),type:'button',onclick:function(){startFocus(t.id,m);}},m+' min');}),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){openStuck(t.id);}},"I'm stuck"),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){openStuck(t.id,'too_big');}},'Break it down')):null);}
function tplItems(tp,start){return String(tp.lines||'').split('\n').map(function(l){var m=l.trim().match(/^(.*?)(?:\s*\+\s*(\d+)\s*d?(?:ays?)?)?$/);
  return m&&m[1].trim()?{title:m[1].trim(),due:start?addDays(start,+(m[2]||0)):''}:null;}).filter(Boolean).slice(0,50);}
/* Files go straight from this device to private storage: the server hands out a one time upload link,
   the file is sent there, then the task records it. Earlier changes are saved first so the task exists. */
function whenSaved(){return new Promise(function(ok,no){var t0=Date.now();(function w(){if(!Q.length)return ok();if(Date.now()-t0>30000)return no(new Error('earlier changes are still saving'));pump();setTimeout(w,300);})();});}
function attachFile(id,f){if(f.size>10*1048576){toast('Files can be up to 10 MB.');return;}if(navigator.onLine===false){toast('You are offline. Files can only be added while online.');return;}
  uploads++;toast('Uploading '+f.name);var mime=f.type||'application/octet-stream';
  whenSaved().then(function(){return server('uploadUrl',{id:id,name:f.name,size:f.size,mime:mime});})
    .then(function(res){if(!res.upload||!res.upload.url)throw new Error('no upload link came back');
      return fetch(res.upload.url,{method:'PUT',headers:Object.assign({'Content-Type':mime},res.upload.headers||{}),body:f}).then(function(r){
        if(!r.ok)throw new Error('the upload failed ('+r.status+')');
        send('attach',{id:id,path:res.upload.path,name:f.name,size:f.size,mime:mime});});})
    .catch(function(e){if(!lost(e))toast('Could not attach '+f.name+': '+e.message+'.');})
    .then(function(){uploads--;});}
function saveTask(){var d=M.d;
  if(d.start&&d.end&&d.end<d.start){toast('The end time is before the start time.');return;}
  if(d.assignee)store.set('hv-last-who',d.assignee);
  if(!M.id&&M.tpl){var tp=S.templates.find(function(x){return x.id===M.tplId;})||S.templates[0];if(!tp){toast('There is no template to use yet.');return;}
    var items=tplItems(tp,d.due).map(function(it){return {title:it.title,due:it.due,id:uid()};});
    var b2={private:d.private,needsApproval:d.needsApproval,subjectId:d.subjectId,assignee:d.private?me:d.assignee,start:'',end:'',priority:d.priority,repeat:'none',status:'new'};
    closeSheet();send('bulkAdd',{items:items,base:b2},true);toast(items.length+' tasks added from '+tp.name);return;}
  if(!M.id&&M.multi){var titles=M.bulk.split('\n').map(function(s){return s.replace(/^\s*(?:[*•\-–]|\d+[.)])\s*/,'').trim();}).filter(Boolean).slice(0,50);
    if(!titles.length){toast('Type at least one task, one per line.');return;}
    var base={private:d.private,needsApproval:d.needsApproval,subjectId:d.subjectId,assignee:d.private?me:d.assignee,due:d.due,start:d.start,end:d.end,priority:d.priority,repeat:d.repeat,status:'new'};
    closeSheet();send('bulkAdd',{titles:titles,ids:titles.map(uid),base:base},true);toast(titles.length+' tasks added');return;}
  var title=d.title.trim();if(!title){toast('Give the task a title first.');var f=$('#t-title');if(f)f.focus();return;}
  var task=Object.assign({},d,{title:title,id:M.id||uid()}),isNew=!M.id,old=M.id?S.tasks.find(function(x){return x.id===M.id;}):null,moved=!!old&&old.subjectId!==d.subjectId,all=!!M.moveAll;
  closeSheet();send('saveTask',Object.assign({task:task},moved&&all?{moveTime:'all'}:{}),!moved);if(!moved)toast(isNew?'Task added':'Task saved');}
/* the owner moving a task to another client: sent and approved time stays with the old client unless they choose to move it */
function moveTimeAsk(t,d){if(!S.owner||!t||t.subjectId===d.subjectId)return null;
  var n=(S.time||[]).filter(function(e){return e.taskId===t.id&&!e.invoiceId&&(e.status==='submitted'||e.status==='approved');}).length;if(!n)return null;
  return h('label',{class:'switch'},h('input',{type:'checkbox',id:'t-moveall',checked:!!M.moveAll,onchange:function(e){M.moveAll=e.target.checked;}}),'Also move '+n+' sent or approved time '+(n===1?'entry':'entries')+' to the new client');}

function openSubject(id){var s=id?subj(id):null;M={kind:'subject',id:id||null,d:s?Object.assign({private:!!s.privateTo},s):{id:uid(),name:'',kind:'Client',color:COLORS[S.subjects.length%COLORS.length],archived:false,private:false}};$('#ov').hidden=false;renderSheet();var f=$('#s-name');if(f&&!id)f.focus();}
function renderSubject(){var d=M.d;
  if(M.id&&!S.owner&&!d.privateTo)return [head(d.name),h('p',{class:'note',style:'margin:0',text:kindOf(d)+(d.archived?', archived':'')+'. '+S.tasks.filter(function(t){return t.subjectId===d.id&&open(t);}).length+' open tasks.'}),
    h('p',{class:'panel',style:'margin:0'},'Only the owner can rename, recolour or archive a shared client. You can still add tasks to it and make your own private clients.'),
    h('button',{class:'btn wide',type:'button',onclick:function(){var id=d.id;closeSheet();goTasks('open',id);}},'See its tasks')];
  return [head(M.id?'Client':'New client'),
  h('input',{class:'title-in',id:'s-name',maxlength:80,placeholder:'Client name, or an internal area','aria-label':'Client name',value:d.name,oninput:bind(d,'name')}),
  d.privateTo||d.private?h('p',{class:'note',style:'margin:0',text:'Type: Private. Only you see it.'}):fld('Type',h('select',{class:'in',id:'s-kind',value:kindOf(d),onchange:bind(d,'kind')},[['Client','Client, an outside customer'],['Internal','Internal, your own company\'s work']].map(function(k){return h('option',{value:k[0],text:k[1]});}))),
  h('div',{class:'lbl'},'Colour'),h('div',{class:'sw'},COLORS.map(function(c){return h('button',{type:'button',style:'background:'+c,'aria-label':'Colour '+c,'aria-pressed':String(d.color===c),onclick:function(){d.color=c;renderSheet();}});})),
  ((!M.id&&canPriv())||(M.id&&d.privateTo===me))?h('label',{class:'switch'},h('input',{type:'checkbox',id:'s-priv',checked:d.private,onchange:function(e){d.private=e.target.checked;}}),'Private: only I see this client and its tasks.'):null,
  M.id?h('label',{class:'switch'},h('input',{type:'checkbox',id:'s-arch',checked:d.archived,onchange:function(e){d.archived=e.target.checked;}}),'Archive this client. Its tasks are kept.'):null,
  S.owner&&!d.privateTo&&!d.private?h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},h('strong',null,'Billing'),
    h('div',{class:'frow'},fld('Hourly rate',h('input',{class:'in',id:'s-rate',type:'number',min:'0',step:'0.01',value:d.rate||'',oninput:function(e){d.rate=Number(e.target.value)||0;}})),
      fld('Currency',h('select',{class:'in',id:'s-cur',value:d.currency||S.settings.currency||'USD',onchange:bind(d,'currency')},CURS.map(function(c){return h('option',{value:c[0],text:c[1]});})))),
    h('div',{class:'frow'},fld('Rounding, per entry',h('select',{class:'in',id:'s-round',value:String(d.rounding||0),onchange:function(e){d.rounding=+e.target.value;}},ROUNDS.map(function(r){return h('option',{value:String(r[0]),text:r[1]});}))),
      fld('Retainer hours a month',h('input',{class:'in',id:'s-rh',type:'number',min:'0',step:'0.5',placeholder:'None',value:d.retainerHours||'',oninput:function(e){d.retainerHours=Number(e.target.value)||0;}})),
      fld('Retainer amount a month',h('input',{class:'in',id:'s-ra',type:'number',min:'0',step:'0.01',placeholder:'None',value:d.retainerAmount||'',oninput:function(e){d.retainerAmount=Number(e.target.value)||0;}}))),
    h('label',{class:'switch'},h('input',{type:'checkbox',id:'s-bdef',checked:billDefOf(d),onchange:function(e){d.billableDefault=e.target.checked;}}),'Time for this client is billable by default'),
    h('label',{class:'switch'},h('input',{type:'checkbox',id:'s-block',checked:!!d.retainerBlock,onchange:function(e){d.retainerBlock=e.target.checked;}}),'Stop billing at the retainer cap. You get an alert at 80% and 100%'),
    (function(){var b=(S.budgets||[]).find(function(x){return x.subjectId===d.id;});return b?budgetRow(b):null;})(),
    S.people.length?h('details',{class:'prates'},h('summary',null,'Rates per person'+(Object.keys(d.personRates||{}).length?' ('+Object.keys(d.personRates).length+' set)':'')),
      h('p',{class:'note',style:'margin:6px 0'},'Leave a rate empty to use the person\'s own bill rate, or else the hourly rate above.'),
      S.people.map(function(x){return h('div',{class:'prr'},h('span',{text:x.name}),h('input',{class:'in','aria-label':'Rate for '+x.name,type:'number',min:'0',step:'0.01',placeholder:x.billRate?String(x.billRate):String(d.rate||''),value:(d.personRates||{})[x.id]||'',
        oninput:function(e){d.personRates=Object.assign({},d.personRates||{});var v=Number(e.target.value)||0;if(v>0)d.personRates[x.id]=v;else delete d.personRates[x.id];}}));})):null,
    fld('Client email, for invoices and reports',h('input',{class:'in',id:'s-mail',type:'email',maxlength:120,value:d.clientEmail||'',oninput:bind(d,'clientEmail')})),
    h('label',{class:'switch'},h('input',{type:'checkbox',id:'s-week',checked:!!d.weeklyReport,onchange:function(e){d.weeklyReport=e.target.checked;}}),'Email this client a weekly report every Friday'),
    h('label',{class:'switch'},h('input',{type:'checkbox',id:'s-daily',checked:!!d.dailySummary,onchange:function(e){d.dailySummary=e.target.checked;renderSheet();}}),'Send this client a daily summary'),
    d.dailySummary?h('p',{class:'note',style:'margin:0',text:'Every day at '+pad(Number(S.settings.digestHour)||18)+':00, only this client\'s work: no private tasks, hidden people or team notes. Your team\'s daily summary carries on as before.'+(d.clientEmail?'':' Add the client email below.')}):null,
    M.id?h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){var id=M.id;closeSheet();V.tab='stats';V.ins='hours';V.tm=Object.assign(V.tm||{k:'month',from:'',to:'',open:{},all:false,wk:weekStart(today())},{sid:id});V.tm.open[id]=true;render();window.scrollTo(0,0);}},'See time'),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){var id=M.id;closeSheet();openBill(id,{});}},'Bill hours'),
      S.features.mail?h('button',{class:'btn ghost sm',type:'button',onclick:function(){if(!d.clientEmail){toast('Add the client email first.');return;}send('saveSubject',{subject:Object.assign({},d,{shareToken:undefined})},true);send('sendClientReport',{id:M.id});}},'Send this week\'s report now'):null,
      S.features.ai?h('button',{class:'btn ghost sm',type:'button',onclick:function(){var id=M.id;closeSheet();aiStandup(id);}},'Write summary with AI'):null):null):null,
  S.owner&&M.id&&!d.privateTo?h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px'},h('strong',null,'Client page'),
    h('p',{class:'note',style:'margin:0'},'A private link where this client sees progress on their work, comments, approves finished tasks and views invoices. No login needed. Private tasks never show.'),
    h('label',{class:'switch'},h('input',{type:'checkbox',id:'s-pts',checked:!!d.portalTimesheet,onchange:function(e){d.portalTimesheet=e.target.checked;}}),'Show a detailed timesheet on the page: date, first name, task and hours. Team only notes stay hidden'),
    d.shareToken?[h('input',{class:'in',id:'s-link',readonly:true,value:portalLink(d.shareToken),onclick:function(e){e.target.select();}}),
      h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn sm',type:'button',onclick:function(){var v=portalLink(d.shareToken);(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(function(){toast('Link copied');},function(){var f=$('#s-link');f.select();toast('Selected. Copy it from here.');});}},'Copy link'),
        h('a',{class:'btn ghost sm',href:portalLink(d.shareToken),target:'_blank',rel:'noopener noreferrer'},'Open'),
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){var id=M.id;closeSheet();send('shareSubject',{id:id,revoke:true});}},'Turn off link'))]
      :h('button',{class:'btn ghost sm',type:'button',style:'align-self:flex-start',onclick:function(){var id=M.id;server('shareSubject',{id:id}).then(function(r){accept(r);render();var sb=subj(id);if(M&&M.kind==='subject'&&sb){M.d.shareToken=sb.shareToken;renderSheet();}toast('Client link ready');}).catch(function(e){if(!lost(e))toast(e.message+'.');});}},'Create client link')):null,
  h('button',{class:'btn wide',type:'button',onclick:function(){d.name=d.name.trim();if(!d.name){toast('Give the client a name.');return;}var s=Object.assign({},d);delete s.shareToken;closeSheet();send('saveSubject',{subject:s},true);toast('Client saved');}},'Save client')];}
function portalLink(tok){return appUrl()+'?client='+tok;}

function openPerson(id){var p=id?person(id):null;M={kind:'person',id:id||null,del:false,d:p?Object.assign({},p):{id:uid(),name:'',email:'',role:'',canPrivate:false,hidden:false,ownerSees:false}};$('#ov').hidden=false;renderSheet();var f=$('#p-name');if(f&&!id)f.focus();}
function renderPerson(){var d=M.d,w=S.workspace||{};
  if(!M.id&&w.people&&S.people.length>=w.people)return [head('New person'),h('p',{class:'note',style:'margin:0',text:'Your plan allows '+w.people+' people and all places are taken. Choose a larger plan under Plan and billing to add more.'}),
    h('button',{class:'btn wide',type:'button',onclick:function(){closeSheet();setTimeout(function(){var b=$('#billing');if(b)b.scrollIntoView({behavior:'smooth'});},50);}},'See plans')];
  return [head(M.id?'Person':'New person'),
  h('input',{class:'title-in',id:'p-name',maxlength:60,placeholder:'Name','aria-label':'Name',value:d.name,oninput:bind(d,'name')}),
  h('div',{class:'frow'},fld(d.joined?'Email, used to sign in':'Email, for the invitation',h('input',{class:'in',id:'p-email',type:'email',maxlength:120,value:d.email,disabled:!!d.joined||d.id===me,oninput:bind(d,'email')})),fld('Role, optional',h('input',{class:'in',id:'p-role',maxlength:40,placeholder:'Manager, Assistant',value:d.role,oninput:bind(d,'role')}))),
  h('div',{class:'frow'},fld('Work starts, their time',h('input',{class:'in',id:'p-ws',type:'time',value:d.workStart||'',oninput:bind(d,'workStart')})),fld('Work ends, their time',h('input',{class:'in',id:'p-we',type:'time',value:d.workEnd||'',oninput:bind(d,'workEnd')}))),
  S.owner?h('div',{class:'frow'},fld('Pay',h('select',{class:'in',id:'p-pt',value:d.payType||'',onchange:function(e){d.payType=e.target.value;renderSheet();}},[['','Not set'],['hourly','By the hour'],['monthly','Monthly salary']].map(function(o){return h('option',{value:o[0],text:o[1]});}))),
    d.payType?fld(d.payType==='hourly'?'Rate per hour':'Monthly salary',h('input',{class:'in',id:'p-rate',type:'number',min:'0',step:'0.01',value:d.payRate||'',oninput:function(e){d.payRate=Number(e.target.value)||0;}})):null,
    fld('Bill rate per hour, what clients pay',h('input',{class:'in',id:'p-bill',type:'number',min:'0',step:'0.01',placeholder:'Client rate',value:d.billRate||'',oninput:function(e){d.billRate=Number(e.target.value)||0;}})),
    d.payType?fld('Currency',h('select',{class:'in',id:'p-cur',value:d.payCurrency||S.settings.currency||'USD',onchange:bind(d,'payCurrency')},CURS.map(function(c){return h('option',{value:c[0],text:c[1]});}))):null,
    d.payType==='hourly'?fld('Overtime after, hours a week',h('input',{class:'in',id:'p-ot',type:'number',min:'0',max:'168',value:d.otAfter||40,oninput:function(e){d.otAfter=Number(e.target.value)||40;}})):null,
    d.payType==='hourly'?fld('Overtime pays',h('select',{class:'in',id:'p-otr',value:String(d.otRate||1.5),onchange:function(e){d.otRate=Number(e.target.value);}},[['1','Normal rate'],['1.5','Time and a half'],['2','Double time']].map(function(o){return h('option',{value:o[0],text:o[1]});}))):null):null,
  S.owner&&!d.waOn&&S.settings.waOn?fld('WhatsApp number, they turn alerts on themselves',h('input',{class:'in',id:'p-phone',type:'tel',placeholder:'+2348012345678',value:d.phone||'',oninput:bind(d,'phone')})):null,
  d.waOn?h('p',{class:'their',text:'WhatsApp alerts are on for '+(d.phone||'this person')+'.'}):null,
  d.tz?h('p',{class:'their',text:(d.id===me?'Your':d.name.split(' ')[0]+"'s")+' device is set to '+tzCity(d.tz)+' time. It is '+tIn(Date.now(),d.tz)+' there now.'}):h('p',{class:'their'},'Their time zone is picked up automatically the first time they open the app.'),
  d.id===me?h('p',{class:'note',style:'margin:0'},'As the owner you can always make tasks private.')
    :[d.joined?h('p',{class:'note',style:'margin:0'},'Joined. Their email is locked because it is how they sign in.')
      :d.inviteExpired?h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:8px'},h('strong',null,'Invite link'),h('p',{class:'note-warn',text:'Expired, send a new link. Invite links work for 14 days.'}),
        h('button',{class:'btn sm',style:'align-self:flex-start',type:'button',onclick:function(){var p=Object.assign({resendInvite:true},d),id=d.id;delete p.joined;delete p.inviteToken;delete p.inviteExpired;closeSheet();send('savePerson',{person:p});
          var t0=Date.now();(function w(){if(!Q.length){openPerson(id);return;}if(Date.now()-t0<8000)setTimeout(w,300);})();}},'Send a new link'))
      :d.inviteToken?h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:8px'},h('strong',null,'Invite link'),
        h('p',{class:'note',style:'margin:0'},'Send this link to '+(d.name||'them').split(' ')[0]+', for example on WhatsApp. It works once, for the first person who opens it and signs up.'),
        h('input',{class:'in',id:'p-link',readonly:true,value:appUrl()+'?invite='+d.inviteToken+(d.email?'&join='+encodeURIComponent(d.email):''),onclick:function(e){e.target.select();}}),
        h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn sm',type:'button',onclick:function(){var v=$('#p-link').value;(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(function(){toast('Invite link copied');},function(){$('#p-link').select();toast('Selected. Copy it from here.');});}},'Copy invite link'),
          h('a',{class:'btn ghost sm',href:'https://wa.me/?text='+encodeURIComponent('Hi '+(d.name||'').split(' ')[0]+', join our team on '+BRAND+': '+appUrl()+'?invite='+d.inviteToken),target:'_blank',rel:'noopener noreferrer'},'Share on WhatsApp')))
      :h('p',{class:'note',style:'margin:0'},'Save to create their invite link.'),
      h('label',{class:'switch'},h('input',{type:'checkbox',id:'p-priv',checked:!!d.canPrivate,onchange:function(e){d.canPrivate=e.target.checked;}}),'Can make tasks and clients private'),
      h('label',{class:'switch'},h('input',{type:'checkbox',id:'p-hide',checked:!!d.hidden,onchange:function(e){d.hidden=e.target.checked;if(!d.hidden)d.ownerSees=false;renderSheet();}}),'Hidden from others'),
      d.hidden?h('label',{class:'switch',style:'padding-left:30px'},h('input',{type:'checkbox',id:'p-sees',checked:!!d.ownerSees,onchange:function(e){d.ownerSees=e.target.checked;}}),'Let me see their tasks'):null,
      d.hidden?h('p',{class:'note',style:'margin:0'},'Nobody else sees this person or their tasks. Tasks you assign to them always stay visible to you.'):null],
  h('button',{class:'btn wide',type:'button',onclick:function(){d.name=d.name.trim();d.email=(d.email||'').trim();if(!d.name){toast('Add a name.');return;}
    if(d.email&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)){toast('That email address does not look right.');return;}
    var p=Object.assign({},d),isNew=!M.id;delete p.joined;delete p.inviteToken;delete p.inviteExpired;delete p.inviteAt;delete p.waVerify;closeSheet();send('savePerson',{person:p});if('hidden' in p)setTimeout(refresh,600);
    if(isNew){var t0=Date.now();(function w(){var x=person(p.id);if(x&&x.inviteToken&&!Q.length){openPerson(p.id);return;}if(Date.now()-t0<8000)setTimeout(w,300);})();}}},'Save person'),
  M.id&&d.id!==me?h('div',{class:'acts'},
    !d.joined?h('button',{class:'btn ghost sm',type:'button',onclick:function(){var p=Object.assign({resendInvite:true},d),id=d.id;delete p.joined;delete p.inviteToken;closeSheet();send('savePerson',{person:p});
      var t0=Date.now();(function w(){if(!Q.length){openPerson(id);return;}if(Date.now()-t0<8000)setTimeout(w,300);})();}},S.features.mail&&d.email?'New link and email again':'Make a new link'):null,
    M.del?[h('button',{class:'btn danger sm',type:'button',onclick:function(){var id=M.id;closeSheet();send('removePerson',{id:id});}},'Confirm removal'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=false;renderSheet();}},'Keep them')]
      :[h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=true;M.xfer=false;renderSheet();}},'Remove from workspace'),
        S.owner&&d.joined&&!M.xfer?h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.xfer=true;renderSheet();}},'Make owner'):null]):null,
  M.del?h('p',{class:'note',style:'margin:0'},'Their work stays in the workspace, shown as by a former member. They lose access straight away.'):null,
  M.xfer?h('div',{class:'panel dz',style:'display:flex;flex-direction:column;gap:10px'},h('strong',{text:'Make '+d.name+' the owner?'}),
    h('p',{style:'margin:0;font-size:14px',text:'They will manage people, settings, the plan and billing, and see every change. You stay in the workspace as a member.'+(xferPlan()?' Your plan for this workspace is cancelled at the end of the period'+(S.workspace.periodEnd?' ('+longDate(S.workspace.periodEnd)+')':'')+', so your card is not charged again; '+d.name.split(' ')[0]+' chooses their own plan before then. We email you both.':'')}),
    h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn danger sm',type:'button',disabled:!!M.busy,onclick:function(){var id=M.id;M.busy=true;renderSheet();
        server('transferOwnership',{id:id,cancelPlan:xferPlan()}).then(function(r){closeSheet();if(accept(r)){pickMe();V.tab='home';FULL=false;render();}toast(r.msg||'Done');})
          .catch(function(e){if(lost(e))return;M.busy=false;renderSheet();toast(e.message+'.');});}},M.busy?'Handing over…':'Yes, make them the owner'),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.xfer=false;renderSheet();}},'Cancel'))):null];}
function xferPlan(){var w=S.workspace||{},b=w.billing||{};return !!(b.subscription&&paidLive(w));}
function openTemplate(id){var t=id?S.templates.find(function(x){return x.id===id;}):null;M={kind:'tpl',id:id||null,del:false,d:t?{id:t.id,name:t.name,lines:t.lines}:{id:uid(),name:'',lines:''}};$('#ov').hidden=false;renderSheet();var f=$('#tp-name');if(f&&!id)f.focus();}
function renderTemplate(){var d=M.d;return [head(M.id?'Template':'New template'),
  h('input',{class:'title-in',id:'tp-name',maxlength:80,placeholder:'Template name, such as Month end close','aria-label':'Template name',value:d.name,oninput:bind(d,'name')}),
  fld('Steps, one per line',h('textarea',{class:'in',id:'tp-lines',rows:8,maxlength:4000,placeholder:'Collect statements\nReconcile bank accounts +2\nSend report +5',value:d.lines,oninput:bind(d,'lines')})),
  h('p',{class:'note',style:'margin:0'},'End a line with a plus and a number to make that step due that many days after the start date.'),
  h('button',{class:'btn wide',type:'button',onclick:function(){d.name=d.name.trim();d.lines=d.lines.trim();if(!d.name||!d.lines){toast('Add a name and at least one step.');return;}var t=Object.assign({},d);closeSheet();send('saveTemplate',{template:t},true);toast('Template saved');}},'Save template'),
  M.id?h('div',{class:'acts'},M.del?[h('button',{class:'btn danger sm',type:'button',onclick:function(){var id=M.id;closeSheet();send('deleteTemplate',{id:id},true);toast('Template deleted');}},'Confirm delete'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=false;renderSheet();}},'Keep it')]
    :h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.del=true;renderSheet();}},'Delete template')):null];}
/* this browser's push subscription, if it has one (never waits for a service worker that is not there, as in the demo) */
function pushSub(){try{if(!('serviceWorker' in navigator)||!navigator.serviceWorker.getRegistration)return Promise.resolve(null);
  return navigator.serviceWorker.getRegistration().then(function(r){return r&&r.pushManager?r.pushManager.getSubscription():null;}).catch(function(){return null;});}catch(e){return Promise.resolve(null);}}
/* Sign out on this device: phone alerts for this browser stop in every workspace (at most about 2 seconds), the browser
   drops its push subscription, then everything this app kept on the device is removed (see wipeDevice). */
function signOut(){endSession(false);}
function endSession(dropTrust){var done=false,fin=function(){if(done)return;done=true;wipeDevice(dropTrust);closeSheet();S=null;authScreen('in');};
  var t=setTimeout(fin,2500);
  pushSub().then(function(sub){var ep=(sub&&sub.endpoint)||pushEp||'';
      return Promise.all([ep&&sess&&navigator.onLine!==false?call('api',{action:'removePush',payload:{everywhere:true,endpoint:ep}}).catch(function(){}):null,
        sub?sub.unsubscribe().catch(function(){}):null]);})
    .catch(function(){}).then(function(){clearTimeout(t);fin();});}
function signOutAll(btn){busy(btn,true);call('api',{action:'signOutEverywhere'}).then(function(r){signedOut();closeSheet();authScreen('in');toast(r.message||'Signed out everywhere');})
  .catch(function(e){busy(btn,false);if(!lost(e))toast(e.message+'.');});}
/* install as an app */
var standalone=function(){return (window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||window.navigator.standalone===true;};
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();installEvt=e;});
window.addEventListener('online',function(){clearTimeout(pumpT);pumpT=null;if(S)refresh();});
window.addEventListener('beforeunload',function(e){if(uploads>0){e.preventDefault();e.returnValue='';}});
window.addEventListener('offline',function(){offline=true;if(S)render();});
function installBtn(wide){if(standalone())return null;return h('button',{class:'btn ghost'+(wide?'':' sm'),type:'button',onclick:function(){
  if(installEvt){installEvt.prompt();installEvt=null;return;}
  toast(/iphone|ipad|ipod/i.test(navigator.userAgent)?'In Safari tap Share, then Add to Home Screen.':'Open the browser menu and choose Install app or Add to Home screen.');}},'Install as an app');}
/* deadline alerts on this device: shown by the phone or computer while the app is open or resting in the background */
var alertsOn=function(){return store.get('hv-alerts')==='1'&&typeof Notification!=='undefined'&&Notification.permission==='granted';};
function notify(title,body,tag){var o={body:body,icon:'icon_192.png',badge:'icon_192.png',tag:tag};
  try{if(navigator.serviceWorker&&navigator.serviceWorker.controller){navigator.serviceWorker.ready.then(function(r){return r.showNotification(title,o);}).catch(function(){});return;}new Notification(title,o);}catch(e){}}
function alertBtn(wide){var cls='btn ghost'+(wide?'':' sm');
  if(alertsOn())return h('button',{class:cls,type:'button',onclick:function(){store.set('hv-alerts','');render();if(M)renderSheet();toast('Deadline alerts are off on this device.');}},'Turn off deadline alerts');
  return h('button',{class:cls,type:'button',onclick:function(){
    if(typeof Notification==='undefined'){toast(/iphone|ipad|ipod/i.test(navigator.userAgent)?'On iPhone, first add the app to your Home Screen, then open it from there and try again.':'This browser does not support alerts.');return;}
    Notification.requestPermission().then(function(r){if(r!=='granted'){toast('Alerts are blocked for this site. Allow notifications in your browser settings.');return;}
      store.set('hv-alerts','1');notify(BRAND,'Deadline alerts are on for this device.','hv-hello');render();if(M)renderSheet();checkAlerts();});}},'Turn on deadline alerts');}
function checkAlerts(){if(!S||!alertsOn())return;var seen={};try{seen=JSON.parse(store.get('hv-notified')||'{}')||{};}catch(e){}
  var now=Date.now(),sent=0,mark=function(k){seen[k]=now;};
  S.tasks.forEach(function(t){if(!open(t))return;var mineT=t.assignee===me||(!person(t.assignee)&&t.createdBy===me)||toSign(t)||(t.updates||[]).some(function(u){return (u.mentions||[]).indexOf(me)>=0;});if(!mineT)return;
    if(toSign(t)&&!seen[t.id+':rv:'+t.updatedAt]){mark(t.id+':rv:'+t.updatedAt);if(sent<4){sent++;notify('Ready for your sign off',t.title,t.id);}}
    (t.updates||[]).forEach(function(u){if(u.by!==me&&(u.mentions||[]).indexOf(me)>=0&&!seen[t.id+':m:'+u.at]){mark(t.id+':m:'+u.at);if(sent<4&&Date.now()-u.at<864e5){sent++;notify(pName(u.by)+' mentioned you',u.text.slice(0,120),t.id);}}});
    if(forMe(t)&&!seen[t.id+':new']){mark(t.id+':new');if(sent<4){sent++;notify('New task from '+pName(t.createdBy),t.title,t.id);}}
    var dl=deadline(t);if(!dl)return;var left=dl-now,k=left<=0?(left>-864e5?'over':''):left<=36e5?'1h':left<=864e5?'24h':'';if(!k)return;
    var key=t.id+':'+k+':'+dl;if(seen[key])return;mark(key);if(sent>=4)return;sent++;
    var x=span(left);notify(k==='over'?'Overdue: '+t.title:k==='1h'?'Due within the hour: '+t.title:'Due within 24 hours: '+t.title,sName(t.subjectId)+(k==='over'?'':' · '+(x.d?x.d+'d ':'')+x.h+'h '+x.m+'m left'),t.id);});
  var keys=Object.keys(seen);if(keys.length>400)keys.sort(function(a,b){return seen[a]-seen[b];}).slice(0,keys.length-300).forEach(function(k){delete seen[k];});
  store.set('hv-notified',JSON.stringify(seen));}
setInterval(checkAlerts,60000);
function openMe(){M={kind:'me'};$('#ov').hidden=false;renderSheet();}
function renderMe(){var p=person(me);return [head(p?'Signed in as '+p.name:'Your account'),sess&&sess.user?h('p',{class:'note',style:'margin:0',text:sess.user.email}):null,
  alertsBlock(),calendarBlock(),twofaBlock(),emailBlock(),
  waBlock(),h('button',{class:'btn ghost',type:'button',onclick:function(){openLeave();}},'Ask for leave'),
  h('button',{class:'btn ghost',type:'button',onclick:function(){exportZip('exportMine','what I can see');}},'Export what I can see'),
  payerBlock(),
  h('div',{class:'lbl'},'Your workspaces'),wsSwitcher(),
  alertBtn(true),installBtn(true),h('button',{class:'btn ghost',type:'button',onclick:openHelp},'Help and support'),h('button',{class:'btn wide',type:'button',onclick:signOut},'Sign out'),
  M.all?h('div',{class:'panel dz',style:'display:flex;flex-direction:column;gap:10px'},h('strong',null,'Sign out on every device?'),
      h('p',{style:'margin:0;font-size:14px'},'Every phone and computer signed in to your account, this one too, must sign in again. Phone alerts stop until you switch them back on.'),
      h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn danger sm',type:'button',onclick:function(e){signOutAll(e.target);}},'Sign out everywhere'),h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.all=false;renderSheet();}},'Cancel')))
    :h('button',{class:'linkb',type:'button',style:'align-self:center',onclick:function(){M.all=true;renderSheet();}},'Sign out everywhere'),
  M.leave?h('div',{class:'panel dz',style:'display:flex;flex-direction:column;gap:10px'},h('strong',{text:'Leave '+S.workspace.name+'?'}),
      h('p',{style:'margin:0;font-size:14px'},'You lose access straight away. The work you did stays with the workspace; your profile and phone alerts here are deleted.'),
      h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn danger sm',type:'button',disabled:!!M.busy,onclick:function(){M.busy=true;renderSheet();leaveWs();}},M.busy?'Leaving…':'Leave workspace'),
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){M.leave=false;renderSheet();}},'Stay')))
    :h('div',{class:'acts',style:'justify-content:center'},S.owner?null:h('button',{class:'linkb',type:'button',onclick:function(){M.leave=true;renderSheet();}},'Leave this workspace'),
      h('button',{class:'linkb',type:'button',style:'color:var(--danger)',onclick:openDeleteMe},'Delete my account')),
  h('p',{class:'note',style:'margin:0;text-align:center',text:BRAND+' version '+APP_VERSION})];}

function renderSheet(){if(!M)return;document.body.style.overflow='hidden';keep(function(){var k=M.kind,kids=k==='task'?renderTask():k==='subject'?renderSubject():k==='person'?renderPerson():k==='me'?renderMe():k==='shift'?renderShift():k==='leave'?renderLeave():k==='invoice'?renderInvoice():k==='invview'?renderInvView():k==='ai'?renderAi():k==='handoff'?renderHandoff():k==='pinv'?renderPinv():k==='stuck'?renderStuck():k==='guide'?renderGuide():k==='import'?renderImport():k==='expense'?renderExpense():k==='history'?renderHistory():k==='twofa'?renderTwofa():k==='meet'?renderMeet():k==='entry'?renderEntry():k==='bill'?renderBill():k==='clockfor'?renderClockFor():k==='sendback'?renderSendBack():k==='delws'?renderDelWs():k==='delme'?renderDelMe():k==='help'?renderHelp():k==='bin'?renderBin():k==='sites'?renderSites():renderTemplate();
  if(M){var sh=$('#sh'),flat=[];(function f(a){a.forEach(function(k){if(Array.isArray(k))f(k);else if(k)flat.push(k);});})(kids);sh.replaceChildren.apply(sh,flat);tick();}});}

/* ---------- Client page: opened from a private link, no login ---------- */
var PT=null;
function portalCall(body){var hd={'Content-Type':'application/json'};if(ANON)hd.apikey=ANON;return fetch(SB+'/functions/v1/portal',{method:'POST',headers:hd,body:JSON.stringify(body)})
  .then(function(r){return r.json().catch(function(){return {ok:false,message:'The server did not answer'};});}).then(function(res){if(res&&res.ok===false)throw new Error(res.message||'Something went wrong');return res;});}
function pName0(){try{return localStorage.getItem('hv-portal-name')||'';}catch(e){return '';}}
function portalScreen(tok,inv,ref){screen([loader()]);document.title=BRAND;
  portalCall({token:tok,payload:ref?{reference:ref}:{}}).then(function(r){PT=r;PT.tok=tok;if(ref){history.replaceState(null,'',location.pathname+'?client='+tok);}renderPortal();if(r.msg)setTimeout(function(){toast(r.msg);},300);if(inv&&(PT.invoices||[]).some(function(v){return v.id===inv;})){M={kind:'pinv',id:inv};$('#ov').hidden=false;renderSheet();}})
    .catch(function(e){screen([shell('This link is not working',e.message+'.',null)]);});}
function portalDo(action,payload){var nf=$('#pt-name');payload.name=(nf?nf.value:pName0()).trim();if(!payload.name){toast('Add your name at the top first.');if(nf)nf.focus();return;}try{localStorage.setItem('hv-portal-name',payload.name);}catch(e){}
  portalCall({token:PT.tok,action:action,payload:payload}).then(function(r){var tok=PT.tok;PT=r;PT.tok=tok;renderPortal();if(r.msg)toast(r.msg);}).catch(function(e){toast(e.message+'.');});}
function renderPortal(){var P=PT,open=P.tasks.filter(function(t){return t.status!=='done';}),done=P.tasks.filter(function(t){return t.status==='done';}),toOk=done.filter(function(t){return !t.clientOkAt;}).length;
  var card=function(t){var st=STLABEL[t.status]||t.status,late=t.status!=='done'&&t.due&&t.due<today(),f={text:'',open:false};
    var box=h('div',{class:'pt'},h('div',{class:'hd'},h('div',null,h('strong',{text:t.title}),h('br'),h('small',{class:'note',text:[t.assignee?'With '+t.assignee:'',t.due?(late?'Overdue, was due ':'Due ')+short(t.due):'',t.status==='done'&&t.doneAt?'Finished '+stamp(t.doneAt):''].filter(Boolean).join(' · ')})),
        h('b',{class:'badge-s'+(t.status==='done'?' g':t.status==='waiting'||late?' o':''),text:t.clientOkAt?'Approved':t.request&&t.request.state==='new'?'Request received':st})),
      t.updates.length?h('div',{class:'ups'},t.updates.map(function(u){return h('div',null,h('small',{text:(u.by||'Team')+' · '+stamp(u.at)}),h('div',{text:u.text}));})):null,
      t.files.length?h('div',{class:'row'},t.files.map(function(x){return x.url?h('a',{href:x.url,target:'_blank',rel:'noopener noreferrer',class:'fl',text:x.name}):h('span',{class:'note',text:x.name});})):null);
    var form=h('div',{class:'row',hidden:true},h('input',{class:'in',style:'flex:1;min-width:200px','aria-label':'Comment',placeholder:'Write a comment or a change you need'}),
      h('button',{class:'btn sm',type:'button',onclick:function(){var ci=form.querySelector('input');if(!ci.value.trim()){toast('Write a comment first.');return;}portalDo('comment',{taskId:t.id,text:ci.value});}},'Send'));
    box.appendChild(h('div',{class:'row'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){form.hidden=!form.hidden;}},'Comment'),
      t.status==='done'&&!t.clientOkAt?h('button',{class:'btn sm',type:'button',onclick:function(){portalDo('approve',{taskId:t.id});}},'Approve'):null,
      t.clientOkAt?h('small',{class:'note',text:'Approved by '+t.clientOkBy+', '+stamp(t.clientOkAt)}):null));
    box.appendChild(form);return box;};
  screen([h('div',{class:'portal'},
    h('div',{class:'ph'},h('div',null,h('small',{text:P.workspace+' · client page'}),h('h1',{text:P.client})),
      h('div',{class:'kp'},h('span',null,h('b',{text:open.length}),'in progress'),h('span',null,h('b',{text:done.length}),'finished'),h('span',null,h('b',{text:P.hoursThisMonth}),'hours this month'),
        P.hoursAllTime!==undefined?h('span',null,h('b',{text:P.hoursAllTime}),'hours in all'):null,toOk?h('span',null,h('b',{text:toOk}),'to approve'):null)),
    h('label',{class:'pt',style:'flex-direction:row;align-items:center;gap:12px;flex-wrap:wrap'},h('strong',{style:'font-size:14px'},'Your name'),
      h('input',{class:'in',id:'pt-name',style:'flex:1;min-width:160px',placeholder:'So the team knows who commented or approved',value:pName0(),onchange:function(e){try{localStorage.setItem('hv-portal-name',e.target.value.trim());}catch(x){}}})),
    portalRequest(),
    portalMeetings(),
    h('div',{class:'sec',style:'margin:6px 0 0'},h('h3',null,'In progress'),h('span',{text:open.length+(open.length===1?' task':' tasks')})),
    open.length?open.map(card):h('div',{class:'empty'},h('b',null,'Nothing in progress'),'New work for you shows here as soon as the team adds it.'),
    done.length?[h('div',{class:'sec'},h('h3',null,'Finished'),h('span',null,'Approve finished work, or comment if something needs changing')),done.slice(0,30).map(card)]:null,
    portalTime(P),
    (P.invoices||[]).length?[h('div',{class:'sec'},h('h3',null,'Invoices')),h('div',{class:'invl'},P.invoices.map(function(v){var stt=IST[v.status]||IST.sent;return h('button',{class:'inv',type:'button',onclick:function(){M={kind:'pinv',id:v.id};$('#ov').hidden=false;renderSheet();}},
      h('div',null,h('strong',{text:'Invoice '+v.number}),h('br'),h('small',{text:'Issued '+short(v.issued)+' · due '+short(v.due)})),h('span',{class:'money',text:fmtMoney(v.total,v.currency)}),h('span',null,h('b',{class:stt[1]},stt[0])));}))]:null,
    (P.declined||[]).length?[h('div',{class:'sec'},h('h3',null,'Requests the team could not take on')),h('div',{class:'panel list'},P.declined.map(function(x){return h('div',{class:'li'},h('div',null,h('strong',{text:x.title}),h('small',{text:(x.note?x.note+' · ':'')+stamp(x.at)})));}))]:null,
    h('p',{class:'note',style:'text-align:center;margin-top:20px'},'Shared with you by '+P.workspace+' using '+BRAND+'. Updated '+stamp(P.now)+'. ',h('a',{href:'../privacy.html',target:'_blank',rel:'noopener noreferrer'},'Privacy')))]);}
/* hours on the client page: this month against the retainer, and a timesheet when the team shares one */
function portalTime(P){var R=P.retainer,T=P.timesheet;if(!R&&!T)return null;
  return [h('div',{class:'sec'},h('h3',null,'Hours'),h('span',{text:P.hoursThisMonth+' this month, '+P.hoursAllTime+' in all'})),
    R?h('div',{class:'pt'},h('div',{class:'hd'},h('strong',null,'Monthly retainer'),h('b',{class:'badge-s'+(R.pct>=100?' r':R.pct>=80?' o':' g'),text:R.pct+'% used'})),
      h('div',{class:'bar',style:'height:8px'},h('i',{style:'width:'+Math.min(100,R.pct)+'%;background:'+(R.pct>=100?'var(--danger)':R.pct>=80?'var(--coral2)':'var(--ok)')})),
      h('small',{class:'note',text:[R.capHours?R.hours+' of '+R.capHours+' hours this month':'',R.capAmount?fmtMoney(R.amount,R.currency)+' of '+fmtMoney(R.capAmount,R.currency):''].filter(Boolean).join(' · ')})):null,
    T&&T.length?h('div',{class:'tsheet'},h('table',{class:'ptab'},h('thead',null,h('tr',null,['Date','Who','Work','Hours'].map(function(c){return h('th',{scope:'col',text:c});}))),
      h('tbody',null,T.map(function(x){return h('tr',null,h('td',{text:short(x.date)}),h('td',{text:x.person}),h('td',{class:'wk',text:x.task+(x.note?' · '+x.note:'')}),h('td',{text:x.running?'running':String(x.hours)}));})))):null];}
function renderPinv(){var v=PT&&(PT.invoices||[]).find(function(x){return x.id===M.id;});if(!v){closeSheet();return [];}var paid=v.status==='paid';
  return [head('Invoice '+v.number),paid?h('p',{class:'ok-note',style:'margin:0',text:'Paid'+(v.paidAt?' on '+stamp(v.paidAt):'')+'. Thank you.'}):null,
    !paid&&PT.canPay&&!v.canPay?h('p',{class:'note',style:'margin:0',text:'This invoice is in '+v.currency+', which cannot be paid online here. Please pay by transfer'+(PT.payLink?' or the payment link below':' using the details below')+'.'}):null,
    !paid&&v.canPay?h('div',{class:'panel preq'},h('strong',{text:'Pay '+fmtMoney(v.total,v.currency)+' now'}),h('p',{class:'note',style:'margin:0'},'By card, bank transfer or USSD, through Paystack. The invoice is marked paid straight away.'),
      h('input',{class:'in',id:'pi-mail',type:'email',placeholder:'Email for your receipt','aria-label':'Email for your receipt',value:M.mail||'',oninput:function(e){M.mail=e.target.value;}}),
      h('button',{class:'btn',type:'button',disabled:!!M.busy,onclick:function(){M.busy=true;renderSheet();portalCall({token:PT.tok,action:'payInvoice',payload:{invoiceId:v.id,email:(M.mail||'').trim()}}).then(function(r){location.href=r.payUrl;}).catch(function(e){M.busy=false;renderSheet();toast(e.message+'.');});}},M.busy?'Opening Paystack…':'Pay now')):null,
    !paid&&PT.payLink?h('a',{class:'btn ghost sm',style:'align-self:flex-start',href:PT.payLink,target:'_blank',rel:'noopener noreferrer'},v.canPay?'Other ways to pay':'Pay online'):null,
    invoicePaper(v,PT.from,PT.payNote),
    h('div',{class:'acts'},!paid?h('button',{class:'btn ghost sm',type:'button',disabled:!!v.clientSaysPaidAt,onclick:function(){portalDo('notifyPaid',{invoiceId:v.id});}},v.clientSaysPaidAt?'You told the team you paid':'I have paid by transfer'):null,
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){try{window.print();}catch(e){}}},'Print or save as PDF'))];}
function pWhen(ms,dur){var a=new Date(ms),b=new Date(ms+(dur||30)*6e4);return DAY[a.getDay()]+' '+a.getDate()+' '+MON[a.getMonth()]+', '+pad(a.getHours())+':'+pad(a.getMinutes())+' to '+pad(b.getHours())+':'+pad(b.getMinutes())+' your time';}
function portalMeetings(){var P=PT,list=(P.meetings||[]).filter(function(m){return m.status==='scheduled';}),reqs=(P.meetings||[]).filter(function(m){return m.status==='requested';}),R=PT.mreq=PT.mreq||{open:false,title:'',note:'',dur:30,opts:['','','']};
  var out=[h('div',{class:'sec',style:'margin:6px 0 0'},h('h3',null,'Meetings'),h('span',{text:list.length?list.length+(list.length===1?' coming up':' coming up'):'Ask for one any time'}))];
  list.forEach(function(m){var live=Date.now()>=m.startAt-10*6e4&&Date.now()<m.startAt+m.durationMin*6e4;
    out.push(h('div',{class:'pt'},h('div',{class:'hd'},h('div',null,h('strong',{text:m.title}),h('br'),h('small',{class:'note',text:pWhen(m.startAt,m.durationMin)+(m.team.length?' · with '+m.team.join(', '):'')+(m.place?' · '+m.place:'')})),
        h('b',{class:'badge-s'+(live?' g':m.answer==='yes'?' g':m.answer==='no'?' r':''),text:live?'Live now':m.answer?RSVPL[m.answer]:'Can you make it?'})),
      m.agenda.length?h('div',{class:'ups'},h('small',null,'Agenda'),m.agenda.map(function(a){return h('div',{text:'· '+a});})):null,
      h('div',{class:'row'},m.joinUrl?h('button',{class:'btn sm'+(live?'':' ghost'),type:'button',onclick:function(){portalCall({token:PT.tok,action:'meetingJoin',payload:{meetingId:m.id,name:pName0()}}).catch(function(){});window.open(m.joinUrl,'_blank','noopener,noreferrer');}},live?'Join now':'Join the call'):null,
        ['yes','maybe','no'].map(function(a){return h('button',{class:'btn ghost sm',type:'button','aria-pressed':String(m.answer===a),style:m.answer===a?'background:var(--plum);color:#fff;border-color:var(--plum)':'',onclick:function(){portalDo('meetingAnswer',{meetingId:m.id,answer:a});}},a==='yes'?'I will be there':a==='maybe'?'Maybe':'I cannot make it');}),
        h('a',{class:'linkb',href:m.gcal,target:'_blank',rel:'noopener noreferrer',style:'font-size:13px'},'Add to calendar'))));});
  reqs.forEach(function(m){out.push(h('div',{class:'pt'},h('div',{class:'hd'},h('div',null,h('strong',{text:m.title}),h('br'),h('small',{class:'note',text:'You suggested: '+((m.request||{}).options||[]).map(function(ms){return pWhen(ms,m.durationMin).replace(' your time','');}).join('; ')})),h('b',{class:'badge-s o',text:'Waiting for the team'}))));});
  if(!R.open)out.push(h('div',{class:'acts',style:'margin:4px 0 0'},h('button',{class:'btn ghost sm',type:'button',onclick:function(){R.open=true;renderPortal();var f=$('#mr-title');if(f)f.focus();}},'Ask for a meeting'),h('small',{class:'note'},'Suggest up to three times. The team picks one and you get the link.')));
  else out.push(h('div',{class:'pt preq'},h('strong',{style:'font-size:15px'},'Ask for a meeting'),
    h('input',{class:'in',id:'mr-title',maxlength:160,placeholder:'What would you like to talk about?','aria-label':'Topic',value:R.title,oninput:function(e){R.title=e.target.value;}}),
    h('textarea',{class:'in',id:'mr-note',rows:2,maxlength:1000,placeholder:'Anything the team should prepare','aria-label':'Note',value:R.note,oninput:function(e){R.note=e.target.value;}}),
    h('small',{class:'note'},'Times that suit you, in your own time zone'),
    h('div',{class:'row'},R.opts.map(function(v,i){return h('input',{class:'in',id:'mr-opt'+i,type:'datetime-local',style:'flex:1;min-width:180px','aria-label':'Time option '+(i+1),value:v,onchange:function(e){R.opts[i]=e.target.value;}});})),
    h('div',{class:'row'},h('label',{class:'note'},'Length ',h('select',{class:'in',id:'mr-dur',style:'width:auto;display:inline-block',value:String(R.dur),onchange:function(e){R.dur=+e.target.value;}},[15,30,45,60].map(function(n){return h('option',{value:String(n),text:n+' minutes'});})))),
    h('div',{class:'row'},h('button',{class:'btn sm',type:'button',onclick:function(){var opts=R.opts.filter(Boolean).map(function(v){return new Date(v).getTime();}).filter(function(x){return x>Date.now();});
        if(!R.title.trim()){toast('Say what you would like to talk about.');return;}if(!opts.length){toast('Suggest at least one time in the future.');return;}
        portalDo('requestMeeting',{title:R.title.trim(),note:R.note.trim(),options:opts,durationMin:R.dur});PT.mreq={open:false,title:'',note:'',dur:30,opts:['','','']};}},'Send'),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){R.open=false;renderPortal();}},'Cancel'))));
  return out;}
function portalRequest(){var R=PT.req=PT.req||{open:false,title:'',details:'',due:'',urgent:false};
  if(!R.open)return h('div',{class:'acts',style:'margin:4px 0 0'},h('button',{class:'btn sm',type:'button',onclick:function(){R.open=true;renderPortal();var f=$('#rq-title');if(f)f.focus();}},'Request something'),h('small',{class:'note'},'Ask the team for new work. It goes straight onto their list.'));
  return h('div',{class:'pt preq'},h('strong',{style:'font-size:15px'},'Request something'),
    h('input',{class:'in',id:'rq-title',maxlength:200,placeholder:'What do you need?','aria-label':'What do you need',value:R.title,oninput:function(e){R.title=e.target.value;}}),
    h('textarea',{class:'in',id:'rq-details',rows:3,maxlength:3000,placeholder:'Details, links, anything that helps','aria-label':'Details',value:R.details,oninput:function(e){R.details=e.target.value;}}),
    h('div',{class:'row'},h('label',{class:'note'},'Needed by ',h('input',{class:'in',id:'rq-due',type:'date',style:'width:auto;display:inline-block',value:R.due,onchange:function(e){R.due=e.target.value;}})),
      h('label',{class:'switch'},h('input',{type:'checkbox',id:'rq-urgent',checked:R.urgent,onchange:function(e){R.urgent=e.target.checked;}}),'Urgent')),
    h('div',{class:'row'},h('button',{class:'btn sm',type:'button',onclick:function(){if(!R.title.trim()){toast('Say what you need.');return;}portalDo('request',{title:R.title.trim(),details:R.details.trim(),due:R.due,urgent:R.urgent});PT.req={open:false,title:'',details:'',due:'',urgent:false};}},'Send request'),
      h('button',{class:'btn ghost sm',type:'button',onclick:function(){R.open=false;renderPortal();}},'Cancel')));}

/* ---------- boot ---------- */
/* FULL: a full screen form (new workspace, invite, sign in) is showing, so timed refreshes must not redraw the app over it */
var FULL=false;
function screen(kids){var k=kids.filter(Boolean);FULL=!(k.length===1&&k[0].classList&&k[0].classList.contains('load'));$('#nav').hidden=true;closeSheet();var app=$('#app');app.replaceChildren.apply(app,kids.filter(Boolean));window.scrollTo(0,0);}
function shell(title,sub,kids){return h('div',{class:'connect'},h('span',{class:'logo',html:LOGO}),h('h1',null,title),sub?h('p',{style:'margin:0',text:sub}):null,kids);}
var A0={email:'',name:'',err:'',done:'',invite:'',inv:null,invErr:''};
/* a pending invite lives in this tab only (sessionStorage), never in storage that outlasts the tab */
try{var uq=new URLSearchParams(location.search),jq=uq.get('join')||uq.get('email');if(jq&&/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(jq))A0.email=jq;
  try{localStorage.removeItem('hv-invite');}catch(e){}
  var iq=uq.get('invite');if(/^[0-9a-f]{24}$/.test(iq||'')){A0.invite=iq;tabStore.set('hv-invite',iq);try{history.replaceState(null,'',location.pathname);}catch(e){}}else A0.invite=/^[0-9a-f]{24}$/.test(tabStore.get('hv-invite')||'')?tabStore.get('hv-invite'):'';}catch(e){}
/* "Join Brightline? Ada invited you": read before signing in, with no login */
function previewInvite(){if(!A0.invite)return Promise.resolve(null);if(A0.inv||A0.invErr)return Promise.resolve(A0.inv);var hd={'Content-Type':'application/json','x-handlark-codes':'1'};if(ANON)hd.apikey=ANON;
  return fetch(SB+'/functions/v1/api',{method:'POST',headers:hd,body:JSON.stringify({action:'previewInvite',payload:{token:A0.invite}})}).then(function(r){return r.json();})
    .then(function(j){if(j&&j.ok&&j.invite){A0.inv=j.invite;return A0.inv;}A0.invErr=(j&&j.message)||'This invite link does not work. Ask for a new one.';if(j&&/^invite_/.test(j.code||'')){A0.invite='';tabStore.set('hv-invite','');}return null;},function(){return null;});}
function dropInvite(){A0.invite='';A0.inv=null;tabStore.set('hv-invite','');}
function busy(btn,on){if(btn){btn.disabled=on;btn.style.opacity=on?'.6':'';}}
/* sign up, sign in and forgotten password, all on one screen */
function authScreen(mode,note){A0.mode=mode;if(note!==undefined)A0.err=note;
  if(!SB||!FBKEY){screen([shell(BRAND,'This copy of the app is not set up yet. Add your Supabase project link and Firebase key to config.js.',null)]);return;}
  var em=h('input',{class:'in',id:'a-email',type:'email',autocomplete:'email',maxlength:120,value:A0.email,oninput:function(e){A0.email=e.target.value;}}),
      pw=h('input',{class:'in',id:'a-pass',type:'password',autocomplete:mode==='up'?'new-password':'current-password',maxlength:72}),
      nm=h('input',{class:'in',id:'a-name',autocomplete:'name',maxlength:60,value:A0.name,oninput:function(e){A0.name=e.target.value;}}),
      go=h('button',{class:'btn wide',type:'submit'},mode==='up'?'Create account':mode==='in'?'Sign in':'Email me a reset link');
  var fail=function(e){busy(go,false);A0.err=e&&e.message||'Something went wrong.';A0.done='';authScreen(mode);};
  var submit=function(ev){ev.preventDefault();A0.err='';A0.done='';var email=A0.email.trim().toLowerCase(),pass=pw.value;
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){A0.err='Enter a valid email address.';authScreen(mode);return;}
    if(mode==='up'&&pass.length<8){A0.err='Use at least 8 characters for the password.';authScreen(mode);return;}
    if(mode==='up'&&!A0.name.trim()){A0.err='Add your name.';authScreen(mode);return;}
    busy(go,true);
    if(mode==='in')fb('signInWithPassword',{email:email,password:pass,returnSecureToken:true}).then(function(j){keepSess(j);return checkVerified().catch(function(){});}).then(afterSignIn,fail);
    else if(mode==='up')fb('signUp',{email:email,password:pass,returnSecureToken:true}).then(function(j){keepSess(j,{verified:false,name:A0.name.trim()});
        return fb('update',{idToken:j.idToken,displayName:A0.name.trim(),returnSecureToken:true}).then(function(k){keepSess(k);}).catch(function(){})
          .then(function(){return sendVerify().catch(function(){});});})
      .then(function(){toast('Account created. We sent a link to confirm your email.');afterSignIn();},fail);
    else fb('sendOobCode',{requestType:'PASSWORD_RESET',email:email,continueUrl:appUrl()}).catch(function(e){if(/web address/.test(e.message))return fb('sendOobCode',{requestType:'PASSWORD_RESET',email:email});throw e;})
      .then(function(){A0.done='If there is an account for '+email+', a reset link is on its way. Set a new password from the email, then sign in here.';authScreen('in');},
        function(e){if(/do not match/.test(e.message)){A0.done='If there is an account for '+email+', a reset link is on its way.';authScreen('in');return;}fail(e);});};
  var sw=function(m,label){return h('button',{class:'linkb',type:'button',onclick:function(){A0.err='';A0.done='';authScreen(m);}},label);};
  var title=mode==='up'?'Create your account':mode==='in'?'Welcome back':'Reset your password';
  var iv=A0.inv,who=iv?(iv.inviter?iv.inviter+' invited you to '+iv.workspace+'. ':'You were invited to '+iv.workspace+'. '):A0.invite?'You were invited. ':'';
  var sub=mode==='up'?(A0.invite?who+'Create your account to join.':'Start a 14 day free trial. No card needed.'):mode==='in'?(A0.invite?who+'Sign in to join.':'Sign in to '+BRAND+'.'):'Enter your email and we will send you a link.';
  if(A0.invite&&!iv&&!A0.invErr&&!A0.previewing){A0.previewing=true;previewInvite().then(function(x){A0.previewing=false;if((x||A0.invErr)&&!sess&&$('#a-email'))authScreen(A0.mode);});}
  screen([shell(title,sub,[A0.done?h('p',{class:'ok-note',role:'status',text:A0.done}):null,
    h('form',{class:'panel',style:'display:flex;flex-direction:column;gap:12px;text-align:left',onsubmit:submit,novalidate:true},
      mode==='up'?fld('Your name',nm):null,fld('Email',em),mode!=='forgot'?fld(mode==='in'?'Password':'Password, at least 8 characters',pw):null,
      A0.err?h('p',{class:'err',role:'alert',text:A0.err}):null,go,
      mode==='up'?h('p',{class:'note legal',style:'margin:0;font-size:12.5px'},'By creating an account you agree to the ',h('a',{href:'../terms.html',target:'_blank',rel:'noopener noreferrer'},'Terms'),' and the ',h('a',{href:'../privacy.html',target:'_blank',rel:'noopener noreferrer'},'Privacy policy'),'.'):null),
    A0.invErr&&mode!=='forgot'?h('p',{class:'note',role:'status',style:'margin:0',text:A0.invErr}):null,
    h('div',{class:'alt'},mode==='in'?[sw('up','New here? Create an account'),sw('forgot','Forgot your password?')]:sw('in','Already have an account? Sign in'))])]);
  var f=mode==='up'?(A0.name?(A0.email?pw:em):nm):A0.email?(mode==='in'?pw:em):em;
  setTimeout(function(){try{var a=document.activeElement;if(a&&a!==document.body&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)&&a.isConnected)return;f.focus();}catch(e){}},30);}   // never pull focus from a field someone is already typing in
/* after signing in: join from an invite link if there is one, otherwise open a workspace */
function afterSignIn(){A0.err='';
  if(A0.invite){screen([loader()]);previewInvite().then(function(iv){if(!sess)return;if(!iv){var why=A0.invErr;dropInvite();if(why)toast(why);pickWorkspace();return;}inviteScreen(iv);});return;}
  pickWorkspace();}
/* "Join Brightline as kemi@example.com?": nothing is joined until the person says yes */
function inviteScreen(iv){var email=(sess&&sess.user&&sess.user.email)||'',tok=A0.invite;
  var join=h('button',{class:'btn wide',type:'button',onclick:function(){busy(join,true);
    call('api',{action:'acceptInvite',payload:{token:tok,_app:appUrl()}}).then(function(res){dropInvite();accept(res);pickMe();V.tab='home';FULL=false;render();toast('Welcome to '+((res.workspace&&res.workspace.name)||iv.workspace));})
      .catch(function(e){if(lost(e))return;dropInvite();toast(e.message+'.');pickWorkspace();});}},'Join '+iv.workspace);
  screen([shell(['Join '+iv.workspace+' as ',h('span',{class:'jem',text:email+'?'})],(iv.inviter?iv.inviter+' invited you. ':'')+'You will see the tasks and clients they share with you, and they will see the work you do there.',
    [h('div',{class:'panel',style:'display:flex;flex-direction:column;gap:10px;text-align:left'},join,
      h('button',{class:'btn ghost wide',type:'button',onclick:function(){dropInvite();pickWorkspace();}},'Not now')),
     h('div',{class:'alt'},h('span',{class:'note',text:'Not '+email+'?'}),h('button',{class:'linkb',type:'button',onclick:signOut},'Sign out'))])]);}
function chooseWs(id){wsId=id;store.set('hv-ws',id);loadQ();S=null;V.tab='home';V.plan='';boot();}
/* which workspace to open: the last one used, the only one, or a choice */
function pickWorkspace(){screen([loader()]);
  call('api',{action:'workspaces'}).then(function(r){wsList=r.workspaces||[];DELWS=r.deleted||[];
    if(wsId&&wsList.some(function(w){return w.id===wsId;})){boot();return;}
    // a workspace the owner deleted in the last 30 days: offer to bring it back
    if(DELWS.length){screen([shell(wsList.length?'Choose a workspace':'Restore your workspace?',wsList.length?'Or bring back one you deleted.':'You deleted it recently. You can bring it back for 30 days.',[wsSwitcher(),h('div',{class:'alt'},h('span'),h('button',{class:'linkb',type:'button',onclick:signOut},'Sign out'))])]);return;}
    if(wsList.length===1){chooseWs(wsList[0].id);return;}
    if(!wsList.length){createScreen(true);return;}
    screen([shell('Choose a workspace','You belong to more than one.',[wsSwitcher()])]);})
  .catch(function(e){if(lost(e))return;screen([shell('Could not connect',e.message+'. Check your connection and try again.',h('button',{class:'btn wide',type:'button',onclick:pickWorkspace},'Try again'))]);});}
/* first run: name the workspace and pick time zones; subjects and templates are seeded to suit */
function createScreen(first){var u=sess&&sess.user||{},meta=(A0.name||'').trim();
  var nm=h('input',{class:'in',id:'w-name',maxlength:80,placeholder:'Acme Assistants'}),
      kd=h('select',{class:'in',id:'w-kind'},[['agency','A virtual assistant or staffing agency'],['firm','A firm with remote staff'],['organisation','An organisation or NGO'],['team','A small team or personal use']].map(function(k){return h('option',{value:k[0],text:k[1]});})),
      yn=h('input',{class:'in',id:'w-you',maxlength:60,value:meta,autocomplete:'name'}),
      t1=h('select',{class:'in',id:'w-tz1',value:myTz||'Africa/Lagos'},tzOptions(myTz||'Africa/Lagos')),
      t2=h('select',{class:'in',id:'w-tz2',value:''},tzOptions('','No second clock')),
      go=h('button',{class:'btn wide',type:'submit'},'Create workspace'),err=h('p',{class:'err',role:'alert',hidden:true});
  var submit=function(ev){ev.preventDefault();var name=nm.value.trim();if(!name){err.textContent='Give the workspace a name.';err.hidden=false;nm.focus();return;}busy(go,true);err.hidden=true;
    var zs=[t1.value,t2.value].filter(function(v,i,a){return v&&a.indexOf(v)===i;});
    call('api',{action:'createWorkspace',payload:{_app:appUrl(),ref:store.get('hv-ref')||'',name:name,kind:kd.value,yourName:yn.value.trim(),deadlineTz:t1.value,clocks:zs.map(function(z){return tzLabel(z)+'|'+z;}).join(', ')}})
      .then(function(res){wsId=res.workspace.id;store.set('hv-ws',wsId);loadQ();accept(res);pickMe();V.tab='home';FULL=false;render();toast('Your workspace is ready. Add your people under Settings.');})
      .catch(function(e){busy(go,false);if(lost(e))return;err.textContent=e.message+'.';err.hidden=false;});};
  var unverified=sess&&sess.user&&sess.user.verified===false;
  screen([unverified&&first?h('div',{class:'connect',style:'margin-top:4vh;margin-bottom:-4vh'},h('div',{class:'ok-note',style:'background:var(--blush);color:var(--ink);display:flex;flex-direction:column;gap:8px;text-align:left'},
      h('span',null,'Invited by email? Confirm your email first using the link we sent, then tap below. Or open the invite link your manager sent you.'),
      h('div',{class:'acts',style:'margin:0'},h('button',{class:'btn sm',type:'button',onclick:function(){checkVerified().then(function(v){if(v){toast('Email confirmed');pickWorkspace();}else toast('Not confirmed yet. Open the link in the email first.');}).catch(function(e){toast(e.message);});}},'I have confirmed my email'),
        h('button',{class:'btn ghost sm',type:'button',onclick:function(){sendVerify().then(function(){toast('Link sent again');}).catch(function(e){toast(e.message);});}},'Send the link again')))):null,
    shell(first?'Set up your workspace':'New workspace',first?'Your workspace is your company account. It holds your clients, people and tasks. You can rename it later.':'Each workspace has its own people, clients, tasks and plan.',
    [h('form',{class:'panel',style:'display:flex;flex-direction:column;gap:12px;text-align:left',onsubmit:submit,novalidate:true},
      fld('Workspace name, such as your company',nm),fld('What best describes you',kd),fld('Your name, as your team will see it',yn),
      h('div',{class:'frow'},fld('Your time zone, used for deadlines',t1),fld('Second clock, such as your clients',t2)),err,go),
     h('div',{class:'alt'},wsList.length?h('button',{class:'linkb',type:'button',onclick:function(){if(wsId)boot();else pickWorkspace();}},'Back to my workspaces'):h('span'),h('button',{class:'linkb',type:'button',onclick:signOut},'Sign out'))])].filter(Boolean));
  setTimeout(function(){try{if(!unverified)nm.focus();}catch(e){}},30);}
/* Loading animation built from the logo: the mark fills from the bottom while an orange arc circles it. */
function loader(){
  var ghost=h('span',{class:'logo',html:LOGO}),full=h('span',{class:'logo',html:LOGO}),fill=h('div',{class:'ld-fill'},full),
      arc=h('div',{class:'ld-ring',html:'<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="56" fill="none" stroke="#EAE4EF" stroke-width="4"/><circle cx="60" cy="60" r="56" fill="none" stroke="#FF7059" stroke-width="4" stroke-linecap="round" stroke-dasharray="88 264"/></svg>'}),
      dots=h('span',{'aria-hidden':'true'}),stage=h('div',{class:'ld-stage'},arc,ghost,fill),
      box=h('div',{class:'load',role:'status','aria-label':'Loading'},h('div',null,stage,h('b',{class:'ld-text'},'Loading',dots)));
  var still=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches,t0=null;
  if(still){fill.style.height='100%';return box;}
  function frame(ts){
    if(t0===null)t0=ts;
    if(t0!==ts&&!box.isConnected)return;                 // stop once the loader leaves the page
    var t=ts-t0,c=(t%2000)/2000,up=Math.min(1,c/0.62),e=1-Math.pow(1-up,3);   // fill for 62% of the cycle, then hold and fade
    fill.style.height=(e*100).toFixed(1)+'%';
    fill.style.opacity=c>0.86?String(1-(c-0.86)/0.14):'1';
    arc.style.transform='rotate('+(t*0.3%360).toFixed(1)+'deg)';
    stage.style.transform='scale('+(1+0.025*Math.sin(t/320)).toFixed(4)+')';
    dots.textContent='...'.slice(0,Math.floor(t/380)%4);
    requestAnimationFrame(frame);}
  requestAnimationFrame(frame);
  return box;}
function boot(){FULL=false;
  if(!sess){authScreen(A0.email||A0.invite||/[?&]signup\b/.test(location.search)?'up':'in');return;}
  if(!wsId){pickWorkspace();return;}
  if(!S){var c=cached();if(c){S=c;pickMe();Q.forEach(function(it){try{mutate(it.a,it.p);}catch(e){}});render();}}
  if(!S){screen([loader()]);}
  if(Q.length){pump();return;}
  server('load',{}).then(function(res){if(!accept(res))return;pickMe();render();if(OPEN_MEET){var om=OPEN_MEET;OPEN_MEET='';V.tab='meet';render();openMeet(om);}})
    .catch(function(err){if(lost(err))return;if(S){offline=true;render();return;}
      screen([shell('Could not connect',((err&&err.message)||'Connection problem')+'. Check your connection and try again.',h('button',{class:'btn wide',type:'button',onclick:boot},'Try again'))]);});}
/* Keep the installed app current: check for a new version on every open and when the app returns to the screen,
   and reload once when a new version takes over, so nobody is left on an old copy. */
if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){
  var hadSW=!!navigator.serviceWorker.controller,reloaded=false;
  navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).then(function(r){r.update().catch(function(){});
    document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')r.update().catch(function(){});});}).catch(function(){});
  navigator.serviceWorker.addEventListener('controllerchange',function(){if(hadSW&&!reloaded&&!uploads){reloaded=true;location.reload();}});}
var OPEN_MEET='';
(function start(){var q=new URLSearchParams(location.search);if(/^[A-Za-z0-9]{6,40}$/.test(q.get('meeting')||'')){OPEN_MEET=q.get('meeting');history.replaceState(null,'',location.pathname);}
  if(/^[A-Za-z0-9_-]{1,40}$/.test(q.get('time')||'')){var tq=q.get('time');V.tab='stats';V.ins='hours';if(tq!=='week'&&tq!=='sheets')V.tm={k:'month',from:'',to:'',sid:tq,open:{},all:false,wk:weekStart(today())};history.replaceState(null,'',location.pathname);}
  if(/^[A-Za-z2-9]{7}$/.test(q.get('ref')||''))store.set('hv-ref',q.get('ref').toUpperCase());
  if(/^[0-9a-f]{24}$/.test(q.get('client')||'')){portalScreen(q.get('client'),q.get('invoice'),q.get('reference')||'');return;}
  if(q.get('paid')){history.replaceState(null,'',location.pathname);setTimeout(function(){toast('Thank you. Your plan updates as soon as the payment is confirmed.');},800);[5000,15000,40000].forEach(function(ms){setTimeout(refresh,ms);});}
  if(sess&&A0.invite){afterSignIn();return;}
  boot();})();
setInterval(function(){if(S&&document.visibilityState==='visible'&&!(M&&M.force))refresh();},40000);
document.addEventListener('visibilitychange',function(){if(S&&document.visibilityState==='visible')refresh();});
setInterval(function(){if(S&&V.tab==='home'&&!M)render();},60000);
})();
