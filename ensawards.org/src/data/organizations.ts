import { EnsDaoIcon } from "@/components/atoms/icons/EnsDaoIcon.tsx";
import { UniswapIcon } from "@/components/atoms/icons/UniswapIcon.tsx";
import { PROJECTS } from "@/data/projects.ts";
import {type Organization, type OrganizationName, OrganizationNames, OrganizationTypes} from "@/types/organizations.ts";

export const ORGANIZATIONS: Record<OrganizationName, Organization> = {
  "ENS DAO": {
    orgType: OrganizationTypes.DAO,
    project: PROJECTS.ENS,
    name: OrganizationNames.Ens,
    description:
      "The Ethereum Name Service (ENS) is a decentralized domain name system. The ENS DAO governs the ENS protocol and treasury.",
    icon: EnsDaoIcon,
    socialLinks: {
      websiteLink: new URL("https://ensdao.org/"),
      twitterLink: new URL("https://x.com/ENS_DAO"),
    },
  },
  "Uniswap DAO": {
    orgType: OrganizationTypes.DAO,
    project: PROJECTS.Uniswap,
    name: OrganizationNames.Uniswap,
    description:
      "The largest onchain marketplace. Buy and sell crypto on Ethereum and 12+ other chains.",
    icon: UniswapIcon,
    socialLinks: {
      websiteLink: new URL("https://app.uniswap.org/"),
      twitterLink: new URL("https://x.com/Uniswap"),
    },
  },
} as const;
