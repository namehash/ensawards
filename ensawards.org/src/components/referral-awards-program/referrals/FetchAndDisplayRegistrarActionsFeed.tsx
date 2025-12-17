import { DisplayRegistrarActionsFeed } from "@/components/referral-awards-program/referrals/DisplayRegistrarActionsFeed.tsx";
import type { ReferralIncentiveProgram } from "@/types/referralIncentivePrograms.ts";
import { useStatefulRegistrarActions } from "@/utils/hooks/useStatefulFetchRegistrarActions.ts";
import { ENSNamespaceIds } from "@ensnode/datasources";
import { type RegistrarActionsFilter, registrarActionsFilter } from "@ensnode/ensnode-sdk";
import { namehash } from "viem";

export interface FetchAndDisplayRegistrarActionsFeedProps {
  recordsPerPage: number;
  referralIncentiveProgram: ReferralIncentiveProgram;
  title: string;
}

/**
 * Fetches Registrar Actions through ENSNode and displays the Registrar Actions Feed.
 */
export function FetchAndDisplayRegistrarActionsFeed({
  recordsPerPage,
  referralIncentiveProgram,
  title,
}: FetchAndDisplayRegistrarActionsFeedProps) {
  const namespaceId = ENSNamespaceIds.Mainnet;
  const filters: RegistrarActionsFilter[] = [
    // Include records for direct subnames of `.eth`
    registrarActionsFilter.byParentNode(namehash("eth")),
    // Include records with `encodedReferrer` other than NULL and ZERO_ENCODED_REFERRER
    registrarActionsFilter.withReferral(true),
  ];

  const registrarActions = useStatefulRegistrarActions({
    recordsPerPage,
    filters,
  });

  return (
    <DisplayRegistrarActionsFeed
      namespaceId={namespaceId}
      title={title}
      registrarActions={registrarActions}
      referralIncentiveProgram={referralIncentiveProgram}
    />
  );
}
