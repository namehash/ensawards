// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import CoinWProject from "data/projects/coinw";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import CoinWIcon from "./icon.tsx";

const CoinWExchange: App = {
  id: "coinw-exchange",
  appSlug: "coinw-exchange",
  type: AppTypes.Exchange,
  project: CoinWProject,
  name: "CoinW",
  description:
    "Cryptocurrency exchange offering spot and perpetual futures trading, copy trading, and earn products for managing digital assets.",
  socials: {
    website: new URL("https://www.coinw.com"),
    twitter: new URL("https://x.com/CoinWOfficial"),
  },
  icon: CoinWIcon,
  // TODO: Add OG images
};

defineApp(CoinWExchange);

export default CoinWExchange;
