// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import TahoProject from "data/projects/taho/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import TahoWalletIcon from "./icon.tsx";

const TahoWallet: App = {
  id: "taho-wallet",
  appSlug: "taho-wallet",
  type: AppTypes.Wallet,
  project: TahoProject,
  name: "Taho",
  description:
    "A community-owned, fully open-source web3 browser extension wallet with NFT galleries, low-cost swaps, and hardware wallet support.",
  socials: {
    website: new URL("https://taho.xyz/"),
    twitter: new URL("https://x.com/taho_xyz"),
  },
  icon: TahoWalletIcon,
  // TODO: Add OG images
};

defineApp(TahoWallet);

export default TahoWallet;
