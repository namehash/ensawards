import { ACCEPTANCE_TESTS } from "data/acceptance-tests";
import type {
  AcceptanceTest,
  AcceptanceTestBenchmark,
  AcceptanceTestSlug,
} from "data/acceptance-tests/types";
import type { AppSlug } from "data/apps/types";
import {
  type AcceptanceTestBenchmarks,
  type BenchmarkResult,
  BenchmarkResults,
} from "data/benchmarks/types";
import { getAppBenchmarks } from "data/benchmarks/utils.ts";

/** Returns an {@link AcceptanceTest} by {@link AcceptanceTestSlug}. */
export const getAcceptanceTestBySlug = (slug: AcceptanceTestSlug): AcceptanceTest | undefined => {
  return ACCEPTANCE_TESTS.find((acceptanceTest) => acceptanceTest.acceptanceTestSlug === slug);
};

/** Returns all {@link AcceptanceTestBenchmark}s of an `App` by {@link AppSlug}. */
export const getAcceptanceTestBenchmarksByApp = (
  appSlug: AppSlug,
): (AcceptanceTestBenchmark | undefined)[] => {
  const appBenchmarks = getAppBenchmarks(appSlug);

  return Object.values(appBenchmarks).flatMap((acceptanceTestBenchmarks) =>
    Object.values(acceptanceTestBenchmarks),
  );
};

/**
 * Generalizes multiple `AcceptanceTestBenchmark`s into a single `BenchmarkResult` based on the following rules:
 * - If all benchmarks are {@link BenchmarkResult.Pass} or {@link BenchmarkResult.PartialPass}, returns {@link BenchmarkResult.Pass}
 * - If all benchmarks are {@link BenchmarkResult.Fail}, returns {@link BenchmarkResult.Fail}
 * - If at least one benchmark is {@link BenchmarkResult.Fail} and at least one benchmark is {@link BenchmarkResult.Pass} or {@link BenchmarkResult.PartialPass}, returns {@link BenchmarkResult.PartialPass}
 * - If all benchmarks are `undefined` (pending), returns `undefined`
 */
export const generalizeAcceptanceTestBenchmarks = (
  acceptanceTestBenchmarks: AcceptanceTestBenchmarks,
): BenchmarkResult | undefined => {
  const benchmarkResults = Object.values(acceptanceTestBenchmarks).map(
    (benchmark) => benchmark?.result,
  );

  const hasPass = benchmarkResults.some(
    (result) => result === BenchmarkResults.Pass || result === BenchmarkResults.PartialPass,
  );
  const hasFail = benchmarkResults.some((result) => result === BenchmarkResults.Fail);

  if (hasPass && hasFail) {
    return BenchmarkResults.PartialPass;
  }

  if (hasPass) {
    return BenchmarkResults.Pass;
  }

  if (hasFail) {
    return BenchmarkResults.Fail;
  }

  return undefined;
};
