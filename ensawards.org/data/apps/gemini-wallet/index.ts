// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import GeminiProject from "data/projects/gemini";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import GeminiIcon from "./icon.tsx";

const GeminiWallet: App = {
  id: "gemini-wallet",
  appSlug: "gemini-wallet",
  type: AppTypes.Wallet,
  project: GeminiProject,
  name: "Gemini Wallet",
  description:
    "A self-custody wallet that brings flexibility, ease of use, and powerful security onchain.",
  socials: {
    website: new URL("https://www.gemini.com/wallet"),
    twitter: new URL("https://x.com/gemini"),
  },
  icon: GeminiIcon,
  // TODO: Add OG images
};

defineApp(GeminiWallet);

export default GeminiWallet;
