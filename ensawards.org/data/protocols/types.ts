import type { JSX } from "astro/jsx-runtime";
import type { SvgIcon } from "data/shared/svg-icon.ts";

import type { Name } from "@ensnode/ensnode-sdk";

import type { Project } from "../projects/types.ts";

export const DAOProtocolIds = {
  EnsDao: "protocol-ens-dao",
  UniswapDao: "protocol-uniswap-dao",
  NounsDao: "protocol-nouns-dao",
  ArbitrumDao: "protocol-arbitrum-dao",
  AaveDao: "protocol-aave-dao",
  TaikoDao: "protocol-taiko-dao",
  SSVNetworkDao: "protocol-ssvnetwork-dao",
} as const;

/**
 * The derived string union of possible {@link DAOProtocolIds}.
 */
export type DAOProtocolId = (typeof DAOProtocolIds)[keyof typeof DAOProtocolIds];

export const DeFiProtocolIds = {
  Liquity: "protocol-liquity-defi",
  Taiko: "protocol-taiko-defi",
  Uniswap: "protocol-uniswap-defi",
  Cork: "protocol-cork-defi",
  Giveth: "protocol-giveth-defi",
} as const;

/**
 * The derived string union of possible {@link DeFiProtocolIds}.
 */
export type DeFiProtocolId = (typeof DeFiProtocolIds)[keyof typeof DeFiProtocolIds];

/**
 * Combined {@link DAOProtocolIds} and {@link DeFiProtocolIds}.
 */
export const ProtocolIds = {
  ...DAOProtocolIds,
  ...DeFiProtocolIds,
} as const;

/**
 * The union of all {@link DAOProtocolId} and {@link DeFiProtocolId}
 * representing all supported protocols.
 */
export type ProtocolId = (typeof ProtocolIds)[keyof typeof ProtocolIds];

export const ProtocolTypes = {
  DAO: "dao",
  DeFi: "defi",
} as const;

export type ProtocolType = (typeof ProtocolTypes)[keyof typeof ProtocolTypes];

/** A unique identifier for a protocol.
 *
 * @invariant Must be unique across all protocols.
 * @invariant Must match {@link ENSAWARDS_SLUG_PATTERN}.
 */
export type ProtocolSlug = string;

export interface ProtocolAbstract<ProtocolIdT extends ProtocolId, ProtocolT extends ProtocolType> {
  id: ProtocolIdT;
  protocolSlug: ProtocolSlug;
  protocolType: ProtocolT;
  project: Project; // each protocol is associated with a broader project, which may comprise multiple apps and protocols.
  name: string;
  description: string;
  icon: SvgIcon;
  socials: {
    website: URL;
    twitter: URL;
    ens?: Name;
  };
  /** The custom Open Graph image for the protocol.
   * Specified by the relative path from `/data/protocols` to a custom Open Graph image.
   *
   * @optional If not provided, a generic fallback Open Graph image will be used for the protocol.
   * When adding a new protocol we recommend leaving this undefined.
   * The NameHash Labs team will add a custom OG image for your protocol for you.
   */
  ogImagePath?: string;

  /** The custom Twitter Open Graph image for the protocol.
   * Specified by the relative path from `/data/protocols` to a custom Twitter Open Graph image.
   *
   * @optional If not provided, a generic fallback Twitter Open Graph image will be used for the protocol.
   * When adding a new protocol we recommend leaving this undefined.
   * The NameHash Labs team will add a custom Twitter OG image for your protocol for you.
   */
  twitterOgImagePath?: string;
}

export interface DAOProtocol extends ProtocolAbstract<DAOProtocolId, typeof ProtocolTypes.DAO> {}

export interface DeFiProtocol extends ProtocolAbstract<DeFiProtocolId, typeof ProtocolTypes.DeFi> {}

export type Protocol = DAOProtocol | DeFiProtocol;
