import { X as FailIcon, Check as PartialPassIcon, CheckCheck as PassIcon } from "lucide-react";

import { type AppBenchmark, BenchmarkResult } from "../../../../data/apps/benchmarks-types.ts";
import { cn } from "../../../utils/tailwindClassConcatenation";

export interface BenchmarkResultBadgeProps {
  benchmark: AppBenchmark;
  className?: string;
}

const getResultIcon = (result: BenchmarkResult) => {
  switch (result) {
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
        "w-fit flex flex-row flex-nowrap justify-center items-center gap-1.5 pl-2.5 pr-3 " +
          "py-1 rounded-full text-xs leading-normal font-medium cursor-pointer",
        className,
      )}
    >
      {getResultIcon(benchmark.result)}
      {benchmark.result}
    </span>
  );
}
