import type {
  AwardedReferrerMetricsRevShareLimit,
  ReferralProgramRulesRevShareLimit,
} from "@namehash/ens-referrals/v1";
import { BASE_REVENUE_CONTRIBUTION_PER_YEAR, SECONDS_PER_YEAR } from "@namehash/ens-referrals/v1";
import { TriangleAlert as DisqualifiedIcon } from "lucide-react";
import { memo } from "react";

import {
  currencyFormatter,
  numberFormatter,
  ReferrerCardHeader,
} from "@/components/atoms/cards/referrerCard/shared";
import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { parseReferralProgramCurrency } from "@/utils/referralProgram.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export interface ReferrerCardRevShareLimitProps {
  referrer: AwardedReferrerMetricsRevShareLimit;
  editionRules: ReferralProgramRulesRevShareLimit;
}

/**
 * Display a single Referrer on the {@link ReferrerLeaderboardPage}.
 *
 * This component is specifically designed for the {@link ReferralProgramAwardModels.RevShareLimit} award model.
 */
function ReferrerCardRevShareLimit({ referrer, editionRules }: ReferrerCardRevShareLimitProps) {
  return (
    <div
      className={cn(
        "w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white",
        referrer.isAdminDisqualified && "border-red-200 hover:border-red-300",
      )}
    >
      <ReferrerCardHeader
        referrer={referrer.referrer}
        rank={referrer.rank}
        isQualified={referrer.isQualified}
      />
      <TotalRevenueContributionField referrer={referrer} />
      <BaseRevenueContributionField referrer={referrer} />
      <RevenueShareField referrer={referrer} editionRules={editionRules} />
      <TentativeAwardsField referrer={referrer} editionRules={editionRules} />
    </div>
  );
}

export const TotalRevenueContributionField = ({
  referrer,
}: {
  referrer: AwardedReferrerMetricsRevShareLimit;
}) => {
  const ethFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });

  return (
    <div className="sm:min-w-[175px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
      <GenericTooltip
        tooltipOffset={0}
        content={
          <p className="max-w-[200px]">
            The total revenue contribution in ETH made to the ENS DAO by all referrals from this
            referrer.
          </p>
        }
      >
        <p className="text-muted-foreground text-sm leading-normal font-normal">
          Total revenue contribution
        </p>
      </GenericTooltip>
      <p className="text-sm leading-normal font-medium text-black">
        Ξ {ethFormatter.format(parseReferralProgramCurrency(referrer.totalRevenueContribution))}
      </p>
    </div>
  );
};

export const BaseRevenueContributionField = ({
  referrer,
}: {
  referrer: AwardedReferrerMetricsRevShareLimit;
}) => {
  const referralYears = numberFormatter.format(
    referrer.totalIncrementalDuration / SECONDS_PER_YEAR,
  );

  return (
    <div className="sm:min-w-[175px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
      <GenericTooltip
        tooltipOffset={0}
        content={
          <p className="max-w-[200px]">
            Measured as US $5.00 × {referralYears} referral years (total duration of all referred
            registrations and renewals). Excludes ENS DAO revenue from short-name premiums and
            recently-released temporary premiums.
          </p>
        }
      >
        <p className="text-muted-foreground text-sm leading-normal font-normal">
          Base revenue contribution
        </p>
      </GenericTooltip>
      <p className="text-sm leading-normal font-medium text-black">
        US{" "}
        {currencyFormatter.format(
          parseReferralProgramCurrency(referrer.totalBaseRevenueContribution),
        )}
      </p>
    </div>
  );
};

export const RevenueShareField = ({ referrer, editionRules }: ReferrerCardRevShareLimitProps) => {
  const tooltipContent = referrer.isAdminDisqualified
    ? "If a referrer breaks a rule they are disqualified and do not qualify for any revenue share."
    : referrer.isQualified
      ? "The share of the base revenue contribution awarded to the referrer until the budget for the referral program edition is exhausted."
      : `Qualification for a revenue share requires a base revenue contribution of at least US ${currencyFormatter.format(
          parseReferralProgramCurrency(editionRules.minQualifiedRevenueContribution),
        )}.`;

  const displayContent = referrer.isAdminDisqualified ? (
    <DisqualifiedFieldContent referrer={referrer} />
  ) : (
    <p
      className={cn(
        "text-sm font-normal leading-normal max-sm:text-right",
        referrer.isQualified ? "text-emerald-600 font-semibold" : "text-black",
      )}
    >
      {referrer.isQualified ? `${Math.round(editionRules.qualifiedRevenueShare * 100)}%` : "-"}
    </p>
  );

  return (
    <div className="sm:min-w-[125px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
      <GenericTooltip tooltipOffset={0} content={<p className="max-w-[200px]">{tooltipContent}</p>}>
        <p className="text-muted-foreground text-sm leading-normal font-normal text-left">
          Revenue share
        </p>
      </GenericTooltip>
      {displayContent}
    </div>
  );
};

const DisqualifiedFieldContent = ({
  referrer,
}: {
  referrer: AwardedReferrerMetricsRevShareLimit;
}) => (
  <div className="flex flex-row justify-start items-center gap-2">
    <p className="text-sm font-semibold leading-normal text-red-600 text-right">Disqualified</p>
    <GenericTooltip
      tooltipOffset={0}
      // `referrer.adminDisqualificationReason` will never be null if `referrer.isAdminDisqualified` is true
      // This fallback is introduced for type-safety
      content={
        <p className="max-w-[200px]">
          {referrer.adminDisqualificationReason ??
            "User disqualified due to the breach of the edition's rules"}
        </p>
      }
    >
      <DisqualifiedIcon size={18} className="text-red-600" />
    </GenericTooltip>
  </div>
);

export const TentativeAwardsField = ({
  referrer,
  editionRules,
}: ReferrerCardRevShareLimitProps) => {
  const yearsRequiredToBeQualified = numberFormatter.format(
    Math.max(
      0.01,
      parseReferralProgramCurrency({
        currency: editionRules.minQualifiedRevenueContribution.currency,
        amount:
          editionRules.minQualifiedRevenueContribution.amount -
          referrer.totalBaseRevenueContribution.amount,
      }) / parseReferralProgramCurrency(BASE_REVENUE_CONTRIBUTION_PER_YEAR),
    ),
  );
  return (
    <div className="sm:min-w-[180px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
      <GenericTooltip
        tooltipOffset={0}
        content={
          <p className="max-w-[200px]">
            Estimated value of the amount actually claimed from the pool by this referrer, capped by
            the remaining pool at the time of their qualifying events.
          </p>
        }
      >
        <p className="text-muted-foreground text-sm leading-normal font-normal text-left">
          Tentative awards
        </p>
      </GenericTooltip>
      <p
        className={cn(
          "text-sm font-semibold leading-normal text-right",
          referrer.isQualified ? "text-emerald-600" : "text-black font-normal",
        )}
      >
        {referrer.isQualified ? (
          <>
            US{" "}
            {currencyFormatter.format(parseReferralProgramCurrency(referrer.awardPoolApproxValue))}
          </>
        ) : (
          <span className="max-sm:text-right">
            {referrer.isAdminDisqualified
              ? "-"
              : `Requires 
              ${
                yearsRequiredToBeQualified === "1.00"
                  ? "1 more year"
                  : `${yearsRequiredToBeQualified} more years`
              }`}
          </span>
        )}
      </p>
    </div>
  );
};

export const ReferrerCardRevShareLimitMemo = memo(ReferrerCardRevShareLimit);
