import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { AdvocateProfileWithoutName } from "@/components/ens-advocates/details-page-components/advocate-profile/AdvocateProfileWithoutName.tsx";
import { EnsAdvocateProfileLoading } from "@/components/ens-advocates/details-page-components/advocate-profile/EnsAdvocateProfileLoading.tsx";
import { FetchAndDisplayAdvocateProfileWithName } from "@/components/ens-advocates/details-page-components/advocate-profile/FetchAndDisplayAdvocateProfileWithName.tsx";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { ASSUME_IMMUTABLE_QUERY, usePrimaryName } from "@ensnode/ensnode-react";
import { getENSRootChainId } from "@ensnode/ensnode-sdk";
import type { Address } from "viem";

interface FetchAndDisplayAdvocateProfileProps {
  address: Address;
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
  return <FetchAndDisplayAdvocateProfileWithName name={data.name} address={address} />;
}
