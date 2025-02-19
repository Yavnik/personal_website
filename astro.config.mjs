// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config/config';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dark-plus",
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }),
]
});