// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import PolymarketIcon from "./icon.tsx";

const PolymarketProject: Project = {
  id: ProjectIds.Polymarket,
  name: "Polymarket",
  description:
    "The world's largest prediction market, where users trade on the outcomes of real-world events across politics, news, culture, sports, and tech using cryptocurrency.",
  icon: PolymarketIcon,
  socials: {
    website: new URL("https://polymarket.com/"),
    twitter: new URL("https://x.com/Polymarket"),
  },
};

defineProject(PolymarketProject);

export default PolymarketProject;
