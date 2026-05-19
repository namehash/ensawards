import { ASSUME_IMMUTABLE_QUERY, usePrimaryName } from "@namehash/namehash-ui";
import { type InterpretedName, type NormalizedAddress, reinterpretName } from "enssdk";

import { getENSRootChainId } from "@ensnode/datasources";

import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { AdvocateProfileWithoutName } from "@/components/ens-advocates/details-page-components/advocate-profile/AdvocateProfileWithoutName.tsx";
import { EnsAdvocateProfileLoading } from "@/components/ens-advocates/details-page-components/advocate-profile/EnsAdvocateProfileLoading.tsx";
import { FetchAndDisplayAdvocateProfileWithName } from "@/components/ens-advocates/details-page-components/advocate-profile/FetchAndDisplayAdvocateProfileWithName.tsx";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";

interface FetchAndDisplayAdvocateProfileProps {
  address: NormalizedAddress;
}

export function FetchAndDisplayAdvocateProfile({ address }: FetchAndDisplayAdvocateProfileProps) {
  const { data, isLoading, error } = usePrimaryName({
    address: address,
    chainId: getENSRootChainId(DEFAULT_ENS_NAMESPACE),
    accelerate: true,
    query: ASSUME_IMMUTABLE_QUERY,
  });

  if (isLoading || data === undefined) return <EnsAdvocateProfileLoading />;

  if (error)
    return (
      <ErrorInfo
        title={`ENS advocate details`}
        description={["Failed to load profile information for:", address]}
      />
    );

  // If the advocate's address doesn't have a defined primary name,
  // display a UI based just on the address
  if (data.name === null) return <AdvocateProfileWithoutName address={address} />;
  // Otherwise, use the primary name to obtain additional data about the profile
  // and display it in the UI

  // Guarantee equal interpretation of the ENS name between the client and server.
  // See {@link reinterpretName} for more details.
  const reinterpretedName = reinterpretName(data.name as InterpretedName);
  // ENSNode guarantees that all names it returns in its APIs are a valid `InterpretedName`,
  // so the type cast here is safe.

  return <FetchAndDisplayAdvocateProfileWithName name={reinterpretedName} address={address} />;
}
