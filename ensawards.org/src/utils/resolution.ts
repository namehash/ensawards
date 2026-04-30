import { millisecondsInSecond } from "date-fns/constants";
import type { Duration, InterpretedName, NormalizedAddress } from "enssdk";
import { ETH_COIN_TYPE } from "enssdk";

import { EnsNodeClient, type ResolverRecordsSelection } from "@ensnode/ensnode-sdk";

import { getENSNodeUrl } from "@/utils/env";

/**
 * Resolves the Ethereum Mainnet address for the given name.
 *
 * @param name - an {@link InterpretedName} to resolve the Ethereum Mainnet address for.
 * @param timeout - a duration in seconds when the resolution request will timeout.
 *
 * @returns The Ethereum Mainnet {@link NormalizedAddress} for the provided name
 *          or null if no Ethereum Mainnet address is found for that name.
 *
 * @throws If the resolution isn't completed before the timeout or a resolution error occurs.
 */
export const resolveEthAddress = async (
  name: InterpretedName,
  timeout: Duration = 5,
): Promise<NormalizedAddress | null> => {
  const client = new EnsNodeClient({ url: getENSNodeUrl() });

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
  return response.records.addresses[ETH_COIN_TYPE] as NormalizedAddress | null; // Typecasting here is required due to `records.addresses` field type.
  // We aim to optimize that in the future: https://github.com/namehash/ensnode/issues/2019
};
