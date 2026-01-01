const CACHE_NAME = 'fitlogwebapp-v1';
const urlsToCache = [
 './',
 'css',
 'dataTables.min.css',
 'fontawesome.min.css',
 'favicon.ico',
 'icons',
 'apple-touch-icon.png',
 'favicon-16.png',
 'favicon-32.png',
 'favicon.ico',
 'icon-128x128.png',
 'icon-144x144.png',
 'icon-152x152.png',
 'icon-16x16.png',
 'icon-180x180.png',
 'icon-192x192.png',
 'icon-32x32.png',
 'icon-384x384.png',
 'icon-512x512.png',
 'icon-72x72.png',
 'icon-96x96.png',
 'icon.svg',
 'index.html',
 'js',
 'chart.js',
 'dataTables.min.js',
 'i18n.js',
 'jquery-3.7.0.min.js',
 'zangodb.min.js',
 'manifest.json',
 'sw.js',
 'tree.txt',
 'webfonts',
 'fa-brands-400.eot',
 'fa-brands-400.svg',
 'fa-brands-400.ttf',
 'fa-brands-400.woff',
 'fa-brands-400.woff2',
 'fa-regular-400.eot',
 'fa-regular-400.svg',
 'fa-regular-400.ttf',
 'fa-regular-400.woff',
 'fa-regular-400.woff2',
 'fa-solid-900.eot',
 'fa-solid-900.svg',
 'fa-solid-900.ttf',
 'fa-solid-900.woff',
 'fa-solid-900.woff'
];

// Installation - cache all resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache).catch(err => {
          console.warn('Some resources could not be cached:', err);
        });
      })
  );
  // Forces the immediate activation of the new service worker
  self.skipWaiting();
});

// Activation - clears old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME) // Keep only the current cache
          .map(cacheName => {
            console.log('Removing old cache:', cacheName);
            return caches.delete(cacheName); // Remove old caches
          })
      );
    })
  );
  return self.clients.claim();
});

// Fetch - estratégia Cache First com fallback para rede
self.addEventListener('fetch', event => {
  // Ignores non-GET requests and Chrome extensions.
  if (event.request.method !== 'GET' || 
      event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // If found in the cache, return it
        if (cachedResponse) {
          return cachedResponse;
        }

        // If you can't find it, search online
        return fetch(event.request)
          .then(response => {
            // Check if the answer is valid.
            if (!response || response.status !== 200 || response.type === 'opaque') {
              return response;
            }

            // Clone the response for caching and use.
            const responseToCache = response.clone();

            // Adds to cache for future use.
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            // If the network fails and it's an HTML page, it returns the offline page
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('./index.html');
            }
            // For other resources, you can return a fallback
            console.log('Fetch failed; returning offline page instead.', error);
          });
      })
  );
});