// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying apps

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
    ens: "walletchan.eth",
  },
  icon: WalletChanIcon,
};

defineApp(WalletChanWallet);

export default WalletChanWallet;
