import { UniswapIcon } from "@/components/atoms/icons/UniswapIcon.tsx";
import { type Project, ProjectIds } from "@/types/projects.ts";
import { EnsProjectIcon } from "../components/atoms/icons/EnsProjectIcon.tsx";

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

/**
 * Array of supported projects.
 *
 * Invariant: This array should contain exactly one {@link Project} for each {@link ProjectId}.
 */
export const PROJECTS: Project[] = [ENSProject, UniswapProject];
