import { EtherscanIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/EtherscanIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

export const EtherscanProject: Project = {
  id: ProjectIds.Etherscan,
  name: "Etherscan",
  description: "Etherscan is a Block Explorer and Analytics Platform for Ethereum.",
  icon: EtherscanIcon,
  socials: {
    website: new URL("https://etherscan.io/"),
    twitter: new URL("https://x.com/etherscan"),
  },
};
