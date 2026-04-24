import type { FormatTypeOptions } from "data/shared/format-type-options.ts";

import { type BestPracticeTarget } from "../ens-best-practices/types.ts";
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
  ProtocolSlug,
  ProtocolType,
} from "./types.ts";
import { ProtocolTypes } from "./types.ts";

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
export const getProtocolBySlug = (protocolSlug: ProtocolSlug): Protocol | undefined => {
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
export const getDAOByProtocolSlug = (protocolSlug: ProtocolSlug): DAOProtocol | undefined => {
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
export const getDeFiProtocolByProtocolSlug = (
  protocolSlug: ProtocolSlug,
): DeFiProtocol | undefined => {
  return DEFI_PROTOCOLS.find((protocol) => protocol.protocolSlug === protocolSlug);
};

/**
 * Validates that the provided string is a valid {@link ProtocolType}.
 *
 * @throws if the provided string is invalid
 */
export const asProtocolType = (maybeProtocolType: string): ProtocolType => {
  switch (maybeProtocolType) {
    case "dao":
      return ProtocolTypes.DAO;

    case "defi":
      return ProtocolTypes.DeFi;

    default:
      throw new Error(`Invalid ProtocolType value: ${maybeProtocolType}`);
  }
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

/** Builds the URL for a protocol's Open Graph image.
 *
 * @returns `undefined` if `imagePath` is `undefined`,
 * else builds a URL for the protocol OG image associated with `imagePath`.
 */
export const buildProtocolOgImageUrl = (imagePath: string | undefined): URL | undefined => {
  if (!imagePath) return undefined;

  return new URL(imagePath, "https://ensawards.org/data/protocols/");
};

export const formatProtocolType = (
  protocolType: ProtocolType,
  options: Omit<FormatTypeOptions, "plural"> = { lowercase: false },
): string => {
  const { lowercase } = options;

  switch (protocolType) {
    case ProtocolTypes.DeFi:
      return lowercase ? "defi" : "DeFi";

    case ProtocolTypes.DAO:
      return lowercase ? "dao" : "DAO";

    default:
      const _exhaustive: never = protocolType;
      throw new Error(`Unsupported ProtocolType: ${_exhaustive}`);
  }
};
