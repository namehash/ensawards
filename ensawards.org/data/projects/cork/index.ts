import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import CorkIcon from "./icon.tsx";

const CorkProject: Project = {
  id: ProjectIds.Cork,
  name: "Cork",
  description:
    "Programmable risk layer for onchain assets such as vault tokens, yield-bearing stablecoins, LSTs and RWAs.",
  icon: CorkIcon,
  socials: {
    twitter: new URL("https://x.com/Corkprotocol"),
    website: new URL("https://www.cork.tech/"),
  },
  contributors: [],
};

defineProject(CorkProject);

export default CorkProject;
