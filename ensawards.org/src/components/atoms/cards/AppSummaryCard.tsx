import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  BenchmarkResult,
  BenchmarkStatuses,
  type EffectiveAppBenchmark,
} from "data/apps/benchmarks-types.ts";
import {
  calcCategoryScore,
  compareBenchmarks,
  groupBenchmarksByCategory,
} from "data/apps/benchmarks-utils.ts";
import type { App } from "data/apps/types.ts";
import { calculateAppEnsAwardsScore, getAppById } from "data/apps/utils.ts";
import {
  ChevronRight,
  X as FailIcon,
  Check as PartialPassIcon,
  CheckCheck as PassIcon,
  Clock as PendingIcon,
} from "lucide-react";
import { useState } from "react";

import { EnsAwardsCircularScoreSmall } from "@/components/atoms/ens-awards-score/circular-small.tsx";
import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

import { EnsAwardsBarScore } from "../ens-awards-score/bar.tsx";

const getBenchmarkIcon = (benchmark: EffectiveAppBenchmark) => {
  if (benchmark.status === BenchmarkStatuses.Pending) {
    return <PendingIcon className="h-6 w-6 text-muted-foreground" />;
  }

  switch (benchmark.result) {
    case BenchmarkResult.Pass:
      return <PassIcon className="h-6 w-6 text-emerald-600" />;
    case BenchmarkResult.PartialPass:
      return <PartialPassIcon className="h-6 w-6 text-orange-600" />;
    case BenchmarkResult.Fail:
      return <FailIcon className="h-6 w-6 text-red-600" />;
  }
};

interface BenchmarkCategorySectionProps {
  app: App;
  group: EffectiveAppBenchmark[]; // all benchmarks in the group belong to the same category
  initiallyOpen: boolean;
}

function BenchmarkCategorySection({ app, group, initiallyOpen }: BenchmarkCategorySectionProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [animationParent] = useAutoAnimate();
  const categoryScore = calcCategoryScore(group);

  return (
    <div ref={animationParent} className="w-full border-t border-gray-200 py-4">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-3 text-left"
      >
        <EnsAwardsCircularScoreSmall score={categoryScore} />
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
          {group
            .sort((a, b) => compareBenchmarks(a, b))
            .map((benchmark) => (
              <a
                key={benchmark.bestPractice.id}
                href={`/app/${app.appSlug}/${benchmark.bestPractice.category.categorySlug}/${benchmark.bestPractice.bestPracticeSlug}`}
                className="flex items-start gap-3"
              >
                <GenericTooltip
                  tooltipOffset={1}
                  content={
                    <p>
                      {benchmark.status === BenchmarkStatuses.Pending
                        ? benchmark.status
                        : benchmark.result}
                    </p>
                  }
                >
                  <span className="shrink-0 cursor-pointer">{getBenchmarkIcon(benchmark)}</span>
                </GenericTooltip>
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
    <TooltipProvider delayDuration={200} skipDelayDuration={0}>
      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white px-5">
        <div className="flex items-start justify-between gap-4 py-5">
          <div className="flex min-w-0 flex-col items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden">
              <AppIcon className="h-10 w-10 shrink-0 rounded-md" />
            </div>
            <h3 className="text-lg leading-normal font-semibold text-black">{resolvedApp.name}</h3>
          </div>
          <EnsAwardsBarScore score={appScore} mobileAdaptive={false} />
        </div>
        {benchmarkGroups.map((group, index) => {
          if (group.length === 0) return null;

          return (
            <BenchmarkCategorySection
              key={`${resolvedApp.name}-benchmarks-in-${group[0].bestPractice.category.id}-category`}
              app={resolvedApp}
              group={group}
              initiallyOpen={index === 0}
            />
          );
        })}
      </div>
    </TooltipProvider>
  );
}
