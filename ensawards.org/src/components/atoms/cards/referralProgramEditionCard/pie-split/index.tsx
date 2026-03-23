import { calcReferralProgramStatus, ReferralProgramAwardModels } from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";
import { ChevronRightIcon } from "lucide-react";
import { useMemo } from "react";

import { ReferralProgramStatusBadge } from "@/components/atoms/badges/ReferralProgramStatusBadge.tsx";
import {
  ReferralProgramEditionBudget,
  type ReferralProgramEditionCardProps,
  ReferralProgramEditionTimePeriod,
} from "@/components/atoms/cards/referralProgramEditionCard/shared";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export const ReferralProgramEditionCardPieSplit = ({
  referralProgramEditionConfig,
}: ReferralProgramEditionCardProps) => {
  // refresh the status every minute
  const now = useNow({ timeToRefresh: secondsInMinute });
  const referralProgramStatus = useMemo(
    () => calcReferralProgramStatus(referralProgramEditionConfig.rules, now),
    [now, referralProgramEditionConfig.rules],
  );

  // The config of an unrecognized edition will never be passed here,
  // but we perform the check for the type safety
  if (referralProgramEditionConfig.rules.awardModel === ReferralProgramAwardModels.Unrecognized)
    return null;

  const cardClassName = cn(
    "w-full sm:max-w-[335px] h-fit min-h-[80px] box-border flex flex-col flex-wrap justify-start items-start gap-2 p-4 bg-white",
    "rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs relative z-10 cursor-default sm:max-w-full sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:py-5 sm:gap-5 cursor-pointer",
  );

  return (
    <a
      href={`/ens-referral-program/editions/${referralProgramEditionConfig.slug}/leaderboard`}
      target="_self"
      className={cardClassName}
    >
      <div className="w-full flex flex-row justify-between items-start gap-5 pb-1 sm:hidden">
        <h3 className="text-lg leading-normal font-semibold text-black text-ellipsis">
          {referralProgramEditionConfig.displayName}
        </h3>
        <ReferralProgramStatusBadge status={referralProgramStatus} />
      </div>
      <h3 className="hidden w-2/5 text-lg leading-normal font-semibold text-black text-ellipsis sm:block">
        {referralProgramEditionConfig.displayName}
      </h3>
      <ReferralProgramEditionTimePeriod
        startTime={referralProgramEditionConfig.rules.startTime}
        endTime={referralProgramEditionConfig.rules.endTime}
        styles={{
          container:
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch sm:min-w-[185px] sm:flex-col sm:justify-center max-sm:self-stretch",
          label:
            "text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-pointer",
          value:
            "text-sm leading-normal font-medium text-black cursor-pointer max-sm:text-right cursor-pointer",
          date: "cursor-pointer",
        }}
      />
      <ReferralProgramEditionBudget
        totalAwardPoolValue={referralProgramEditionConfig.rules.totalAwardPoolValue}
        styles={{
          container:
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch sm:min-w-[120px] sm:flex-col sm:justify-center max-sm:self-stretch",
          label: "text-muted-foreground text-sm leading-normal font-normal cursor-pointer",
          value: "text-sm leading-normal font-medium text-black max-sm:text-right cursor-pointer",
        }}
      />
      <div className="flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[150px] sm:flex-col sm:justify-center max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-default">
          Max qualified referrers
        </p>
        <p className="text-sm leading-normal font-medium text-black max-sm:text-right cursor-default">
          {referralProgramEditionConfig.rules.awardModel === ReferralProgramAwardModels.PieSplit
            ? referralProgramEditionConfig.rules.maxQualifiedReferrers
            : "-"}
        </p>
      </div>
      <span className="min-w-[90px] max-sm:hidden flex sm:flex-row sm:justify-end">
        <ReferralProgramStatusBadge status={referralProgramStatus} className="cursor-pointer" />
      </span>
      <ChevronRightIcon className="w-6 h-6 text-gray-400 hover:text-gray-500 shrink-0 max-sm:hidden block" />
      <div
        className={cn(
          shadcnButtonVariants({
            variant: "secondary",
            size: "default",
            className: "sm:hidden cursor-pointer rounded-full self-stretch",
          }),
        )}
      >
        View leaderboard
      </div>
    </a>
  );
};
