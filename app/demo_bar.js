/* Demo only: the demo bar. Who you are viewing as, and windows onto the simulated outside services: the emails the server
   sent, a WhatsApp chat with the server's real command handling, phone alerts, and an authenticator app for two step sign in.
   Loaded right after the bar in the page body. */
(function () {
  var D = window.HANDLARK_DEMO, sel = document.getElementById('demo-who'), more = document.getElementById('demo-more');
  var panel = document.getElementById('demo-panel'), ptitle = document.getElementById('demo-ptitle'), pbody = document.getElementById('demo-pbody'), pop = document.getElementById('demo-pop');
  if (!D || !sel) return;
  var el = function (tag, attrs, kids) { var e = document.createElement(tag); Object.keys(attrs || {}).forEach(function (k) { if (k === 'text') e.textContent = attrs[k]; else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2), attrs[k]); else if (attrs[k] !== null && attrs[k] !== undefined && attrs[k] !== false) e.setAttribute(k, attrs[k] === true ? '' : attrs[k]); });
    (kids || []).forEach(function (c) { if (c !== null && c !== undefined && c !== false) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); }); return e; };
  var when = function (t) { var d = new Date(t), now = new Date(); return (d.toDateString() === now.toDateString() ? '' : d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' }) + ' ') + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }); };
  var refreshApp = function () { try { window.dispatchEvent(new Event('online')); } catch (e) {} };   // the app fetches fresh state, as it does when a phone comes back online

  /* ---------- who you are viewing as ---------- */
  var cur = '';
  /* keeps "Viewing as" in step with the app: someone new signing up or joining, or signing out, changes it without a reload */
  function syncWho() {
    var now = D.current(), extra = sel.querySelector('option[data-x]');
    if (now === cur && (now !== 'other' || (extra && extra.textContent === 'Viewing as ' + D.currentEmail()))) return;
    cur = now;
    if (extra) extra.remove();
    if (cur === 'other' || cur === '') sel.appendChild(el('option', { value: cur || 'out', 'data-x': '1', text: cur ? 'Viewing as ' + D.currentEmail() : 'Signed out' }));
    sel.value = cur || 'out';
  }
  syncWho(); setInterval(syncWho, 1000);
  sel.addEventListener('change', function () {
    var v = sel.value;
    if (v === 'client') {   // a client has no login: they open the client page link the owner sent them
      var link = D.clientPage();
      if (!link) { sel.value = cur || 'out'; open('note', 'Client page', [el('p', { text: 'Brooks Dental has no client page link right now. As Ada, open Settings, Clients, Brooks Dental and choose Create client link, then try again.' })]); return; }
      location.href = link; return;
    }
    if (v === 'owner' || v === 'member' || v === 'amara' || v === 'tunde') { D.signInAs(v); location.href = D.page; }
  });

  /* ---------- the panel ---------- */
  var kind = '', timer = null;
  function open(k, title, kids) {
    kind = k; more.open = false; clearInterval(timer); timer = null;
    ptitle.textContent = title; pbody.textContent = ''; kids.forEach(function (c) { if (c) pbody.appendChild(c); });
    panel.hidden = false;
  }
  function close() { panel.hidden = true; kind = ''; clearInterval(timer); timer = null; }
  document.getElementById('demo-pclose').addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) close(); });
  var note = function (t) { return el('p', { class: 'dp-note', text: t }); };

  /* emails: what the server sent through the email service, shown as the reader gets them */
  function mails() {
    var list = D.mails();
    open('mail', 'Emails sent', [note('Every email the server sent, newest first. In the live app they go out through Resend or Brevo; here they stay in this list.'),
      list.length ? el('ul', { class: 'dp-list' }, list.map(function (m) { return el('li', null, [el('button', { type: 'button', class: 'dp-item', onclick: function () { mailOne(m); } },
        [el('strong', { text: m.subject }), el('small', { text: 'To ' + m.to + ', ' + when(m.at) })])]); })) : el('p', { text: 'No emails yet. Invite someone, mention a teammate or send a summary, and the email shows here.' })]);
  }
  /* one email: its own HTML in a closed box (no scripts, no outside requests), with its links handled the way they work live */
  function mailOne(m) {
    var host = el('div', { class: 'dp-mail' }), root = host.attachShadow({ mode: 'open' });
    var doc = new DOMParser().parseFromString(String(m.html || ''), 'text/html');
    doc.querySelectorAll('script,iframe,object,embed,form,link,meta,base').forEach(function (x) { x.remove(); });
    doc.querySelectorAll('*').forEach(function (x) { [].slice.call(x.attributes).forEach(function (a) { if (/^on/i.test(a.name) || (/^(href|src)$/i.test(a.name) && /^\s*javascript:/i.test(a.value))) x.removeAttribute(a.name); }); });
    doc.querySelectorAll('img').forEach(function (x) { var s = x.getAttribute('src') || ''; if (!/^data:/.test(s) && s.indexOf(location.origin + '/') !== 0) x.removeAttribute('src'); });   // only this site's own pictures load
    doc.querySelectorAll('style').forEach(function (s) { root.appendChild(s.cloneNode(true)); });
    var wrap = document.createElement('div'); wrap.className = 'hv-mailbody';
    [].slice.call(doc.body.childNodes).forEach(function (n) { wrap.appendChild(document.importNode(n, true)); });
    root.appendChild(wrap);
    var out = el('div', { class: 'dp-linkout', role: 'status' });
    root.addEventListener('click', function (e) { var a = e.target.closest ? e.target.closest('a') : null; if (!a) return; e.preventDefault(); follow(a.getAttribute('href') || '', out); });
    var links = [], seen = {};
    doc.querySelectorAll('a[href]').forEach(function (a) { var href = a.getAttribute('href'); if (!href || seen[href] || /^mailto:/i.test(href)) return; seen[href] = 1; links.push({ href: href, text: (a.textContent || '').trim() || href }); });
    open('mail', m.subject, [el('button', { type: 'button', class: 'dp-back', text: 'All emails', onclick: mails }),
      el('p', { class: 'dp-meta', text: 'From ' + (m.from || 'Handlark') + ' to ' + m.to + ', ' + when(m.at) }),
      host,
      links.length ? el('div', { class: 'dp-links' }, [el('strong', { text: 'Links in this email' })].concat(links.map(function (l) { return el('button', { type: 'button', class: 'dp-link', text: l.text.slice(0, 60), onclick: function () { follow(l.href, out); } }); }))) : null,
      out]);
  }
  /* where a link in an email goes: the app itself, Firebase's own pages, the unsubscribe page, or another site in a new tab */
  function follow(href, out) {
    var u; try { u = new URL(href, location.href); } catch (e) { return; }
    out.textContent = '';
    if (/firebaseapp\.com$/.test(u.hostname) && /\/__\/auth\/action$/.test(u.pathname)) {
      var mode = u.searchParams.get('mode'), code = u.searchParams.get('oobCode'), cont = u.searchParams.get('continueUrl') || D.page;
      if (mode === 'verifyEmail') {
        D.firebaseAction('verifyEmail', code).then(function (r) { out.appendChild(el('p', { text: r.ok ? 'Your email has been verified. You can now sign in with your new account.' : r.message })); if (r.ok) out.appendChild(el('a', { class: 'dp-btn', href: cont, text: 'Continue' })); });
        out.appendChild(el('p', { class: 'dp-note', text: 'Firebase shows this page live.' }));
        return;
      }
      if (mode === 'resetPassword') {
        var pw = el('input', { type: 'password', id: 'dp-newpw', autocomplete: 'new-password', 'aria-label': 'New password' }), msg = el('p', { role: 'status' });
        out.appendChild(el('p', { class: 'dp-note', text: 'Firebase shows this page live.' }));
        out.appendChild(el('label', { for: 'dp-newpw', class: 'dp-lbl' }, ['New password, at least 8 characters', pw]));
        out.appendChild(el('button', { type: 'button', class: 'dp-btn', text: 'Save password', onclick: function () { D.firebaseAction('resetPassword', code, pw.value).then(function (r) { msg.textContent = r.ok ? 'Password changed. You can now sign in with it.' : r.message; if (r.ok) out.appendChild(el('a', { class: 'dp-btn', href: cont, text: 'Continue' })); }); } }));
        out.appendChild(msg);
        return;
      }
    }
    if (/\/functions\/v1\/portal$/.test(u.pathname) && u.searchParams.get('unsub')) {   // one click unsubscribe: a page with a button, as live
      D.unsubscribe(u.href, false).then(function (html) {
        var t = new DOMParser().parseFromString(html, 'text/html');
        out.appendChild(el('strong', { text: (t.querySelector('h1') || {}).textContent || '' }));
        out.appendChild(el('p', { text: (t.querySelector('p') || {}).textContent || '' }));
        if (t.querySelector('form')) out.appendChild(el('button', { type: 'button', class: 'dp-btn', text: 'Unsubscribe', onclick: function () { D.unsubscribe(u.href, true).then(function (h2) { var t2 = new DOMParser().parseFromString(h2, 'text/html'); out.textContent = ''; out.appendChild(el('strong', { text: (t2.querySelector('h1') || {}).textContent || '' })); out.appendChild(el('p', { text: (t2.querySelector('p') || {}).textContent || '' })); }); } }));
      });
      return;
    }
    if (/\/functions\/v1\/portal$/.test(u.pathname) && u.searchParams.get('cal')) { out.appendChild(el('p', { text: 'This is a calendar feed. Add it to Google, Apple or Outlook calendar from your account in the app.' })); return; }
    if (u.origin === location.origin) { location.href = u.href; return; }
    var a = el('a', { href: u.href, target: '_blank', rel: 'noopener noreferrer', class: 'dp-btn', text: 'Open ' + u.hostname + ' in a new tab' });
    out.appendChild(a);
  }

  /* WhatsApp: the chat on a confirmed phone. What the person types goes to the server's WhatsApp webhook and gets the real reply */
  var waPhone = '';
  function wa() {
    var phones = D.waPhones();
    if (!waPhone || !phones.some(function (p) { return p.phone === waPhone; })) waPhone = D.myPhone() || (phones[0] || {}).phone || '';
    var pick = phones.length > 1 ? el('select', { id: 'dp-waphone', 'aria-label': 'Phone', class: 'dp-in', onchange: function (e) { waPhone = e.target.value; wa(); } }, phones.map(function (p) { var o = el('option', { value: p.phone, text: (p.name ? p.name + ', ' : '') + p.phone }); if (p.phone === waPhone) o.selected = true; return o; })) : null;
    var msgs = D.wa(waPhone), box = el('div', { class: 'dp-chat', 'aria-label': 'Messages' }, msgs.length ? msgs.map(function (m) {
      return el('div', { class: 'dp-bub ' + (m.dir === 'out' ? 'me' : 'them') }, [el('span', { text: m.voice ? 'Voice note' : m.text }), el('small', { text: (m.dir === 'out' ? 'Sent ' : 'Handlark, ') + when(m.at) })]); }) : [el('p', { class: 'dp-note', text: 'No messages yet.' })]);
    var input = el('input', { id: 'dp-watext', class: 'dp-in', autocomplete: 'off', placeholder: 'Type a reply, such as TODAY', 'aria-label': 'Message' });
    var send = function (text, voice) { if (!waPhone || (!voice && !String(text).trim())) return; D.sendWa(waPhone, String(text).trim(), voice).then(function () { refreshApp(); if (kind === 'wa') wa(); }); };
    var form = el('form', { class: 'dp-send', onsubmit: function (e) { e.preventDefault(); send(input.value); } }, [input, el('button', { type: 'submit', class: 'dp-btn', text: 'Send' })]);
    open('wa', 'WhatsApp', [note('A phone confirmed for WhatsApp in the app. Alerts arrive here; replies go to the server as they would from WhatsApp, and its answer comes back.'),
      phones.length ? pick : el('p', { text: 'No phone is confirmed yet. In the app open your account, add your WhatsApp number and confirm the code that arrives here.' }),
      waPhone ? box : null,
      waPhone ? el('div', { class: 'dp-chips' }, ['TODAY', 'TASKS', 'IN Brooks', 'OUT Finished the reconciliation', 'MEETINGS', 'HELP'].map(function (t) { return el('button', { type: 'button', class: 'dp-chip', text: t, onclick: function () { send(t); } }); })
        .concat([el('button', { type: 'button', class: 'dp-chip', text: 'Send a voice note', onclick: function () { send('', true); } })])) : null,
      waPhone ? form : null]);
    box.scrollTop = box.scrollHeight;
  }

  /* phone alerts: what the push service delivered */
  function alerts() {
    var list = D.alerts();
    open('alerts', 'Phone alerts', [note('Alerts the server sent to phones and computers with alerts on. Ones for this browser also pop up on the page. Turn alerts on in your account in the app.'),
      list.length ? el('ul', { class: 'dp-list' }, list.map(function (a) { return el('li', { class: 'dp-alert' }, [el('strong', { text: a.title }), el('span', { text: a.body }), el('small', { text: when(a.at) })]); })) : el('p', { text: 'No alerts yet.' })]);
  }
  /* an authenticator app: the code for the account signed in here */
  function auth() {
    var code = el('p', { class: 'dp-code', 'aria-live': 'polite' }), left = el('small');
    var tick = function () { D.authCode().then(function (c) { code.textContent = c ? c.slice(0, 3) + ' ' + c.slice(3) : 'No code yet'; left.textContent = c ? 'A new code in ' + (30 - Math.floor(Date.now() / 1000) % 30) + ' seconds' : 'Start two step sign in from your account in the app (Settings, then your name), then the code shows here.'; }); };
    open('auth', 'Authenticator app', [note('Stands in for an authenticator app on your phone, for the account signed in here.'), code, left]);
    tick(); timer = setInterval(tick, 1000);
  }

  [].forEach.call(document.querySelectorAll('#demo-more [data-panel]'), function (b) { b.addEventListener('click', function () { ({ mail: mails, wa: wa, alerts: alerts, auth: auth })[b.getAttribute('data-panel')](); }); });
  document.getElementById('demo-reset').addEventListener('click', function () { more.open = false; D.reset(); });
  document.getElementById('demo-still').addEventListener('click', function () { more.open = false; window.dispatchEvent(new Event('handlark:still')); });
  document.getElementById('demo-cron').addEventListener('click', function () {
    more.open = false;
    D.runCron().then(function (r) { refreshApp(); popUp({ title: 'Scheduled job', body: 'It ran: ' + (r.reminders || 0) + ' reminders, ' + (r.digests || 0) + ' daily summaries, ' + (r.emails || 0) + ' emails retried.' }); });
  });
  document.addEventListener('click', function (e) { if (more.open && !more.contains(e.target)) more.open = false; });

  /* new emails, messages and alerts: the counts, the open panel, and alerts for this browser pop up */
  var count = document.getElementById('demo-count');
  function counts() { var n = D.mails().length; count.hidden = !n; count.textContent = String(n); var b = document.querySelector('#demo-more [data-panel=mail]'); if (b) b.textContent = 'Emails sent' + (n ? ' (' + n + ')' : ''); }
  function popUp(a) {
    var card = el('button', { type: 'button', class: 'dp-pop', onclick: function () { card.remove(); if (a.url) location.href = D.page + String(a.url).replace(/^\/+/, ''); } },
      [el('small', { text: a.local ? 'Notification' : 'Phone alert' }), el('strong', { text: a.title }), a.body ? el('span', { text: a.body }) : null]);
    pop.appendChild(card); setTimeout(function () { card.remove(); }, 7000);
  }
  window.addEventListener('handlark-demo', function (e) {
    var d = e.detail || {};
    if (d.alert && d.here) popUp(Object.assign({ local: d.local }, d.alert));
    counts();
    if (kind === 'wa' && (d === 'wa')) wa();
    if (kind === 'alerts' && d.alert) alerts();
  });
  counts();
})();
