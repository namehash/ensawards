import { ReferrerCard, ReferrerCardLoading } from "@/components/atoms/cards/ReferrerCard.tsx";
import { EmptyLeaderboardInfo } from "@/components/referral-awards-program/referrers/utils.tsx";
import { ReferrerLeaderboardLastUpdateTime } from "@/components/referral-awards-program/referrers/utils.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type {
  ReferrerLeaderboardPage,
  ReferrerLeaderboardPaginationParams,
} from "@namehash/ens-referrals";
import type { ReactElement } from "react";

export interface DisplayReferrerLeaderboardPageProps {
  leaderboardPageData: ReferrerLeaderboardPage | null;
  isLoading: boolean;
  leaderboardPageFetchError?: ReactElement;
  header?: string;
  leaderboardPageLoadingData?: Required<ReferrerLeaderboardPaginationParams>;
}

/**
 * Display {@link ReferrerLeaderboardPage} as a list of ranked referrers.
 */
export function DisplayReferrerLeaderboardPage({
  leaderboardPageData,
  isLoading,
  leaderboardPageFetchError,
  header,
  leaderboardPageLoadingData = {
    page: 0,
    itemsPerPage: 5,
  },
}: DisplayReferrerLeaderboardPageProps) {
  if (leaderboardPageFetchError !== undefined) {
    return leaderboardPageFetchError;
  }

  if (isLoading || leaderboardPageData === null) {
    const pageOffset =
      (leaderboardPageLoadingData.page - 1) * leaderboardPageLoadingData.itemsPerPage;

    return (
      <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-end gap-2 sm:gap-3">
        {[...Array(leaderboardPageLoadingData.itemsPerPage).keys()].map((elem) => (
          <ReferrerCardLoading
            key={`Referrer-loading-${pageOffset + elem}`}
            rank={pageOffset + elem + 1}
          />
        ))}
      </div>
    );
  }

  if (leaderboardPageData.paginationContext.totalRecords === 0) {
    return (
      <div className="w-full h-fit md:min-h-[305px] flex flex-col flex-nowrap justify-center items-center gap-3 sm:gap-4 md:bg-[url(/src/assets/emptyReferrersListBackgroundImage.png)] bg-no-repeat bg-contain bg-center">
        <EmptyLeaderboardInfo />
        <ReferrerLeaderboardLastUpdateTime
          timestamp={leaderboardPageData.accurateAsOf}
          className="text-base"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-3">
      <div
        className={cn(
          "w-full h-fit flex flex-row flex-nowrap items-end sm:items-center justify-start",
          !header && "hidden",
        )}
      >
        {header && (
          <h3 className="text-xl sm:text-2xl leading-normal font-semibold text-black">{header}</h3>
        )}
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
