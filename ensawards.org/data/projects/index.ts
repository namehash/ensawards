import { type Project } from "@/types/projects.ts";

import { AaveProject } from "./aave";
import { ArbitrumProject } from "./arbitrum";
import { BlockscoutProject } from "./blockscout";
import { CoinbaseProject } from "./coinbase";
import { ENSProject } from "./ens";
import { EtherscanProject } from "./etherscan";
import { LiquityProject } from "./liquity";
import { MetaMaskProject } from "./metamask";
import { NounsProject } from "./nouns";
import { RainbowProject } from "./rainbow";
import { TaikoProject } from "./taiko";
import { UniswapProject } from "./uniswap";

/**
 * Array of supported projects.
 *
 * Invariant: This array should contain exactly one {@link Project} for each {@link ProjectId}.
 */
export const PROJECTS: Project[] = [
  ENSProject,
  UniswapProject,
  NounsProject,
  ArbitrumProject,
  AaveProject,
  TaikoProject,
  LiquityProject,
  RainbowProject,
  CoinbaseProject,
  MetaMaskProject,
  EtherscanProject,
  BlockscoutProject,
];
