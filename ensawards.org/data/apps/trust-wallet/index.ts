// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import TrustProject from "data/projects/trust/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import TrustWalletIcon from "./icon.tsx";

const TrustWallet: App = {
  id: "trust-wallet",
  appSlug: "trust-wallet",
  type: AppTypes.Wallet,
  project: TrustProject,
  name: "Trust Wallet",
  description:
    "A self-custody mobile and browser-extension wallet supporting millions of assets across 100+ blockchains, with built-in swaps, NFT management, staking, and a Web3 dApp browser.",
  socials: {
    website: new URL("https://trustwallet.com/"),
    twitter: new URL("https://x.com/trustwallet"),
  },
  icon: TrustWalletIcon,
  // TODO: Add OG images
};

defineApp(TrustWallet);

export default TrustWallet;
