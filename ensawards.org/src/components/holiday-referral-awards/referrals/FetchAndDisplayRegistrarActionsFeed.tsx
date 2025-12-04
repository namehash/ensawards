import {ENSNamespaceIds} from "@ensnode/datasources";
import {useStatefulRegistrarActions} from "@/utils/hooks/useStatefulFetchRegistrarActions.ts";
import {
  DisplayRegistrarActionsFeed
} from "@/components/holiday-referral-awards/referrals/DisplayRegistrarActionsFeed.tsx";

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

  const registrarActions = useStatefulRegistrarActions({
    itemsPerPage,
  });

  return (
          <DisplayRegistrarActionsFeed
            namespaceId={namespaceId}
            title={title}
            registrarActions={registrarActions}
          />
  );
}
