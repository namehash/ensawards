import type { ReferralProgramEditionSummary } from "@namehash/ens-referrals/v1";

import type { ENSNamespaceId } from "@ensnode/datasources";
import { type RegistrarActionsResponseOk, type RequestPageParams } from "@ensnode/ensnode-sdk";

import { SimplePagination } from "@/components/molecules/Pagination";
import { DisplayRegistrarActionsList } from "@/components/referral-awards-program/referrals/RegistrarActionsList";

export interface AdvocateReferralsListProps {
  namespaceId: ENSNamespaceId;
  registrarActions: RegistrarActionsResponseOk;
  referralProgramEditionSummaries: ReferralProgramEditionSummary[];
  paginationParams: Required<RequestPageParams>;
  onPrevious: () => void;
  onNext: () => void;
}
export function AdvocateReferralsList({
  namespaceId,
  registrarActions,
  referralProgramEditionSummaries,
  paginationParams,
  onNext,
  onPrevious,
}: AdvocateReferralsListProps) {
  return (
    <>
      {registrarActions.pageContext.totalRecords === 0 ? (
        <p className="text-center">
          This ENS advocate hasn't made a referral yet.
          <br />
          <a
            className="text-blue-600 font-medium hover:underline hover:underline-offset-[25%] whitespace-nowrap transition-all duration-200 cursor-pointer"
            href="/ens-referral-program"
          >
            Learn how to become a referrer
          </a>
          .
        </p>
      ) : (
        <>
          <DisplayRegistrarActionsList
            namespaceId={namespaceId}
            registrarActions={registrarActions.registrarActions}
            showReferrer={false}
            referralProgramEditionSummaries={referralProgramEditionSummaries}
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
