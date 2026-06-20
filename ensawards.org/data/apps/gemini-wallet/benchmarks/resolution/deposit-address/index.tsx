import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";

const depositAddresses = {
    "at01-resolve-onchain-name": undefined,
    "at02-resolve-name-needing-normalization": undefined,
    "at03-resolve-offchain-eth-subname": undefined,
    "at04-resolve-offchain-dns-name": undefined,
    "at05-resolve-name-on-other-evm-chain": undefined,
    "at06-resolve-bitcoin-address": undefined,
    "at07-resolve-solana-address": undefined,
    "at08-handle-invalid-address-format": undefined,
  } as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
