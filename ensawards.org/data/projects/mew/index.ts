// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import MEWIcon from "./icon.tsx";

const MEWProject: Project = {
  id: ProjectIds.MEW,
  name: "MEW",
  description:
    "MyEtherWallet: a self-custodial interface for creating and managing Ethereum wallets, sending tokens, and interacting with decentralized applications.",
  icon: MEWIcon,
  socials: {
    website: new URL("https://www.myetherwallet.com"),
    twitter: new URL("https://x.com/myetherwallet"),
  },
};

defineProject(MEWProject);

export default MEWProject;
