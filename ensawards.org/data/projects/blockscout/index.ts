import { BlockscoutIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/BlockscoutIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

export const BlockscoutProject: Project = {
  id: ProjectIds.Blockscout,
  name: "Blockscout",
  description: "Blockscout is a tool for inspecting and analyzing EVM-based blockchains.",
  icon: BlockscoutIcon,
  socials: {
    website: new URL("https://www.blockscout.com/"),
    twitter: new URL("https://x.com/blockscout"),
  },
};
