// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying apps

import { asInterpretedName } from "enssdk";

import AmbireProject from "../../projects/ambire";
import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import AmbireIcon from "./icon.tsx";

const AmbireWallet: App = {
  id: "ambire-wallet",
  appSlug: "ambire-wallet",
  project: AmbireProject,
  name: "Ambire",
  description:
    "A self-custodial Web3 wallet where you can manage tokens, DeFi positions, and NFTs across multiple chains in one place.",
  type: AppTypes.Wallet,
  socials: {
    website: new URL("https://www.ambire.com/"),
    twitter: new URL("https://x.com/ambire"),
    ens: asInterpretedName("ambire.eth"),
  },
  icon: AmbireIcon,
  ogImagePath: "ambire-wallet/og.png",
  twitterOgImagePath: "ambire-wallet/twitter-og.png",
};

defineApp(AmbireWallet);

export default AmbireWallet;
