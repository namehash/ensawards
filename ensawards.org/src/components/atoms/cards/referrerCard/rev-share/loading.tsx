import { cn } from "@/utils/tailwindClassConcatenation.ts";

import { type RankProps, ReferrerCardHeaderLoading } from "../shared.tsx";

/**
 * Display Referrer Card loading state.
 *
 * This component is specifically designed for the {@link ReferralProgramAwardModels.RevShareLimit} award model.
 */
export const ReferrerCardRevShareLimitLoading = ({
  rank,
}: Omit<RankProps, "className" | "isQualified">) => {
  const loadingStateStyles = "animate-pulse bg-gray-200 rounded-sm";
  return (
    <div className="w-full h-fit box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 bg-white">
      <ReferrerCardHeaderLoading rank={rank} />
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Referral years</p>
        <div className={cn(loadingStateStyles, "w-[48px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[175px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">
          Base revenue contribution
        </p>
        <div className={cn(loadingStateStyles, "w-10 h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[200px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">
          Uncapped award value
        </p>
        <div
          className={cn(loadingStateStyles, "w-[48px] sm:w-[130px] h-[14px] mt-[4px] mb-[3px]")}
        />
      </div>
      <div className="sm:min-w-[200px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">
          Award pool approximate value
        </p>
        <div className={cn(loadingStateStyles, "w-[88px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
    </div>
  );
};
