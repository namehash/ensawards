import { type ReferralProgramStatusId } from "@namehash/ens-referrals";

import { cn } from "@/utils/tailwindClassConcatenation.ts";

interface ReferralProgramStatusBadgeProps {
  status: ReferralProgramStatusId;
  className?: string;
}

const getReferralProgramStatusStyle = (status: ReferralProgramStatusId): string => {
  switch (status) {
    case "Scheduled":
      return "bg-white text-black border border-[#E5E5E5]";
    case "Active":
      return "bg-emerald-600 text-white";
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
