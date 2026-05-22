// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import OneInchProject from "data/projects/1inch/index.ts";
import { asInterpretedName } from "enssdk";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import OneInchIcon from "./icon.tsx";

const OneInchDeFiApp: App = {
  id: "1inch-defi-app",
  appSlug: "1inch-defi-app",
  type: AppTypes.DeFi,
  project: OneInchProject,
  name: '1inch"',
  description:
    "A DeFi aggregator app for swapping tokens across 13+ chains with the only native connection between Solana and EVM networks, with true self-custody and built-in security.",
  socials: {
    website: new URL("https://1inch.com/swap"),
    twitter: new URL("https://x.com/1inch"),
    ens: asInterpretedName("1inch.eth"),
  },
  icon: OneInchIcon, // TODO: The icon is not perfect for dark bgs. Same case as with Ledger. Brainstorm fix ideas (but no hacky ifs in the code)
  // TODO: Add OG images
};

defineApp(OneInchDeFiApp);

export default OneInchDeFiApp;
