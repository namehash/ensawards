// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import KuCoinProject from "data/projects/kucoin";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import KuCoinIcon from "./icon.tsx";

const KuCoinExchange: App = {
  id: "kucoin-exchange",
  appSlug: "kucoin-exchange",
  type: AppTypes.Exchange,
  project: KuCoinProject,
  name: "KuCoin",
  description:
    "Cryptocurrency exchange app for buying, selling, and trading Bitcoin, Ethereum, and 1,000+ altcoins.",
  socials: {
    website: new URL("https://www.kucoin.com"),
    twitter: new URL("https://x.com/KuCoinCom"),
  },
  icon: KuCoinIcon,
  ogImagePath: "kucoin-exchange/og.png",
  twitterOgImagePath: "kucoin-exchange/twitter-og.png",
};

defineApp(KuCoinExchange);

export default KuCoinExchange;
