import { AaveDaoIcon } from "@/components/atoms/icons/projects-and-protocols/AaveDaoIcon.tsx";
import { ArbitrumIcon } from "@/components/atoms/icons/projects-and-protocols/ArbitrumIcon.tsx";
import { EnsDaoIcon } from "@/components/atoms/icons/projects-and-protocols/EnsDaoIcon.tsx";
import { NounsIcon } from "@/components/atoms/icons/projects-and-protocols/NounsIcon.tsx";
import { TaikoIcon } from "@/components/atoms/icons/projects-and-protocols/TaikoIcon.tsx";
import { UniswapIcon } from "@/components/atoms/icons/projects-and-protocols/UniswapIcon.tsx";
import {
  AaveProject,
  ArbitrumProject,
  ENSProject,
  NounsProject,
  TaikoProject,
  UniswapProject,
} from "@/data/projects.ts";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import { type DAO, type Defi, type Protocol, ProtocolIds } from "@/types/protocols.ts";

export const ENSDaoProtocol: Protocol = {
  id: ProtocolIds.Ens,
  slug: "ens",
  protocolType: ProtocolTypes.Dao,
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
  ogImagePath: "https://ensawards.org/org-ens-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-ens-dao_twitter_og_image.png",
};

export const UniswapDaoProtocol: Protocol = {
  id: ProtocolIds.Uniswap,
  slug: "uniswap",
  protocolType: ProtocolTypes.Dao,
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
  ogImagePath: "https://ensawards.org/org-uniswap-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-uniswap-dao_twitter_og_image.png",
};

export const NounsDaoProtocol: Protocol = {
  id: ProtocolIds.Nouns,
  slug: "nouns",
  protocolType: ProtocolTypes.Dao,
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
  ogImagePath: "https://ensawards.org/org-nouns-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-nouns-dao_twitter_og_image.png",
};

export const ArbitrumDaoProtocol: Protocol = {
  id: ProtocolIds.Arbitrum,
  slug: "arbitrum",
  protocolType: ProtocolTypes.Dao,
  project: ArbitrumProject,
  name: "Arbitrum DAO",
  description:
    "The Arbitrum DAO provides governance for Arbitrum, a unified blockchain for everyone, where ideas thrive and boundaries fade.",
  icon: ArbitrumIcon,
  socials: {
    website: new URL("https://arbitrum.foundation/"),
    twitter: new URL("https://x.com/arbitrum"),
  },
  ogImagePath: "https://ensawards.org/org-arbitrum-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-arbitrum-dao_twitter_og_image.png",
};

export const AaveDaoProtocol: Protocol = {
  id: ProtocolIds.Aave,
  slug: "aave",
  protocolType: ProtocolTypes.Dao,
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
  ogImagePath: "https://ensawards.org/org-aave-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-aave-dao_twitter_og_image.png",
};

export const TaikoDaoProtocol: Protocol = {
  id: ProtocolIds.Taiko,
  slug: "taiko",
  protocolType: ProtocolTypes.Dao,
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
  ogImagePath: "https://ensawards.org/org-taiko-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/org-taiko-dao_twitter_og_image.png",
};

/**
 * Array of supported DAO protocols.
 *
 * Invariant: This array should contain exactly one {@link Dao} for each DAO-related {@link ProtocolId}.
 */

export const DAO_PROTOCOLS: DAO[] = [
  ENSDaoProtocol,
  UniswapDaoProtocol,
  NounsDaoProtocol,
  ArbitrumDaoProtocol,
  AaveDaoProtocol,
  TaikoDaoProtocol,
];

/**
 * Array of supported Defi protocols.
 *
 * Invariant: This array should contain exactly one {@link Defi} for each Defi protocol-related {@link ProtocolId}.
 */
export const DEFI_PROTOCOLS: Defi[] = [];

/**
 * Array of supported protocols. Combines {@link DAO_PROTOCOLS} and {@link DEFI_PROTOCOLS}.
 *
 * Invariant: This array should contain exactly one {@link Protocol} for each {@link ProtocolId}.
 */
export const PROTOCOLS: Protocol[] = [...DAO_PROTOCOLS, ...DEFI_PROTOCOLS];
