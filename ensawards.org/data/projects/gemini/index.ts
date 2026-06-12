// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import GeminiIcon from "./icon.tsx";

const GeminiProject: Project = {
  id: ProjectIds.Gemini,
  name: "Gemini",
  description:
    "Cryptocurrency exchange and custody platform for buying, selling, trading, and storing digital assets, with a predictions market, rewards card, and other financial products.",
  icon: GeminiIcon,
  socials: {
    website: new URL("https://www.gemini.com"),
    twitter: new URL("https://x.com/gemini"),
  },
};

defineProject(GeminiProject);

export default GeminiProject;
