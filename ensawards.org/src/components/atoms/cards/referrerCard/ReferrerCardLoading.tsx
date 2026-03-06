import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

import { placeIcons, type RankProps } from "./shared.tsx";

const RankIconLoading = ({ rank, className }: Omit<RankProps, "isQualified">) => (
  <GenericTooltip content={<p>Loading the data. Please wait.</p>} tooltipOffset={4}>
    <div className="w-8 h-8 box-border flex justify-center items-center">
      {rank <= 3 ? (
        <img alt={`${rank}-place`} src={placeIcons[rank - 1].src} className={className} />
      ) : (
        <span
          className={cn(
            "w-fit h-6 box-border flex justify-center items-center text-xs leading-5 font-semibold text-muted-foreground rounded-full border px-2",
            "text-gray-600 bg-gray-100 border-gray-200",
            rank < 10 && "w-6",
            className,
          )}
        >
          {rank}
        </span>
      )}
    </div>
  </GenericTooltip>
);

/**
 * Display Referrer Card loading state (identical for all {@link ReferralProgramAwardModels}).
 */
export const ReferrerCardLoading = ({ rank }: Omit<RankProps, "className" | "isQualified">) => {
  const loadingStateStyles = "animate-pulse bg-gray-200 rounded-sm";
  return (
    <div className="w-full h-fit box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 bg-white">
      {/*Desktop Header*/}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-4">
        <RankIconLoading rank={rank} />
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="animate-pulse w-10 h-10 bg-gray-200 rounded-full" />
          <div className="sm:min-w-[170px] flex flex-col flex-nowrap justify-center items-start gap-0 max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
            <div className="animate-pulse bg-gray-300 rounded-sm w-[100px] h-[14px] mt-[4px] mb-[3px]" />
          </div>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="sm:hidden flex flex-row flex-nowrap justify-start items-start gap-4 self-stretch relative">
        <div className="animate-pulse w-10 h-10 bg-gray-200 rounded-full" />
        <RankIconLoading rank={rank} className="absolute top-0 right-0" />
      </div>
      {/*------------*/}
      <div className="min-w-[120px] sm:hidden flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
        <div className={cn(loadingStateStyles, "w-[100px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Referral years</p>
        <div className={cn(loadingStateStyles, "w-[48px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Rank boost</p>
        <div className={cn(loadingStateStyles, "w-10 h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Final score</p>
        <div className={cn(loadingStateStyles, "w-[48px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[190px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Budget share</p>
        <div
          className={cn(loadingStateStyles, "w-[48px] sm:w-[130px] h-[14px] mt-[4px] mb-[3px]")}
        />
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Awards</p>
        <div className={cn(loadingStateStyles, "w-[88px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
    </div>
  );
};
