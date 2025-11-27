import {useMemo, useState} from "react";
import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {shadcnButtonVariants} from "@/components/ui/shadcnButtonStyles.ts";
import {ReferrersList, type ReferrersListProps} from "@/components/holiday-referral-awards/referrers/ReferrersList.tsx";
import {FetchingErrorInfo} from "@/components/holiday-referral-awards/referrers/utils.tsx";

type ReferrersListState = "loading" | "fetchError" | "empty" | "loaded";

const DEFAULT_STATE = "loaded";
export function MockReferrersList() {
    const [selectedState, setSelectedState] = useState<ReferrersListState>(DEFAULT_STATE);
    const props: ReferrersListProps = useMemo(() => {
        switch (selectedState){
            case "empty":
                return {
                   aggregatedReferrersData: {
                       referrers: [],
                       total: 0,
                       paginationParams: {},
                       hasNext: false,
                       hasPrev: false,
                       updatedAt: 1764091210
                   },
                   isLoading: false,
                   generateLinkCTA: <p className={cn(shadcnButtonVariants({
                       variant: "outline",
                       size: "default",
                       className:
                           "cursor-pointer rounded-full",
                   }))}>Placeholder</p>,
                }

            case "loading":
                return {
                    aggregatedReferrersData: null,
                    isLoading: true,
                    generateLinkCTA: <p>Placeholder</p>,
                }

            case "fetchError":
                return {
                    aggregatedReferrersData: null,
                    isLoading: false,
                    generateLinkCTA: <p>Placeholder</p>,
                    error: <FetchingErrorInfo errorMessage="Mock error message." retryFunction={() => {alert("Retry fetching")}} />
                }

            default:
                return {
                    aggregatedReferrersData: {
                        referrers: [
                            {
                                referrer: "0x538e35b2888ed5bc58cf2825d76cf6265aa4e31e",
                                totalReferrals: 3,
                                totalIncrementalDuration: 94694400,
                                totalReferralsContribution: 0.33,
                                totalIncrementalDurationContribution: 0.5
                            },
                            {
                                referrer: "0xcfa4f8192ad39d1ee09f473e88e79d267e09ddca",
                                totalReferrals: 2,
                                totalIncrementalDuration: 63072000,
                                totalReferralsContribution: 0.1,
                                totalIncrementalDurationContribution: 0.11
                            },
                            {
                                referrer: "0x00000000000000000000000000000000000000f1",
                                totalReferrals: 1,
                                totalIncrementalDuration: 39657600,
                                totalReferralsContribution: 0.05,
                                totalIncrementalDurationContribution: 0.05
                            },
                            {
                                referrer: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
                                totalReferrals: 1,
                                totalIncrementalDuration: 34214400,
                                totalReferralsContribution: 0.05,
                                totalIncrementalDurationContribution: 0.03
                            }
                        ],
                        total: 4,
                        paginationParams: {},
                        hasNext: false,
                        hasPrev: false,
                        updatedAt: 1764091210
                    },
                    isLoading: false,
                    generateLinkCTA: <p>Placeholder</p>,
                }
        }
    }, [selectedState]);

    return <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-3 sm:gap-6">
        <div className="flex flex-wrap gap-2">
            {["loading", "fetchError", "empty", "loaded"].map((variant) => (
                <button
                    className={cn(shadcnButtonVariants({
                        variant: selectedState === variant ? "default" : "outline",
                        size: "sm",
                        className: "cursor-pointer",
                    }))}
                    onClick={() => setSelectedState(variant as ReferrersListState)}
                >
                    {variant}
                </button>
            ))}
        </div>
        <ReferrersList {...props} />
    </div>
}