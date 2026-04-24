import type { EnsAwardsScore } from "data/shared/ens-awards-score.ts";

export const getScoreColor = (score: EnsAwardsScore): string =>
  score > 75 ? "emerald-600" : score > 35 ? "amber-600" : "red-600";
