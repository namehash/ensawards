// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import TokenPocketIcon from "./icon.tsx";

const TokenPocketProject: Project = {
  id: ProjectIds.TokenPocket,
  name: "TokenPocket",
  description:
    "Self-custodial multichain wallet for storing, sending, and swapping digital assets and interacting with decentralized applications across Ethereum, Bitcoin, Solana, and other chains.",
  icon: TokenPocketIcon,
  socials: {
    website: new URL("https://www.tokenpocket.pro"),
    twitter: new URL("https://x.com/TokenPocket_TP"),
  },
};

defineProject(TokenPocketProject);

export default TokenPocketProject;
