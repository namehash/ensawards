// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import BingXIcon from "./icon.tsx";

const BingXProject: Project = {
  id: ProjectIds.BingX,
  name: "BingX",
  description:
    "Global cryptocurrency exchange for spot, futures, and copy trading, buying, and managing digital assets, with a broad suite of Web3 products.",
  icon: BingXIcon,
  socials: {
    website: new URL("https://bingx.com"),
    twitter: new URL("https://x.com/BingXOfficial"),
  },
};

defineProject(BingXProject);

export default BingXProject;
