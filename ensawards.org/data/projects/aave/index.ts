import { AaveProjectIcon } from "@/components/atoms/icons/ens-integrating-entities/projects/AaveProjectIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

export const AaveProject: Project = {
  id: ProjectIds.Aave,
  name: "Aave",
  description:
    "The largest lending network where you can earn, borrow, save, and swap with millions of users.",
  icon: AaveProjectIcon,
  socials: {
    website: new URL("https://aave.com/"),
    twitter: new URL("https://x.com/aave"),
  },
};
