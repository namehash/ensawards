// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import WorldIcon from "./icon.tsx";

const WorldProject: Project = {
  id: ProjectIds.World,
  name: "World",
  description:
    "World is a new standard of trust for the internet - private proof of human, powerful financial infrastructure & the human-first experiences they enable.",
  icon: WorldIcon,
  socials: {
    website: new URL("https://world.org/"),
    twitter: new URL("https://x.com/worldnetwork"),
  },
};

defineProject(WorldProject);

export default WorldProject;
