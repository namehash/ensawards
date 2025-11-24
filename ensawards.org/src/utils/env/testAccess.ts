import { DEFAULT_ENSNODE_URL } from "@/utils/env/index.ts";

/**
 * Returns the ENSNode public URL defined in the .env file
 * specifically for unit testing.
 *
 * If the env variable is undefined returns a default fallback.
 *
 * @throws if the value set for VITE_ENSNODE_URL cannot be converted to a `URL`.
 */
export const getENSNodeUrlForTests = (): URL => {
  const maybeEnvVariableURL = process.env.VITE_ENSNODE_URL;

  // Check for empty string is necessary due to GitHub's fallback mechanism
  // https://docs.github.com/en/actions/reference/workflows-and-actions/contexts
  if (maybeEnvVariableURL === undefined || maybeEnvVariableURL === "") {
    return new URL(DEFAULT_ENSNODE_URL);
  }

  return new URL(maybeEnvVariableURL);
};
