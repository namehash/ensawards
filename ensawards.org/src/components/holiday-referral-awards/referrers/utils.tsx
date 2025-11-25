import {AlertCircle as AlertIcon, Award as AwardIcon, Clock as ClockIcon} from "lucide-react";
import {AbsoluteTime} from "@/components/atoms/AbsoluteTime.tsx";
import type {UnixTimestamp} from "@ensnode/ensnode-sdk";
import type {ReactElement} from "react";

export interface ReferrersSnapshotTimeProps {
    lastUpdateTimestamp: UnixTimestamp;
}
export const ReferrersSnapshotTime = ({lastUpdateTimestamp}: ReferrersSnapshotTimeProps) => {
    return <div className="w-fit h-fit max-h-[80px] box-border flex flex-row justify-start items-center gap-3 border border-gray-200 rounded-2xl p-3">
        <ClockIcon size={16} className="flex-shrink-0" />
        <p className="text-sm">The current snapshot of referrers was generated on <span className="font-semibold"><AbsoluteTime timestamp={lastUpdateTimestamp} options={{
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        }} /></span></p>
    </div>
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