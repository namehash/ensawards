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

    "/app/blockscout": "/app/blockscout-explorer",
    "/app/etherscan": "/app/etherscan-explorer",
    "/app/metamask": "/app/metamask-wallet",

    "/dao/aave": "/protocol/aave-dao",
    "/dao/arbitrum": "/protocol/arbitrum-dao",
    "/dao/ens": "/protocol/ens-dao",
    "/dao/nouns": "/protocol/nouns-dao",
    "/dao/taiko": "/protocol/taiko-dao",
    "/dao/uniswap": "/protocol/uniswap-dao",

    "/defi/liquity": "/protocol/liquity-defi",
    "/defi/taiko": "/protocol/taiko-defi",
    "/defi/uniswap": "/protocol/uniswap-defi",

    "/ens-referral-awards": "/ens-referral-program",
    "/ens-holiday-awards-rules": "/ens-referral-program/editions/2025-12/rules",
    "/ens-referral-live-feed": "/ens-referral-program/live-feed",
    "/leaderboards/referrer": "/ens-referral-program/editions/2025-12/leaderboard",
  },

  adapter: vercel(),
});
