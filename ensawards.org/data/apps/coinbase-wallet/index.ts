import { CoinbaseWalletIcon } from "@/components/atoms/icons/ens-integrating-entities/apps/CoinbaseWalletIcon.tsx";
import { type App, AppTypes } from "@/types/apps.ts";

import { CoinbaseProject } from "../../projects/coinbase";
import { CoinbaseWalletBenchmarks } from "./benchmarks.ts";

export const CoinbaseWalletApp: App = {
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
  icon: CoinbaseWalletIcon,
  benchmarks: CoinbaseWalletBenchmarks,
  ogImagePath: "https://ensawards.org/app-coinbase-wallet_og_image.png",
  twitterOgImagePath: "https://ensawards.org/app-coinbase-wallet_twitter_og_image.png",
};
