// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import EtherscanExplorer from "data/apps/etherscan-explorer";
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
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:26:20.566Z") },
    ],
  },
  "display-named-smart-contracts-l2-chains": {
    result: BenchmarkResult.Fail,
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:26:20.566Z") },
    ],
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(EtherscanExplorer, benchmarks);

export default benchmarks;
