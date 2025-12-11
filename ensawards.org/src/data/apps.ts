import { benchmarkers } from "@/data/benchmarkers.ts";
import {
  displayNamedSmartContractsL2,
  displayNamedSmartContractsMainnet,
  //  recognizeAllENSNames
} from "@/data/bestPractices.ts";
import { type App, AppTypes, BenchmarkResult, toUnixTimestamp } from "@/types/apps.ts";

export const APPS: App[] = [
  {
    id: "rainbow-wallet",
    slug: "rainbow-wallet",
    name: "Rainbow Wallet",
    description:
      "Rainbow is a fun, simple, and secure way to get started with crypto and explore Ethereum.",
    type: AppTypes.Wallet,
    socials: {
      website: new URL("https://rainbow.me/"),
      twitter: new URL("https://x.com/rainbowdotme"),
      ens: "rainbowwallet.eth",
    },
    iconPath: "/src/assets/rainbowIcon.svg",
    benchmarks: [
      // {
      //   bestPractice: recognizeAllENSNames,
      //   result: BenchmarkResult.Pass,
      //   benchmarkedBy: benchmarkers.stevedylan,
      //   benchmardAt: toUnixTimestamp("2025-12-03T14:00:00Z"),
      // },
      {
        bestPractice: displayNamedSmartContractsMainnet,
        result: BenchmarkResult.Fail,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-11T14:05:59.420Z"),
      },
      {
        bestPractice: displayNamedSmartContractsL2,
        result: BenchmarkResult.Fail,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-11T14:05:59.420Z"),
      },
    ],
    ogImagePath: "/app-rainbow-wallet_og_image.png",
    twitterOgImagePath: "/app-rainbow-wallet_twitter_og_image.png",
  },
  {
    id: "coinbase-wallet",
    slug: "coinbase-wallet",
    name: "Coinbase Wallet",
    description:
      "A self-custodial wallet for accessing DeFi, NFTs, and decentralized applications across multiple blockchains.",
    type: AppTypes.Wallet,
    socials: {
      website: new URL("https://www.coinbase.com/learn/wallet"),
      twitter: new URL("https://x.com/coinbase"),
      ens: "coinbase.eth",
    },
    iconPath: "/src/assets/coinbaseWalletIcon.svg",
    benchmarks: [
      // {
      //   bestPractice: recognizeAllENSNames,
      //   result: BenchmarkResult.Pass,
      //   benchmarkedBy: benchmarkers.stevedylan,
      //   benchmardAt: toUnixTimestamp("2025-12-03T14:00:00Z"),
      // },
      {
        bestPractice: displayNamedSmartContractsMainnet,
        result: BenchmarkResult.Fail,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-08T18:22:55.716Z"),
      },
      {
        bestPractice: displayNamedSmartContractsL2,
        result: BenchmarkResult.Fail,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-08T18:22:55.716Z"),
      },
    ],
    ogImagePath: "/app-coinbase-wallet_og_image.png",
    twitterOgImagePath: "/app-coinbase-wallet_twitter_og_image.png",
  },
  {
    id: "metamask",
    slug: "metamask",
    name: "MetaMask",
    description: "MetaMask is a widely used, self-custodial cryptocurrency wallet.",
    type: AppTypes.Wallet,
    socials: {
      website: new URL("https://metamask.io/"),
      twitter: new URL("https://x.com/MetaMask"),
      ens: "metamask.eth",
    },
    iconPath: "/src/assets/metamaskIcon.svg",
    benchmarks: [
      // {
      //   bestPractice: recognizeAllENSNames,
      //   result: BenchmarkResult.Pass,
      //   benchmarkedBy: benchmarkers.stevedylan,
      //   benchmardAt: toUnixTimestamp("2025-12-03T14:00:00Z"),
      // },
      {
        bestPractice: displayNamedSmartContractsMainnet,
        result: BenchmarkResult.Fail,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-11T14:05:59.420Z"),
      },
      {
        bestPractice: displayNamedSmartContractsL2,
        result: BenchmarkResult.Fail,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-11T14:05:59.420Z"),
      },
    ],
    ogImagePath: "/app-metamask_og_image.png",
    twitterOgImagePath: "/app-metamask_twitter_og_image.png",
  },
  {
    id: "etherscan",
    slug: "etherscan",
    name: "Etherscan",
    description: "Etherscan is a Block Explorer and Analytics Platform for Ethereum.",
    type: AppTypes.Explorer,
    socials: {
      website: new URL("https://etherscan.io/"),
      twitter: new URL("https://x.com/etherscan"),
      ens: "etherscan.eth",
    },
    iconPath: "/src/assets/etherscanIcon.png",
    benchmarks: [
      // {
      //   bestPractice: recognizeAllENSNames,
      //   result: BenchmarkResult.Pass,
      //   benchmarkedBy: benchmarkers.stevedylan,
      //   benchmardAt: toUnixTimestamp("2025-12-03T14:00:00Z"),
      // },
      {
        bestPractice: displayNamedSmartContractsMainnet,
        result: BenchmarkResult.Pass,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-08T18:26:20.566Z"),
      },
      {
        bestPractice: displayNamedSmartContractsL2,
        result: BenchmarkResult.Fail,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-08T18:26:20.566Z"),
      },
    ],
    ogImagePath: "/app-etherscan_og_image.png",
    twitterOgImagePath: "/app-etherscan_twitter_og_image.png",
  },
  {
    id: "blockscout",
    slug: "blockscout",
    name: "Blockscout",
    description: "Blockscout is a tool for inspecting and analyzing EVM based blockchains.",
    type: AppTypes.Explorer,
    socials: {
      website: new URL("https://www.blockscout.com/"),
      twitter: new URL("https://x.com/blockscout"),
    },
    iconPath: "/src/assets/blockscoutIcon.jpg",
    benchmarks: [
      // {
      //   bestPractice: recognizeAllENSNames,
      //   result: BenchmarkResult.Pass,
      //   benchmarkedBy: benchmarkers.stevedylan,
      //   benchmardAt: toUnixTimestamp("2025-12-03T14:00:00Z"),
      // },
      {
        bestPractice: displayNamedSmartContractsMainnet,
        result: BenchmarkResult.Pass,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-08T18:28:32.410Z"),
      },
      {
        bestPractice: displayNamedSmartContractsL2,
        result: BenchmarkResult.Fail,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-08T18:28:32.410Z"),
      },
    ],
    ogImagePath: "/app-blockscout_og_image.png",
    twitterOgImagePath: "/app-blockscout_twitter_og_image.png",
  },
];
