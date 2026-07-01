// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import HTXIcon from "./icon.tsx";

const HTXProject: Project = {
  id: ProjectIds.HTX,
  name: "HTX",
  description:
    "Global cryptocurrency exchange for trading, buying, and managing digital assets, with a broad suite of spot, futures, and Web3 products.",
  icon: HTXIcon,
  socials: {
    website: new URL("https://www.htx.com"),
    twitter: new URL("https://twitter.com/HTX_Global"),
  },
};

defineProject(HTXProject);

export default HTXProject;
