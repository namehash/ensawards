// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import KrakenProject from "data/projects/kraken";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import KrakenIcon from "./icon.tsx";

const KrakenWallet: App = {
  id: "kraken-wallet",
  appSlug: "kraken-wallet",
  type: AppTypes.Wallet,
  project: KrakenProject,
  name: "Kraken Wallet",
  description:
    "Kraken's self-custodial mobile wallet for holding digital assets, swapping tokens, and connecting to decentralized applications across multiple chains.",
  socials: {
    website: new URL("https://www.kraken.com/wallet"),
    twitter: new URL("https://x.com/krakenfx"),
  },
  icon: KrakenIcon,
  // TODO: Add OG images
};

defineApp(KrakenWallet);

export default KrakenWallet;
