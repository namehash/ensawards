import { AWARDS } from "data/awards/index.ts";
import type { Award } from "data/awards/types.ts";
import { EntityMetadataTypes } from "data/entity-metadata/types.ts";

import { getEnsAwardsBaseUrl } from "@/utils/index.ts";

import {
  type BestPracticeTarget,
  type ProtocolType,
  ProtocolTypes,
} from "../ens-best-practices/types.ts";
import { CONTRACTS } from "./contracts.ts";
import { type Contract } from "./contracts-types.ts";
import { DAO_PROTOCOLS, DEFI_PROTOCOLS, PROTOCOLS } from "./index.ts";
import type {
  DAOProtocol,
  DAOProtocolId,
  DeFiProtocol,
  DeFiProtocolId,
  Protocol,
  ProtocolId,
} from "./types.ts";

/**
 * Returns a {@link Protocol} by {@link Protocol.id}.
 *
 * This relies on the data invariant that every {@link Protocol.id} has a matching entry in {@link PROTOCOLS}.
 */
export const getProtocolById = (protocolId: ProtocolId): Protocol => {
  // biome-ignore lint/style/noNonNullAssertion: Because of invariant that PROTOCOLS array satisfies we are guaranteed to find corresponding protocol
  return PROTOCOLS.find((protocol) => protocol.id === protocolId)!;
};

/**
 * Returns a protocol by {@link Protocol.protocolSlug}.
 */
export const getProtocolBySlug = (protocolSlug: string): Protocol | undefined => {
  return PROTOCOLS.find((protocol) => protocol.protocolSlug === protocolSlug);
};

/**
 * Returns a {@link DAOProtocol} by {@link Protocol.id}.
 *
 * This relies on the data invariant that every {@link DAOProtocolId} has a matching entry in {@link DAO_PROTOCOLS}.
 */
export const getDAOByProtocolId = (protocolId: DAOProtocolId): DAOProtocol => {
  // biome-ignore lint/style/noNonNullAssertion: Because of invariant that DAO_PROTOCOLS array satisfies we are guaranteed to find corresponding protocol
  return DAO_PROTOCOLS.find((protocol) => protocol.id === protocolId)!;
};

/**
 * Returns a DAO protocol by {@link Protocol.protocolSlug}.
 */
export const getDAOByProtocolSlug = (protocolSlug: string): DAOProtocol | undefined => {
  return DAO_PROTOCOLS.find((protocol) => protocol.protocolSlug === protocolSlug);
};

/**
 * Returns a {@link DeFiProtocol} by {@link Protocol.id}.
 *
 * This relies on the data invariant that every {@link DeFiProtocolId} has a matching entry in {@link DEFI_PROTOCOLS}.
 */
export const getDeFiProtocolByProtocolId = (protocolId: DeFiProtocolId): DeFiProtocol => {
  // biome-ignore lint/style/noNonNullAssertion: Because of invariant that DEFI_PROTOCOLS array satisfies we are guaranteed to find corresponding protocol
  return DEFI_PROTOCOLS.find((protocol) => protocol.id === protocolId)!;
};

/**
 * Returns a {@link DeFiProtocol} by {@link Protocol.protocolSlug}.
 */
export const getDeFiProtocolByProtocolSlug = (protocolSlug: string): DeFiProtocol | undefined => {
  return DEFI_PROTOCOLS.find((protocol) => protocol.protocolSlug === protocolSlug);
};

const ProtocolTypeSlugMapping = new Map<string, ProtocolType>([
  ["dao", ProtocolTypes.DAO],
  ["defi", ProtocolTypes.DeFi],
]);

/**
 * Maps a protocol type slug to its {@link ProtocolType}.
 */
export const getProtocolTypeBySlug = (protocolTypeSlug: string): ProtocolType | undefined => {
  return ProtocolTypeSlugMapping.get(protocolTypeSlug);
};

/**
 * Checks if the ENS {@link BestPractice} applies to all types that are specified in {@link ProtocolTypes}.
 */
export const appliesToAllProtocols = (targets: BestPracticeTarget[]): boolean =>
  Object.values(ProtocolTypes).every((protocolType) => targets.includes(protocolType));

const PROTOCOL_CONTRACTS_BY_PROTOCOL_ID: Map<ProtocolId, Contract[]> = (() => {
  const contractsMap = new Map<ProtocolId, Contract[]>();
  for (const contract of CONTRACTS) {
    const protocolId = contract.protocol.id;
    const previousContractsList = contractsMap.get(protocolId) ?? [];
    previousContractsList.push(contract);
    contractsMap.set(protocolId, previousContractsList);
  }

  return contractsMap;
})();

/**
 * Returns all {@link Contract}s associated with a given {@link Protocol}.
 */
export const getAllProtocolContracts = (protocolId: ProtocolId): Contract[] =>
  PROTOCOL_CONTRACTS_BY_PROTOCOL_ID.get(protocolId) ?? [];

/**
 * Returns the URL to the protocol details page for a given {@link Protocol}.
 */
export const getProtocolDetailsUrl = (protocol: Protocol): URL =>
  new URL(`/protocol/${protocol.protocolSlug}`, getEnsAwardsBaseUrl());

/**
 * Returns all {@link Award}s associated with a given {@link ProtocolSlug}.
 */
// TODO: Change input type to ProtocolSlug when PR#164 is merged
export const getAwardsByProtocolSlug = (protocolSlug: Protocol["protocolSlug"]): Award[] =>
  AWARDS.filter(
    (award) =>
      award.awardedEntityMetadata?.type === EntityMetadataTypes.Protocol &&
      award.awardedEntityMetadata.protocol.protocolSlug === protocolSlug,
  );
