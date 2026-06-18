import {
  type EnsAwardsScoreResult,
  EnsAwardsScoreResultTypes,
  EnsAwardsUndefinedScoreLabels,
} from "data/shared/ens-awards-score";

import { calcScoreBarFill, getScoreColor } from "@/components/atoms/ens-awards-score/utils";
import { AllBenchmarksNotApplicableIcon } from "@/components/atoms/icons/AllBenchmarksNotApplicableIcon";
import { AllBenchmarksPendingIcon } from "@/components/atoms/icons/AllBenchmarksPendingIcon";

export const EnsAwardsCircularScoreSmall = ({
  scoreResult,
}: {
  scoreResult: EnsAwardsScoreResult;
}) => {
  if (scoreResult.type === EnsAwardsScoreResultTypes.Undefined) {
    switch (scoreResult.label) {
      case EnsAwardsUndefinedScoreLabels.Pending:
        return <AllBenchmarksPendingIcon />;
      case EnsAwardsUndefinedScoreLabels.NotApplicable:
        return <AllBenchmarksNotApplicableIcon />;

      case EnsAwardsUndefinedScoreLabels.InactiveCategory:
        // This variant will never be publicly available,
        return (
          <div className="w-fit h-fit p-8 flex flex-row justify-center items-center bg-white">
            <p className="text-xs font-medium text-gray-500">Inactive Category</p>
          </div>
        );

      default:
        throw new Error("Invariant(EnsAwardsScoreResult): Unrecognized label in scoreResult.");
    }
  }

  const radius = 13;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - calcScoreBarFill(scoreResult.score) / 100);
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
      <span className="absolute text-[10px] leading-3 font-medium text-black">
        {scoreResult.score}
      </span>
    </div>
  );
};
