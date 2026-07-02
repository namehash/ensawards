// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import XTcomProject from "data/projects/xtcom";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import XTcomIcon from "./icon.tsx";

const XTcomExchange: App = {
  id: "xtcom-exchange",
  appSlug: "xtcom-exchange",
  type: AppTypes.Exchange,
  project: XTcomProject,
  name: "XT.COM",
  description:
    "Cryptocurrency exchange offering spot and futures trading across a broad token catalog, with copy trading and earn products for growing digital asset holdings.",
  socials: {
    website: new URL("https://www.xt.com"),
    twitter: new URL("https://x.com/XTexchange"),
  },
  icon: XTcomIcon,
  // TODO: Add OG images
};

defineApp(XTcomExchange);

export default XTcomExchange;
