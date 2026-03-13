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
      <div className="sm:min-w-[175px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">
          Total revenue contribution
        </p>
        <div className={cn(loadingStateStyles, "w-[80px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[175px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">
          Base revenue contribution
        </p>
        <div className={cn(loadingStateStyles, "w-[80px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[125px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Revenue share</p>
        <div
          className={cn(loadingStateStyles, "w-[60px] sm:w-[60px] h-[14px] mt-[4px] mb-[3px]")}
        />
      </div>
      <div className="sm:min-w-[180px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal text-left">
          Tentative awards
        </p>
        <div
          className={cn(loadingStateStyles, "w-[80px] sm:w-[100px] h-[14px] mt-[4px] mb-[3px]")}
        />
      </div>
    </div>
  );
};
