// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import UniswapProject from "data/projects/uniswap/index.ts";
import { asInterpretedName } from "enssdk";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import UniswapIcon from "./icon.tsx";

const UniswapDeFi: App = {
  id: "uniswap-defi",
  appSlug: "uniswap-defi",
  type: AppTypes.DeFi,
  project: UniswapProject,
  name: "Uniswap",
  description:
    "A decentralized exchange app for swapping tokens and providing liquidity through automated market makers across Ethereum and 12+ other chains.",
  socials: {
    website: new URL("https://app.uniswap.org"),
    twitter: new URL("https://x.com/Uniswap"),
    ens: asInterpretedName("uniswap.eth"),
  },
  icon: UniswapIcon,
  // TODO: Add OG images
};

defineApp(UniswapDeFi);

export default UniswapDeFi;
