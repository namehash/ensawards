// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import OneInchIcon from "./icon.tsx";

const OneInchProject: Project = {
  id: ProjectIds.OneInch,
  name: "1inch",
  description:
    "A DeFi ecosystem integrating 13+ chains with the only native connection between Solana and EVM networks, helping users trade, hold, and track digital assets with true self-custody.",
  icon: OneInchIcon,
  socials: {
    website: new URL("https://1inch.com/"),
    twitter: new URL("https://x.com/1inch"),
  },
};

defineProject(OneInchProject);

export default OneInchProject;
