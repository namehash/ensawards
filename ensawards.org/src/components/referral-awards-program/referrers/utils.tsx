import { AbsoluteTime } from "@/components/atoms/datetime/AbsoluteTime.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { UnixTimestamp } from "@ensnode/ensnode-sdk";
import { AlertCircle as AlertIcon, Award as AwardIcon } from "lucide-react";
import type { ReactElement } from "react";

export interface ReferrerLeaderboardLastUpdateTimeProps {
  timestamp: UnixTimestamp;
}

/**
 * Displays the last time the leaderboard was updated in ENSNode.
 *
 * @param timestamp - last update of the leaderboard.
 * More details at {@link ReferrerLeaderboardPage.accurateAsOf}
 */
export const ReferrerLeaderboardLastUpdateTime = ({
  timestamp,
}: ReferrerLeaderboardLastUpdateTimeProps) => {
  return (
    <p className="text-sm sm:text-base leading-normal font-normal text-muted-foreground whitespace-nowrap">
      Last updated{" "}
      <AbsoluteTime
        timestamp={timestamp}
        options={{
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        }}
      />
    </p>
  );
};

export interface LeaderboardFetchErrorProps {
  message: string;
  retryFunction: () => void;
}
export const LeaderboardFetchErrorInfo = ({
  message,
  retryFunction,
}: LeaderboardFetchErrorProps) => {
  const verticalContainerStyles = "w-full flex flex-col justify-start items-center";
  return (
    <div className={cn(verticalContainerStyles, "gap-5 justify-center md:min-h-[305px]")}>
      <div className="w-[48px] h-[48px] flex flex-col justify-center items-center rounded-full bg-red-600/10">
        <AlertIcon size={20} className="flex-shrink-0 text-red-600" />
      </div>
      <div className={cn(verticalContainerStyles, "gap-4")}>
        <div className={cn(verticalContainerStyles, "gap-1")}>
          <h3 className="text-xl leading-normal font-semibold text-black text-center">
            Error loading referrer data
          </h3>
          <p className="text-base leading-normal font-normal text-muted-foreground text-center">
            {message} Please try again later.
          </p>
        </div>
        <button
          className={cn(
            shadcnButtonVariants({
              variant: "outline",
              size: "default",
              className: "cursor-pointer rounded-full",
            }),
          )}
          onClick={retryFunction}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

interface EmptyLeaderboardInfoProps {
  cta: ReactElement;
}

/**
 * Displays an information that the current referrer leaderboard is empty
 * (when {@link ReferrerLeaderboardPaginationContext.totalRecords} is 0)
 */
export const EmptyLeaderboardInfo = ({ cta }: EmptyLeaderboardInfoProps) => {
  const verticalContainerStyles = "w-full flex flex-col justify-start items-center";

  return (
    <div className={cn(verticalContainerStyles, "gap-5")}>
      <div className="w-[48px] h-[48px] flex flex-col justify-center items-center rounded-full bg-emerald-600/10">
        <AwardIcon size={20} className="flex-shrink-0 text-emerald-600" />
      </div>
      <div className={cn(verticalContainerStyles, "gap-4")}>
        <div className={cn(verticalContainerStyles, "gap-1")}>
          <h3 className="text-xl leading-normal font-semibold text-black text-center">
            Looks like there's no referrals in December yet
          </h3>
          <p className="text-base leading-normal font-normal text-muted-foreground text-center">
            Wanna be first? Generate your referral link and earn awards!
          </p>
        </div>
        {cta}
      </div>
    </div>
  );
};
