// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import XTcomIcon from "./icon.tsx";

const XTcomProject: Project = {
  id: ProjectIds.XTcom,
  name: "XT.COM",
  description:
    "Global cryptocurrency exchange offering spot and futures trading across a large selection of assets, with copy trading and earn products.",
  icon: XTcomIcon,
  socials: {
    website: new URL("https://www.xt.com"),
    twitter: new URL("https://x.com/XTexchange"),
  },
};

defineProject(XTcomProject);

export default XTcomProject;
