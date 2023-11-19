import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from "@astrojs/node";
import basicSsl from '@vitejs/plugin-basic-ssl';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://localhost:3000',
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    plugins: [basicSsl()]
  }
});