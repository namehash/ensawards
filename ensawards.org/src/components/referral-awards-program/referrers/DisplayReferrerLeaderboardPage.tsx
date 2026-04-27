import {
  ReferralProgramAwardModels,
  type ReferralProgramEditionSummary,
  type ReferrerLeaderboardPageParams,
  type ReferrerLeaderboardPagePieSplit,
  type ReferrerLeaderboardPageRevShareCap,
} from "@namehash/ens-referrals";
import type { ReactElement } from "react";

import { ReferrerCardPieSplitMemo } from "@/components/atoms/cards/referrerCard/pie-split";
import { ReferrerCardPieSplitLoading } from "@/components/atoms/cards/referrerCard/pie-split/loading";
import { ReferrerCardRevShareCapMemo } from "@/components/atoms/cards/referrerCard/rev-share";
import { ReferrerCardRevShareCapLoading } from "@/components/atoms/cards/referrerCard/rev-share/loading";
import { LastUpdateTime } from "@/components/atoms/datetime/LastUpdateTime";
import { EmptyLeaderboardInfo } from "@/components/referral-awards-program/referrers/utils.tsx";

export interface DisplayReferrerLeaderboardPageProps {
  leaderboardPageData: ReferrerLeaderboardPageRevShareCap | ReferrerLeaderboardPagePieSplit | null;
  isLoading: boolean;
  editionSummary: ReferralProgramEditionSummary | null;
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
  editionSummary,
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
        {[...Array(paginationParams.recordsPerPage).keys()].map((elem) => {
          if (
            editionSummary === null ||
            editionSummary.awardModel === ReferralProgramAwardModels.PieSplit
          ) {
            return (
              <ReferrerCardPieSplitLoading
                key={`Referrer-loading-${pageOffset + elem}`}
                rank={pageOffset + elem + 1}
              />
            );
          }

          // Return rev share limit loading for all other cases since it's newer
          return (
            <ReferrerCardRevShareCapLoading
              key={`Referrer-loading-${pageOffset + elem}`}
              rank={pageOffset + elem + 1}
            />
          );
        })}
      </div>
    );
  }

  if (leaderboardPageData.pageContext.totalRecords === 0) {
    return (
      <div className="w-full h-fit md:min-h-[305px] flex flex-col flex-nowrap justify-center items-center gap-3 sm:gap-4 md:bg-[url(/src/assets/emptyReferrersListBackgroundImage.png)] bg-no-repeat bg-contain bg-center">
        <EmptyLeaderboardInfo
          header="Looks like there's no referrals in this referral program edition yet"
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
      {leaderboardPageData.awardModel === ReferralProgramAwardModels.PieSplit &&
        leaderboardPageData.referrers.map((referrer) => (
          <ReferrerCardPieSplitMemo
            key={`Referrer-${referrer.referrer}`}
            referrer={referrer}
            aggregatedMetrics={leaderboardPageData.aggregatedMetrics}
          />
        ))}
      {leaderboardPageData.awardModel === ReferralProgramAwardModels.RevShareCap &&
        leaderboardPageData.referrers.map((referrer) => (
          <ReferrerCardRevShareCapMemo
            key={`Referrer-${referrer.referrer}`}
            referrer={referrer}
            editionRules={leaderboardPageData.rules}
            editionSlug={editionSummary?.slug}
          />
        ))}
    </div>
  );
}
