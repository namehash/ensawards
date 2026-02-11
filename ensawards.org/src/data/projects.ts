import { AaveProjectIcon } from "@/components/atoms/icons/ens-integrating-entities/projects/AaveProjectIcon.tsx";
import { ArbitrumProjectIcon } from "@/components/atoms/icons/ens-integrating-entities/projects/ArbitrumProjectIcon.tsx";
import { CoinbaseProjectIcon } from "@/components/atoms/icons/ens-integrating-entities/projects/CoinbaseProjectIcon.tsx";
import { ConsensysProjectIcon } from "@/components/atoms/icons/ens-integrating-entities/projects/ConsensysProjectIcon.tsx";
import { EnsProjectIcon } from "@/components/atoms/icons/ens-integrating-entities/projects/EnsProjectIcon.tsx";
import { BlockscoutIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/BlockscoutIcon.tsx";
import { EtherscanIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/EtherscanIcon.tsx";
import { LiquityIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/LiquityIcon.tsx";
import { NounsIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/NounsIcon.tsx";
import { RainbowIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/RainbowIcon.tsx";
import { TaikoIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/TaikoIcon.tsx";
import { UniswapIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/UniswapIcon.tsx";
import { type Project, ProjectIds } from "@/types/projects.ts";

export const ENSProject: Project = {
  id: ProjectIds.Ens,
  name: "ENS",
  description: "The Ethereum Name Service (ENS) is a decentralized domain name system.",
  icon: EnsProjectIcon,
  socials: {
    website: new URL("https://ens.domains/"),
    twitter: new URL("https://x.com/ensdomains"),
  },
};

export const UniswapProject: Project = {
  id: ProjectIds.Uniswap,
  name: "Uniswap",
  description:
    "The largest onchain marketplace. Buy and sell crypto on Ethereum and 12+ other chains.",
  icon: UniswapIcon,
  socials: {
    website: new URL("https://app.uniswap.org/"),
    twitter: new URL("https://x.com/Uniswap"),
  },
};

export const NounsProject: Project = {
  id: ProjectIds.Nouns,
  name: "Nouns",
  description:
    "Nouns is a community-owned brand that makes a positive impact by funding ideas and fostering collaboration.",
  icon: NounsIcon,
  socials: {
    website: new URL("https://nouns.wtf/"),
    twitter: new URL("https://x.com/nounsdao"),
  },
};

export const ArbitrumProject: Project = {
  id: ProjectIds.Arbitrum,
  name: "Arbitrum",
  description:
    "Arbitrum is a unified blockchain for everyone, where ideas thrive and boundaries fade.",
  icon: ArbitrumProjectIcon,
  socials: {
    website: new URL("https://arbitrum.io/"),
    twitter: new URL("https://x.com/arbitrum"),
  },
};

export const AaveProject: Project = {
  id: ProjectIds.Aave,
  name: "Aave",
  description:
    "The largest lending network where you can earn, borrow, save, and swap with millions of users.",
  icon: AaveProjectIcon,
  socials: {
    website: new URL("https://aave.com/"),
    twitter: new URL("https://x.com/aave"),
  },
};

export const TaikoProject: Project = {
  id: ProjectIds.Taiko,
  name: "Taiko",
  description:
    "Taiko is a fully permissionless, Ethereum-equivalent based rollup. Inspired, secured, and sequenced by Ethereum.",
  icon: TaikoIcon,
  socials: {
    website: new URL("https://taiko.xyz/"),
    twitter: new URL("https://x.com/taikoxyz"),
  },
};

export const LiquityProject: Project = {
  id: ProjectIds.Liquity,
  name: "Liquity",
  description: "DeFi protocol for borrowing against ETH & staked ETH.",
  icon: LiquityIcon,
  socials: {
    twitter: new URL("https://x.com/LiquityProtocol"),
    website: new URL("https://www.liquity.org/"),
  },
};

//TODO: I'd appreciate help regarding descriptions and a double-check of socials for the new projects
export const RainbowProject: Project = {
  id: ProjectIds.Rainbow,
  name: "Rainbow",
  description:
    "Rainbow is a fun, simple, and secure way to get started with crypto and explore Ethereum.",
  icon: RainbowIcon,
  socials: {
    website: new URL("https://rainbow.me/"),
    twitter: new URL("https://x.com/rainbowdotme"),
  },
};

export const CoinbaseProject: Project = {
  id: ProjectIds.Coinbase,
  name: "Coinbase",
  description:
    "Regulated crypto exchange and financial platform for buying, selling, storing, and using digital assets.",
  icon: CoinbaseProjectIcon,
  socials: {
    website: new URL("https://www.coinbase.com/"),
    twitter: new URL("https://x.com/coinbase"),
  },
};

export const ConsensysProject: Project = {
  id: ProjectIds.Consensys,
  name: "Consensys",
  description:
    "Blockchain software and infrastructure company building and scaling Ethereum-based developer tools, wallets (like MetaMask), APIs and enterprise solutions to enable access to Web3 and decentralized finance.",
  icon: ConsensysProjectIcon,
  socials: {
    website: new URL("https://consensys.io/"),
    twitter: new URL("https://x.com/consensys"),
  },
};

export const EtherscanProject: Project = {
  id: ProjectIds.Etherscan,
  name: "Etherscan",
  description: "Etherscan is a Block Explorer and Analytics Platform for Ethereum.",
  icon: EtherscanIcon,
  socials: {
    website: new URL("https://etherscan.io/"),
    twitter: new URL("https://x.com/etherscan"),
  },
};

export const BlockscoutProject: Project = {
  id: ProjectIds.Blockscout,
  name: "Blockscout",
  description: "Blockscout is a tool for inspecting and analyzing EVM based blockchains.",
  icon: BlockscoutIcon,
  socials: {
    website: new URL("https://www.blockscout.com/"),
    twitter: new URL("https://x.com/blockscout"),
  },
};

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
  ConsensysProject,
  EtherscanProject,
  BlockscoutProject,
];
