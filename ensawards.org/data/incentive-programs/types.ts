import type { Award, EnsTokens } from "data/awards/types";
import { ENSAWARDS_SLUG_PATTERN } from "data/shared/slugs";

/** A unique identifier for an {@link IncentiveProgram}.
 *
 * @invariant Must be unique across all incentive programs.
 * @invariant Must match {@link ENSAWARDS_SLUG_PATTERN}.
 */
export type IncentiveProgramSlug = string;

export interface IncentiveProgram {
  incentiveProgramSlug: IncentiveProgramSlug;

  /** A human-readable name for the incentive program. */
  displayName: string;

  /** A brief description of the incentive program. */
  description: string;

  /**
   * The total award pool allocated for this incentive program.
   *
   * @invariant If `totalAwardPool` is undefined,
   * the awards for this incentive program are considered to be of social recognition nature.
   * Therefore they must be of {@link AwardRecognition} type.
   */
  totalAwardPool?: EnsTokens; // TODO: Should be of type Price once Issue#1941 in ensnode is resolved
}

/**
 * Defines relations between {@link IncentiveProgramSlug} and {@link Award[]} given for the related {@link IncentiveProgram}.
 */
export type IncentiveProgramAwards = Map<IncentiveProgramSlug, Award[]>;
