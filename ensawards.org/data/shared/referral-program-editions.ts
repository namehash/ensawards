import {
  ReferralProgramAwardModels,
  type ReferralProgramEditionSummary,
  type ReferralProgramEditionSummaryPieSplit,
  type ReferralProgramEditionSummaryRevShareLimit,
} from "@namehash/ens-referrals/v1";

/**
 * Checks if the given {@link ReferralProgramEditionSummary} is of type {@link ReferralProgramEditionSummaryPieSplit}.
 */
export const isValidReferralProgramEditionSummaryPieSplit = (
  maybeEditionSummaryPieSplit: ReferralProgramEditionSummary,
): maybeEditionSummaryPieSplit is ReferralProgramEditionSummaryPieSplit => {
  return maybeEditionSummaryPieSplit.awardModel === ReferralProgramAwardModels.PieSplit;
};

/**
 * Checks if the given {@link ReferralProgramEditionSummary} is of type {@link ReferralProgramEditionSummaryRevShareLimit}.
 */
export const isValidReferralProgramEditionSummaryRevShareLimit = (
  maybeEditionSummaryRevShareLimit: ReferralProgramEditionSummary,
): maybeEditionSummaryRevShareLimit is ReferralProgramEditionSummaryRevShareLimit => {
  return maybeEditionSummaryRevShareLimit.awardModel === ReferralProgramAwardModels.RevShareLimit;
};
