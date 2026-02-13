import { RainbowIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/RainbowIcon.tsx";
import { RainbowWalletBenchmarks } from "@/data/apps/rainbow-wallet/benchmarks.ts";
import { RainbowProject } from "@/data/projects/rainbow";
import { type App, AppTypes } from "@/types/apps.ts";

export const RainbowWalletApp: App = {
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
  ogImagePath: "https://ensawards.org/app-rainbow-wallet_og_image.png",
  twitterOgImagePath: "https://ensawards.org/app-rainbow-wallet_twitter_og_image.png",
};
