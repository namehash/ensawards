import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import WalletChanIcon from "./icon.tsx";

const WalletChanProject: Project = {
  id: ProjectIds.WalletChan,
  name: "WalletChan",
  description:
    "WalletChan is an upcoming, powerful EVM wallet that's ready for the AI era.",
  icon: WalletChanIcon,
  socials: {
    website: new URL("https://walletchan.com/"),
    twitter: new URL("https://x.com/walletchan_"),
  },
};

defineProject(WalletChanProject);

export default WalletChanProject;
