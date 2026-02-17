import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

import AaveIcon from "./icon.tsx";

const AaveProject: Project = {
  id: ProjectIds.Aave,
  name: "Aave",
  description:
    "The largest lending network where you can earn, borrow, save, and swap with millions of users.",
  icon: AaveIcon,
  socials: {
    website: new URL("https://aave.com/"),
    twitter: new URL("https://x.com/aave"),
  },
};

export default AaveProject;
