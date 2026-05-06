import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import AmbireIcon from "./icon.tsx";

const AmbireProject: Project = {
  id: ProjectIds.Ambire,
  name: "Ambire",
  description:
    "A self-custodial Web3 wallet where you can manage tokens, DeFi positions, and NFTs across multiple chains in one place.",
  icon: AmbireIcon,
  socials: {
    website: new URL("https://www.ambire.com/"),
    twitter: new URL("https://x.com/ambire"),
  },
};

defineProject(AmbireProject);

export default AmbireProject;
