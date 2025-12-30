import { DisplayRegistrarActionsFeed } from "@/components/referral-awards-program/referrals/DisplayRegistrarActionsFeed.tsx";
import { useStatefulRegistrarActions } from "@/utils/hooks/useStatefulFetchRegistrarActions.ts";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { type RegistrarActionsFilter, registrarActionsFilter } from "@ensnode/ensnode-sdk";
import { namehash } from "viem";

export interface FetchAndDisplayRegistrarActionsFeedProps {
  recordsPerPage: number;
  title: string;
}

/**
 * Fetches Registrar Actions through ENSNode and displays the Registrar Actions Feed.
 */
export function FetchAndDisplayRegistrarActionsFeed({
  recordsPerPage,
  title,
}: FetchAndDisplayRegistrarActionsFeedProps) {
  const namespaceId = DEFAULT_ENS_NAMESPACE;
  const filters: RegistrarActionsFilter[] = [
    // Include records for direct subnames of `.eth`
    registrarActionsFilter.byParentNode(namehash("eth")),
    // Include records with `encodedReferrer` other than NULL and ZERO_ENCODED_REFERRER
    registrarActionsFilter.withReferral(true),
  ];

  const registrarActions = useStatefulRegistrarActions({
    paginationParams: { page: 1, recordsPerPage },
    filters,
  });

  return (
    <DisplayRegistrarActionsFeed
      namespaceId={namespaceId}
      title={title}
      registrarActions={registrarActions}
    />
  );
}
