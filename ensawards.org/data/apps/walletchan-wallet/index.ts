// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying apps

import { asInterpretedName } from "enssdk";

import WalletChanProject from "../../projects/walletchan";
import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import WalletChanIcon from "./icon.tsx";

const WalletChanWallet: App = {
  id: "walletchan-wallet",
  appSlug: "walletchan-wallet",
  project: WalletChanProject,
  name: "WalletChan",
  description: "WalletChan is an upcoming, powerful EVM wallet that's ready for the AI era.",
  type: AppTypes.Wallet,
  socials: {
    website: new URL("https://walletchan.com/"),
    twitter: new URL("https://x.com/walletchan_"),
    ens: asInterpretedName("walletchan.eth"),
  },
  icon: WalletChanIcon,
  ogImagePath: "walletchan-wallet/og.png",
  twitterOgImagePath: "walletchan-wallet/twitter-og.png",
};

defineApp(WalletChanWallet);

export default WalletChanWallet;
