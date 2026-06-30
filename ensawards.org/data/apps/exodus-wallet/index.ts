// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import ExodusProject from "data/projects/exodus/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import ExodusWalletIcon from "./icon.tsx";

const ExodusWallet: App = {
  id: "exodus-wallet",
  appSlug: "exodus-wallet",
  type: AppTypes.Wallet,
  project: ExodusProject,
  name: "Exodus",
  description:
    "A self-custodial crypto wallet for desktop, mobile, and web3 to send, manage, swap, and stake digital assets, with hardware wallet support and a debit card for spending worldwide.",
  socials: {
    website: new URL("https://www.exodus.com/"),
    twitter: new URL("https://x.com/exodus"),
  },
  icon: ExodusWalletIcon,
  ogImagePath: "exodus-wallet/og.png",
  twitterOgImagePath: "exodus-wallet/twitter-og.png",
};

defineApp(ExodusWallet);

export default ExodusWallet;
