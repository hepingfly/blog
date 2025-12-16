/**
 * 网站核心配置文件
 * 包含网站的基本信息、SEO 配置、功能开关等
 */

export const SITE = {
  // 网站基本信息
  website: "https://blog.hepingfly.com", // 替换为你的域名
  author: "hepingfly", // 替换为你的名字
  profile: "https://blog.hepingfly.com/", // 个人主页
  desc: "分享技术、思考与成长的个人博客", // 网站描述
  title: "hepingfly的博客", // 网站标题
  ogImage: "og-default.jpg", // 默认 OG 图片

  // 网站语言配置
  lang: "zh-CN",
  locale: "zh_CN",

  // 博客配置
  blogTitle: "文章", // 博客页面标题
  blogDescription: "我的技术文章与思考", // 博客页面描述

  // 每页文章数量
  postsPerPage: 10,

  // 功能开关
  lightAndDarkMode: true, // 启用浅色/深色主题切换
  postDefaultLayout: "post", // 文章默认布局
} as const;

export type Site = typeof SITE;
