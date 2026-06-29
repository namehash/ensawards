// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import BingXProject from "data/projects/bingx";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BingXIcon from "./icon.tsx";

const BingXExchange: App = {
  id: "bingx-exchange",
  appSlug: "bingx-exchange",
  type: AppTypes.Exchange,
  project: BingXProject,
  name: "BingX",
  description:
    "Cryptocurrency exchange for spot, futures, and copy trading, buying, selling, and managing digital assets.",
  socials: {
    website: new URL("https://bingx.com"),
    twitter: new URL("https://x.com/BingXOfficial"),
  },
  icon: BingXIcon,
  // TODO: Add OG images
};

defineApp(BingXExchange);

export default BingXExchange;
