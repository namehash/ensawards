// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying apps

import { asInterpretedName } from "enssdk";

import MetaMaskProject from "../../projects/metamask";
import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import MetaMaskIcon from "./icon.tsx";

const MetaMaskWallet: App = {
  id: "metamask-wallet",
  appSlug: "metamask-wallet",
  project: MetaMaskProject,
  name: "MetaMask",
  description: "MetaMask is a widely used, self-custodial cryptocurrency wallet.",
  type: AppTypes.Wallet,
  socials: {
    website: new URL("https://metamask.io"),
    twitter: new URL("https://x.com/MetaMask"),
    ens: asInterpretedName("metamask.eth"),
  },
  icon: MetaMaskIcon,
  ogImagePath: "metamask-wallet/og.png",
  twitterOgImagePath: "metamask-wallet/twitter-og.png",
};

defineApp(MetaMaskWallet);

export default MetaMaskWallet;
