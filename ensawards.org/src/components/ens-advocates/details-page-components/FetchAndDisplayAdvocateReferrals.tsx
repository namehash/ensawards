import type { ReferralProgramEditionSummary } from "@namehash/ens-referrals";
import { type Address } from "enssdk";
import { type ReactNode, useEffect, useState } from "react";
import { namehash } from "viem";

import { useRegistrarActions } from "@ensnode/ensnode-react";
import {
  type RegistrarActionsFilter,
  RegistrarActionsOrders,
  RegistrarActionsResponseCodes,
  registrarActionsFilter,
} from "@ensnode/ensnode-sdk";

import { ErrorInfo } from "@/components/atoms/ErrorInfo";
import { AdvocateReferralsList } from "@/components/ens-advocates/details-page-components/advocate-referrals/AdvocateReferralsList.tsx";
import { DisplayRegistrarActionsListLoading } from "@/components/referral-awards-program/referrals/RegistrarActionsList";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles";
import { scrollWithOffset } from "@/utils/domActions.ts";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { fetchReferralProgramEditionSummaries } from "@/utils/referralProgram";
import { cn } from "@/utils/tailwindClassConcatenation";

interface FetchAndDisplayAdvocateReferralsProps {
  address: Address;
  recordsPerPage: number;
}
export function FetchAndDisplayAdvocateReferrals({
  address,
  recordsPerPage,
}: FetchAndDisplayAdvocateReferralsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const namespaceId = DEFAULT_ENS_NAMESPACE;

  const filters: RegistrarActionsFilter[] = [
    // Include records for direct subnames of `.eth`
    registrarActionsFilter.byParentNode(namehash("eth")),
    // Include records with `encodedReferrer` other than NULL and ZERO_ENCODED_REFERRER
    registrarActionsFilter.withReferral(true),
    // Include records where `decodedReferrer` address equals the advocate's address
    registrarActionsFilter.byDecodedReferrer(address),
  ];

  const registrarActionsQuery = useRegistrarActions({
    page: currentPage,
    recordsPerPage,
    order: RegistrarActionsOrders.LatestRegistrarActions,
    filters,
  });

  const [referralProgramEditionSummaries, setReferralProgramEditionSummaries] = useState<
    ReferralProgramEditionSummary[]
  >([]);

  useEffect(() => {
    fetchReferralProgramEditionSummaries()
      .then(setReferralProgramEditionSummaries)
      .catch((error) => {
        console.error("Error fetching referral program edition summaries:", error);
        // Because the lack of editions doesn't prevent the referral live feed from working,
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
      <AdvocateReferralsContainer>
        <DisplayRegistrarActionsListLoading recordsPerPage={recordsPerPage} showReferrer={false} />
      </AdvocateReferralsContainer>
    );
  }

  if (registrarActionsQuery.isError) {
    console.error(registrarActionsQuery.error.message);
    return (
      <AdvocateReferralsContainer>
        <ErrorInfo
          title="ENS Advocate Referrals"
          description={["A connection error occurred. Please try again later."]}
        >
          {TryAgainButton}
        </ErrorInfo>
      </AdvocateReferralsContainer>
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
      <AdvocateReferralsContainer>
        <ErrorInfo
          title="ENS Advocate Referrals"
          description={[
            registrarActionsQuery.data.error.message,
            ...(formattedErrorDetails ? [formattedErrorDetails] : []),
          ]}
        >
          {TryAgainButton}
        </ErrorInfo>
      </AdvocateReferralsContainer>
    );
  }

  const registrarActions = registrarActionsQuery.data;

  return (
    <AdvocateReferralsContainer>
      <AdvocateReferralsList
        paginationParams={{ page: currentPage, recordsPerPage: recordsPerPage }}
        onPrevious={() => {
          setCurrentPage((prev) => Math.max(prev - 1, 1));
          scrollWithOffset("advocate-referrals-header", 75);
        }}
        onNext={() => {
          setCurrentPage((prev) => Math.min(prev + 1, registrarActions.pageContext.totalPages));
          scrollWithOffset("advocate-referrals-header", 75);
        }}
        namespaceId={namespaceId}
        registrarActions={registrarActions}
        referralProgramEditionSummaries={referralProgramEditionSummaries}
      />
    </AdvocateReferralsContainer>
  );
}

const AdvocateReferralsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-6">
      <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center max-sm:gap-2">
        <h3 id="advocate-referrals-header" className="text-2xl leading-normal font-semibold">
          Referrals
        </h3>
      </div>
      {children}
    </div>
  );
};
