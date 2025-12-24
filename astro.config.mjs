import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkGfm from "remark-gfm";

// https://astro.build/config
export default defineConfig({
  // 网站配置 - 部署到 GitHub Pages
  site: "https://hepingfly.github.io",
  base: "/blog",

  // Markdown 配置
  markdown: {
    remarkPlugins: [
      remarkGfm, // GitHub Flavored Markdown 支持
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      // 代码高亮主题
      theme: "one-dark-pro",
      // 支持深色/浅色主题切换
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
      wrap: true,
    },
  },

  // 集成配置
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],

  // Vite 配置
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  // 作用域提升（性能优化）
  scopedStyleStrategy: "where",
});
