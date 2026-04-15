// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying apps

import RainbowProject from "../../projects/rainbow";
import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
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
    website: new URL("https://rainbow.me"),
    twitter: new URL("https://x.com/rainbowdotme"),
    ens: "rainbowwallet.eth",
  },
  icon: RainbowIcon,
  ogImagePath: "rainbow-wallet/og.png",
  twitterOgImagePath: "rainbow-wallet/twitter-og.png",
};

defineApp(RainbowWallet);

export default RainbowWallet;
