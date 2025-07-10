'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e41aff262ce64b3805b5f8a8d2ac45fa",
"version.json": "a43fbee52ae194bcdd2df52b7bcddefd",
"index.html": "828cba78f96934e7ed47c17b3ccf7bc1",
"/": "828cba78f96934e7ed47c17b3ccf7bc1",
"main.dart.js": "1da033afe22a0e119d7c22a472a7b42f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "629fa90f263c5623dcf46eb7f9fb1d95",
"icons/Icon-192.png": "5a1eafff93d1837f6238938cc29424b0",
"icons/Icon-maskable-192.png": "5a1eafff93d1837f6238938cc29424b0",
"icons/Icon-maskable-512.png": "6fb2ae8c452626e91e1c803ea6a99a8e",
"icons/Icon-512.png": "6fb2ae8c452626e91e1c803ea6a99a8e",
"manifest.json": "8a3a30d15beafbdccf05a075385390ac",
".git/config": "19dcd49b82d141009f00e32e0de9ce7e",
".git/objects/61/51a10c1afcc3471945a293fb01725bd0adc5dd": "c266cf957bbda89d7f5f131e1222ec3a",
".git/objects/50/0f63c17b28ff39c3c8b593f2b1267e6d3259a7": "867676ad270372dd356f67eb4c0ee7e6",
".git/objects/57/5d3fcc8fb4c93516838cafe6702a2fc539c04c": "de7376193da59938327117cff5b17bcb",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/7bfe83e678851c5e670159a2d831fc6c81d1e4": "28359697aba40282bba5377ad6c5eb74",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9e/4f41d4047cd055dec51a4173ab75b18ac1b9f4": "f45a9a94210b8dfb91cd587d000a210a",
".git/objects/04/f183de0674b4691ff4602978edfc83ee99aa55": "39f8854072f1eb2cf9257c1cae8ebd87",
".git/objects/32/060bd16a84892c267d01eb2f550a95f684ed6b": "3a581e65d03a493789b2223a05116119",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/56/184c9d8048dc761377e11383933b4a6873dc32": "94879cdfd1ff04ca8a320cf35880764f",
".git/objects/0b/8eea933183dd3b8723f7680a8e967c9b55c3f7": "d58b05343c648caca974497901295958",
".git/objects/60/d4fffacdad6d20d5a649d65437a48aa5ab63f3": "7563da2903218d738b1108ae1a83d84f",
".git/objects/34/afc0a35bde9ef11994f12e97395f6ca7512105": "5cf5c1a25cb35768a0c01e64904f4ebe",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/05/9a11db4b16c3c90f489eb6e2b3f820b239b0a8": "56990d3d53099c32ae0eea9ba6804379",
".git/objects/9c/c26d3e5a1c0ac8d0f3d3fd4aec6ce3f7ece3cf": "e410f36dccc3e044664add43f14d56e3",
".git/objects/9c/da29dd9f8d70d46157d338047e082ff72aa2cc": "39ca01b86e2cc140dc8a5f8450070483",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/4940d94f55e741cc0b2cc7b9c22f0a27f32f59": "52a3ba6eb38a50c32460652d915d22d4",
".git/objects/bb/0448fc0a4131ae7f6773346060910a023821b0": "a4747babd19e6dc037f367f28f1dcc78",
".git/objects/d7/f4a7a18807cfbd8a336668f9db0e5ed848641a": "a8e79429bdbc95f214e49e6691adca42",
".git/objects/b4/a185cc15f40c6b921020c98d9b01e1ba375d17": "b29855f3f204ae03729efe63aaefd00a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/2628f40a1aa56655bf38d1a05b67340de1a875": "2f76420918ed78ce4d0a3de99d755e17",
".git/objects/bc/23189acef428768adcbe8e41eba2b528fb765a": "4c58579b8f8fb4dca68b2e6662d9a5d5",
".git/objects/f3/a61c99fbab7ddbcf68f1168a3ba866761e11f0": "2deda10403d62c22a7e1245ac3b4bffe",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/c7/9a3aa2e9c3fa8d2fb00caa0f436615571f556a": "39fe406469ca70b04a8a18ae09b671c3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c6/48b390402c76fa727bb1d25f26077b947beaaa": "ba2d93b4a7f98c2010a245f7cf53fa2b",
".git/objects/20/3eec8325526498d7dde168d786d195d56369e8": "ba6f94139fa77003070900902787047a",
".git/objects/42/be219760abb07a1242153448a60a9c074e18c8": "35827ebb839200aebb89446562e0f889",
".git/objects/73/a2143a7751f0f1e9d0e7d245d48ae1b2740fe2": "022a36cd84fd37b42583e5147906c507",
".git/objects/80/5c92c444cc0e7941245df9f374d6ead9151ccf": "6964123e9f51597b9cbf25cff0f3fcc3",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/dd0ade92d3a2c4e5df8b60f34dab965796b1a8": "4133c82aaf6aa848b2541c883417be20",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/44/656b6958b8b129822825b13442980be0714da8": "04b5bd5a20fc02ee9d153204e8d78feb",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/37/897d356ec0d57ac46a08074e917022bc4242e7": "8e260b4467bca96d6f4eecc5c094ca45",
".git/objects/37/d3a4f2d0b64513dbdd0ce51e1f40833a62cd07": "296803133ef16c745288b77f40c88377",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/e1156882eb46972a8c7b6f702ce8e0af15def6": "adf704057b1d1921a1f0a578b7e48d62",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/ab07113a26547a4dd70ebf9c18ad5d9131c30c": "3910bd6a515e16c9490afdc0f4d3361e",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/ea/ed96bc0022dd18b8b05d1353f417feeafacc35": "b591df904d3b72cdc5a6e073ccfbee9c",
".git/objects/f9/a123588756f7463cac1fc4a43772eecbc32512": "a2dafd252735ae1cff7637794eb7724b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/1b/1e4133baad3d0c15617c7048e5f11cac7ade8f": "a69691067f0a86a1814e464399e5e172",
".git/objects/1b/82da6aa9ffcfbe7ba649e1ba2ea75a09a44a4c": "8cb690523951fba9d38cb11f102e0751",
".git/objects/23/b45f73822947aea6db4cea9ceff957aee13362": "2997d3821680171145587d650fdf1ee6",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/b3ea5e64a325c73ed3382fac7e3e060c184a69": "5d0bbbdb67547564977cbb42d7d44cbf",
".git/objects/85/386995d8d3efe93f72cd5f7007629d0281795f": "b991439f493f04ee52b41d8405bbf02a",
".git/objects/71/ee82400f32fc8c89b62ad016e5c6365b4a8de6": "90febf4c2e74cf961a6bbda408f0230f",
".git/objects/40/8c103276404dd8afbad32bd961774381cbb747": "3bd42e39b6267ac7c4828b4b363971a7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/48c53190eed7cb106039a00feb7b6989269c3b": "b770b190919f80692db7005fb1287f2a",
".git/objects/13/9ea4fc4da8074070adc5a383152a1f207f4f79": "589e9e0560bd7b4d46ae91f665a9d7c6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c800f1abc7014e0f84c7785020a132fd",
".git/logs/refs/heads/main": "805bc30964783d9bf47ea428c132c53d",
".git/logs/refs/remotes/origin/main": "4fb8bfca2bb2dae4206be70799cb07d0",
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
".git/refs/heads/main": "cda13a0dbcbae9ea4f15572bc6da5c28",
".git/refs/remotes/origin/main": "cda13a0dbcbae9ea4f15572bc6da5c28",
".git/index": "40c536879c28e436c9094d8a67dceeca",
".git/COMMIT_EDITMSG": "08836cf618ac9cc0e08bdc404bada88c",
"assets/AssetManifest.json": "464899797498bbd1be2d182471806299",
"assets/NOTICES": "314387c7b45f6629797af51745447a3d",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/AssetManifest.bin.json": "ffe997a4d8996576f41cb84c39fb746e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "534174275bd3f060340f12bf5115f658",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5d88c745e6491e817db22053c23515ab",
"assets/fonts/MaterialIcons-Regular.otf": "73de1f1828aafc8644e562cbac0aea45",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/dev_img.png": "dfd012c96e8da0974f1102a7ac2dc80a",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/slider.svg": "377696fd144912fe41a17cd6e972e9e6",
"assets/assets/projects/img_hr1.png": "345073f4d28a76f43c8641ebbca1ad93",
"assets/assets/projects/img_hr2.png": "16f1db850d5b1f6d05bdac5d856d94ba",
"assets/assets/projects/img_hr3.png": "fa16b758099a9341a02bb5b0d0c98809",
"assets/assets/projects/img_visionsnap.png": "6bf66513241a9a042b5982dd5345c26f",
"assets/assets/projects/img_metroconnect3.png": "b6ca2c3e6863c875c52241815d77c894",
"assets/assets/projects/img_pr1.png": "585f1c2f2c28ef96359fefcb5fe2cec0",
"assets/assets/projects/img_pr3.png": "5c6a7525c2bb446a506189f19e431fd6",
"assets/assets/projects/img_pr2.png": "053e649609dfcaa983203f6edd0d6ef9",
"assets/assets/projects/img_by1.png": "1b31275c0ba677bd64dbf0799dc9b8d5",
"assets/assets/projects/img_by2.png": "3cd6aa80459831d92754c0ae27fec0f2",
"assets/assets/projects/img_by3.png": "9bd423e7847e416aed6b7be8f583afa4",
"assets/assets/projects/img_by4.png": "c8a3c93aff6ef6acd5b8f020830e4aa6",
"assets/assets/projects/img_by5.png": "01a095874d895c683343976822a89012",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
