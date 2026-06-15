// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import BinanceIcon from "./icon.tsx";

const BinanceProject: Project = {
  id: ProjectIds.Binance,
  name: "Binance",
  description:
    "Global cryptocurrency exchange for trading, buying, and storing digital assets, with a broad suite of Web3 and financial products.",
  icon: BinanceIcon,
  socials: {
    website: new URL("https://www.binance.com"),
    twitter: new URL("https://x.com/binance"),
  },
};

defineProject(BinanceProject);

export default BinanceProject;
