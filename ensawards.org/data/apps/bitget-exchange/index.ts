// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import BitgetProject from "data/projects/bitget";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BitgetIcon from "./icon.tsx";

const BitgetExchange: App = {
  id: "bitget-exchange",
  appSlug: "bitget-exchange",
  type: AppTypes.Exchange,
  project: BitgetProject,
  name: "Bitget",
  description:
    "Cryptocurrency exchange for spot, futures, and copy trading, buying, selling, and managing digital assets.",
  socials: {
    website: new URL("https://www.bitget.com"),
    twitter: new URL("https://x.com/bitget"),
  },
  icon: BitgetIcon,
  // TODO: Add OG images
};

defineApp(BitgetExchange);

export default BitgetExchange;
