// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import HyperliquidProject from "data/projects/hyperliquid/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import HyperliquidIcon from "./icon.tsx";

const HyperliquidDeFi: App = {
  id: "hyperliquid-defi",
  appSlug: "hyperliquid-defi",
  type: AppTypes.DeFi,
  project: HyperliquidProject,
  name: "Hyperliquid",
  description:
    "A decentralized perpetual futures and spot trading app built on the Hyperliquid layer-1 blockchain, offering onchain order-book trading with deep liquidity and low fees.",
  socials: {
    website: new URL("https://app.hyperliquid.xyz/"),
    twitter: new URL("https://x.com/HyperliquidX"),
  },
  icon: HyperliquidIcon,
  ogImagePath: "hyperliquid-defi/og.png",
  twitterOgImagePath: "hyperliquid-defi/twitter-og.png",
};

defineApp(HyperliquidDeFi);

export default HyperliquidDeFi;
