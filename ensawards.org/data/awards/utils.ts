import { AWARDS } from "data/awards";
import {
  type AwardedApp,
  type AwardedCustomProject,
  type AwardedProject,
  AwardedProjectTypes,
  type AwardedProtocol,
} from "data/awards/awarded-project-types";
import ContractNamingCategory from "data/ens-best-practices/contract-naming";
import type { BestPracticeCategory, BestPracticeCategorySlug } from "data/ens-best-practices/types";

import { type $ENS, type Award, type AwardMoneyPrize, AwardTypes } from "./types";

export const CONTRACT_NAMING_SEASON_TOTAL_AWARD_POOL: $ENS = 10000;

export const $ensFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

/**
 * Sorts {@link Award}s of {@link AwardMoneyPrize} type.
 *
 * Prioritizes awards with higher {@link AwardMoneyPrize.award} and,
 * in case of a tie, earlier {@link AwardMoneyPrize.awardedAt} date.
 */
export const sortMoneyPrizeAwards = (a: AwardMoneyPrize, b: AwardMoneyPrize): number => {
  if (a.award > b.award) return -1;
  if (a.award < b.award) return 1;

  return a.awardedAt - b.awardedAt;
};

/**
 * Calculates the remaining award pool in ENS Contract Naming Season.
 */
export const calcRemainingContractNamingSeasonAwardPool = (): $ENS => {
  const contractNamingSeasonAwards = AWARDS[ContractNamingCategory.categorySlug].filter(
    (award) => award.type === AwardTypes.MoneyPrize,
  );
  const distributedAwardPool = contractNamingSeasonAwards.reduce(
    (acc, award) => acc + award.award,
    0,
  );

  const remainingAwardPool = CONTRACT_NAMING_SEASON_TOTAL_AWARD_POOL - distributedAwardPool;

  if (remainingAwardPool < 0) {
    throw new Error(
      `Invariant(AwardDistributions): Remaining award pool cannot be negative, but was ${remainingAwardPool} instead`,
    );
  }

  return remainingAwardPool;
};

export const getAwardedProjectName = (awardedProject: AwardedApp | AwardedProtocol): string => {
  switch (awardedProject.type) {
    case AwardedProjectTypes.App:
      return awardedProject.app.name;
    case AwardedProjectTypes.Protocol:
      return awardedProject.protocol.name;
    default:
      return "Unknown Project";
  }
};

/** Returns all awards for a given project */
export const getAwardsByProject = (
  awardedProject: AwardedProject,
): Map<BestPracticeCategorySlug, Award[]> => {
  const isMatchingProject = (award: Award, awardedProject: AwardedProject): boolean => {
    if (award.project === undefined) return false;

    if (award.project.type !== awardedProject.type) return false;

    // NOTE: Type casting is necessary due to compiler limitations,
    // but it's safe because of the type check above.
    switch (awardedProject.type) {
      case AwardedProjectTypes.App:
        return (award.project as AwardedApp).app.appSlug === awardedProject.app.appSlug;

      case AwardedProjectTypes.Protocol:
        return (
          (award.project as AwardedProtocol).protocol.protocolSlug ===
          awardedProject.protocol.protocolSlug
        );

      case AwardedProjectTypes.Custom:
      default:
        return (award.project as AwardedCustomProject).name === awardedProject.name;
    }
  };

  const awardsByCategory = new Map<BestPracticeCategorySlug, Award[]>();

  Object.entries(AWARDS).forEach(([categorySlug, awards]) => {
    const matchingAwards = awards.filter((award) => isMatchingProject(award, awardedProject));
    if (matchingAwards.length > 0) {
      awardsByCategory.set(categorySlug as BestPracticeCategorySlug, matchingAwards);
    }
  });

  return awardsByCategory;
};

export const getAwardCategoryLabel = (BestPracticeCategory: BestPracticeCategory): string => {
  switch (BestPracticeCategory.categorySlug) {
    case ContractNamingCategory.categorySlug:
      return "ENS Contract Naming Season";
    default:
      return BestPracticeCategory.name;
  }
};
