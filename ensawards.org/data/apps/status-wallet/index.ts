// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import StatusProject from "data/projects/status/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import StatusIcon from "./icon.tsx";

const StatusWallet: App = {
  id: "status-wallet",
  appSlug: "status-wallet",
  type: AppTypes.Wallet,
  project: StatusProject,
  name: "Status",
  description:
    "A self-custody multichain wallet built into Status's private messenger and Web3 browser, supporting Ethereum and EVM chains.",
  socials: {
    website: new URL("https://status.app/"),
    twitter: new URL("https://x.com/ethstatus"),
  },
  icon: StatusIcon,
  ogImagePath: "status-wallet/og.png",
  twitterOgImagePath: "status-wallet/twitter-og.png",
};

defineApp(StatusWallet);

export default StatusWallet;
