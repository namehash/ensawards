// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import CryptoComProject from "data/projects/cryptocom";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import CryptoComIcon from "./icon.tsx";

const CryptoComWallet: App = {
  id: "cryptocom-wallet",
  appSlug: "cryptocom-wallet",
  type: AppTypes.Wallet,
  project: CryptoComProject,
  name: "Crypto.com Wallet",
  description:
    "Self-custodial multi-chain wallet for storing, trading, and staking digital assets and interacting with decentralized applications across networks like Ethereum, Bitcoin, and Solana.",
  socials: {
    website: new URL("https://crypto.com/eea/onchain"),
    twitter: new URL("https://x.com/cryptocom"),
  },
  icon: CryptoComIcon,
  // TODO: Add OG images
};

defineApp(CryptoComWallet);

export default CryptoComWallet;
