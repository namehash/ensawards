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
import { CategoryStatuses } from "data/ens-best-practices/types";
import { getBestPracticeBySlug } from "data/ens-best-practices/utils";

/** Returns an {@link AcceptanceTest} by {@link AcceptanceTestSlug}. */
export const getAcceptanceTestBySlug = (slug: AcceptanceTestSlug): AcceptanceTest | undefined => {
  return ACCEPTANCE_TESTS.find((acceptanceTest) => acceptanceTest.acceptanceTestSlug === slug);
};

/**
 * Returns all {@link AcceptanceTestBenchmark}s of an `App` by {@link AppSlug}
 * for all {@link BestPractice}s belonging to an `Active` {@link BestPracticeCategory}.
 */
export const getAcceptanceTestBenchmarksByApp = (
  appSlug: AppSlug,
): (AcceptanceTestBenchmark | undefined)[] => {
  const appBenchmarks = getAppBenchmarks(appSlug);

  const benchmarksInActiveBestPracticeCategories = Object.entries(appBenchmarks).filter(
    ([bestPracticeSlug, _]) => {
      const bestPractice = getBestPracticeBySlug(bestPracticeSlug);

      if (bestPractice === undefined) {
        throw new Error(
          `Invariant(BestPracticeSlug): Best practice with slug ${bestPracticeSlug} is not defined`,
        );
      }

      return bestPractice.category.status === CategoryStatuses.Active;
    },
  );

  return benchmarksInActiveBestPracticeCategories.flatMap(([_, acceptanceTestBenchmarks]) =>
    Object.values(acceptanceTestBenchmarks),
  );
};

/**
 * Generalizes multiple `AcceptanceTestBenchmark`s into a single `BenchmarkResult`
 * based on the following rules:
 * - Returns {@link BenchmarkResults.Pass} if:
 *     - in all defined benchmarks there is at least one
 *       {@link BenchmarkResults.Pass}
 *     - and all others are {@link BenchmarkResults.Pass} or {@link BenchmarkResults.PartialPass}
 *
 * - Returns {@link BenchmarkResults.Fail} if:
 *     - in all defined benchmarks there is at least one
 *       {@link BenchmarkResults.Fail}
 *     - and all others are {@link BenchmarkResults.Fail} or {@link BenchmarkResults.NotApplicable}
 *
 * - Returns {@link BenchmarkResults.PartialPass} if:
 *     - at least one defined benchmark is {@link BenchmarkResults.Fail}
 *       and at least one defined benchmark is
 *       {@link BenchmarkResults.Pass} or {@link BenchmarkResults.PartialPass},
 *     - or all defined benchmarks are {@link BenchmarkResults.PartialPass},
 *
 * - Returns {@link BenchmarkResults.NotApplicable} if:
 *    - all defined benchmarks are {@link BenchmarkResults.NotApplicable}
 *
 * -  Returns `undefined` if all benchmarks are `undefined` (pending).
 */
export const generalizeAcceptanceTestBenchmarks = (
  acceptanceTestBenchmarks: AcceptanceTestBenchmarks,
): BenchmarkResult | undefined => {
  const benchmarkResults = Object.values(acceptanceTestBenchmarks).map(
    (benchmark) => benchmark?.result,
  );

  const definedBenchmarkResults = benchmarkResults.filter((result) => result !== undefined);

  if (definedBenchmarkResults.length === 0) {
    return undefined;
  }

  const allDefinedBenchmarksPassPartially = definedBenchmarkResults.every(
    (result) => result === BenchmarkResults.PartialPass,
  );

  if (allDefinedBenchmarksPassPartially) {
    return BenchmarkResults.PartialPass;
  }

  const allDefinedBenchmarksNotApplicable = definedBenchmarkResults.every(
    (result) => result === BenchmarkResults.NotApplicable,
  );

  if (allDefinedBenchmarksNotApplicable) {
    return BenchmarkResults.NotApplicable;
  }

  // For now, we'll explicitly treat pass and partial pass equally
  // (For cases where not all benchmarks are partial pass)
  const allDefinedBenchmarksPass = definedBenchmarkResults.every(
    (result) => result === BenchmarkResults.Pass || result === BenchmarkResults.PartialPass,
  );

  if (allDefinedBenchmarksPass) {
    return BenchmarkResults.Pass;
  }

  // For now, we'll explicitly treat fail and not applicable equally
  // (For cases where not all benchmarks are not applicable)
  const allDefinedBenchmarksFail = definedBenchmarkResults.every(
    (result) => result === BenchmarkResults.Fail || result === BenchmarkResults.NotApplicable,
  );

  if (allDefinedBenchmarksFail) {
    return BenchmarkResults.Fail;
  }

  return BenchmarkResults.PartialPass;
};
