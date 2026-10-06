// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import homeData from './src/data/es/home.json';
import { languages, defaultLang } from './src/i18n/ui';

const siteUrl = process.env.SITE_URL || homeData.siteUrl || undefined;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), sitemap()]
});
