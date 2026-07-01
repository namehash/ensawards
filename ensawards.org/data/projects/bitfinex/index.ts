// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import BitfinexIcon from "./icon.tsx";

const BitfinexProject: Project = {
  id: ProjectIds.Bitfinex,
  name: "Bitfinex",
  description:
    "Established cryptocurrency exchange built for professional and high-volume traders, with advanced order types, deep liquidity, margin trading, and peer-to-peer funding.",
  icon: BitfinexIcon,
  socials: {
    website: new URL("https://www.bitfinex.com"),
    twitter: new URL("https://x.com/bitfinex"),
  },
};

defineProject(BitfinexProject);

export default BitfinexProject;
