// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying apps

import contributors from "data/contributors/index.ts";

import RainbowProject from "../../projects/rainbow";
import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import RainbowWalletBenchmarks from "./benchmarks.ts";
import RainbowIcon from "./icon.tsx";

const RainbowWallet: App = {
  id: "rainbow-wallet",
  appSlug: "rainbow-wallet",
  project: RainbowProject,
  name: "Rainbow Wallet",
  description:
    "Rainbow is a fun, simple, and secure way to get started with crypto and explore Ethereum.",
  type: AppTypes.Wallet,
  socials: {
    website: new URL("https://rainbow.me/"),
    twitter: new URL("https://x.com/rainbowdotme"),
    ens: "rainbowwallet.eth",
  },
  icon: RainbowIcon,
  benchmarks: RainbowWalletBenchmarks,
  ogImagePath: "https://ensawards.org/data/apps/rainbow-wallet/og.png",
  twitterOgImagePath: "https://ensawards.org/data/apps/rainbow-wallet/twitter-og.png",
  contributors: [contributors.lightwalker, contributors.y3drk, contributors.theloner],
};

defineApp(RainbowWallet);

export default RainbowWallet;
