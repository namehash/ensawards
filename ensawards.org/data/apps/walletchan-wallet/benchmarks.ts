// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import WalletChanWallet from "data/apps/walletchan-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types.ts";
import contributors from "data/contributors";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

const benchmarks: BestPracticeBenchmarks = {
  "display-named-smart-contracts-mainnet": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.apoorvlathey, lastUpdated: parseTimestamp("2026-04-18T00:00:00Z") },
    ],
  },
  "display-named-smart-contracts-l2-chains": {
    result: BenchmarkResults.Pass,
    contributions: [
      {
        from: contributors.apoorvlathey,
        lastUpdated: parseTimestamp("2026-04-18T00:00:00Z"),
      },
    ],
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(WalletChanWallet, benchmarks);

export default benchmarks;
