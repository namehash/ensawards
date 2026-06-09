// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import TrustIcon from "./icon.tsx";

const TrustProject: Project = {
  id: ProjectIds.Trust,
  name: "Trust",
  description:
    "Trust Wallet is a self-custody, multi-chain crypto wallet supporting millions of assets across 100+ blockchains, with built-in swaps, NFT management, and a Web3 dApp browser.",
  icon: TrustIcon,
  socials: {
    website: new URL("https://trustwallet.com/"),
    twitter: new URL("https://x.com/trustwallet"),
  },
};

defineProject(TrustProject);

export default TrustProject;
