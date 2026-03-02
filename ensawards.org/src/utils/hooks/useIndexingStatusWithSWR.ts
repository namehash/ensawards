import { useNow } from "@namehash/namehash-ui";
import { secondsToMilliseconds } from "date-fns";
import { useCallback, useMemo } from "react";

import {
  createIndexingStatusQueryOptions,
  type QueryParameter,
  useENSNodeSDKConfig,
  type useIndexingStatus,
  useSwrQuery,
  type WithSDKConfigParameter,
} from "@ensnode/ensnode-react";
import {
  type CrossChainIndexingStatusSnapshotOmnichain,
  createRealtimeIndexingStatusProjection,
  type Duration,
  type EnsApiIndexingStatusRequest,
  EnsApiIndexingStatusResponseCodes,
  type EnsApiIndexingStatusResponseOk,
} from "@ensnode/ensnode-sdk";

const DEFAULT_REFETCH_INTERVAL = secondsToMilliseconds(10);

const REALTIME_PROJECTION_REFRESH_RATE: Duration = 1;

interface UseIndexingStatusParameters
  extends EnsApiIndexingStatusRequest,
    QueryParameter<CrossChainIndexingStatusSnapshotOmnichain> {}

/**
 * A proxy hook for {@link useIndexingStatus} which applies
 * stale-while-revalidate cache for successful responses.
 */
export function useIndexingStatusWithSwr(
  parameters: WithSDKConfigParameter & UseIndexingStatusParameters = {},
) {
  const { config, query = {} } = parameters;
  const _config = useENSNodeSDKConfig(config);
  const now = useNow({ timeToRefresh: REALTIME_PROJECTION_REFRESH_RATE });

  const queryOptions = useMemo(() => createIndexingStatusQueryOptions(_config), [_config]);
  const queryKey = useMemo(() => ["swr", ...queryOptions.queryKey], [queryOptions.queryKey]);
  const queryFn = useCallback(
    async () =>
      queryOptions.queryFn().then(async (response) => {
        // An indexing status response was successfully fetched,
        // but the response code contained within the response was not 'ok'.
        // Therefore, throw an error to avoid caching this response.
        if (response.responseCode !== EnsApiIndexingStatusResponseCodes.Ok) {
          throw new Error(
            "Received Indexing Status response with responseCode other than 'ok' which will not be cached.",
          );
        }

        // The indexing status snapshot has been fetched and successfully validated for caching.
        // Therefore, return it so that query cache for `queryOptions.queryKey` will:
        // - Replace the currently cached value (if any) with this new value.
        // - Return this non-null value.
        return response.realtimeProjection.snapshot;
      }),
    [queryOptions.queryFn],
  );

  // Call select function to `createRealtimeIndexingStatusProjection` each time
  // `now` is updated.
  const select = useCallback(
    (cachedSnapshot: CrossChainIndexingStatusSnapshotOmnichain): EnsApiIndexingStatusResponseOk => {
      const realtimeProjection = createRealtimeIndexingStatusProjection(cachedSnapshot, now);

      // Maintain the original response shape of `IndexingStatusResponse`
      // for the consumers. Creating a new projection from the cached snapshot
      // each time `now` is updated should be implementation detail.
      return {
        responseCode: EnsApiIndexingStatusResponseCodes.Ok,
        realtimeProjection,
      } satisfies EnsApiIndexingStatusResponseOk;
    },
    [now],
  );

  return useSwrQuery({
    ...queryOptions,
    ...query,
    refetchInterval: query.refetchInterval ?? DEFAULT_REFETCH_INTERVAL, // Indexing status changes frequently
    enabled: query.enabled ?? queryOptions.enabled,
    queryKey,
    queryFn,
    select,
  });
}
