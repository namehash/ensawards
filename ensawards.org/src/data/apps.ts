import { displayNamedSmartContracts, recognizeAllENSNames } from "@/data/bestPractices.ts";
import { type App, BenchmarkResult } from "@/types/apps.ts";

export const APPS: App[] = [
  {
    id: "rainbow-wallet",
    slug: "rainbow-wallet",
    name: "Rainbow Wallet",
    description:
      "Rainbow is a fun, simple, and secure way to get started with crypto and explore Ethereum.",
    type: "Wallet",
    socials: {
      website: new URL("https://rainbow.me/"),
      twitter: new URL("https://x.com/rainbowdotme"),
      ens: "rainbowwallet.eth",
    },
    iconSourceLink: "/src/assets/rainbowIcon.svg",
    benchmarks: [
      {
        bestPracticeDetails: recognizeAllENSNames,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: displayNamedSmartContracts,
        result: BenchmarkResult.Fail,
      },
    ],
  },
  {
    id: "coinbase-wallet",
    slug: "coinbase-wallet",
    name: "Coinbase Wallet",
    description:
      "Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries.",
    type: "Wallet",
    socials: {
      website: new URL("https://www.coinbase.com/learn/wallet"),
      twitter: new URL("https://x.com/coinbase"),
      ens: "coinbase.eth",
    },
    iconSourceLink: "/src/assets/coinbaseWalletIcon.svg",
    benchmarks: [
      {
        bestPracticeDetails: recognizeAllENSNames,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: displayNamedSmartContracts,
        result: BenchmarkResult.Fail,
      },
    ],
  },
  {
    id: "metamask",
    slug: "metamask",
    name: "MetaMask",
    description:
      "MetaMask is a widely used, self-custodial cryptocurrency wallet that allows users to interact with the Ethereum blockchain and other compatible networks. ",
    type: "Wallet",
    socials: {
      website: new URL("https://metamask.io/"),
      twitter: new URL("https://x.com/MetaMask"),
      ens: "metamask.eth",
    },
    iconSourceLink: "/src/assets/metamaskIcon.svg",
    benchmarks: [
      {
        bestPracticeDetails: recognizeAllENSNames,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: displayNamedSmartContracts,
        result: BenchmarkResult.Fail,
      },
    ],
  },
  {
    id: "etherscan",
    slug: "etherscan",
    name: "Etherscan",
    description: "Etherscan is a Block Explorer and Analytics Platform for Ethereum.",
    type: "Explorer",
    socials: {
      website: new URL("https://etherscan.io/"),
      twitter: new URL("https://x.com/etherscan"),
      ens: "etherscan.eth",
    },
    iconSourceLink: "/src/assets/etherscanIcon.png",
    benchmarks: [
      {
        bestPracticeDetails: recognizeAllENSNames,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: displayNamedSmartContracts,
        result: BenchmarkResult.Pass,
      },
    ],
  },
  {
    id: "blockscout",
    slug: "blockscout",
    name: "Blockscout",
    description: "Blockscout is a tool for inspecting and analyzing EVM based blockchains.",
    type: "Explorer",
    socials: {
      website: new URL("https://www.blockscout.com/"),
      twitter: new URL("https://x.com/blockscout"),
    },
    iconSourceLink: "/src/assets/blockscoutIcon.jpg",
    benchmarks: [
      {
        bestPracticeDetails: recognizeAllENSNames,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: displayNamedSmartContracts,
        result: BenchmarkResult.Pass,
      },
    ],
  },
];
