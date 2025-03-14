import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { vercel } from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://yasinelbuz.com',
  integrations: [mdx(), sitemap(), react(), tailwind()],
  output: 'server',
  adapter: vercel()
});