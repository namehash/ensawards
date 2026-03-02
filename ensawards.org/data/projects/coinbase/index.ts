import contributors from "data/contributors/index.ts";

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import CoinbaseIcon from "./icon.tsx";

const CoinbaseProject: Project = {
  id: ProjectIds.Coinbase,
  name: "Coinbase",
  description:
    "Regulated crypto exchange and financial platform for buying, selling, storing, and using digital assets.",
  icon: CoinbaseIcon,
  socials: {
    website: new URL("https://www.coinbase.com/"),
    twitter: new URL("https://x.com/coinbase"),
  },
  contributors: [contributors.y3drk, contributors.lightwalker, contributors.theloner],
};

defineProject(CoinbaseProject);

export default CoinbaseProject;
