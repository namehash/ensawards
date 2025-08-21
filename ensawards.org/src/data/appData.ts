import {type BestPractice, placeholderBestPractice, supportEnsip19BestPractice} from "@/data/bestPracticesData.ts";

export enum BenchmarkResult {
  Pass = "Pass",
  PartialPass = "Partial pass",
  Fail = "Fail",
}

export interface AppBenchmark {
  bestPracticeDetails: BestPractice;
  result: BenchmarkResult;
}

export interface AppData {
  id: string; // normalized app name, might be redundant
  name: string;
  description: string;
  ensAwardsScore: number;
  type: string; //Will probably change to string union once the data is provided
  websiteLink: string;
  iconSourceLink: string;
  benchmarks: AppBenchmark[];
}

export const appsData: AppData[] = [
  {
    id: "rainbow-wallet",
    name: "Rainbow Wallet",
    description:
      "Rainbow is a fun, simple, and secure way to get started with crypto and explore Ethereum.",
    ensAwardsScore: 90,
    type: "Wallet",
    websiteLink: "https://rainbow.me/",
    iconSourceLink: "/src/assets/rainbowIcon.svg",
    benchmarks: [
      {
        bestPracticeDetails: supportEnsip19BestPractice,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: placeholderBestPractice,
        result: BenchmarkResult.Fail,
      },
    ],
  },
  {
    id: "coinbase-wallet",
    name: "Coinbase Wallet",
    description:
      "Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries.",
    ensAwardsScore: 90,
    type: "Wallet",
    websiteLink: "https://www.coinbase.com/learn/wallet",
    iconSourceLink: "/src/assets/coinbaseWalletIcon.svg",
    benchmarks: [
      {
        bestPracticeDetails: supportEnsip19BestPractice,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: placeholderBestPractice,
        result: BenchmarkResult.Fail,
      },
    ]
  },
  {
    id: "metamask",
    name: "Metamask",
    description:
      "MetaMask is a widely used, self-custodial cryptocurrency wallet that allows users to interact with the Ethereum blockchain and other compatible networks. It functions as a browser extension and mobile app, enabling users to store, send, receive, and trade digital assets, as well as connect with decentralized applications (dApps). ",
    ensAwardsScore: 90,
    type: "Wallet",
    websiteLink: "https://metamask.io/",
    iconSourceLink: "/src/assets/metamaskIcon.svg",
    benchmarks: [
      {
        bestPracticeDetails: supportEnsip19BestPractice,
        result: BenchmarkResult.Pass,
      },
      {
        bestPracticeDetails: placeholderBestPractice,
        result: BenchmarkResult.Fail,
      },
    ]
  },
];
