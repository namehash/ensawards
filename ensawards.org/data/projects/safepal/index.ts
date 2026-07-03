// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import SafePalIcon from "./icon.tsx";

const SafePalProject: Project = {
  id: ProjectIds.SafePal,
  name: "SafePal",
  description:
    "Self-custodial crypto wallet spanning hardware, mobile, and browser-extension apps for storing, sending, and swapping digital assets across multiple chains.",
  icon: SafePalIcon,
  socials: {
    website: new URL("https://www.safepal.com"),
    twitter: new URL("https://x.com/SafePal"),
  },
};

defineProject(SafePalProject);

export default SafePalProject;
