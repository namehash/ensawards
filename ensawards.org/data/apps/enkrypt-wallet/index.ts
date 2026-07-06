// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import MEWProject from "data/projects/mew";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import EnkryptIcon from "./icon.tsx";

const EnkryptWallet: App = {
  id: "enkrypt-wallet",
  appSlug: "enkrypt-wallet",
  type: AppTypes.Wallet,
  project: MEWProject,
  name: "Enkrypt",
  description:
    "Self-custodial multichain browser-extension wallet built by MEW, extending beyond its classic Ethereum web app with native support for EVM and non-EVM chains and in-browser dApp connectivity.",
  socials: {
    website: new URL("https://www.enkrypt.com/"),
    twitter: new URL("https://x.com/enkrypt"),
  },
  icon: EnkryptIcon,
  ogImagePath: "enkrypt-wallet/og.png",
  twitterOgImagePath: "enkrypt-wallet/twitter-og.png",
};

defineApp(EnkryptWallet);

export default EnkryptWallet;
