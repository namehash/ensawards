// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import MetaMaskWallet from "data/apps/metamask-wallet";
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
  // TODO: remember to rollback to benchmarks actuall results (base it on the current prod if needed)
  "display-named-smart-contracts-mainnet": {
    "mainnet-interactions-display-named-smart-contracts": undefined, // simulate all benchmarks pending
    "mainnet-interactions-display-named-smart-contracts-at2": undefined, // simulate all benchmarks pending
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": undefined, // simulate all benchmarks pending
  },
  "mock-bp-all-pending": {
    "mock-acceptance-test-1": undefined, // simulate pending benchmark
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(MetaMaskWallet, benchmarks);

export default benchmarks;
