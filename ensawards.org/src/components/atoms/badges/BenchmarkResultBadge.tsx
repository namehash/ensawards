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

export const benchmarkResultToBadgeStyles = (benchmark: EffectiveAppBenchmark) => {
  if (benchmark.status === BenchmarkStatuses.Pending) {
    return "text-muted-foreground bg-black/8";
  }
  switch (benchmark.result) {
    case BenchmarkResult.PartialPass:
      return "text-orange-600 bg-orange-100";
    case BenchmarkResult.Pass:
      return "text-emerald-600 bg-emerald-100";
    case BenchmarkResult.Fail:
    default:
      return "text-red-600 bg-[rgba(220,38,38,0.1)]";
  }
};

export const getBenchmarkIcon = (benchmark: EffectiveAppBenchmark, className?: string) => {
  if (benchmark.status === BenchmarkStatuses.Pending) {
    return <PendingIcon className={className} />;
  }
  switch (benchmark.result) {
    case BenchmarkResult.Pass:
      return <PassIcon className={className} />;
    case BenchmarkResult.PartialPass:
      return <PartialPassIcon className={className} />;
    case BenchmarkResult.Fail:
      return <FailIcon className={className} />;
  }
};

export const getBenchmarkResultLabel = (benchmark: EffectiveAppBenchmark): string => {
  if (benchmark.status === BenchmarkStatuses.Pending) {
    return BenchmarkStatuses.Pending;
  }

  return benchmark.result;
};

export function BenchmarkResultBadge({ benchmark, className }: BenchmarkResultBadgeProps) {
  const BenchmarkIcon = getBenchmarkIcon(benchmark, "w-4 h-4");
  return (
    <span
      className={cn(
        "w-fit flex flex-row flex-nowrap justify-center items-center gap-1.5 pl-2.5 pr-3 py-1 rounded-full " +
          "text-xs leading-normal font-medium cursor-default",
        benchmarkResultToBadgeStyles(benchmark),
        className,
      )}
    >
      {BenchmarkIcon}
      {getBenchmarkResultLabel(benchmark)}
    </span>
  );
}
