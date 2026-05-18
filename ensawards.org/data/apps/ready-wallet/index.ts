import ReadyProject from "data/projects/ready/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import ReadyIcon from "./icon.tsx";

const ReadyWallet: App = {
  id: "ready-wallet",
  appSlug: "ready-wallet",
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

defineApp(ReadyWallet);

export default ReadyWallet;
