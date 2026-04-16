import { getAppBenchmarks } from "data/benchmarks/registry";

import.meta.glob("../apps/*/benchmarks.ts", { eager: true });

export const APP_BENCHMARKS = getAppBenchmarks();
