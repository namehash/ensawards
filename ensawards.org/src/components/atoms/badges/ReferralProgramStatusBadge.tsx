import { cn } from "@/utils/tailwindClassConcatenation.ts";

export const ReferralProgramStatuses = {
  Scheduled: "Scheduled",
  Active: "Active",
  Closed: "Closed",
} as const;

/**
 * The derived string union of possible {@link ReferralProgramStatuses}.
 */
export type ReferralProgramStatusId =
  (typeof ReferralProgramStatuses)[keyof typeof ReferralProgramStatuses];
interface ReferralProgramStatusBadgeProps {
  status: ReferralProgramStatusId;
}

const getReferralProgramStatusStyle = (status: ReferralProgramStatusId): string => {
  switch (status) {
    case "Scheduled":
      return "bg-white text-black";
    case "Active":
      return "bg-emerald-600 text-white";
    default:
      return "bg-neutral-500 text-white";
  }
};

export function ReferralProgramStatusBadge({ status }: ReferralProgramStatusBadgeProps) {
  return (
    <span
      className={cn(
        "w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] px-2\n" +
          "              py-0.5 rounded-full text-xs leading-normal font-semibold cursor-default",
        getReferralProgramStatusStyle(status),
      )}
    >
      {status}
    </span>
  );
}
