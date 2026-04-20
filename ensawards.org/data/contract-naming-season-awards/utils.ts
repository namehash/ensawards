import { CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS } from "data/contract-naming-season-awards";
import {
  type AwardedApp,
  type AwardedCustomProject,
  type AwardedProject,
  AwardedProjectTypes,
  type AwardedProtocol,
} from "data/contract-naming-season-awards/awarded-project-types";

import { type $ENS, type ContractNamingSeasonAward } from "./types";

export const CONTRACT_NAMING_SEASON_TOTAL_AWARD_POOL: $ENS = 10000;

export const $ensFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

/**
 * Sorts {@link ContractNamingSeasonAward}s.
 *
 * Prioritizes awards with higher {@link ContractNamingSeasonAward.award} and,
 * in case of a tie, earlier {@link ContractNamingSeasonAward.awardedAt} date.
 */
export const sortContractNamingSeasonAwards = (
  a: ContractNamingSeasonAward,
  b: ContractNamingSeasonAward,
): number => {
  if (a.award > b.award) return -1;
  if (a.award < b.award) return 1;

  return a.awardedAt - b.awardedAt;
};

/**
 * Calculates the remaining award pool in ENS Contract Naming Season.
 */
export const calcRemainingAwardPool = (): $ENS => {
  const distributedAwardPool = CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS.reduce(
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
export const getAwardsByProject = (awardedProject: AwardedProject): ContractNamingSeasonAward[] => {
  const isMatchingProject = (
    award: ContractNamingSeasonAward,
    awardedProject: AwardedProject,
  ): boolean => {
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
  return CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS.filter((award) =>
    isMatchingProject(award, awardedProject),
  );
};
