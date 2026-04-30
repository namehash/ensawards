// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying apps

import { asInterpretedName } from "enssdk";

import BlockscoutProject from "../../projects/blockscout";
import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import BlockscoutIcon from "./icon.tsx";

const BlockscoutExplorer: App = {
  id: "blockscout-explorer",
  appSlug: "blockscout-explorer",
  project: BlockscoutProject,
  name: "Blockscout",
  description: "Blockscout is a tool for inspecting and analyzing EVM-based blockchains.",
  type: AppTypes.Explorer,
  socials: {
    website: new URL("https://www.blockscout.com"),
    twitter: new URL("https://x.com/blockscout"),
    ens: asInterpretedName("blockscout.eth"),
  },
  icon: BlockscoutIcon,
  ogImagePath: "blockscout-explorer/og.png",
  twitterOgImagePath: "blockscout-explorer/twitter-og.png",
};

defineApp(BlockscoutExplorer);

export default BlockscoutExplorer;
