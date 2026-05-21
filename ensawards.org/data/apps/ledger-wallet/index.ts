// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import LedgerProject from "data/projects/ledger/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import LedgerIcon from "./icon.tsx";

const LedgerWalletWallet: App = {
  id: "ledgerwallet-wallet",
  appSlug: "ledgerwallet-wallet",
  type: AppTypes.Wallet,
  project: LedgerProject,
  name: "Ledger Wallet",
  description:
    "A self-custody software wallet (formerly Ledger Live) for managing, swapping, and staking crypto and NFTs across chains, with optional pairing to Ledger hardware devices.",
  socials: {
    website: new URL("https://shop.ledger.com/pages/ledger-wallet"),
    twitter: new URL("https://x.com/Ledger"),
  },
  icon: LedgerIcon,
  // TODO: Add OG images
};

defineApp(LedgerWalletWallet);

export default LedgerWalletWallet;
