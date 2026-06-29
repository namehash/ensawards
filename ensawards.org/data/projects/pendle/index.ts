// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import PendleIcon from "./icon.tsx";

const PendleProject: Project = {
  id: ProjectIds.Pendle,
  name: "Pendle",
  description:
    "A crypto yield trading platform where users can trade spot yield, earn fixed yield, or take leveraged positions on yield across a wide range of onchain and off-chain assets.",
  icon: PendleIcon,
  socials: {
    website: new URL("https://www.pendle.finance/"),
    twitter: new URL("https://x.com/pendle_fi"),
  },
};

defineProject(PendleProject);

export default PendleProject;
