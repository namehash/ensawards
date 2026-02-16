import { type App } from "@/types/apps.ts";

import { BlockscoutExplorer } from "./blockscout";
import { CoinbaseWallet } from "./coinbase-wallet";
import { EtherscanExplorer } from "./etherscan";
import { MetaMaskWallet } from "./metamask";
import { RainbowWallet } from "./rainbow-wallet";

export const APPS: App[] = [
  RainbowWallet,
  CoinbaseWallet,
  MetaMaskWallet,
  EtherscanExplorer,
  BlockscoutExplorer,
];
