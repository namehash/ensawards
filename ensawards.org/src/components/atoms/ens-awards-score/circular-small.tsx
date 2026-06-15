import {
  type EnsAwardsScoreResult,
  EnsAwardsUndefinedScoreLabels,
} from "data/shared/ens-awards-score";

import { AllBenchmarksNotApplicableIcon } from "@/components/atoms/icons/AllBenchmarksNotApplicableIcon";
import { AllBenchmarksPendingIcon } from "@/components/atoms/icons/AllBenchmarksPendingIcon";
import { getScoreColor } from "@/utils/styles";

export const EnsAwardsCircularScoreSmall = ({
  scoreResult,
}: {
  scoreResult: EnsAwardsScoreResult;
}) => {
  if (scoreResult.score === undefined && scoreResult.label === undefined) {
    throw new Error(
      "Invariant(ScoreBar): Either score or label must be defined in scoreResult. Both are undefined.",
    );
  }

  if (scoreResult.score === undefined) {
    return scoreResult.label === EnsAwardsUndefinedScoreLabels.Pending ? (
      <AllBenchmarksPendingIcon />
    ) : (
      <AllBenchmarksNotApplicableIcon />
    );
  }

  const roundedScore = Math.round(scoreResult.score);
  const radius = 13;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - roundedScore / 100);
  const progressColorClass = `text-${getScoreColor(scoreResult.score)}`;

  return (
    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
      <svg width="32" height="32" viewBox="0 0 32 32" className="-rotate-90">
        <circle cx="16" cy="16" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="3" />
        <circle
          cx="16"
          cy="16"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className={progressColorClass}
        />
      </svg>
      <span className="absolute text-[10px] leading-3 font-medium text-black">{roundedScore}</span>
    </div>
  );
};
