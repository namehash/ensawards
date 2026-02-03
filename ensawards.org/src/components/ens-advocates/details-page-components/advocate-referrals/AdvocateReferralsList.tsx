import { RegistrarActionCardLoading } from "@namehash/namehash-ui";

import type { ENSNamespaceId } from "@ensnode/datasources";
import { OmnichainIndexingStatusIds, type RequestPageParams } from "@ensnode/ensnode-sdk";

import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { SimplePagination } from "@/components/molecules/Pagination.tsx";
import { DisplayRegistrarActionsList } from "@/components/referral-awards-program/referrals/DisplayRegistrarActionsFeed.tsx";
import {
  type StatefulFetchRegistrarActions,
  StatefulFetchStatusIds,
} from "@/components/referral-awards-program/referrals/types.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { formatOmnichainIndexingStatus } from "@/utils";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

interface AdvocateReferralsListLoadingProps {
  recordsPerPage: number;
}
/**
 * Displays a loading state for a list of {@link NamedRegistrarAction}s.
 */
function AdvocateReferralsListLoading({ recordsPerPage }: AdvocateReferralsListLoadingProps) {
  return (
    <div className="w-full space-y-3 relative z-10">
      {[...Array(recordsPerPage)].map((_, idx) => (
        <RegistrarActionCardLoading key={idx} showReferrer={false} />
      ))}
    </div>
  );
}

export interface AdvocateReferralsListProps {
  namespaceId: ENSNamespaceId;
  registrarActions: StatefulFetchRegistrarActions;
  paginationParams: Required<RequestPageParams>;
  onPrevious: () => void;
  onNext: () => void;
}
export function AdvocateReferralsList({
  namespaceId,
  registrarActions,
  paginationParams,
  onNext,
  onPrevious,
}: AdvocateReferralsListProps) {
  switch (registrarActions.fetchStatus) {
    case StatefulFetchStatusIds.Unsupported:
      return (
        <ErrorInfo
          title="Advocate referral list"
          description={[
            "The Registrar Actions API is unavailable on the connected ENSNode instance.",
            "The Registrar Actions API requires all of the following plugins to be activated:",
          ]}
        >
          <div className="w-full flex flex-col justify-start items-center gap-4">
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
              {registrarActions.requiredPlugins.map((requiredPluginName) => (
                <Badge key={requiredPluginName} variant="secondary">
                  {requiredPluginName}
                </Badge>
              ))}
            </div>
            <a
              className={cn(
                shadcnButtonVariants({
                  variant: "outline",
                  size: "default",
                  className: "rounded-full cursor-pointer",
                }),
              )}
              href={`https://admin.ensnode.io/connection?connection=${encodeURIComponent(getENSNodeUrl().href)}`}
              target="_blank"
            >
              Check indexing config
            </a>
          </div>
        </ErrorInfo>
      );

    case StatefulFetchStatusIds.NotReady:
      return (
        <ErrorInfo
          title="Advocate referral list"
          description={[
            "The Registrar Actions API on the connected ENSNode instance is not available yet.",
            "The Registrar Actions API will be available once the omnichain indexing status reaches\n" +
              "                            one of the following:",
          ]}
        >
          <div className="w-full flex flex-col justify-start items-center gap-4">
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
              <Badge variant="secondary">
                {formatOmnichainIndexingStatus(OmnichainIndexingStatusIds.Completed)}
              </Badge>
              <Badge variant="secondary">
                {formatOmnichainIndexingStatus(OmnichainIndexingStatusIds.Following)}
              </Badge>
            </div>
            <a
              className={cn(
                shadcnButtonVariants({
                  variant: "outline",
                  size: "default",
                  className: "rounded-full cursor-pointer",
                }),
              )}
              href={`https://admin.ensnode.io/status?connection=${encodeURIComponent(getENSNodeUrl().href)}`}
              target="_blank"
            >
              Check indexing status
            </a>
          </div>
        </ErrorInfo>
      );

    case StatefulFetchStatusIds.Loading || StatefulFetchStatusIds.Connecting:
      return (
        <>
          <AdvocateReferralsListLoading recordsPerPage={paginationParams.recordsPerPage} />
          <div className="w-full flex flex-row flex-nowrap justify-between items-center">
            <Skeleton className="w-[106px] h-9 bg-gray-200 rounded-lg" />
            <Skeleton className="w-20 h-9 bg-gray-200 rounded-lg" />
          </div>
        </>
      );

    case StatefulFetchStatusIds.Error:
      console.error(registrarActions.reason);
      return (
        <ErrorInfo
          title="Advocate referral list"
          description={["ENSNode connection error occurred. Please try again later."]}
        >
          <button
            className={cn(
              shadcnButtonVariants({
                variant: "outline",
                size: "default",
                className: "rounded-full cursor-pointer",
              }),
            )}
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </ErrorInfo>
      );

    case StatefulFetchStatusIds.Loaded:
      return (
        <>
          {registrarActions.pageContext.totalRecords === 0 ? (
            <p className="text-center">
              This advocate hasn't made a referral yet.
              <br />
              <a
                className="text-blue-600 font-medium hover:underline hover:underline-offset-[25%] whitespace-nowrap transition-all duration-200 cursor-pointer"
                href="/ens-referral-awards"
              >
                Learn how to become a referrer
              </a>
              .
            </p>
          ) : (
            <>
              {" "}
              <DisplayRegistrarActionsList
                namespaceId={namespaceId}
                registrarActions={registrarActions.registrarActions}
                showReferrer={false}
              />
              <SimplePagination
                totalPages={registrarActions.pageContext.totalPages}
                totalRecords={registrarActions.pageContext.totalRecords}
                paginationParams={{
                  page: paginationParams.page,
                  recordsPerPage: paginationParams.recordsPerPage,
                }}
                onPrevious={onPrevious}
                onNext={onNext}
                labeledButtons={true}
                containerClassName="w-full justify-between"
              />
            </>
          )}
        </>
      );
  }
}
