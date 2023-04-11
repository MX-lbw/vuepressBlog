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
    "revision": "03af3df59cd31bf95bdb9fe79540b465"
  },
  {
    "url": "archives/index.html",
    "revision": "b6894252c9fa0f681917bfcc4cacc16a"
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
    "url": "assets/js/12.ec797f96.js",
    "revision": "a8bd1aa2c9b19674007160823527e3a0"
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
    "url": "assets/js/15.0bc9a7e1.js",
    "revision": "3f1ffe3de26d4dab0ef2431a704b2a15"
  },
  {
    "url": "assets/js/16.c50d0e6a.js",
    "revision": "043a53b04164a6111a4b50afb5812caa"
  },
  {
    "url": "assets/js/17.38d70682.js",
    "revision": "c963076dc7498d2ad718ebbf12fd398e"
  },
  {
    "url": "assets/js/18.5090aeed.js",
    "revision": "b145d8a066d6a8840030a48768e8359d"
  },
  {
    "url": "assets/js/19.9bd928ec.js",
    "revision": "e08cdd1f508d96900f47af9c2c32a8ec"
  },
  {
    "url": "assets/js/2.6d6a4f49.js",
    "revision": "b684e4b63d1441e1925ac2f8fc097ecb"
  },
  {
    "url": "assets/js/20.a03bfb6b.js",
    "revision": "93e845d6560c9d15cf377b3e00edc272"
  },
  {
    "url": "assets/js/21.5cf88da9.js",
    "revision": "c37d64a0eccb1c96267d3033228e0843"
  },
  {
    "url": "assets/js/22.4cd760f9.js",
    "revision": "deb8ed412568da6fe777a05e9a52a4d9"
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
    "url": "assets/js/26.43bfaca5.js",
    "revision": "8d2d12d6e2c81a5e9b29e1feb3826ffb"
  },
  {
    "url": "assets/js/27.f1f43886.js",
    "revision": "9ad20113d400f8ecf41b66450983d3ab"
  },
  {
    "url": "assets/js/28.4750b9ac.js",
    "revision": "f5a80bf458448115de806eb27be16da9"
  },
  {
    "url": "assets/js/29.2c2975a8.js",
    "revision": "355b6db7fff89e776b617c382eeb0b0d"
  },
  {
    "url": "assets/js/3.59f2517d.js",
    "revision": "9713531724adcc85dda0a6a464364e31"
  },
  {
    "url": "assets/js/30.4711f7a3.js",
    "revision": "f41cec3454b8ecde0265d208b62cd7f1"
  },
  {
    "url": "assets/js/31.40b54840.js",
    "revision": "7cb2cf663dd93eae34f5cc52a89549b3"
  },
  {
    "url": "assets/js/32.b63dea06.js",
    "revision": "0abf72b3f9f5817e0d5dbdfe3105077d"
  },
  {
    "url": "assets/js/33.9652ebaa.js",
    "revision": "58ea90e775fa62ff4ca072f14d938b18"
  },
  {
    "url": "assets/js/34.23aa3591.js",
    "revision": "7ec387c5e19dc6154860bdb2a674669f"
  },
  {
    "url": "assets/js/35.f6037592.js",
    "revision": "998dc909fd00f83c0e1f77df74ba9ae1"
  },
  {
    "url": "assets/js/36.5b548b55.js",
    "revision": "986081d37a792590ded563555819d547"
  },
  {
    "url": "assets/js/37.47e74f0a.js",
    "revision": "e3b89afff3ca8842de8d076263cc1715"
  },
  {
    "url": "assets/js/38.b1cb1e20.js",
    "revision": "78b12f2cb8a7fac80ff1101bfda31e03"
  },
  {
    "url": "assets/js/39.4eca29cc.js",
    "revision": "528c64ee3736f351e253ad988e5fe5e7"
  },
  {
    "url": "assets/js/4.ce23929f.js",
    "revision": "82cf2eb812a9c1fb80b009b094d8a423"
  },
  {
    "url": "assets/js/40.7f8321ec.js",
    "revision": "95932798e05f449272f32afbb0775ea9"
  },
  {
    "url": "assets/js/41.dde51b0d.js",
    "revision": "61b497f2fd38bd1dc068dcfee8745d17"
  },
  {
    "url": "assets/js/42.44fb0b02.js",
    "revision": "518cb5831929999ac2917bbde5f3945c"
  },
  {
    "url": "assets/js/43.4ea2a38d.js",
    "revision": "b068297cddfda85f1c80856138a5cb22"
  },
  {
    "url": "assets/js/44.d0f5d95d.js",
    "revision": "93e31d2291721b627731fe628eb87ab4"
  },
  {
    "url": "assets/js/45.25e80b92.js",
    "revision": "99acdef5f3fb75873d4ee38c55607fbe"
  },
  {
    "url": "assets/js/46.35fae795.js",
    "revision": "b288b039febd548860f23ab9cb0716a1"
  },
  {
    "url": "assets/js/47.acdcfa90.js",
    "revision": "797fabd2692f593d4f5d8049fdf59b72"
  },
  {
    "url": "assets/js/48.8fe38576.js",
    "revision": "6e83574631134d665b0b97a5b31ba77d"
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
    "url": "assets/js/50.2a94b5d3.js",
    "revision": "7bf2ae22b313877ae6ae4e3029967fac"
  },
  {
    "url": "assets/js/51.fdecc6af.js",
    "revision": "553d4e0046a32fa8bd43b2077449bea1"
  },
  {
    "url": "assets/js/52.379ef92f.js",
    "revision": "e3e998c05e7e7d99e73078632d3b8196"
  },
  {
    "url": "assets/js/53.754b9896.js",
    "revision": "32e2fa64a49b8a51fc4e7807fc28b797"
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
    "url": "assets/js/58.e11d2915.js",
    "revision": "b5b508764d22c9f7f4dc1069214c42ba"
  },
  {
    "url": "assets/js/59.05fc6145.js",
    "revision": "bddc3cde9736f0bfcb53699dd7722f60"
  },
  {
    "url": "assets/js/6.208d96d4.js",
    "revision": "73ec12a66c207742fa811aff9c0a7e38"
  },
  {
    "url": "assets/js/60.d5cdedd5.js",
    "revision": "dbb5538ce114a6bec9065589ffcc59b4"
  },
  {
    "url": "assets/js/61.2040d589.js",
    "revision": "f70550de44ce9c5130f67d243b3b5b12"
  },
  {
    "url": "assets/js/62.3c365026.js",
    "revision": "1c6bfa0117339754026674a266179c99"
  },
  {
    "url": "assets/js/63.c4b4f8ad.js",
    "revision": "86cbf9257d499c0977cbbf8876d96884"
  },
  {
    "url": "assets/js/64.c567e709.js",
    "revision": "57f0f4f64a828e03859e689cdeb0dbb3"
  },
  {
    "url": "assets/js/65.d17b70b7.js",
    "revision": "568ccb7c966ba8a22120f058ee4155b7"
  },
  {
    "url": "assets/js/66.b3c67630.js",
    "revision": "accf3b033005a5b91bd725e5ea68b382"
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
    "url": "assets/js/73.f1b6a5f5.js",
    "revision": "5692ece425d035b07d13ff558fec7cab"
  },
  {
    "url": "assets/js/74.48b94b1b.js",
    "revision": "7b5ba3a35bb5e724bb92127ab564899b"
  },
  {
    "url": "assets/js/75.1a3136a8.js",
    "revision": "3ac386656267df2cbe38ada48ebde641"
  },
  {
    "url": "assets/js/76.fa833796.js",
    "revision": "15f598efebacc759f169d34172fff7d1"
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
    "url": "assets/js/app.306f9560.js",
    "revision": "57d3083b60c2db93d8553437362631ac"
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
    "revision": "af47d6b6fed0a2b8b16fa8ebc6b50435"
  },
  {
    "url": "pages/022102/index.html",
    "revision": "903ace2d8123332c67a640ec243b2540"
  },
  {
    "url": "pages/02c86eb2792f3262/index.html",
    "revision": "e67ab07782bd1263f2274c4beaac2777"
  },
  {
    "url": "pages/0473261a6ab0ee8c/index.html",
    "revision": "902299b5a63fb6b40e92750d748a3062"
  },
  {
    "url": "pages/087eee/index.html",
    "revision": "aae9d8a855e1a9d5de897382a8e4ad4c"
  },
  {
    "url": "pages/0a6cce/index.html",
    "revision": "90e2da3d22f5e6efc04d4e2ae20af927"
  },
  {
    "url": "pages/0bdb83/index.html",
    "revision": "8b872f8c78fb9c87087065c90e6fa08f"
  },
  {
    "url": "pages/0c21dae358fca16b/index.html",
    "revision": "184066415400c7c74606da0b401e45fc"
  },
  {
    "url": "pages/145b5a/index.html",
    "revision": "a8754283ef76a53dd539e2f191b1f8b6"
  },
  {
    "url": "pages/16121351be68691b/index.html",
    "revision": "0d6fe259f9cb352a5c4a0c84f17a5ae0"
  },
  {
    "url": "pages/1b0e07/index.html",
    "revision": "e935c3d9ae70decdff4f879a918a6fc5"
  },
  {
    "url": "pages/1cf50330655efc69/index.html",
    "revision": "bfd8173d01df936c2e7684f91b0352a9"
  },
  {
    "url": "pages/227687/index.html",
    "revision": "06af4b910502154ad13eb1c574eb2ce9"
  },
  {
    "url": "pages/2810ae8985e9bd52/index.html",
    "revision": "a62cbdc37ccc6841e7670ab5b7979d2e"
  },
  {
    "url": "pages/2d926b/index.html",
    "revision": "fb062ee9d75cd20f231b7f8700ea023b"
  },
  {
    "url": "pages/2de7a5/index.html",
    "revision": "77a2e7d2041e9b35a91e99cd4711cc77"
  },
  {
    "url": "pages/32c35f7651d6e58e/index.html",
    "revision": "421ca6eec7acdbabcdfb0ba88a561141"
  },
  {
    "url": "pages/3777253e65bac487/index.html",
    "revision": "715a3e745552e8f60426285d949c5f93"
  },
  {
    "url": "pages/3a1aae/index.html",
    "revision": "9d1b6b54a6e0772cc00742ff72a6d0a4"
  },
  {
    "url": "pages/413657/index.html",
    "revision": "7512558d5d46ae076f3025364d287a94"
  },
  {
    "url": "pages/44307d/index.html",
    "revision": "6f7527081db2e908b97f6dbb59620ce7"
  },
  {
    "url": "pages/48df907ad3570f3d/index.html",
    "revision": "6fe08d9233e033b16c8acf38b34f78ea"
  },
  {
    "url": "pages/53dc8b/index.html",
    "revision": "1e886d98981da1ac4b25584eb9de71b9"
  },
  {
    "url": "pages/56b587/index.html",
    "revision": "cd2dddda674067f6b6d3adfc37ab72f4"
  },
  {
    "url": "pages/5af5f1/index.html",
    "revision": "457176b7356656d6c70d774e2ddc0b48"
  },
  {
    "url": "pages/5dfea9a0f2d1a392/index.html",
    "revision": "ca4dcedd22655169e9e7f660f6e32f49"
  },
  {
    "url": "pages/61de91/index.html",
    "revision": "bb01446f6872ef1e34b92cdcc97d2b0d"
  },
  {
    "url": "pages/6a8e2dc558da1b39/index.html",
    "revision": "e9aab499b85be421578d47aeb3897cf5"
  },
  {
    "url": "pages/6c1189/index.html",
    "revision": "481640d571aedf6ff6134e2f626d0446"
  },
  {
    "url": "pages/6ed3da/index.html",
    "revision": "6b36524fdfd69f6835be664826029146"
  },
  {
    "url": "pages/7188882b8d65af1b/index.html",
    "revision": "f86a45ba9a46ab5cad9b53994d9930f3"
  },
  {
    "url": "pages/718b48ed9ce0adce/index.html",
    "revision": "53e4ca6866f88b6c53972cabf7a23ab8"
  },
  {
    "url": "pages/73309c/index.html",
    "revision": "1b81c2ee339db95b35a7fa9a81811f66"
  },
  {
    "url": "pages/738fa3/index.html",
    "revision": "7ed0e0b386d05dda063f343107d39970"
  },
  {
    "url": "pages/74de3e45e4491e95/index.html",
    "revision": "cf3224b43ec63f384b3cffb194996385"
  },
  {
    "url": "pages/75af7031eb66847b/index.html",
    "revision": "b5df3055f52b95569c8afb07d7365660"
  },
  {
    "url": "pages/83f8c3a0cd87dd83/index.html",
    "revision": "317e2f7fff90889b14598df63d5cb05f"
  },
  {
    "url": "pages/8e8f80f69b775a56/index.html",
    "revision": "9c5212c70bb5bd201fa1362b084f569e"
  },
  {
    "url": "pages/8ed309d668b20264/index.html",
    "revision": "5b33bd21e2c380dfaac0897a3707fdfe"
  },
  {
    "url": "pages/900797/index.html",
    "revision": "6f82dc308833e160cd6d6e0fe2d65170"
  },
  {
    "url": "pages/984bf549204bb266/index.html",
    "revision": "2eef6e89a0833dfdab9275cdd85e54bc"
  },
  {
    "url": "pages/9f9223/index.html",
    "revision": "3500fe1fcf33c76a20ac84de232c66a7"
  },
  {
    "url": "pages/a2ba314746bfdbdd/index.html",
    "revision": "5ad6336bc2b257af080e1ad8d07384b0"
  },
  {
    "url": "pages/a650b4a0ebfc9350/index.html",
    "revision": "c818cd71bc90ce65e60d43f3ce7cf380"
  },
  {
    "url": "pages/a79ca2e64ceae213/index.html",
    "revision": "68c353fedfaaf64abc4d56ea80e0b60c"
  },
  {
    "url": "pages/ac94b7/index.html",
    "revision": "a7410e8daf3a9ca278243d3f06f36e04"
  },
  {
    "url": "pages/b1ab10a62f7564da/index.html",
    "revision": "aaccd69481c0d24daba50d915ccaa561"
  },
  {
    "url": "pages/b2b4ce/index.html",
    "revision": "1f9be0f5ed248cdad95ccc2bb5f00b5e"
  },
  {
    "url": "pages/b2ccb0/index.html",
    "revision": "838fbde768581cac1331c594af433c8d"
  },
  {
    "url": "pages/b5e3e0a0ff6e9c25/index.html",
    "revision": "eafe9a72498f842e3afd5783af306e72"
  },
  {
    "url": "pages/c1edd70a6b7c7872/index.html",
    "revision": "1a075c74dace021a7432d0e7994ef9b3"
  },
  {
    "url": "pages/ca89eca8adeba5f4/index.html",
    "revision": "655a359f48a523a75bad8d3b0fa25838"
  },
  {
    "url": "pages/d0f169/index.html",
    "revision": "a82727c830165af0c01b02a860cd5cc5"
  },
  {
    "url": "pages/e34009d60d8bc4b2/index.html",
    "revision": "62a3c1728d718dfcc6d8ca0e0fe4be26"
  },
  {
    "url": "pages/e831e1593c82bbe0/index.html",
    "revision": "2a663b40e594b9fefc041d059d5755ed"
  },
  {
    "url": "pages/e85e68947502cf90/index.html",
    "revision": "49ac533775b144af5c104a786b411b51"
  },
  {
    "url": "pages/e97bc1e5626b082c/index.html",
    "revision": "7c06c171c5fb83d977ad17e34b5b6f82"
  },
  {
    "url": "pages/ea2bb5/index.html",
    "revision": "deeafc04a3d225e86262258086c55341"
  },
  {
    "url": "pages/ea6f3b870f6dab69/index.html",
    "revision": "6da9c9272aa719c0ea2480ed23a73b86"
  },
  {
    "url": "pages/ed3de1/index.html",
    "revision": "88de493ded16e92cea760aaae2010baf"
  },
  {
    "url": "pages/efe2fb04eb8ac5fb/index.html",
    "revision": "002d20a858d24777dee854f4ec5f8f1e"
  },
  {
    "url": "pages/f344d070a1031ef7/index.html",
    "revision": "8c165af531ab2112d51d77bec8cecb27"
  },
  {
    "url": "pages/f56ec2ab97d60483/index.html",
    "revision": "0e75c9c537f416d719845fe475f8cd52"
  },
  {
    "url": "pages/f8371f/index.html",
    "revision": "40cb654d5eeb85e0ee9d756d45d616e5"
  },
  {
    "url": "pages/f90af5/index.html",
    "revision": "577c7dfee4ace7c05ad2285b538bc961"
  },
  {
    "url": "pages/fa5d34/index.html",
    "revision": "4e1f00d5285e61559bc08ae7a1b65858"
  },
  {
    "url": "pages/fa7ce3/index.html",
    "revision": "e0e6bc29c8a28c254f83a34729b46428"
  },
  {
    "url": "pages/fd5682/index.html",
    "revision": "bc0c5806c5e6f96ba7b99c65e2e2cd7e"
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
