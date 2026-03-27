import {
  ReferralProgramEditionStatuses,
  type ReferralProgramEditionStatusId,
} from "@namehash/ens-referrals/v1";

import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { breakLongWords } from "@/utils/textModifications";

interface ReferralProgramStatusBadgeProps {
  status: ReferralProgramEditionStatusId;
  className?: string;
}

const getReferralProgramStatusStyle = (status: ReferralProgramEditionStatusId): string => {
  switch (status) {
    case ReferralProgramEditionStatuses.AwardsReview:
      return "bg-amber-500 text-white";
    case ReferralProgramEditionStatuses.Scheduled:
      return "bg-white text-black border-[#E5E5E5]";
    case ReferralProgramEditionStatuses.Active:
      return "bg-emerald-600 text-white";
    case ReferralProgramEditionStatuses.Closed:
    case ReferralProgramEditionStatuses.Exhausted:
    default:
      return "bg-neutral-500 text-white";
  }
};

export function ReferralProgramStatusBadge({ status, className }: ReferralProgramStatusBadgeProps) {
  const userFacingStatusText = breakLongWords(status, /(?=[A-Z])/, 1).join(" ");
  return (
    <span
      className={cn(
        "w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] px-2 py-0.5 rounded-full text-xs leading-normal font-semibold cursor-default border border-transparent",
        getReferralProgramStatusStyle(status),
        className,
      )}
    >
      {userFacingStatusText}
    </span>
  );
}
