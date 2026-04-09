import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import SSVNetworkIcon from "./icon.tsx";

const SSVNetworkProject: Project = {
  id: ProjectIds.SSVNetwork,
  name: "SSV Network",
  description:
    "SSV is the largest DVT staking protocol on Ethereum — securing and decentralizing the network",
  icon: SSVNetworkIcon,
  socials: {
    website: new URL("https://ssv.network/"),
    twitter: new URL("https://x.com/ssv_network"),
  },
};

defineProject(SSVNetworkProject);

export default SSVNetworkProject;
