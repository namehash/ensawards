// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import MEWProject from "data/projects/mew";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import MEWIcon from "./icon.tsx";

const MyEtherWalletWeb: App = {
  id: "mewweb-wallet",
  appSlug: "mewweb-wallet",
  type: AppTypes.Wallet,
  project: MEWProject,
  name: "MyEtherWallet Web",
  description:
    "Self-custodial wallet interface for creating and accessing Ethereum wallets, sending and swapping tokens, and interacting with decentralized applications.",
  socials: {
    website: new URL("https://app.myetherwallet.com/"),
    twitter: new URL("https://x.com/myetherwallet"),
  },
  icon: MEWIcon,
  // TODO: Add OG images
};

defineApp(MyEtherWalletWeb);

export default MyEtherWalletWeb;
