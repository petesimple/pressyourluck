
const CACHE_NAME = "pyl-scoreboard-cache-v1";
const urlsToCache = [
  "press_your_luck_dynamic_players.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "PYLlogonoBG.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
