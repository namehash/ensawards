// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import RobinhoodProject from "data/projects/robinhood";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import RobinhoodIcon from "./icon.tsx";

const RobinhoodWallet: App = {
  id: "robinhood-wallet",
  appSlug: "robinhood-wallet",
  type: AppTypes.Wallet,
  project: RobinhoodProject,
  name: "Robinhood Wallet",
  description:
    "Self-custodial multi-chain wallet for storing, swapping, and staking digital assets and connecting to decentralized applications.",
  socials: {
    website: new URL("https://robinhood.com/eu/en/wallet/"),
    twitter: new URL("https://x.com/RobinhoodApp"),
  },
  icon: RobinhoodIcon,
  // TODO: Add OG images
};

defineApp(RobinhoodWallet);

export default RobinhoodWallet;
