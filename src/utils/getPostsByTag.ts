/**
 * 根据标签获取文章列表
 */

import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";

export default function getPostsByTag(posts: CollectionEntry<"blog">[], tag: string) {
  const filteredPosts = posts.filter((post) => post.data.tags.includes(tag));
  return getSortedPosts(filteredPosts);
}
