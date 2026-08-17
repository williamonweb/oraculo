const CACHE_NAME = "oraculo-tarot-v2";
const CARD_FILES = [
  "./assets/cards-webp/00-o-louco.webp",
  "./assets/cards-webp/01-o-mago.webp",
  "./assets/cards-webp/02-a-sacerdotisa.webp",
  "./assets/cards-webp/03-a-imperatriz.webp",
  "./assets/cards-webp/04-o-imperador.webp",
  "./assets/cards-webp/05-o-hierofante.webp",
  "./assets/cards-webp/06-os-enamorados.webp",
  "./assets/cards-webp/07-o-carro.webp",
  "./assets/cards-webp/08-a-justica.webp",
  "./assets/cards-webp/09-o-eremita.webp",
  "./assets/cards-webp/10-a-roda-da-fortuna.webp",
  "./assets/cards-webp/11-a-forca.webp",
  "./assets/cards-webp/12-o-enforcado.webp",
  "./assets/cards-webp/13-a-morte.webp",
  "./assets/cards-webp/14-a-temperanca.webp",
  "./assets/cards-webp/15-o-diabo.webp",
  "./assets/cards-webp/16-a-torre.webp",
  "./assets/cards-webp/17-a-estrela.webp",
  "./assets/cards-webp/18-a-lua.webp",
  "./assets/cards-webp/19-o-sol.webp",
  "./assets/cards-webp/20-o-julgamento.webp",
  "./assets/cards-webp/21-o-mundo.webp"
];
const APP_FILES = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./icon.svg", ...CARD_FILES];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("./index.html")))
  );
});
