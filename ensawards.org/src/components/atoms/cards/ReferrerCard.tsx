import type {AggregatedReferrerMetricsContribution} from "@/utils/referrals.ts";
import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {getAppSupportColor} from "@/utils/styles.ts";
import firstPlaceIcon from "../../../assets/firstPlaceAward.svg";
import secondPlaceIcon from "../../../assets/secondPlaceAward.svg";
import thirdPlaceIcon from "../../../assets/thirdPlaceAward.svg";

export interface ReferrerCardProps {
    referrerData: AggregatedReferrerMetricsContribution;
    position: number;
}

const placeIcons = [
    firstPlaceIcon,
    secondPlaceIcon,
    thirdPlaceIcon
];

interface PlaceProps {
    /**
     * Represents the position in the list
     * @invariant must be a positive integer (>= 1)
     */
    place: number;
}
const FurtherPlaceIcon = ({place}: PlaceProps) => <p
    className="w-8 pt-[7px] px-[11px] pb-[5px] text-sm leading-normal font-semibold text-muted-foreground">
    {place}
</p>

const PlaceIcon = ({place}: PlaceProps) => place <= 3 ? <img alt={`${place}-place`} src={placeIcons[place-1].src}/> : <FurtherPlaceIcon place={place} />

export function ReferrerCard({referrerData, position}: ReferrerCardProps) {
    return (
        <div
            className="w-full h-fit box-border flex flex-col sm:flex-row flex-nowrap justify-start sm:justify-between items-start sm:items-center gap-3 p-4 sm:p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs cursor-pointer">
            {/*Desktop Header*/}
            <div
                className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-5">
                <PlaceIcon place={position} />
                <div
                    className="w-fit flex flex-nowrap flex-row justify-start items-center gap-3">
                    <h3 className="text-lg leading-normal font-semibold text-black">{referrerData.referrer}</h3>
                </div>
            </div>
            {/*Mobile Header*/}
            <div
                className="sm:hidden flex flex-col flex-nowrap justify-start items-start gap-4 self-stretch">
                <div
                    className="w-full h-fit flex flex-row flex-nowrap justify-between items-center">
                    <PlaceIcon place={position} />
                </div>
                <h3 className="text-lg leading-normal font-semibold text-black">{referrerData.referrer}</h3>
            </div>
            {/*------------*/}
            <div
                className="flex flex-nowrap flex-col sm:flex-row justify-start sm:justify-end items-center gap-2 sm:gap-10 max-sm:self-stretch">
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Qualified Contribution
                    </p>
                    <div
                        className="flex flex-row flex-nowrap justify-start items-center gap-2 self-stretch">
                        <div
                            className="max-sm:hidden flex relative w-20 h-[7px] rounded-[20px] bg-gray-200 z-0">
                            <div
                                className={cn(
                                    "absolute h-full self-stretch rounded-[20px] z-10",
                                    `bg-${getAppSupportColor(referrerData.totalReferralsContribution * 100)}`,
                                )}
                                style={{width: `calc(${referrerData.totalReferralsContribution * 100}%)`}}>
                            </div>
                        </div>
                        <p
                            className={cn(
                                "text-sm leading-normal font-medium sm:font-semibold",
                                `text-${getAppSupportColor(referrerData.totalReferralsContribution * 100)}`,
                            )}>
                            {referrerData.totalReferralsContribution * 100}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}