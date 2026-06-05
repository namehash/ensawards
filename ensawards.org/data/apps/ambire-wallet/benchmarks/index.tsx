// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import AmbireWallet from "data/apps/ambire-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import useLatestUniversalResolverProofImage from "./use-latest-universal-resolver-proof.png";

const benchmarks = {
  "display-named-smart-contracts-mainnet": {
    "mainnet-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.PartialPass,
      contributions: [
        { from: contributors.caldonia, lastUpdated: parseTimestamp("2026-04-23T19:50:24Z") },
      ],
      notes: (
        // TODO: Enhance the notes
        <div className={acceptanceTestDetailsContainerStyles}>
          <p className="w-full">Benchmark placeholder notes</p>
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.PartialPass,
      contributions: [
        { from: contributors.caldonia, lastUpdated: parseTimestamp("2026-04-23T19:50:24Z") },
      ],
      notes: (
        // TODO: Enhance the notes
        <div className={acceptanceTestDetailsContainerStyles}>
          <p className="w-full">Benchmark placeholder notes</p>
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "use-latest-universal-resolver": {
    "correctly-resolve-ensv2-test-name-address": {
      result: BenchmarkResults.Pass,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-05T17:29:00Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            The resolution was tested using the &quot;send&quot; flow. The displayed address is that
            of the latest Universal Resolver. That means Ambire Wallet is using the latest resolver,
            making a big step towards ENSv2 readiness.
          </p>
          <img
            alt="Ambire Wallet is using the latest Universal Resolver"
            src={useLatestUniversalResolverProofImage.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    },
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(AmbireWallet, benchmarks);

export default benchmarks;
