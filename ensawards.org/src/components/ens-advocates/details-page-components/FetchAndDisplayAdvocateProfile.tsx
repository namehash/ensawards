import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { AddressBasedAdvocateProfile } from "@/components/ens-advocates/details-page-components/advocate-profile/AddressBasedAdvocateProfile.tsx";
import { EnsAdvocateProfileLoading } from "@/components/ens-advocates/details-page-components/advocate-profile/EnsAdvocateProfileLoading.tsx";
import { FetchAndDisplayPrimaryNameBasedAdvocateProfile } from "@/components/ens-advocates/details-page-components/advocate-profile/FetchAndDisplayPrimaryNameBasedAdvocateProfile.tsx";
import type { EnsAdvocateDetailsPageProps } from "@/components/ens-advocates/details-page-components/advocate-profile/types.ts";
import { ENSNamespaceIds } from "@ensnode/datasources";
import { ASSUME_IMMUTABLE_QUERY, usePrimaryName } from "@ensnode/ensnode-react";
import { getENSRootChainId } from "@ensnode/ensnode-sdk";

export function FetchAndDisplayAdvocateProfile({ address }: EnsAdvocateDetailsPageProps) {
  const namespaceId = ENSNamespaceIds.Mainnet;

  const { data, isLoading, error } = usePrimaryName({
    address: address,
    chainId: getENSRootChainId(namespaceId),
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

  if (data.name === null)
    return <AddressBasedAdvocateProfile address={address} namespaceId={namespaceId} />;

  return (
    <FetchAndDisplayPrimaryNameBasedAdvocateProfile
      name={data.name}
      address={address}
      namespaceId={namespaceId}
    />
  );
}
