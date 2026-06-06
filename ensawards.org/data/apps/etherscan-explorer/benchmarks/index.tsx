// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import EtherscanExplorer from "data/apps/etherscan-explorer";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import exampleProofImage from "./acceptance-test-benchmark-proof-example.png";
import useLatestUniversalResolverProofImage from "./use-latest-universal-resolver-proof.png";

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
        { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:26:20.566Z") },
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
        { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-08T18:26:20.566Z") },
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
  "ensv2-ready-resolution": {
    "correctly-resolve-ensv2-test-name-address": {
      result: BenchmarkResults.Fail,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-05T14:45:00Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            The attempted resolution of the test name returned the address of the old Universal
            Resolver. That means Etherscan is still using the old resolver and needs an update in
            order to be ready for ENSv2.
          </p>
          <img
            alt="Etherscan is still using the old Universal Resolver"
            src={useLatestUniversalResolverProofImage.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    },
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(EtherscanExplorer, benchmarks);

export default benchmarks;
