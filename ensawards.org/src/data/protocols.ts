import { AaveDaoIcon } from "@/components/atoms/icons/ens-integrating-entities/dao-protocols/AaveDaoIcon.tsx";
import { ArbitrumDaoIcon } from "@/components/atoms/icons/ens-integrating-entities/dao-protocols/ArbitrumDaoIcon.tsx";
import { EnsDaoIcon } from "@/components/atoms/icons/ens-integrating-entities/dao-protocols/EnsDaoIcon.tsx";
import { LiquityIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/LiquityIcon.tsx";
import { NounsIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/NounsIcon.tsx";
import { TaikoIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/TaikoIcon.tsx";
import { UniswapIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/UniswapIcon.tsx";
import {
  AaveProject,
  ArbitrumProject,
  ENSProject,
  LiquityProject,
  NounsProject,
  TaikoProject,
  UniswapProject,
} from "@/data/projects.ts";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import {
  type DAOProtocol,
  DAOProtocolIds,
  type DefiProtocol,
  DefiProtocolIds,
  type Protocol,
} from "@/types/protocols.ts";

export const ENSDao: DAOProtocol = {
  id: DAOProtocolIds.EnsDao,
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
  ogImagePath: "https://ensawards.org/protocol-ens-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-ens-dao_twitter_og_image.png",
};

export const UniswapDao: DAOProtocol = {
  id: DAOProtocolIds.UniswapDao,
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
  ogImagePath: "https://ensawards.org/protocol-uniswap-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-uniswap-dao_twitter_og_image.png",
};

export const NounsDao: DAOProtocol = {
  id: DAOProtocolIds.NounsDao,
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
  ogImagePath: "https://ensawards.org/protocol-nouns-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-nouns-dao_twitter_og_image.png",
};

export const ArbitrumDao: DAOProtocol = {
  id: DAOProtocolIds.ArbitrumDao,
  slug: "arbitrum",
  protocolType: ProtocolTypes.Dao,
  project: ArbitrumProject,
  name: "Arbitrum DAO",
  description:
    "The Arbitrum DAO provides governance for Arbitrum, a unified blockchain for everyone, where ideas thrive and boundaries fade.",
  icon: ArbitrumDaoIcon,
  socials: {
    website: new URL("https://arbitrum.foundation/"),
    twitter: new URL("https://x.com/arbitrum"),
  },
  ogImagePath: "https://ensawards.org/protocol-arbitrum-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-arbitrum-dao_twitter_og_image.png",
};

export const AaveDao: DAOProtocol = {
  id: DAOProtocolIds.AaveDao,
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
  ogImagePath: "https://ensawards.org/protocol-aave-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-aave-dao_twitter_og_image.png",
};

export const TaikoDao: DAOProtocol = {
  id: DAOProtocolIds.TaikoDao,
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
  ogImagePath: "https://ensawards.org/protocol-taiko-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-taiko-dao_twitter_og_image.png",
};

export const LiquityDefiProtocol: DefiProtocol = {
  id: DefiProtocolIds.Liquity,
  slug: "liquity",
  protocolType: ProtocolTypes.Defi,
  project: LiquityProject,
  name: "Liquity",
  description: "Defi protocol for borrowing against ETH & staked ETH.",
  icon: LiquityIcon,
  socials: {
    website: new URL("https://www.liquity.org/"),
    twitter: new URL("https://x.com/LiquityProtocol"),
    ens: "liquity-protocol.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-liquity-defi_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-liquity-defi_twitter_og_image.png",
};

export const UniswapDefiProtocol: DefiProtocol = {
  id: DefiProtocolIds.Uniswap,
  slug: "uniswap",
  protocolType: ProtocolTypes.Defi,
  project: UniswapProject,
  name: "Uniswap",
  description:
    "Decentralized exchange protocol for swapping crypto tokens via automated market makers.", //TODO: improve(?!)
  icon: UniswapIcon,
  socials: {
    website: new URL("https://app.uniswap.org/"),
    twitter: new URL("https://x.com/Uniswap"),
    //TODO: Should it have the same "ens" field as Uniswap DAO?
  },
  ogImagePath: "https://ensawards.org/protocol-uniswap-dao_og_image.png", // TODO: Need new OG images for the non-DAO option
  twitterOgImagePath: "https://ensawards.org/protocol-uniswap-dao_twitter_og_image.png",
};

export const TaikoDefiProtocol: DefiProtocol = {
  id: DefiProtocolIds.Taiko,
  slug: "taiko",
  protocolType: ProtocolTypes.Defi,
  project: TaikoProject,
  name: "Taiko",
  description:
    "Ethereum-equivalent zkRollup protocol enabling decentralized, permissionless Layer-2 scaling secured by Ethereum.", //TODO: improve(?!)
  icon: TaikoIcon,
  socials: {
    website: new URL("https://taiko.xyz/"),
    twitter: new URL("https://x.com/taikoxyz"),
    //TODO: Should it have the same "ens" field as Taiko DAO?
  },
  ogImagePath: "https://ensawards.org/protocol-taiko-dao_og_image.png", // TODO: Need new OG images for the non-DAO option
  twitterOgImagePath: "https://ensawards.org/protocol-taiko-dao_twitter_og_image.png",
};

/**
 * Array of supported DAO protocols.
 *
 * Invariant: This array should contain exactly one {@link DAOProtocol} for each DAO-related {@link ProtocolId}.
 */

export const DAO_PROTOCOLS: DAOProtocol[] = [
  ENSDao,
  UniswapDao,
  NounsDao,
  ArbitrumDao,
  AaveDao,
  TaikoDao,
];

/**
 * Array of supported Defi protocols.
 *
 * Invariant: This array should contain exactly one {@link DefiProtocol} for each Defi protocol-related {@link ProtocolId}.
 */
export const DEFI_PROTOCOLS: DefiProtocol[] = [
  LiquityDefiProtocol,
  UniswapDefiProtocol,
  TaikoDefiProtocol,
];

/**
 * Array of supported protocols. Combines {@link DAO_PROTOCOLS} and {@link DEFI_PROTOCOLS}.
 *
 * Invariant: This array should contain exactly one {@link Protocol} for each {@link ProtocolId}.
 */
export const PROTOCOLS: Protocol[] = [...DAO_PROTOCOLS, ...DEFI_PROTOCOLS];
