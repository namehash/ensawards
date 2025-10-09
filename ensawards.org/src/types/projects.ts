import type { SvgComponent } from "astro/types";

export const ProjectNames = {
  Ens: "ENS",
  Uniswap: "Uniswap",
} as const;

/**
 * ProjectName is the derived string union of possible identifiers of supported projects' names.
 */
export type ProjectName = (typeof ProjectNames)[keyof typeof ProjectNames];

/**
 * Describes a project.
 */
export interface Project {
  name: ProjectName;
  description: string;
  icon: SvgComponent;
  socialLinks: {
    websiteLink: URL;
    twitterLink: URL;
  };
}
