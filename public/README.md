# Public 目录说明

这个目录存放所有静态资源文件。

## 必需文件

请添加以下文件：

### 1. favicon.svg
- 网站图标（SVG 格式）
- 推荐尺寸：32x32 或可缩放的 SVG

### 2. og-default.jpg
- 默认的 Open Graph 图片
- 尺寸：1200x630 像素
- 用于社交媒体分享时的预览图

### 3. donate-qrcodes/
打赏二维码目录：
- `wechat.png` - 微信赞赏码（推荐尺寸：300x300）
- `alipay.png` - 支付宝收款码（推荐尺寸：300x300）

## 可选文件

- `manifest.json` - PWA 配置文件
- `robots.txt` - 爬虫规则（已通过 /src/pages/robots.txt.ts 动态生成）
- 其他静态资源（图片、字体等）

## 使用方法

将文件放在此目录下，可以直接通过 `/文件名` 访问。

例如：
- `/public/favicon.svg` → 访问地址：`https://yoursite.com/favicon.svg`
- `/public/og-default.jpg` → 访问地址：`https://yoursite.com/og-default.jpg`
