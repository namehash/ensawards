import { DEFAULT_ENSNODE_URL } from "@/utils/env/index.ts";

/**
 * Returns the ENSNode public URL defined in the .env file
 *
 * If the env variable is undefined returns a default fallback.
 */
export const getENSNodeUrl = (): URL => {
  const maybeEnvVariableURL = import.meta.env.ENSNODE_URL;

  // Check for empty string is necessary due to GitHub's fallback mechanism
  // https://docs.github.com/en/actions/reference/workflows-and-actions/contexts
  if (maybeEnvVariableURL === undefined || maybeEnvVariableURL === "") {
    return new URL(DEFAULT_ENSNODE_URL);
  }

  return new URL(maybeEnvVariableURL);
};
