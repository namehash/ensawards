// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import OKXProject from "data/projects/okx";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import OKXIcon from "./icon.tsx";

const OKXExchange: App = {
  id: "okx-exchange",
  appSlug: "okx-exchange",
  type: AppTypes.Exchange,
  project: OKXProject,
  name: "OKX",
  description:
    "Cryptocurrency exchange for trading, buying, and selling a wide range of digital assets across spot and derivatives markets.",
  socials: {
    website: new URL("https://www.okx.com"),
    twitter: new URL("https://x.com/okx"),
  },
  icon: OKXIcon,
  // TODO: Add OG images
};

defineApp(OKXExchange);

export default OKXExchange;
