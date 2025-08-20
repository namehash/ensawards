import type { BestPractice } from "@/data/bestPracticesData.ts";

export enum BenchmarkResult {
  Pass = "Pass",
  PartialPass = "Partial pass",
  Fail = "Fail",
}

export interface AppBenchmark {
  category: string;
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
        category: "ENS Resolution",
        bestPracticeDetails: {
          name: "Support ENSIP-19",
          description:
            "This ENSIP standardizes reverse and primary name resolution for all coin types, and defines how this resolution process operates across the ecosystem.",
          technicalDetails: {
            main: {
              header: "Technical info",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            sides: [
              {
                header: "Header",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ],
            card: {
              header: "Support ENSIP-19",
              content:
                "ENSIP standardizes reverse and primary name resolution for all coin types, defines how the process operates across the ecosystem.",
              additionalData: [
                {
                  name: "Category",
                  value: "ENS Resolution",
                  valueStyles:
                    "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200",
                  link: new URL("https://docs.ens.domains/resolution/"),
                },
                {
                  name: "Apps passed",
                  value: "12",
                  valueStyles: "text-black",
                },
                {
                  name: "App support",
                  value: "90%",
                  valueStyles: "text-emerald-600",
                },
              ],
            },
          },
        },
        result: BenchmarkResult.Pass,
      },
      {
        category: "ENS Resolution",
        bestPracticeDetails: {
          name: "Support ENSIP-19",
          description:
            "This ENSIP standardizes reverse and primary name resolution for all coin types, and defines how this resolution process operates across the ecosystem.",
          technicalDetails: {
            main: {
              header: "Technical info",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            sides: [
              {
                header: "Header",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ],
            card: {
              header: "Support ENSIP-19",
              content:
                "ENSIP standardizes reverse and primary name resolution for all coin types, defines how the process operates across the ecosystem.",
              additionalData: [
                {
                  name: "Category",
                  value: "ENS Resolution",
                  valueStyles:
                    "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200",
                  link: new URL("https://docs.ens.domains/resolution/"),
                },
                {
                  name: "Apps passed",
                  value: "12",
                  valueStyles: "text-black",
                },
                {
                  name: "App support",
                  value: "90%",
                  valueStyles: "text-emerald-600",
                },
              ],
            },
          },
        },
        result: BenchmarkResult.PartialPass,
      },
      {
        category: "ENS Resolution",
        bestPracticeDetails: {
          name: "Support ENSIP-19",
          description:
            "This ENSIP standardizes reverse and primary name resolution for all coin types, and defines how this resolution process operates across the ecosystem.",
          technicalDetails: {
            main: {
              header: "Technical info",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            sides: [
              {
                header: "Header",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ],
            card: {
              header: "Support ENSIP-19",
              content:
                "ENSIP standardizes reverse and primary name resolution for all coin types, defines how the process operates across the ecosystem.",
              additionalData: [
                {
                  name: "Category",
                  value: "ENS Resolution",
                  valueStyles:
                    "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200",
                  link: new URL("https://docs.ens.domains/resolution/"),
                },
                {
                  name: "Apps passed",
                  value: "12",
                  valueStyles: "text-black",
                },
                {
                  name: "App support",
                  value: "90%",
                  valueStyles: "text-emerald-600",
                },
              ],
            },
          },
        },
        result: BenchmarkResult.Fail,
      },
    ],
  },
  {
    id: "coinbase-wallet",
    name: "Coinbase Wallet",
    description:
      "Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries.",
    ensAwardsScore: 89,
    type: "Wallet",
    websiteLink: "https://www.coinbase.com/learn/wallet",
    iconSourceLink: "/src/assets/coinbaseWalletIcon.svg",
    benchmarks: [
      {
        category: "ENS Resolution",
        bestPracticeDetails: {
          name: "Support ENSIP-19",
          description:
            "This ENSIP standardizes reverse and primary name resolution for all coin types, and defines how this resolution process operates across the ecosystem.",
          technicalDetails: {
            main: {
              header: "Technical info",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            sides: [
              {
                header: "Header",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ],
            card: {
              header: "Support ENSIP-19",
              content:
                "ENSIP standardizes reverse and primary name resolution for all coin types, defines how the process operates across the ecosystem.",
              additionalData: [
                {
                  name: "Category",
                  value: "ENS Resolution",
                  valueStyles:
                    "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200",
                  link: new URL("https://docs.ens.domains/resolution/"),
                },
                {
                  name: "Apps passed",
                  value: "12",
                  valueStyles: "text-black",
                },
                {
                  name: "App support",
                  value: "90%",
                  valueStyles: "text-emerald-600",
                },
              ],
            },
          },
        },
        result: BenchmarkResult.Pass,
      },
      {
        category: "ENS Resolution",
        bestPracticeDetails: {
          name: "Support ENSIP-19",
          description:
            "This ENSIP standardizes reverse and primary name resolution for all coin types, and defines how this resolution process operates across the ecosystem.",
          technicalDetails: {
            main: {
              header: "Technical info",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            sides: [
              {
                header: "Header",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ],
            card: {
              header: "Support ENSIP-19",
              content:
                "ENSIP standardizes reverse and primary name resolution for all coin types, defines how the process operates across the ecosystem.",
              additionalData: [
                {
                  name: "Category",
                  value: "ENS Resolution",
                  valueStyles:
                    "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200",
                  link: new URL("https://docs.ens.domains/resolution/"),
                },
                {
                  name: "Apps passed",
                  value: "12",
                  valueStyles: "text-black",
                },
                {
                  name: "App support",
                  value: "90%",
                  valueStyles: "text-emerald-600",
                },
              ],
            },
          },
        },
        result: BenchmarkResult.PartialPass,
      },
      {
        category: "ENS Resolution",
        bestPracticeDetails: {
          name: "Support ENSIP-19",
          description:
            "This ENSIP standardizes reverse and primary name resolution for all coin types, and defines how this resolution process operates across the ecosystem.",
          technicalDetails: {
            main: {
              header: "Technical info",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            sides: [
              {
                header: "Header",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ],
            card: {
              header: "Support ENSIP-19",
              content:
                "ENSIP standardizes reverse and primary name resolution for all coin types, defines how the process operates across the ecosystem.",
              additionalData: [
                {
                  name: "Category",
                  value: "ENS Resolution",
                  valueStyles:
                    "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200",
                  link: new URL("https://docs.ens.domains/resolution/"),
                },
                {
                  name: "Apps passed",
                  value: "12",
                  valueStyles: "text-black",
                },
                {
                  name: "App support",
                  value: "90%",
                  valueStyles: "text-emerald-600",
                },
              ],
            },
          },
        },
        result: BenchmarkResult.Fail,
      },
    ],
  },
  {
    id: "metamask",
    name: "Metamask",
    description:
      "MetaMask is a widely used, self-custodial cryptocurrency wallet that allows users to interact with the Ethereum blockchain and other compatible networks. It functions as a browser extension and mobile app, enabling users to store, send, receive, and trade digital assets, as well as connect with decentralized applications (dApps). ",
    ensAwardsScore: 88,
    type: "Wallet",
    websiteLink: "https://metamask.io/",
    iconSourceLink: "/src/assets/metamaskIcon.svg",
    benchmarks: [
      {
        category: "ENS Resolution",
        bestPracticeDetails: {
          name: "Support ENSIP-19",
          description:
            "This ENSIP standardizes reverse and primary name resolution for all coin types, and defines how this resolution process operates across the ecosystem.",
          technicalDetails: {
            main: {
              header: "Technical info",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            sides: [
              {
                header: "Header",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ],
            card: {
              header: "Support ENSIP-19",
              content:
                "ENSIP standardizes reverse and primary name resolution for all coin types, defines how the process operates across the ecosystem.",
              additionalData: [
                {
                  name: "Category",
                  value: "ENS Resolution",
                  valueStyles:
                    "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200",
                  link: new URL("https://docs.ens.domains/resolution/"),
                },
                {
                  name: "Apps passed",
                  value: "12",
                  valueStyles: "text-black",
                },
                {
                  name: "App support",
                  value: "90%",
                  valueStyles: "text-emerald-600",
                },
              ],
            },
          },
        },
        result: BenchmarkResult.Pass,
      },
      {
        category: "ENS Resolution",
        bestPracticeDetails: {
          name: "Support ENSIP-19",
          description:
            "This ENSIP standardizes reverse and primary name resolution for all coin types, and defines how this resolution process operates across the ecosystem.",
          technicalDetails: {
            main: {
              header: "Technical info",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            sides: [
              {
                header: "Header",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ],
            card: {
              header: "Support ENSIP-19",
              content:
                "ENSIP standardizes reverse and primary name resolution for all coin types, defines how the process operates across the ecosystem.",
              additionalData: [
                {
                  name: "Category",
                  value: "ENS Resolution",
                  valueStyles:
                    "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200",
                  link: new URL("https://docs.ens.domains/resolution/"),
                },
                {
                  name: "Apps passed",
                  value: "12",
                  valueStyles: "text-black",
                },
                {
                  name: "App support",
                  value: "90%",
                  valueStyles: "text-emerald-600",
                },
              ],
            },
          },
        },
        result: BenchmarkResult.PartialPass,
      },
      {
        category: "ENS Resolution",
        bestPracticeDetails: {
          name: "Support ENSIP-19",
          description:
            "This ENSIP standardizes reverse and primary name resolution for all coin types, and defines how this resolution process operates across the ecosystem.",
          technicalDetails: {
            main: {
              header: "Technical info",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            sides: [
              {
                header: "Header",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ],
            card: {
              header: "Support ENSIP-19",
              content:
                "ENSIP standardizes reverse and primary name resolution for all coin types, defines how the process operates across the ecosystem.",
              additionalData: [
                {
                  name: "Category",
                  value: "ENS Resolution",
                  valueStyles:
                    "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200",
                  link: new URL("https://docs.ens.domains/resolution/"),
                },
                {
                  name: "Apps passed",
                  value: "12",
                  valueStyles: "text-black",
                },
                {
                  name: "App support",
                  value: "90%",
                  valueStyles: "text-emerald-600",
                },
              ],
            },
          },
        },
        result: BenchmarkResult.Fail,
      },
    ],
  },
];
