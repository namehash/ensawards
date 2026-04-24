import type { App, AppBenchmarks } from "data/apps/types";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

const benchmarksRegistry: AppBenchmarks = {};

export function defineAppBenchmarks(app: App, benchmarks: BestPracticeBenchmarks): void {
  // For now, allow overwriting benchmarks on call, might change
  benchmarksRegistry[app.appSlug] = benchmarks;
}

export const getAppBenchmarks = (): AppBenchmarks => benchmarksRegistry;
