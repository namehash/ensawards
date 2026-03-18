import {
  BenchmarkResult,
  BenchmarkStatuses,
  type EffectiveAppBenchmark,
} from "data/apps/benchmarks-types.ts";
import {
  X as FailIcon,
  Check as PartialPassIcon,
  CheckCheck as PassIcon,
  Clock as PendingIcon,
} from "lucide-react";

import { cn } from "@/utils/tailwindClassConcatenation";

export interface BenchmarkResultBadgeProps {
  benchmark: EffectiveAppBenchmark;
  className?: string;
}

const getBenchmarkIcon = (benchmark: EffectiveAppBenchmark) => {
  if (benchmark.status === BenchmarkStatuses.Pending) {
    return <PendingIcon width={16} height={16} />;
  }
  switch (benchmark.result) {
    case BenchmarkResult.Pass:
      return <PassIcon width={16} height={16} />;
    case BenchmarkResult.PartialPass:
      return <PartialPassIcon width={16} height={16} />;
    case BenchmarkResult.Fail:
      return <FailIcon width={16} height={16} />;
  }
};

export function BenchmarkResultBadge({ benchmark, className }: BenchmarkResultBadgeProps) {
  return (
    <span
      className={cn(
        "w-fit flex flex-row flex-nowrap justify-center items-center gap-1.5 pl-2.5 pr-3 py-1 rounded-full " +
          "text-xs leading-normal font-medium cursor-default",
        className,
      )}
    >
      {getBenchmarkIcon(benchmark)}
      {benchmark.status === BenchmarkStatuses.Pending ? "Pending" : benchmark.result}
    </span>
  );
}
