// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying apps

import BlockscoutProject from "../../projects/blockscout";
import { buildEffectiveAppBenchmarks } from "../benchmarks-utils.ts";
import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BlockscoutExplorerBenchmarks from "./benchmarks.ts";
import BlockscoutIcon from "./icon.tsx";

const BlockscoutExplorer: App = {
  id: "blockscout-explorer",
  appSlug: "blockscout-explorer",
  project: BlockscoutProject,
  name: "Blockscout",
  description: "Blockscout is a tool for inspecting and analyzing EVM-based blockchains.",
  type: AppTypes.Explorer,
  socials: {
    website: new URL("https://www.blockscout.com/"),
    twitter: new URL("https://x.com/blockscout"),
    ens: "blockscout.eth",
  },
  icon: BlockscoutIcon,
  benchmarks: buildEffectiveAppBenchmarks(BlockscoutExplorerBenchmarks, AppTypes.Explorer),
  ogImagePath: "https://ensawards.org/data/apps/blockscout-explorer/og.png",
  twitterOgImagePath: "https://ensawards.org/data/apps/blockscout-explorer/twitter-og.png",
};

defineApp(BlockscoutExplorer);

export default BlockscoutExplorer;
