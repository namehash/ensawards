import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  ChevronRight,
  X as FailIcon,
  Check as PartialPassIcon,
  CheckCheck as PassIcon,
} from "lucide-react";
import { useState } from "react";

import { type AppBenchmark, BenchmarkResult } from "@/../data/apps/benchmarks-types.ts";
import { getBenchmarkWeight, groupBenchmarksByCategory } from "@/../data/apps/benchmarks-utils.ts";
import { calculateAppEnsAwardsScore, getAppById } from "@/../data/apps/utils.ts";
import { getAppSupportColor } from "@/utils/styles";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

import type { App } from "../../../../data/apps/types.ts";
import { EnsAwardsBarScore } from "../ens-awards-score/bar.tsx";

const getBenchmarkIcon = (result: BenchmarkResult) => {
  switch (result) {
    case BenchmarkResult.Pass:
      return <PassIcon className="h-6 w-6 text-emerald-600" />;
    case BenchmarkResult.PartialPass:
      return <PartialPassIcon className="h-6 w-6 text-orange-600" />;
    case BenchmarkResult.Fail:
      return <FailIcon className="h-6 w-6 text-red-600" />;
  }
};

const CircularCategoryScore = ({ score }: { score: number }) => {
  const roundedScore = Math.round(score);
  const radius = 13;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - roundedScore / 100);
  const progressColorClass = `text-${getAppSupportColor(score)}`;

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

interface BenchmarkCategorySectionProps {
  app: App;
  group: AppBenchmark[]; // all benchmarks in the group belong to the same category
  initiallyOpen: boolean;
}

function BenchmarkCategorySection({ app, group, initiallyOpen }: BenchmarkCategorySectionProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [animationParent] = useAutoAnimate();
  const categoryScore =
    group.length === 0
      ? 0
      : (group.reduce((sum, benchmark) => sum + getBenchmarkWeight(benchmark), 0) * 100) /
        group.length;

  return (
    <div ref={animationParent} className="w-full border-t border-gray-200 py-4">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center gap-3 text-left"
      >
        <CircularCategoryScore score={categoryScore} />
        {/* This assumption is safe, because all benchmarks passed into this component belong to one BestPracticeCategory */}
        <span className="flex-1 text-lg leading-normal font-semibold text-black">
          {group[0].bestPractice.category.name}
        </span>
        <ChevronRight
          className={cn(
            "h-6 w-6 shrink-0 text-black/30 hover:text-black/60 transition-transform duration-200 cursor-pointer",
            isOpen && "rotate-90",
          )}
        />
      </button>

      {isOpen && (
        <div className="flex w-full flex-col gap-4 pt-4">
          {group.map((benchmark) => (
            <a
              key={benchmark.bestPractice.id}
              href={`/app/${app.appSlug}/${benchmark.bestPractice.category.categorySlug}/${benchmark.bestPractice.bestPracticeSlug}`}
              className="flex items-start gap-3"
            >
              <span className="shrink-0">{getBenchmarkIcon(benchmark.result)}</span>
              <span className="text-sm leading-normal font-medium text-black underline decoration-black/40 decoration-from-font underline-offset-[25%] transition-all duration-200 hover:decoration-black">
                {benchmark.bestPractice.name}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export interface AppSummaryCardProps {
  app: App;
}

export function AppSummaryCard({ app }: AppSummaryCardProps) {
  // A necessary step due to Astro Island's inner serialization logic
  const resolvedApp = getAppById(app.id) ?? app;

  const appScore = calculateAppEnsAwardsScore(resolvedApp);
  const benchmarkGroups = groupBenchmarksByCategory(resolvedApp.benchmarks);
  const AppIcon = resolvedApp.icon;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white px-5">
      <div className="flex items-start justify-between gap-4 py-5">
        <div className="flex min-w-0 flex-col items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden">
            <AppIcon className="h-10 w-10 shrink-0" />
          </div>
          <h3 className="text-lg leading-normal font-semibold text-black">{resolvedApp.name}</h3>
        </div>
        <EnsAwardsBarScore score={appScore} isDynamic={false} />
      </div>
      {benchmarkGroups.map((group, index) => {
        if (group.length === 0) return null;

        return (
          <BenchmarkCategorySection
            key={`${resolvedApp.name}-benchmarks-in-${group[0].bestPractice.category.id}-category`}
            app={app}
            group={group}
            initiallyOpen={index === 0}
          />
        );
      })}
    </div>
  );
}
