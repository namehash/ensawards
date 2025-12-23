// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://ensawards.org/",
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/benchmarks": "/leaderboards/app",
    "/benchmarks/[app]": "/app/[app]",
  },

  adapter: vercel(),
});
