import type { JSX } from "astro/jsx-runtime";

import type { Name } from "@ensnode/ensnode-sdk";

import { type ProtocolType, ProtocolTypes } from "@/types/bestPractices.ts";
import type { Project } from "@/types/projects.ts";

export const DAOProtocolIds = {
  EnsDao: "protocol-ens-dao",
  UniswapDao: "protocol-uniswap-dao",
  NounsDao: "protocol-nouns-dao",
  ArbitrumDao: "protocol-arbitrum-dao",
  AaveDao: "protocol-aave-dao",
  TaikoDao: "protocol-taiko-dao",
} as const;

/**
 * The derived string union of possible {@link DAOProtocolIds}.
 */
export type DAOProtocolId = (typeof DAOProtocolIds)[keyof typeof DAOProtocolIds];

export const DefiProtocolIds = {
  Liquity: "protocol-liquity-defi",
  Taiko: "protocol-taiko-defi",
  Uniswap: "protocol-uniswap-defi",
} as const;

/**
 * The derived string union of possible {@link DefiProtocolIds}.
 */
export type DefiProtocolId = (typeof DefiProtocolIds)[keyof typeof DefiProtocolIds];

/**
 * Combined {@link DAOProtocolIds} and {@link DefiProtocolIds}.
 */
export const ProtocolIds = {
  ...DAOProtocolIds,
  ...DefiProtocolIds,
} as const;

/**
 * The union of all {@link DAOProtocolId} and {@link DefiProtocolId}
 * representing all supported protocols.
 */
export type ProtocolId = (typeof ProtocolIds)[keyof typeof ProtocolIds];

export interface ProtocolAbstract<ProtocolIdT extends ProtocolId, ProtocolT extends ProtocolType> {
  id: ProtocolIdT;
  slug: string;
  protocolType: ProtocolT;
  project: Project; // each protocol belongs to a single project.
  name: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  socials: {
    website: URL;
    twitter: URL;
    ens?: Name;
  };
  ogImagePath?: string;
  twitterOgImagePath?: string;
}

export interface DAOProtocol extends ProtocolAbstract<DAOProtocolId, typeof ProtocolTypes.Dao> {}

export interface DefiProtocol extends ProtocolAbstract<DefiProtocolId, typeof ProtocolTypes.Defi> {}

export type Protocol = DAOProtocol | DefiProtocol;
