// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import SafeIcon from "./icon.tsx";

const SafeProject: Project = {
  id: ProjectIds.Safe,
  name: "Safe",
  description:
    "Safe is modular smart account infrastructure securing onchain assets for individuals, DAOs, and organizations.",
  icon: SafeIcon,
  socials: {
    website: new URL("https://safe.global/"),
    twitter: new URL("https://x.com/SafeLabs_"),
  },
};

defineProject(SafeProject);

export default SafeProject;
