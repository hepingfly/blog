/**
 * SEO 配置文件
 * 集中管理所有 SEO 相关配置
 *
 * 包括：
 * 1. Meta 标签配置
 * 2. Open Graph 配置
 * 3. Twitter Card 配置
 * 4. JSON-LD Schema 配置
 * 5. Sitemap 和 Robots.txt 配置
 */

import { SITE } from "./site.config";

/**
 * Open Graph 配置
 */
export const OG_CONFIG = {
  type: "website" as const,
  locale: SITE.locale,
  siteName: SITE.title,
  // 默认 OG 图片尺寸建议：1200x630
  imageWidth: 1200,
  imageHeight: 630,
} as const;

/**
 * Twitter Card 配置
 */
export const TWITTER_CONFIG = {
  card: "summary_large_image" as const,
  site: "@hepingfly", // 替换为你的 Twitter 账号
  creator: "@hepingfly", // 替换为你的 Twitter 账号
} as const;

/**
 * JSON-LD Schema 基础配置
 *
 * Schema.org 结构化数据，用于增强 SEO
 */
export const SCHEMA_CONFIG = {
  "@context": "https://schema.org",
  publisher: {
    "@type": "Person",
    name: SITE.author,
    url: SITE.website,
  },
} as const;

/**
 * Robots.txt 配置
 */
export const ROBOTS_CONFIG = {
  policy: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
  ],
  sitemap: `${SITE.website}/sitemap-index.xml`,
} as const;

/**
 * 生成文章的 JSON-LD Schema
 */
export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  pubDatetime: Date;
  modDatetime?: Date;
  author: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image ? `${SITE.website}${post.image}` : `${SITE.website}/${SITE.ogImage}`,
    datePublished: post.pubDatetime.toISOString(),
    dateModified: (post.modDatetime || post.pubDatetime).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Person",
      name: SITE.author,
      url: SITE.website,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };
}

/**
 * 生成网站首页的 JSON-LD Schema
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.title,
    description: SITE.desc,
    url: SITE.website,
    inLanguage: SITE.lang,
    author: {
      "@type": "Person",
      name: SITE.author,
      url: SITE.profile,
    },
  };
}

/**
 * 生成 Blog 列表页的 JSON-LD Schema
 */
export function generateBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: SITE.blogTitle,
    description: SITE.blogDescription,
    url: `${SITE.website}/blog/`,
    inLanguage: SITE.lang,
    author: {
      "@type": "Person",
      name: SITE.author,
    },
  };
}
