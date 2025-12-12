import { AaveDaoIcon } from "@/components/atoms/icons/projects-and-daos/AaveDaoIcon.tsx";
import { ArbitrumIcon } from "@/components/atoms/icons/projects-and-daos/ArbitrumIcon.tsx";
import { EnsDaoIcon } from "@/components/atoms/icons/projects-and-daos/EnsDaoIcon.tsx";
import { NounsIcon } from "@/components/atoms/icons/projects-and-daos/NounsIcon.tsx";
import { TaikoIcon } from "@/components/atoms/icons/projects-and-daos/TaikoIcon.tsx";
import { UniswapIcon } from "@/components/atoms/icons/projects-and-daos/UniswapIcon.tsx";
import {
  AaveProject,
  ArbitrumProject,
  ENSProject,
  NounsProject,
  TaikoProject,
  UniswapProject,
} from "@/data/projects.ts";
import { OrgIds, type Organization, OrganizationTypes } from "@/types/organizations.ts";

export const ENSDaoOrg: Organization = {
  id: OrgIds.Ens,
  slug: "ens",
  orgType: OrganizationTypes.Dao,
  project: ENSProject,
  name: "ENS DAO",
  description:
    "The Ethereum Name Service (ENS) is a decentralized domain name system. The ENS DAO governs the ENS protocol and treasury.",
  icon: EnsDaoIcon,
  socials: {
    website: new URL("https://ensdao.org/"),
    twitter: new URL("https://x.com/ENS_DAO"),
    ens: "ensdao.eth",
  },
  ogImagePath: "/org-ens-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-ens-dao_twitter_og_image.png",
};

export const UniswapDaoOrg: Organization = {
  id: OrgIds.Uniswap,
  slug: "uniswap",
  orgType: OrganizationTypes.Dao,
  project: UniswapProject,
  name: "Uniswap DAO",
  description:
    "Uniswap governance is a collective of companies, communities, and token holders working together to steward the future of the Uniswap protocol.",
  icon: UniswapIcon,
  socials: {
    website: new URL("https://www.uniswapfoundation.org/"),
    twitter: new URL("https://x.com/UniswapFND"),
    ens: "uniswap.eth",
  },
  ogImagePath: "/org-uniswap-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-uniswap-dao_twitter_og_image.png",
};

export const NounsDaoOrg: Organization = {
  id: OrgIds.Nouns,
  slug: "nouns",
  orgType: OrganizationTypes.Dao,
  project: NounsProject,
  name: "Nouns DAO",
  description:
    "Nouns is a community-owned brand that makes a positive impact by funding ideas and fostering collaboration.",
  icon: NounsIcon,
  socials: {
    website: new URL("https://nouns.wtf/"),
    twitter: new URL("https://x.com/nounsdao"),
    ens: "nouns.eth",
  },
  ogImagePath: "/org-nouns-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-nouns-dao_twitter_og_image.png",
};

export const ArbitrumDaoOrg: Organization = {
  id: OrgIds.Arbitrum,
  slug: "arbitrum",
  orgType: OrganizationTypes.Dao,
  project: ArbitrumProject,
  name: "Arbitrum DAO",
  description:
    "The Arbitrum DAO provides governance for Arbitrum, a unified blockchain for everyone, where ideas thrive and boundaries fade.",
  icon: ArbitrumIcon,
  socials: {
    website: new URL("https://arbitrum.foundation/"),
    twitter: new URL("https://x.com/arbitrum"),
  },
  ogImagePath: "/org-arbitrum-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-arbitrum-dao_twitter_og_image.png",
};

export const AaveDaoOrg: Organization = {
  id: OrgIds.Aave,
  slug: "aave",
  orgType: OrganizationTypes.Dao,
  project: AaveProject,
  name: "Aave DAO",
  description:
    "The Aave DAO provides governance to DeFi's largest lending network: Aave, where you can earn, borrow, save, and swap with millions of users.",
  icon: AaveDaoIcon,
  socials: {
    website: new URL("https://aave.com/"),
    twitter: new URL("https://x.com/aave"),
    ens: "aave.eth",
  },
  ogImagePath: "/org-aave-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-aave-dao_twitter_og_image.png",
};

export const TaikoDaoOrg: Organization = {
  id: OrgIds.Taiko,
  slug: "taiko",
  orgType: OrganizationTypes.Dao,
  project: TaikoProject,
  name: "Taiko DAO",
  description:
    "Taiko DAO, created in collaboration with Aragon, plays a critical role in governing Taiko in a decentralized way.",
  icon: TaikoIcon,
  socials: {
    website: new URL("https://dao.taiko.xyz/"),
    twitter: new URL("https://x.com/taikoxyz"),
    ens: "taiko.eth",
  },
  ogImagePath: "/org-taiko-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-taiko-dao_twitter_og_image.png",
};

/**
 * Array of supported organizations.
 *
 * Invariant: This array should contain exactly one {@link Organization} for each {@link OrgId}.
 */
export const ORGANIZATIONS: Organization[] = [
  ENSDaoOrg,
  UniswapDaoOrg,
  NounsDaoOrg,
  ArbitrumDaoOrg,
  AaveDaoOrg,
  TaikoDaoOrg,
];
