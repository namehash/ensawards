// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import LidoProject from "data/projects/lido/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import LidoIcon from "./icon.tsx";

const LidoDeFi: App = {
  id: "lido-defi",
  appSlug: "lido-defi",
  type: AppTypes.DeFi,
  project: LidoProject,
  name: "Lido",
  description:
    "A DeFi app that lets users mint transferable utility tokens which earn rewards from Ethereum validation activity and remain usable as collateral, liquidity, or yield-bearing capital across other onchain protocols.",
  socials: {
    website: new URL("https://lido.fi/"),
    twitter: new URL("https://x.com/lidofinance"),
  },
  icon: LidoIcon,
  // TODO: Add OG images
};

defineApp(LidoDeFi);

export default LidoDeFi;
