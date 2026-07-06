// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import ImTokenProject from "data/projects/imtoken";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import ImTokenIcon from "./icon.tsx";

const ImTokenWallet: App = {
  id: "imtoken-wallet",
  appSlug: "imtoken-wallet",
  type: AppTypes.Wallet,
  project: ImTokenProject,
  name: "imToken",
  description:
    "Self-custodial multichain wallet for storing, sending, and swapping digital assets and interacting with decentralized applications across Ethereum, Bitcoin, and other chains.",
  socials: {
    website: new URL("https://token.im"),
    twitter: new URL("https://twitter.com/imTokenOfficial"),
  },
  icon: ImTokenIcon,
  ogImagePath: "imtoken-wallet/og.png",
  twitterOgImagePath: "imtoken-wallet/twitter-og.png",
};

defineApp(ImTokenWallet);

export default ImTokenWallet;
