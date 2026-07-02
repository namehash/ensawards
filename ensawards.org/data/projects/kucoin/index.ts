// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import KuCoinIcon from "./icon.tsx";

const KuCoinProject: Project = {
  id: ProjectIds.KuCoin,
  name: "KuCoin",
  description:
    "Trusted cryptocurrency exchange for buying, selling, and trading Bitcoin, Ethereum, and 1,000+ altcoins, with secure access to the Web3 economy.",
  icon: KuCoinIcon,
  socials: {
    website: new URL("https://www.kucoin.com"),
    twitter: new URL("https://x.com/KuCoinCom"),
  },
};

defineProject(KuCoinProject);

export default KuCoinProject;
