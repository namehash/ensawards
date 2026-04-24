import { type AppBenchmark, BenchmarkResults } from "data/benchmarks/types.ts";
import { formatBenchmarkResult } from "data/benchmarks/utils.ts";
import {
  X as FailIcon,
  Check as PartialPassIcon,
  CheckCheck as PassIcon,
  Clock as PendingIcon,
} from "lucide-react";

import { cn } from "@/utils/tailwindClassConcatenation";

export interface BenchmarkResultBadgeProps {
  benchmark?: AppBenchmark;
  className?: string;
}

export const benchmarkResultToBadgeStyles = (benchmark?: AppBenchmark) => {
  if (!benchmark) {
    return "text-muted-foreground bg-black/8";
  }
  switch (benchmark.result) {
    case BenchmarkResults.PartialPass:
      return "text-orange-600 bg-orange-100";
    case BenchmarkResults.Pass:
      return "text-emerald-600 bg-emerald-100";
    case BenchmarkResults.Fail:
      return "text-red-600 bg-[rgba(220,38,38,0.1)]";

    default:
      const _exhaustive: never = benchmark.result;
      throw new Error(`Unsupported BenchmarkResult: ${_exhaustive}`);
  }
};

export const getBenchmarkIcon = (benchmark?: AppBenchmark, className?: string) => {
  if (!benchmark) {
    return <PendingIcon className={className} />;
  }
  switch (benchmark.result) {
    case BenchmarkResults.Pass:
      return <PassIcon className={className} />;
    case BenchmarkResults.PartialPass:
      return <PartialPassIcon className={className} />;
    case BenchmarkResults.Fail:
      return <FailIcon className={className} />;

    default:
      const _exhaustive: never = benchmark.result;
      throw new Error(`Unsupported BenchmarkResult: ${_exhaustive}`);
  }
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
      {formatBenchmarkResult(benchmark, { lowercase: false })}
    </span>
  );
}
