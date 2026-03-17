import { getAppSupportColor } from "@/utils/styles";
import { cn } from "@/utils/tailwindClassConcatenation";
import type { EnsAwardsScore } from "@/utils/types";

export interface EnsAwardsBarScoreProps {
  score: EnsAwardsScore;

  /**
   * Whether the score UI is adapted for mobile screen sizes or not.
   *
   * If `true`, the score will be displayed in a more compact way on mobile screens,
   * and the progress bar will be hidden on mobile screens.
   *
   * If `false`, the score will be displayed identically on all screen sizes,
   * and the progress bar will be visible at all times.
   */
  mobileAdaptive?: boolean;
}

export const EnsAwardsBarScore = ({ score, mobileAdaptive = true }: EnsAwardsBarScoreProps) => {
  return (
    <div
      className={cn(
        "min-md:min-w-[130px] flex items-start gap-0",
        mobileAdaptive
          ? "flex-row sm:flex-col flex-nowrap justify-between sm:justify-center max-sm:self-stretch"
          : "flex-col justify-center",
      )}
    >
      <p className="text-muted-foreground text-sm leading-normal font-normal">ENSAwards score</p>
      <ScoreBar score={score} mobileAdaptive={mobileAdaptive} />
    </div>
  );
};

export const ScoreBar = ({ score, mobileAdaptive }: EnsAwardsBarScoreProps) => (
  <div className="flex flex-row flex-nowrap justify-start items-center gap-2 self-stretch">
    <div
      className={cn(
        "flex relative w-20 h-[7px] rounded-[20px] bg-gray-200 z-0",
        mobileAdaptive && "max-sm:hidden ",
      )}
    >
      <div
        className={cn(
          "absolute h-full self-stretch rounded-[20px] z-10",
          `bg-${getAppSupportColor(score)}`,
        )}
        style={{ width: `calc(${score}%)` }}
      ></div>
    </div>
    <p
      className={cn(
        "text-sm leading-normal",
        mobileAdaptive ? "font-medium sm:font-semibold" : "font-semibold",
        `text-${getAppSupportColor(score)}`,
      )}
    >
      {score}%
    </p>
  </div>
);
