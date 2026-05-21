// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import LedgerIcon from "./icon.tsx";

const LedgerProject: Project = {
  id: ProjectIds.Ledger,
  name: "Ledger",
  description:
    "Ledger is a self-custody platform built around hardware wallets that secure digital assets offline, paired with a companion app for managing crypto and Web3.",
  icon: LedgerIcon,
  socials: {
    website: new URL("https://ledger.com"),
    twitter: new URL("https://x.com/Ledger"),
  },
};

defineProject(LedgerProject);

export default LedgerProject;
