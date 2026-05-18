// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import ReadyIcon from "./icon.tsx";

const ReadyProject: Project = {
  id: ProjectIds.Ready,
  name: "Ready",
  description:
    "Ready is an onchain alternative to traditional banking, combining a self-custody wallet, debit card, and crypto yield in one app.",
  icon: ReadyIcon,
  socials: {
    website: new URL("https://www.ready.co/"),
    twitter: new URL("https://x.com/ready_co"),
  },
};

defineProject(ReadyProject);

export default ReadyProject;
