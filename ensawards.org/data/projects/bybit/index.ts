// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import BybitIcon from "./icon.tsx";

const BybitProject: Project = {
  id: ProjectIds.Bybit,
  name: "Bybit",
  description:
    "Cryptocurrency exchange for spot and derivatives trading, buying, selling, and managing digital assets.",
  icon: BybitIcon,
  socials: {
    website: new URL("https://www.bybit.com"),
    twitter: new URL("https://x.com/Bybit_Official"),
  },
};

defineProject(BybitProject);

export default BybitProject;
