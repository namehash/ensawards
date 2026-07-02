// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import MEXCProject from "data/projects/mexc";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import MEXCIcon from "./icon.tsx";

const MEXCExchange: App = {
  id: "mexc-exchange",
  appSlug: "mexc-exchange",
  type: AppTypes.Exchange,
  project: MEXCProject,
  name: "MEXC",
  description:
    "Cryptocurrency exchange offering spot, margin, and futures trading with an extensive catalog of newly listed tokens and copy trading.",
  socials: {
    website: new URL("https://www.mexc.com"),
    twitter: new URL("https://x.com/MEXC"),
  },
  icon: MEXCIcon,
  // TODO: Add OG images
};

defineApp(MEXCExchange);

export default MEXCExchange;
