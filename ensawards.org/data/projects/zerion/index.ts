import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import ZerionIcon from "./icon.tsx";

const ZerionProject: Project = {
  id: ProjectIds.Zerion,
  name: "Zerion",
  description:
    "Zerion is an all-in-one Web3 platform combining a self-custody wallet, portfolio tracker, and APIs powering some of the most popular apps in crypto.",
  icon: ZerionIcon,
  socials: {
    website: new URL("https://zerion.io/"),
    twitter: new URL("https://x.com/zerion"),
  },
};

defineProject(ZerionProject);

export default ZerionProject;
