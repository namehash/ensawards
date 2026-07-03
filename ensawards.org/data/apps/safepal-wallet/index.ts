// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import SafePalProject from "data/projects/safepal";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import SafePalIcon from "./icon.tsx";

const SafePalWallet: App = {
  id: "safepal-wallet",
  appSlug: "safepal-wallet",
  type: AppTypes.Wallet,
  project: SafePalProject,
  name: "SafePal",
  description:
    "Self-custodial multichain wallet for storing, sending, and swapping digital assets and interacting with decentralized applications, with optional hardware wallet pairing.",
  socials: {
    website: new URL("https://www.safepal.com"),
    twitter: new URL("https://x.com/SafePal"),
  },
  icon: SafePalIcon,
  // TODO: Add OG images
};

defineApp(SafePalWallet);

export default SafePalWallet;
