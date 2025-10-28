import {
  displayNamedSmartContracts,
  placeholderBestPractice1,
  placeholderBestPractice2,
  placeholderBestPractice3,
  recognizeAllENSNames,
} from "@/data/bestPractices.ts";
import { type App, BenchmarkResult } from "@/types/apps.ts";

export const APPS: App[] = [
  {
    id: "rainbow-wallet",
    slug: "rainbow-wallet",
    name: "Rainbow Wallet",
    description:
      "Rainbow is a fun, simple, and secure way to get started with crypto and explore Ethereum.",
    ensAwardsScore: 90,
    type: "Wallet",
    websiteLink: "https://rainbow.me/",
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
      {
        bestPracticeDetails: placeholderBestPractice1,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: placeholderBestPractice2,
        result: BenchmarkResult.Fail,
      },
      {
        bestPracticeDetails: placeholderBestPractice3,
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
    ensAwardsScore: 90,
    type: "Wallet",
    websiteLink: "https://www.coinbase.com/learn/wallet",
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
      {
        bestPracticeDetails: placeholderBestPractice1,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: placeholderBestPractice2,
        result: BenchmarkResult.Fail,
      },
      {
        bestPracticeDetails: placeholderBestPractice3,
        result: BenchmarkResult.Fail,
      },
    ],
  },
  {
    id: "metamask",
    slug: "metamask",
    name: "Metamask",
    description:
      "MetaMask is a widely used, self-custodial cryptocurrency wallet that allows users to interact with the Ethereum blockchain and other compatible networks. It functions as a browser extension and mobile app, enabling users to store, send, receive, and trade digital assets, as well as connect with decentralized applications (dApps). ",
    ensAwardsScore: 90,
    type: "Wallet",
    websiteLink: "https://metamask.io/",
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
      {
        bestPracticeDetails: placeholderBestPractice1,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: placeholderBestPractice2,
        result: BenchmarkResult.Fail,
      },
      {
        bestPracticeDetails: placeholderBestPractice3,
        result: BenchmarkResult.Fail,
      },
    ],
  },
  {
    id: "etherscan",
    slug: "etherscan",
    name: "Etherscan",
    description: "Etherscan is a Block Explorer and Analytics Platform for Ethereum.",
    ensAwardsScore: 90,
    type: "Explorer",
    websiteLink: "https://etherscan.io/",
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
      {
        bestPracticeDetails: placeholderBestPractice1,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: placeholderBestPractice2,
        result: BenchmarkResult.Fail,
      },
      {
        bestPracticeDetails: placeholderBestPractice3,
        result: BenchmarkResult.Fail,
      },
    ],
  },
  {
    id: "blockscout",
    slug: "blockscout",
    name: "Blockscout",
    description: "Blockscout is a tool for inspecting and analyzing EVM based blockchains.",
    ensAwardsScore: 90,
    type: "Explorer",
    websiteLink: "https://www.blockscout.com/",
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
      {
        bestPracticeDetails: placeholderBestPractice1,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: placeholderBestPractice2,
        result: BenchmarkResult.Fail,
      },
      {
        bestPracticeDetails: placeholderBestPractice3,
        result: BenchmarkResult.Fail,
      },
    ],
  },
];
