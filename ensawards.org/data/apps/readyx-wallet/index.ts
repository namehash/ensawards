// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import ReadyProject from "data/projects/ready/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import ReadyIcon from "./icon.tsx";

const ReadyXWallet: App = {
  id: "readyx-wallet",
  appSlug: "readyx-wallet",
  type: AppTypes.Wallet,
  project: ReadyProject,
  name: "Ready X",
  description:
    "Self-custody crypto wallet for swapping tokens and earning DeFi rewards, on both browser and mobile.",
  socials: {
    website: new URL("https://www.ready.co/ready-x"),
    twitter: new URL("https://x.com/ready_co"),
  },
  icon: ReadyIcon,
  // TODO: Add OG images
};

defineApp(ReadyXWallet);

export default ReadyXWallet;
