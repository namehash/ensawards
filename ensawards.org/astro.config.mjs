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
    // Disable TS error for Tailwind plugin as it is not typed properly in Vite 6 yet
    // Related issue: https://github.com/tailwindlabs/tailwindcss/issues/18802
    // @ts-expect-error
    plugins: [tailwindcss()],
  },

  redirects: {
    "/benchmarks": "/leaderboards/app",
    "/benchmarks/[app]": "/app/[app]",
  },

  adapter: vercel(),
});
