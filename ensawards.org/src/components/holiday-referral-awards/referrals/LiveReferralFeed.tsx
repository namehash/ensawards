import {createConfig, ENSNodeProvider} from "@ensnode/ensnode-react";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import {
    FetchAndDisplayRegistrarActionsFeed, type FetchAndDisplayRegistrarActionsFeedProps
} from "@/components/holiday-referral-awards/referrals/FetchAndDisplayRegistrarActionsFeed.tsx";
import {getENSNodeUrl} from "@/utils/env";

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
                <FetchAndDisplayRegistrarActionsFeed itemsPerPage={itemsPerPage} title={title} referralIncentiveProgram={referralIncentiveProgram} />
            </TooltipProvider>
        </ENSNodeProvider>
    );
}