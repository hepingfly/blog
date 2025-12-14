/**
 * 社交媒体配置文件
 * 集中管理所有社交媒体账号和链接
 *
 * 设计理念：
 * 1. 所有社交媒体信息集中在此文件，便于维护
 * 2. 新增平台只需添加配置，无需修改页面代码
 * 3. 支持图标、链接、显示名称的完整配置
 * 4. 支持启用/禁用特定平台
 */

export type SocialPlatform = {
  name: string; // 平台名称
  href: string; // 链接地址
  linkTitle: string; // 链接标题（用于 aria-label 和 title）
  active: boolean; // 是否启用
  icon?: string; // 图标名称（可选）
  display?: string; // 显示名称（可选，用于 About 页面）
  description?: string; // 平台描述（可选）
};

// 作者名称（用于配置引用）
const SITE_AUTHOR = "贺平飞"; // 替换为你的名字

/**
 * 社交媒体配置列表
 *
 * 使用方法：
 * 1. 修改 href 为你的实际账号链接
 * 2. 设置 active: true 启用，active: false 禁用
 * 3. 新增平台：复制一个配置，修改相应字段即可
 */
export const SOCIALS: SocialPlatform[] = [
  {
    name: "Github",
    href: "https://github.com/hepingfly", // 替换为你的 GitHub
    linkTitle: `${SITE_AUTHOR} on Github`,
    active: true,
    icon: "github",
    display: "@hepingfly",
    description: "开源项目与代码分享",
  },
  {
    name: "X",
    href: "https://twitter.com/hepingfly", // 替换为你的 X (Twitter)
    linkTitle: `${SITE_AUTHOR} on X`,
    active: true,
    icon: "twitter",
    display: "@hepingfly",
    description: "技术动态与即时分享",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@hepingfly", // 替换为你的 YouTube
    linkTitle: `${SITE_AUTHOR} on YouTube`,
    active: true,
    icon: "youtube",
    display: "@hepingfly",
    description: "视频教程与技术分享",
  },
  {
    name: "Bilibili",
    href: "https://space.bilibili.com/your_uid", // 替换为你的 B 站
    linkTitle: `${SITE_AUTHOR} on Bilibili`,
    active: true,
    icon: "bilibili",
    display: "UP主名称",
    description: "B 站技术视频",
  },
  {
    name: "WeChat",
    href: "#", // 微信公众号通常不需要链接，可以在 About 页面展示二维码
    linkTitle: `${SITE_AUTHOR}'s WeChat Official Account`,
    active: true,
    icon: "wechat",
    display: "公众号名称",
    description: "微信公众号：深度文章与独家内容",
  },
  {
    name: "Email",
    href: "mailto:your@email.com", // 替换为你的邮箱
    linkTitle: `Send an email to ${SITE_AUTHOR}`,
    active: true,
    icon: "mail",
    display: "your@email.com",
    description: "商务合作与交流",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile", // 替换为你的 LinkedIn
    linkTitle: `${SITE_AUTHOR} on LinkedIn`,
    active: false, // 默认禁用，需要时设置为 true
    icon: "linkedin",
    display: "职业档案",
    description: "职业经历与人脉",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourprofile", // 替换为你的 Instagram
    linkTitle: `${SITE_AUTHOR} on Instagram`,
    active: false, // 默认禁用
    icon: "instagram",
    display: "@yourprofile",
    description: "生活与视觉分享",
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: "RSS Feed",
    active: true,
    icon: "rss",
    display: "RSS 订阅",
    description: "订阅博客更新",
  },
];

/**
 * 获取启用的社交媒体列表
 */
export const getActiveSocials = (): SocialPlatform[] => {
  return SOCIALS.filter((social) => social.active);
};

/**
 * 根据名称获取特定社交媒体
 */
export const getSocialByName = (name: string): SocialPlatform | undefined => {
  return SOCIALS.find((social) => social.name.toLowerCase() === name.toLowerCase());
};
