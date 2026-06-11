// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import OKXIcon from "./icon.tsx";

const OKXProject: Project = {
  id: ProjectIds.OKX,
  name: "OKX",
  description:
    "Cryptocurrency exchange and Web3 platform for trading, storing, and managing digital assets, with a self-custodial wallet and access to decentralized applications.",
  icon: OKXIcon,
  socials: {
    website: new URL("https://www.okx.com"),
    twitter: new URL("https://x.com/okx"),
  },
};

defineProject(OKXProject);

export default OKXProject;
