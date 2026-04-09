import type {
  AwardedReferrerMetricsRevShareLimit,
  ReferralProgramEditionSlug,
  ReferralProgramRulesRevShareLimit,
} from "@namehash/ens-referrals/v1";
import { BASE_REVENUE_CONTRIBUTION_PER_YEAR, SECONDS_PER_YEAR } from "@namehash/ens-referrals/v1";
import { TriangleAlert as RulesBreachIcon } from "lucide-react";
import { memo } from "react";

import {
  ethFormatter,
  numberFormatter,
  ReferrerCardHeader,
} from "@/components/atoms/cards/referrerCard/shared";
import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { REFERRAL_PROGRAM_WARNINGS } from "@/components/referral-awards-program/referrers/warnings";
import { parseReferralProgramCurrency } from "@/utils/referralProgram.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { currencyFormatter } from "@/utils/textModifications";

export interface ReferrerCardRevShareLimitProps {
  referrer: AwardedReferrerMetricsRevShareLimit;
  editionRules: ReferralProgramRulesRevShareLimit;
  editionSlug?: ReferralProgramEditionSlug;
}

/**
 * Display a single Referrer on the {@link ReferrerLeaderboardPage}.
 *
 * This component is specifically designed for the {@link ReferralProgramAwardModels.RevShareLimit} award model.
 */
function ReferrerCardRevShareLimit({
  referrer,
  editionRules,
  editionSlug,
}: ReferrerCardRevShareLimitProps) {
  return (
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white">
      <ReferrerCardHeader
        referrer={referrer.referrer}
        rank={referrer.rank}
        rankTooltipText={`Rank ${referrer.rank}`}
        isQualified={referrer.isQualified}
      />
      <TotalRevenueContributionField referrer={referrer} />
      <BaseRevenueContributionField referrer={referrer} />
      <RevenueShareField
        referrer={referrer}
        editionRules={editionRules}
        editionSlug={editionSlug}
      />
      <TentativeAwardsField referrer={referrer} />
    </div>
  );
}

