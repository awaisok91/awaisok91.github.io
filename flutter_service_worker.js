'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "960547414ebb31313df25e7697de34d5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b06b13152f0088c63738e6c2d3303d84",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7c7c423be8e1e9852293cae4c407592c",
".git/logs/refs/heads/main": "158a6ab09ad6bc4c9dfeef5aa7f6c9ff",
".git/logs/refs/remotes/origin/main": "0fc157e1a3385f3b18b906a1f09781da",
".git/objects/02/2374b27adc91c67e798cca697c8a178c144e70": "1ef35397b67a34a28b3766bc448280b3",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0e/20d81ee9864281eb2606f1e2f8d6bcf1257a57": "9e8a9184db67905fbd53444a20aa00f5",
".git/objects/19/9658d18074bff25028db2b0d37e27edcf24a64": "884c8a3e41e94eec2b51206d0230f79c",
".git/objects/1d/206b725e44139cf045777564ff690c45c6131f": "f320391c7a4d94616abd2af5a49a29bc",
".git/objects/1e/788825c60ed4eb95b0bfbb2a16f6d5750aadaf": "5975523be1ae3d60011b77b8f32e3148",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/ab2b7b05a231eb6bd182c7544fdc71354d8425": "2abc0003e6599d335696f49ef4655d2d",
".git/objects/2c/70ee6f1591f0e9679da9cdb348965ba3533a76": "ddd3ece8da5e0f744678805e85074670",
".git/objects/30/a18ad9e9cc780a129e409e16e2056abfe8e4a9": "646168da613266998067d249c09c76c0",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/dc445c243adc11db03c0fe46cf6d097033273e": "61a52d9804ae51e766da1ff2c8aa9018",
".git/objects/3e/5486f6ce315db7b37ef424055c1edd60e58bc2": "d9d5426860198b85a753a0d147970a5a",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/192da43bf841e53eee677d07fa863d719c95e9": "0e94ed609dc941410ae95e0f4fb2b0c4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/15362f31c76c6664e7e382a1288f50c91c4e81": "a7653d8f14e26ba9acc34513aae6600d",
".git/objects/5b/3cffe2bb5a36fca0e8a327459918b74498d61e": "4cf76c6830266e0bcaad7ad2278acdf6",
".git/objects/5d/cd87b2fc92fde303e1896b74d18b94fe6d13e2": "2869c08210b720545b3fc1e96516784b",
".git/objects/5e/323f3367ae6ee9ab234db228bbb5a1b2173256": "0984bb065a07b36f4d151313fd7a449e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/70514dfe050ef915c12f937d705c87a1d2bae0": "c32fa415589aad80a6ee35d0af7261ad",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/7c/344df52d7f1c8275a6560d78d50ffec496244f": "d52a726b6a0e9bcf24cfdf62fe0d4ffd",
".git/objects/7c/7d3f4c649620b4db7169807b0a44fc7466567c": "9678c202a684d7019502c5376f281f06",
".git/objects/7e/21ad0af67de63331806a7154ce68a2fadfa708": "5a8752798367b1aac64ef1fd2cc765d3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/9b/29788ac1802309bdd1475f0c8e95804b701442": "4d1cca65a7cb9e6973d54a61a45c5180",
".git/objects/a0/055faf7120a96b505c2814a1e65420bd3fe6df": "cfb8c851625d810a7c5e110a47cf1fc5",
".git/objects/a0/3113f559590158a5fd23aabe3bcb32bca98a3b": "cfca3386f38aa79c4728946036b75963",
".git/objects/a2/426a9a985793a116ee53d8427eb1ae4cd341e5": "7e4c0a573f91032cdd71a904866c4e7d",
".git/objects/a4/753d50bea777e2858994ceed40bd9a6ed3762a": "c0b31c40270e988afcb8995006f9dbc8",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a5/f25d26a422176eb2fbf27279fc338230aa05dc": "44608ae5987ce9804ce25c63aede512a",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/4ca7e8e41d7763f992d53ee7f38d1257287ea2": "12c1a0d55c12e28b374dc22f27c9e523",
".git/objects/ac/168df93de16954efedba9f215bbe1e2647d8fa": "9a24e8258776359319a8ae8073625f02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2395b5dc91420e9203ee13a96a13cab690e746": "8dddfb89c6e41f070a0cee90862dc781",
".git/objects/ba/673d139fe212487e3d2bf70150307a193d37c1": "751b026e41bc00e9b1a5ca1b5026bbdd",
".git/objects/c3/3f68f737e5a86ea96cf53d8b4dab442f806ca3": "ddf0c8019aaac4da16c226cf9f5ad0a2",
".git/objects/c6/5e9ee371a7b79b770569c417c8a67f85cb5526": "171bb08242295b73aca793d145b51029",
".git/objects/d2/f326b36186d5dd413f96178d79ca2388eeac91": "d36e3ec0a54a355a4ae200482472bcaf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/64c99b294609c163b5a23d4a9d9525409f1e6a": "8c2291a5356c1e3e7dcefe2a4c78ae34",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/6edb82d1f482a7ed70733cbe9ba074d3f56f8f": "b3f1eb648bed9b73d3f021421279be1a",
".git/objects/e3/d0a7ff0854e6e432afef5143674434ab0c6ef5": "dbe92143016dedf6b545cab6b1b25e04",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/25e926fc75f9f8ebe93f79f776d0e7fa54c385": "8e57e6b5dba23279ae076dbe304527d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/6e3c00b7ae1b48c9d2cca2d7e5d4bd4d45be51": "cc5045cd1d9ae1c32e6f1d8f95e6667b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ff/08d1cec60fef8fae1077fd1f4d0d5be8b6075c": "a98b0e504441f53a30cd250ea14ac1ec",
".git/refs/heads/main": "446c962601fa3bff58e372b4906443e9",
".git/refs/remotes/origin/main": "446c962601fa3bff58e372b4906443e9",
"assets/AssetManifest.bin": "c7b0eaa661b73c6102f953985aaa5816",
"assets/AssetManifest.bin.json": "bda76504c05025d07dd960b0fc739e4b",
"assets/AssetManifest.json": "464559c4d1cf1bd541841b483d041f9a",
"assets/assets/icons/clock.svg": "b9ff6dd2862543c3b9743a455bbffd82",
"assets/assets/icons/flutter.svg": "356b8423fb4c37e3babe292a9e03c975",
"assets/assets/icons/github.svg": "76d344f08412543c74ccd1fb2493d607",
"assets/assets/icons/linkedin.svg": "a119dc13891e0fafc92ba1176712d3cc",
"assets/assets/icons/matrix.png": "9127a90a234090cbf8815bb0502fd873",
"assets/assets/icons/playstore.svg": "aaada2a103792cf75a90a9c39e766725",
"assets/assets/icons/topMate.png": "8f85d44acfac5e1e6f6e43f1ae2f88aa",
"assets/assets/icons/twitter.svg": "8f662cde3e6a9aca24b77c1639d9423e",
"assets/assets/icons/youtube.svg": "3eb182663fd1181f048705dedec45580",
"assets/assets/images/cloudRed.svg": "bda20cdd4888404719f432377a3665f9",
"assets/assets/images/cloudyBlue.svg": "e9d5e246793cd42bc01f6809d826583d",
"assets/assets/rive/rain.riv": "91a917f7343f7ac4523955e4ac8ca7f6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "01c858f62283ee45b521ecaf0794ae5a",
"assets/NOTICES": "be29a5e19a84130c6e349aebdd22e87a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "e491a9a818a5d229759f5722694576ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c567c39b561367eb72dc28677ed661bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f0a3fac06f0b67c5898898620fdc2792",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b4e6e022e4e6389f8a5f84573e793e3b",
"/": "b4e6e022e4e6389f8a5f84573e793e3b",
"main.dart.js": "c17d5e4f75c9a33de1b46a8439fd748b",
"manifest.json": "11c3dbd537bfae0019b1bacc0b55a8b1",
"version.json": "cbfe3cec8d2c7272aeb7dab665a3cdcb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
