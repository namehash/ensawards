// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import WhiteBITIcon from "./icon.tsx";

const WhiteBITProject: Project = {
  id: ProjectIds.WhiteBIT,
  name: "WhiteBIT",
  description:
    "European cryptocurrency exchange offering spot and futures trading, staking, and earn products across a wide range of digital assets.",
  icon: WhiteBITIcon,
  socials: {
    website: new URL("https://whitebit.com"),
    twitter: new URL("https://x.com/WhiteBit"),
  },
};

defineProject(WhiteBITProject);

export default WhiteBITProject;
