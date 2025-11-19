// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

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
  env: {
    schema: {
      ENSNODE_URL: envField.string({
        context: "client",
        access: "public",
        default: "https://api.alpha.ensnode.io",
      }),
    },
  },
});
