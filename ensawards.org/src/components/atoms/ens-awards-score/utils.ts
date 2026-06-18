import { type EnsAwardsScore } from "data/shared/ens-awards-score";

/**
 * Score threshold at or above which the score is considered "significant"
 * and the UX optimization for small scores is not applied.
 */
export const SIGNIFICANT_SCORE_THRESHOLD = 33;

/**
 * Minimum fill percentage for the score bar to ensure
 * it's visible even for very low scores (including 0).
 */
export const MIN_VISIBLE_SCOREBAR_FILL = 10;

export const calcScoreBarFill = (score: EnsAwardsScore): number => {
  // Ensure that significant scores
  // are always correctly represented on the bar
  if (score >= SIGNIFICANT_SCORE_THRESHOLD) {
    return score;
  }

  // Calculate the scaled fill based on the score
  // Map [0, SIGNIFICANT_SCORE_THRESHOLD) into [MIN_VISIBLE_SCOREBAR_FILL, SIGNIFICANT_SCORE_THRESHOLD)
  return Math.round(
    MIN_VISIBLE_SCOREBAR_FILL +
      (score / SIGNIFICANT_SCORE_THRESHOLD) *
        (SIGNIFICANT_SCORE_THRESHOLD - MIN_VISIBLE_SCOREBAR_FILL),
  );
};

export const getScoreColor = (score: EnsAwardsScore): string =>
  score > 75 ? "emerald-600" : score > 35 ? "amber-600" : "red-600";
