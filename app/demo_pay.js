/* Demo only: the checkout and card pages the payment companies show live. Nothing here takes or sends a real payment:
   paying sends the same signed notifications Paystack or Lemon Squeezy would send to Handlark's webhooks function, then
   goes back to the app, as the real pages do. */
(function () {
  var D = window.HANDLARK_DEMO, box = document.getElementById('pay'), q = new URLSearchParams(location.search);
  var el = function (tag, attrs, kids) { var e = document.createElement(tag); Object.keys(attrs || {}).forEach(function (k) { if (k === 'text') e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); }); (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); }); return e; };
  var show = function (kids) { box.textContent = ''; kids.forEach(function (k) { if (k) box.appendChild(k); }); };
  var banner = function (t) { return el('p', { class: 'demo', text: t }); };
  var back = el('a', { href: D.page, text: 'Back to Handlark' });
  if (!D) { box.textContent = 'This page only works inside the Handlark demo.'; return; }
  var kind = q.get('paystack') ? 'paystack' : q.get('lemon') ? 'lemon' : q.get('card') ? 'card' : '', id = q.get(kind) || '';

  if (kind === 'card') {   // the payment company's page to change the card on a subscription
    var c = D.card(id);
    if (!c) { show([banner('Demo card page, no real card'), el('div', { class: 'card' }, [el('h1', { text: 'This subscription was not found' }), back])]); return; }
    var num = el('input', { id: 'cd-num', inputmode: 'numeric', autocomplete: 'off', value: c.provider === 'paystack' ? '5060 6666 6666 6666 666' : '5555 5555 5555 4444' });
    var msg = el('p', { class: 'ok', role: 'status' });
    var save = el('button', { type: 'button', text: 'Save card' });
    save.addEventListener('click', function () { var d = num.value.replace(/\D/g, ''); if (d.length < 12) { msg.className = 'err'; msg.textContent = 'Type a card number.'; return; } D.setCard(id, d.slice(-4)); msg.className = 'ok'; msg.textContent = 'Card updated. Payments now use the card ending ' + d.slice(-4) + '.'; });
    document.title = 'Demo card page';
    // Lemon Squeezy's customer page also lets the customer change plan; Handlark hears about it from Lemon Squeezy
    var planBox = null;
    if (c.provider === 'lemon' && c.plan) {
      var pick = el('select', { id: 'cd-plan' }, [['starter', 'Starter'], ['team', 'Team'], ['agency', 'Agency']].map(function (x) { var o = el('option', { value: x[0], text: x[1] }); if (x[0] === c.plan) o.selected = true; return o; }));
      var pmsg = el('p', { class: 'ok', role: 'status' });
      var sw = el('button', { type: 'button', text: 'Switch plan' });
      sw.addEventListener('click', function () { sw.disabled = true; D.lemonSwitch(c.id, pick.value, c.yearly).then(function (r) { sw.disabled = false; pmsg.className = r.error ? 'err' : 'ok'; pmsg.textContent = r.error || 'Plan changed. Lemon Squeezy has told Handlark.'; }); });
      planBox = el('div', { class: 'card' }, [el('h1', { text: 'Your plan' }), el('p', { class: 'muted', text: 'You can also change plan here, as on Lemon Squeezy\'s own customer page.' }), el('label', { for: 'cd-plan' }, ['Plan', pick]), sw, pmsg]);
    }
    show([banner('Demo card page, no real card'), el('div', { class: 'card' }, [el('h1', { text: 'Update your card' }),
      el('p', { class: 'muted', text: (c.provider === 'paystack' ? 'Paystack' : 'Lemon Squeezy') + ' would show its own page here. Your plan is paid with the card ending ' + c.last4 + '.' }),
      el('label', { for: 'cd-num' }, ['New card number', num]), save, msg]), planBox, back]);
    return;
  }
  var info = kind ? D.checkout(kind, id) : null;
  if (!info) { show([banner('Demo checkout, no real payment'), el('div', { class: 'card' }, [el('h1', { text: 'This checkout was not found' }), back])]); return; }
  if (info.status !== 'pending') { show([banner('Demo checkout, no real payment'), el('div', { class: 'card' }, [el('h1', { text: 'This checkout was already paid' }), el('p', { class: 'muted', text: 'Each payment page works once.' }), back])]); return; }
  var card = el('input', { id: 'pc-num', inputmode: 'numeric', autocomplete: 'off', value: info.card }), exp = el('input', { id: 'pc-exp', value: '12/30', autocomplete: 'off' }), cvc = el('input', { id: 'pc-cvc', value: kind === 'paystack' ? '408' : '123', autocomplete: 'off' });
  var err = el('p', { class: 'err', role: 'alert' });
  var go = el('button', { type: 'button', text: 'Pay ' + info.amount });
  go.addEventListener('click', function () {
    var d = card.value.replace(/\D/g, '');
    if (d.length < 12) { err.textContent = 'Type a card number.'; return; }
    go.disabled = true; go.textContent = 'Paying…'; err.textContent = '';
    D.pay(kind, id, d.slice(-4)).then(function (r) {
      if (r.error) { err.textContent = r.error; go.disabled = false; go.textContent = 'Pay ' + info.amount; return; }
      show([banner('Demo checkout, no real payment'), el('div', { class: 'card' }, [el('h1', { text: 'Payment received' }), el('p', { class: 'muted', text: 'Taking you back to ' + info.merchant + '…' })])]);
      setTimeout(function () { location.href = r.back; }, 700);
    }, function () { err.textContent = 'Something went wrong. Try again.'; go.disabled = false; go.textContent = 'Pay ' + info.amount; });
  });
  document.title = 'Demo checkout';
  show([banner('Demo checkout, no real payment'), el('div', { class: 'card' }, [
    el('p', { class: 'muted', text: 'In the live app ' + info.provider + ' shows its own payment page here. This one only stands in for it: no card is charged.' }),
    el('h1', { text: info.merchant }), el('p', { class: 'muted', text: info.item }), el('p', { class: 'amount', text: info.amount }),
    el('p', { class: 'muted', text: 'Receipt to ' + info.email }),
    el('label', { for: 'pc-num' }, ['Card number', card]), el('div', { class: 'row' }, [el('label', { for: 'pc-exp' }, ['Expiry', exp]), el('label', { for: 'pc-cvc' }, ['Security code', cvc])]),
    go, err, el('a', { href: D.page, text: 'Cancel and go back' })])]);
})();
