import { CoinbaseWalletIcon } from "@/components/atoms/icons/ens-integrating-entities/apps/CoinbaseWalletIcon.tsx";
import { MetaMaskIcon } from "@/components/atoms/icons/ens-integrating-entities/apps/MetaMaskIcon.tsx";
import { BlockscoutIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/BlockscoutIcon.tsx";
import { EtherscanIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/EtherscanIcon.tsx";
import { RainbowIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/RainbowIcon.tsx";
import { benchmarkers } from "@/data/benchmarkers.ts";
import {
  displayNamedSmartContractsL2,
  displayNamedSmartContractsMainnet,
  //  recognizeAllENSNames
} from "@/data/bestPractices.ts";
import {
  BlockscoutProject,
  CoinbaseProject,
  ConsensysProject,
  EtherscanProject,
  RainbowProject,
} from "@/data/projects.ts";
import { type App, AppTypes } from "@/types/apps.ts";
import { BenchmarkResult } from "@/types/benchmarks";
import { toUnixTimestamp } from "@/utils/time";
export const APPS: App[] = [
  {
    id: "rainbow-wallet",
    slug: "rainbow-wallet",
    project: RainbowProject,
    name: "Rainbow Wallet",
    description:
      "Rainbow is a fun, simple, and secure way to get started with crypto and explore Ethereum.",
    type: AppTypes.Wallet,
    socials: {
      website: new URL("https://rainbow.me/"),
      twitter: new URL("https://x.com/rainbowdotme"),
      ens: "rainbowwallet.eth",
    },
    icon: RainbowIcon,
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
        benchmarkedAt: toUnixTimestamp("2025-12-08T18:19:28.672"),
      },
      {
        bestPractice: displayNamedSmartContractsL2,
        result: BenchmarkResult.Fail,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-08T18:19:28.672"),
      },
    ],
    ogImagePath: "https://ensawards.org/app-rainbow-wallet_og_image.png",
    twitterOgImagePath: "https://ensawards.org/app-rainbow-wallet_twitter_og_image.png",
  },
  {
    id: "coinbase-wallet",
    slug: "coinbase-wallet",
    project: CoinbaseProject,
    name: "Coinbase Wallet",
    description:
      "A self-custodial wallet for accessing DeFi, NFTs, and decentralized applications.",
    type: AppTypes.Wallet,
    socials: {
      website: new URL("https://www.coinbase.com/learn/wallet"),
      twitter: new URL("https://x.com/coinbase"),
      ens: "coinbase.eth",
    },
    icon: CoinbaseWalletIcon,
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
    ogImagePath: "https://ensawards.org/app-coinbase-wallet_og_image.png",
    twitterOgImagePath: "https://ensawards.org/app-coinbase-wallet_twitter_og_image.png",
  },
  {
    id: "metamask",
    slug: "metamask",
    project: ConsensysProject,
    name: "MetaMask",
    description: "MetaMask is a widely used, self-custodial cryptocurrency wallet.",
    type: AppTypes.Wallet,
    socials: {
      website: new URL("https://metamask.io/"),
      twitter: new URL("https://x.com/MetaMask"),
      ens: "metamask.eth",
    },
    icon: MetaMaskIcon,
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
        benchmarkedAt: toUnixTimestamp("2025-12-08T18:24:39.561Z"),
      },
      {
        bestPractice: displayNamedSmartContractsL2,
        result: BenchmarkResult.Fail,
        benchmarkedBy: benchmarkers.stevedylandev,
        benchmarkedAt: toUnixTimestamp("2025-12-08T18:24:39.561Z"),
      },
    ],
    ogImagePath: "https://ensawards.org/app-metamask_og_image.png",
    twitterOgImagePath: "https://ensawards.org/app-metamask_twitter_og_image.png",
  },
  {
    id: "etherscan",
    slug: "etherscan",
    project: EtherscanProject,
    name: "Etherscan",
    description: "Etherscan is a Block Explorer and Analytics Platform for Ethereum.",
    type: AppTypes.Explorer,
    socials: {
      website: new URL("https://etherscan.io/"),
      twitter: new URL("https://x.com/etherscan"),
      ens: "etherscan.eth",
    },
    icon: EtherscanIcon,
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
    ogImagePath: "https://ensawards.org/app-etherscan_og_image.png",
    twitterOgImagePath: "https://ensawards.org/app-etherscan_twitter_og_image.png",
  },
  {
    id: "blockscout",
    slug: "blockscout",
    project: BlockscoutProject,
    name: "Blockscout",
    description: "Blockscout is a tool for inspecting and analyzing EVM based blockchains.",
    type: AppTypes.Explorer,
    socials: {
      website: new URL("https://www.blockscout.com/"),
      twitter: new URL("https://x.com/blockscout"),
    },
    icon: BlockscoutIcon,
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
    ogImagePath: "https://ensawards.org/app-blockscout_og_image.png",
    twitterOgImagePath: "https://ensawards.org/app-blockscout_twitter_og_image.png",
  },
];
