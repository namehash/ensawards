import type { ENSNamespaceId } from "@ensnode/datasources";
import type { Address } from "viem";

export interface EnsAdvocateDetailsPageProps {
  address: Address;
}
export interface AdvocateProfileProps {
  address: Address;
  namespaceId: ENSNamespaceId;
}
