import { AWARDS } from "data/awards";
import {
  type AwardedApp,
  type AwardedCustomEntity,
  type AwardedEntity,
  AwardedEntityTypes,
  type AwardedProtocol,
} from "data/awards/awarded-entity-types";
import EnsContractNamingSeason from "data/incentive-programs/ens-contract-naming-season";
import type { IncentiveProgramSlug } from "data/incentive-programs/types";

import { type Award, type AwardFinancial, AwardTypes, type EnsTokens } from "./types";

export const ensTokenFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

/**
 * Sorts {@link Award}s of {@link AwardFinancial} type.
 *
 * Prioritizes awards with higher {@link AwardFinancial.award} and,
 * in case of a tie, earlier {@link AwardFinancial.awardedAt} date.
 */
export const sortFinancialAwards = (a: AwardFinancial, b: AwardFinancial): number => {
  if (a.award > b.award) return -1;
  if (a.award < b.award) return 1;

  return a.awardedAt - b.awardedAt;
};

/**
 * Calculates the remaining award pool in ENS Contract Naming Season.
 */
export const calcRemainingContractNamingSeasonAwardPool = (): EnsTokens => {
  const ensContractNamingSeasonAwardPool = EnsContractNamingSeason.totalAwardPool;
  const contractNamingSeasonAwards = AWARDS.get(EnsContractNamingSeason.incentiveProgramSlug);

  if (!contractNamingSeasonAwards)
    throw new Error("No awards found for ENS Contract Naming Season");

  if (ensContractNamingSeasonAwardPool === undefined) {
    throw new Error("ENS Contract Naming Season total award pool is undefined");
  }

  const contractNamingSeasonFinancialAwards = contractNamingSeasonAwards.filter(
    (award) => award.type === AwardTypes.FinancialAward,
  );
  const distributedAwardPool = contractNamingSeasonFinancialAwards.reduce(
    (acc, award) => acc + award.award,
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

export const getAwardedEntityName = (awardedEntity: AwardedApp | AwardedProtocol): string => {
  switch (awardedEntity.type) {
    case AwardedEntityTypes.App:
      return awardedEntity.app.name;
    case AwardedEntityTypes.Protocol:
      return awardedEntity.protocol.name;
    default:
      const _exhaustive: never = awardedEntity;
      throw new Error(`Unsupported AwardedEntityType: ${JSON.stringify(_exhaustive)}`);
  }
};

/** Returns all awards given to a specified {@link AwardedEntity} */
export const getAwardsByEntity = (
  awardedEntity: AwardedEntity,
): Map<IncentiveProgramSlug, Award[]> => {
  const isMatchingEntity = (award: Award): boolean => {
    const awardEntityData = award.awardedEntity;

    if (awardEntityData === undefined) return false;

    switch (awardedEntity.type) {
      case AwardedEntityTypes.App:
        return (
          awardEntityData.type === AwardedEntityTypes.App &&
          awardEntityData.app.appSlug === awardedEntity.app.appSlug
        );

      case AwardedEntityTypes.Protocol:
        return (
          awardEntityData.type === AwardedEntityTypes.Protocol &&
          awardEntityData.protocol.protocolSlug === awardedEntity.protocol.protocolSlug
        );

      case AwardedEntityTypes.Custom:
        return (
          awardEntityData.type === AwardedEntityTypes.Custom &&
          awardEntityData.name === awardedEntity.name
        );

      default:
        const _exhaustive: never = awardedEntity;
        throw new Error(`Unsupported AwardedEntityType: ${JSON.stringify(_exhaustive)}`);
    }
  };

  const awardsByIncentiveProgram = new Map<IncentiveProgramSlug, Award[]>();

  Array.from(AWARDS).forEach(([incentiveProgramSlug, awards]) => {
    const matchingAwards = awards.filter(isMatchingEntity);
    if (matchingAwards.length > 0) {
      awardsByIncentiveProgram.set(incentiveProgramSlug, matchingAwards);
    }
  });

  return awardsByIncentiveProgram;
};

/**
 * Checks if a given award value is valid
 * according to the invariants defined in {@link AwardFinancial}.
 */
export const isValidAwardValue = (awardValue: EnsTokens): boolean => {
  return Number.isFinite(awardValue) && awardValue > 0;
};

/**
 * Checks if a given {@link AwardedCustomEntity.name} field is valid
 * according to the invariants defined in {@link AwardedCustomEntity}.
 */
export const isValidCustomAwardedEntityName = (name: string): boolean => {
  return name.trim().length > 0;
};
