import type { Organization } from "@/types/organizations.ts";
import type { Name } from "@ensnode/ensnode-sdk";
import type { Address, Chain } from "viem";

export const ContractTypes = {
  Dao: "DAO",
  Defi: "DeFi",
} as const;

/**
 * ContractType is the derived string union of possible identifiers of established contract types.
 */
export type ContractType = (typeof ContractTypes)[keyof typeof ContractTypes];

export const ContractSubtypes = {
  Governance: "Governance",
  DefiApp: "DeFi App",
  Utility: "Utility",
} as const;

/**
 * ContractSubtype is the derived string union of possible identifiers of established contract subtypes.
 */
export type ContractSubtype = (typeof ContractSubtypes)[keyof typeof ContractSubtypes];

/**
 * Describes metadata fields of a named contract.
 *
 * Invariant: If {@link Contract.name} is undefined, the contract cannot contain metadata.
 */
export interface ContractMetadata {
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
}

/**
 * Describes data connecting the smart contract to its chain.
 */
export interface ContractRef {
  chain: Chain;
  address: Address;
}

/**
 * Cached ENS contract data including the possible Primary Name, Forward Names and the metadata.
 *
 * TODO: improve docs
 *
 * Invariants:
 * - If {@link CachedEnsProfile.primaryName} is defined it must be a non-empty normalized ENS name.
 * - If {@link CachedEnsProfile.forwardNames} is defined it must be a list of non-empty normalized ENS names.
 * - If {@link CachedEnsProfile.ensMetadata} is defined then
 *   either {@link CachedEnsProfile.primaryName} or {@link CachedEnsProfile.forwardNames} must be defined and not null.
 */
export interface CachedEnsProfile {
  primaryName: Name | null; //TODO: Use `NormalizedName` type from ensnode-sdk once new version is published;
  forwardNames?: [Name, ...Name[]];
  ensMetadata?: ContractMetadata;
}

/**
 * Describes the smart contract.
 */
export interface Contract {
  org: Organization;
  type: ContractType;
  subtype: ContractSubtype;
  contract: ContractRef;
  codeName: string;
  cachedEnsProfile: CachedEnsProfile | null;
}
