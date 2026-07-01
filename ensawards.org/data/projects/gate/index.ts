// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import GateIcon from "./icon.tsx";

const GateProject: Project = {
  id: ProjectIds.Gate,
  name: "Gate",
  description:
    "Long-running cryptocurrency exchange known for its expansive token selection, offering spot, margin, futures, and copy trading alongside earn, launchpad, and Web3 wallet services.",
  icon: GateIcon,
  socials: {
    website: new URL("https://www.gate.com"),
    twitter: new URL("https://x.com/Gate"),
  },
};

defineProject(GateProject);

export default GateProject;
