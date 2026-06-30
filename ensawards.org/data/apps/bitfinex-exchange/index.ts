// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import BitfinexProject from "data/projects/bitfinex";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BitfinexIcon from "./icon.tsx";

const BitfinexExchange: App = {
  id: "bitfinex-exchange",
  appSlug: "bitfinex-exchange",
  type: AppTypes.Exchange,
  project: BitfinexProject,
  name: "Bitfinex",
  description:
    "Cryptocurrency exchange for advanced traders, offering spot, margin, and derivatives trading alongside a peer-to-peer funding market.",
  socials: {
    website: new URL("https://www.bitfinex.com"),
    twitter: new URL("https://x.com/bitfinex"),
  },
  icon: BitfinexIcon,
  // TODO: Add OG images
};

defineApp(BitfinexExchange);

export default BitfinexExchange;
