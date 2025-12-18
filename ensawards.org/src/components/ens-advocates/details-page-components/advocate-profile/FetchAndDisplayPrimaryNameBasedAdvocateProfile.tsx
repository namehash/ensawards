import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { EnsAdvocateProfileLoading } from "@/components/ens-advocates/details-page-components/advocate-profile/EnsAdvocateProfileLoading.tsx";
import { PrimaryNameBasedAdvocateProfile } from "@/components/ens-advocates/details-page-components/advocate-profile/PrimaryNameBasedAdvocateProfile.tsx";
import type { AdvocateProfileProps } from "@/components/ens-advocates/details-page-components/advocate-profile/types.ts";
import { ASSUME_IMMUTABLE_QUERY, useRecords } from "@ensnode/ensnode-react";
import { ETH_COIN_TYPE, type Name, type ResolverRecordsSelection } from "@ensnode/ensnode-sdk";

const HeaderPanelTextRecords = ["url", "avatar", "header"];

export interface FetchAndDisplayPrimaryNameBasedAdvocateProfileProps extends AdvocateProfileProps {
  name: Name;
}

//TODO: this name is way too long, but for now, I don't have any idea how to name it better
export function FetchAndDisplayPrimaryNameBasedAdvocateProfile({
  address,
  name,
  namespaceId,
}: FetchAndDisplayPrimaryNameBasedAdvocateProfileProps) {
  // TODO: is it a valid assumption that we only care for Eth mainnet addresses?
  const selection = {
    addresses: [ETH_COIN_TYPE],
    texts: HeaderPanelTextRecords,
  } satisfies ResolverRecordsSelection;
  //TODO: 'as const satisfies ResolverRecordsSelection' from ensadmin forces addresses to be readonly and causes compiler issues -- double-check later

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
    <PrimaryNameBasedAdvocateProfile
      name={name}
      address={address}
      namespaceId={namespaceId}
      headerImage={data?.records?.texts?.header}
    />
  );
}
