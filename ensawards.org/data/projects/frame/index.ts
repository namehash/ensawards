// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import FrameIcon from "./icon.tsx";

const FrameProject: Project = {
  id: ProjectIds.Frame,
  name: "Frame",
  description:
    "A web3 platform that creates a secure, system-wide desktop interface to your chains and accounts, with hardware wallet support and dApp connectivity.",
  icon: FrameIcon,
  socials: {
    website: new URL("https://frame.sh"),
    twitter: new URL("https://x.com/0xFrame"),
  },
};

defineProject(FrameProject);

export default FrameProject;
