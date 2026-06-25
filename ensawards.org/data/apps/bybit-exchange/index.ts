// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import BybitProject from "data/projects/bybit";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BybitIcon from "./icon.tsx";

const BybitExchange: App = {
  id: "bybit-exchange",
  appSlug: "bybit-exchange",
  type: AppTypes.Exchange,
  project: BybitProject,
  name: "Bybit",
  description:
    "Cryptocurrency exchange for spot and derivatives trading, buying, selling, and managing digital assets.",
  socials: {
    website: new URL("https://www.bybit.com"),
    twitter: new URL("https://x.com/Bybit_Official"),
  },
  icon: BybitIcon,
  ogImagePath: "bybit-exchange/og.png",
  twitterOgImagePath: "bybit-exchange/twitter-og.png",
};

defineApp(BybitExchange);

export default BybitExchange;
