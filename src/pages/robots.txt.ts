/**
 * Robots.txt
 *
 * 自动生成 robots.txt 文件
 */

import type { APIRoute } from "astro";
import { SITE } from "@/config/site.config";

const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE.website}/sitemap-index.xml
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
