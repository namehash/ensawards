// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import GateProject from "data/projects/gate";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import GateIcon from "./icon.tsx";

const GateExchange: App = {
  id: "gate-exchange",
  appSlug: "gate-exchange",
  type: AppTypes.Exchange,
  project: GateProject,
  name: "Gate",
  description:
    "Cryptocurrency exchange with one of the widest token listings, supporting spot, margin, perpetual futures, and copy trading.",
  socials: {
    website: new URL("https://www.gate.com"),
    twitter: new URL("https://x.com/Gate"),
  },
  icon: GateIcon,
  // TODO: Add OG images
};

defineApp(GateExchange);

export default GateExchange;
