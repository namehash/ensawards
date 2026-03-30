import { ReferralProgramAwardModels } from "@namehash/ens-referrals/v1";
import { ChevronRightIcon } from "lucide-react";

import { ReferralProgramStatusBadge } from "@/components/atoms/badges/ReferralProgramStatusBadge.tsx";
import {
  ReferralProgramEditionBudget,
  type ReferralProgramEditionCardProps,
  ReferralProgramEditionTimePeriod,
} from "@/components/atoms/cards/referralProgramEditionCard/shared";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export const ReferralProgramEditionCardRevShareLimit = ({
  referralProgramEditionSummary,
}: ReferralProgramEditionCardProps) => {
  // The config of an unrecognized edition will never be passed here,
  // but we perform the check for the type safety
  if (referralProgramEditionSummary.awardModel === ReferralProgramAwardModels.Unrecognized)
    return null;

  const cardClassName = cn(
    "w-full sm:max-w-[335px] h-fit min-h-[80px] box-border flex flex-col flex-wrap justify-start items-start gap-2 p-4 bg-white",
    "rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs relative z-10 sm:max-w-full sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:py-5 sm:gap-5 cursor-pointer",
  );

  return (
    <a
      href={`/ens-referral-program/editions/${referralProgramEditionSummary.slug}/leaderboard`}
      target="_self"
      className={cardClassName}
    >
      <div className="w-full flex flex-row justify-between items-start gap-3 pb-1 sm:hidden">
        <h3 className="text-lg leading-normal font-semibold text-black">
          {referralProgramEditionSummary.displayName}
        </h3>
        <div className="min-w-[110px] flex items-center justify-end">
          <ReferralProgramStatusBadge status={referralProgramEditionSummary.status} />
        </div>
      </div>
      <h3 className="hidden w-2/5 text-lg leading-normal font-semibold text-black sm:block">
        {referralProgramEditionSummary.displayName}
      </h3>
      <ReferralProgramEditionTimePeriod
        startTime={referralProgramEditionSummary.rules.startTime}
        endTime={referralProgramEditionSummary.rules.endTime}
        styles={{
          container:
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch sm:min-w-[185px] sm:flex-col sm:justify-center max-sm:self-stretch",
          label:
            "text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-pointer",
          value: "text-sm leading-normal font-medium text-black max-sm:text-right cursor-pointer",
          date: "cursor-pointer",
        }}
      />
      <ReferralProgramEditionBudget
        totalAwardPoolValue={referralProgramEditionSummary.rules.totalAwardPoolValue}
        styles={{
          container:
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch sm:min-w-[120px] sm:flex-col sm:justify-center max-sm:self-stretch",
          label: "text-muted-foreground text-sm leading-normal font-normal cursor-pointer",
          value: "text-sm leading-normal font-medium text-black max-sm:text-right cursor-pointer",
        }}
      />
      <div className="flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[150px] sm:flex-col sm:justify-center max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal max-sm:text-left">
          Max revenue share
        </p>
        <p className="text-sm leading-normal font-medium text-black max-sm:text-right">
          {referralProgramEditionSummary.awardModel === ReferralProgramAwardModels.RevShareLimit
            ? `${Math.round(referralProgramEditionSummary.rules.qualifiedRevenueShare * 100)}%`
            : "-"}
        </p>
      </div>
      <span className="min-w-[110px] max-sm:hidden flex sm:flex-row sm:max-[1205px]:justify-start min-[1205px]:justify-end">
        <ReferralProgramStatusBadge
          status={referralProgramEditionSummary.status}
          className="cursor-pointer"
        />
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