export const TotalRevenueContributionField = ({
  referrer,
}: {
  referrer: AwardedReferrerMetricsRevShareLimit;
}) => {
  const referralYears = numberFormatter.format(
    referrer.totalIncrementalDuration / SECONDS_PER_YEAR,
  );
  const userFacingReferralYears = referralYears === "1.00" ? "1 year" : `${referralYears} years`;

  return (
    <div className="sm:min-w-[175px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
      <GenericTooltip
        tooltipOffset={0}
        content={
          <p className="max-w-[220px]">
            Total ENS DAO revenue from {userFacingReferralYears} of registrations and renewals
            referred by this referrer during this edition. Includes premium revenue sources.
          </p>
        }
      >
        <p className="text-muted-foreground text-sm leading-normal font-normal text-left">
          Total revenue contribution
        </p>
      </GenericTooltip>
      <p className="text-sm leading-normal font-medium text-black max-sm:text-right">
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

  const totalBaseRevenueContributionInUSD = currencyFormatter.format(
    parseReferralProgramCurrency(referrer.totalBaseRevenueContribution),
  );

  const userFacingTotalBaseRevenueContribution =
    totalBaseRevenueContributionInUSD === "$0.00" ? "$0.01" : totalBaseRevenueContributionInUSD;

  return (
    <div className="sm:min-w-[175px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
      <GenericTooltip
        tooltipOffset={0}
        content={
          <p className="max-w-[220px]">
            Measured as US{" "}
            {currencyFormatter.format(
              parseReferralProgramCurrency(BASE_REVENUE_CONTRIBUTION_PER_YEAR),
            )}{" "}
            × {referralYears} years of registrations and renewals referred by this referrer during
            this edition. Excludes premium revenue sources.
          </p>
        }
      >
        <p className="text-muted-foreground text-sm leading-normal font-normal text-left">
          Base revenue contribution
        </p>
      </GenericTooltip>
      <p className="text-sm leading-normal font-medium text-black max-sm:text-right">
        US {userFacingTotalBaseRevenueContribution}
      </p>
    </div>
  );
};

export const RevenueShareField = ({
  referrer,
  editionRules,
  editionSlug,
}: ReferrerCardRevShareLimitProps) => {
  const possibleWarning = editionSlug
    ? REFERRAL_PROGRAM_WARNINGS.get(editionSlug)?.get(referrer.referrer)
    : undefined;

  const minQualifiedRevenueContributionInUSD = currencyFormatter.format(
    parseReferralProgramCurrency(editionRules.minQualifiedRevenueContribution),
  );
  const qualifiedRevenueSharePercentage = `${Math.round(editionRules.qualifiedRevenueShare * 100)}%`;

  const additionalRevenueRequiredInUSD = currencyFormatter.format(
    parseReferralProgramCurrency({
      currency: editionRules.minQualifiedRevenueContribution.currency,
      amount:
        editionRules.minQualifiedRevenueContribution.amount -
        referrer.totalBaseRevenueContribution.amount,
    }),
  );

  const userFacingAdditionalRevenueRequired =
    additionalRevenueRequiredInUSD === "$0.00" ? "$0.01" : additionalRevenueRequiredInUSD;

  const tooltipContent = referrer.isAdminDisqualified
    ? "This referrer violated a rule of the referral program edition (see alert icon below for more info) and is therefore disqualified from any revenue share during this edition."
    : referrer.isQualified
      ? `This referrer contributed base revenues of US ${minQualifiedRevenueContributionInUSD} or more during this referral program edition and therefore qualifies to earn a ${qualifiedRevenueSharePercentage} share of their base revenue contribution until this edition ends or its budget is exhausted`
      : `To qualify for a revenue share, this referrer must first achieve at least an additional US ${userFacingAdditionalRevenueRequired} base revenue contribution to meet the US ${minQualifiedRevenueContributionInUSD} minimum before this referral program edition ends or its budget is exhausted.`;

  const displayContent = referrer.isAdminDisqualified ? (
    <DisqualifiedFieldContent referrer={referrer} />
  ) : (
    <div className="flex flex-row justify-start items-start gap-2">
      <p
        className={cn(
          "text-sm font-normal leading-normal max-sm:text-right",
          referrer.isQualified ? "text-emerald-600 font-semibold" : "text-black font-medium",
          possibleWarning && "text-orange-600",
        )}
      >
        {referrer.isQualified ? qualifiedRevenueSharePercentage : "Requires more referrals"}
      </p>
      {possibleWarning && (
        <GenericTooltip
          content={
            <div className="max-w-[220px] flex flex-col justify-start items-start gap-0.5">
              <h3 className="text-sm leading-normal font-semibold">Disqualification warning</h3>
              <p>{possibleWarning}</p>
            </div>
          }
          tooltipOffset={2}
        >
          <RulesBreachIcon size={18} className="text-orange-600 shrink-0" />
        </GenericTooltip>
      )}
    </div>
  );

  return (
    <div className="sm:min-w-[195px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
      <GenericTooltip tooltipOffset={0} content={<p className="max-w-[220px]">{tooltipContent}</p>}>
        <p className="text-muted-foreground text-sm leading-normal font-normal text-left">
          Base revenue share
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
  <div className="flex flex-row justify-start items-start gap-2">
    <p className="text-sm font-semibold leading-normal text-red-600 text-right">Disqualified</p>
    <GenericTooltip
      tooltipOffset={0}
      // `referrer.adminDisqualificationReason` will never be null if `referrer.isAdminDisqualified` is true
      // This fallback is introduced for type-safety
      content={
        <div className="max-w-[220px] flex flex-col justify-start items-start gap-0.5">
          <h3 className="text-sm leading-normal font-semibold">Disqualification</h3>
          <p>
            {referrer.adminDisqualificationReason ??
              "User disqualified due to the breach of the edition's rules"}
          </p>
        </div>
      }
    >
      <RulesBreachIcon size={18} className="text-red-600" />
    </GenericTooltip>
  </div>
);

export const TentativeAwardsField = ({
  referrer,
}: {
  referrer: AwardedReferrerMetricsRevShareLimit;
}) => {
  return (
    <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
      <GenericTooltip
        tooltipOffset={0}
        content={
          <p className="max-w-[220px]">
            Estimated awards that will be paid to the referrer at the conclusion of this referral
            program edition.
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
          "-"
        )}
      </p>
    </div>
  );
};

export const ReferrerCardRevShareLimitMemo = memo(ReferrerCardRevShareLimit);
