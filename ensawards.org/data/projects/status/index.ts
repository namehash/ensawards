// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import StatusIcon from "./icon.tsx";

const StatusProject: Project = {
  id: ProjectIds.Status,
  name: "Status",
  description:
    "Status is an open-source, decentralized super app combining a private messenger, self-custody Web3 wallet, and dApp browser on Ethereum.",
  icon: StatusIcon,
  socials: {
    website: new URL("https://status.app/"),
    twitter: new URL("https://x.com/ethstatus"),
  },
};

defineProject(StatusProject);

export default StatusProject;
