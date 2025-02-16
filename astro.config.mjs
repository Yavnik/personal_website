// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config/config';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()]
  }
});