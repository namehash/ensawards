import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import {
  type StatefulFetchRegistrarActions,
  StatefulFetchStatusIds,
} from "@/components/referral-awards-program/referrals/types.ts";
import { getReferralQualificationInfo } from "@/components/referral-awards-program/referrals/utils.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { formatOmnichainIndexingStatus, getEnsAdvocateDetailsRelativePath } from "@/utils";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { ENSNamespaceId } from "@ensnode/datasources";
import { type NamedRegistrarAction, OmnichainIndexingStatusIds } from "@ensnode/ensnode-sdk";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  LabeledField,
  RegistrarActionCardLoading,
  RegistrarActionCardMemo,
  getEnsManagerNameDetailsUrl,
  useNow,
} from "@namehash/namehash-ui";
import type { Address } from "viem";

interface DisplayRegistrarActionsListProps {
  namespaceId: ENSNamespaceId;
  registrarActions: NamedRegistrarAction[];
  showReferrer?: boolean;
}

/**
 * Displays a list of {@link NamedRegistrarAction}s.
 */
export function DisplayRegistrarActionsList({
  namespaceId,
  registrarActions,
  showReferrer = true,
}: DisplayRegistrarActionsListProps) {
  const [animationParent] = useAutoAnimate();
  const now = useNow();

  return (
    <div
      ref={animationParent}
      className="w-full h-fit box-border flex flex-col justify-start items-center gap-3 relative"
    >
      {registrarActions.map((namedRegistrarAction) => {
        const qualifiedReferralPrograms = getReferralQualificationInfo(namedRegistrarAction);
        const ensAwardsBaseUrl = "https://ensawards.org/";

        return (
          <RegistrarActionCardMemo
            key={namedRegistrarAction.action.id}
            namespaceId={namespaceId}
            namedRegistrarAction={namedRegistrarAction}
            now={now}
            showReferrer={showReferrer}
            links={{
              name: {
                isExternal: true,
                link: getEnsManagerNameDetailsUrl(namedRegistrarAction.name, namespaceId),
              },
              registrant: {
                isExternal: false,
                link: new URL(
                  getEnsAdvocateDetailsRelativePath(namedRegistrarAction.action.registrant),
                  ensAwardsBaseUrl,
                ),
              },
              referrer: {
                isExternal: false,
                getLink: (address: Address, _namespaceId: ENSNamespaceId) =>
                  new URL(getEnsAdvocateDetailsRelativePath(address), ensAwardsBaseUrl),
              },
            }}
            referralProgramField={
              <LabeledField fieldLabel="Incentive program" className="w-[15%] min-w-[162px]">
                <div className="w-fit sm:h-[21px] flex flex-row flex-nowrap justify-start items-center gap-2">
                  <p className="text-black font-medium max-sm:text-right">
                    {qualifiedReferralPrograms.length === 0
                      ? "-"
                      : qualifiedReferralPrograms
                          .map((referralProgram) => referralProgram.name)
                          .join(", ")}
                  </p>
                </div>
              </LabeledField>
            }
          />
        );
      })}
    </div>
  );
}

interface DisplayRegistrarActionsListLoadingProps {
  recordsPerPage: number;
}

/**
 * Displays a loading state for a list of {@link NamedRegistrarAction}s.
 */
function DisplayRegistrarActionsListLoading({
  recordsPerPage,
}: DisplayRegistrarActionsListLoadingProps) {
  return (
    <div className="w-full space-y-3 relative z-10">
      {[...Array(recordsPerPage)].map((_, idx) => (
        <RegistrarActionCardLoading key={idx} />
      ))}
    </div>
  );
}

export interface DisplayRegistrarActionsFeedProps {
  namespaceId: ENSNamespaceId;
  registrarActions: StatefulFetchRegistrarActions;
  title: string;
}

/**
 * Display {@link NamedRegistrarAction}s Panel.
 */
export function DisplayRegistrarActionsFeed({
  namespaceId,
  registrarActions,
  title,
}: DisplayRegistrarActionsFeedProps) {
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
      return (
        <DisplayRegistrarActionsListLoading recordsPerPage={registrarActions.recordsPerPage} />
      );

    case StatefulFetchStatusIds.Error:
      console.error(registrarActions.reason);
      return (
        <ErrorInfo
          title={title}
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
        <DisplayRegistrarActionsList
          namespaceId={namespaceId}
          registrarActions={registrarActions.registrarActions}
        />
      );
  }
}
