import contributors from "data/contributors/index.ts";

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import AaveIcon from "./icon.tsx";

const AaveProject: Project = {
  id: ProjectIds.Aave,
  name: "Aave",
  description:
    "The largest lending network where you can earn, borrow, save, and swap with millions of users.",
  icon: AaveIcon,
  socials: {
    website: new URL("https://aave.com/"),
    twitter: new URL("https://x.com/aave"),
  },
  contributors: [contributors.y3drk, contributors.lightwalker, contributors.theloner],
};

defineProject(AaveProject);

export default AaveProject;
