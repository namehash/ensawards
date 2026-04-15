/**
 * Regex pattern that all slug values in the app must match.
 *
 * Allows lowercase letters (a-z), digits (0-9), and hyphens (-).
 * Must not start or end with a hyphen.
 */
export const ENSAWARDS_SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/**
 * Checks whether a given string is a valid slug.
 * A valid slug:
 * - is non-empty
 * - Matches {@link ENSAWARDS_SLUG_PATTERN}
 */
export const isValidSlug = (maybeSlug: string) => {
  if (maybeSlug.length == 0) {
    return false;
  }

  return ENSAWARDS_SLUG_PATTERN.test(maybeSlug);
};
