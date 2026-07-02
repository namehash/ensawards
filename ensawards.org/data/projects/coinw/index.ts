// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import CoinWIcon from "./icon.tsx";

const CoinWProject: Project = {
  id: ProjectIds.CoinW,
  name: "CoinW",
  description:
    "Global cryptocurrency exchange offering spot and futures trading, copy trading, and earn products across a wide selection of digital assets.",
  icon: CoinWIcon,
  socials: {
    website: new URL("https://www.coinw.com"),
    twitter: new URL("https://x.com/CoinWOfficial"),
  },
};

defineProject(CoinWProject);

export default CoinWProject;
