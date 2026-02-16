import { EtherscanIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/EtherscanIcon.tsx";
import { type App, AppTypes } from "@/types/apps.ts";

import { EtherscanProject } from "../../projects/etherscan";
import { EtherscanBenchmarks } from "./benchmarks.ts";

export const EtherscanExplorer: App = {
  id: "etherscan",
  slug: "etherscan",
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
  benchmarks: EtherscanBenchmarks,
  ogImagePath: "https://ensawards.org/app-etherscan_og_image.png",
  twitterOgImagePath: "https://ensawards.org/app-etherscan_twitter_og_image.png",
};
