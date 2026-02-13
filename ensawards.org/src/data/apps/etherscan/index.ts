import { EtherscanIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/EtherscanIcon.tsx";
import { EtherscanBenchmarks } from "@/data/apps/etherscan/benchmarks.ts";
import { EtherscanProject } from "@/data/projects/etherscan";
import { type App, AppTypes } from "@/types/apps.ts";

//TODO: Should we add app type (explorer) to the name?
// Or maybe we should remove this from wallet's names?
// Seems reasonable for Rainbow as all they do is the wallet, but questionable for coinbase,
// cause they have more endeavors
export const EtherscanApp: App = {
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
