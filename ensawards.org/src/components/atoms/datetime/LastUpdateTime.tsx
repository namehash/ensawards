import { RelativeTime, useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";

import type { UnixTimestamp } from "@ensnode/ensnode-sdk";

import { Skeleton } from "@/components/ui/skeleton.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export interface LastUpdateTimeProps {
  timestamp: UnixTimestamp;
  className?: string;
}

/**
 * Displays the last time the leaderboard was updated in ENSNode.
 *
 * Has two variants:
 * 1) Live - a badge for when the last update was less than a minute ago,
 * 2) X time ago - for when the last update was more than a minute ago, showing the exact time of the last update.
 *
 * @param timestamp - last update of the leaderboard or registrar actions.
 * More details at {@link ReferrerLeaderboardPage.accurateAsOf} and {@link RegistrarActionsResponseOk.accurateAsOf}.
 */
export const LastUpdateTime = ({ timestamp, className }: LastUpdateTimeProps) => {
  // refresh the update time every minute
  const now = useNow({ timeToRefresh: secondsInMinute });
  const isLive = now - timestamp <= secondsInMinute;

  if (isLive) {
    return (
      <div className="inline-flex items-center gap-2 py-1 rounded-full">
        <p className={cn("text-sm text-muted-foreground leading-normal font-normal", className)}>
          Last updated
        </p>
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 py-1 pl-3 pr-2.5">
          <span className="size-[7px] shrink-0 rounded-full bg-emerald-500" />
          <p
            className={cn(
              "text-center text-sm leading-normal font-medium text-emerald-600",
              className,
            )}
          >
            Live
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 py-1 rounded-full">
      <p className={cn("text-sm text-muted-foreground leading-normal font-normal", className)}>
        Last updated
      </p>
      <span className="size-[7px] shrink-0 rounded-full bg-neutral-400" />
      <p className={cn("text-sm text-black leading-normal font-normal", className)}>
        <RelativeTime timestamp={timestamp} enforcePast={true} relativeTo={now} />
      </p>
    </div>
  );
};

interface LastUpdateTimeLoadingProps {
  className?: string;
}
export const LastUpdateTimeLoading = ({ className }: LastUpdateTimeLoadingProps) => (
  <div className={cn("inline-flex items-center gap-2 py-1 rounded-full", className)}>
    <p className={cn("text-sm text-muted-foreground leading-normal font-normal")}>Last updated</p>
    <span className="size-[7px] shrink-0 rounded-full bg-gray-200" />
    <div className="w-[85px] h-5 flex items-center">
      <Skeleton className="w-full h-1 rounded-full bg-gray-200" />
    </div>
  </div>
);
