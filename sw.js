const C='page-v3';
const OFF='<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page</title><body style="margin:0;background:#0b0b12;color:#fff;font-family:sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:2rem"><div style="font-size:3rem">📡</div><h2>You are offline</h2><p style="opacity:.8;max-width:20rem">Page only works with an internet connection. Reconnect to continue.</p><button onclick="location.reload()" style="margin-top:1rem;padding:.7rem 1.6rem;border:0;border-radius:10px;background:#d4a017;font-weight:800">Try again</button><script>addEventListener("online",()=>location.reload())<\/script>';
self.addEventListener('install',e=>{ self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(k=>Promise.all(k.map(x=>caches.delete(x)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  if(e.request.mode==='navigate'){ e.respondWith(fetch(e.request).catch(()=>new Response(OFF,{headers:{'Content-Type':'text/html; charset=utf-8'}}))); }
});
