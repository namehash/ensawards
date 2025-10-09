import type {Address, Chain} from "viem";
import type {Organization} from "@/types/organizations.ts";

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

//TODO: is this the correct way to describe an invariant (following some earlier instructions from ensadmin)
//TODO: improve this when more info is gained
/**
 * Describes metadata fields of a named contract.
 *
 * @throws If the unnamed contract contains metadata
 */
export interface ContractMetadata {
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
}

/**
 * Describes the smart contract.
 */
export interface Contract {
  org: Organization;
  type: ContractType;
  subtype: ContractSubtype;
  address: Address;
  chain: Chain;
  codeName: string;
  name?: string;
  metadata?: ContractMetadata;
}
