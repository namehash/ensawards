import {
  type AggregatedReferrerMetrics,
  type AwardedReferrerMetrics,
  type ReferralProgramRules,
} from "@namehash/ens-referrals";
import { ResolveAndDisplayIdentity, useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";

import { buildUnresolvedIdentity, getENSRootChainId } from "@ensnode/ensnode-sdk";

import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { getEnsAdvocateDetailsRelativePath, getEnsAwardsBaseUrl } from "@/utils";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

import { RankIcon, ReferrerCardFieldTooltipContents } from "./shared.tsx";

export interface ReferrerCardProps {
  referrer: AwardedReferrerMetrics;
  aggregatedMetrics: AggregatedReferrerMetrics;
  referralRules: ReferralProgramRules;
}

/**
 * Display a single Referrer on the {@link ReferrerLeaderboardPage}.
 *
 * This component is specifically designed for the {@link ReferralProgramAwardModels.PieSplit} award model.
 */
export function ReferrerCardPieSplit({
  referrer,
  aggregatedMetrics,
  referralRules,
}: ReferrerCardProps) {
  const namespaceId = DEFAULT_ENS_NAMESPACE;
  const referrerIdentity = buildUnresolvedIdentity(
    referrer.referrer,
    namespaceId,
    getENSRootChainId(namespaceId),
  );

  const now = useNow({ timeToRefresh: secondsInMinute });

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const numberFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const yearsRequiredToBeQualified = numberFormatter.format(
    Math.max(0.01, aggregatedMetrics.minFinalScoreToQualify - referrer.finalScore),
  );

  const advocateDetailsUrl = new URL(
    getEnsAdvocateDetailsRelativePath(referrer.referrer),
    getEnsAwardsBaseUrl(),
  );

  return (
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white">
      {/*Desktop Header*/}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-4">
        <RankIcon rank={referrer.rank} isQualified={referrer.isQualified} />
        <div className="flex flex-nowrap flex-row justify-start items-center gap-3">
          <ResolveAndDisplayIdentity
            identity={referrerIdentity}
            namespaceId={namespaceId}
            withIdentifier={false}
            withAvatar={true}
            withTooltip={false}
            identityLinkDetails={{
              isExternal: false,
              link: advocateDetailsUrl,
            }}
          />
          <div className="sm:min-w-[170px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
              Referrer
            </p>
            <ResolveAndDisplayIdentity
              identity={referrerIdentity}
              namespaceId={namespaceId}
              withIdentifier={true}
              withAvatar={false}
              withTooltip={false}
              identityLinkDetails={{
                isExternal: false,
                link: advocateDetailsUrl,
              }}
              className="font-medium sm:max-w-[170px] sm:overflow-x-auto"
            />
          </div>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="sm:hidden flex flex-row-reverse flex-nowrap justify-end items-start gap-4 w-full relative">
        <RankIcon
          rank={referrer.rank}
          isQualified={referrer.isQualified}
          className="absolute top-0 right-0"
        />
        <ResolveAndDisplayIdentity
          identity={referrerIdentity}
          namespaceId={namespaceId}
          withIdentifier={false}
          withAvatar={true}
          withTooltip={false}
          identityLinkDetails={{
            isExternal: false,
            link: advocateDetailsUrl,
          }}
        />
      </div>
      <div className="min-w-[120px] sm:hidden flex flex-row flex-nowrap justify-between items-start self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Referrer
        </p>
        <ResolveAndDisplayIdentity
          identity={referrerIdentity}
          namespaceId={namespaceId}
          withIdentifier={true}
          withAvatar={false}
          withTooltip={false}
          identityLinkDetails={{
            isExternal: false,
            link: advocateDetailsUrl,
          }}
          className="font-medium"
        />
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={
            <p className="max-w-[140px]">{ReferrerCardFieldTooltipContents.ReferralYears}</p>
          }
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">Referral years</p>
        </GenericTooltip>
        <p className="text-sm leading-normal font-medium text-black">
          {numberFormatter.format(referrer.score)}
        </p>
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={<p className="max-w-[140px]">{ReferrerCardFieldTooltipContents.RankBoost}</p>}
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">Rank boost</p>
        </GenericTooltip>
        <p className="text-sm leading-normal font-medium text-black">
          {Math.round(referrer.finalScoreBoost * 100)}%
        </p>
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={<p className="max-w-[140px]">{ReferrerCardFieldTooltipContents.FinalScore}</p>}
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">Final score</p>
        </GenericTooltip>
        <p className="text-sm leading-normal font-medium text-black">
          {numberFormatter.format(referrer.finalScore)}
        </p>
      </div>
      <div className="sm:min-w-[190px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={<p className="max-w-[200px]">{ReferrerCardFieldTooltipContents.BudgetShare}</p>}
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">Budget share</p>
        </GenericTooltip>
        {referrer.isQualified ? (
          <div className="flex flex-row flex-nowrap justify-start items-center gap-2 self-stretch">
            <div className="max-sm:hidden flex relative w-20 h-[7px] rounded-[20px] bg-gray-200 z-0">
              <div
                className="absolute h-full self-stretch rounded-[20px] z-10 bg-emerald-600"
                style={{
                  width: `calc(${referrer.awardPoolShare * 100}%)`,
                }}
              ></div>
            </div>
            <p className="text-sm leading-normal font-medium sm:font-semibold text-emerald-600">
              {numberFormatter.format(referrer.awardPoolShare * 100)}%
            </p>
          </div>
        ) : (
          <p className="text-sm leading-normal font-semibold text-black max-sm:text-end">
            Requires{" "}
            {yearsRequiredToBeQualified === "1.00"
              ? "1 more year"
              : `${yearsRequiredToBeQualified} more years`}
          </p>
        )}
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={<p className="max-w-[140px]">{ReferrerCardFieldTooltipContents.Awards}</p>}
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">Awards</p>
        </GenericTooltip>
        <p
          className={cn(
            "text-sm font-semibold leading-normal",
            referrer.isQualified ? "text-emerald-600" : "text-black font-normal",
          )}
        >
          {referrer.isQualified ? (
            <>US {currencyFormatter.format(referrer.awardPoolApproxValue)}</>
          ) : (
            "-"
          )}
        </p>
      </div>
    </div>
  );
}
