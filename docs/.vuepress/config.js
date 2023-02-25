const nav = require("./config/nav");
module.exports = {
  base: "/",
  title: "碌碌无为-知识整理",
  description: "", //后续定义
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
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
  theme: "vdoing",
  themeConfig: {
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: "/img/leftLogo.ico", // 导航栏logo
    repo: "xiaoxian521/vue-pure-admin", // 导航栏右侧生成Github链接
    searchPlaceholder: "快速搜索",
    sidebar: { mode: "structuring", collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果您不设置为'structuring',将无法使用目录页
    footer: {
      // 页脚信息
      createYear: 2023, // 博客创建年份
      copyrightInfo: "RealityBoy | MIT License", // 博客版权信息，支持a标签
    },
  },
  plugins: [["@vuepress/nprogress"], ["reading-progress"]],
};
