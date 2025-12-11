import { AbsoluteTime } from "@/components/atoms/datetime/AbsoluteTime.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { UnixTimestamp } from "@ensnode/ensnode-sdk";
import type { ReferrerLeaderboardPage } from "@namehash/ens-referrals";
import { Award as AwardIcon } from "lucide-react";

export interface ReferrerLeaderboardLastUpdateTimeProps {
  timestamp: UnixTimestamp;
  className?: string;
}

/**
 * Displays the last time the leaderboard was updated in ENSAnalytics.
 *
 * @param timestamp - last update of the leaderboard.
 * More details at {@link ReferrerLeaderboardPage.accurateAsOf}
 */
export const ReferrerLeaderboardLastUpdateTime = ({
  timestamp,
  className,
}: ReferrerLeaderboardLastUpdateTimeProps) => {
  return (
    <p
      className={cn(
        "text-sm sm:text-base leading-normal font-normal text-muted-foreground sm:whitespace-nowrap",
        className,
      )}
    >
      Last updated{" "}
      <AbsoluteTime
        timestamp={timestamp}
        options={{
          year: "numeric",
          month: "short",
          day: "numeric",
        }}
      />{" "}
      at{" "}
      <AbsoluteTime
        timestamp={timestamp}
        options={{
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        }}
      />
    </p>
  );
};

/**
 * Displays information that the current referrer leaderboard is empty
 * (when {@link ReferrerLeaderboardPaginationContext.totalRecords} is 0)
 */
export const EmptyLeaderboardInfo = () => {
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
        <a
          className={cn(
            shadcnButtonVariants({
              variant: "outline",
              size: "default",
              className: "cursor-pointer rounded-full",
            }),
          )}
          href="/ens-referral-awards#generate-referral-link"
        >
          Generate your referral link
        </a>
      </div>
    </div>
  );
};
