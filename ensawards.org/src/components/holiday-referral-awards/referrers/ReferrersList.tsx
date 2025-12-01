import { ReferrerCard, ReferrerCardLoading } from "@/components/atoms/cards/ReferrerCard.tsx";
import { NoReferrersInfo } from "@/components/holiday-referral-awards/referrers/utils.tsx";
import { ReferrersSnapshotTime } from "@/components/holiday-referral-awards/referrers/utils.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { ReactElement } from "react";
import type {ReferrerLeaderboardPage} from "@namehash/ens-referrals";

export interface ReferrersListProps {
  referrersData: ReferrerLeaderboardPage | null;
  isLoading: boolean;
  generateLinkCTA: ReactElement;
  error?: ReactElement;
  header?: string;
  loadingStateData?: {
    numberOfItemsToDisplay: number;
    referrerPositionOffset: number;
  }
}

export function ReferrersList({
  referrersData,
  isLoading,
  generateLinkCTA,
  error,
  header,
  loadingStateData = {
    referrerPositionOffset: 0,
    numberOfItemsToDisplay: 5,
  },
}: ReferrersListProps) {
  if (error !== undefined) {
    return error;
  }

  if (isLoading || referrersData === null) {
    return (
      <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-end gap-2 sm:gap-3">
        <Skeleton className="w-[200px] h-5 bg-gray-300" />
        {[...Array(loadingStateData.numberOfItemsToDisplay).keys()].map((elem) => (
          <ReferrerCardLoading
            key={`Referrer-loading-${loadingStateData.referrerPositionOffset + elem}`}
            rank={loadingStateData.referrerPositionOffset + elem + 1}
          />
        ))}
      </div>
    );
  }

  if (referrersData.paginationContext.totalRecords === 0) {
    return (
      <div className="w-full h-fit md:min-h-[305px] flex flex-col flex-nowrap justify-center items-center gap-3 sm:gap-4 md:bg-[url(/src/assets/emptyReferrersListBackgroundImage.png)] bg-no-repeat bg-contain bg-center">
        <NoReferrersInfo cta={generateLinkCTA} />
        <ReferrersSnapshotTime lastUpdateTimestamp={referrersData.accurateAsOf} />
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
        <ReferrersSnapshotTime lastUpdateTimestamp={referrersData.accurateAsOf} />
      </div>
      {referrersData.referrers.map((referrer, idx) => (
        <ReferrerCard
          key={`Referrer-${referrer.referrer}`}
          referrer={referrer}
          aggregatedMetrics={referrersData.aggregatedMetrics}
        />
      ))}
    </div>
  );
}
