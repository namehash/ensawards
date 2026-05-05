// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import BlockscoutExplorer from "data/apps/blockscout-explorer";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import exampleProofImage from "./acceptance-test-benchmark-proof-example.png";

// TODO: Some of these are placeholder benchmarks just to show how the new benchmarking system works,
const benchmarks = {
  // "recognize-all-ens-names": {
  //   result: BenchmarkResults.Pass,
  //   contributions: [
  //     { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-03T14:00:00Z") },
  //   ],
  // },
  "display-named-smart-contracts-mainnet": {
    "mainnet-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.Pass,
      contributions: [
        { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:28:32.410Z") },
      ],
      notes: (
        <div>
          <p>Benchmark placeholder notes</p>
          <img alt="example proof" src={exampleProofImage.src} />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
    "mainnet-interactions-display-named-smart-contracts-at2": {
      result: BenchmarkResults.Pass,
      contributions: [
        { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:28:32.410Z") },
      ],
      notes: (
        <div>
          <p>Benchmark placeholder notes</p>
          <img alt="example proof" src={exampleProofImage.src} />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.Fail,
      contributions: [
        { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:28:32.410Z") },
      ],
      notes: (
        <div>
          <p>Benchmark placeholder notes</p>
          <img alt="example proof" src={exampleProofImage.src} />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "mock-bp-all-pending-2": {
    "mock-acceptance-test-3": undefined,
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(BlockscoutExplorer, benchmarks);

export default benchmarks;
