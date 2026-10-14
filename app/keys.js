/* Setup keys page: makes the VAPID keys, SESSION_SECRET and SECRET_KEY in this browser. Nothing is sent anywhere. */
(function(){
  var b64u=function(u8){var s='';new Uint8Array(u8).forEach(function(b){s+=String.fromCharCode(b);});return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');};
  function row(name,val,note){var d=document.createElement('div');d.className='k';
    d.innerHTML='<b></b><code></code><small style="color:var(--muted)"></small><button type="button" class="ghost">Copy</button>';
    d.querySelector('b').textContent=name;d.querySelector('code').textContent=val;d.querySelector('small').textContent=note;
    d.querySelector('button').onclick=function(){var btn=this;(navigator.clipboard?navigator.clipboard.writeText(val):Promise.reject()).then(function(){btn.textContent='Copied';},function(){btn.textContent='Select the text and copy it';});};
    return d;}
  function make(){var out=document.getElementById('out');out.textContent='Making keys…';
    crypto.subtle.generateKey({name:'ECDSA',namedCurve:'P-256'},true,['sign','verify']).then(function(kp){
      return Promise.all([crypto.subtle.exportKey('raw',kp.publicKey),crypto.subtle.exportKey('jwk',kp.privateKey)]);}).then(function(k){
      out.textContent='';
      out.appendChild(row('VAPID_PUBLIC_KEY',b64u(k[0]),'For phone alerts. This half is public.'));
      out.appendChild(row('VAPID_PRIVATE_KEY',k[1].d,'For phone alerts. Keep it secret.'));
      out.appendChild(row('SESSION_SECRET',b64u(crypto.getRandomValues(new Uint8Array(32))),'Switches on two step sign in. Keep it secret.'));
      out.appendChild(row('SECRET_KEY',b64u(crypto.getRandomValues(new Uint8Array(32))),'Encrypts stored keys and signs unsubscribe links. Keep it secret and never change it.'));
    }).catch(function(e){out.textContent='This browser could not make keys: '+e.message+'. Try Chrome, Edge or Safari.';});}
  document.getElementById('again').onclick=make;make();
})();
