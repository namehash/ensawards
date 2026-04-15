// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import MetaMaskWallet from "data/apps/metamask-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResult } from "data/benchmarks/types";
import type { BestPracticeBenchmarks } from "data/benchmarks/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";

const benchmarks = {
  // "recognize-all-ens-names": {
  //   result: BenchmarkResult.Pass,
  //   contributions: [
  //     { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-03T14:00:00Z") },
  //   ],
  // },
  "display-named-smart-contracts-mainnet": {
    result: BenchmarkResult.Pass,
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:24:39.561Z") },
    ],
  },
  "display-named-smart-contracts-l2-chains": {
    result: BenchmarkResult.Fail,
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:24:39.561Z") },
    ],
  },
  "mock-all-pending-bp2": undefined,
  "mock-all-pending-bp1": undefined,
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(MetaMaskWallet, benchmarks);

export default benchmarks;
