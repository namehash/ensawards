import {useEffect, useState} from "react";
import {ReferrersList} from "@/components/holiday-referral-awards/referrers/ReferrersList.tsx";
import {FetchingErrorInfo} from "@/components/holiday-referral-awards/referrers/utils.tsx";
import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {shadcnButtonVariants} from "@/components/ui/shadcnButtonStyles.ts";
import {
    ENSNodeClient,
    type PaginatedAggregatedReferrers,
    PaginatedAggregatedReferrersResponseCodes
} from "@ensnode/ensnode-sdk";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import {createConfig, ENSNodeProvider} from "@ensnode/ensnode-react";

export interface TopReferrersProps {
    onENSHolidayReferralsAwards: boolean;
    snippetSize?: number;
    header?: string;
}

export function TopReferrers({onENSHolidayReferralsAwards, header, snippetSize = 3}:TopReferrersProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchErrorMessage, setFetchErrorMessage] = useState("");
    const [aggregatedReferrersData, setAggregatedReferrersData] = useState<PaginatedAggregatedReferrers | null>(null);
    const client = new ENSNodeClient({
        url: new URL("https://api.alpha-sepolia.yellow.ensnode.io/"), //TODO: replace with the line below later on
        // url: getENSNodeUrl(),
    });
    const ensNodeReactConfig = createConfig({ url:  "https://api.alpha-sepolia.yellow.ensnode.io/"}); //TODO: replace with getENSNodeUrl for prod

    //TODO: Ideally that part could also be extracted (with useQuery or w/e)
    // so that we can do something similar like we do with ENSNodeConfigInfo in ENSAdmin
    // and reuse this fetch wherever we need
    async function startFetching() {
        setFetchErrorMessage("");
        setIsLoading(true);
        try {
            const response = await client.getAggregatedReferrers({page: 1, itemsPerPage: snippetSize});

            if (response.responseCode !== PaginatedAggregatedReferrersResponseCodes.Ok) {
                setFetchErrorMessage(response.errorMessage);
                setIsLoading(false);
                return;
            }

            setAggregatedReferrersData(response.data);

        } catch (error) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            setAggregatedReferrersData(null);
            setFetchErrorMessage(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        startFetching();
    }, []);

    const emptyStateCTAStyles = cn(shadcnButtonVariants({
        variant: "outline",
        size: "default",
        className:
            "cursor-pointer rounded-full",
    }));

    const emptyStateCTA = onENSHolidayReferralsAwards ?
        <a className={emptyStateCTAStyles} onClick={() => document.getElementById("referral award recipient")!.focus()}>Generate your referral link</a>
        :
        <a className={emptyStateCTAStyles} href="/ens-referral-awards">Generate your referral
            link</a>

    return <ENSNodeProvider config={ensNodeReactConfig}>
    <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div
        className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-3">
        <ReferrersList aggregatedReferrersData={aggregatedReferrersData}
                       isLoading={isLoading}
                       generateLinkCTA={emptyStateCTA}
                       error={fetchErrorMessage ?
                           <FetchingErrorInfo errorMessage={fetchErrorMessage} retryFunction={startFetching}/> : undefined}
                       numberOfItemsToDisplay={snippetSize}
                       header={header}
        />
        {aggregatedReferrersData !== null && aggregatedReferrersData.total > 0 && <a
            href="/leaderboards/referrer"
            className={cn(
                shadcnButtonVariants({
                    variant: "ghost",
                    size: "default",
                    className: "cursor-pointer rounded-full text-sm max-sm:w-full",
                }),
            )}>
            View full referrer leaderboard
        </a>}
        </div></TooltipProvider>
    </ENSNodeProvider>
}