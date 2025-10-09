import { UniswapIcon } from "@/components/atoms/icons/UniswapIcon.tsx";
import { type Project, ProjectNames } from "@/types/projects.ts";
import { EnsProjectIcon } from "../components/atoms/icons/EnsProjectIcon.tsx";

export const PROJECTS: Record<string, Project> = {
  ENS: {
    name: ProjectNames.Ens,
    description: "The Ethereum Name Service (ENS) is a decentralized domain name system.",
    icon: EnsProjectIcon,
    socialLinks: {
      websiteLink: new URL("https://ens.domains/"),
      twitterLink: new URL("https://x.com/ensdomains"),
    },
  },
  Uniswap: {
    name: ProjectNames.Uniswap,
    description:
      "The largest onchain marketplace. Buy and sell crypto on Ethereum and 12+ other chains.",
    icon: UniswapIcon,
    socialLinks: {
      websiteLink: new URL("https://app.uniswap.org/"),
      twitterLink: new URL("https://x.com/Uniswap"),
    },
  },
} as const;
