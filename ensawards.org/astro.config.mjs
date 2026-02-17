// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ensawards.org/",
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/benchmarks": "/leaderboards",
    "/benchmarks/[app]": "/app/[app]",
    "/leaderboards/app": "/leaderboards",
  },

  adapter: vercel(),
});
