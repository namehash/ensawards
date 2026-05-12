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
 * Generalizes multiple `AcceptanceTestBenchmark`s into a single `BenchmarkResult`
 * based on the following rules:
 * - Returns {@link BenchmarkResults.Pass} if all defined benchmarks
 * are {@link BenchmarkResults.Pass} or {@link BenchmarkResults.PartialPass}
 *
 * - Returns {@link BenchmarkResults.Fail} if all defined benchmarks
 * are {@link BenchmarkResults.Fail},
 *
 * - Returns {@link BenchmarkResults.PartialPass} if:
 *     - at least one defined benchmark is {@link BenchmarkResults.Fail}
 *       and at least one defined benchmark is
 *       {@link BenchmarkResults.Pass} or {@link BenchmarkResults.PartialPass},
 *     - or all defined benchmarks are {@link BenchmarkResults.PartialPass},
 * -  returns `undefined` if all benchmarks are `undefined` (pending).
 */
export const generalizeAcceptanceTestBenchmarks = (
  acceptanceTestBenchmarks: AcceptanceTestBenchmarks,
): BenchmarkResult | undefined => {
  const benchmarkResults = Object.values(acceptanceTestBenchmarks).map(
    (benchmark) => benchmark?.result,
  );

  // For now, we'll explicitly treat pass and partial pass equally
  const hasPass = benchmarkResults.some(
    (result) => result === BenchmarkResults.Pass || result === BenchmarkResults.PartialPass,
  );
  const hasFail = benchmarkResults.some((result) => result === BenchmarkResults.Fail);

  const allPartialPass = benchmarkResults.every(
    (result) => result === BenchmarkResults.PartialPass,
  );

  if ((hasPass && hasFail) || allPartialPass) {
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
