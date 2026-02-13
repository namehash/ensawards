import { BlockscoutIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/BlockscoutIcon.tsx";
import type { App } from "@/types/apps.ts";
import { AppTypes } from "@/types/apps.ts";

import { BlockscoutProject } from "../../projects/blockscout";
import { BlockscoutBenchmarks } from "./benchmarks.ts";

export const BlockscoutApp: App = {
  id: "blockscout",
  slug: "blockscout",
  project: BlockscoutProject,
  name: "Blockscout",
  description: "Blockscout is a tool for inspecting and analyzing EVM-based blockchains.",
  type: AppTypes.Explorer,
  socials: {
    website: new URL("https://www.blockscout.com/"),
    twitter: new URL("https://x.com/blockscout"),
  },
  icon: BlockscoutIcon,
  benchmarks: BlockscoutBenchmarks,
  ogImagePath: "https://ensawards.org/app-blockscout_og_image.png",
  twitterOgImagePath: "https://ensawards.org/app-blockscout_twitter_og_image.png",
};
