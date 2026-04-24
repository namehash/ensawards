import { type EnsTokens } from "data/shared/ensTokens";
import { ENSAWARDS_SLUG_PATTERN } from "data/shared/slugs";

/** A unique identifier for an {@link IncentiveProgram}.
 *
 * @invariant Must be unique across all incentive programs.
 * @invariant Must match {@link ENSAWARDS_SLUG_PATTERN}.
 */
export type IncentiveProgramSlug = string;

export const IncentiveProgramTypes = {
  AwardPool: "award-pool",
} as const;

export type IncentiveProgramType =
  (typeof IncentiveProgramTypes)[keyof typeof IncentiveProgramTypes];

/**
 * Represents an incentive program with a defined total award pool of financial awards.
 */
export interface IncentiveProgramAwardPool {
  type: typeof IncentiveProgramTypes.AwardPool;
  incentiveProgramSlug: IncentiveProgramSlug;

  /** A human-readable name for the incentive program. */
  displayName: string;

  /** A brief description of the incentive program. */
  description: string;

  /**
   * The total award pool allocated for this incentive program.
   */
  totalAwardPool: EnsTokens; // TODO: Should be of type Price once Issue#1941 in ensnode is resolved
}

export type IncentiveProgram = IncentiveProgramAwardPool;
