// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import OneInchProject from "data/projects/1inch";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import OneInchIcon from "./icon.tsx";

const OneInchWallet: App = {
  id: "1inch-wallet",
  appSlug: "1inch-wallet",
  type: AppTypes.Wallet,
  project: OneInchProject,
  name: "1inch Wallet",
  description:
    "Self-custodial wallet for swapping, sending, and managing digital assets across Solana and EVM chains, with built-in access to 1inch DeFi trading.",
  socials: {
    website: new URL("https://1inch.com/wallet"),
    twitter: new URL("https://x.com/1inch"),
  },
  icon: OneInchIcon,
  ogImagePath: "1inch-wallet/og.png",
  twitterOgImagePath: "1inch-wallet/twitter-og.png",
};

defineApp(OneInchWallet);

export default OneInchWallet;
