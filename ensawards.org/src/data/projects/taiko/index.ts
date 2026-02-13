import { TaikoIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/TaikoIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

export const TaikoProject: Project = {
  id: ProjectIds.Taiko,
  name: "Taiko",
  description:
    "Taiko is a fully permissionless, Ethereum-equivalent based rollup. Inspired, secured, and sequenced by Ethereum.",
  icon: TaikoIcon,
  socials: {
    website: new URL("https://taiko.xyz/"),
    twitter: new URL("https://x.com/taikoxyz"),
  },
};
