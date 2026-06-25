// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import FrameProject from "data/projects/frame";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import FrameIcon from "./icon.tsx";

const FrameWallet: App = {
  id: "frame-wallet",
  appSlug: "frame-wallet",
  type: AppTypes.Wallet,
  project: FrameProject,
  name: "Frame",
  description:
    "Self-custodial desktop wallet providing system-wide access to your chains and accounts, with hardware wallet support and dApp connectivity.",
  socials: {
    website: new URL("https://frame.sh"),
    twitter: new URL("https://x.com/0xFrame"),
  },
  icon: FrameIcon,
  ogImagePath: "frame-wallet/og.png",
  twitterOgImagePath: "frame-wallet/twitter-og.png",
};

defineApp(FrameWallet);

export default FrameWallet;
