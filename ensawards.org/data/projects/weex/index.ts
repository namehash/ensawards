// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import WEEXIcon from "./icon.tsx";

const WEEXProject: Project = {
  id: ProjectIds.WEEX,
  name: "WEEX",
  description:
    "Global cryptocurrency exchange focused on futures and spot trading, with copy trading and a range of earn products for digital assets.",
  icon: WEEXIcon,
  socials: {
    website: new URL("https://www.weex.com"),
    twitter: new URL("https://x.com/WEEX_Official"),
  },
};

defineProject(WEEXProject);

export default WEEXProject;
