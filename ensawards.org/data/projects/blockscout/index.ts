import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import BlockscoutIcon from "./icon.tsx";

const BlockscoutProject: Project = {
  id: ProjectIds.Blockscout,
  name: "Blockscout",
  description: "Blockscout is a tool for inspecting and analyzing EVM-based blockchains.",
  icon: BlockscoutIcon,
  socials: {
    website: new URL("https://www.blockscout.com"),
    twitter: new URL("https://x.com/blockscout"),
  },
};

defineProject(BlockscoutProject);

export default BlockscoutProject;
