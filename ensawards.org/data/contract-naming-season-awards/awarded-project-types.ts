import { type App } from "data/apps/types";
import { type Protocol } from "data/protocols/types";

export const AwardedProjectTypes = {
  App: "app",
  Protocol: "protocol",
  Custom: "custom",
} as const;

export type AwardedProjectType = (typeof AwardedProjectTypes)[keyof typeof AwardedProjectTypes];

export interface AwardedProjectAbstract<TypeT extends AwardedProjectType> {
  /** The type of the awarded project. */
  type: TypeT;
}

/**
 * Defines an {@link App} project that has been awarded for the active participation
 * in the Contract Naming Season.
 */
export interface AwardedApp extends AwardedProjectAbstract<typeof AwardedProjectTypes.App> {
  app: App;
}

/**
 * Defines a {@link Protocol} project that has been awarded for the active participation
 * in the Contract Naming Season.
 */
export interface AwardedProtocol
  extends AwardedProjectAbstract<typeof AwardedProjectTypes.Protocol> {
  protocol: Protocol;
}

/**
 * Defines a custom project that has been awarded for the active participation
 * in the Contract Naming Season, but is not yet represented in ENSAwards's data.
 */
export interface AwardedCustomProject
  extends AwardedProjectAbstract<typeof AwardedProjectTypes.Custom> {
  /** The name of the awarded project. */
  name: string;
  /** Optional link to the project's website or relevant page. */
  link?: URL;
}

/**
 * Defines project that has been awarded for the active participation
 * in the Contract Naming Season.
 */
export type AwardedProject = AwardedApp | AwardedProtocol | AwardedCustomProject;
