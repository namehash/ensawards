import {
  FetchAndDisplayRegistrarActionsFeed,
  type FetchAndDisplayRegistrarActionsFeedProps,
} from "@/components/referral-awards-program/referrals/FetchAndDisplayRegistrarActionsFeed.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";

/**
 * Wrapper of the FetchAndDisplayRegistrarActionsFeed component, granting access to necessary providers
 */
export function LiveReferralFeed({
  itemsPerPage,
  referralIncentiveProgram,
  title,
}: FetchAndDisplayRegistrarActionsFeedProps) {
  const ensNodeProviderConfig = createConfig({
    url: getENSNodeUrl(),
  });
  return (
    <ENSNodeProvider config={ensNodeProviderConfig}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <FetchAndDisplayRegistrarActionsFeed
          itemsPerPage={itemsPerPage}
          title={title}
          referralIncentiveProgram={referralIncentiveProgram}
        />
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
