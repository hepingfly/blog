/**
 * RSS Feed
 *
 * 自动生成 RSS 订阅源
 */

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/config/site.config";
import getSortedPosts from "@/utils/getSortedPosts";

export async function GET(context: any) {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: context.site || SITE.website,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDatetime,
      link: `/blog/${post.slug}/`,
      author: post.data.author,
      categories: [...post.data.tags, ...post.data.categories],
    })),
    customData: `<language>zh-CN</language>`,
  });
}
