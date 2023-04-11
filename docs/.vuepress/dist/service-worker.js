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
    "revision": "65bb4961cdf0b587f364d90597c05b18"
  },
  {
    "url": "archives/index.html",
    "revision": "812d0ae58a703c292ad460301b618344"
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
    "url": "assets/js/13.4be084c1.js",
    "revision": "43338a508427acf2218da082f0b3be22"
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
    "url": "assets/js/16.290c1f9a.js",
    "revision": "5a53a829283c0268add574aa45691ceb"
  },
  {
    "url": "assets/js/17.39534dc6.js",
    "revision": "70ebee5c519f0c67c51f7c23553ae59d"
  },
  {
    "url": "assets/js/18.3710570f.js",
    "revision": "66d4cb8e9731956c3abb37d08bdc7c3e"
  },
  {
    "url": "assets/js/19.0a14dae3.js",
    "revision": "507f4ec99cadd63d371ac0eeb32a4152"
  },
  {
    "url": "assets/js/2.6d6a4f49.js",
    "revision": "b684e4b63d1441e1925ac2f8fc097ecb"
  },
  {
    "url": "assets/js/20.34d77cdb.js",
    "revision": "dfd2d602d8bb0a9602c63052e8299334"
  },
  {
    "url": "assets/js/21.41942810.js",
    "revision": "e5b33b325a6e07869efcdfc13e0875a9"
  },
  {
    "url": "assets/js/22.7caee1e1.js",
    "revision": "f9ebce60db69f40b76f83a0f55706a46"
  },
  {
    "url": "assets/js/23.5eed7458.js",
    "revision": "d9cfa6c020eceea5ee94c86d5fac1718"
  },
  {
    "url": "assets/js/24.3c963b09.js",
    "revision": "2e33566c7405a6d2e4a6411772b6cc3e"
  },
  {
    "url": "assets/js/25.c6ba2f6c.js",
    "revision": "cb3cae8c37fe768c7b4664760bfd3009"
  },
  {
    "url": "assets/js/26.72765ac6.js",
    "revision": "05de16eb707726e84374861ce0010b1b"
  },
  {
    "url": "assets/js/27.f1f43886.js",
    "revision": "9ad20113d400f8ecf41b66450983d3ab"
  },
  {
    "url": "assets/js/28.2e34e6cb.js",
    "revision": "e65730f54bdabbfe674b0ccb2c6507c9"
  },
  {
    "url": "assets/js/29.a041e5a4.js",
    "revision": "6de21816b4c11da88e1e90eab36dd09d"
  },
  {
    "url": "assets/js/3.59f2517d.js",
    "revision": "9713531724adcc85dda0a6a464364e31"
  },
  {
    "url": "assets/js/30.67b8d9db.js",
    "revision": "7a9adabcd71e677b882bb233a6f9c763"
  },
  {
    "url": "assets/js/31.a4a1f869.js",
    "revision": "8a897a4b450e001b54631b14e13d6143"
  },
  {
    "url": "assets/js/32.3b3f67af.js",
    "revision": "e6c10c4bb3ed54c0ee5a15f0c0c923f9"
  },
  {
    "url": "assets/js/33.b60c4586.js",
    "revision": "678a30bc14fea424fee5952b56a6ef77"
  },
  {
    "url": "assets/js/34.23aa3591.js",
    "revision": "7ec387c5e19dc6154860bdb2a674669f"
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
    "url": "assets/js/37.47e74f0a.js",
    "revision": "e3b89afff3ca8842de8d076263cc1715"
  },
  {
    "url": "assets/js/38.fd3ea028.js",
    "revision": "470a0c9e46aa81bc55c084b172ef64d4"
  },
  {
    "url": "assets/js/39.0b845ea1.js",
    "revision": "9a71ff63b2424bc25511752216ab1415"
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
    "url": "assets/js/43.4ea2a38d.js",
    "revision": "b068297cddfda85f1c80856138a5cb22"
  },
  {
    "url": "assets/js/44.d0f5d95d.js",
    "revision": "93e31d2291721b627731fe628eb87ab4"
  },
  {
    "url": "assets/js/45.4beaca8f.js",
    "revision": "b80abbf5373227e92378ce74fb4976aa"
  },
  {
    "url": "assets/js/46.7f974343.js",
    "revision": "a31def85551962a291e7645f1362a235"
  },
  {
    "url": "assets/js/47.a4fecf39.js",
    "revision": "332f7f2369551a111e1aad3cdaa592f0"
  },
  {
    "url": "assets/js/48.28f90137.js",
    "revision": "884f1c2de51d9b4a817996139b5aaf7e"
  },
  {
    "url": "assets/js/49.1762f1d4.js",
    "revision": "553b7342d16842242efa5368a0d7ebd5"
  },
  {
    "url": "assets/js/5.e9249154.js",
    "revision": "8ee67a7bd02fc324a32c74b5b7631a48"
  },
  {
    "url": "assets/js/50.285d2821.js",
    "revision": "8a1a4cefc9f014a8c6023b5e3033bddf"
  },
  {
    "url": "assets/js/51.2c1d15ba.js",
    "revision": "ca5385e512683d51535614b395f98b52"
  },
  {
    "url": "assets/js/52.e45ad526.js",
    "revision": "82f40182aa37202fd515f610ffdd5096"
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
    "url": "assets/js/57.ef8ef2f7.js",
    "revision": "13d5dae51d2d1bd5a046f821e855a9ac"
  },
  {
    "url": "assets/js/58.d34a6e3f.js",
    "revision": "bede295d33dd3ba6e796ee7119a65bbd"
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
    "url": "assets/js/64.2ab32103.js",
    "revision": "85dff831c55f703f10dae7ffa4278cc0"
  },
  {
    "url": "assets/js/65.eb285da2.js",
    "revision": "22c478e475455790b0db3b60cd9d1819"
  },
  {
    "url": "assets/js/66.b3c67630.js",
    "revision": "accf3b033005a5b91bd725e5ea68b382"
  },
  {
    "url": "assets/js/67.f03303c2.js",
    "revision": "cd4a4453dc86a5f803b1dafa183cc95d"
  },
  {
    "url": "assets/js/68.defc967c.js",
    "revision": "bda73ef417c4fb36593d13dba338c347"
  },
  {
    "url": "assets/js/69.f6c0ae48.js",
    "revision": "76e9f4ef7dfc14440f123d57421d5117"
  },
  {
    "url": "assets/js/7.6cd8507d.js",
    "revision": "f77daa71c172f92b288a9b15bc218d1f"
  },
  {
    "url": "assets/js/70.fd158bc4.js",
    "revision": "8d3ba62d8c7f557fd46de2b01d4ac6ca"
  },
  {
    "url": "assets/js/71.c250f6f1.js",
    "revision": "15de393e24323b724e66c6a3c59f3904"
  },
  {
    "url": "assets/js/72.f89312fa.js",
    "revision": "d1fc01c587b92ff1f3a09b61692b35cb"
  },
  {
    "url": "assets/js/73.9b33e6f7.js",
    "revision": "82bce948718604e9bda852d67fbc3ac2"
  },
  {
    "url": "assets/js/74.7bef7275.js",
    "revision": "37e0a57d25adafd49a191bd7c6ac8f2b"
  },
  {
    "url": "assets/js/75.f0d86460.js",
    "revision": "e0dde7f54912ab04a1013d8edaff5be8"
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
    "url": "assets/js/app.180e29c3.js",
    "revision": "d77def6a2d50316c237079ca7178fac0"
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
    "revision": "4c04c3082f50e452b4dde1308d4616ff"
  },
  {
    "url": "pages/022102/index.html",
    "revision": "74655e287b3d04f538c3de5cef4cb8c7"
  },
  {
    "url": "pages/02c86eb2792f3262/index.html",
    "revision": "5b613027b72d08f8bb0c7072af685e6c"
  },
  {
    "url": "pages/0473261a6ab0ee8c/index.html",
    "revision": "32846b1db78fb5101d1b5acb3a2ee59c"
  },
  {
    "url": "pages/087eee/index.html",
    "revision": "38e461308205c7ba3488f4597f3dfe88"
  },
  {
    "url": "pages/0a6cce/index.html",
    "revision": "713f86b302ff91eeda134c532209f246"
  },
  {
    "url": "pages/0bdb83/index.html",
    "revision": "8a142c8cc099e40264e8b2cc0ce84f25"
  },
  {
    "url": "pages/0c21dae358fca16b/index.html",
    "revision": "ec67ec884307d860d8297f2b3d926ac4"
  },
  {
    "url": "pages/145b5a/index.html",
    "revision": "5f886e8b690dd894ffc61aa1eacc5276"
  },
  {
    "url": "pages/16121351be68691b/index.html",
    "revision": "bd20e390d16d366e935d1e012fe7b3c7"
  },
  {
    "url": "pages/1b0e07/index.html",
    "revision": "140e11ee47df2953dc7562ed9d1ace35"
  },
  {
    "url": "pages/1cf50330655efc69/index.html",
    "revision": "39f22fe5dab05ab73d18edaad04b5100"
  },
  {
    "url": "pages/227687/index.html",
    "revision": "4e43703949a8b1ac81b92c28e3e12200"
  },
  {
    "url": "pages/2810ae8985e9bd52/index.html",
    "revision": "5624bedcedbac36370f2a381c5bbc2a0"
  },
  {
    "url": "pages/2d926b/index.html",
    "revision": "ae7fb617c6dbc710625d213f4efe670b"
  },
  {
    "url": "pages/2de7a5/index.html",
    "revision": "a45e2c366077fc8ea433c4b6432401d7"
  },
  {
    "url": "pages/32c35f7651d6e58e/index.html",
    "revision": "37b834a1ce125003c1aff1b69fdf79ee"
  },
  {
    "url": "pages/3777253e65bac487/index.html",
    "revision": "14ffbce278bb9b2e8a6be38505125f2d"
  },
  {
    "url": "pages/3a1aae/index.html",
    "revision": "2eda5bea73e9e9822b3a3e9deb58f557"
  },
  {
    "url": "pages/413657/index.html",
    "revision": "6bcfa02d3138025ac6dcaed7d2b8fb8d"
  },
  {
    "url": "pages/44307d/index.html",
    "revision": "9968c4d5a802c3c4b4d73ed363850e20"
  },
  {
    "url": "pages/48df907ad3570f3d/index.html",
    "revision": "32fd84c55d017b89c1632dc00445fed8"
  },
  {
    "url": "pages/53dc8b/index.html",
    "revision": "2b5273a57222a228603de69308876371"
  },
  {
    "url": "pages/56b587/index.html",
    "revision": "2ffb7835ce646ed6ac4489fe5da39a33"
  },
  {
    "url": "pages/5af5f1/index.html",
    "revision": "5762bc2d0313f5fe021270e2a386c405"
  },
  {
    "url": "pages/5dfea9a0f2d1a392/index.html",
    "revision": "56a7bcd7f83721c72d8a8ab6ece30056"
  },
  {
    "url": "pages/61de91/index.html",
    "revision": "5a7369e9a9302982c2da97118ea13cf6"
  },
  {
    "url": "pages/6a8e2dc558da1b39/index.html",
    "revision": "91cb796d8006e6cb3cf8c70756c651b2"
  },
  {
    "url": "pages/6c1189/index.html",
    "revision": "3624b5bbf5affc66bc7f862576d99b7f"
  },
  {
    "url": "pages/6ed3da/index.html",
    "revision": "dc1fc531d197ed7d368e9ec9520c196c"
  },
  {
    "url": "pages/7188882b8d65af1b/index.html",
    "revision": "cffcee19efc64cb190204991ece161a4"
  },
  {
    "url": "pages/718b48ed9ce0adce/index.html",
    "revision": "8aa3de78644d934a3da7ba375cfa595c"
  },
  {
    "url": "pages/73309c/index.html",
    "revision": "ac69754116a9f97fc100d1a367b6cf43"
  },
  {
    "url": "pages/738fa3/index.html",
    "revision": "73da5d2464209c3c5ffac939e55ecd71"
  },
  {
    "url": "pages/74de3e45e4491e95/index.html",
    "revision": "72520fd993c3088ad6cda7c4b3f87336"
  },
  {
    "url": "pages/75af7031eb66847b/index.html",
    "revision": "f0fca487d34c77fe8e1a7196f4c26e02"
  },
  {
    "url": "pages/83f8c3a0cd87dd83/index.html",
    "revision": "71e71c3dcc605243bdaa3fb15c4e0a7e"
  },
  {
    "url": "pages/8e8f80f69b775a56/index.html",
    "revision": "70fcfa5633a50f8b9285848d5c9b22d3"
  },
  {
    "url": "pages/8ed309d668b20264/index.html",
    "revision": "ce7fd1a44bdb4bc5228518ba96cb907b"
  },
  {
    "url": "pages/900797/index.html",
    "revision": "ad6d2641e69717c35c32447f6e5ed417"
  },
  {
    "url": "pages/984bf549204bb266/index.html",
    "revision": "f4b21f8517feb8108eb81eb34e424c29"
  },
  {
    "url": "pages/9f9223/index.html",
    "revision": "34dd613974e028dd25d56e9cdfc4cc3f"
  },
  {
    "url": "pages/a2ba314746bfdbdd/index.html",
    "revision": "fa1c7daa72852ec8348729eaffff198c"
  },
  {
    "url": "pages/a650b4a0ebfc9350/index.html",
    "revision": "cf2216eaed8aaa8e1cd5451e05db7865"
  },
  {
    "url": "pages/a79ca2e64ceae213/index.html",
    "revision": "6e885055f01bf610db2c313965a541e3"
  },
  {
    "url": "pages/ac94b7/index.html",
    "revision": "8704bfd89f38715c41ca53a24cadb9c9"
  },
  {
    "url": "pages/b1ab10a62f7564da/index.html",
    "revision": "8fdfd7fd528f610c62b86d72d7fcc960"
  },
  {
    "url": "pages/b2b4ce/index.html",
    "revision": "df39e30aa5526279afd2bb96d8a93b1c"
  },
  {
    "url": "pages/b2ccb0/index.html",
    "revision": "4ce5b7ef0d36e92beae3a34ea0f066a1"
  },
  {
    "url": "pages/b5e3e0a0ff6e9c25/index.html",
    "revision": "c4eb775cb6ec73af228e3dfd5cb3d3d0"
  },
  {
    "url": "pages/c1edd70a6b7c7872/index.html",
    "revision": "f0ea6291849dfd893f55bd85c0081352"
  },
  {
    "url": "pages/ca89eca8adeba5f4/index.html",
    "revision": "9ee29164ede1a4da4d9ba0c08848e3e0"
  },
  {
    "url": "pages/d0f169/index.html",
    "revision": "ed42656ae17c125d0c2522d6959b5a50"
  },
  {
    "url": "pages/e34009d60d8bc4b2/index.html",
    "revision": "9f5ba64d6a5d5d12ad01df7a7e79dbe0"
  },
  {
    "url": "pages/e831e1593c82bbe0/index.html",
    "revision": "1dbf060c138869f34cc7b6c64a7ccf54"
  },
  {
    "url": "pages/e85e68947502cf90/index.html",
    "revision": "4a080258a29ebf7cd546591f5d63f2a5"
  },
  {
    "url": "pages/e97bc1e5626b082c/index.html",
    "revision": "da3dafa6332ad06a18aa502e90e6dd38"
  },
  {
    "url": "pages/ea2bb5/index.html",
    "revision": "a50523acf4a3e46859f44e11a4ae21ac"
  },
  {
    "url": "pages/ea6f3b870f6dab69/index.html",
    "revision": "9ecaa485c43b73c4e2896ec1aa7d0fcf"
  },
  {
    "url": "pages/ed3de1/index.html",
    "revision": "a2d31a9fb675da975208947175335ea6"
  },
  {
    "url": "pages/efe2fb04eb8ac5fb/index.html",
    "revision": "3b2b0d0d4e7b370cb5fef3597c159006"
  },
  {
    "url": "pages/f344d070a1031ef7/index.html",
    "revision": "6fadbcb5b441bb64f9eefd5b858439ef"
  },
  {
    "url": "pages/f56ec2ab97d60483/index.html",
    "revision": "30fe017afb83f65fd1b80393de00d269"
  },
  {
    "url": "pages/f8371f/index.html",
    "revision": "9696c14e00c5c189d2f3d7645a3c1427"
  },
  {
    "url": "pages/f90af5/index.html",
    "revision": "beaf5c74be4370a9fe7c7106774965fc"
  },
  {
    "url": "pages/fa5d34/index.html",
    "revision": "e24a60961bd520bf84daff51662fed43"
  },
  {
    "url": "pages/fa7ce3/index.html",
    "revision": "4909bd815172ac70796bcc66fbc3c141"
  },
  {
    "url": "pages/fd5682/index.html",
    "revision": "7c3ecd96c3ce32d6f7e842c76e3cec20"
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
