import { type ReferrerRank } from "@namehash/ens-referrals/v1";

import firstPlaceIcon from "@/assets/firstPlaceAward.svg";
import secondPlaceIcon from "@/assets/secondPlaceAward.svg";
import thirdPlaceIcon from "@/assets/thirdPlaceAward.svg";
import { GenericTooltip } from "@/components/atoms/GenericTooltip";
import { cn } from "@/utils/tailwindClassConcatenation";

export const placeIcons = [firstPlaceIcon, secondPlaceIcon, thirdPlaceIcon];

export const ReferrerCardFieldTooltipContents = {
  ReferralYears: "Total duration of all referred registrations and renewals",
  RankBoost: "Leaderboard rank multiplier boost to final score",
  FinalScore: "One point per referral year with added rank boost",
  BudgetShare:
    "Tentative share of total award pool based on final scores of all qualified referrers",
  Awards: "Estimated value of $ENS awards in USD",
} satisfies Record<string, string>;

export interface RankProps {
  /**
   * Represents the position in the list
   * @invariant must be a positive integer (>= 1)
   */
  rank: ReferrerRank;

  /**
   * Identifies if the referrer meets the qualifications of the referral program rules.
   * For more details see {@link AwardedReferrerMetrics.isQualified}
   */
  isQualified: boolean;
  className?: string;
}

/**
 * Display {@link RankedReferrerMetrics.rank}.
 */
export const RankIcon = ({ rank, isQualified, className }: RankProps) => (
  <GenericTooltip
    content={
      <p>
        {isQualified
          ? `Rank ${rank} is qualified for awards.`
          : `Rank ${rank} does not qualify for awards.`}
      </p>
    }
    tooltipOffset={4}
  >
    <div className="w-8 h-8 box-border flex justify-center items-center">
      {rank <= 3 ? (
        <img alt={`${rank}-place`} src={placeIcons[rank - 1].src} className={className} />
      ) : (
        <span
          className={cn(
            "w-fit h-6 box-border flex justify-center items-center text-xs leading-5 font-semibold rounded-full border px-2",
            isQualified
              ? "text-emerald-700 bg-[#10B9811A] border-[#0596691A]"
              : "text-red-600 bg-[#EF44441A] border-[#DC26261A]",
            rank < 10 && "w-6",
            className,
          )}
        >
          {rank}
        </span>
      )}
    </div>
  </GenericTooltip>
);
