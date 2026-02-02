import { AaveProjectIcon } from "@/components/atoms/icons/projects-and-protocols/AaveProjectIcon.tsx";
import { ArbitrumProjectIcon } from "@/components/atoms/icons/projects-and-protocols/ArbitrumProjectIcon.tsx";
import { EnsProjectIcon } from "@/components/atoms/icons/projects-and-protocols/EnsProjectIcon.tsx";
import { NounsIcon } from "@/components/atoms/icons/projects-and-protocols/NounsIcon.tsx";
import { TaikoIcon } from "@/components/atoms/icons/projects-and-protocols/TaikoIcon.tsx";
import { UniswapIcon } from "@/components/atoms/icons/projects-and-protocols/UniswapIcon.tsx";
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
];
