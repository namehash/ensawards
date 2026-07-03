// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import BitgetProject from "data/projects/bitget";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BitgetIcon from "./icon.tsx";

const BitgetWallet: App = {
  id: "bitget-wallet",
  appSlug: "bitget-wallet",
  type: AppTypes.Wallet,
  project: BitgetProject,
  name: "Bitget Wallet",
  description:
    "Self-custodial Web3 wallet for managing digital assets, swapping tokens, and interacting with decentralized applications across multiple chains.",
  socials: {
    website: new URL("https://web3.bitget.com/"),
    twitter: new URL("https://x.com/bitget"),
  },
  icon: BitgetIcon,
  // TODO: Add OG images
};

defineApp(BitgetWallet);

export default BitgetWallet;
