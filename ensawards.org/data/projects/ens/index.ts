import { EnsProjectIcon } from "@/components/atoms/icons/ens-integrating-entities/projects/EnsProjectIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

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
