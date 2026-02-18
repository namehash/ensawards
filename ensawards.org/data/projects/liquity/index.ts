import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import LiquityIcon from "./icon.tsx";

const LiquityProject: Project = {
  id: ProjectIds.Liquity,
  name: "Liquity",
  description: "DeFi protocol for borrowing against ETH & staked ETH.",
  icon: LiquityIcon,
  socials: {
    twitter: new URL("https://x.com/LiquityProtocol"),
    website: new URL("https://www.liquity.org/"),
  },
};

export default LiquityProject;
