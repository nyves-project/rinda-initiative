/* Rinda Initiative — Service Worker */
const CACHE_NAME = 'rinda-v46';
const ASSETS = [
  '/',
  '/index.html',
  '/pitch.html',
  '/app/index.html',
  '/app/knowledge.html',
  '/app/modules.html',
  '/app/order.html',
  '/app/ussd.html',
  '/app/quiz.html',
  '/app/impact.html',
  '/app/certificate.html',
  '/app/agent.html',
  '/app/clinic.html',
  '/app/menstrual.html',
  '/app/community.html',
  '/app/rewards.html',
  '/app/library.html',
  '/locales/kin.js',
  '/locales/en.js',
  '/assets/css/app.css',
  '/assets/css/landing.css',
  '/assets/js/app.js',
  '/assets/js/landing.js',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        ASSETS.map(url => cache.add(url).catch(() => {}))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  
  // Bypass Service Worker explicitly for PDFs to allow Chromium to resolve ranged requests for PDF.js reading
  if (e.request.url.includes('.pdf')) return;
  
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return response;
        })
        .catch(() => caches.match('/app/index.html'));
    })
  );
});
