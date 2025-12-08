import type {ENSNamespaceId} from "@ensnode/datasources";
import type {NamedRegistrarAction} from "@ensnode/ensnode-sdk";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
    type StatefulFetchRegistrarActions,
    StatefulFetchStatusIds
} from "@/components/holiday-referral-awards/referrals/types.ts";
import {getENSNodeUrl} from "@/utils/env";
import {ErrorInfo} from "@/components/atoms/ErrorInfo.tsx";
import {RegistrarActionCardLoading, RegistrarActionCardMemo} from "@/components/atoms/cards/RegistrarActionCard.tsx";
import type {ReferralIncentiveProgram} from "@/types/referralIncentivePrograms.ts";

interface DisplayRegistrarActionsListProps {
    namespaceId: ENSNamespaceId;
    registrarActions: NamedRegistrarAction[];
    referralIncentiveProgram: ReferralIncentiveProgram;
}

// TODO: Restyle all elements accordingly to Figma

/**
 * Displays a list of {@link NamedRegistrarAction}s.
 */
function DisplayRegistrarActionsList({
                                         namespaceId,
                                         registrarActions,
    referralIncentiveProgram
                                     }: DisplayRegistrarActionsListProps) {
    const [animationParent] = useAutoAnimate();

    return (
        <div
            ref={animationParent}
            className="w-full h-fit box-border flex flex-col justify-start items-center gap-3"
        >
            {registrarActions.map((namedRegistrarAction) => (
                <RegistrarActionCardMemo
                    key={namedRegistrarAction.action.id}
                    namespaceId={namespaceId}
                    namedRegistrarAction={namedRegistrarAction}
                    referralIncentiveProgram={referralIncentiveProgram}
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
        <div className="space-y-4 relative z-10">
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
                <div>
                    <p>The Registrar Actions API is unavailable on the connected ENSNode instance.</p>
                    <p>The Registrar Actions API requires all of the following plugins to be activated:</p>

                    <ul>
                        {registrarActions.requiredPlugins.map((requiredPluginName) => (
                            <li className="inline" key={requiredPluginName}>
                                <span>{requiredPluginName}</span>{" "}
                            </li>
                        ))}
                    </ul>
                    <a href={`https://admin.ensnode.io/connection?connection=${encodeURIComponent(getENSNodeUrl().href)}`} target="_blank">
                        Check ENSIndexer plugins
                    </a>
                </div>
            );

        case StatefulFetchStatusIds.NotReady:
            return (
                <div>
                    <p>The Registrar Actions API on the connected ENSNode instance is not available yet.</p>
                    <p>
                        The Registrar Actions API will be available once the omnichain indexing status reaches
                        one of the following:
                    </p>
                    <ul>
                        {registrarActions.supportedIndexingStatusIds.map((supportedStatusId) => (
                            <li className="inline" key={supportedStatusId}>
                                <span>
                                    {supportedStatusId.split("-")}
                                </span>{" "}
                            </li>
                        ))}
                    </ul>
                    <a href={`https://admin.ensnode.io/status?connection=${encodeURIComponent(getENSNodeUrl().href)}`}
                       target="_blank">
                        Check status
                    </a>
                </div>
            );

        case StatefulFetchStatusIds.Loading:
            return (
                <DisplayRegistrarActionsListLoading itemsPerPage={registrarActions.itemsPerPage} />
            );

        case StatefulFetchStatusIds.Error:
            return <ErrorInfo title={title} description={registrarActions.reason} />;

        case StatefulFetchStatusIds.Loaded:
            return <DisplayRegistrarActionsList
                namespaceId={namespaceId}
                registrarActions={registrarActions.registrarActions}
                referralIncentiveProgram={referralIncentiveProgram}
            />
    }
}