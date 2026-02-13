import { ArbitrumProjectIcon } from "@/components/atoms/icons/ens-integrating-entities/projects/ArbitrumProjectIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

export const ArbitrumProject: Project = {
  id: ProjectIds.Arbitrum,
  name: "Arbitrum",
  description:
    "Arbitrum is a unified blockchain for everyone, where ideas thrive and boundaries fade.",
  icon: ArbitrumProjectIcon,
  socials: {
    website: new URL("https://arbitrum.io/"),
    twitter: new URL("https://x.com/arbitrum"),
  },
};
