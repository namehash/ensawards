import { getBenchmarks } from "data/benchmarks/registry";

import.meta.glob("../apps/*/benchmarks.ts", { eager: true });

export const BENCHMARKS = getBenchmarks();
