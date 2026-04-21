import { type App } from "data/apps/types";
import { type Protocol } from "data/protocols/types";

export const AwardedEntityTypes = {
  App: "app",
  Protocol: "protocol",
  Custom: "custom",
} as const;

export type AwardedEntityType = (typeof AwardedEntityTypes)[keyof typeof AwardedEntityTypes];

export interface AwardedEntityAbstract<TypeT extends AwardedEntityType> {
  /** The type of the awarded entity. */
  type: TypeT;
}

/**
 * Defines an {@link App} that has been awarded for the active participation
 * in one of our {@link IncentiveProgram}s.
 */
export interface AwardedApp extends AwardedEntityAbstract<typeof AwardedEntityTypes.App> {
  app: App;
}

/**
 * Defines a {@link Protocol} that has been awarded for the active participation
 * in one of our {@link IncentiveProgram}s.
 */
export interface AwardedProtocol extends AwardedEntityAbstract<typeof AwardedEntityTypes.Protocol> {
  protocol: Protocol;
}

/**
 * Defines a custom entity that has been awarded for the active participation
 * in one of our {@link IncentiveProgram}s, but is not yet represented in ENSAwards's data.
 */
export interface AwardedCustomEntity
  extends AwardedEntityAbstract<typeof AwardedEntityTypes.Custom> {
  /** The name of the awarded entity.
   *
   * @invariant The name must be a non-empty string that is not just whitespace.
   */
  name: string;
  /** Optional link to the entity's website or relevant page. */
  link?: URL;
}

/**
 * Defines an entity that has been awarded for the active participation
 * in one of our {@link IncentiveProgram}s.
 */
export type AwardedEntity = AwardedApp | AwardedProtocol | AwardedCustomEntity;
