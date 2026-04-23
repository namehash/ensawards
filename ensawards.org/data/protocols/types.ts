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
  /** Relative path from `/data/protocols` to the Open Graph image for the protocol.
   *
   * @optional It's not required to provide an OG image yourself.
   * We have a fallback mechanism in place, so the SEO of Protocol's details page won't be degraded.
   * In fact, we recommend leaving it empty. When your PR with a new {@link Protocol} gets accepted,
   * the NameHash Labs team will follow it up, providing customized OG images.
   */
  ogImagePath?: string;

  /** Relative path from `/data/protocols` to the Twitter Open Graph image for the protocol.
   *
   * @optional It's not required to provide a Twitter OG image yourself.
   * We have a fallback mechanism in place, so the SEO of Protocol's details page won't be degraded.
   * In fact, we recommend leaving it empty. When your PR with a new {@link Protocol} gets accepted,
   * the NameHash Labs team will follow it up, providing customized OG images.
   */
  twitterOgImagePath?: string;
}

export interface DAOProtocol extends ProtocolAbstract<DAOProtocolId, typeof ProtocolTypes.DAO> {}

export interface DeFiProtocol extends ProtocolAbstract<DeFiProtocolId, typeof ProtocolTypes.DeFi> {}

export type Protocol = DAOProtocol | DeFiProtocol;
