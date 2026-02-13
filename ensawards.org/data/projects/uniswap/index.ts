import { UniswapIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/UniswapIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

export const UniswapProject: Project = {
  id: ProjectIds.Uniswap,
  name: "Uniswap",
  description:
    "The largest onchain marketplace. Buy and sell crypto on Ethereum and 12+ other chains.",
  icon: UniswapIcon,
  socials: {
    website: new URL("https://app.uniswap.org/"),
    twitter: new URL("https://x.com/Uniswap"),
  },
};
