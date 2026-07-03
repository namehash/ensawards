// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import MEWProject from "data/projects/mew";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import MEWIcon from "./icon.tsx";

const MyEtherWallet: App = {
  id: "mew-wallet",
  appSlug: "mew-wallet",
  type: AppTypes.Wallet,
  project: MEWProject,
  name: "MyEtherWallet",
  description:
    "Self-custodial mobile wallet for iOS and Android that lets you create and access Ethereum wallets, buy, send, and swap tokens, and connect to decentralized applications on the go.",
  socials: {
    website: new URL("https://www.mewwallet.com"),
    twitter: new URL("https://x.com/myetherwallet"),
  },
  icon: MEWIcon,
  // TODO: Add OG images
};

defineApp(MyEtherWallet);

export default MyEtherWallet;
