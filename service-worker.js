const CACHE_NAME = "dv-shop-pwa-20260611ao";
const APP_SHELL = [
    "./",
    "./dv-shop.html",
    "./dv-shop-app.css?v=20260611ao",
    "./dv-shop-app.js?v=20260611ao",
    "./dv-shop-catalog.js?v=20260611ao",
    "./manifest.webmanifest?v=20260611ao",
    "./dv-shop-icon-192.png",
    "./dv-shop-icon-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys
                .filter((key) => key !== CACHE_NAME)
                .map((key) => caches.delete(key))
        ))
    );
    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    const { request } = event;
    if (request.method !== "GET") {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request).catch(() => caches.match("./dv-shop.html", { ignoreSearch: true }))
        );
        return;
    }

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) {
        return;
    }

    if (url.pathname === "/__proxy" || url.pathname === "/api/proxy" || url.pathname === "/proxy.php") {
        event.respondWith(fetch(request));
        return;
    }

    event.respondWith(
        caches.match(request, { ignoreSearch: true }).then((cached) => {
            const networkFetch = fetch(request).then((response) => {
                if (response && response.ok) {
                    const cloned = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
                }
                return response;
            });

            return cached || networkFetch;
        })
    );
});
