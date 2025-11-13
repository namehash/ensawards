/**
 * Default ENSNode API endpoint URL
 */
const DEFAULT_ENSNODE_URL = "https://api.alpha.ensnode.io" as const;

/**
 * Returns the ENSNode public URL defined in the .env file
 *
 * If the env variable is undefined returns a default fallback.
 */
export const getENSNodeUrl = (): URL => {
  const maybeEnvVariableURL = process.env.ENSNODE_URL;

  if (maybeEnvVariableURL === undefined || maybeEnvVariableURL === "") {
    return new URL(DEFAULT_ENSNODE_URL);
  }

  return new URL(maybeEnvVariableURL);
};

/**
 * Returns the ENSNode public URL defined in the .env file
 * specifically for the unit testing.
 *
 * If the env variable is undefined returns a default fallback.
 */
export const getENSNodeUrlForTests = (): URL => {
  const maybeEnvVariableURL = process.env.VITE_ENSNODE_URL;

  if (maybeEnvVariableURL === undefined || maybeEnvVariableURL === "") {
    return new URL(DEFAULT_ENSNODE_URL);
  }

  return new URL(maybeEnvVariableURL);
};
