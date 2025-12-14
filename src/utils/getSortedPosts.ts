/**
 * 获取排序后的文章列表
 *
 * 功能：
 * 1. 过滤掉草稿文章（production 环境）
 * 2. 按发布时间倒序排列
 */

import type { CollectionEntry } from "astro:content";

export default function getSortedPosts(posts: CollectionEntry<"blog">[]) {
  return posts
    .filter(({ data }) => {
      // 开发环境显示草稿，生产环境隐藏草稿
      return import.meta.env.DEV ? true : !data.draft;
    })
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );
}
