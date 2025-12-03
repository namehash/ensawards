import { ReferrerCard, ReferrerCardLoading } from "@/components/atoms/cards/ReferrerCard.tsx";
import { EmptyLeaderboardInfo } from "@/components/holiday-referral-awards/referrers/utils.tsx";
import { ReferrerLeaderboardLastUpdateTime } from "@/components/holiday-referral-awards/referrers/utils.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { ReferrerLeaderboardPage } from "@namehash/ens-referrals";
import type { ReactElement } from "react";

export interface ReferrerLeaderboardPageProps {
  leaderboardPageData: ReferrerLeaderboardPage | null;
  isLoading: boolean;
  emptyLeaderboardCTA: ReactElement;
  error?: ReactElement;
  header?: string;
  loadingStateData?: {
    itemsToDisplay: number;
    referrerRankOffset: number;
  };
}

export function ReferrerLeaderboardPage({
  leaderboardPageData,
  isLoading,
  emptyLeaderboardCTA,
  error,
  header,
  loadingStateData = {
    referrerRankOffset: 0,
    itemsToDisplay: 5,
  },
}: ReferrerLeaderboardPageProps) {
  if (error !== undefined) {
    return error;
  }

  if (isLoading || leaderboardPageData === null) {
    return (
      <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-end gap-2 sm:gap-3">
        <Skeleton className="w-[200px] h-6 bg-gray-300" />
        {[...Array(loadingStateData.itemsToDisplay).keys()].map((elem) => (
          <ReferrerCardLoading
            key={`Referrer-loading-${loadingStateData.referrerRankOffset + elem}`}
            rank={loadingStateData.referrerRankOffset + elem + 1}
          />
        ))}
      </div>
    );
  }

  if (leaderboardPageData.paginationContext.totalRecords === 0) {
    return (
      <div className="w-full h-fit md:min-h-[305px] flex flex-col flex-nowrap justify-center items-center gap-3 sm:gap-4 md:bg-[url(/src/assets/emptyReferrersListBackgroundImage.png)] bg-no-repeat bg-contain bg-center">
        <EmptyLeaderboardInfo cta={emptyLeaderboardCTA} />
        <ReferrerLeaderboardLastUpdateTime timestamp={leaderboardPageData.accurateAsOf} />
      </div>
    );
  }

  return (
    <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-3">
      <div
        className={cn(
          "w-full h-fit flex flex-row flex-nowrap items-center",
          header ? "justify-between" : "justify-end",
        )}
      >
        {header && (
          <h3 className="text-xl sm:text-2xl leading-normal font-semibold text-black">{header}</h3>
        )}
        <ReferrerLeaderboardLastUpdateTime timestamp={leaderboardPageData.accurateAsOf} />
      </div>
      {leaderboardPageData.referrers.map((referrer, idx) => (
        <ReferrerCard
          key={`Referrer-${referrer.referrer}`}
          referrer={referrer}
          aggregatedMetrics={leaderboardPageData.aggregatedMetrics}
        />
      ))}
    </div>
  );
}
