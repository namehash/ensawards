import type { App } from "data/apps/types";
import type { AppBenchmarks, BestPracticeBenchmarks } from "data/benchmarks/types";

const benchmarksRegistry: AppBenchmarks = {};

export function defineAppBenchmarks(app: App, benchmarks: BestPracticeBenchmarks): void {
  // For now, allow overwriting benchmarks on call, might change
  benchmarksRegistry[app.appSlug] = benchmarks;
}

export const getBenchmarks = (): AppBenchmarks => benchmarksRegistry;
