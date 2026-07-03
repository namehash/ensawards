// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import ImTokenIcon from "./icon.tsx";

const ImTokenProject: Project = {
  id: ProjectIds.ImToken,
  name: "imToken",
  description:
    "Self-custodial multichain wallet for storing, sending, and swapping digital assets and interacting with decentralized applications across Ethereum, Bitcoin, and other chains.",
  icon: ImTokenIcon,
  socials: {
    website: new URL("https://token.im"),
    twitter: new URL("https://twitter.com/imTokenOfficial"),
  },
};

defineProject(ImTokenProject);

export default ImTokenProject;
