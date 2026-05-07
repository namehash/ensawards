// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import WalletChanWallet from "data/apps/walletchan-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types.ts";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import exampleProofImage from "./acceptance-test-benchmark-proof-example.png";

const benchmarks: BestPracticeBenchmarks = {
  // TODO: remember to rollback to benchmarks actuall results (base it on the current prod if needed)
  "display-named-smart-contracts-mainnet": {
    "mainnet-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.Pass,
      contributions: [
        { from: contributors.apoorvlathey, lastUpdated: parseTimestamp("2026-04-18T00:00:00Z") },
      ],
      notes: (
        <div className={acceptanceTestDetailsContainerStyles}>
          <p className="w-full">Benchmark placeholder notes</p>
          <img alt="example proof" src={exampleProofImage.src} />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
    "mainnet-interactions-display-named-smart-contracts-at2": {
      result: BenchmarkResults.Pass,
      contributions: [
        { from: contributors.apoorvlathey, lastUpdated: parseTimestamp("2026-04-18T00:00:00Z") },
      ],
      notes: (
        <div className={acceptanceTestDetailsContainerStyles}>
          <p className="w-full">Benchmark placeholder notes</p>
          <img alt="example proof" src={exampleProofImage.src} />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.Pass,
      contributions: [
        { from: contributors.apoorvlathey, lastUpdated: parseTimestamp("2026-04-18T00:00:00Z") },
      ],
      notes: (
        <div className={acceptanceTestDetailsContainerStyles}>
          <p className="w-full">Benchmark placeholder notes</p>
          <img alt="example proof" src={exampleProofImage.src} />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "mock-bp-all-pending": {
    "mock-acceptance-test-1": undefined, // simulate pending benchmark
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(WalletChanWallet, benchmarks);

export default benchmarks;
