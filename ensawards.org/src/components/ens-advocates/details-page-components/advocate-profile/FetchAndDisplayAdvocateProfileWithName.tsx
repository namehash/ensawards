import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { AdvocateProfileWithName } from "@/components/ens-advocates/details-page-components/advocate-profile/AdvocateProfileWithName.tsx";
import { EnsAdvocateProfileLoading } from "@/components/ens-advocates/details-page-components/advocate-profile/EnsAdvocateProfileLoading.tsx";
import type { ENSNamespaceId } from "@ensnode/datasources";
import { ASSUME_IMMUTABLE_QUERY, useRecords } from "@ensnode/ensnode-react";
import { type Name, type ResolverRecordsSelection } from "@ensnode/ensnode-sdk";
import type { Address } from "viem";

const HeaderPanelTextRecords = ["avatar", "header"];

export interface FetchAndDisplayPrimaryNameBasedAdvocateProfileProps {
  address: Address;
  namespaceId: ENSNamespaceId;
  name: Name;
}

//TODO: this name is way too long, but for now, I don't have any idea how to name it better
export function FetchAndDisplayAdvocateProfileWithName({
  address,
  name,
  namespaceId,
}: FetchAndDisplayPrimaryNameBasedAdvocateProfileProps) {
  const selection = {
    texts: HeaderPanelTextRecords,
  } satisfies ResolverRecordsSelection;

  // TODO: Each app (including ENSAdmin) should define their own "wrapper" data model around
  // their `useRecords` queries that is specific to their use case. For example, ENSAdmin should
  // define a nicely designed data model such as `ENSProfile` (based on the subjective definition
  // of what an ENS profile is within the context of ENSAdmin). Then, a hook such as `useENSProfile`
  // should be defined that internally calls `useRecords` and then performs the data transformations
  // that might be required to return the nice, clean, and specialized `ENSProfile` data model.
  // The code in `ProfileHeader`, `ProfileInformation`, `SocialLinks`, `Addresses`, and `AdditionalRecords`
  // should then be updated so that it takes as input only the nice and clean `ENSProfile` data model.
  // These UI components should not need to consider the nuances or complexities of the raw `useRecords`
  // data model. All those nuances and complexities should be mananaged in a single place (ex: `useENSProfile`).
  // see: https://github.com/namehash/ensnode/issues/1082
  const { data, status } = useRecords({
    name,
    selection,
    query: ASSUME_IMMUTABLE_QUERY,
  });

  if (status === "pending") return <EnsAdvocateProfileLoading />;

  if (status === "error")
    return (
      <ErrorInfo
        title={`ENS advocate details`}
        description={["Failed to load profile information for:", name]}
      />
    );

  return (
    <AdvocateProfileWithName
      name={name}
      address={address}
      namespaceId={namespaceId}
      headerImage={data?.records?.texts?.header}
    />
  );
}
