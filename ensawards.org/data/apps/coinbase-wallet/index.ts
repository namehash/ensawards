// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying apps

import contributors from "data/contributors/index.ts";

import CoinbaseProject from "../../projects/coinbase";
import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import CoinbaseWalletBenchmarks from "./benchmarks.ts";
import CoinbaseIcon from "./icon.tsx";

const CoinbaseWallet: App = {
  id: "coinbase-wallet",
  appSlug: "coinbase-wallet",
  project: CoinbaseProject,
  name: "Coinbase Wallet",
  description: "A self-custodial wallet for accessing DeFi, NFTs, and decentralized applications.",
  type: AppTypes.Wallet,
  socials: {
    website: new URL("https://wallet.coinbase.com/"),
    twitter: new URL("https://x.com/coinbase"),
    ens: "coinbase.eth",
  },
  icon: CoinbaseIcon,
  benchmarks: CoinbaseWalletBenchmarks,
  ogImagePath: "https://ensawards.org/data/apps/coinbase-wallet/og.png",
  twitterOgImagePath: "https://ensawards.org/data/apps/coinbase-wallet/twitter-og.png",
  contributors: [
    contributors.lightwalker,
    contributors.y3drk,
    contributors.theloner,
    contributors.stevedylan,
  ],
};

defineApp(CoinbaseWallet);

export default CoinbaseWallet;
