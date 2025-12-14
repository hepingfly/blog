# 个人博客 - Astro Paper

基于 Astro 构建的高质量个人博客，具有完整的 SEO 优化、打赏功能、社交媒体集成等特性。

## ✨ 特性

### 核心功能

- 🚀 **极速性能**：基于 Astro 静态生成，加载速度极快
- 📱 **响应式设计**：完美适配桌面端、平板和移动设备
- 🌓 **深色模式**：支持浅色/深色主题切换
- ♿ **无障碍访问**：遵循 WCAG 标准

### SEO 优化（完整）

- ✅ 自动生成 meta 标签（title / description）
- ✅ 自动生成 canonical URL
- ✅ Open Graph 支持（og:title / og:description / og:image）
- ✅ Twitter Card 支持
- ✅ 自动生成 sitemap.xml
- ✅ 自动生成 robots.txt
- ✅ JSON-LD 结构化数据（BlogPosting / Blog schema）
- ✅ 支持自定义域名（如 blog.hepingfly.com）

### 内容管理

- 📝 支持 Markdown / MDX 写作
- 🏷️ 标签（tags）与分类（categories）系统
- ⭐ 精选文章功能
- 📄 自动生成文章摘要
- 🎨 代码高亮（支持深色/浅色主题）
- 📅 按时间倒序自动排列
- 🔍 RSS 订阅支持

### 打赏功能

- 💰 文章底部自动显示打赏区域
- 🎁 支持微信/支付宝二维码展示
- 🖼️ 使用占位图片，便于后期替换
- ⚡ 纯前端实现，无需后端
- 📊 不影响 SEO 和页面性能

### 社交媒体集成

- 🌐 集中配置，易于扩展
- 📱 支持 X/Twitter、YouTube、B站、微信公众号等
- 🎯 多处展示（首页、Footer、About 页面）
- 🔧 新增平台只需修改配置，无需改代码

### 自动化部署

- 🤖 GitHub Actions 自动部署
- 🌍 部署到 GitHub Pages
- 🔄 推送代码自动构建
- 🎯 支持自定义域名

## 📁 项目结构

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── public/
│   ├── donate-qrcodes/        # 打赏二维码图片
│   ├── favicon.svg            # 网站图标（需要添加）
│   └── og-default.jpg         # 默认 OG 图片（需要添加）
├── src/
│   ├── components/            # 组件
│   │   ├── Donate.astro       # 打赏组件（核心）
│   │   ├── SEO.astro          # SEO 组件
│   │   ├── Socials.astro      # 社交媒体列表
│   │   └── ...
│   ├── config/                # 配置文件
│   │   ├── site.config.ts     # 网站核心配置
│   │   ├── social.config.ts   # 社交媒体配置
│   │   └── seo.config.ts      # SEO 配置
│   ├── content/               # 内容集合
│   │   └── blog/              # 博客文章目录
│   ├── layouts/               # 布局
│   │   ├── BaseLayout.astro   # 基础布局
│   │   └── PostLayout.astro   # 文章布局（自动包含打赏组件）
│   └── pages/                 # 页面
└── package.json               # 项目依赖
```

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
# 或 npm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:4321`

### 3. 构建生产版本

```bash
pnpm build
```

## ⚙️ 配置指南

### 网站基础配置

编辑 `src/config/site.config.ts`：

```typescript
export const SITE = {
  website: "https://blog.hepingfly.com",  // 替换为你的域名
  author: "你的名字",
  title: "你的博客标题",
  desc: "你的博客描述",
};
```

### 社交媒体配置

编辑 `src/config/social.config.ts`，替换为你的实际账号链接。

### 打赏二维码

将你的二维码图片放到 `public/donate-qrcodes/`：
- `wechat.png` - 微信赞赏码
- `alipay.png` - 支付宝收款码

## 📝 写文章

在 `src/content/blog/` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
pubDatetime: 2024-01-01T00:00:00Z
tags: ["标签1", "标签2"]
---

文章内容...
```

## 🚢 部署到 GitHub Pages

1. 在 GitHub 仓库设置中启用 GitHub Pages（Source: GitHub Actions）
2. 推送代码到 main 分支
3. GitHub Actions 自动构建和部署

## 📄 License

MIT

---

**如果这个项目对你有帮助，欢迎 Star ⭐**
