import { type App } from "@/types/apps.ts";

import { BlockscoutExplorer } from "./blockscout-explorer";
import { CoinbaseWallet } from "./coinbase-wallet";
import { EtherscanExplorer } from "./etherscan-explorer";
import { MetaMaskWallet } from "./metamask-wallet";
import { RainbowWallet } from "./rainbow-wallet";

export const APPS: App[] = [
  RainbowWallet,
  CoinbaseWallet,
  MetaMaskWallet,
  EtherscanExplorer,
  BlockscoutExplorer,
];
