import MetaMaskProject from "../../projects/metamask";
import { type App, AppTypes } from "../types.ts";
import MetaMaskWalletBenchmarks from "./benchmarks.ts";
import MetaMaskIcon from "./icon.tsx";

const MetaMaskWallet: App = {
  id: "metamask-wallet",
  appSlug: "metamask-wallet",
  project: MetaMaskProject,
  name: "MetaMask",
  description: "MetaMask is a widely used, self-custodial cryptocurrency wallet.",
  type: AppTypes.Wallet,
  socials: {
    website: new URL("https://metamask.io/"),
    twitter: new URL("https://x.com/MetaMask"),
    ens: "metamask.eth",
  },
  icon: MetaMaskIcon,
  benchmarks: MetaMaskWalletBenchmarks,
  ogImagePath: "https://ensawards.org/data/apps/metamask-wallet/og.png",
  twitterOgImagePath: "https://ensawards.org/data/apps/metamask-wallet/twitter-og.png",
};

export default MetaMaskWallet;
