// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://keishunejima.github.io/",
  base: "/swup/",
  integrations: [tailwindcss()],

  vite: {
    plugins: [tailwindcss()]
  }
});
