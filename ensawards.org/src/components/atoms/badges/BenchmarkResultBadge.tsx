import {
  type BenchmarkFailRatio,
  type BenchmarkResult,
  BenchmarkResults,
} from "data/benchmarks/types.ts";
import { formatBenchmarkResult } from "data/benchmarks/utils.ts";
import { CircleOff as NotApplicableIcon, Clock as PendingIcon } from "lucide-react";

import { cn } from "@/utils/tailwindClassConcatenation";

export interface BenchmarkResultBadgeProps {
  benchmarkResult?: BenchmarkResult;
  failRatio?: BenchmarkFailRatio;
  className?: string;
}

export const benchmarkResultToBadgeStyles = (benchmarkResult?: BenchmarkResult) => {
  if (!benchmarkResult) {
    return "text-muted-foreground bg-black/8";
  }
  switch (benchmarkResult) {
    case BenchmarkResults.PartialPass:
      return "text-orange-600 bg-orange-100";
    case BenchmarkResults.Pass:
      return "text-emerald-600 bg-emerald-100";
    case BenchmarkResults.Fail:
      return "text-red-600 bg-[rgba(220,38,38,0.1)]";

    case BenchmarkResults.NotApplicable:
      return "text-muted-foreground bg-black/8";

    default:
      const _exhaustive: never = benchmarkResult;
      throw new Error(`Unsupported BenchmarkResult: ${_exhaustive}`);
  }
};

// These icons are unique to the benchmark result display.
const AlertIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4016 8.0001C14.4016 9.69748 13.7273 11.3253 12.527 12.5256C11.3268 13.7258 9.69895 14.4001 8.00156 14.4001C6.30418 14.4001 4.67631 13.7258 3.47608 12.5256C2.27585 11.3253 1.60156 9.69748 1.60156 8.0001C1.60156 6.30271 2.27585 4.67485 3.47608 3.47461C4.67631 2.27438 6.30418 1.6001 8.00156 1.6001C9.69895 1.6001 11.3268 2.27438 12.527 3.47461C13.7273 4.67485 14.4016 6.30271 14.4016 8.0001ZM8.00156 4.0001C8.16069 4.0001 8.3133 4.06331 8.42583 4.17583C8.53835 4.28836 8.60156 4.44097 8.60156 4.6001V8.2001C8.60156 8.35923 8.53835 8.51184 8.42583 8.62436C8.3133 8.73688 8.16069 8.8001 8.00156 8.8001C7.84243 8.8001 7.68982 8.73688 7.5773 8.62436C7.46478 8.51184 7.40156 8.35923 7.40156 8.2001V4.6001C7.40156 4.44097 7.46478 4.28836 7.5773 4.17583C7.68982 4.06331 7.84243 4.0001 8.00156 4.0001ZM8.00156 12.0001C8.21374 12.0001 8.41722 11.9158 8.56725 11.7658C8.71728 11.6158 8.80156 11.4123 8.80156 11.2001C8.80156 10.9879 8.71728 10.7844 8.56725 10.6344C8.41722 10.4844 8.21374 10.4001 8.00156 10.4001C7.78939 10.4001 7.58591 10.4844 7.43588 10.6344C7.28585 10.7844 7.20156 10.9879 7.20156 11.2001C7.20156 11.4123 7.28585 11.6158 7.43588 11.7658C7.58591 11.9158 7.78939 12.0001 8.00156 12.0001Z"
      fill="currentColor"
    />
  </svg>
);

const PassIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.00156 14.4001C9.69895 14.4001 11.3268 13.7258 12.527 12.5256C13.7273 11.3253 14.4016 9.69748 14.4016 8.0001C14.4016 6.30271 13.7273 4.67485 12.527 3.47461C11.3268 2.27438 9.69895 1.6001 8.00156 1.6001C6.30418 1.6001 4.67631 2.27438 3.47608 3.47461C2.27585 4.67485 1.60156 6.30271 1.60156 8.0001C1.60156 9.69748 2.27585 11.3253 3.47608 12.5256C4.67631 13.7258 6.30418 14.4001 8.00156 14.4001ZM11.0872 6.5529C11.1335 6.48913 11.1668 6.41686 11.1852 6.34021C11.2036 6.26357 11.2067 6.18405 11.1944 6.10619C11.1821 6.02834 11.1545 5.95368 11.1133 5.88647C11.0722 5.81926 11.0181 5.76083 10.9544 5.7145C10.8906 5.66817 10.8183 5.63485 10.7417 5.61645C10.665 5.59805 10.5855 5.59493 10.5077 5.60726C10.4298 5.61959 10.3551 5.64714 10.2879 5.68832C10.2207 5.72951 10.1623 5.78353 10.116 5.8473L7.32956 9.6793L5.82556 8.1753C5.77019 8.11802 5.70396 8.07234 5.63074 8.04093C5.55752 8.00952 5.47879 7.99301 5.39912 7.99235C5.31945 7.9917 5.24045 8.00692 5.16673 8.03712C5.093 8.06732 5.02603 8.11191 4.96972 8.16827C4.91342 8.22463 4.8689 8.29164 4.83876 8.36539C4.80863 8.43914 4.79348 8.51816 4.79421 8.59783C4.79494 8.67749 4.81153 8.75622 4.84301 8.8294C4.87449 8.90259 4.92023 8.96878 4.97756 9.0241L6.97756 11.0241C7.03886 11.0854 7.11273 11.1328 7.19408 11.1628C7.27543 11.1928 7.36232 11.2049 7.44877 11.1981C7.53522 11.1914 7.61918 11.1659 7.69487 11.1236C7.77055 11.0813 7.83615 11.023 7.88716 10.9529L11.0872 6.5529Z"
      fill="currentColor"
    />
  </svg>
);

export const getBenchmarkIcon = (benchmarkResult?: BenchmarkResult, className?: string) => {
  if (!benchmarkResult) {
    return <PendingIcon className={className} />;
  }
  switch (benchmarkResult) {
    case BenchmarkResults.Pass:
      return <PassIcon className={className} />;
    case BenchmarkResults.PartialPass:
      return <AlertIcon className={cn(className, "text-orange-500")} />;
    case BenchmarkResults.Fail:
      return <AlertIcon className={cn(className, "text-red-500")} />;

    case BenchmarkResults.NotApplicable:
      return <NotApplicableIcon className={className} />;

    default:
      const _exhaustive: never = benchmarkResult;
      throw new Error(`Unsupported BenchmarkResult: ${_exhaustive}`);
  }
};

const formatBenchmarkResultBadgeText = ({
  benchmarkResult,
  failRatio,
}: Omit<BenchmarkResultBadgeProps, "className">) => {
  const defaultText = formatBenchmarkResult(benchmarkResult, { lowercase: false });

  if (failRatio === undefined) {
    return defaultText;
  }

  if (benchmarkResult !== BenchmarkResults.PartialPass) {
    return defaultText;
  }

  // For cases where all benchmarks have `BenchmarkResults.PartialPass`
  // we will display the default partial pass label.
  if (failRatio.benchmarksFailed === 0) {
    return defaultText;
  }

  if (failRatio.benchmarksFailed > failRatio.allBenchmarks) {
    throw new Error(
      `Invariant(BenchmarkFailRatio): testsFailed (${failRatio.benchmarksFailed}) must be less than or equal to allTests (${failRatio.allBenchmarks})`,
    );
  }

  return `${failRatio.benchmarksFailed}/${failRatio.allBenchmarks} tests failed`;
};

export function BenchmarkResultBadge({
  benchmarkResult,
  failRatio,
  className,
}: BenchmarkResultBadgeProps) {
  const BenchmarkIcon = getBenchmarkIcon(benchmarkResult, "w-4 h-4 shrink-0");
  return (
    <span
      className={cn(
        "w-fit flex flex-row flex-nowrap justify-center items-center gap-1.5 pl-2.5 pr-3 py-1 rounded-full " +
          "text-xs leading-normal font-medium text-nowrap cursor-default",
        benchmarkResultToBadgeStyles(benchmarkResult),
        className,
      )}
    >
      {BenchmarkIcon}
      {formatBenchmarkResultBadgeText({ benchmarkResult, failRatio })}
    </span>
  );
}
