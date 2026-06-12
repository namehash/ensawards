// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import CoinbaseProject from "data/projects/coinbase";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import CoinbaseIcon from "./icon.tsx";

const CoinbaseExchange: App = {
  id: "coinbase-exchange",
  appSlug: "coinbase-exchange",
  type: AppTypes.Exchange,
  project: CoinbaseProject,
  name: "Coinbase",
  description:
    "Cryptocurrency exchange for buying, selling, and trading a wide range of digital assets.",
  socials: {
    website: new URL("https://www.coinbase.com"),
    twitter: new URL("https://x.com/coinbase"),
  },
  icon: CoinbaseIcon,
  // TODO: Add OG images
};

defineApp(CoinbaseExchange);

export default CoinbaseExchange;
