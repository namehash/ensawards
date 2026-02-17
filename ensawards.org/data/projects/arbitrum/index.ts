import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

import AaveProject from "../aave";
import ArbitrumIcon from "./icon.tsx";

const ArbitrumProject: Project = {
  id: ProjectIds.Arbitrum,
  name: "Arbitrum",
  description:
    "Arbitrum is a unified blockchain for everyone, where ideas thrive and boundaries fade.",
  icon: ArbitrumIcon,
  socials: {
    website: new URL("https://arbitrum.io/"),
    twitter: new URL("https://x.com/arbitrum"),
  },
};

export default ArbitrumProject;
