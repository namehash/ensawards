import { AdvocateReferralsList } from "@/components/ens-advocates/details-page-components/AdvocateReferralsList.tsx";
import type { EnsAdvocateDetailsPageProps } from "@/components/ens-advocates/details-page-components/advocate-profile/types.ts";

export function FetchAndDisplayAdvocateReferrals({ address }: EnsAdvocateDetailsPageProps) {
  return <AdvocateReferralsList />;
}
