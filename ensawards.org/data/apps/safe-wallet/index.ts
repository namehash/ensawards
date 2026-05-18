// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import SafeProject from "data/projects/safe";
import { asInterpretedName } from "enssdk";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import SafeIcon from "./icon.tsx";

const SafeWallet: App = {
  id: "safe-wallet",
  appSlug: "safe-wallet",
  type: AppTypes.Wallet,
  project: SafeProject,
  name: "Safe{Wallet}",
  description:
    "A multisignature smart wallet with transaction simulation, spending limits, and role-based access across multiple chains.",
  socials: {
    website: new URL("https://safe.global/"),
    twitter: new URL("https://x.com/SafeLabs_"),
    ens: asInterpretedName("safe.eth"),
  },
  icon: SafeIcon,
  // TODO: Add OG images
};

defineApp(SafeWallet);

export default SafeWallet;
