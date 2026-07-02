// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import LBankIcon from "./icon.tsx";

const LBankProject: Project = {
  id: ProjectIds.LBank,
  name: "LBank",
  description:
    "Global cryptocurrency exchange offering spot and futures trading, early access to emerging tokens, and a range of earn and staking products.",
  icon: LBankIcon,
  socials: {
    website: new URL("https://www.lbank.com"),
    twitter: new URL("https://x.com/LBank_Exchange"),
  },
};

defineProject(LBankProject);

export default LBankProject;
