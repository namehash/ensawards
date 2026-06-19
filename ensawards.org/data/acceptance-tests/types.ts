import { type BenchmarkResult, BenchmarkResults } from "data/benchmarks/types";
import type { Contribution } from "data/contributors/types";
import type { JSX } from "react";

/** A unique identifier for an acceptance test.
 *
 * @invariant Must be unique across all acceptance tests.
 * @invariant Must match {@link ENSAWARDS_SLUG_PATTERN}.
 */
export type AcceptanceTestSlug = string;

/**
 * Represents an acceptance test that an app can be evaluated against.
 */
export interface AcceptanceTest {
  /**
   * Unique identifier for the acceptance test.
   */
  acceptanceTestSlug: AcceptanceTestSlug;

  /**
   * Description of the acceptance test,
   * which should provide clear and detailed information
   * about the criteria and requirements that
   * an {@link App} must meet to pass the test.
   * This may include specific functionalities to be tested,
   * user interactions to be evaluated,
   * and any relevant technical details or considerations.
   *
   * @note The description should not include examples of
   * passed, partially passed, failed, or not applicable benchmarks,
   * there are dedicated fields for that
   * (see {@link AcceptanceTest.examplePass},
   * {@link AcceptanceTest.examplePartialPass},
   * {@link AcceptanceTest.exampleFail},
   * or {@link AcceptanceTest.exampleNotApplicable}).
   */
  description: JSX.Element;

  /**
   * Examples of benchmark results that illustrate
   * what a passing, partially passing, failing,
   * or not applicable result
   * looks like for this acceptance test.
   */
  examplePass: AcceptanceTestBenchmarkPass;
  examplePartialPass?: AcceptanceTestBenchmarkPartialPass;
  exampleFail?: AcceptanceTestBenchmarkFail;
  exampleNotApplicable?: AcceptanceTestBenchmarkNotApplicable;

  /** Sort priority within a {@link BestPractice}; lower comes first, undefined sorts last (then by slug). */
  order?: number;
}

/**
 * Represents the benchmark of an {@link AcceptanceTest} on an {@link App} against a {@link BestPractice}.
 */
export interface AcceptanceTestBenchmarkAbstract<BenchmarkResultT extends BenchmarkResult> {
  /** The result of the benchmark */
  result: BenchmarkResultT;

  /** A record of all contributors involved
   * in the addition or maintenance of the benchmark's data.
   *
   * @invariant Multiple {@link Contribution} from the same contributor
   * on the same app benchmark are not allowed.
   * When a contributor makes updates to their existing contribution,
   * they should update the `lastUpdated` timestamp of their existing `Contribution`.
   */
  contributions: [Contribution, ...Contribution[]];

  /**
   * Notes about how the benchmark result was determined,
   * which may include details about the testing process,
   * any challenges encountered, and explanations,
   * as well as a visual proof, for the final result.
   */
  notes: JSX.Element;
}

/**
 * Represents a benchmark of an {@link AcceptanceTest} on an {@link App} against a {@link BestPractice},
 * that has fully passed the acceptance test.
 */
export interface AcceptanceTestBenchmarkPass
  extends AcceptanceTestBenchmarkAbstract<typeof BenchmarkResults.Pass> {}

/**
 * Represents a benchmark of an {@link AcceptanceTest} on an {@link App} against a {@link BestPractice},
 * that has partially passed the acceptance test.
 */
export interface AcceptanceTestBenchmarkPartialPass
  extends AcceptanceTestBenchmarkAbstract<typeof BenchmarkResults.PartialPass> {}

/**
 * Represents a benchmark of an {@link AcceptanceTest} on an {@link App} against a {@link BestPractice},
 * that hasn't passed the acceptance test.
 */
export interface AcceptanceTestBenchmarkFail
  extends AcceptanceTestBenchmarkAbstract<typeof BenchmarkResults.Fail> {}

/**
 * Represents a benchmark of an {@link AcceptanceTest} on an {@link App} against a {@link BestPractice},
 * that is not applicable to the acceptance test scenario.
 * Most often, this is because the app doesn't use ENS at all,
 * in places where it should.
 */
export interface AcceptanceTestBenchmarkNotApplicable
  extends AcceptanceTestBenchmarkAbstract<typeof BenchmarkResults.NotApplicable> {}

export type AcceptanceTestBenchmarkApplicable =
  | AcceptanceTestBenchmarkPass
  | AcceptanceTestBenchmarkPartialPass
  | AcceptanceTestBenchmarkFail;

export type AcceptanceTestBenchmark =
  | AcceptanceTestBenchmarkApplicable
  | AcceptanceTestBenchmarkNotApplicable;
