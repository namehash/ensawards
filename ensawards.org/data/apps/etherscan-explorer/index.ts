import EtherscanProject from "../../projects/etherscan";
import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import EtherscanExplorerBenchmarks from "./benchmarks.ts";
import EtherscanIcon from "./icon.tsx";

const EtherscanExplorer: App = {
  id: "etherscan-explorer",
  appSlug: "etherscan-explorer",
  project: EtherscanProject,
  name: "Etherscan",
  description: "Etherscan is a Block Explorer and Analytics Platform for Ethereum.",
  type: AppTypes.Explorer,
  socials: {
    website: new URL("https://etherscan.io/"),
    twitter: new URL("https://x.com/etherscan"),
    ens: "etherscan.eth",
  },
  icon: EtherscanIcon,
  benchmarks: EtherscanExplorerBenchmarks,
  ogImagePath: "https://ensawards.org/data/apps/etherscan-explorer/og.png",
  twitterOgImagePath: "https://ensawards.org/data/apps/etherscan-explorer/twitter-og.png",
};

defineApp(EtherscanExplorer);

export default EtherscanExplorer;
