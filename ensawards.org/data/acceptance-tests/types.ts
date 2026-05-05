import type { BenchmarkResult } from "data/benchmarks/types";
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
  acceptanceTestSlug: AcceptanceTestSlug;
  name: string;
  description: JSX.Element;
}

/**
 * Represents the benchmark of an {@link AcceptanceTest} on an {@link App} against a {@link BestPractice}.
 */
export interface AcceptanceTestBenchmark {
  /** The result of the benchmark */
  result: BenchmarkResult;

  /** A record of all contributors involved in the addition or maintenance of the benchmark's data.
   *
   * @invariant Multiple {@link Contribution} from the same contributor on the same app benchmark are not allowed.
   * When a contributor makes updates to their existing contribution,
   * they should update the `lastUpdated` timestamp of their existing `Contribution`.
   */
  contributions: [Contribution, ...Contribution[]];

  /**
   * Notes about how the benchmark result was determined,
   * which may include details about the testing process,
   * any challenges encountered, and explanations, as well as proof, for the final result.
   */
  // TODO: Maybe this element should be made stricter with a dedicated template.
  // See here for more details: https://namehash.slack.com/archives/C086Z6FNBHN/p1777477037902549?thread_ts=1776097255.913659&cid=C086Z6FNBHN
  notes: JSX.Element;
}
