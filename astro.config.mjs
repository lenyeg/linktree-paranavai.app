import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import image from "@astrojs/image";

const { CF_PAGES_URL } = process.env || {}

// https://astro.build/config
export default defineConfig({
  site: CF_PAGES_URL || 'https://pvai.app',
  integrations: [robotsTxt(), tailwind(), sitemap(), image()]
});
