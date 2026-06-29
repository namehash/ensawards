// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import ExodusIcon from "./icon.tsx";

const ExodusProject: Project = {
  id: ProjectIds.Exodus,
  name: "Exodus",
  description:
    "A self-custodial crypto wallet for desktop, mobile, and web3 to send, manage, swap, and stake digital assets, with hardware wallet support and a debit card for spending worldwide.",
  icon: ExodusIcon,
  socials: {
    website: new URL("https://www.exodus.com/"),
    twitter: new URL("https://x.com/exodus"),
  },
};

defineProject(ExodusProject);

export default ExodusProject;
