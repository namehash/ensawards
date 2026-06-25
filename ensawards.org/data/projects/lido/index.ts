// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import LidoIcon from "./icon.tsx";

const LidoProject: Project = {
  id: ProjectIds.Lido,
  name: "Lido",
  description:
    "A family of open-source software on Ethereum that lets users mint transferable utility tokens which earn rewards linked to validation activity while remaining usable across other onchain apps.",
  icon: LidoIcon,
  socials: {
    website: new URL("https://lido.fi/"),
    twitter: new URL("https://x.com/lidofinance"),
  },
};

defineProject(LidoProject);

export default LidoProject;
