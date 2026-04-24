/**
 * Checks if a given {@link CustomEntityMetadata.name} field is valid
 * according to the invariants defined in {@link CustomEntityMetadata}.
 */
export const isValidCustomEntityName = (name: string): boolean => {
  return name.trim().length > 0;
};
