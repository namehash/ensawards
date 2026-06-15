// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import BinanceProject from "data/projects/binance";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BinanceIcon from "./icon.tsx";

const BinanceWallet: App = {
  id: "binance-wallet",
  appSlug: "binance-wallet",
  type: AppTypes.Wallet,
  project: BinanceProject,
  name: "Binance Wallet",
  description:
    "Self-custodial Web3 wallet for managing digital assets and interacting with decentralized applications across multiple chains.",
  socials: {
    website: new URL("https://web3.binance.com/"),
    twitter: new URL("https://x.com/binance"),
  },
  icon: BinanceIcon,
  ogImagePath: "binance-wallet/og.png",
  twitterOgImagePath: "binance-wallet/twitter-og.png",
};

defineApp(BinanceWallet);

export default BinanceWallet;
