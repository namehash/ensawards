import { AaveProject } from "@/data/projects/aave";
import { ArbitrumProject } from "@/data/projects/arbitrum";
import { BlockscoutProject } from "@/data/projects/blockscout";
import { CoinbaseProject } from "@/data/projects/coinbase";
import { ENSProject } from "@/data/projects/ens";
import { EtherscanProject } from "@/data/projects/etherscan";
import { LiquityProject } from "@/data/projects/liquity";
import { MetaMaskProject } from "@/data/projects/metamask";
import { NounsProject } from "@/data/projects/nouns";
import { RainbowProject } from "@/data/projects/rainbow";
import { TaikoProject } from "@/data/projects/taiko";
import { UniswapProject } from "@/data/projects/uniswap";
import { type Project } from "@/types/projects.ts";

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
