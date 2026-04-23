import {
  type AwardedApp,
  AwardedEntityTypes,
  type AwardedProtocol,
} from "data/awards/awarded-entity-types";
import { type EnsTokens } from "data/shared/ensTokens";

import { type Award, type AwardFinancial, AwardTypes } from "./types";

/**
 * Sorts {@link Award}s of {@link AwardFinancial} type.
 *
 * Prioritizes awards with higher {@link AwardFinancial.price} and,
 * in case of a tie, earlier {@link AwardFinancial.awardedAt} date.
 */
export const sortFinancialAwardsByPrice = (a: AwardFinancial, b: AwardFinancial): number => {
  if (a.price > b.price) return -1;
  if (a.price < b.price) return 1;

  return a.awardedAt - b.awardedAt;
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

/**
 * Checks if a given award value is valid
 * according to the invariants defined in {@link AwardFinancial}.
 */
export const isValidAwardValue = (awardValue: EnsTokens): boolean => {
  return Number.isFinite(awardValue) && awardValue > 0;
};
