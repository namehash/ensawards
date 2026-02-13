import { RainbowIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/RainbowIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

export const RainbowProject: Project = {
  id: ProjectIds.Rainbow,
  name: "Rainbow",
  description:
    "Rainbow is a fun, simple, and secure way to get started with crypto and explore Ethereum.",
  icon: RainbowIcon,
  socials: {
    website: new URL("https://rainbow.me/"),
    twitter: new URL("https://x.com/rainbowdotme"),
  },
};
