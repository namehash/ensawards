import { cn } from "@/utils/tailwindClassConcatenation.ts";

export const ContractNamingSeasonAwardCardLoading = () => {
  const loadingStateStyles = "animated-pulse bg-gray-200 rounded-sm";
  return (
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-5 sm:pb-4 sm:gap-y-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white">
      <div className="w-full sm:w-fit flex flex-nowrap flex-row justify-between sm:justify-start items-center gap-3">
        <div className="w-10 h-10 hidden sm:block">
          <div className={cn(loadingStateStyles, "w-10 h-10 rounded-full")} />
        </div>
        <div className="min-w-[120px] sm:min-w-[170px] w-full sm:w-fit flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default text-left">
            Deposited to
          </p>
          <div className="flex flex-row justify-start items-center gap-2">
            <div className={cn(loadingStateStyles, "w-5 h-5 rounded-full block sm:hidden")} />
            <div className={cn(loadingStateStyles, "w-[100px] h-[14px] mt-[4px] mb-[3px]")} />
          </div>
        </div>
      </div>

      <div className="sm:min-w-[172px] flex flex-row justify-start items-center gap-3 max-sm:self-stretch">
        <div className="hidden sm:block w-10 h-10 flex items-center justify-center shrink-0">
          <div className={cn(loadingStateStyles, "w-10 h-10 rounded-full")} />
        </div>
        <div className="max-sm:w-full sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0">
          <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
            Entity
          </p>
          <div className="flex flex-row justify-start items-center gap-2">
            <div className="block sm:hidden w-5 h-5 flex items-center justify-center shrink-0">
              <div className={cn(loadingStateStyles, "w-5 h-5 rounded-full")} />
            </div>
            <div className={cn(loadingStateStyles, "w-[60px] h-[14px] mt-[4px] mb-[3px]")} />
          </div>
        </div>
      </div>

      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Award
        </p>
        <div className={cn(loadingStateStyles, "w-[80px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>

      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Est. award value
        </p>
        <div className={cn(loadingStateStyles, "w-[100px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>

      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Awarded
        </p>
        <div className={cn(loadingStateStyles, "w-[80px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
    </div>
  );
};
