import type { AcceptanceTestBenchmarkAbstract } from "data/acceptance-tests/types";
import contributors from "data/contributors";
import type { Contributor } from "data/contributors/types";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { UnixTimestamp } from "enssdk";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import exampleProofImage from "./acceptance-test-benchmark-proof-example.png";
import type { BenchmarkResult } from "./types";

/** Default contributor used by {@link mockedExampleBenchmark} when none is provided. */
const DEFAULT_CONTRIBUTOR: Contributor = contributors.stevedylan;

/** Default `lastUpdated` timestamp used by {@link mockedExampleBenchmark} when none is provided. */
const DEFAULT_LAST_UPDATED: UnixTimestamp = parseTimestamp("2025-12-08T18:26:20.566Z");

interface MockedExampleBenchmarkParams<BenchmarkResultT extends BenchmarkResult> {
  /** The result of the benchmark. */
  result: BenchmarkResultT;
  /** Contributor credited for the benchmark. Defaults to {@link DEFAULT_CONTRIBUTOR}. */
  contributor?: Contributor;
  /** Timestamp of the last update to the contribution. Defaults to {@link DEFAULT_LAST_UPDATED}. */
  lastUpdated?: UnixTimestamp;
}

/**
 * Builds a placeholder {@link AcceptanceTestBenchmarkAbstract} with mocked notes and an example
 * proof image.
 *
 * Use this to reduce boilerplate while real benchmark data and proofs are still being collected.
 * Once a real benchmark is available, replace the `mockedExampleBenchmark(...)` call with an
 * explicit benchmark definition.
 */
export function mockedExampleBenchmark<BenchmarkResultT extends BenchmarkResult>({
  result,
  contributor = DEFAULT_CONTRIBUTOR,
  lastUpdated = DEFAULT_LAST_UPDATED,
}: MockedExampleBenchmarkParams<BenchmarkResultT>): AcceptanceTestBenchmarkAbstract<BenchmarkResultT> {
  return {
    result,
    contributions: [{ from: contributor, lastUpdated }],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">TODO: Add real benchmark notes</p>
        <img
          alt="example proof"
          src={exampleProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  };
}
