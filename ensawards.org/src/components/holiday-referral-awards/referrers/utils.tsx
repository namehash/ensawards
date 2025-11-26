import {AlertCircle as AlertIcon, Award as AwardIcon, Clock as ClockIcon} from "lucide-react";
import {AbsoluteTime} from "@/components/atoms/AbsoluteTime.tsx";
import type {UnixTimestamp} from "@ensnode/ensnode-sdk";
import type {ReactElement} from "react";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import {RelativeTime} from "@/components/RelativeTime.tsx";

export interface ReferrersSnapshotTimeProps {
    lastUpdateTimestamp: UnixTimestamp;
}
export const ReferrersSnapshotTime = ({lastUpdateTimestamp}: ReferrersSnapshotTimeProps) => {
    return <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <p className="text-base leading-normal font-normal text-muted-foreground whitespace-nowrap"><RelativeTime prefix="Last updated " timestamp={lastUpdateTimestamp} enforcePast={true} conciseFormatting={true} /></p>
    </TooltipProvider>
}

export interface FetchingErrorProps {
    errorMessage: string;
    retryFunction: () => void;
}
export const FetchingErrorInfo = ({errorMessage, retryFunction}:FetchingErrorProps) => {
    return <div>
        <div><AlertIcon /></div>
        <h3>There was an error loading the referrers</h3>
        <p>{errorMessage}</p>
        <p>Please try again later.</p>
        <button onClick={retryFunction}>Try again</button>
    </div>
}

interface NoReferrersInfoProps {
    cta: ReactElement;
}
export const NoReferrersInfo = ({cta}: NoReferrersInfoProps) => {
    return <div>
        <div><AwardIcon /></div>
        <h3>Looks like there's no one here yet</h3>
        <p>Wanna be first? Generate your link and win rewards</p>
        {cta}
    </div>
}