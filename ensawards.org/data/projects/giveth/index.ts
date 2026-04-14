import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import GivethIcon from "./icon.tsx";

const GivethProject: Project = {
  id: ProjectIds.Giveth,
  name: "Giveth",
  description:
    "Crypto donation and public-goods funding platform that enables zero-fee giving and community-driven impact projects.",
  icon: GivethIcon,
  socials: {
    twitter: new URL("https://x.com/giveth"),
    website: new URL("https://giveth.io"),
  },
};

defineProject(GivethProject);

export default GivethProject;
