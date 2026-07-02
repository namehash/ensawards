// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import BitunixProject from "data/projects/bitunix";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BitunixIcon from "./icon.tsx";

const BitunixExchange: App = {
  id: "bitunix-exchange",
  appSlug: "bitunix-exchange",
  type: AppTypes.Exchange,
  project: BitunixProject,
  name: "Bitunix",
  description:
    "Cryptocurrency exchange centered on perpetual futures and spot trading, with copy trading and earn products for putting idle assets to work.",
  socials: {
    website: new URL("https://www.bitunix.com"),
    twitter: new URL("https://x.com/BitunixOfficial"),
  },
  icon: BitunixIcon,
  // TODO: Add OG images
};

defineApp(BitunixExchange);

export default BitunixExchange;
