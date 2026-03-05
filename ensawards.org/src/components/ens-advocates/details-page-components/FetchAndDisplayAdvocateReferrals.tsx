import type { ReferralProgramEditionConfig } from "@namehash/ens-referrals/v1";
import { type ReactNode, useEffect, useState } from "react";
import { type Address, namehash } from "viem";

import { useRegistrarActions } from "@ensnode/ensnode-react";
import {
  type RegistrarActionsFilter,
  RegistrarActionsOrders,
  RegistrarActionsResponseCodes,
  registrarActionsFilter,
} from "@ensnode/ensnode-sdk";

import { ErrorInfo } from "@/components/atoms/ErrorInfo";
import {
  AdvocateReferralsList,
  AdvocateReferralsListLoading,
} from "@/components/ens-advocates/details-page-components/advocate-referrals/AdvocateReferralsList.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles";
import { scrollWithOffset } from "@/utils/domActions.ts";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { fetchReferralProgramEditions } from "@/utils/referralProgram";
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

  const [referralProgramEditions, setReferralProgramEditions] = useState<
    ReferralProgramEditionConfig[]
  >([]);

  useEffect(() => {
    fetchReferralProgramEditions().then(setReferralProgramEditions);
  }, []);

  if (registrarActionsQuery.isPending) {
    return (
      <AdvocateReferralsContainer>
        <AdvocateReferralsListLoading recordsPerPage={recordsPerPage} />
      </AdvocateReferralsContainer>
    );
  }

  if (registrarActionsQuery.isError) {
    console.error(registrarActionsQuery.error.message);
    return (
      <AdvocateReferralsContainer>
        <ErrorInfo
          title="ENS Advocate Referrals"
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
      </AdvocateReferralsContainer>
    );
  }

  if (registrarActionsQuery.data.responseCode === RegistrarActionsResponseCodes.Error) {
    console.error(registrarActionsQuery.data.error.message);
    return (
      <AdvocateReferralsContainer>
        <ErrorInfo
          title="ENS Advocate Referrals"
          description={[
            registrarActionsQuery.data.error.message,
            String(registrarActionsQuery.data.error.details),
          ]}
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
      </AdvocateReferralsContainer>
    );
  }

  return (
    <AdvocateReferralsContainer>
      <AdvocateReferralsList
        paginationParams={{ page: currentPage, recordsPerPage: recordsPerPage }}
        onPrevious={() => {
          setCurrentPage((prev) => prev - 1);
          scrollWithOffset("advocate-referrals-header", 75);
        }}
        onNext={() => {
          setCurrentPage((prev) => prev + 1);
          scrollWithOffset("advocate-referrals-header", 75);
        }}
        namespaceId={namespaceId}
        registrarActions={registrarActionsQuery.data}
        referralProgramEditions={referralProgramEditions}
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
