// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import CoinbaseWallet from "data/apps/coinbase-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";

const benchmarks = {
  // "recognize-all-ens-names": {
  //   result: BenchmarkResults.Pass,
  //   contributions: [
  //     { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-03T14:00:00Z") },
  //   ],
  // },
  "display-named-smart-contracts-mainnet": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:22:55.716Z") },
    ],
  },
  "display-named-smart-contracts-l2-chains": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:22:55.716Z") },
    ],
  },
  "mock-all-pending-bp2": undefined,
  "mock-all-pending-bp1": undefined,
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(CoinbaseWallet, benchmarks);

export default benchmarks;
