// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import HTXProject from "data/projects/htx";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import HTXIcon from "./icon.tsx";

const HTXExchange: App = {
  id: "htx-exchange",
  appSlug: "htx-exchange",
  type: AppTypes.Exchange,
  project: HTXProject,
  name: "HTX",
  description:
    "Cryptocurrency exchange for spot and futures trading, buying, selling, and managing digital assets.",
  socials: {
    website: new URL("https://www.htx.com"),
    twitter: new URL("https://twitter.com/HTX_Global"),
  },
  icon: HTXIcon,
  // TODO: Add OG images
};

defineApp(HTXExchange);

export default HTXExchange;
