// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import ToobitProject from "data/projects/toobit";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import ToobitIcon from "./icon.tsx";

const ToobitExchange: App = {
  id: "toobit-exchange",
  appSlug: "toobit-exchange",
  type: AppTypes.Exchange,
  project: ToobitProject,
  name: "Toobit",
  description:
    "Cryptocurrency exchange offering spot and perpetual futures trading, copy trading, and earn products for managing digital assets.",
  socials: {
    website: new URL("https://www.toobit.com"),
    twitter: new URL("https://x.com/Toobit_official"),
  },
  icon: ToobitIcon,
  ogImagePath: "toobit-exchange/og.png",
  twitterOgImagePath: "toobit-exchange/twitter-og.png",
};

defineApp(ToobitExchange);

export default ToobitExchange;
