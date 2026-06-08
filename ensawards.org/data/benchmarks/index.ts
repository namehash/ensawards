import { getAppBenchmarks } from "data/benchmarks/registry";

import.meta.glob("../apps/*/benchmarks/index.tsx", { eager: true });

export const APP_BENCHMARKS = getAppBenchmarks();
