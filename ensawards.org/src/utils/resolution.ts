import { getENSNodeUrl } from "@/utils/env/onClientAccess.ts";
import {
  type Duration,
  ENSNodeClient,
  type NormalizedName,
  type ResolveRecordsResponse,
} from "@ensnode/ensnode-sdk";
import { millisecondsInSecond } from "date-fns/constants";
import type { Address } from "viem";

/**
 * Resolves Ethereum address for an ENS name (Forward Resolution).
 *
 * @param name - an ENS name to be resolved. Must be normalized.
 * @param timeoutLimit - a duration in seconds that marks the maximum allowed resolution time.
 *
 * @returns Ethereum deposit {@link Address} associated with the provided name
 * or null if such address isn't configured for that name.
 *
 * @throws If the resolution isn't completed in timeoutLimit or a resolution error occurs.
 */
export const resolveEthAddress = async (
  name: NormalizedName,
  timeoutLimit: Duration = 5,
): Promise<Address | null> => {
  const client = new ENSNodeClient({
    url: getENSNodeUrl(),
  });

  const resolutionPromise = client.resolveRecords(name, {
    addresses: [60], // ETH CoinType
  });

  const timeoutPromise = new Promise<Response>((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Request timeout. Please try again."));
    }, timeoutLimit * millisecondsInSecond);
  });

  // Prevent the request from taking too long
  const response = await Promise.race([resolutionPromise, timeoutPromise]);

  return (response as ResolveRecordsResponse<{ addresses: 60[] }>).records.addresses[60] as Address;
};
