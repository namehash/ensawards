// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import ToobitIcon from "./icon.tsx";

const ToobitProject: Project = {
  id: ProjectIds.Toobit,
  name: "Toobit",
  description:
    "Cryptocurrency exchange for spot and futures trading, buying, and managing digital assets, with copy trading and a range of earn products.",
  icon: ToobitIcon,
  socials: {
    website: new URL("https://www.toobit.com"),
    twitter: new URL("https://x.com/Toobit_official"),
  },
};

defineProject(ToobitProject);

export default ToobitProject;
