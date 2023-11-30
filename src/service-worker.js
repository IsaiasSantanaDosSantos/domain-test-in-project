const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
  "/index.html",
  "/css/index.css",
  "/js/index.js",
  "/offline.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", async (event) => {
  event.respondWith(
    caches.match(event.request).then(async (response) => {
      if (response) {
        const expirationTime = response.headers.get("X-Cache-Expiration");
        if (expirationTime && Date.now() > parseInt(expirationTime, 10)) {
          return await fetchAndUpdateCache(event.request);
        }
        return response;
      }

      return await fetchAndUpdateCache(event.request);
    }),
  );
});

async function fetchAndUpdateCache(request) {
  try {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return caches.match("/offline.html");
    }

    const cacheExpiration = Date.now() + 60 * 60 * 1000;
    response.headers.append("X-Cache-Expiration", cacheExpiration.toString());

    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());

    return response;
  } catch (error) {
    console.error("Erro ao buscar e atualizar cache:", error);
    throw error;
  }
}
