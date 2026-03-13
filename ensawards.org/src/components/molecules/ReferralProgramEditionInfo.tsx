import {
  type AggregatedReferrerMetricsRevShareLimit,
  ReferralProgramAwardModels,
  type ReferralProgramEditionConfig,
  ReferralProgramStatuses,
  type ReferralProgramStatusId,
} from "@namehash/ens-referrals/v1";

import {
  ExhaustedReferralProgramStatus,
  ReferralProgramStatusBadge,
} from "@/components/atoms/badges/ReferralProgramStatusBadge";
import {
  ReferralProgramEditionBudget,
  ReferralProgramEditionRules,
  ReferralProgramEditionTimePeriod,
} from "@/components/atoms/cards/referralProgramEditionCard";
import { ReferralProgramEditionFieldLoading } from "@/components/atoms/cards/referralProgramEditionCard/loading.tsx";
import { currencyFormatter } from "@/components/atoms/cards/referrerCard/shared.tsx";
import { getEnsAwardsBaseUrl } from "@/utils/index.ts";
import { parseReferralProgramCurrency } from "@/utils/referralProgram.ts";

interface ReferralProgramEditionInfoProps {
  referralProgramEdition: ReferralProgramEditionConfig;
  referralProgramEditionStatus: ReferralProgramStatusId;
  aggregatedEditionMetrics: AggregatedReferrerMetricsRevShareLimit | null;
  isLoading: boolean;
}

export const ReferralProgramEditionInfo = ({
  referralProgramEdition,
  referralProgramEditionStatus,
  aggregatedEditionMetrics,
  isLoading,
}: ReferralProgramEditionInfoProps) => {
  // The config of an unrecognized edition will never be passed here,
  // but we perform the check for the type safety
  if (referralProgramEdition.rules.awardModel === ReferralProgramAwardModels.Unrecognized) {
    return null;
  }

  const isAwardPoolExhausted =
    referralProgramEditionStatus === ReferralProgramStatuses.Active &&
    aggregatedEditionMetrics !== null &&
    aggregatedEditionMetrics.awardPoolRemaining.amount === 0n;

  return (
    <>
      {isLoading ? (
        <ReferralProgramEditionFieldLoading
          label="Time period"
          styles={{
            skeleton: "w-[173px] h-[14px] mt-[4px] mb-[3px]",
          }}
        />
      ) : (
        <ReferralProgramEditionTimePeriod
          startTime={referralProgramEdition.rules.startTime}
          endTime={referralProgramEdition.rules.endTime}
        />
      )}
      {isLoading ? (
        <ReferralProgramEditionFieldLoading
          label="Budget"
          styles={{
            skeleton: "w-[109px] h-[14px] mt-[4px] mb-[3px]",
          }}
        />
      ) : (
        <ReferralProgramEditionBudget
          totalAwardPoolValue={referralProgramEdition.rules.totalAwardPoolValue}
        />
      )}
      {referralProgramEdition.rules.awardModel === ReferralProgramAwardModels.RevShareLimit &&
        (isLoading ? (
          <ReferralProgramEditionFieldLoading
            label="Budget remaining"
            styles={{
              container:
                "flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[117px] sm:flex-col sm:justify-center max-sm:self-stretch",
              skeleton: "w-[100px] h-[14px] mt-[4px] mb-[3px]",
            }}
          />
        ) : aggregatedEditionMetrics !== null ? (
          <div className="flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[110px] sm:flex-col sm:justify-center max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-default">
              Budget remaining
            </p>
            <p className="text-sm leading-normal font-medium text-black max-sm:text-right cursor-default">
              {currencyFormatter.format(
                parseReferralProgramCurrency(aggregatedEditionMetrics.awardPoolRemaining),
              )}{" "}
              USD
            </p>
          </div>
        ) : null)}
      {isLoading ? (
        <ReferralProgramEditionFieldLoading label="Rules" />
      ) : (
        <ReferralProgramEditionRules
          rulesUrl={
            new URL(
              `/ens-referral-program/editions/${referralProgramEdition.slug}/rules`,
              getEnsAwardsBaseUrl(),
            )
          }
        />
      )}
      {isLoading ? (
        <ReferralProgramEditionFieldLoading
          label="Status"
          styles={{
            skeleton: "h-[15px] w-[60px] rounded-full",
          }}
        />
      ) : (
        <div className="flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[80px] sm:flex-col sm:justify-center max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-default">
            Status
          </p>
          <ReferralProgramStatusBadge
            status={
              isAwardPoolExhausted
                ? ExhaustedReferralProgramStatus.Exhausted
                : referralProgramEditionStatus
            }
          />
        </div>
      )}
    </>
  );
};
