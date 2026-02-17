import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

import NounsIcon from "./icon.tsx";

const NounsProject: Project = {
  id: ProjectIds.Nouns,
  name: "Nouns",
  description:
    "Nouns is a community-owned brand that makes a positive impact by funding ideas and fostering collaboration.",
  icon: NounsIcon,
  socials: {
    website: new URL("https://nouns.wtf/"),
    twitter: new URL("https://x.com/nounsdao"),
  },
};

export default NounsProject;
