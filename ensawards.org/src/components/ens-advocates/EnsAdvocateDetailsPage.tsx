import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { AdvocateProfileHeader } from "@/components/ens-advocates/details-page-components/AdvocateProfileHeader.tsx";
import { AdvocateReferralsList } from "@/components/ens-advocates/details-page-components/AdvocateReferralsList.tsx";
import { EnsAdvocateDetailsPageLoading } from "@/components/ens-advocates/details-page-components/EnsAdvocateDetailsPageLoading.tsx";
import { ENSNamespaceIds } from "@ensnode/datasources";
import { ASSUME_IMMUTABLE_QUERY, useRecords } from "@ensnode/ensnode-react";
import { ETH_COIN_TYPE, type Name, type ResolverRecordsSelection } from "@ensnode/ensnode-sdk";
import type { Address } from "viem";

const HeaderPanelTextRecords = ["url", "avatar", "header"];
const ProfilePanelTextRecords = ["description", "email"];
const SocialLinksTextRecords = [
  "com.twitter",
  "com.github",
  "com.farcaster",
  "org.telegram",
  "com.linkedin",
  "com.reddit",
];
// TODO: Instead of explicitly listing AdditionalTextRecords, we should update
// `useRecords` so that we can ask it to return not only all the records we
// explicitly requested, but also any other records that were found onchain,
// no matter what their text record keys are. Below are two examples of
// additional text records set for lightwalker.eth on mainnet as an example.
// see: https://github.com/namehash/ensnode/issues/1083
const AdditionalTextRecords = ["status", "eth.ens.delegate"];
const AllRequestedTextRecords = [
  ...HeaderPanelTextRecords,
  ...ProfilePanelTextRecords,
  ...SocialLinksTextRecords,
  ...AdditionalTextRecords,
];

export interface EnsAdvocateDetailsPageProps {
  name: Name;
}
export function EnsAdvocateDetailsPage({ name }: EnsAdvocateDetailsPageProps) {
  const namespaceId = ENSNamespaceIds.Mainnet;

  // TODO: is it a valid assumption that we only care for Eth mainnet addresses?
  const selection = {
    addresses: [ETH_COIN_TYPE],
    texts: AllRequestedTextRecords,
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

  if (status === "pending") return <EnsAdvocateDetailsPageLoading />;

  if (status === "error")
    return (
      <ErrorInfo
        title={`ENS advocate details - ${name} `}
        description={["Failed to load profile information"]}
      />
    );

  return (
    <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-6 sm:gap-10">
      <AdvocateProfileHeader
        name={name}
        address={data?.records.addresses[ETH_COIN_TYPE] as Address}
        namespaceId={namespaceId}
        headerImage={data?.records?.texts?.header}
        websiteUrl={data?.records?.texts?.url}
      />
      <AdvocateReferralsList />
    </div>
  );
}
