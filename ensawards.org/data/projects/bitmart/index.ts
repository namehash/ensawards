// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import BitMartIcon from "./icon.tsx";

const BitMartProject: Project = {
  id: ProjectIds.BitMart,
  name: "BitMart",
  description:
    "Global cryptocurrency exchange offering spot and futures trading across a wide range of assets, with staking, savings, and other earn products.",
  icon: BitMartIcon,
  socials: {
    website: new URL("https://www.bitmart.com"),
    twitter: new URL("https://x.com/BitMartExchange"),
  },
};

defineProject(BitMartProject);

export default BitMartProject;
