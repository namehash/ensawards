import type { AccountId } from "@ensnode/ensnode-sdk";
import { mainnet } from "viem/chains";

/**
 * Benchmarkers are identified by their AccountId (chainId + address).
 * Define all benchmarkers here for reuse across app benchmarks.
 */
export const benchmarkers = {
  stevedylandev: {
    chainId: mainnet.id,
    address: "0x464d18C13b4420E07eE85d5E6Fddfc3078eE9e23",
  } as AccountId,
} as const satisfies Record<string, AccountId>;
