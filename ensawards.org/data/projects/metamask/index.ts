import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

import AaveProject from "../aave";
import MetaMaskIcon from "./icon.tsx";

const MetaMaskProject: Project = {
  id: ProjectIds.MetaMask,
  name: "MetaMask",
  description: "MetaMask is a widely used, self-custodial cryptocurrency wallet.",
  icon: MetaMaskIcon,
  socials: {
    website: new URL("https://metamask.io/"),
    twitter: new URL("https://x.com/MetaMask"),
  },
};

export default MetaMaskProject;
