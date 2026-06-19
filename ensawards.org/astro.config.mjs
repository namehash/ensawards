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
    "/leaderboards/app": "/leaderboards",
    "/benchmarks/rainbow-wallet": "/app/rainbow-wallet",
    "/benchmarks/coinbase-wallet": "/app/coinbase-wallet",
    "/benchmarks/metamask": "/app/metamask-wallet",

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

    "/ens-best-practices/contract-naming": "/ens-best-practices",

    "/leaderboards/defi": "/leaderboards/defi-protocol",

    // The `ensv2-readiness` best practice category was renamed to `resolution`.
    "/ens-best-practices/ensv2-readiness/ensv2-ready-resolution":
      "/ens-best-practices/resolution/ensv2-ready-resolution",

    "/app/1inch-defi/ensv2-readiness/ensv2-ready-resolution":
      "/app/1inch-defi/resolution/ensv2-ready-resolution",
    "/app/aave-defi/ensv2-readiness/ensv2-ready-resolution":
      "/app/aave-defi/resolution/ensv2-ready-resolution",
    "/app/ambire-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/ambire-wallet/resolution/ensv2-ready-resolution",
    "/app/binance-exchange/ensv2-readiness/ensv2-ready-resolution":
      "/app/binance-exchange/resolution/ensv2-ready-resolution",
    "/app/binance-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/binance-wallet/resolution/ensv2-ready-resolution",
    "/app/blockscout-explorer/ensv2-readiness/ensv2-ready-resolution":
      "/app/blockscout-explorer/resolution/ensv2-ready-resolution",
    "/app/coinbase-exchange/ensv2-readiness/ensv2-ready-resolution":
      "/app/coinbase-exchange/resolution/ensv2-ready-resolution",
    "/app/coinbase-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/coinbase-wallet/resolution/ensv2-ready-resolution",
    "/app/cryptocom-exchange/ensv2-readiness/ensv2-ready-resolution":
      "/app/cryptocom-exchange/resolution/ensv2-ready-resolution",
    "/app/cryptocom-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/cryptocom-wallet/resolution/ensv2-ready-resolution",
    "/app/etherscan-explorer/ensv2-readiness/ensv2-ready-resolution":
      "/app/etherscan-explorer/resolution/ensv2-ready-resolution",
    "/app/frame-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/frame-wallet/resolution/ensv2-ready-resolution",
    "/app/gemini-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/gemini-wallet/resolution/ensv2-ready-resolution",
    "/app/kraken-exchange/ensv2-readiness/ensv2-ready-resolution":
      "/app/kraken-exchange/resolution/ensv2-ready-resolution",
    "/app/kraken-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/kraken-wallet/resolution/ensv2-ready-resolution",
    "/app/lido-defi/ensv2-readiness/ensv2-ready-resolution":
      "/app/lido-defi/resolution/ensv2-ready-resolution",
    "/app/metamask-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/metamask-wallet/resolution/ensv2-ready-resolution",
    "/app/okx-exchange/ensv2-readiness/ensv2-ready-resolution":
      "/app/okx-exchange/resolution/ensv2-ready-resolution",
    "/app/okx-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/okx-wallet/resolution/ensv2-ready-resolution",
    "/app/phantom-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/phantom-wallet/resolution/ensv2-ready-resolution",
    "/app/rabby-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/rabby-wallet/resolution/ensv2-ready-resolution",
    "/app/rainbow-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/rainbow-wallet/resolution/ensv2-ready-resolution",
    "/app/readyx-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/readyx-wallet/resolution/ensv2-ready-resolution",
    "/app/robinhood-exchange/ensv2-readiness/ensv2-ready-resolution":
      "/app/robinhood-exchange/resolution/ensv2-ready-resolution",
    "/app/robinhood-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/robinhood-wallet/resolution/ensv2-ready-resolution",
    "/app/safe-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/safe-wallet/resolution/ensv2-ready-resolution",
    "/app/status-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/status-wallet/resolution/ensv2-ready-resolution",
    "/app/trust-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/trust-wallet/resolution/ensv2-ready-resolution",
    "/app/uniswap-defi/ensv2-readiness/ensv2-ready-resolution":
      "/app/uniswap-defi/resolution/ensv2-ready-resolution",
    "/app/walletchan-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/walletchan-wallet/resolution/ensv2-ready-resolution",
    "/app/worldapp-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/worldapp-wallet/resolution/ensv2-ready-resolution",
    "/app/zerion-wallet/ensv2-readiness/ensv2-ready-resolution":
      "/app/zerion-wallet/resolution/ensv2-ready-resolution",
  },

  adapter: vercel(),
});
