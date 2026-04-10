import type { EnsAwardsBarScoreProps } from "@/components/atoms/ens-awards-score/bar";
import { cn } from "@/utils/tailwindClassConcatenation";

export const EnsAwardsBarScorePending = ({
  mobileAdaptive = true,
}: Omit<EnsAwardsBarScoreProps, "score">) => (
  <div
    className={cn(
      "min-md:min-w-[130px] flex items-start gap-0",
      mobileAdaptive
        ? "flex-row sm:flex-col flex-nowrap justify-between sm:justify-center max-sm:self-stretch"
        : "flex-col justify-center",
    )}
  >
    <p className="text-muted-foreground text-sm leading-normal font-normal">ENSAwards score</p>
    <p className="text-sm leading-normal font-medium text-black">Pending</p>
  </div>
);
