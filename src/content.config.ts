import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
