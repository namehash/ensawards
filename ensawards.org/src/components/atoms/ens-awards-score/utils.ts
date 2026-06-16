import { type EnsAwardsScore } from "data/shared/ens-awards-score";

/**
 * Score threshold above which the score is considered "significant"
 * and the UX optimization for small scores is not applied to it.
 */
export const SIGNIFICANT_SCORE_THRESHOLD = 33;

export const calculateScoreBarFill = (score: EnsAwardsScore): number => {
  // Ensure that significant scores
  // are always correctly represented on the bar
  if (score >= SIGNIFICANT_SCORE_THRESHOLD) {
    return score;
  }

  // Minimal fill to ensure the bar is visible even for very low scores
  let baseFill = 10;

  // Calculate the fill based on the score
  const resultFill = Math.round(baseFill + (score / 100) * (100 - baseFill));

  return resultFill;
};

export const getScoreColor = (score: EnsAwardsScore): string =>
  score > 75 ? "emerald-600" : score > 35 ? "amber-600" : "red-600";
