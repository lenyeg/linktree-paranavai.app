import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

const { CF_PAGES_URL } = process.env || {}

// https://astro.build/config
export default defineConfig({
  site: CF_PAGES_URL || 'https://pvai.app',
  integrations: [robotsTxt(), tailwind(), sitemap()]
});
