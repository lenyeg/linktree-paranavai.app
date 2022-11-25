import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https:pvai.app',
  integrations: [robotsTxt(), tailwind(), sitemap()]
});