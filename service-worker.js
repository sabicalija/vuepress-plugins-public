/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "efe7f8517a414a4047d4068fca3069ea"
  },
  {
    "url": "assets/css/0.styles.9bda495d.css",
    "revision": "2fae395ac9cb7026f77bf317c93fef4d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.88894ff0.js",
    "revision": "36d941706a72691aeb466e85f7e7be86"
  },
  {
    "url": "assets/js/3.71d8af76.js",
    "revision": "dca399350d63464fcd1bb9b463e85491"
  },
  {
    "url": "assets/js/4.31087fff.js",
    "revision": "3e47d4ab58713da1f8d952af83cdc6d1"
  },
  {
    "url": "assets/js/5.b08aca40.js",
    "revision": "4cb57eb5136e5704ed782ad8dba78263"
  },
  {
    "url": "assets/js/6.8198d284.js",
    "revision": "1f43e92ce53757be8e8f1a438b5ee734"
  },
  {
    "url": "assets/js/7.6e6593b8.js",
    "revision": "68de1aa8d0f0076b7412b4365bddb66c"
  },
  {
    "url": "assets/js/8.52860b95.js",
    "revision": "8b029a2fcbf1e9d059f78e4ee6492a69"
  },
  {
    "url": "assets/js/app.8b2073ec.js",
    "revision": "ee7ef7e4595ffe6be1b74edbb6661e21"
  },
  {
    "url": "hero-clean.svg",
    "revision": "9ad9e07aeb8f504f27cb0e8a82e7f585"
  },
  {
    "url": "hero.png",
    "revision": "d7103bc1eb3b2a71575d8faa42211659"
  },
  {
    "url": "hero.svg",
    "revision": "b9b774c069a87348acceaa3f83e4595a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "eef01c0c37684a912a3bce3e45077236"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "979973d811cbf0e4980ca575d7d9894b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "76172872b501a1950ddafcc2de74b5f6"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "19a4fad3650b0e4dc316b85f14dab757"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "c1c874cb198516447931b1b167ff85b6"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "9b7a197979a41a1f9d36293bb7810e34"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "e2c1442bfcc756230ffc1eec306a29c6"
  },
  {
    "url": "index.html",
    "revision": "64b1f5ea4fd3d0d91b5fcf791671246d"
  },
  {
    "url": "reference/directory-classifier.html",
    "revision": "50ce3066256bed125be9582d88ea27cc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
