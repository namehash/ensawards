import type { Project } from "@/types/projects.ts";
import type { JSX } from "astro/jsx-runtime";

export const OrganizationTypes = {
  DAO: "DAO",
} as const;

export const OrganizationNames = {
  Ens: "ENS DAO",
  Uniswap: "Uniswap DAO",
} as const;

/**
 * ContractSubtype is the derived string union of possible identifiers of established contract subtypes.
 */
export type OrganizationName = (typeof OrganizationNames)[keyof typeof OrganizationNames];

export interface DAO {
  orgType: typeof OrganizationTypes.DAO; // DAOs are organizations with `OrganizationType.DAO`.
  project: Project; // each organization belongs to a single project.
  name: OrganizationName;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  socialLinks: {
    websiteLink: URL;
    twitterLink: URL;
  };
}

export type Organization = DAO;
