import type { AcceptanceTestBenchmark, AcceptanceTestSlug } from "data/acceptance-tests/types";
import type { Contribution } from "data/contributors/types.ts";

export const BenchmarkResults = {
  Pass: "passed",
  PartialPass: "partially-passed",
  Fail: "failed",
} as const;

export type BenchmarkResult = (typeof BenchmarkResults)[keyof typeof BenchmarkResults];

//TODO: Maybe this type should be skipped altogehter and fully replaced with `AcceptanceTestBenchmark`?
// Not sure about that yet
/**
 * Represents the benchmark of an {@link App} against a {@link BestPractice}.
 *
 * @invariant An explicit key for each {@link AcceptanceTestSlug} should be added to this `Record`
 * for each {@link AcceptanceTest} available on a given best practice.
 * If an app doesn't have a benchmark completed for an `AcceptanceTest` then the benchmark should be explicitly set to `undefined`.
 * Otherwise, the value should be an `AcceptanceTestBenchmark` describing how the related app performed for the `AcceptanceTest`.
 */
export type AppBenchmark = Record<AcceptanceTestSlug, AcceptanceTestBenchmark | undefined>;
