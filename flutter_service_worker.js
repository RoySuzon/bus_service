'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e686cdba9752d1ccb2d41cd60faf9d7e",
"version.json": "95272e330602001812fe0f42f6480f64",
"index.html": "73bbf53f95e0392bab565442a57bfc28",
"/": "73bbf53f95e0392bab565442a57bfc28",
"main.dart.js": "f36ab79ed57e2fa4c96e813ca6ead3ca",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e8ed1331b3c4ecd47280cb55e5f3fc2d",
".git/config": "9a97ccd34eb5e2950ac08a10e5821543",
".git/objects/50/c288c8880b8d1c85380416d4d0be65048e9b12": "ccd0a40f08286bc4178ce4c0b69bc4c6",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "4643131532bd21681468718600b3fdcf",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/34/fdf0707332cb13da64f9969e380f6e9c2e1894": "b9767ff81bab4cb3941439122839a79d",
".git/objects/9c/51eec18cb86c8e64d53dd52bf867bd004662bc": "0830ec27c9df4a82f2ed5f77792ee08c",
".git/objects/9c/4e20359a8beddaab73f88bfaf905c4aa67e7c0": "a10db99a4c1971e76c8eeea4d41825b3",
".git/objects/a4/cb19d8aac91be800090e45edd59601a422dd17": "d4fd80368a3631dd70d8996bd6fa0e69",
".git/objects/ad/1edb73528ab9b48c26c22fda139a54f397c0ed": "786ecc6232994814391e5e3f0f556da9",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/c6/79be9f3a26b7721b40c9da9ecabb37ff000a95": "3e09e5c55001d2ec940996ad290b7851",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "c071319a7242e951039ba343446845d0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/86/8259447d8a22816e4e7972e10e8c34dd0cc7e1": "78891def102c5a6bf751c467a57a7f79",
".git/objects/72/c15c73dae67b3255bd58093c3cc81239f15f73": "0a8d5fdc691260aea0d3effd36b6fd8f",
".git/objects/72/d8e6d3e941054f1e25c4ca293e33f2f140d840": "8c313c65860561e16882ef476815d85c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/44/6d67439e5573bb7505899cf914da16b039ad9b": "a557a4a57f28c09bb1300d13b1ab057f",
".git/objects/44/76ab2ab7686d512e4ec5d64c27b3961aaba3a7": "3668659de2f9a43e6328bc1de3545c93",
".git/objects/2a/921257065b7d5106c7e387e2d8eba525d1f50e": "08ebdba508f91674d9bf805a30265126",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/91/af2eca5ad311acb41f5418654abe46cb6df65c": "ca7aaa8cbf752b3f182ac483b516cb1c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/3f/92409627534a30987bf6574be46bbe18bfdcda": "c39381ef93931200f59a9a76bfdb29ce",
".git/objects/37/36bcc7496cea4b300a405a3efe56e6aa5e791d": "6d9cf0d3da3b3f6e24f6adf303f32401",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/01/ea4204bd09470e1c16d512bc8742a387243dd3": "6e7ef6fdfbe27b0e07fc78cc704c56b3",
".git/objects/97/c5b4c5d3e6ef1bc941553cb5d096ac581e64b1": "4fb9c0f74827a4f8dffffebb42d21889",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/9b0c0da33695da7c36d0aaf07f5b933db964cb": "972acd0ec952455c5e4d71e72c3ba134",
".git/objects/dc/a93f9a3ce1169256b7964af5533efb7f06ba4e": "428551e095a6bbcf707d9c5eff8822ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ea/81ca2b00b4367b5a2ee3eecb423f0b6cce1e54": "531074f51978981b9e2d33d2feb6008c",
".git/objects/f1/e907b95f8ed8c646ef088e1edfd0f8b9fb2008": "252fd8722d626096ad658504440c58bc",
".git/objects/cb/18bda3b850a9f7e24903f5924bb3056cabf537": "88fbee26d60d6bea7392a8da5a359bf4",
".git/objects/e0/ddb9ae22eaeece7e5fc1f8ddc1f3e535532ebb": "20566c4611bceef36dc9cbb3fe66b5e2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/41/64f38170607f521d48bba78957358eb8888e88": "2bd2f957727cdc407c8503b17e3dff00",
".git/objects/48/b490fd0d45110edc12b1529c4ff7ab58946285": "dfa99773ca0eb8bf3ebc78269a538558",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/49/ffbad690904b664bf7a074c12e12233b1beb88": "5af791388d7493d3c5429f336a14518f",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "b8d6f15ef784ef37473a3264834abc7d",
".git/objects/47/5dc276dd5805df4fb90ec467a8c05ab5d0c980": "bf21a410ae1fa42f97132b48586fac72",
".git/objects/78/30a2cb11a27b932198f875b11f87a88ec893ad": "920d44ea4d4c70bfbdade6a00f659017",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b83f588860a8d31ca84d6ff8a8a2d9d",
".git/logs/refs/heads/main": "8b83f588860a8d31ca84d6ff8a8a2d9d",
".git/logs/refs/remotes/origin/main": "89416a0f99209e8cb789fd9bdd08dad5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d03f32043720808e75e2ff762f2fedf5",
".git/refs/remotes/origin/main": "d03f32043720808e75e2ff762f2fedf5",
".git/index": "43ccad8cd8e953af6bac466c96ade9b7",
".git/COMMIT_EDITMSG": "cd614fa36a14c3d9e33d42640ff1cc00",
".git/FETCH_HEAD": "3cf64fcb248dd5d56e10eb71a85e0071",
"assets/AssetManifest.json": "657aca3b00164931c399b3ab3e67271c",
"assets/NOTICES": "6ebfd749f4192578fdd224a023572eb0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "cbfda4befeb04913c72c6711f02c50d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "753d923a94c9109b0a776174c8f63c0c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6bf5adbc6d765a5ddabee90b6c55b9d1",
"assets/fonts/MaterialIcons-Regular.otf": "953a734b6045f87ddb7f8713c77d42b9",
"assets/assets/routes_list.json": "dbb09585b25095d8522d84a0b0610b95",
"assets/assets/market_off_day.json": "71de42024a2154b2fa58720f5e95b1fc",
"assets/assets/icons/icons.png": "383195f3521d9279b12c0d2ecbc4f774",
"assets/assets/dhaka-city-local-bus.json": "0b2d12c0efa6f04445fcfa4fedb94160",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
