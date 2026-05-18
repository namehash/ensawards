// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import RabbyIcon from "./icon.tsx";

const RabbyProject: Project = {
  id: ProjectIds.Rabby,
  name: "Rabby",
  description:
    "An open-source, security-focused browser wallet built for DeFi on Ethereum and every EVM chain.",
  icon: RabbyIcon,
  socials: {
    website: new URL("https://rabby.io/"),
    twitter: new URL("https://x.com/Rabby_io"),
  },
};

defineProject(RabbyProject);

export default RabbyProject;
