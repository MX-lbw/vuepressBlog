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
    "revision": "973d3e8bdeb6eef9789108202b4431fc"
  },
  {
    "url": "archives/index.html",
    "revision": "cac38889f8b97a3b6401a387a3605f70"
  },
  {
    "url": "assets/css/0.styles.9d6aaac2.css",
    "revision": "aab0a1fe7c529ab050471ce392695fda"
  },
  {
    "url": "assets/img/bundle.532fd73f.png",
    "revision": "532fd73ffe74a6fa966004b8b7efd908"
  },
  {
    "url": "assets/img/BZ.4637a17b.png",
    "revision": "4637a17b82409f4e644e59d710df6fd4"
  },
  {
    "url": "assets/img/ESM.9634d534.png",
    "revision": "9634d5349b70e30d3d32e915a79c0675"
  },
  {
    "url": "assets/img/IE.9261a01a.png",
    "revision": "9261a01a768f0d3bd23c9e3628e9242c"
  },
  {
    "url": "assets/img/key.2e34b3cc.png",
    "revision": "2e34b3cca4e4b81b1d087c00a872a112"
  },
  {
    "url": "assets/img/lifecycle.e6900649.png",
    "revision": "e6900649b97b49bf0c3f0e8e8bfafeb1"
  },
  {
    "url": "assets/img/lifecycle2.6eba8c66.png",
    "revision": "6eba8c66dc16b2a1ec024aad49e20600"
  },
  {
    "url": "assets/img/provide-inject.840efd40.png",
    "revision": "840efd40dea50f6cf1939e81b39e223e"
  },
  {
    "url": "assets/img/proxy.d776171e.png",
    "revision": "d776171e61ba8e9ccb2a5fcbaa05aa88"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vue-cli.4f118ba8.png",
    "revision": "4f118ba87c68de9ef5f746bff5949131"
  },
  {
    "url": "assets/img/VueComponent.66788a9c.png",
    "revision": "66788a9cc9934af87f97e2585d2e8165"
  },
  {
    "url": "assets/img/vuex.6007da7c.png",
    "revision": "6007da7c95eb5804af1fb1c12b845669"
  },
  {
    "url": "assets/js/10.680c364c.js",
    "revision": "b8479a73f4bc6246e72154f5508e5478"
  },
  {
    "url": "assets/js/11.dced2a87.js",
    "revision": "804064bae02acde8983e878de76d05c8"
  },
  {
    "url": "assets/js/12.db136405.js",
    "revision": "45f974fa19bf31d74dc457023b6e49ea"
  },
  {
    "url": "assets/js/13.223adcb5.js",
    "revision": "81b8f9dd1cb3645bd2234f31e5bce497"
  },
  {
    "url": "assets/js/14.6e705ebc.js",
    "revision": "475e88f045521a661114ccd1f86ec608"
  },
  {
    "url": "assets/js/15.bf537532.js",
    "revision": "5f2e8245ac63925d3c4e17676b7f0e38"
  },
  {
    "url": "assets/js/16.1b60a467.js",
    "revision": "816512bf74d58f96dcad101c6210238f"
  },
  {
    "url": "assets/js/17.39534dc6.js",
    "revision": "70ebee5c519f0c67c51f7c23553ae59d"
  },
  {
    "url": "assets/js/18.b706e18b.js",
    "revision": "bc26ca3451715c620f5b8395e7c1da80"
  },
  {
    "url": "assets/js/19.7a8ff1d2.js",
    "revision": "5009bb00f4812e3e331c1dad4ca43263"
  },
  {
    "url": "assets/js/2.6d6a4f49.js",
    "revision": "b684e4b63d1441e1925ac2f8fc097ecb"
  },
  {
    "url": "assets/js/20.b73aacfb.js",
    "revision": "6d73b8b6539d3016bbcf9d5783352d56"
  },
  {
    "url": "assets/js/21.41942810.js",
    "revision": "e5b33b325a6e07869efcdfc13e0875a9"
  },
  {
    "url": "assets/js/22.b191fa34.js",
    "revision": "2c9a71c3d8f71b518f3fd8345e96f589"
  },
  {
    "url": "assets/js/23.06052a62.js",
    "revision": "dc1f53eade3b787316b2424fcfbc37bd"
  },
  {
    "url": "assets/js/24.bdc0c35f.js",
    "revision": "d33a602fed3307f4da12e583f8f2524c"
  },
  {
    "url": "assets/js/25.ac2695cf.js",
    "revision": "60d0700e0333cfc9fc398d8e4255c984"
  },
  {
    "url": "assets/js/26.5b2e2259.js",
    "revision": "da481649955ac3709279d567c27379df"
  },
  {
    "url": "assets/js/27.5849ce1d.js",
    "revision": "5b43ba841b55fea97cd73f0e11feb307"
  },
  {
    "url": "assets/js/28.4750b9ac.js",
    "revision": "f5a80bf458448115de806eb27be16da9"
  },
  {
    "url": "assets/js/29.324520ca.js",
    "revision": "aa58fbf478706d0b58a83693519696fb"
  },
  {
    "url": "assets/js/3.59f2517d.js",
    "revision": "9713531724adcc85dda0a6a464364e31"
  },
  {
    "url": "assets/js/30.3d895145.js",
    "revision": "8a2ef48103f40bbc22cddc3ef90efff1"
  },
  {
    "url": "assets/js/31.a4a1f869.js",
    "revision": "8a897a4b450e001b54631b14e13d6143"
  },
  {
    "url": "assets/js/32.b63dea06.js",
    "revision": "0abf72b3f9f5817e0d5dbdfe3105077d"
  },
  {
    "url": "assets/js/33.c09dabb5.js",
    "revision": "f2c90252117fdbc9cff9aeef10158c9d"
  },
  {
    "url": "assets/js/34.0004534d.js",
    "revision": "2fadf3fb78083d6d74e38c194c820f95"
  },
  {
    "url": "assets/js/35.f2237147.js",
    "revision": "c9c4f2fa624a62156778743c24b83a57"
  },
  {
    "url": "assets/js/36.6110c5d3.js",
    "revision": "09c1c252ed2140f00839dbca4f905d80"
  },
  {
    "url": "assets/js/37.3d754d57.js",
    "revision": "7f94a830a91eea1946fa03a5346bb2ea"
  },
  {
    "url": "assets/js/38.0e4eebdc.js",
    "revision": "56fb85125c5e25d45105d2cf48bae795"
  },
  {
    "url": "assets/js/39.67d2cfa9.js",
    "revision": "663007ad90d2f5df83d0d5d5b64192a5"
  },
  {
    "url": "assets/js/4.ce23929f.js",
    "revision": "82cf2eb812a9c1fb80b009b094d8a423"
  },
  {
    "url": "assets/js/40.a99d7a1f.js",
    "revision": "f3181c9c279f24c6116c4a0592cf44ae"
  },
  {
    "url": "assets/js/41.dde51b0d.js",
    "revision": "61b497f2fd38bd1dc068dcfee8745d17"
  },
  {
    "url": "assets/js/42.319fd490.js",
    "revision": "6efe813624f87f6b4a5bac6c5e0e0d73"
  },
  {
    "url": "assets/js/43.f8095776.js",
    "revision": "eede7e1396170e181dd34503fad29cf0"
  },
  {
    "url": "assets/js/44.4bc5d823.js",
    "revision": "1cf4b075d66815059c664c0e0a7ef482"
  },
  {
    "url": "assets/js/45.4beaca8f.js",
    "revision": "b80abbf5373227e92378ce74fb4976aa"
  },
  {
    "url": "assets/js/46.42d1fb72.js",
    "revision": "6c4e86fdbbc2d42a286abef0609f3994"
  },
  {
    "url": "assets/js/47.95837520.js",
    "revision": "c817f4f419763a6f364972d07073b12a"
  },
  {
    "url": "assets/js/48.28f90137.js",
    "revision": "884f1c2de51d9b4a817996139b5aaf7e"
  },
  {
    "url": "assets/js/49.873d3956.js",
    "revision": "30979f7e042ce785b96a54c46d40c69f"
  },
  {
    "url": "assets/js/5.b67777f8.js",
    "revision": "afdaf2d838b1061b41acb795fda3f440"
  },
  {
    "url": "assets/js/50.a6639dd4.js",
    "revision": "77d6ef02e9eb18c0385829bdc0528514"
  },
  {
    "url": "assets/js/51.113d6890.js",
    "revision": "f9abb36fd7d8483f0a720587eda89189"
  },
  {
    "url": "assets/js/52.cab32713.js",
    "revision": "7e4494f8ce7857ad2e1ee2ce5ab94cd5"
  },
  {
    "url": "assets/js/53.c85277a7.js",
    "revision": "3d483a7323304a875367a36079f3cdfa"
  },
  {
    "url": "assets/js/54.aae9bc61.js",
    "revision": "37186283f96cd53e050db545cbc7a92b"
  },
  {
    "url": "assets/js/55.7dfd7d6c.js",
    "revision": "d84d636ff5776b48f1b544b05485492c"
  },
  {
    "url": "assets/js/56.347e4c39.js",
    "revision": "d3281b154ee402bf01d660d501a845a5"
  },
  {
    "url": "assets/js/57.7752870b.js",
    "revision": "e4b6ca3cd9c10d8ba0083c8e6e46b515"
  },
  {
    "url": "assets/js/58.303f6214.js",
    "revision": "019cb3ca28db614eb20fca7552d356c8"
  },
  {
    "url": "assets/js/59.51e35eb2.js",
    "revision": "bbb88b45a36065ffb16e510fb48b5055"
  },
  {
    "url": "assets/js/6.208d96d4.js",
    "revision": "73ec12a66c207742fa811aff9c0a7e38"
  },
  {
    "url": "assets/js/60.43f41d67.js",
    "revision": "e6f6271193151153922c3b17210defdb"
  },
  {
    "url": "assets/js/61.368d8e30.js",
    "revision": "ef3e436bb55dc9cdee2208831d54d5ad"
  },
  {
    "url": "assets/js/62.55ca98a8.js",
    "revision": "e2b0e3a85c89103c0a2430edcfeef0cd"
  },
  {
    "url": "assets/js/63.3298ab40.js",
    "revision": "6d164b7ae8b4bb9dfa6855c38d03349c"
  },
  {
    "url": "assets/js/64.c567e709.js",
    "revision": "57f0f4f64a828e03859e689cdeb0dbb3"
  },
  {
    "url": "assets/js/65.212d1401.js",
    "revision": "229aef948513f0dd1bbf0eca860eb7a4"
  },
  {
    "url": "assets/js/66.72dceb2b.js",
    "revision": "fb48baa8986618ef61b1feef66f18e9b"
  },
  {
    "url": "assets/js/67.70a24eee.js",
    "revision": "7194d9035a2f7bbd452d2f3c3de310d5"
  },
  {
    "url": "assets/js/68.b45e7228.js",
    "revision": "c2247672b503e9c2a64caee6ff99f31e"
  },
  {
    "url": "assets/js/69.497ff95d.js",
    "revision": "addfcca64e882c743da4393a932c1137"
  },
  {
    "url": "assets/js/7.6cd8507d.js",
    "revision": "f77daa71c172f92b288a9b15bc218d1f"
  },
  {
    "url": "assets/js/70.2eb4c724.js",
    "revision": "8fb7d3912d838ce1028df387bda1da85"
  },
  {
    "url": "assets/js/71.b045c1b1.js",
    "revision": "f5c1ecd7a9947b89c11c17b555b41267"
  },
  {
    "url": "assets/js/72.af3ee303.js",
    "revision": "024883d70729bdde6e6bd02e5db642a9"
  },
  {
    "url": "assets/js/73.1431f401.js",
    "revision": "62bf0314d12ac7e3bba43accd4d637ce"
  },
  {
    "url": "assets/js/74.7bef7275.js",
    "revision": "37e0a57d25adafd49a191bd7c6ac8f2b"
  },
  {
    "url": "assets/js/75.5fe96c2c.js",
    "revision": "5852d12cfaa38d28f25fb7fbdf390e55"
  },
  {
    "url": "assets/js/76.3ebb83fe.js",
    "revision": "459dee33526a69ab9b1e8fa608a8d0b6"
  },
  {
    "url": "assets/js/77.b30fa80c.js",
    "revision": "1b43f490d19562cc0cf07e6511d98b19"
  },
  {
    "url": "assets/js/8.d0994104.js",
    "revision": "6d3dab0d403389e578df9bbcc68f0076"
  },
  {
    "url": "assets/js/9.cfa85df7.js",
    "revision": "2553bde0b70c8a938f1aa6eb2b66d87d"
  },
  {
    "url": "assets/js/app.c0ebc98f.js",
    "revision": "d11f089a5cb0c692a17c092451f6b2bb"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "07b4913019b67416b383497e68e583f4"
  },
  {
    "url": "iconfont/iconfont.js",
    "revision": "0ce26645da8d9165f288f398ff3a0ff4"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "fc9edca332befb473bcacb61ba337977"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "47ca39b76df72141468d11b650d07efc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "68d4ce465fd15152f3645742c7293ab4"
  },
  {
    "url": "img/bundle.png",
    "revision": "532fd73ffe74a6fa966004b8b7efd908"
  },
  {
    "url": "img/BZ.png",
    "revision": "4637a17b82409f4e644e59d710df6fd4"
  },
  {
    "url": "img/ESM.png",
    "revision": "9634d5349b70e30d3d32e915a79c0675"
  },
  {
    "url": "img/IE.png",
    "revision": "9261a01a768f0d3bd23c9e3628e9242c"
  },
  {
    "url": "img/key.png",
    "revision": "2e34b3cca4e4b81b1d087c00a872a112"
  },
  {
    "url": "img/lifecycle.png",
    "revision": "e6900649b97b49bf0c3f0e8e8bfafeb1"
  },
  {
    "url": "img/lifecycle.svg",
    "revision": "3379913f7296340437389d368fcc8f6b"
  },
  {
    "url": "img/lifecycle2.png",
    "revision": "6eba8c66dc16b2a1ec024aad49e20600"
  },
  {
    "url": "img/provide-inject.png",
    "revision": "840efd40dea50f6cf1939e81b39e223e"
  },
  {
    "url": "img/proxy.png",
    "revision": "d776171e61ba8e9ccb2a5fcbaa05aa88"
  },
  {
    "url": "img/vue-cli.png",
    "revision": "4f118ba87c68de9ef5f746bff5949131"
  },
  {
    "url": "img/VueComponent.png",
    "revision": "66788a9cc9934af87f97e2585d2e8165"
  },
  {
    "url": "img/vuex.png",
    "revision": "6007da7c95eb5804af1fb1c12b845669"
  },
  {
    "url": "img/w.png",
    "revision": "74feba8897d3254074cfbb7c2d45b1c1"
  },
  {
    "url": "img/ww.png",
    "revision": "78bb13509b9761b3204ab4e9f2db6a7c"
  },
  {
    "url": "index.html",
    "revision": "14b16ede5dd48adaf02f6a4903bf7c08"
  },
  {
    "url": "pages/022102/index.html",
    "revision": "35538721dfe48e495afa2b9d10f2ff73"
  },
  {
    "url": "pages/02c86eb2792f3262/index.html",
    "revision": "88ddc1c5a9b87cc1c399ee5cdb383df0"
  },
  {
    "url": "pages/0473261a6ab0ee8c/index.html",
    "revision": "ca1cb49c08648708b2c382fbf9db73f5"
  },
  {
    "url": "pages/087eee/index.html",
    "revision": "4918284f74ebae845a18d23e47bc4d95"
  },
  {
    "url": "pages/0a6cce/index.html",
    "revision": "818b41c9d307a7ebde309de782365af5"
  },
  {
    "url": "pages/0bdb83/index.html",
    "revision": "17cf6e726caad52c3c8922a58c922095"
  },
  {
    "url": "pages/0c21dae358fca16b/index.html",
    "revision": "70edb935385721bcd2ffc1aec9b34f3d"
  },
  {
    "url": "pages/145b5a/index.html",
    "revision": "a12a21c677645b2ed278120c765ba36d"
  },
  {
    "url": "pages/16121351be68691b/index.html",
    "revision": "da06a0f590869c36b1e5c873dcde00f1"
  },
  {
    "url": "pages/1b0e07/index.html",
    "revision": "b83536ec0400ccf9d53a68930414452a"
  },
  {
    "url": "pages/1cf50330655efc69/index.html",
    "revision": "23bcb10c9d6353a8476d75d0d7ea9203"
  },
  {
    "url": "pages/227687/index.html",
    "revision": "616a0665cef877fff34d55c62a6a6a25"
  },
  {
    "url": "pages/2810ae8985e9bd52/index.html",
    "revision": "f74c081a774e10e601dde360252fb0f9"
  },
  {
    "url": "pages/2d926b/index.html",
    "revision": "7c199e07f816b505f6b48a1ab0a6fa12"
  },
  {
    "url": "pages/2de7a5/index.html",
    "revision": "127b66e75b61b97bb5c03c5386ece1b0"
  },
  {
    "url": "pages/32c35f7651d6e58e/index.html",
    "revision": "35771c9cfbad7bb552a7e2d5d34d6655"
  },
  {
    "url": "pages/3777253e65bac487/index.html",
    "revision": "730313fc2ee960a9bb439d4ce8a3a291"
  },
  {
    "url": "pages/3a1aae/index.html",
    "revision": "d2ef08ed21268296c091261c8baac526"
  },
  {
    "url": "pages/413657/index.html",
    "revision": "6952564a6796b90e825a231d94ec90aa"
  },
  {
    "url": "pages/44307d/index.html",
    "revision": "9827b8430a547a35d152b17e529809ef"
  },
  {
    "url": "pages/48df907ad3570f3d/index.html",
    "revision": "1fc6d83fbf4a737b780f673aa7057f8f"
  },
  {
    "url": "pages/53dc8b/index.html",
    "revision": "d2b32071d9738bb08b6177e20210f1ed"
  },
  {
    "url": "pages/56b587/index.html",
    "revision": "bfb483c633f8720bf8ee9a03adbb3237"
  },
  {
    "url": "pages/5af5f1/index.html",
    "revision": "36df132c28f6b58b56b8bf01fa6e4f55"
  },
  {
    "url": "pages/5dfea9a0f2d1a392/index.html",
    "revision": "a3988d01276ff4f77a38e0e5d94d892f"
  },
  {
    "url": "pages/61de91/index.html",
    "revision": "1a46e45ee013322c80331e548c577be5"
  },
  {
    "url": "pages/6a8e2dc558da1b39/index.html",
    "revision": "b855fb911f6d6236ec75a35ed8593f88"
  },
  {
    "url": "pages/6c1189/index.html",
    "revision": "b7275541410bc46726ebf635223b58a4"
  },
  {
    "url": "pages/6ed3da/index.html",
    "revision": "5b5f5bef1c23db026adecd4b41d1208d"
  },
  {
    "url": "pages/7188882b8d65af1b/index.html",
    "revision": "e236014b6b12b0638d7a19affa422786"
  },
  {
    "url": "pages/718b48ed9ce0adce/index.html",
    "revision": "21aaf17cc5ba094cbc80b9f249fe4dd2"
  },
  {
    "url": "pages/73309c/index.html",
    "revision": "6f93e55b3f8eaf6d659aee70c22cf025"
  },
  {
    "url": "pages/738fa3/index.html",
    "revision": "489da0645dea4eb081ff0050adcae277"
  },
  {
    "url": "pages/74de3e45e4491e95/index.html",
    "revision": "6a263a8f97d44ec960c37b03a7d40e81"
  },
  {
    "url": "pages/75af7031eb66847b/index.html",
    "revision": "0f13897dda5b9a404530e754c3c59ded"
  },
  {
    "url": "pages/83f8c3a0cd87dd83/index.html",
    "revision": "be1a9df8c1f3757c9ed22bba055d76cd"
  },
  {
    "url": "pages/8e8f80f69b775a56/index.html",
    "revision": "b53b7cae725eb60b40b8864af77c7572"
  },
  {
    "url": "pages/8ed309d668b20264/index.html",
    "revision": "2496aa54257bb9c269a175b1a180ec95"
  },
  {
    "url": "pages/900797/index.html",
    "revision": "473e057b4d64ba65914ce4c35ff0610b"
  },
  {
    "url": "pages/984bf549204bb266/index.html",
    "revision": "c44c31db3f17845eb7a0577d7b81ebc6"
  },
  {
    "url": "pages/9f9223/index.html",
    "revision": "61d368f8236167d47ba157b2831d1804"
  },
  {
    "url": "pages/a2ba314746bfdbdd/index.html",
    "revision": "ce68c37bb16fcef7a44387d65b2729b3"
  },
  {
    "url": "pages/a650b4a0ebfc9350/index.html",
    "revision": "be2fe4b69277e3c03035b928544359bb"
  },
  {
    "url": "pages/a79ca2e64ceae213/index.html",
    "revision": "73aebe49780aa1a5d220fa956d228740"
  },
  {
    "url": "pages/ac94b7/index.html",
    "revision": "902f5d210db0b652633790a644c4258d"
  },
  {
    "url": "pages/b1ab10a62f7564da/index.html",
    "revision": "9b58e6a3903dab285de9b46a7c89524e"
  },
  {
    "url": "pages/b2b4ce/index.html",
    "revision": "782796887761132b430cc4f8e6b7ab1f"
  },
  {
    "url": "pages/b2ccb0/index.html",
    "revision": "ec225ad4380f8059f9cb0274c2d2bb9c"
  },
  {
    "url": "pages/b5e3e0a0ff6e9c25/index.html",
    "revision": "f4a7b02ffe7170145d5b573d16249eba"
  },
  {
    "url": "pages/c1edd70a6b7c7872/index.html",
    "revision": "80d2c76a94bd14a803cdbd4c6313b841"
  },
  {
    "url": "pages/ca89eca8adeba5f4/index.html",
    "revision": "7fe2014deb37b708cf914685ea5f4089"
  },
  {
    "url": "pages/d0f169/index.html",
    "revision": "a56616fbfa23348c153d9209df1cbd09"
  },
  {
    "url": "pages/e34009d60d8bc4b2/index.html",
    "revision": "a708a7959749a3ea3f6575c27a09f2f3"
  },
  {
    "url": "pages/e831e1593c82bbe0/index.html",
    "revision": "dd41bc4c91b533f1334eace0059e9334"
  },
  {
    "url": "pages/e85e68947502cf90/index.html",
    "revision": "4aae2b703b2094d4e76d19750ba87d0b"
  },
  {
    "url": "pages/e97bc1e5626b082c/index.html",
    "revision": "196f7dceb4f2714c26dbaa0b68112b8c"
  },
  {
    "url": "pages/ea2bb5/index.html",
    "revision": "f5b341c7ec7ecdfb13d77c40e62450e0"
  },
  {
    "url": "pages/ea6f3b870f6dab69/index.html",
    "revision": "0b8e33dcddbd81d88396aa4cdc9aa7a4"
  },
  {
    "url": "pages/ed3de1/index.html",
    "revision": "139fe7d376854a8bad0546336ffa383a"
  },
  {
    "url": "pages/efe2fb04eb8ac5fb/index.html",
    "revision": "f29b6e01d4ae7b238e4d2fd07b3b1012"
  },
  {
    "url": "pages/f344d070a1031ef7/index.html",
    "revision": "e70bc49f3c85d62ed8264148bb1ff58a"
  },
  {
    "url": "pages/f56ec2ab97d60483/index.html",
    "revision": "74cef7ef784013449731c94f6a8adf4f"
  },
  {
    "url": "pages/f8371f/index.html",
    "revision": "85310fcc941e00a8d61173f436545236"
  },
  {
    "url": "pages/f90af5/index.html",
    "revision": "cd12206a448f121b7789f3475ceb6f3e"
  },
  {
    "url": "pages/fa5d34/index.html",
    "revision": "10cb8d5a364bc675a1fc717d468530fa"
  },
  {
    "url": "pages/fa7ce3/index.html",
    "revision": "fafd54e959f9f4991bd252df78c0b03c"
  },
  {
    "url": "pages/fd5682/index.html",
    "revision": "5ffea4b013724c5a804c15251c884978"
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
