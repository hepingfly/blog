/**
 * URL Slug 生成工具
 *
 * 使用 github-slugger 生成 URL 友好的 slug
 */

import { slug as slugger } from "github-slugger";

export default function slugify(text: string): string {
  return slugger(text);
}
