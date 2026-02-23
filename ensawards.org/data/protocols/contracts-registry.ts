import type { Contract } from "./contracts-types.ts";

const definedProtocolContracts: Contract[][] = [];

export function defineContracts(contracts: Contract[]): void {
  // Do not throw an explicit error to not break the app in case of a hot-reload
  if (definedProtocolContracts.includes(contracts)) {
    console.error(`Attempted to add duplicates of contracts=[${contracts[0]},...]`);
    return;
  }

  definedProtocolContracts.push(contracts);
}

export function getDefinedContracts(): Contract[] {
  return definedProtocolContracts.flat();
}
