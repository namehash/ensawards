/**
 * Options for formatting data model types (such as {@link AppType}, {@link ProtocolType}, and more)
 * before displaying them to users.
 */
export interface FormatTypeOptions {
  /** Whether to use the plural form */
  plural?: boolean;

  /** Whether to convert text to lowercase */
  lowercase?: boolean;
}
