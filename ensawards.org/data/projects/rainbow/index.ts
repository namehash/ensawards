import contributors from "data/contributors/index.ts";

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import RainbowIcon from "./icon.tsx";

const RainbowProject: Project = {
  id: ProjectIds.Rainbow,
  name: "Rainbow",
  description:
    "Rainbow is a fun, simple, and secure way to get started with crypto and explore Ethereum.",
  icon: RainbowIcon,
  socials: {
    website: new URL("https://rainbow.me/"),
    twitter: new URL("https://x.com/rainbowdotme"),
  },
  contributors: [contributors.y3drk, contributors.lightwalker, contributors.theloner],
};

defineProject(RainbowProject);

export default RainbowProject;
