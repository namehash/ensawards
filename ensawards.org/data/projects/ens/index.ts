import { type Project, ProjectIds } from "@/types/projects.ts";

import AaveProject from "../aave";
import EnsIcon from "./icon.tsx";

const ENSProject: Project = {
  id: ProjectIds.Ens,
  name: "ENS",
  description: "The Ethereum Name Service (ENS) is a decentralized domain name system.",
  icon: EnsIcon,
  socials: {
    website: new URL("https://ens.domains/"),
    twitter: new URL("https://x.com/ensdomains"),
  },
};

export default ENSProject;
