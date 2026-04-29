import { type ReferrerRank } from "@namehash/ens-referrals";
import { ResolveAndDisplayIdentity } from "@namehash/namehash-ui";
import type { Address } from "enssdk";

import { getENSRootChainId } from "@ensnode/datasources";
import { buildUnresolvedIdentity } from "@ensnode/ensnode-sdk";

import firstPlaceIcon from "@/assets/firstPlaceAward.svg";
import secondPlaceIcon from "@/assets/secondPlaceAward.svg";
import thirdPlaceIcon from "@/assets/thirdPlaceAward.svg";
import { GenericTooltip } from "@/components/atoms/GenericTooltip";
import { getEnsAdvocateDetailsRelativePath, getEnsAwardsBaseUrl } from "@/utils";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace";
import { cn } from "@/utils/tailwindClassConcatenation";

export const placeIcons = [firstPlaceIcon, secondPlaceIcon, thirdPlaceIcon];

export const numberFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const ethFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
});

export const getAdvocateDetailsUrl = (referrerAddress: Address) =>
  new URL(getEnsAdvocateDetailsRelativePath(referrerAddress), getEnsAwardsBaseUrl());

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

  rankTooltipText: string;
  className?: string;
}

/**
 * Display {@link RankedReferrerMetrics.rank}.
 */
export const RankIcon = ({ rank, isQualified, rankTooltipText, className }: RankProps) => (
  <GenericTooltip content={<p>{rankTooltipText}</p>} tooltipOffset={1}>
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

export const RankIconLoading = ({
  rank,
  className,
}: Omit<RankProps, "isQualified" | "rankTooltipText">) => (
  <GenericTooltip content={<p>Loading the data. Please wait.</p>} tooltipOffset={1}>
    <div className="w-8 h-8 box-border flex justify-center items-center">
      {rank <= 3 ? (
        <img alt={`${rank}-place`} src={placeIcons[rank - 1].src} className={className} />
      ) : (
        <span
          className={cn(
            "w-fit h-6 box-border flex justify-center items-center text-xs leading-5 font-semibold rounded-full border px-2",
            "text-gray-600 bg-gray-100 border-gray-200",
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

interface ReferrerCardHeaderProps {
  referrer: Address;
  rank: ReferrerRank;
  rankTooltipText: string;
  isQualified: boolean;
}

export const ReferrerCardHeader = ({
  referrer,
  rank,
  rankTooltipText,
  isQualified,
}: ReferrerCardHeaderProps) => {
  const namespaceId = DEFAULT_ENS_NAMESPACE;
  const referrerIdentity = buildUnresolvedIdentity(
    referrer,
    namespaceId,
    getENSRootChainId(namespaceId),
  );

  const advocateDetailsUrl = getAdvocateDetailsUrl(referrer);

  return (
    <>
      {/*Desktop Header*/}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-4">
        <RankIcon rank={rank} isQualified={isQualified} rankTooltipText={rankTooltipText} />
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
          rank={rank}
          isQualified={isQualified}
          rankTooltipText={rankTooltipText}
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
    </>
  );
};

export const ReferrerCardHeaderLoading = ({
  rank,
}: Omit<ReferrerCardHeaderProps, "referrer" | "isQualified" | "rankTooltipText">) => {
  const loadingStateStyles = "animate-pulse bg-gray-200 rounded-sm";

  return (
    <>
      {/*Desktop Header*/}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-4">
        <RankIconLoading rank={rank} />
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="animate-pulse w-10 h-10 bg-gray-200 rounded-full" />
          <div className="sm:min-w-[170px] flex flex-col flex-nowrap justify-center items-start gap-0 max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
            <div className={cn(loadingStateStyles, "w-[100px] h-[14px] mt-[4px] mb-[3px]")} />
          </div>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="sm:hidden flex flex-row flex-nowrap justify-start items-start gap-4 self-stretch relative">
        <div className="animate-pulse w-10 h-10 bg-gray-200 rounded-full" />
        <RankIconLoading rank={rank} className="absolute top-0 right-0" />
      </div>
      {/*------------*/}
      <div className="min-w-[120px] sm:hidden flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
        <div className={cn(loadingStateStyles, "w-[100px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
    </>
  );
};

export const ReferralYearsField = ({ referralYears }: { referralYears: number }) => (
  <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
    <GenericTooltip
      tooltipOffset={0}
      content={
        <p className="max-w-[140px]">Total duration of all referred registrations and renewals</p>
      }
    >
      <p className="text-muted-foreground text-sm leading-normal font-normal">Referral years</p>
    </GenericTooltip>
    <p className="text-sm leading-normal font-medium text-black">
      {numberFormatter.format(referralYears)}
    </p>
  </div>
);
