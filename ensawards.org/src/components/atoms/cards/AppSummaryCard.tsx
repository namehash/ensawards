import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types.ts";
import { generalizeAcceptanceTestBenchmarks } from "data/acceptance-tests/utils.ts";
import type { App } from "data/apps/types.ts";
import { calcAppScore, getAppById } from "data/apps/utils.ts";
import {
  calcBestPracticeCategoryScore,
  formatBenchmarkResult,
  getAppBenchmarks,
  groupBenchmarksByCategory,
  sortAcceptanceTestBenchmarks,
} from "data/benchmarks/utils.ts";
import { BEST_PRACTICE_CATEGORIES } from "data/ens-best-practices";
import type {
  BestPracticeBenchmarks,
  BestPracticeCategorySlug,
} from "data/ens-best-practices/types.ts";
import {
  getBestPracticeBySlug,
  getBestPracticeCategoryBySlug,
} from "data/ens-best-practices/utils.ts";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { EnsAwardsCircularScoreSmall } from "@/components/atoms/ens-awards-score/circular-small.tsx";
import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

import { benchmarkResultToBadgeStyles, getBenchmarkIcon } from "../badges/BenchmarkResultBadge.tsx";
import { EnsAwardsBarScore } from "../ens-awards-score/bar.tsx";

interface BenchmarkCategorySectionProps {
  app: App;
  categorySlug: BestPracticeCategorySlug;
  benchmarksInCategory: BestPracticeBenchmarks;
  initiallyOpen: boolean;
}

function BenchmarkCategorySection({
  app,
  categorySlug,
  benchmarksInCategory,
  initiallyOpen,
}: BenchmarkCategorySectionProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [animationParent] = useAutoAnimate();
  const categoryScore = calcBestPracticeCategoryScore(benchmarksInCategory);
  const category = getBestPracticeCategoryBySlug(categorySlug);

  if (category === undefined) {
    throw new Error(`Invariant(CategorySlug): Category with slug ${categorySlug} not found`);
  }

  const appBenchmarksData = [...Object.entries(benchmarksInCategory)]
    .map(([bestPracticeSlug, bestPracticeBenchmarks]) => {
      const bestPractice = getBestPracticeBySlug(bestPracticeSlug);

      if (bestPractice === undefined) {
        throw new Error(
          `Invariant(BestPracticeSlug): Best practice with slug ${bestPracticeSlug} not found`,
        );
      }

      const referenceAcceptanceTestBenchmark = Object.values(bestPracticeBenchmarks).find(
        (benchmark) => benchmark !== undefined,
      );

      if (referenceAcceptanceTestBenchmark === undefined) {
        return { bestPractice, generalizedBenchmark: undefined };
      }

      const generalizedBenchmarkResult = generalizeAcceptanceTestBenchmarks(bestPracticeBenchmarks);
      const generalizedBenchmark =
        generalizedBenchmarkResult === undefined
          ? undefined
          : ({
              result: generalizedBenchmarkResult,
              // take contributions and notes from the first defined acceptance test benchmark as a reference
              // (guaranteed to exist if generalizedBenchmarkResult is not undefined)
              contributions: referenceAcceptanceTestBenchmark.contributions,
              notes: referenceAcceptanceTestBenchmark.notes,
            } as AcceptanceTestBenchmark);

      return {
        bestPractice,
        generalizedBenchmark,
      };
    })
    .sort((a, b) => sortAcceptanceTestBenchmarks(a.generalizedBenchmark, b.generalizedBenchmark));

  return (
    <div ref={animationParent} className="w-full border-t border-gray-200 py-4">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-3 text-left"
      >
        <EnsAwardsCircularScoreSmall score={categoryScore} />
        <span className="flex-1 text-lg leading-normal font-semibold text-black">
          {category.name}
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
          {appBenchmarksData.map(({ bestPractice, generalizedBenchmark }) => {
            return (
              <a
                key={bestPractice.id}
                href={`/app/${app.appSlug}/${bestPractice.category.categorySlug}/${bestPractice.bestPracticeSlug}`}
                className="flex items-start gap-3"
              >
                <GenericTooltip
                  tooltipOffset={1}
                  triggerAsChild
                  content={
                    <p>
                      {formatBenchmarkResult(generalizedBenchmark?.result, {
                        lowercase: false,
                      })}
                    </p>
                  }
                >
                  <span className="shrink-0 cursor-pointer">
                    {getBenchmarkIcon(
                      generalizedBenchmark?.result,
                      cn(
                        "w-6 h-6",
                        benchmarkResultToBadgeStyles(generalizedBenchmark?.result),
                        "bg-transparent",
                        generalizedBenchmark === undefined && "p-0.5",
                      ),
                    )}
                  </span>
                </GenericTooltip>
                <span className="text-sm leading-normal font-medium text-black underline decoration-black/40 decoration-from-font underline-offset-[25%] transition-all duration-200 hover:decoration-black">
                  {bestPractice.name}
                </span>
              </a>
            );
          })}
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

  const appScore = calcAppScore(resolvedApp);
  const benchmarksByCategory = groupBenchmarksByCategory(getAppBenchmarks(resolvedApp.appSlug));
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
        {[...benchmarksByCategory.entries()]
          .sort(
            ([a], [b]) =>
              BEST_PRACTICE_CATEGORIES.findIndex((category) => category.categorySlug === a) -
              BEST_PRACTICE_CATEGORIES.findIndex((category) => category.categorySlug === b),
          )
          .map(([categorySlug, benchmarksInCategory], index) => {
            return (
              <BenchmarkCategorySection
                key={`${resolvedApp.appSlug}-benchmarks-in-${categorySlug}-category`}
                app={resolvedApp}
                categorySlug={categorySlug}
                benchmarksInCategory={benchmarksInCategory}
                initiallyOpen={index === 0}
              />
            );
          })}
      </div>
    </TooltipProvider>
  );
}
