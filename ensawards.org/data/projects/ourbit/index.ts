// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import OurbitIcon from "./icon.tsx";

const OurbitProject: Project = {
  id: ProjectIds.Ourbit,
  name: "Ourbit",
  description:
    "Cryptocurrency exchange offering spot and futures trading, copy trading, and earn products across a broad selection of digital assets.",
  icon: OurbitIcon,
  socials: {
    website: new URL("https://www.ourbit.com"),
    twitter: new URL("https://x.com/ourbit"),
  },
};

defineProject(OurbitProject);

export default OurbitProject;
