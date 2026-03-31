import {
  ReferralProgramAwardModels,
  type ReferralProgramEditionSummary,
} from "@namehash/ens-referrals/v1";

import { ReferralProgramStatusBadge } from "@/components/atoms/badges/ReferralProgramStatusBadge";
import {
  ReferralProgramEditionAwardPool,
  ReferralProgramEditionFieldLoading,
  ReferralProgramEditionRules,
  ReferralProgramEditionTimePeriod,
} from "@/components/atoms/cards/referralProgramEditionCard/shared.tsx";
import { parseReferralProgramCurrency } from "@/utils/referralProgram.ts";
import { currencyFormatter } from "@/utils/textModifications.ts";

interface ReferralProgramEditionInfoProps {
  referralProgramEditionSummary: ReferralProgramEditionSummary;
  isLoading: boolean;
}

export const ReferralProgramEditionInfo = ({
  referralProgramEditionSummary,
  isLoading,
}: ReferralProgramEditionInfoProps) => {
  // The config of an unrecognized edition will never be passed here,
  // but we perform the check for the type safety
  if (referralProgramEditionSummary.awardModel === ReferralProgramAwardModels.Unrecognized) {
    return null;
  }

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
          startTime={referralProgramEditionSummary.rules.startTime}
          endTime={referralProgramEditionSummary.rules.endTime}
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
        <ReferralProgramEditionAwardPool
          totalAwardPoolValue={referralProgramEditionSummary.rules.totalAwardPoolValue}
        />
      )}
      {referralProgramEditionSummary.awardModel === ReferralProgramAwardModels.RevShareLimit &&
        (isLoading ? (
          <ReferralProgramEditionFieldLoading
            label="Award pool remaining"
            styles={{
              container:
                "flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[135px] sm:flex-col sm:justify-center max-sm:self-stretch",
              skeleton: "w-[100px] h-[14px] mt-[4px] mb-[3px]",
            }}
          />
        ) : (
          <div className="flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[135px] sm:flex-col sm:justify-center max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-default">
              Award pool remaining
            </p>
            <p className="text-sm leading-normal font-medium text-black max-sm:text-right cursor-default">
              {currencyFormatter.format(
                parseReferralProgramCurrency(referralProgramEditionSummary.awardPoolRemaining),
              )}{" "}
              USD
            </p>
          </div>
        ))}
      {isLoading ? (
        <ReferralProgramEditionFieldLoading label="Rules" />
      ) : (
        <ReferralProgramEditionRules
          rulesUrlHref={`/ens-referral-program/editions/${referralProgramEditionSummary.slug}/rules`}
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
          <ReferralProgramStatusBadge status={referralProgramEditionSummary.status} />
        </div>
      )}
    </>
  );
};
