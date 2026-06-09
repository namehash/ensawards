// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import PhantomIcon from "./icon.tsx";

const PhantomProject: Project = {
  id: ProjectIds.Phantom,
  name: "Phantom",
  description:
    "A self-custody money app and multichain wallet for trading crypto, prediction markets, and perps, plus sending payments and spending with a prepaid card.",
  icon: PhantomIcon,
  socials: {
    website: new URL("https://phantom.com/"),
    twitter: new URL("https://x.com/phantom"),
  },
};

defineProject(PhantomProject);

export default PhantomProject;
