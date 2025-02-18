import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/blog'}),
    schema: z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            heroImage: z.string(),
        }),
});

export default { blog };