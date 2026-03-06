import type {
  ReferrerLeaderboardPage,
  ReferrerLeaderboardPageParams,
} from "@namehash/ens-referrals";
import type { ReactElement } from "react";

import { ReferrerCardLoading } from "@/components/atoms/cards/referrerCard/ReferrerCardLoading";
import { ReferrerCardPieSplit } from "@/components/atoms/cards/referrerCard/ReferrerCardPieSplit";
import { LastUpdateTime } from "@/components/atoms/datetime/LastUpdateTime";
import { EmptyLeaderboardInfo } from "@/components/referral-awards-program/referrers/utils.tsx";

export interface DisplayReferrerLeaderboardPageProps {
  leaderboardPageData: ReferrerLeaderboardPage | null;
  isLoading: boolean;
  leaderboardPageFetchError?: ReactElement;
  paginationParams?: Required<ReferrerLeaderboardPageParams>;
}

/**
 * Display {@link ReferrerLeaderboardPage} as a list of ranked referrers.
 */
export function DisplayReferrerLeaderboardPage({
  leaderboardPageData,
  isLoading,
  leaderboardPageFetchError,
  paginationParams = {
    page: 1,
    recordsPerPage: 5,
  },
}: DisplayReferrerLeaderboardPageProps) {
  if (leaderboardPageFetchError !== undefined) {
    return leaderboardPageFetchError;
  }

  if (isLoading || leaderboardPageData === null) {
    const pageOffset = (paginationParams.page - 1) * paginationParams.recordsPerPage;

    return (
      <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-end gap-2 sm:gap-3">
        {[...Array(paginationParams.recordsPerPage).keys()].map((elem) => (
          <ReferrerCardLoading
            key={`Referrer-loading-${pageOffset + elem}`}
            rank={pageOffset + elem + 1}
          />
        ))}
      </div>
    );
  }

  if (leaderboardPageData.pageContext.totalRecords === 0) {
    return (
      <div className="w-full h-fit md:min-h-[305px] flex flex-col flex-nowrap justify-center items-center gap-3 sm:gap-4 md:bg-[url(/src/assets/emptyReferrersListBackgroundImage.png)] bg-no-repeat bg-contain bg-center">
        <EmptyLeaderboardInfo
          header="Looks like there's no referrals in this referral program cycle yet"
          description="Wanna be first? Generate your referral link and earn awards!"
          buttonData={{
            label: "Generate your referral link",
            href: "/ens-referral-program#generate-referral-link",
          }}
        />
        <LastUpdateTime timestamp={leaderboardPageData.accurateAsOf} className="text-base" />
      </div>
    );
  }

  return (
    <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-3">
      {leaderboardPageData.referrers.map((referrer, idx) => (
        <ReferrerCardPieSplit
          key={`Referrer-${referrer.referrer}`}
          referrer={referrer}
          aggregatedMetrics={leaderboardPageData.aggregatedMetrics}
          referralRules={leaderboardPageData.rules}
        />
      ))}
    </div>
  );
}
