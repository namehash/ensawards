import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import KlerosIcon from "./icon.tsx";

const KlerosProject: Project = {
  id: ProjectIds.Kleros,
  name: "Kleros",
  description:
    "Decentralized arbitration protocol that uses crowdsourced jurors and game theory to resolve disputes for onchain applications.",
  icon: KlerosIcon,
  socials: {
    website: new URL("https://kleros.io"),
    twitter: new URL("https://x.com/Kleros_io"),
  },
};

defineProject(KlerosProject);

export default KlerosProject;
