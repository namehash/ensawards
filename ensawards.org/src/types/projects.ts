import type { JSX } from "astro/jsx-runtime";

export const ProjectIds = {
  Ens: "project-ens",
  Uniswap: "project-uniswap",
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
  socialLinks: {
    websiteLink: URL;
    twitterLink: URL;
  };
}
