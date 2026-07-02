// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import OurbitProject from "data/projects/ourbit";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import OurbitIcon from "./icon.tsx";

const OurbitExchange: App = {
  id: "ourbit-exchange",
  appSlug: "ourbit-exchange",
  type: AppTypes.Exchange,
  project: OurbitProject,
  name: "Ourbit",
  description:
    "Cryptocurrency exchange offering spot and futures trading, copy trading, and earn products for growing a broad range of digital assets.",
  socials: {
    website: new URL("https://www.ourbit.com"),
    twitter: new URL("https://x.com/ourbit"),
  },
  icon: OurbitIcon,
  // TODO: Add OG images
};

defineApp(OurbitExchange);

export default OurbitExchange;
