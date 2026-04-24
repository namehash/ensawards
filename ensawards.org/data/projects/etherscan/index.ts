import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import EtherscanIcon from "./icon.tsx";

const EtherscanProject: Project = {
  id: ProjectIds.Etherscan,
  name: "Etherscan",
  description: "Etherscan is a Block Explorer and Analytics Platform for Ethereum.",
  icon: EtherscanIcon,
  socials: {
    website: new URL("https://etherscan.io"),
    twitter: new URL("https://x.com/etherscan"),
  },
};

defineProject(EtherscanProject);

export default EtherscanProject;
