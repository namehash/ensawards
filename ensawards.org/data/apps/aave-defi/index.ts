// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import AaveProject from "data/projects/aave/index.ts";
import { asInterpretedName } from "enssdk";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import AaveIcon from "./icon.tsx";

const AaveDeFi: App = {
  id: "aave-defi",
  appSlug: "aave-defi",
  type: AppTypes.DeFi,
  project: AaveProject,
  name: "Aave",
  description:
    "A decentralized lending app where users can supply assets to earn yield and borrow against their collateral across Ethereum and multiple L2 networks.",
  socials: {
    website: new URL("https://aave.com"),
    twitter: new URL("https://x.com/aave"),
    ens: asInterpretedName("aave.eth"),
  },
  icon: AaveIcon,
  ogImagePath: "aave-defi/og.png",
  twitterOgImagePath: "aave-defi/twitter-og.png",
};

defineApp(AaveDeFi);

export default AaveDeFi;
