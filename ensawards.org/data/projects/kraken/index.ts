// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import KrakenIcon from "./icon.tsx";

const KrakenProject: Project = {
  id: ProjectIds.Kraken,
  name: "Kraken",
  description:
    "Cryptocurrency exchange and financial platform for buying, selling, trading, and storing digital assets.",
  icon: KrakenIcon,
  socials: {
    website: new URL("https://www.kraken.com"),
    twitter: new URL("https://x.com/krakenfx"),
  },
};

defineProject(KrakenProject);

export default KrakenProject;
