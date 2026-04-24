import type { App } from "data/apps/types";
import type { Protocol } from "data/protocols/types";

export const EntityMetadataTypes = {
  App: "app",
  Protocol: "protocol",
  Custom: "custom",
} as const;

export type EntityMetadataType = (typeof EntityMetadataTypes)[keyof typeof EntityMetadataTypes];

export interface EntityMetadataAbstract<TypeT extends EntityMetadataType> {
  /** The type of the entity metadata. */
  type: TypeT;
}

/**
 * Defines an {@link App} metadata.
 */
export interface AppMetadata extends EntityMetadataAbstract<typeof EntityMetadataTypes.App> {
  app: App;
}

/**
 * Defines a {@link Protocol} metadata.
 */
export interface ProtocolMetadata
  extends EntityMetadataAbstract<typeof EntityMetadataTypes.Protocol> {
  protocol: Protocol;
}

/**
 * Defines a custom entity metadata.
 */
export interface CustomEntityMetadata
  extends EntityMetadataAbstract<typeof EntityMetadataTypes.Custom> {
  /** The name of the awarded entity.
   *
   * @invariant The name must be a non-empty string that is not just whitespace.
   */
  name: string;
  /** Optional link to the entity's website or relevant page. */
  link?: URL;
}

/**
 * Defines an entity metadata.
 */
export type EntityMetadata = AppMetadata | ProtocolMetadata | CustomEntityMetadata;
