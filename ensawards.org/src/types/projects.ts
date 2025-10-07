//TODO: name's sketchy, improve
export const SupportedProjects = {
  Ens: "ENS",
  Uniswap: "Uniswap",
} as const;

/**
 * SupportedProject is the derived string union of possible identifiers of supported projects.
 */
export type SupportedProject = (typeof SupportedProjects)[keyof typeof SupportedProjects];

// TODO: improve this description
/**
 * Describes the entity issuing the smart contracts.
 */
export interface Project {
  name: SupportedProject;
  description: string;
  iconLink: string;
  socialLinks: {
    websiteLink: URL;
    twitterLink: URL;
  };
}
