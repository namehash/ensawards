import { ReferralProgramAwardModels } from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";
import { useEffect, useState } from "react";

import { ReferralProgramStatusBadge } from "@/components/atoms/badges/ReferralProgramStatusBadge.tsx";
import {
  ReferralProgramEditionBudget,
  type ReferralProgramEditionCardProps,
  ReferralProgramEditionRules,
  ReferralProgramEditionTimePeriod,
} from "@/components/atoms/cards/referralProgramEditionCard/shared";
import { getReferralProgramEditionSummaryBySlug } from "@/utils/referralProgram";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export const ReferralProgramEditionHeroCardRevShareLimit = ({
  referralProgramEditionSummary,
}: ReferralProgramEditionCardProps) => {
  const [referralProgramEditionSummaryData, setReferralProgramEditionSummaryData] = useState(
    referralProgramEditionSummary,
  );
  // refresh every 5 minutes
  const now = useNow({ timeToRefresh: 5 * secondsInMinute });

  async function refreshReferralProgramEditionSummary() {
    const refreshedSummary = await getReferralProgramEditionSummaryBySlug(
      referralProgramEditionSummaryData.slug,
    );

    setReferralProgramEditionSummaryData((current) => refreshedSummary ?? current);
  }

  useEffect(() => {
    refreshReferralProgramEditionSummary();
  }, [now]);

  // The config of an unrecognized edition will never be passed here,
  // but we perform the check for the type safety
  if (referralProgramEditionSummaryData.awardModel === ReferralProgramAwardModels.Unrecognized)
    return null;

  const cardClassName = cn(
    "w-full sm:max-w-[335px] h-fit min-h-[80px] box-border flex flex-col flex-wrap justify-start items-start gap-2 p-4 bg-white",
    "rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs relative z-10 cursor-default",
  );

  return (
    <div className={cardClassName}>
      <div className="w-full flex flex-row justify-between items-start gap-5 pb-1">
        <h3 className="text-lg leading-normal font-semibold text-black text-ellipsis">
          {referralProgramEditionSummaryData.displayName}
        </h3>
        <ReferralProgramStatusBadge status={referralProgramEditionSummaryData.status} />
      </div>
      <ReferralProgramEditionTimePeriod
        startTime={referralProgramEditionSummaryData.rules.startTime}
        endTime={referralProgramEditionSummaryData.rules.endTime}
        styles={{
          container: "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
          label:
            "text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-default",
          value:
            "text-sm leading-normal font-medium text-black cursor-pointer text-right cursor-default",
          date: "cursor-default",
        }}
      />
      <ReferralProgramEditionBudget
        totalAwardPoolValue={referralProgramEditionSummaryData.rules.totalAwardPoolValue}
        styles={{
          container: "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
          label: "text-muted-foreground text-sm leading-normal font-normal cursor-default",
          value: "text-sm leading-normal font-medium text-black max-sm:text-right cursor-default",
        }}
      />
      <div className="flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal text-left cursor-default">
          Max revenue share
        </p>
        <p className="text-sm leading-normal font-medium text-black max-sm:text-right cursor-default">
          {referralProgramEditionSummaryData.awardModel === ReferralProgramAwardModels.RevShareLimit
            ? `${Math.round(referralProgramEditionSummaryData.rules.qualifiedRevenueShare * 100)}%`
            : "-"}
        </p>
      </div>
      <ReferralProgramEditionRules
        rulesUrlHref={`/ens-referral-program/editions/${referralProgramEditionSummaryData.slug}/rules`}
        styles={{
          container: "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
          label: "text-muted-foreground text-sm leading-normal font-normal cursor-default",
        }}
      />
    </div>
  );
};
