import { type EnsAwardsScore } from "data/shared/ens-awards-score";

import { calculateScoreBarFill, getScoreColor } from "@/components/atoms/ens-awards-score/utils";
import { AllBenchmarksPendingIcon } from "@/components/atoms/icons/AllBenchmarksPendingIcon";

export const EnsAwardsCircularScoreSmall = ({ score }: { score?: EnsAwardsScore }) => {
  if (score === undefined) return <AllBenchmarksPendingIcon />;

  const radius = 13;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - calculateScoreBarFill(score) / 100);
  const progressColorClass = `text-${getScoreColor(score)}`;

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
      <span className="absolute text-[10px] leading-3 font-medium text-black">{score}</span>
    </div>
  );
};
