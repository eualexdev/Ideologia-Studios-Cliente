var cacheName = 'ISTudios';
var filesToCache = [
    './',
    './index.html',
    './manifest.json',
    './assets/img/Logo-256x256.png',
    './sw.js',
    './login/index.html',
    './login/main.css',
    './login/config.js',
    './alunos/index.html',
    './alunos/src/index.js',
    './alunos/src/style/index.css',
    './alunos/src/style/menuBar.css'
    // adiciona todos os arquivos
];
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});