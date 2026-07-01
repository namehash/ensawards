// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import BitgetIcon from "./icon.tsx";

const BitgetProject: Project = {
  id: ProjectIds.Bitget,
  name: "Bitget",
  description:
    "Cryptocurrency exchange and Web3 platform for trading, copy trading, and managing digital assets, with a self-custodial wallet and access to decentralized applications.",
  icon: BitgetIcon,
  socials: {
    website: new URL("https://www.bitget.com"),
    twitter: new URL("https://x.com/bitget"),
  },
};

defineProject(BitgetProject);

export default BitgetProject;
