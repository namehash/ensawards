import { type App } from "@/types/apps.ts";

import { BlockscoutApp } from "./blockscout";
import { CoinbaseWalletApp } from "./coinbase-wallet";
import { EtherscanApp } from "./etherscan";
import { MetaMaskApp } from "./metamask";
import { RainbowWalletApp } from "./rainbow-wallet";

export const APPS: App[] = [
  RainbowWalletApp,
  CoinbaseWalletApp,
  MetaMaskApp,
  EtherscanApp,
  BlockscoutApp,
];
