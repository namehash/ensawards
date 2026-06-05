// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import CoinbaseWallet from "data/apps/coinbase-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import exampleProofImage from "./acceptance-test-benchmark-proof-example.png";

const benchmarks = {
  // "recognize-all-ens-names": {
  //   result: BenchmarkResults.Pass,
  //   contributions: [
  //     { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-03T14:00:00Z") },
  //   ],
  // },
  "display-named-smart-contracts-mainnet": {
    "mainnet-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.Fail,
      contributions: [
        { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:22:55.716Z") },
      ],
      notes: (
        // TODO: Enhance the notes
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">TODO: Add real benchmark notes</p>
          <img
            alt="example proof"
            src={exampleProofImage.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.Fail,
      contributions: [
        { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:22:55.716Z") },
      ],
      notes: (
        // TODO: Enhance the notes
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">TODO: Add real benchmark notes</p>
          <img
            alt="example proof"
            src={exampleProofImage.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "use-latest-universal-resolver": {
    // TODO: Add benchmarks for the "Use latest Universal Resolver" best practice
    "correctly-resolve-ensv2-test-name-address": undefined,
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(CoinbaseWallet, benchmarks);

export default benchmarks;
