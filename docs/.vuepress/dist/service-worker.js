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
    "revision": "c547cd26535970861d8c7afb6fce3ef2"
  },
  {
    "url": "archives/index.html",
    "revision": "76f022284b4762ef2ec395e536f929e3"
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
    "url": "assets/js/11.6ac3ea46.js",
    "revision": "e473480d808e9bf3d59f7f6a29848d7b"
  },
  {
    "url": "assets/js/12.cd30f73b.js",
    "revision": "d9454cef78bf72c494bb03337930e785"
  },
  {
    "url": "assets/js/13.2b0c79fe.js",
    "revision": "6189b52c505b08e2026349b793733284"
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
    "url": "assets/js/17.3d0db8e6.js",
    "revision": "bea1e4ba5e4286b337608919a66c34bd"
  },
  {
    "url": "assets/js/18.1e043ef3.js",
    "revision": "9d0800b64c2376d1059be69e5b2a30f2"
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
    "url": "assets/js/20.aeadf447.js",
    "revision": "f7edce288792e945b698f7e269590542"
  },
  {
    "url": "assets/js/21.b5b6bb61.js",
    "revision": "54be63c35b5cbee60f598be1dfdbb5c3"
  },
  {
    "url": "assets/js/22.8c9dd182.js",
    "revision": "d6375cd571f983078993dbee41647205"
  },
  {
    "url": "assets/js/23.224a6882.js",
    "revision": "4b4bb329ca29443048d41d61a36dd23c"
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
    "url": "assets/js/29.324520ca.js",
    "revision": "aa58fbf478706d0b58a83693519696fb"
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
    "url": "assets/js/33.c09dabb5.js",
    "revision": "f2c90252117fdbc9cff9aeef10158c9d"
  },
  {
    "url": "assets/js/34.767c9f0d.js",
    "revision": "bdbd6678d3510d208d65af4270a52acc"
  },
  {
    "url": "assets/js/35.3317d321.js",
    "revision": "475281555dc5ff2323da2dac53f8fd83"
  },
  {
    "url": "assets/js/36.47d98279.js",
    "revision": "0a5b5415e42dde5f87b466f62441cfa4"
  },
  {
    "url": "assets/js/37.01054419.js",
    "revision": "598ad97a1c28f4e65e674fa5244e966f"
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
    "url": "assets/js/4.d3333f6e.js",
    "revision": "93e06f7a165e861af462e921f76c1924"
  },
  {
    "url": "assets/js/40.7f8321ec.js",
    "revision": "95932798e05f449272f32afbb0775ea9"
  },
  {
    "url": "assets/js/41.19d6cb7e.js",
    "revision": "b4066d824d10d42e19b3b655804dc9b3"
  },
  {
    "url": "assets/js/42.8e3d4ece.js",
    "revision": "239a2dc7d62df7d695421866b56d53fb"
  },
  {
    "url": "assets/js/43.83583b73.js",
    "revision": "81569bfd911404c699fb0be3d342979e"
  },
  {
    "url": "assets/js/44.d0f5d95d.js",
    "revision": "93e31d2291721b627731fe628eb87ab4"
  },
  {
    "url": "assets/js/45.d377db6f.js",
    "revision": "3ae4478e3ed845084bb69c100865399a"
  },
  {
    "url": "assets/js/46.7f974343.js",
    "revision": "a31def85551962a291e7645f1362a235"
  },
  {
    "url": "assets/js/47.96e78b26.js",
    "revision": "f794c537feaf29298c9bc084283d4ec9"
  },
  {
    "url": "assets/js/48.8fe38576.js",
    "revision": "6e83574631134d665b0b97a5b31ba77d"
  },
  {
    "url": "assets/js/49.bb8d8c18.js",
    "revision": "e86a7f2da034cf2ca40123660ec57a5c"
  },
  {
    "url": "assets/js/5.5595061b.js",
    "revision": "3e05ebf08ff825cb9b4e22c495a978ec"
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
    "url": "assets/js/52.e45ad526.js",
    "revision": "82f40182aa37202fd515f610ffdd5096"
  },
  {
    "url": "assets/js/53.03a8e053.js",
    "revision": "f911e244142c451e27d135061e0ea194"
  },
  {
    "url": "assets/js/54.aae9bc61.js",
    "revision": "37186283f96cd53e050db545cbc7a92b"
  },
  {
    "url": "assets/js/55.bc680d42.js",
    "revision": "d4528fca983af6b188adfbd3eb098db3"
  },
  {
    "url": "assets/js/56.921b7cfb.js",
    "revision": "2ea56ac66707fb5efe928cf383630979"
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
    "url": "assets/js/62.9043e882.js",
    "revision": "61a3d2bae9aee1f5e8d40542cc6365d2"
  },
  {
    "url": "assets/js/63.755ea529.js",
    "revision": "f3491a91a856c76da42527370396d34c"
  },
  {
    "url": "assets/js/64.c2798777.js",
    "revision": "3017b89c7a9d610926862a4ef29b0ef2"
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
    "url": "assets/js/67.592059b5.js",
    "revision": "af1878fa46002cd937fe7183fa568533"
  },
  {
    "url": "assets/js/68.05360654.js",
    "revision": "01b2f0b661a0cc4a3f720d751345bd24"
  },
  {
    "url": "assets/js/69.db55b772.js",
    "revision": "4559e66dd64656df2c9173f114b02a66"
  },
  {
    "url": "assets/js/7.6cd8507d.js",
    "revision": "f77daa71c172f92b288a9b15bc218d1f"
  },
  {
    "url": "assets/js/70.a9da8273.js",
    "revision": "40e18b2a60abf272ae1a59e200aa127f"
  },
  {
    "url": "assets/js/71.db90b927.js",
    "revision": "ef8e98756ff23ab3c947d1033a82d241"
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
    "url": "assets/js/74.8a44940b.js",
    "revision": "a78a794d54313a2b88c1e52822865dbd"
  },
  {
    "url": "assets/js/75.f0d86460.js",
    "revision": "e0dde7f54912ab04a1013d8edaff5be8"
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
    "url": "assets/js/app.ecb54491.js",
    "revision": "a79a2513eea6d734de1ee5fe2e0449cd"
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
    "revision": "8b3158746f13353a7e4544eeace00ca1"
  },
  {
    "url": "pages/022102/index.html",
    "revision": "7675069b26801c9ee7d986f660f20fa5"
  },
  {
    "url": "pages/02c86eb2792f3262/index.html",
    "revision": "32a4e73e6dacc6afc2281ed1bd91b2d6"
  },
  {
    "url": "pages/0473261a6ab0ee8c/index.html",
    "revision": "5c226967791a10edf544bbfbfb59f3b8"
  },
  {
    "url": "pages/087eee/index.html",
    "revision": "350303be951327bab46ac92279adfc96"
  },
  {
    "url": "pages/0a6cce/index.html",
    "revision": "e5aab51c00137c3c1e68464ea9389b96"
  },
  {
    "url": "pages/0bdb83/index.html",
    "revision": "32b65fa7af253dcfd9f695ccec907433"
  },
  {
    "url": "pages/0c21dae358fca16b/index.html",
    "revision": "dcc87b486677ccfa0bdda515b915b229"
  },
  {
    "url": "pages/145b5a/index.html",
    "revision": "c7fed4e5ab696d7f8fa89bdb3b7230b3"
  },
  {
    "url": "pages/16121351be68691b/index.html",
    "revision": "4c005c906a7bdc4a3257730138e61728"
  },
  {
    "url": "pages/1b0e07/index.html",
    "revision": "de3b3976c0df65d19693b7251f56f1b7"
  },
  {
    "url": "pages/1cf50330655efc69/index.html",
    "revision": "2a4ceed007a2bf2957991f5c2a38f0e4"
  },
  {
    "url": "pages/227687/index.html",
    "revision": "a84be0f738cffc7f9dd56af87bf217d5"
  },
  {
    "url": "pages/2810ae8985e9bd52/index.html",
    "revision": "201bc1434d871c54ceda831db68dfebc"
  },
  {
    "url": "pages/2d926b/index.html",
    "revision": "b455d595350235475a5c61bae56b5807"
  },
  {
    "url": "pages/2de7a5/index.html",
    "revision": "e2d666f0507683564b9778d864e39414"
  },
  {
    "url": "pages/32c35f7651d6e58e/index.html",
    "revision": "a3b1bb4d70c711647a18efc3aa4dd06c"
  },
  {
    "url": "pages/3777253e65bac487/index.html",
    "revision": "93f8fff73e2cb3c0ed6c57b483ac91ea"
  },
  {
    "url": "pages/3a1aae/index.html",
    "revision": "7c343ed9bfe42fec7633db36beef5d9d"
  },
  {
    "url": "pages/413657/index.html",
    "revision": "d21d98e2f13ceda5302aefc2183f5ef4"
  },
  {
    "url": "pages/44307d/index.html",
    "revision": "bb5f2d9ab2fa7485d6567edbb0aca08f"
  },
  {
    "url": "pages/48df907ad3570f3d/index.html",
    "revision": "1368b5869dc9a60f88a05c476557d691"
  },
  {
    "url": "pages/53dc8b/index.html",
    "revision": "af4abdcd6c7d364403bfb100c189b98c"
  },
  {
    "url": "pages/56b587/index.html",
    "revision": "265051aabeac5548aac2b9e9b3ca1a14"
  },
  {
    "url": "pages/5af5f1/index.html",
    "revision": "687af8a5ea0146b2082b0c2239945c7f"
  },
  {
    "url": "pages/5dfea9a0f2d1a392/index.html",
    "revision": "ee06da435f41095d0f29938f9f12d232"
  },
  {
    "url": "pages/61de91/index.html",
    "revision": "450e755eae0d30ec9b127622704c641a"
  },
  {
    "url": "pages/6a8e2dc558da1b39/index.html",
    "revision": "da6c92d4429ee218ed9d6737457e8cf1"
  },
  {
    "url": "pages/6c1189/index.html",
    "revision": "ff3aa681e3f180ea765c26f42477c503"
  },
  {
    "url": "pages/6ed3da/index.html",
    "revision": "b17f222ea72ffa32964f8b62881f392c"
  },
  {
    "url": "pages/7188882b8d65af1b/index.html",
    "revision": "8390cfd0c35a4a6b9e4458f6fbc95842"
  },
  {
    "url": "pages/718b48ed9ce0adce/index.html",
    "revision": "ffa8bd1ef30889046eeb77d5718941dd"
  },
  {
    "url": "pages/73309c/index.html",
    "revision": "42b30b6b41bcd1e2639e49c72e9adf05"
  },
  {
    "url": "pages/738fa3/index.html",
    "revision": "59f12b826b0d618d66f7bb91e3b1e1c6"
  },
  {
    "url": "pages/74de3e45e4491e95/index.html",
    "revision": "653c3ecf641c173716ba4f7d548468de"
  },
  {
    "url": "pages/75af7031eb66847b/index.html",
    "revision": "00f97135c731f9374291f8c1f00d0d28"
  },
  {
    "url": "pages/83f8c3a0cd87dd83/index.html",
    "revision": "2d67b2254ba1dd55f4ad65a0f009a8e3"
  },
  {
    "url": "pages/8e8f80f69b775a56/index.html",
    "revision": "546320c3e9a3ff457698c06465cf88cd"
  },
  {
    "url": "pages/8ed309d668b20264/index.html",
    "revision": "1c6a2d159091756a3b9151225e580785"
  },
  {
    "url": "pages/900797/index.html",
    "revision": "9d66931af607f21f3f6742f182575fb3"
  },
  {
    "url": "pages/984bf549204bb266/index.html",
    "revision": "c221a6d600d21e6580ca866ebce99d9f"
  },
  {
    "url": "pages/9f9223/index.html",
    "revision": "f1389584f8685c4699d992ca570aa95a"
  },
  {
    "url": "pages/a2ba314746bfdbdd/index.html",
    "revision": "476e56a4dca68cd8a3e21d97d9e233ad"
  },
  {
    "url": "pages/a650b4a0ebfc9350/index.html",
    "revision": "68e641debfa0ef8db2bb96325eef3346"
  },
  {
    "url": "pages/a79ca2e64ceae213/index.html",
    "revision": "dbd051eb032f5ac386d2abce83ff69b3"
  },
  {
    "url": "pages/ac94b7/index.html",
    "revision": "b1e3d613dc527f6e254820495f55a991"
  },
  {
    "url": "pages/b1ab10a62f7564da/index.html",
    "revision": "00ae56c192a8c0058816c656ec9ffd62"
  },
  {
    "url": "pages/b2b4ce/index.html",
    "revision": "685298ddef6a677d0156495815471e3c"
  },
  {
    "url": "pages/b2ccb0/index.html",
    "revision": "a5dce25e351cd632af14ebe363c573f0"
  },
  {
    "url": "pages/b5e3e0a0ff6e9c25/index.html",
    "revision": "22fd52b1bb70972a0dca7726b188dcb8"
  },
  {
    "url": "pages/c1edd70a6b7c7872/index.html",
    "revision": "b6996e08c6b8e9996dc3dd79dd5e4a64"
  },
  {
    "url": "pages/ca89eca8adeba5f4/index.html",
    "revision": "1578f355473c116f90bdd470c6d084e5"
  },
  {
    "url": "pages/d0f169/index.html",
    "revision": "92947ce8501084a8595a1bf7a8730eea"
  },
  {
    "url": "pages/e34009d60d8bc4b2/index.html",
    "revision": "c979f1a84215623121186ab81a05257f"
  },
  {
    "url": "pages/e831e1593c82bbe0/index.html",
    "revision": "4a863e09c9a2d4944fc290ac7a7cff94"
  },
  {
    "url": "pages/e85e68947502cf90/index.html",
    "revision": "67455d511f319a3814a4fce13e44e446"
  },
  {
    "url": "pages/e97bc1e5626b082c/index.html",
    "revision": "3341b33af92b45ad671c92808d61cd2b"
  },
  {
    "url": "pages/ea2bb5/index.html",
    "revision": "3779aa6af0e1899e439485d91e8fe249"
  },
  {
    "url": "pages/ea6f3b870f6dab69/index.html",
    "revision": "7896cb06e038fdde7e084f9b346c28bf"
  },
  {
    "url": "pages/ed3de1/index.html",
    "revision": "31c7d4e17bbd5fcef96fed4addbf8c66"
  },
  {
    "url": "pages/efe2fb04eb8ac5fb/index.html",
    "revision": "baea3d91f28ddcf5a940126c23f12c7e"
  },
  {
    "url": "pages/f344d070a1031ef7/index.html",
    "revision": "6f72ac7ed99b8064475200a30333d768"
  },
  {
    "url": "pages/f56ec2ab97d60483/index.html",
    "revision": "eed9e2f8a75b33b841ad4a2709717720"
  },
  {
    "url": "pages/f8371f/index.html",
    "revision": "8c3219e168a48bd89cbb4aae3945e0d0"
  },
  {
    "url": "pages/f90af5/index.html",
    "revision": "ad303e93e36382ebc8fe71fd50bb8bc0"
  },
  {
    "url": "pages/fa5d34/index.html",
    "revision": "006a5903ed52af0fb763dbd64cbb485d"
  },
  {
    "url": "pages/fa7ce3/index.html",
    "revision": "e18ff905a518f3d533ce42dc971c47b8"
  },
  {
    "url": "pages/fd5682/index.html",
    "revision": "886703b4fdf4c2b754557d6f47c85900"
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
