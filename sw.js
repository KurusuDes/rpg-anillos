// Service worker de la app instalable y del paquete de Play Store (2026-10-28). Solo guarda archivos del sitio para que
// cargue rápido y abra sin conexión; nunca el estado de la partida (regla 4 de CLAUDE.md: la partida guardada es un
// archivo que descarga el anfitrión).
//   - La página: primero la red; sin conexión, la última copia.
//   - assets/ (nombres con huella de Vite) y arte/: la copia guardada al momento y se renueva por detrás, así una
//     publicación nueva llega en la carga siguiente.
//   - Otros dominios (fuentes, servidor de PeerJS): no se tocan.
const CACHE = 'rpg-anillos-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const res = await fetch(req);
        if (res.ok) (await caches.open(CACHE)).put(req, res.clone());
        return res;
      } catch {
        const cache = await caches.open(CACHE);
        return (await cache.match(req, { ignoreSearch: true })) || (await cache.match(new URL('./', self.registration.scope).href)) || Response.error();
      }
    })());
    return;
  }
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req);
    const fresh = fetch(req).then((res) => { if (res.ok) cache.put(req, res.clone()); return res; });
    if (hit) { e.waitUntil(fresh.catch(() => {})); return hit; }
    return fresh;
  })());
});
