import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";

const depositAddresses = {
  "correctly-resolve-direct-onchain-subname-address": undefined,
  "correctly-resolve-names-requiring-normalization": undefined,
  "correctly-implement-ccip-read-for-eth-subnames": undefined,
  "correctly-implement-ccip-read-for-offchain-dns-names": undefined,
  "correctly-resolve-names-for-different-evm-chains": undefined,
  "correctly-resolve-names-for-bitcoin": undefined,
  "correctly-resolve-names-for-solana": undefined,
  "correctly-handle-resolution-for-chains-with-invalid-address-formatting": undefined,
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
