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
    "revision": "154eb768b4fa45e8bc4bc76ffd68f244"
  },
  {
    "url": "archives/index.html",
    "revision": "f29e226b5a15ac815370fe90aaa52e65"
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
    "url": "assets/js/18.d52ca515.js",
    "revision": "fd58f98122964fd7825830bed14919ef"
  },
  {
    "url": "assets/js/19.c8fe819f.js",
    "revision": "b5d7f70842d691bf98ae2654e03dc758"
  },
  {
    "url": "assets/js/2.6d6a4f49.js",
    "revision": "b684e4b63d1441e1925ac2f8fc097ecb"
  },
  {
    "url": "assets/js/20.6b50af84.js",
    "revision": "b23548de79039e95a53ba457c2d9db32"
  },
  {
    "url": "assets/js/21.41942810.js",
    "revision": "e5b33b325a6e07869efcdfc13e0875a9"
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
    "url": "assets/js/25.26fb1806.js",
    "revision": "5c2cbf4bdd674ed94610bcd12513dc4b"
  },
  {
    "url": "assets/js/26.72765ac6.js",
    "revision": "05de16eb707726e84374861ce0010b1b"
  },
  {
    "url": "assets/js/27.ff83eb8e.js",
    "revision": "b9d36cd48c8188a56df18d7400a44343"
  },
  {
    "url": "assets/js/28.3c0d9a42.js",
    "revision": "35fa50190788efbe52f5a2ba60bbb79c"
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
    "url": "assets/js/34.61b7d98b.js",
    "revision": "5c7aeae8bc1b141c1666fea2510de486"
  },
  {
    "url": "assets/js/35.ab336e14.js",
    "revision": "8effd47e8927673e36e77d0510caf000"
  },
  {
    "url": "assets/js/36.03bd3fd4.js",
    "revision": "de909c90cdad02f9c692b02563e183c9"
  },
  {
    "url": "assets/js/37.47e74f0a.js",
    "revision": "e3b89afff3ca8842de8d076263cc1715"
  },
  {
    "url": "assets/js/38.e91ebd0c.js",
    "revision": "189fd1f0d797565a74afa76502698587"
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
    "url": "assets/js/45.638c57f1.js",
    "revision": "aa96aefd25954954582c10a0be8d59dd"
  },
  {
    "url": "assets/js/46.7f974343.js",
    "revision": "a31def85551962a291e7645f1362a235"
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
    "url": "assets/js/5.ea24fae6.js",
    "revision": "6d085b4d8340f4c8daa491fbd60f7683"
  },
  {
    "url": "assets/js/50.2a94b5d3.js",
    "revision": "7bf2ae22b313877ae6ae4e3029967fac"
  },
  {
    "url": "assets/js/51.84367a8f.js",
    "revision": "1b7a2b3cd8d2e8689ff8ef248d8bff8c"
  },
  {
    "url": "assets/js/52.d95d5bdf.js",
    "revision": "b1819f98af81048e57aeb17e7d196bb0"
  },
  {
    "url": "assets/js/53.cd21107d.js",
    "revision": "7a77b4653296770007c46410db6c03b8"
  },
  {
    "url": "assets/js/54.ac5b26a4.js",
    "revision": "68eedbd8340ef566ada60404f186d7da"
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
    "url": "assets/js/60.43f41d67.js",
    "revision": "e6f6271193151153922c3b17210defdb"
  },
  {
    "url": "assets/js/61.368d8e30.js",
    "revision": "ef3e436bb55dc9cdee2208831d54d5ad"
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
    "url": "assets/js/65.eb285da2.js",
    "revision": "22c478e475455790b0db3b60cd9d1819"
  },
  {
    "url": "assets/js/66.72dceb2b.js",
    "revision": "fb48baa8986618ef61b1feef66f18e9b"
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
    "url": "assets/js/69.f6c0ae48.js",
    "revision": "76e9f4ef7dfc14440f123d57421d5117"
  },
  {
    "url": "assets/js/7.6cd8507d.js",
    "revision": "f77daa71c172f92b288a9b15bc218d1f"
  },
  {
    "url": "assets/js/70.a5896403.js",
    "revision": "abbdbaf7c8413ae58afd5e7870eff5d3"
  },
  {
    "url": "assets/js/71.c250f6f1.js",
    "revision": "15de393e24323b724e66c6a3c59f3904"
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
    "url": "assets/js/app.cd13ae1d.js",
    "revision": "0187467682a93574b2f7069cf5b2b040"
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
    "revision": "20502d71e6f41c6c3daf6ef8cb7be939"
  },
  {
    "url": "pages/022102/index.html",
    "revision": "bcb58c375e147bd735cd65fcc039f7f1"
  },
  {
    "url": "pages/02c86eb2792f3262/index.html",
    "revision": "4b6062c1b665db76ffae4605e9700496"
  },
  {
    "url": "pages/0473261a6ab0ee8c/index.html",
    "revision": "ceaf8d4dd0b5b96f8f0c50d015fe1474"
  },
  {
    "url": "pages/087eee/index.html",
    "revision": "827343942a21700129ea98fb33dad46d"
  },
  {
    "url": "pages/0a6cce/index.html",
    "revision": "43991850a9fa3ba9f23500614cc7e439"
  },
  {
    "url": "pages/0bdb83/index.html",
    "revision": "7cc07eb26ee8a995cd9a3442f7bc5845"
  },
  {
    "url": "pages/0c21dae358fca16b/index.html",
    "revision": "18bb8b0956568a696974a7cff073969a"
  },
  {
    "url": "pages/145b5a/index.html",
    "revision": "33fe85532802c74d263847a85d31ed49"
  },
  {
    "url": "pages/16121351be68691b/index.html",
    "revision": "41cf2fc2e2b9d9f9666fbda9bd3fca60"
  },
  {
    "url": "pages/1b0e07/index.html",
    "revision": "6a6329898eb37222b92fccbeac54c033"
  },
  {
    "url": "pages/1cf50330655efc69/index.html",
    "revision": "65a77675a9a452516f487e4622f1b8eb"
  },
  {
    "url": "pages/227687/index.html",
    "revision": "cf59272ab2f20aa9734b3c900a26b099"
  },
  {
    "url": "pages/2810ae8985e9bd52/index.html",
    "revision": "a507bf523a0a594961d80c290b4e1106"
  },
  {
    "url": "pages/2d926b/index.html",
    "revision": "7ec9dd65c3660f6c8becbf208c9cda61"
  },
  {
    "url": "pages/2de7a5/index.html",
    "revision": "f568150742dc280175e2cd2f3d5a23cd"
  },
  {
    "url": "pages/32c35f7651d6e58e/index.html",
    "revision": "80940fddc5adf1dd63bd787e866830d0"
  },
  {
    "url": "pages/3777253e65bac487/index.html",
    "revision": "d4d6cf0b14262355efae3b614f516f90"
  },
  {
    "url": "pages/3a1aae/index.html",
    "revision": "0ca541f2c2367cb29375553f4a799eca"
  },
  {
    "url": "pages/413657/index.html",
    "revision": "5ce6b8acfb8bf86ba634fa98e0d67a0c"
  },
  {
    "url": "pages/44307d/index.html",
    "revision": "7b3dee3e264bc4cceb3e1f674c5808bf"
  },
  {
    "url": "pages/48df907ad3570f3d/index.html",
    "revision": "e97ac2d55a923bf98b092a7dad5ea750"
  },
  {
    "url": "pages/53dc8b/index.html",
    "revision": "aab8198352323acc0abdf1b96803b727"
  },
  {
    "url": "pages/56b587/index.html",
    "revision": "fbfe9ddecde1d8a9d63d20cc748325f8"
  },
  {
    "url": "pages/5af5f1/index.html",
    "revision": "ce7ccaa9f6064742bde9fcc6d48ab521"
  },
  {
    "url": "pages/5dfea9a0f2d1a392/index.html",
    "revision": "1b7533ddd6156ac6cbcfacb4c3e5ceef"
  },
  {
    "url": "pages/61de91/index.html",
    "revision": "d867a0dc0655590a71a4fcb66d20fca0"
  },
  {
    "url": "pages/6a8e2dc558da1b39/index.html",
    "revision": "c23af5de1cded554692353eb36c74616"
  },
  {
    "url": "pages/6c1189/index.html",
    "revision": "4b9c06ec675f0b5ef7a07a0b01e3b8b8"
  },
  {
    "url": "pages/6ed3da/index.html",
    "revision": "a6a1737787c0dfe95d46346917666be1"
  },
  {
    "url": "pages/7188882b8d65af1b/index.html",
    "revision": "91050f3c81b7e980c073a60e557ba4fc"
  },
  {
    "url": "pages/718b48ed9ce0adce/index.html",
    "revision": "6b83bd7f0ee18d588a8c10e18e0c7295"
  },
  {
    "url": "pages/73309c/index.html",
    "revision": "ddf1ad4bbbfad473e7604b682c303618"
  },
  {
    "url": "pages/738fa3/index.html",
    "revision": "1b38db9d48974868e0b7dac553e8b813"
  },
  {
    "url": "pages/74de3e45e4491e95/index.html",
    "revision": "6ed2e17ea5d9aeb1fa403abfe723f00d"
  },
  {
    "url": "pages/75af7031eb66847b/index.html",
    "revision": "62debecbac6a918c7c1f69a02d619bf7"
  },
  {
    "url": "pages/83f8c3a0cd87dd83/index.html",
    "revision": "8dbcd4c990538bf531eeae991ee1ac7f"
  },
  {
    "url": "pages/8e8f80f69b775a56/index.html",
    "revision": "f8bbfe3021125a91b0a46812e696fca5"
  },
  {
    "url": "pages/8ed309d668b20264/index.html",
    "revision": "57619abb2a02c183bca31cef1118da23"
  },
  {
    "url": "pages/900797/index.html",
    "revision": "afed6f93d58ea5a77d907612fd1c928f"
  },
  {
    "url": "pages/984bf549204bb266/index.html",
    "revision": "a7eb09b9a956ca42e000ef2aa1949a5b"
  },
  {
    "url": "pages/9f9223/index.html",
    "revision": "9197ee0a799a550b6afb08b42791f5dc"
  },
  {
    "url": "pages/a2ba314746bfdbdd/index.html",
    "revision": "9a7f8d8a05f73b8a00bc4ac80adca02e"
  },
  {
    "url": "pages/a650b4a0ebfc9350/index.html",
    "revision": "8a2f0de17472335e6b1bb7c39a5bdb19"
  },
  {
    "url": "pages/a79ca2e64ceae213/index.html",
    "revision": "4bccbe8b32ee64bdb456bfe52856ca6c"
  },
  {
    "url": "pages/ac94b7/index.html",
    "revision": "1a0b1c6cac3e635cab89eb9e3d741863"
  },
  {
    "url": "pages/b1ab10a62f7564da/index.html",
    "revision": "4abebd039952f1987a450466d7f08fdf"
  },
  {
    "url": "pages/b2b4ce/index.html",
    "revision": "feb08b17c1cc7261dc6a2c3622aead63"
  },
  {
    "url": "pages/b2ccb0/index.html",
    "revision": "0c5c3a15420bafd294159e583f35398a"
  },
  {
    "url": "pages/b5e3e0a0ff6e9c25/index.html",
    "revision": "55d4b9fac94a9070a09583799dcd656f"
  },
  {
    "url": "pages/c1edd70a6b7c7872/index.html",
    "revision": "6c14c8167a4fba0e8a2ee1d6a5670a40"
  },
  {
    "url": "pages/ca89eca8adeba5f4/index.html",
    "revision": "a9475b286bef2d3d6c4f1aa988599f2e"
  },
  {
    "url": "pages/d0f169/index.html",
    "revision": "31013a63e5117fd85055b94755a52379"
  },
  {
    "url": "pages/e34009d60d8bc4b2/index.html",
    "revision": "4d06be284fd7dade1f1a39cc4cc7b7ca"
  },
  {
    "url": "pages/e831e1593c82bbe0/index.html",
    "revision": "20ae82ed48daeb855f9b6996a02f631f"
  },
  {
    "url": "pages/e85e68947502cf90/index.html",
    "revision": "92e89f7cdc3fc456d9aecdd2de2d22c1"
  },
  {
    "url": "pages/e97bc1e5626b082c/index.html",
    "revision": "86e06f5ae60e3e8399165a3f83ebc948"
  },
  {
    "url": "pages/ea2bb5/index.html",
    "revision": "b10e5b38c0df9fae91ca33e2ef0bd811"
  },
  {
    "url": "pages/ea6f3b870f6dab69/index.html",
    "revision": "8c9a1345fa71f1b3775eeaf188e9bf1c"
  },
  {
    "url": "pages/ed3de1/index.html",
    "revision": "88db62f482bde6008e2428d1b767dbe3"
  },
  {
    "url": "pages/efe2fb04eb8ac5fb/index.html",
    "revision": "a2bf5964b3a1c98c0d89edf616571661"
  },
  {
    "url": "pages/f344d070a1031ef7/index.html",
    "revision": "229798133e88f404bed68efaac7d0f30"
  },
  {
    "url": "pages/f56ec2ab97d60483/index.html",
    "revision": "7c8588e5f4b13f66e3c8d26a204385db"
  },
  {
    "url": "pages/f8371f/index.html",
    "revision": "ee666bbe8083708f6e9d6b1fb6879da1"
  },
  {
    "url": "pages/f90af5/index.html",
    "revision": "2b67a61447c0b6400f15f33ea78d77d3"
  },
  {
    "url": "pages/fa5d34/index.html",
    "revision": "2f6fc92352349a2920acd20c71a168bb"
  },
  {
    "url": "pages/fa7ce3/index.html",
    "revision": "1ec44721816a78f837a9924b694bd424"
  },
  {
    "url": "pages/fd5682/index.html",
    "revision": "31e7984b2975cbf90c3311dd5e6ec602"
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
