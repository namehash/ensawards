// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import WEEXProject from "data/projects/weex";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import WEEXIcon from "./icon.tsx";

const WEEXExchange: App = {
  id: "weex-exchange",
  appSlug: "weex-exchange",
  type: AppTypes.Exchange,
  project: WEEXProject,
  name: "WEEX",
  description:
    "Cryptocurrency exchange centered on perpetual futures and spot trading, with copy trading and earn products for growing digital asset holdings.",
  socials: {
    website: new URL("https://www.weex.com"),
    twitter: new URL("https://x.com/WEEX_Official"),
  },
  icon: WEEXIcon,
  // TODO: Add OG images
};

defineApp(WEEXExchange);

export default WEEXExchange;
