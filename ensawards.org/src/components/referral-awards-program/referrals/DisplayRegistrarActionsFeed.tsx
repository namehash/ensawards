import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import {
  RegistrarActionCardLoading,
  RegistrarActionCardMemo,
} from "@/components/atoms/cards/RegistrarActionCard.tsx";
import {
  type StatefulFetchRegistrarActions,
  StatefulFetchStatusIds,
} from "@/components/referral-awards-program/referrals/types.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import type { ReferralIncentiveProgram } from "@/types/referralIncentivePrograms.ts";
import { formatOmnichainIndexingStatus } from "@/utils";
import { getENSNodeUrl } from "@/utils/env";
import { useNow } from "@/utils/hooks/useNow.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { ENSNamespaceId } from "@ensnode/datasources";
import { type NamedRegistrarAction, OmnichainIndexingStatusIds } from "@ensnode/ensnode-sdk";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface DisplayRegistrarActionsListProps {
  namespaceId: ENSNamespaceId;
  registrarActions: NamedRegistrarAction[];
  referralIncentiveProgram: ReferralIncentiveProgram;
}

/**
 * Displays a list of {@link NamedRegistrarAction}s.
 */
function DisplayRegistrarActionsList({
  namespaceId,
  registrarActions,
  referralIncentiveProgram,
}: DisplayRegistrarActionsListProps) {
  const [animationParent] = useAutoAnimate();
  const now = useNow();

  return (
    <div
      ref={animationParent}
      className="w-full h-fit box-border flex flex-col justify-start items-center gap-3 relative"
    >
      {registrarActions.map((namedRegistrarAction) => (
        <RegistrarActionCardMemo
          key={namedRegistrarAction.action.id}
          namespaceId={namespaceId}
          namedRegistrarAction={namedRegistrarAction}
          referralIncentiveProgram={referralIncentiveProgram}
          now={now}
        />
      ))}
    </div>
  );
}

interface DisplayRegistrarActionsListPlaceholderProps {
  itemsPerPage: number;
}

/**
 * Displays a loading state for a list of {@link NamedRegistrarAction}s.
 */
function DisplayRegistrarActionsListLoading({
  itemsPerPage,
}: DisplayRegistrarActionsListPlaceholderProps) {
  return (
    <div className="w-full space-y-4 relative z-10">
      {[...Array(itemsPerPage)].map((_, idx) => (
        <RegistrarActionCardLoading key={idx} />
      ))}
    </div>
  );
}

export interface DisplayRegistrarActionsPanelProps {
  namespaceId: ENSNamespaceId;
  registrarActions: StatefulFetchRegistrarActions;
  referralIncentiveProgram: ReferralIncentiveProgram;
  title: string;
}

/**
 * Display {@link NamedRegistrarAction}s Panel.
 */
export function DisplayRegistrarActionsFeed({
  namespaceId,
  registrarActions,
  referralIncentiveProgram,
  title,
}: DisplayRegistrarActionsPanelProps) {
  switch (registrarActions.fetchStatus) {
    case StatefulFetchStatusIds.Connecting:
      // we show nothing to avoid a flash of not essential content
      return null;

    case StatefulFetchStatusIds.Unsupported:
      return (
        <ErrorInfo
          title={title}
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
          title={title}
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

    case StatefulFetchStatusIds.Loading:
      return <DisplayRegistrarActionsListLoading itemsPerPage={registrarActions.itemsPerPage} />;

    case StatefulFetchStatusIds.Error:
      return (
        <ErrorInfo title={title} description={[registrarActions.reason]}>
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
        <DisplayRegistrarActionsList
          namespaceId={namespaceId}
          registrarActions={registrarActions.registrarActions}
          referralIncentiveProgram={referralIncentiveProgram}
        />
      );
  }
}
