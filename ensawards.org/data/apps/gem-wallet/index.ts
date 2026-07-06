// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import GemProject from "data/projects/gem";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import GemIcon from "./icon.tsx";

const GemWallet: App = {
  id: "gem-wallet",
  appSlug: "gem-wallet",
  type: AppTypes.Wallet,
  project: GemProject,
  name: "Gem Wallet",
  description:
    "Open-source, self-custodial multichain wallet for storing, sending, and swapping digital assets and interacting with decentralized applications.",
  socials: {
    website: new URL("https://gemwallet.com"),
    twitter: new URL("https://x.com/gemwallet"),
  },
  icon: GemIcon,
  ogImagePath: "gem-wallet/og.png",
  twitterOgImagePath: "gem-wallet/twitter-og.png",
};

defineApp(GemWallet);

export default GemWallet;
