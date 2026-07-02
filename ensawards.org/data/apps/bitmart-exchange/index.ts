// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import BitMartProject from "data/projects/bitmart";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BitMartIcon from "./icon.tsx";

const BitMartExchange: App = {
  id: "bitmart-exchange",
  appSlug: "bitmart-exchange",
  type: AppTypes.Exchange,
  project: BitMartProject,
  name: "BitMart",
  description:
    "Cryptocurrency exchange for spot and futures trading across a broad token catalog, with savings and staking options for earning on idle assets.",
  socials: {
    website: new URL("https://www.bitmart.com"),
    twitter: new URL("https://x.com/BitMartExchange"),
  },
  icon: BitMartIcon,
  // TODO: Add OG images
};

defineApp(BitMartExchange);

export default BitMartExchange;
