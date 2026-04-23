import { AwardTypes } from "data/awards/types";
import EnsContractNamingSeason from "data/incentive-programs/ens-contract-naming-season";
import { getAwardsByIncentiveProgramSlug } from "data/incentive-programs/utils";
import type { EnsTokens } from "data/shared/ensTokens";

/**
 * Calculates the remaining award pool in ENS Contract Naming Season.
 */
export const calcRemainingContractNamingSeasonAwardPool = (): EnsTokens => {
  const ensContractNamingSeasonAwardPool = EnsContractNamingSeason.totalAwardPool;
  const contractNamingSeasonAwards = getAwardsByIncentiveProgramSlug(
    EnsContractNamingSeason.incentiveProgramSlug,
  );

  if (!contractNamingSeasonAwards)
    throw new Error("No awards found for ENS Contract Naming Season");

  const contractNamingSeasonFinancialAwards = contractNamingSeasonAwards.filter(
    (award) => award.type === AwardTypes.FinancialAward,
  );
  const distributedAwardPool = contractNamingSeasonFinancialAwards.reduce(
    (acc, award) => acc + award.price,
    0,
  );

  const remainingAwardPool = ensContractNamingSeasonAwardPool - distributedAwardPool;

  if (remainingAwardPool < 0) {
    throw new Error(
      `Invariant(AwardDistributions): Remaining award pool cannot be negative, but was ${remainingAwardPool} instead`,
    );
  }

  return remainingAwardPool;
};
