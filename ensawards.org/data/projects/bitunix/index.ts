// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import BitunixIcon from "./icon.tsx";

const BitunixProject: Project = {
  id: ProjectIds.Bitunix,
  name: "Bitunix",
  description:
    "Global cryptocurrency exchange focused on perpetual futures and spot trading, with copy trading and a range of earn products for digital assets.",
  icon: BitunixIcon,
  socials: {
    website: new URL("https://www.bitunix.com"),
    twitter: new URL("https://x.com/BitunixOfficial"),
  },
};

defineProject(BitunixProject);

export default BitunixProject;
