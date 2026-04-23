import { AWARDS } from "data/awards";
import { AwardedEntityTypes } from "data/awards/awarded-entity-types";

/**
 * Checks if a given {@link AwardedCustomEntity.name} field is valid
 * according to the invariants defined in {@link AwardedCustomEntity}.
 */
export const isValidCustomAwardedEntityName = (name: string): boolean => {
  return name.trim().length > 0;
};

/**
 * Returns an array of awards associated with a given {@link AwardedCustomEntity.name}.
 */
export const getAwardsByCustomEntityName = (customEntityName: string) =>
  AWARDS.filter(
    (award) =>
      award.awardedEntity?.type === AwardedEntityTypes.Custom &&
      award.awardedEntity.name === customEntityName,
  );
