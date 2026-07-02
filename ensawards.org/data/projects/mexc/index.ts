// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import MEXCIcon from "./icon.tsx";

const MEXCProject: Project = {
  id: ProjectIds.MEXC,
  name: "MEXC",
  description:
    "Global cryptocurrency exchange known for fast listings of new tokens, offering spot, margin, and futures trading alongside copy trading and earn products.",
  icon: MEXCIcon,
  socials: {
    website: new URL("https://www.mexc.com"),
    twitter: new URL("https://x.com/MEXC"),
  },
};

defineProject(MEXCProject);

export default MEXCProject;
