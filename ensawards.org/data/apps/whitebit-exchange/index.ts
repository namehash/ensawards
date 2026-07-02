// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import WhiteBITProject from "data/projects/whitebit";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import WhiteBITIcon from "./icon.tsx";

const WhiteBITExchange: App = {
  id: "whitebit-exchange",
  appSlug: "whitebit-exchange",
  type: AppTypes.Exchange,
  project: WhiteBITProject,
  name: "WhiteBIT",
  description:
    "Cryptocurrency exchange for spot and futures trading, with staking and earn products for putting a broad range of digital assets to work.",
  socials: {
    website: new URL("https://whitebit.com"),
    twitter: new URL("https://x.com/WhiteBit"),
  },
  icon: WhiteBITIcon,
  // TODO: Add OG images
};

defineApp(WhiteBITExchange);

export default WhiteBITExchange;
