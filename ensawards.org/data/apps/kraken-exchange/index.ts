// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import KrakenProject from "data/projects/kraken";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import KrakenIcon from "./icon.tsx";

const KrakenExchange: App = {
  id: "kraken-exchange",
  appSlug: "kraken-exchange",
  type: AppTypes.Exchange,
  project: KrakenProject,
  name: "Kraken",
  description:
    "Cryptocurrency exchange for buying, selling, and trading a wide range of digital assets.",
  socials: {
    website: new URL("https://www.kraken.com"),
    twitter: new URL("https://x.com/krakenfx"),
  },
  icon: KrakenIcon,
  // TODO: Add OG images
};

defineApp(KrakenExchange);

export default KrakenExchange;
