// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import WorldProject from "data/projects/world/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import WorldIcon from "./icon.tsx";

const WorldWallet: App = {
  id: "worldapp-wallet",
  appSlug: "worldapp-wallet",
  type: AppTypes.Wallet,
  project: WorldProject,
  name: "World App",
  description:
    "World App is a financial super app with a self-custodial wallet built into it that allows verified humans to save, send, and earn yield on USDC, WLD, and local stablecoins on Optimism.",
  socials: {
    website: new URL("https://world.org/world-app"),
    twitter: new URL("https://x.com/worldnetwork"),
  },
  icon: WorldIcon,
  ogImagePath: "worldapp-wallet/og.png",
  twitterOgImagePath: "worldapp-wallet/twitter-og.png",
};

defineApp(WorldWallet);

export default WorldWallet;
