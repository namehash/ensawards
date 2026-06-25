// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import RobinhoodIcon from "./icon.tsx";

const RobinhoodProject: Project = {
  id: ProjectIds.Robinhood,
  name: "Robinhood",
  description:
    "Investment platform and app for trading stocks, ETFs, options, and cryptocurrencies, with retirement and other financial products.",
  icon: RobinhoodIcon,
  socials: {
    website: new URL("https://robinhood.com"),
    twitter: new URL("https://x.com/robinhoodapp"),
  },
};

defineProject(RobinhoodProject);

export default RobinhoodProject;
