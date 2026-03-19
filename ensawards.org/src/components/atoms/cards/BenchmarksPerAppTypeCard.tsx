import type { EffectiveAppBenchmark } from "data/apps/benchmarks-types";
import type { App } from "data/apps/types.ts";
import { getAppById } from "data/apps/utils.ts";
import { Fragment, useState } from "react";

import { BenchmarkResultBadge } from "@/components/atoms/badges/BenchmarkResultBadge.tsx";
import { benchmarkResultToBadgeStyles } from "@/utils/styles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export interface BenchmarksPerAppTypeCardProps {
  appsWithBenchmark: {
    app: App;
    benchmark: EffectiveAppBenchmark;
  }[];
}

export function BenchmarksPerAppTypeCard({ appsWithBenchmark }: BenchmarksPerAppTypeCardProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // A necessary step due to Astro Island's inner serialization logic
  const resolvedAppsWithBenchmark = appsWithBenchmark.map(({ app, benchmark }) => ({
    app: getAppById(app.id) ?? app,
    benchmark,
  }));

  if (resolvedAppsWithBenchmark.length === 0) return null;

  const [{ app: firstApp }] = resolvedAppsWithBenchmark;
  const areAllAppsOfSameType = resolvedAppsWithBenchmark.every(
    ({ app }) => app.type === firstApp.type,
  );

  if (!areAllAppsOfSameType) return null;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white px-[10px] pt-4 pb-[10px]">
      <h3 className="text-lg leading-normal font-semibold text-black px-[10px]">
        {firstApp.type} benchmarks
      </h3>
      <div className="flex w-full flex-col items-center">
        {resolvedAppsWithBenchmark.map(({ app, benchmark }, index) => {
          const AppIcon = app.icon;
          const hoveredItemRelativePosition =
            hoveredItem !== null ? hoveredItem - index : undefined;

          return (
            <Fragment key={`${app.id}-${benchmark.bestPractice.id}`}>
              <a
                href={`/app/${app.appSlug}/${benchmark.bestPractice.category.categorySlug}/${benchmark.bestPractice.bestPracticeSlug}`}
                className="flex w-full items-center gap-3 py-4 p-[10px] rounded-xl transition-colors duration-200 hover:bg-[#F5F5F5]"
                onMouseOver={() => setHoveredItem(index)}
                onMouseOut={() => setHoveredItem(null)}
              >
                <AppIcon className="h-8 w-8 shrink-0 rounded-md" />
                <span className="min-w-0 flex-1 text-base leading-normal font-semibold text-neutral-900">
                  {app.name}
                </span>
                <BenchmarkResultBadge
                  benchmark={benchmark}
                  className={cn(
                    "shrink-0",
                    benchmarkResultToBadgeStyles(benchmark),
                    "cursor-pointer",
                  )}
                />
              </a>
              {index < appsWithBenchmark.length - 1 && (
                <div
                  className={cn(
                    "w-[calc(100%-20px)] h-[1px]",
                    hoveredItemRelativePosition !== undefined &&
                      (hoveredItemRelativePosition === 0 || hoveredItemRelativePosition === 1)
                      ? "bg-transparent"
                      : "bg-gray-200",
                  )}
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default BenchmarksPerAppTypeCard;
