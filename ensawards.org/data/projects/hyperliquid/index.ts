// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import HyperliquidIcon from "./icon.tsx";

const HyperliquidProject: Project = {
  id: ProjectIds.Hyperliquid,
  name: "Hyperliquid",
  description:
    "A decentralized perpetual futures and spot exchange built on its own high-performance layer-1 blockchain, offering onchain trading with deep liquidity and a fully onchain order book.",
  icon: HyperliquidIcon,
  socials: {
    website: new URL("https://app.hyperliquid.xyz/"),
    twitter: new URL("https://x.com/HyperliquidX"),
  },
};

defineProject(HyperliquidProject);

export default HyperliquidProject;
