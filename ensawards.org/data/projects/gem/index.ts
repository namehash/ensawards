// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import GemIcon from "./icon.tsx";

const GemProject: Project = {
  id: ProjectIds.Gem,
  name: "Gem",
  description:
    "Open-source, self-custodial multichain crypto wallet for storing, sending, and swapping digital assets and interacting with decentralized applications.",
  icon: GemIcon,
  socials: {
    website: new URL("https://gemwallet.com"),
    twitter: new URL("https://x.com/gemwallet"),
  },
};

defineProject(GemProject);

export default GemProject;
