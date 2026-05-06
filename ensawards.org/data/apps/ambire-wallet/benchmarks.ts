// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import AmbireWallet from "data/apps/ambire-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";

const benchmarks = {
  "display-named-smart-contracts-mainnet": {
    result: BenchmarkResults.PartialPass,
    contributions: [
      { from: contributors.caldonia, lastUpdated: parseTimestamp("2026-04-23T19:50:24Z") },
    ],
  },
  "display-named-smart-contracts-l2-chains": {
    result: BenchmarkResults.PartialPass,
    contributions: [
      { from: contributors.caldonia, lastUpdated: parseTimestamp("2026-04-23T19:50:24Z") },
    ],
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(AmbireWallet, benchmarks);

export default benchmarks;
