import contributors from "data/contributors/index.ts";

import { defineProject } from "../registry.ts";
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
  contributors: [contributors.y3drk, contributors.lightwalker, contributors.theloner],
};

defineProject(LiquityProject);

export default LiquityProject;
