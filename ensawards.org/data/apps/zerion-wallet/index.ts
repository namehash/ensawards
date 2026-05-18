import ZerionProject from "data/projects/zerion/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import ZerionIcon from "./icon.tsx";

const ZerionWallet: App = {
  id: "zerion-wallet",
  appSlug: "zerion-wallet",
  type: AppTypes.Wallet,
  project: ZerionProject,
  name: "Zerion",
  description:
    "A non-custodial wallet built to trade any token on EVM and Solana, with NFT and DeFi portfolio management built in.",
  socials: {
    website: new URL("https://zerion.io/"),
    twitter: new URL("https://x.com/zerion"),
  },
  icon: ZerionIcon,
  // TODO: Add OG images
};

defineApp(ZerionWallet);

export default ZerionWallet;
