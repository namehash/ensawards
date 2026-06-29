// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import PendleProject from "data/projects/pendle/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import PendleIcon from "./icon.tsx";

const PendleDeFi: App = {
  id: "pendle-defi",
  appSlug: "pendle-defi",
  type: AppTypes.DeFi,
  project: PendleProject,
  name: "Pendle",
  description:
    "A crypto yield trading app spanning two products: Boros, for margin trading yield with leverage, and Pendle V2, for trading spot yield and earning fixed yield.",
  socials: {
    website: new URL("https://www.pendle.finance/"),
    twitter: new URL("https://x.com/pendle_fi"),
  },
  icon: PendleIcon,
  ogImagePath: "pendle-defi/og.png",
  twitterOgImagePath: "pendle-defi/twitter-og.png",
};

defineApp(PendleDeFi);

export default PendleDeFi;
