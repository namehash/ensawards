// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import RobinhoodProject from "data/projects/robinhood";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import RobinhoodIcon from "./icon.tsx";

const RobinhoodExchange: App = {
  id: "robinhood-exchange",
  appSlug: "robinhood-exchange",
  type: AppTypes.Exchange,
  project: RobinhoodProject,
  name: "Robinhood",
  description:
    "Exchange for buying, selling, and trading cryptocurrencies alongside stocks, ETFs, and options.",
  socials: {
    website: new URL("https://robinhood.com"),
    twitter: new URL("https://x.com/robinhoodapp"),
  },
  icon: RobinhoodIcon,
  // TODO: Add OG images
};

defineApp(RobinhoodExchange);

export default RobinhoodExchange;
