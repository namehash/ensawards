import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import NounsIcon from "./icon.tsx";

const NounsProject: Project = {
  id: ProjectIds.Nouns,
  name: "Nouns",
  description:
    "Nouns is a community-owned brand that makes a positive impact by funding ideas and fostering collaboration.",
  icon: NounsIcon,
  socials: {
    website: new URL("https://nouns.wtf"),
    twitter: new URL("https://x.com/nounsdao"),
  },
};

defineProject(NounsProject);

export default NounsProject;
