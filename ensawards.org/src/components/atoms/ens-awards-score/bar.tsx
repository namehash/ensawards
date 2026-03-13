import { getAppSupportColor } from "@/utils/styles";
import { cn } from "@/utils/tailwindClassConcatenation";

export interface EnsAwardsBarScoreProps {
  /** Score for the App across all of its benchmarks
   *
   * @invariant Must be between 0 and 100.
   */
  score: number;
  isDynamic?: boolean;
}

export const EnsAwardsBarScore = ({ score, isDynamic = true }: EnsAwardsBarScoreProps) => {
  if (score < 0 || score > 100) {
    throw new Error(
      `Invariant violation: score must be between 0 and a 100, but was ${score} instead`,
    );
  }

  const normalizedScore = Math.round(score);

  return (
    <div
      className={cn(
        "min-md:min-w-[120px] flex items-start gap-0",
        isDynamic
          ? "flex-row sm:flex-col flex-nowrap justify-between sm:justify-center max-sm:self-stretch"
          : "flex-col justify-center",
      )}
    >
      <p className="text-muted-foreground text-sm leading-normal font-normal">ENSAwards score</p>
      <div className="flex flex-row flex-nowrap justify-start items-center gap-2 self-stretch">
        <div
          className={cn(
            "flex relative w-20 h-[7px] rounded-[20px] bg-gray-200 z-0",
            isDynamic && "max-sm:hidden ",
          )}
        >
          <div
            className={cn(
              "absolute h-full self-stretch rounded-[20px] z-10",
              `bg-${getAppSupportColor(score)}`,
            )}
            style={{ width: `calc(${normalizedScore}%)` }}
          ></div>
        </div>
        <p
          className={cn(
            "text-sm leading-normal",
            isDynamic ? "font-medium sm:font-semibold" : "font-semibold",
            `text-${getAppSupportColor(score)}`,
          )}
        >
          {normalizedScore}%
        </p>
      </div>
    </div>
  );
};
