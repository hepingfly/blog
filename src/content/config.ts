/**
 * Content Collections 配置
 *
 * 定义博客文章的数据结构和验证规则
 * 使用 Zod 进行类型安全的数据验证
 */

import { defineCollection, z } from "astro:content";

/**
 * Blog Collection Schema
 *
 * 包含的字段：
 * - title: 文章标题 (必需)
 * - description: 文章描述/摘要 (必需)
 * - pubDatetime: 发布时间 (必需)
 * - modDatetime: 修改时间 (可选)
 * - author: 作者 (默认: 站点作者)
 * - image: 封面图片 (可选)
 * - tags: 标签数组 (默认: 空数组)
 * - categories: 分类数组 (默认: 空数组)
 * - featured: 是否为精选文章 (默认: false)
 * - draft: 是否为草稿 (默认: false)
 * - canonicalURL: 规范链接 (可选)
 */
const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      // 基础信息
      title: z.string(),
      description: z.string(),

      // 时间信息
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),

      // 作者信息
      author: z.string().default("hepingfly"), // 替换为你的名字

      // 图片
      image: image()
        .refine((img) => img.width >= 1200, {
          message: "封面图片宽度至少为 1200px，以满足 OG 图片要求",
        })
        .optional(),

      // 分类和标签
      tags: z.array(z.string()).default([]),
      categories: z.array(z.string()).default([]),

      // 状态标记
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),

      // SEO
      canonicalURL: z.string().url().optional(),

      // OG 图片 URL（如果不使用 image 字段）
      ogImage: z.string().optional(),
    }),
});

export const collections = { blog };
