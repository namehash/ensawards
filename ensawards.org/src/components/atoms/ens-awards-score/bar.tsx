import type { EnsAwardsScore, EnsAwardsScoreResult } from "data/shared/ens-awards-score";

import { getScoreColor } from "@/utils/styles";
import { cn } from "@/utils/tailwindClassConcatenation";

export interface EnsAwardsBarScoreProps {
  scoreResult: EnsAwardsScoreResult;

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

  /**
   * Optional additional styles to apply to the undefined score state.
   */
  undefinedScoreStyles?: string;
}

export const EnsAwardsBarScore = ({
  scoreResult,
  mobileAdaptive = true,
  undefinedScoreStyles,
}: EnsAwardsBarScoreProps) => {
  return (
    <div
      className={cn(
        "md:min-w-[130px] flex items-start gap-0",
        mobileAdaptive
          ? "flex-row sm:flex-col flex-nowrap justify-between sm:justify-center max-sm:self-stretch"
          : "flex-col justify-center",
      )}
    >
      <p className="text-muted-foreground text-sm leading-normal font-normal">ENSAwards score</p>
      <ScoreBar
        scoreResult={scoreResult}
        mobileAdaptive={mobileAdaptive}
        undefinedScoreStyles={undefinedScoreStyles}
      />
    </div>
  );
};

export const ScoreBar = ({
  scoreResult,
  mobileAdaptive,
  undefinedScoreStyles,
}: EnsAwardsBarScoreProps) => {
  if (scoreResult.score === undefined && scoreResult.label === undefined) {
    throw new Error(
      "Invariant(ScoreBar): Either score or label must be defined in scoreResult. Both are undefined.",
    );
  }

  if (scoreResult.score === undefined) {
    return (
      <p className={cn("text-sm leading-normal font-medium text-black", undefinedScoreStyles)}>
        {scoreResult.label}
      </p>
    );
  }
  return (
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
            `bg-${getScoreColor(scoreResult.score)}`,
          )}
          style={{ width: `calc(${scoreResult.score}%)` }}
        ></div>
      </div>
      <p
        className={cn(
          "text-sm leading-normal",
          mobileAdaptive ? "font-medium sm:font-semibold" : "font-semibold",
          `text-${getScoreColor(scoreResult.score)}`,
        )}
      >
        {scoreResult.score}%
      </p>
    </div>
  );
};
