import { type AppBenchmark, BenchmarkResult } from "./benchmarks-types.ts";

/**
 * Returns a weight of all possible types of {@link BenchmarkResult}.
 *
 * For now, the weights for different {@link BenchmarkResult}s are:
 * {@link BenchmarkResult.Pass} = 1.0
 * {@link BenchmarkResult.PartialPass} = 0.5
 * {@link BenchmarkResult.Fail} = 0.0
 */
export const getBenchmarkWeight = (benchmark: AppBenchmark): number => {
  switch (benchmark.result) {
    case BenchmarkResult.Pass:
      return 1;
    case BenchmarkResult.PartialPass:
      return 0.5;
    default:
      return 0;
  }
};

export const groupBenchmarksByCategory = (benchmarks: AppBenchmark[]): AppBenchmark[][] => {
  const groupedBenchmarks = new Map<string, AppBenchmark[]>();

  for (const benchmark of benchmarks) {
    const { category } = benchmark.bestPractice;
    const categoryBenchmarks = groupedBenchmarks.get(category.id) ?? [];

    categoryBenchmarks.push(benchmark);

    groupedBenchmarks.set(category.id, categoryBenchmarks);
  }

  return Array.from(groupedBenchmarks.values());
};
