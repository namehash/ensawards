import { AWARDS } from "data/awards";
import type { Award } from "data/awards/types";
import { INCENTIVE_PROGRAMS } from "data/incentive-programs";
import type { IncentiveProgram, IncentiveProgramSlug } from "data/incentive-programs/types";

export const getIncentiveProgramBySlug = (
  incentiveProgramSlug: IncentiveProgramSlug,
): IncentiveProgram | undefined => {
  return INCENTIVE_PROGRAMS.find(
    (program) => program.incentiveProgramSlug === incentiveProgramSlug,
  );
};

export const getAwardsByIncentiveProgramSlug = (
  incentiveProgramSlug: IncentiveProgramSlug,
): Award[] => {
  return AWARDS.filter((award) => award.associatedIncentiveProgramSlug === incentiveProgramSlug);
};
