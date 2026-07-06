// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import TokenPocketProject from "data/projects/tokenpocket";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import TokenPocketIcon from "./icon.tsx";

const TokenPocketWallet: App = {
  id: "tokenpocket-wallet",
  appSlug: "tokenpocket-wallet",
  type: AppTypes.Wallet,
  project: TokenPocketProject,
  name: "TokenPocket",
  description:
    "Self-custodial multichain wallet for storing, sending, and swapping digital assets and interacting with decentralized applications across Ethereum, Bitcoin, Solana, and other chains.",
  socials: {
    website: new URL("https://www.tokenpocket.pro"),
    twitter: new URL("https://x.com/TokenPocket_TP"),
  },
  icon: TokenPocketIcon,
  ogImagePath: "tokenpocket-wallet/og.png",
  twitterOgImagePath: "tokenpocket-wallet/twitter-og.png",
};

defineApp(TokenPocketWallet);

export default TokenPocketWallet;
