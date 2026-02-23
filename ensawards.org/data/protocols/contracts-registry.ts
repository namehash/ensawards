import type { Contract } from "./contracts-types.ts";

const definedProtocolContracts: Contract[][] = [];

export function defineContracts(contracts: Contract[]): void {
  // Do not throw an explicit error to not break the app in case of a hot-reload
  if (definedProtocolContracts.includes(contracts)) {
    console.warn(
      `Attempted to add duplicate contracts array (length=${contracts.length}, first protocol=${contracts[0]?.protocol?.id ?? "unknown"})`,
    );
    return;
  }

  definedProtocolContracts.push(contracts);
}

export function getDefinedContracts(): Contract[] {
  return definedProtocolContracts.flat();
}
