import type { JSX } from "astro/jsx-runtime";

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
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  socialLinks: {
    websiteLink: URL;
    twitterLink: URL;
  };
}
