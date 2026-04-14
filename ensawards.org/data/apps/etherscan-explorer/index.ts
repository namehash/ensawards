// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying apps

import EtherscanProject from "../../projects/etherscan";
import { buildEffectiveAppBenchmarks } from "../benchmarks-utils.ts";
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
    website: new URL("https://etherscan.io"),
    twitter: new URL("https://x.com/etherscan"),
    ens: "etherscan.eth",
  },
  icon: EtherscanIcon,
  benchmarks: buildEffectiveAppBenchmarks(EtherscanExplorerBenchmarks, AppTypes.Explorer),
  ogImagePath: "etherscan-explorer/og.png",
  twitterOgImagePath: "etherscan-explorer/twitter-og.png",
};

defineApp(EtherscanExplorer);

export default EtherscanExplorer;
