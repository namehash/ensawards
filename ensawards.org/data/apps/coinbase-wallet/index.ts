import { type App, AppTypes } from "@/types/apps.ts";

import CoinbaseProject from "../../projects/coinbase";
import { CoinbaseWalletBenchmarks } from "./benchmarks.ts";
import CoinbaseIcon from "./icon.tsx";

const CoinbaseWallet: App = {
  id: "coinbase-wallet",
  slug: "coinbase-wallet",
  project: CoinbaseProject,
  name: "Coinbase Wallet",
  description: "A self-custodial wallet for accessing DeFi, NFTs, and decentralized applications.",
  type: AppTypes.Wallet,
  socials: {
    website: new URL("https://www.coinbase.com/learn/wallet"),
    twitter: new URL("https://x.com/coinbase"),
    ens: "coinbase.eth",
  },
  icon: CoinbaseIcon,
  benchmarks: CoinbaseWalletBenchmarks,
  ogImagePath: "https://ensawards.org/data/apps/coinbase-wallet/og.png",
  twitterOgImagePath: "https://ensawards.org/data/apps/coinbase-wallet/twitter-og.png",
};

export default CoinbaseWallet;
