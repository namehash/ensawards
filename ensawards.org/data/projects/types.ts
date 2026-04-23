import type { SvgIcon } from "data/shared/svg-icon";

export const ProjectIds = {
  Ens: "project-ens",
  Uniswap: "project-uniswap",
  Nouns: "project-nouns",
  Arbitrum: "project-arbitrum",
  Aave: "project-aave",
  Taiko: "project-taiko",
  Liquity: "project-liquity",
  Rainbow: "project-rainbow",
  MetaMask: "project-metamask",
  Coinbase: "project-coinbase",
  Blockscout: "project-blockscout",
  Etherscan: "project-etherscan",
  Cork: "project-cork",
  Giveth: "project-giveth",
  SSVNetwork: "project-ssvnetwork",
} as const;

/**
 * The derived string union of possible {@link ProjectIds}.
 */
export type ProjectId = (typeof ProjectIds)[keyof typeof ProjectIds];

/**
 * Describes a project.
 */
export interface Project {
  id: ProjectId;
  name: string;
  description: string;
  icon: SvgIcon;
  socials: {
    website: URL;
    twitter: URL;
  };
}
