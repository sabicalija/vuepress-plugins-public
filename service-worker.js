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
    "revision": "a2f294928567c55836a91a710e684d13"
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
    "url": "assets/js/app.6ebdcf40.js",
    "revision": "216670b96b67e7e64a504c6d4d767444"
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
    "revision": "5375c113a1ae8623324e43bb2cab0460"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "1cabba3777968588737cea6eda3c6824"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "6318a586435ce0803c1ccb8a43893899"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "9fe8a4b9dd0cf8ba4a506861c43f51cc"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "16663d289e22f0fe22de361df31668a9"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "04d526b160b664068eebedb8578bed00"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "403f21ba1584699758daf4a1593f1730"
  },
  {
    "url": "index.html",
    "revision": "75ef2df6f557d22629ca09540805ca6f"
  },
  {
    "url": "reference/directory-classifier.html",
    "revision": "e0e729d8971790a14bea930ccfe2e45b"
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
