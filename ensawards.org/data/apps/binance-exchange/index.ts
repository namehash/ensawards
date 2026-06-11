// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import BinanceProject from "data/projects/binance";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BinanceIcon from "./icon.tsx";

const BinanceExchange: App = {
  id: "binance-exchange",
  appSlug: "binance-exchange",
  type: AppTypes.Exchange,
  project: BinanceProject,
  name: "Binance",
  description:
    "Cryptocurrency exchange for buying, selling, and trading a wide range of digital assets.",
  socials: {
    website: new URL("https://www.binance.com"),
    twitter: new URL("https://x.com/binance"),
  },
  icon: BinanceIcon,
  // TODO: Add OG images
};

defineApp(BinanceExchange);

export default BinanceExchange;
