import {
  ReferralProgramEditionStatuses,
  type ReferralProgramEditionStatusId,
} from "@namehash/ens-referrals/v1";
import { TooltipProvider } from "@radix-ui/react-tooltip";

import { GenericTooltip } from "@/components/atoms/GenericTooltip";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { breakLongWords } from "@/utils/textModifications";

interface ReferralProgramStatusBadgeProps {
  status: ReferralProgramEditionStatusId;
  className?: string;
}

const getReferralProgramStatusStyle = (status: ReferralProgramEditionStatusId): string => {
  switch (status) {
    case ReferralProgramEditionStatuses.Scheduled:
      return "bg-white text-black border-[#E5E5E5]";
    case ReferralProgramEditionStatuses.Active:
      return "bg-emerald-600 text-white";
    case ReferralProgramEditionStatuses.Closed:
    case ReferralProgramEditionStatuses.Exhausted:
    case ReferralProgramEditionStatuses.AwardsReview:
    default:
      return "bg-neutral-500 text-white";
  }
};

const getReferralProgramStatusTooltipText = (status: ReferralProgramEditionStatusId): string => {
  switch (status) {
    case ReferralProgramEditionStatuses.AwardsReview:
      return "This edition's time period is over but awards haven't been distributed yet.";
    case ReferralProgramEditionStatuses.Scheduled:
      return "This edition's time period hasn't started yet.";
    case ReferralProgramEditionStatuses.Active:
      return "This edition's time period is active for earning awards.";
    case ReferralProgramEditionStatuses.Closed:
      return "This edition's time period is over and awards have been distributed.";
    case ReferralProgramEditionStatuses.Exhausted:
    default:
      return "This edition's time period is active for earning awards, but its budget has already been fully consumed.";
  }
};

export function ReferralProgramStatusBadge({ status, className }: ReferralProgramStatusBadgeProps) {
  const userFacingStatusText = breakLongWords(status, /(?=[A-Z])/, 1).join(" ");
  return (
    <TooltipProvider delayDuration={250} skipDelayDuration={0}>
      <GenericTooltip
        tooltipOffset={2}
        content={<p className="max-w-[200px]">{getReferralProgramStatusTooltipText(status)}</p>}
      >
        <span
          className={cn(
            "w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] px-2 py-0.5 rounded-full text-xs leading-normal font-semibold cursor-default border border-transparent",
            getReferralProgramStatusStyle(status),
            className,
          )}
        >
          {userFacingStatusText}
        </span>
      </GenericTooltip>
    </TooltipProvider>
  );
}
