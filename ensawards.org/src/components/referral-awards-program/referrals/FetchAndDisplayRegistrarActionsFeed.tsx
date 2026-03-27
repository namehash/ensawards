import { type ReferralProgramEditionSummary } from "@namehash/ens-referrals/v1";
import { useEffect, useState } from "react";
import { namehash } from "viem";

import { useRegistrarActions } from "@ensnode/ensnode-react";
import {
  type RegistrarActionsFilter,
  RegistrarActionsOrders,
  RegistrarActionsResponseCodes,
  registrarActionsFilter,
} from "@ensnode/ensnode-sdk";

import { LastUpdateTime, LastUpdateTimeLoading } from "@/components/atoms/datetime/LastUpdateTime";
import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import {
  DisplayRegistrarActionsList,
  DisplayRegistrarActionsListLoading,
} from "@/components/referral-awards-program/referrals/RegistrarActionsList";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { fetchReferralProgramEditionSummaries } from "@/utils/referralProgram.ts";
import { cn } from "@/utils/tailwindClassConcatenation";

export interface ReferralLiveFeedTitle {
  text: string;
  styles?: {
    container?: string;
    text?: string;
  };
}

export interface FetchAndDisplayRegistrarActionsFeedProps {
  recordsPerPage: number;
  title: ReferralLiveFeedTitle;
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

  const [referralProgramEditionSummaries, setReferralProgramEditionSummaries] = useState<
    ReferralProgramEditionSummary[]
  >([]);

  const registrarActionsQuery = useRegistrarActions({
    page: 1,
    recordsPerPage,
    order: RegistrarActionsOrders.LatestRegistrarActions,
    filters,
  });

  useEffect(() => {
    fetchReferralProgramEditionSummaries()
      .then(setReferralProgramEditionSummaries)
      .catch((error) => {
        console.error("Error fetching referral program edition summaries:", error);
        // Because the lack of editions doesn't prevent the referral livefeed from working,
        // we stay in a silent failure and just set editions to an empty array
        setReferralProgramEditionSummaries([]);
      });
  }, []);

  const TryAgainButton = (
    <button
      className={cn(
        shadcnButtonVariants({
          variant: "outline",
          size: "default",
          className: "rounded-full cursor-pointer",
        }),
      )}
      onClick={() => registrarActionsQuery.refetch()}
    >
      Try again
    </button>
  );

  if (registrarActionsQuery.isPending) {
    return (
      <div className="w-full h-fit flex flex-col justify-start items-center gap-6">
        <div
          className={cn(
            title.styles?.container ??
              "w-full flex flex-col sm:flex-row sm:flex-wrap justify-start sm:justify-between items-start sm:items-center gap-y-2",
          )}
        >
          <h2 className={cn(title.styles?.text ?? "text-2xl leading-normal font-semibold")}>
            {title.text}
          </h2>
          <LastUpdateTimeLoading />
        </div>
        <DisplayRegistrarActionsListLoading recordsPerPage={recordsPerPage} />
      </div>
    );
  }

  if (registrarActionsQuery.isError) {
    console.error(registrarActionsQuery.error.message);
    return (
      <ErrorInfo
        title={title.text}
        description={["A connection error occurred. Please try again later."]}
      >
        {TryAgainButton}
      </ErrorInfo>
    );
  }

  if (registrarActionsQuery.data.responseCode === RegistrarActionsResponseCodes.Error) {
    console.error(registrarActionsQuery.data.error.message);

    let formattedErrorDetails = null;

    if (
      registrarActionsQuery.data.error.details !== undefined &&
      typeof registrarActionsQuery.data.error.details === "string"
    ) {
      formattedErrorDetails = registrarActionsQuery.data.error.details;
    }

    return (
      <ErrorInfo
        title={title.text}
        description={[
          registrarActionsQuery.data.error.message,
          ...(formattedErrorDetails ? [formattedErrorDetails] : []),
        ]}
      >
        {TryAgainButton}
      </ErrorInfo>
    );
  }

  return (
    <div className="w-full h-fit flex flex-col justify-start items-center gap-6">
      <div
        className={cn(
          title.styles?.container ??
            "w-full flex flex-col sm:flex-row sm:flex-wrap justify-start sm:justify-between items-start sm:items-center gap-y-2",
        )}
      >
        <h2 className={cn(title.styles?.text ?? "text-2xl leading-normal font-semibold")}>
          {title.text}
        </h2>
        {registrarActionsQuery.data.accurateAsOf && (
          <LastUpdateTime
            timestamp={registrarActionsQuery.data.accurateAsOf}
            className="text-base sm:text-sm"
          />
        )}
      </div>
      <DisplayRegistrarActionsList
        namespaceId={namespaceId}
        registrarActions={registrarActionsQuery.data.registrarActions}
        referralProgramEditionSummaries={referralProgramEditionSummaries}
      />
    </div>
  );
}
