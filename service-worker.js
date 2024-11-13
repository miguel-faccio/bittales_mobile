const CACHE_NAME = "bit-tales-cache-v3";
const urlsToCache = [
    "/",                        // Página inicial
    "/index.html",              // Página principal
    "/love.html",               // Página Love
    "/velha.html",              // Página do Jogo da Velha
    "/velha.js",                // Script do Jogo da Velha
    "/velha.css",               // Estilo do Jogo da Velha
    "/forca.html",              // Página do Jogo da Forca
    "/script.js",               // Script do Jogo da Forca
    "/style.css",               // Estilo do Jogo da Forca
    "/quiz.html",               // Página do Jogo do Quiz
    "/script.js",               // Script do Jogo do Quiz
    "/styles.css",              // Estilos gerais do site
    "/manifest.json",           // Manifesto do PWA
    "/icons/icon-192x192.png",  // Ícone do PWA
    "/icons/icon-512x512.png",  // Ícone do PWA
    "/icons/forca-icon-192x192.png", // Ícone específico do Jogo da Forca
    "/icons/forca-icon-512x512.png", // Ícone específico do Jogo da Forca
    "/icons/quiz-icon-192x192.png",  // Ícone específico do Jogo do Quiz
    "/icons/quiz-icon-512x512.png"   // Ícone específico do Jogo do Quiz
];

// Evento de instalação - adiciona os arquivos ao cache
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting(); // Força o SW a se instalar imediatamente
});

// Evento de fetch - intercepta solicitações de rede e serve o conteúdo do cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        }).catch(() => {
            // Serve páginas específicas em caso de falha de rede
            if (event.request.url.endsWith("/love.html")) {
                return caches.match("/love.html");
            } else if (event.request.url.endsWith("/velha.html")) {
                return caches.match("/velha.html");
            } else if (event.request.url.endsWith("/forca.html")) {
                return caches.match("/forca.html");
            } else if (event.request.url.endsWith("/quiz.html")) {
                return caches.match("/quiz.html");
            }
        })
    );
});

// Evento de ativação - limpa caches antigos que não correspondem ao atual
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName); // Remove caches antigos
                    }
                })
            );
        })
    );
    self.clients.claim(); // Faz o novo SW controlar as páginas imediatamente
});
s