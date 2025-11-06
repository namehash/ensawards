import type { Project } from "@/types/projects.ts";
import type { Name } from "@ensnode/ensnode-sdk";
import type { JSX } from "astro/jsx-runtime";

export const OrganizationTypes = {
  Dao: "orgtype-dao",
} as const;

export const OrgIds = {
  Ens: "org-ens-dao",
  Uniswap: "org-uniswap-dao",
  Nouns: "org-nouns-dao",
  Arbitrum: "org-arbitrum-dao",
  Aave: "org-aave-dao",
} as const;

/**
 * The derived string union of possible {@link OrgIds}.
 */
export type OrgId = (typeof OrgIds)[keyof typeof OrgIds];

export interface DAO {
  id: OrgId;
  slug: string;
  orgType: typeof OrganizationTypes.Dao;
  project: Project; // each organization belongs to a single project.
  name: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  socials: {
    website: URL;
    twitter: URL;
    ens?: Name;
  };
  ogImage?: string;
  twitterOgImage?: string;
}

// TODO: add more Org types to this type union in the future
export type Organization = DAO;
