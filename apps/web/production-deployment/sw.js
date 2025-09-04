const CACHE_NAME = 'walmco-cache-v1';
const ASSET_EXTENSIONS = [
  '.js', '.css', '.woff2', '.woff', '.ttf', '.eot', '.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET
  if (request.method !== 'GET') return;

  // HTML: network-first to ensure fresh content
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          return fresh;
        } catch (_) {
          const cache = await caches.open(CACHE_NAME);
          const cached = await cache.match(request, { ignoreSearch: true });
          return cached || new Response('Offline', { status: 503 });
        }
      })()
    );
    return;
  }

  // Static assets: cache-first
  if (ASSET_EXTENSIONS.some((ext) => url.pathname.endsWith(ext))) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        // Cache successful responses
        if (response.ok && (response.type === 'basic' || response.type === 'cors')) {
          cache.put(request, response.clone());
        }
        return response;
      })()
    );
  }
});
