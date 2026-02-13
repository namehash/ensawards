import { BlockscoutApp } from "@/data/apps/blockscout";
import { CoinbaseWalletApp } from "@/data/apps/coinbase-wallet";
import { EtherscanApp } from "@/data/apps/etherscan";
import { MetaMaskApp } from "@/data/apps/metamask";
import { RainbowWalletApp } from "@/data/apps/rainbow-wallet";
import { type App } from "@/types/apps.ts";

export const APPS: App[] = [
  RainbowWalletApp,
  CoinbaseWalletApp,
  MetaMaskApp,
  EtherscanApp,
  BlockscoutApp,
];
