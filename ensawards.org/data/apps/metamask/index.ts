import { MetaMaskIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/MetaMaskIcon.tsx";
import { type App, AppTypes } from "@/types/apps.ts";

import { MetaMaskProject } from "../../projects/metamask";
import { MetaMaskBenchmarks } from "./benchmarks.ts";

export const MetaMaskApp: App = {
  id: "metamask",
  slug: "metamask",
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
  benchmarks: MetaMaskBenchmarks,
  ogImagePath: "https://ensawards.org/app-metamask_og_image.png",
  twitterOgImagePath: "https://ensawards.org/app-metamask_twitter_og_image.png",
};
