import {ENSNamespaceIds} from "@ensnode/datasources";
import {useStatefulRegistrarActions} from "@/utils/hooks/useStatefulFetchRegistrarActions.ts";
import {
  DisplayRegistrarActionsFeed
} from "@/components/holiday-referral-awards/referrals/DisplayRegistrarActionsFeed.tsx";
import { registrarActionsFilter, type RegistrarActionsFilter } from "@ensnode/ensnode-sdk";
import { namehash } from "viem";

export interface FetchAndDisplayRegistrarActionsFeedProps {
  itemsPerPage: number;

  title: string;
}

/**
 * Fetches Registrar Actions through ENSNode and displays the Registrar Actions Feed.
 */
export function FetchAndDisplayRegistrarActionsFeed({
  itemsPerPage,
  title,
}: FetchAndDisplayRegistrarActionsFeedProps) {
  const namespaceId = ENSNamespaceIds.Mainnet;
  const filters: RegistrarActionsFilter[] = [
    // Include records for direct subnames of `.eth`
    registrarActionsFilter.byParentNode(namehash('eth')),
    // Include records with `encodedReferrer` other than NULL and ZERO_ENCODED_REFERRER
    registrarActionsFilter.withReferral(true),
  ]

  const registrarActions = useStatefulRegistrarActions({
    itemsPerPage,
    filters
  });

  return (
          <DisplayRegistrarActionsFeed
            namespaceId={namespaceId}
            title={title}
            registrarActions={registrarActions}
          />
  );
}
