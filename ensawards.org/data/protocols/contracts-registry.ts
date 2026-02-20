import type { Contract } from "./contracts-types.ts";

const definedProtocolContracts: Contract[][] = [];

export function defineContracts(contracts: Contract[]): void {
  definedProtocolContracts.push(contracts);
}

export function getDefinedContracts(): Contract[] {
  return definedProtocolContracts.flat();
}
