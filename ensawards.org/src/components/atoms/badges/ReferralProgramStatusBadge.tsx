import { ReferralProgramStatuses, type ReferralProgramStatusId } from "@namehash/ens-referrals/v1";

import { cn } from "@/utils/tailwindClassConcatenation.ts";

// TODO: the current implementation of "Exhausted" variant is temporary
// and should be moved to ens-referrals package as soon as we're not under such a time pressure
export const ExhaustedReferralProgramStatus = {
  Exhausted: "Exhausted",
};

export type ExhaustedReferralProgramStatusId =
  (typeof ExhaustedReferralProgramStatus)[keyof typeof ExhaustedReferralProgramStatus];

interface ReferralProgramStatusBadgeProps {
  status: ReferralProgramStatusId | ExhaustedReferralProgramStatusId;
  className?: string;
}

const getReferralProgramStatusStyle = (
  status: ReferralProgramStatusId | ExhaustedReferralProgramStatusId,
): string => {
  switch (status) {
    case ReferralProgramStatuses.Scheduled:
      return "bg-white text-black border border-[#E5E5E5]";
    case ReferralProgramStatuses.Active:
      return "bg-emerald-600 text-white";
    case ReferralProgramStatuses.Closed:
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
