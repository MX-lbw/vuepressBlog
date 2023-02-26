module.exports = [
  { text: "首页", link: "/" },
  {
    text: "前端",
    link: "/pages/html/",
    items: [
      { text: "Html", link: "/pages/html/" },
      { text: "Css", link: "/pages/css/" },
      { text: "Less", link: "/pages/less/" },
      {
        text: "JavaScript",
        link: "/pages/javaScript/",
        items: [{ text: "Es6", link: "/pages/es6/" }],
      },
      {
        text: "TypeScript",
        items: [{ text: "Es6", link: "/pages/es6/" }],
      },
      {
        text: "Vue2.x",
        items: [{ text: "Vue2.x", link: "/pages/vue2.x/" }],
      },
      {
        text: "Vue3.x",
        items: [{ text: "Vue3.x", link: "/pages/vue3.x/" }],
      },
      {
        text: "Pinia",
        items: [{ text: "Pinia", link: "/pages/pinia/" }],
      },
      {
        text: "Vite",
        items: [{ text: "Vite", link: "/pages/vite/" }],
      },
      {
        text: "小程序",
        items: [{ text: "小程序", link: "/pages/xiaochengxu/" }],
      },
    ],
  },
  {
    text: "Node",
    link: "/pages/koa/",
    items: [
      { text: "Koa", link: "/pages/koa/" },
      { text: "express", link: "/pages/express/" },
    ],
  },
  {
    text: "Git",
    link: "/pages/git/",
  },
  {
    text: "面试题",
    items: [],
  },
];
