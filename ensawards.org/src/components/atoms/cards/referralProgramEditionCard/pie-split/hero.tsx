import { ReferralProgramAwardModels } from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import { isValidReferralProgramEditionSummaryPieSplit } from "data/shared/referral-program-editions";
import { secondsInMinute } from "date-fns/constants";
import { useEffect, useState } from "react";

import { ReferralProgramStatusBadge } from "@/components/atoms/badges/ReferralProgramStatusBadge.tsx";
import type { ReferralProgramEditionPieSplitCardProps } from "@/components/atoms/cards/referralProgramEditionCard/pie-split";
import {
  ReferralProgramEditionAwardPool,
  ReferralProgramEditionRules,
  ReferralProgramEditionTimePeriod,
} from "@/components/atoms/cards/referralProgramEditionCard/shared";
import { getReferralProgramEditionSummaryBySlug } from "@/utils/referralProgram";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export const ReferralProgramEditionHeroCardPieSplit = ({
  referralProgramEditionSummary,
}: ReferralProgramEditionPieSplitCardProps) => {
  const [referralProgramEditionSummaryData, setReferralProgramEditionSummaryData] = useState(
    referralProgramEditionSummary,
  );
  // refresh every 5 minutes
  const now = useNow({ timeToRefresh: 5 * secondsInMinute });

  async function refreshReferralProgramEditionSummary() {
    const refreshedSummary = await getReferralProgramEditionSummaryBySlug(
      referralProgramEditionSummaryData.slug,
    );

    // If the fetch fails keep the latest valid data
    setReferralProgramEditionSummaryData((current) =>
      refreshedSummary !== undefined &&
      isValidReferralProgramEditionSummaryPieSplit(refreshedSummary)
        ? refreshedSummary
        : current,
    );
  }

  useEffect(() => {
    refreshReferralProgramEditionSummary();
  }, [now]);

  const cardClassName = cn(
    "w-full sm:max-w-[335px] h-fit min-h-[80px] box-border flex flex-col flex-wrap justify-start items-start gap-2 p-4 bg-white",
    "rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs relative z-10 cursor-default",
  );

  return (
    <div className={cardClassName}>
      <div className="w-full flex flex-row justify-between items-start gap-3 pb-1">
        <h3 className="text-lg leading-normal font-semibold text-black text-ellipsis">
          {referralProgramEditionSummaryData.displayName}
        </h3>
        <div className="min-w-[110px] flex items-center justify-end">
          <ReferralProgramStatusBadge status={referralProgramEditionSummaryData.status} />
        </div>
      </div>
      <ReferralProgramEditionTimePeriod
        startTime={referralProgramEditionSummaryData.rules.startTime}
        endTime={referralProgramEditionSummaryData.rules.endTime}
        styles={{
          container: "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
          label:
            "text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-default",
          value: "text-sm leading-normal font-medium text-black text-right cursor-default",
          date: "cursor-default",
        }}
      />
      <ReferralProgramEditionAwardPool
        totalAwardPoolValue={referralProgramEditionSummaryData.rules.totalAwardPoolValue}
        styles={{
          container: "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
          label: "text-muted-foreground text-sm leading-normal font-normal cursor-default",
          value: "text-sm leading-normal font-medium text-black max-sm:text-right cursor-default",
        }}
      />
      <div className="flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal text-left cursor-default">
          Max qualified referrers
        </p>
        <p className="text-sm leading-normal font-medium text-black max-sm:text-right cursor-default">
          {referralProgramEditionSummaryData.awardModel === ReferralProgramAwardModels.PieSplit
            ? referralProgramEditionSummaryData.rules.maxQualifiedReferrers
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
