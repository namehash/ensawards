import { millisecondsInMinute } from "date-fns/constants";
import { useState } from "react";
import { type Address, namehash } from "viem";

import { type RegistrarActionsFilter, registrarActionsFilter } from "@ensnode/ensnode-sdk";

import { AdvocateReferralsList } from "@/components/ens-advocates/details-page-components/advocate-referrals/AdvocateReferralsList.tsx";
import { scrollWithOffset } from "@/utils/domActions.ts";
import { useStatefulRegistrarActions } from "@/utils/hooks/useStatefulFetchRegistrarActions.ts";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";

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

  const registrarActions = useStatefulRegistrarActions({
    paginationParams: { page: currentPage, recordsPerPage: recordsPerPage },
    filters,
    staleTime: millisecondsInMinute,
  });

  return (
    <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-6">
      <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center max-sm:gap-2">
        <h3 id="advocate-referrals-header" className="text-2xl leading-normal font-semibold">
          Referrals
        </h3>
      </div>
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
        registrarActions={registrarActions}
      />
    </div>
  );
}
