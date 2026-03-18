import type { EffectiveAppBenchmark } from "data/apps/benchmarks-types";
import type { App } from "data/apps/types.ts";
import { getAppById } from "data/apps/utils.ts";

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
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5">
      <h3 className="text-lg leading-normal font-semibold text-black">
        {firstApp.type} benchmarks
      </h3>
      <div className="flex w-full flex-col">
        {appsWithBenchmark.map(({ app, benchmark }, index) => {
          const AppIcon = app.icon;

          return (
            <a
              key={`${app.id}-${benchmark.bestPractice.id}`}
              href={`/app/${app.appSlug}/${benchmark.bestPractice.category.categorySlug}/${benchmark.bestPractice.bestPracticeSlug}`}
              className={cn(
                "flex w-full items-center gap-3 py-4 transition-colors duration-200 hover:bg-gray-50/60",
                index > 0 && "border-t border-gray-200",
              )}
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
          );
        })}
      </div>
    </div>
  );
}

export default BenchmarksPerAppTypeCard;
