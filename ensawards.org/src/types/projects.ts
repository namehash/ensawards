import type { JSX } from "astro/jsx-runtime";

export const ProjectIds = {
  Ens: "project-ens",
  Uniswap: "project-uniswap",
  Nouns: "project-nouns",
  Arbitrum: "project-arbitrum",
  Aave: "project-aave",
  Taiko: "project-taiko",
  Liquity: "project-liquity",
  Rainbow: "project-rainbow",
  Consensys: "project-consensys",
  Coinbase: "project-coinbase",
  Blockscout: "project-blockscout",
  Etherscan: "project-etherscan",
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
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  socials: {
    website: URL;
    twitter: URL;
  };
}
