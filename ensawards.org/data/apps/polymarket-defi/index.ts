// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import PolymarketProject from "data/projects/polymarket/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import PolymarketIcon from "./icon.tsx";

const PolymarketDeFi: App = {
  id: "polymarket-defi",
  appSlug: "polymarket-defi",
  type: AppTypes.DeFi,
  project: PolymarketProject,
  name: "Polymarket",
  description:
    "The world's largest prediction market, where users trade on the outcomes of real-world events across politics, news, culture, sports, and tech using cryptocurrency.",
  socials: {
    website: new URL("https://polymarket.com/"),
    twitter: new URL("https://x.com/Polymarket"),
  },
  icon: PolymarketIcon,
  ogImagePath: "polymarket-defi/og.png",
  twitterOgImagePath: "polymarket-defi/twitter-og.png",
};

defineApp(PolymarketDeFi);

export default PolymarketDeFi;
