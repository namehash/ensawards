// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import OKXProject from "data/projects/okx";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import OKXIcon from "./icon.tsx";

const OKXWallet: App = {
  id: "okx-wallet",
  appSlug: "okx-wallet",
  type: AppTypes.Wallet,
  project: OKXProject,
  name: "OKX Wallet",
  description:
    "Self-custodial multi-chain wallet for storing digital assets and interacting with decentralized applications across many networks.",
  socials: {
    website: new URL("https://web3.okx.com/"),
    twitter: new URL("https://x.com/okx"),
  },
  icon: OKXIcon,
  // TODO: Add OG images
};

defineApp(OKXWallet);

export default OKXWallet;
