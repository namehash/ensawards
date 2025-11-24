/**
 * Default ENSNode API endpoint URL
 */
export const DEFAULT_ENSNODE_URL = "https://api.alpha.ensnode.io" as const;

/**
 * Returns the ENSNode public URL defined in the .env file
 *
 * If the env variable is undefined returns a default fallback.
 *
 * @throws if the value set for PUBLIC_ENSNODE_URL cannot be converted to a `URL`.
 */
export const getENSNodeUrl = (): URL => {
  const maybeEnvVariableURL = import.meta.env.PUBLIC_ENSNODE_URL;

  // Check for empty string is necessary due to GitHub's fallback mechanism
  // https://docs.github.com/en/actions/reference/workflows-and-actions/contexts
  if (maybeEnvVariableURL === undefined || maybeEnvVariableURL === "") {
    return new URL(DEFAULT_ENSNODE_URL);
  }

  return new URL(maybeEnvVariableURL);
};
