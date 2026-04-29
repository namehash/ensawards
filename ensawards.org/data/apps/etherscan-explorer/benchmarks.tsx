// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import exampleProofImage from "data/apps/blockscout-explorer/acceptance-test-benchmark-proof-example.png";
import EtherscanExplorer from "data/apps/etherscan-explorer";
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
    "mainnet-interactions-display-named-smart-contracts": undefined, // simulate pending benchmark
    "mainnet-interactions-display-named-smart-contracts-at2": undefined, // simulate both benchmarks pending
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.Fail,
      contributions: [
        { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:26:20.566Z") },
      ],
      notes: (
        <div>
          <p>Benchmark placeholder notes</p>
          <img alt="example proof" src={exampleProofImage.src} />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(EtherscanExplorer, benchmarks);

export default benchmarks;
