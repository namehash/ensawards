import { AaveDaoIcon } from "@/components/atoms/icons/ens-integrating-entities/dao-protocols/AaveDaoIcon.tsx";
import { ArbitrumDaoIcon } from "@/components/atoms/icons/ens-integrating-entities/dao-protocols/ArbitrumDaoIcon.tsx";
import { EnsDaoIcon } from "@/components/atoms/icons/ens-integrating-entities/dao-protocols/EnsDaoIcon.tsx";
import { CorkIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/CorkIcon.tsx";
import { GivethIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/GivethIcon.tsx";
import { LiquityIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/LiquityIcon.tsx";
import { NounsIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/NounsIcon.tsx";
import { TaikoIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/TaikoIcon.tsx";
import { UniswapIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/UniswapIcon.tsx";
import {
  AaveProject,
  ArbitrumProject,
  CorkProject,
  ENSProject,
  GivethProject,
  LiquityProject,
  NounsProject,
  TaikoProject,
  UniswapProject,
} from "@/data/projects.ts";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import {
  type DAOProtocol,
  DAOProtocolIds,
  type DeFiProtocol,
  DeFiProtocolIds,
  type Protocol,
} from "@/types/protocols.ts";

export const ENSDao: DAOProtocol = {
  id: DAOProtocolIds.EnsDao,
  slug: "ens",
  protocolType: ProtocolTypes.DAO,
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
  protocolType: ProtocolTypes.DAO,
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
  protocolType: ProtocolTypes.DAO,
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
  protocolType: ProtocolTypes.DAO,
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
  protocolType: ProtocolTypes.DAO,
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
  protocolType: ProtocolTypes.DAO,
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

export const LiquityDeFiProtocol: DeFiProtocol = {
  id: DeFiProtocolIds.Liquity,
  slug: "liquity",
  protocolType: ProtocolTypes.DeFi,
  project: LiquityProject,
  name: "Liquity",
  description: "DeFi protocol for borrowing against ETH & staked ETH.",
  icon: LiquityIcon,
  socials: {
    website: new URL("https://www.liquity.org/"),
    twitter: new URL("https://x.com/LiquityProtocol"),
    ens: "liquity-protocol.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-liquity-defi_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-liquity-defi_twitter_og_image.png",
};

export const UniswapDeFiProtocol: DeFiProtocol = {
  id: DeFiProtocolIds.Uniswap,
  slug: "uniswap",
  protocolType: ProtocolTypes.DeFi,
  project: UniswapProject,
  name: "Uniswap",
  description:
    "Decentralized exchange protocol for swapping crypto tokens via automated market makers.",
  icon: UniswapIcon,
  socials: {
    website: new URL("https://app.uniswap.org/"),
    twitter: new URL("https://x.com/Uniswap"),
    ens: "uniswap.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-uniswap-defi_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-uniswap-defi_twitter_og_image.png",
};

export const TaikoDeFiProtocol: DeFiProtocol = {
  id: DeFiProtocolIds.Taiko,
  slug: "taiko",
  protocolType: ProtocolTypes.DeFi,
  project: TaikoProject,
  name: "Taiko",
  description:
    "Ethereum-equivalent zkRollup protocol enabling decentralized, permissionless Layer-2 scaling secured by Ethereum.",
  icon: TaikoIcon,
  socials: {
    website: new URL("https://taiko.xyz/"),
    twitter: new URL("https://x.com/taikoxyz"),
    ens: "taiko.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-taiko-defi_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-taiko-defi_twitter_og_image.png",
};

export const CorkDeFiProtocol: DeFiProtocol = {
  id: DeFiProtocolIds.Cork,
  slug: "cork",
  protocolType: ProtocolTypes.DeFi,
  project: CorkProject,
  name: "Cork",
  description:
    "Programmable risk layer for onchain assets such as vault tokens, yield-bearing stablecoins, LSTs and RWAs.",
  icon: CorkIcon,
  socials: {
    twitter: new URL("https://x.com/Corkprotocol"),
    website: new URL("https://www.cork.tech/"),
    ens: "phoenix.cork.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-cork-defi_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-cork-defi_twitter_og_image.png",
};

export const GivethDeFiProtocol: DeFiProtocol = {
  id: DeFiProtocolIds.Giveth,
  slug: "giveth",
  protocolType: ProtocolTypes.DeFi,
  project: GivethProject,
  name: "Giveth",
  description:
    "Crypto donation and public-goods funding platform that enables zero-fee giving and community-driven impact projects.",
  icon: GivethIcon,
  socials: {
    twitter: new URL("https://x.com/giveth"),
    website: new URL("https://giveth.io/"),
    ens: "giv.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-giveth-defi_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-giveth-defi_twitter_og_image.png",
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
 * Array of supported DeFi protocols.
 *
 * Invariant: This array should contain exactly one {@link DeFiProtocol} for each DeFi protocol-related {@link ProtocolId}.
 */
export const DEFI_PROTOCOLS: DeFiProtocol[] = [
  LiquityDeFiProtocol,
  UniswapDeFiProtocol,
  TaikoDeFiProtocol,
  CorkDeFiProtocol,
  GivethDeFiProtocol,
];

/**
 * Array of supported protocols. Combines {@link DAO_PROTOCOLS} and {@link DEFI_PROTOCOLS}.
 *
 * Invariant: This array should contain exactly one {@link Protocol} for each {@link ProtocolId}.
 */
export const PROTOCOLS: Protocol[] = [...DAO_PROTOCOLS, ...DEFI_PROTOCOLS];
