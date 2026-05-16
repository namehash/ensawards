import RabbyProject from "data/projects/rabby/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import RabbyIcon from "./icon.tsx";

const RabbyWallet: App = {
  id: "rabby-wallet",
  appSlug: "rabby-wallet",
  type: AppTypes.Wallet,
  project: RabbyProject,
  name: "Rabby Wallet",
  description:
    "An open-source, security-focused browser wallet built for DeFi on Ethereum and every EVM chain.",
  icon: RabbyIcon,
  socials: {
    website: new URL("https://rabby.io/"),
    twitter: new URL("https://x.com/Rabby_io"),
  },
  // TODO: Add OG images
};

defineApp(RabbyWallet);

export default RabbyWallet;
