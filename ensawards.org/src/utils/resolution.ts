import { getENSNodeUrl } from "@/utils/env";
import {
  type Duration,
  ENSNodeClient,
  ETH_COIN_TYPE,
  type NormalizedName,
  type ResolverRecordsSelection,
} from "@ensnode/ensnode-sdk";
import { millisecondsInSecond } from "date-fns/constants";
import type { Address } from "viem";

/**
 * Resolves the Ethereum Mainnet address for the given name.
 *
 * @param name - a {@link NormalizedName} to resolve the Ethereum Mainnet address for.
 * @param timeout - a duration in seconds when the resolution request will timeout.
 *
 * @returns The Ethereum Mainnet {@link Address} for the provided name
 *          or null if no Ethereum Mainnet address is found for that name.
 *
 * @throws If the resolution isn't completed before the timeout or a resolution error occurs.
 */
export const resolveEthAddress = async (
  name: NormalizedName,
  timeout: Duration = 5,
): Promise<Address | null> => {
  const client = new ENSNodeClient({ url: getENSNodeUrl() });

  // Define the selection of records to resolve. In this case, we only want to resolve the Ethereum Mainnet address.
  // The Ethereum Mainnet coin type is 60 as per `evmChainIdToCoinType(mainnet.id)`.
  // Hardcoding the coin type here since the type inference needs a concrete value.
  const recordSelection = {
    addresses: [ETH_COIN_TYPE],
  } satisfies ResolverRecordsSelection;

  const resolutionPromise = client.resolveRecords(name, recordSelection);

  // this is a Promise<never> because it always rejects with an error and never returns a value.
  const timeoutPromise = new Promise<never>((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Request timeout. Please try again."));
    }, timeout * millisecondsInSecond);
  });

  // execute the resolution while enforcing the timeout.
  const response = await Promise.race([resolutionPromise, timeoutPromise]);

  // resolution completed without error before the timeout.
  return response.records.addresses[60] as Address | null;
};
