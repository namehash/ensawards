import {
  ReferralProgramEditionStatuses,
  type ReferralProgramEditionStatusId,
} from "@namehash/ens-referrals/v1";

import { cn } from "@/utils/tailwindClassConcatenation.ts";

interface ReferralProgramStatusBadgeProps {
  status: ReferralProgramEditionStatusId;
  className?: string;
}

const getReferralProgramStatusStyle = (status: ReferralProgramEditionStatusId): string => {
  switch (status) {
    case ReferralProgramEditionStatuses.AwardsReview: //TODO: Adjust to figma later
      return "bg-yellow-500 text-white";
    case ReferralProgramEditionStatuses.Scheduled:
      return "bg-white text-black border border-[#E5E5E5]";
    case ReferralProgramEditionStatuses.Active:
      return "bg-emerald-600 text-white";
    case ReferralProgramEditionStatuses.Closed:
    case ReferralProgramEditionStatuses.Exhausted:
    default:
      return "bg-neutral-500 text-white";
  }
};

export function ReferralProgramStatusBadge({ status, className }: ReferralProgramStatusBadgeProps) {
  return (
    <span
      className={cn(
        "w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] px-2\n" +
          "              py-0.5 rounded-full text-xs leading-normal font-semibold cursor-default",
        getReferralProgramStatusStyle(status),
        className,
      )}
    >
      {status}
    </span>
  );
}
