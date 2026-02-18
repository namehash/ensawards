import RainbowProject from "../../projects/rainbow";
import { type App, AppTypes } from "../types.ts";
import { RainbowWalletBenchmarks } from "./benchmarks.ts";
import RainbowIcon from "./icon.tsx";

export const RainbowWallet: App = {
  id: "rainbow-wallet",
  slug: "rainbow-wallet",
  project: RainbowProject,
  name: "Rainbow Wallet",
  description:
    "Rainbow is a fun, simple, and secure way to get started with crypto and explore Ethereum.",
  type: AppTypes.Wallet,
  socials: {
    website: new URL("https://rainbow.me/"),
    twitter: new URL("https://x.com/rainbowdotme"),
    ens: "rainbowwallet.eth",
  },
  icon: RainbowIcon,
  benchmarks: RainbowWalletBenchmarks,
  ogImagePath: "https://ensawards.org/data/apps/rainbow-wallet/og.png",
  twitterOgImagePath: "https://ensawards.org/data/apps/rainbow-wallet/twitter-og.png",
};

export default RainbowWallet;
