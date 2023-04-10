const nav = require("./config/nav");
//const htmlModules = require("./config/htmlModules.js");
module.exports = {
  base: "/wwblog/",
  title: "碌碌无为 🪂 知识整理",
  description: "", //后续定义
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/iconfont/iconfont.css" }],
    [
      "meta",
      {
        name: "keywords",
        content: "", //后续定义
      },
    ],
  ],
  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
  // theme: "vdoing", npm主题依赖包
  theme: require.resolve("../../theme-vdoing"), // 使用本地主题
  themeConfig: {
    nav,
    // sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: "/img/leftLogo.ico", // 导航栏logo
    repo: "MX-lbw/vuepressBlog", // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    searchPlaceholder: "快速搜索",
    sidebar: { mode: "structuring", collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果您不设置为'structuring',将无法使用目录页
    category: false,
    tag: false,
    markdown: {
      lineNumbers: true, // 显示代码块的行号
      extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },
    updateBar: {
      // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: "wuwei", // 必需
      href: "https://github.com/MX-lbw", // 可选的
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/MX-lbw",
        },
        {
          iconClass: "icon-bilibili",
          title: "bilibili",
          link: "https://space.bilibili.com/301103230",
        },
      ],
    },
    footer: {
      // 页脚信息
      createYear: 2023, // 博客创建年份
      copyrightInfo: "Wu wei | MIT License", // 博客版权信息，支持a标签
    },
    // htmlModules 广告,
  },
  plugins: [
    ["@vuepress/nprogress"],
    ["reading-progress"],
    ["vuepress-plugin-smooth-scroll"],
    [
      "one-click-copy",
      {
        // 代码块复制按钮
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "已复制", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require("dayjs"); // https://day.js.org/
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        },
      },
    ],
    [
      {
        name: "custom-plugins",
        globalUIComponents: ["BlockToggle"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
      },
    ],
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
  ],
  configureWebpack: {
    //webpack别名 如![Image from alias](~@alias/image.png)
    resolve: {
      alias: {
        "@alias": "/docs/.vuepress/public",
      },
    },
  },
};
