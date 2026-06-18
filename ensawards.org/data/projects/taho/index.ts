// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import TahoIcon from "./icon.tsx";

const TahoProject: Project = {
  id: ProjectIds.Taho,
  name: "Taho",
  description:
    "A community-owned, fully open-source web3 browser extension wallet with NFT galleries, low-cost swaps, and hardware wallet support.",
  icon: TahoIcon,
  socials: {
    website: new URL("https://taho.xyz/"),
    twitter: new URL("https://x.com/taho_xyz"),
  },
};

defineProject(TahoProject);

export default TahoProject;
