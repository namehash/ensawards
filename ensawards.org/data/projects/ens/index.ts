// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import { type Project, ProjectIds } from "../types.ts";
import EnsIcon from "./icon.tsx";

const ENSProject: Project = {
  id: ProjectIds.Ens,
  name: "ENS",
  description: "The Ethereum Name Service (ENS) is a decentralized domain name system.",
  icon: EnsIcon,
  socials: {
    website: new URL("https://ens.domains"),
    twitter: new URL("https://x.com/ensdomains"),
  },
};

defineProject(ENSProject);

export default ENSProject;
