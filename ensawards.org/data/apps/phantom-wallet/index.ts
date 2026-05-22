// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import PhantomProject from "data/projects/phantom/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import PhantomWalletIcon from "./icon.tsx";

const PhantomWallet: App = {
  id: "phantom-wallet",
  appSlug: "phantom-wallet",
  type: AppTypes.Wallet,
  project: PhantomProject,
  name: "Phantom",
  description:
    "The money app that'll take you places — your home for trading crypto, predictions, and more.",
  socials: {
    website: new URL("https://phantom.com/"),
    twitter: new URL("https://x.com/phantom"),
  },
  icon: PhantomWalletIcon,
  // TODO: Add OG images
};

defineApp(PhantomWallet);

export default PhantomWallet;
