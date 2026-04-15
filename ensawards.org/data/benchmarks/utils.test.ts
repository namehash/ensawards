import {
  calcCategoryScore,
  compareBenchmarks,
  getBenchmarkPoints,
  groupBenchmarksByCategory,
} from "data/benchmarks/utils.ts";
import type { BestPracticeSlug } from "data/ens-best-practices/types.ts";
import {
  createMockBenchmark,
  mockDisplayProfilesBestPractice,
  mockForwardResolutionBestPractice,
  mockNormalizeNamesBestPractice,
  mockReverseResolutionBestPractice,
} from "data/shared/test-utils.ts";
import { describe, expect, it, vi } from "vitest";

import { BenchmarkResult, type BestPracticeBenchmarks } from "./types.ts";

const { mockGetBestPracticeBySlug } = vi.hoisted(() => ({
  mockGetBestPracticeBySlug: vi.fn(),
}));

vi.mock("data/ens-best-practices/utils.ts", () => ({
  getBestPracticeBySlug: mockGetBestPracticeBySlug,
}));

describe("benchmarks-utils", () => {
  describe("getBenchmarkPoints", () => {
    it("Should return correct points for each benchmark result type", () => {
      const benchmarkCases = [
        {
          benchmark: createMockBenchmark(BenchmarkResult.Pass),
          expectedPoints: 1,
        },
        {
          benchmark: createMockBenchmark(BenchmarkResult.PartialPass),
          expectedPoints: 0.5,
        },
        {
          benchmark: createMockBenchmark(BenchmarkResult.Fail),
          expectedPoints: 0,
        },
      ];

      benchmarkCases.forEach(({ benchmark, expectedPoints }) => {
        expect(
          getBenchmarkPoints(benchmark),
          `Expected getBenchmarkPoints to return ${expectedPoints}`,
        ).toEqual(expectedPoints);
      });
    });
  });

  describe("groupBenchmarksByCategory", () => {
    it("Should return a single group when all benchmarks belong to one category", () => {
      mockGetBestPracticeBySlug.mockImplementation((slug: BestPracticeSlug) => {
        return mockDisplayProfilesBestPractice;
      });

      const benchmarks: BestPracticeBenchmarks = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: undefined,
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: undefined,
        [mockForwardResolutionBestPractice.bestPracticeSlug]: undefined,
      } as const satisfies BestPracticeBenchmarks;

      expect(
        groupBenchmarksByCategory(benchmarks).size,
        "Expected groupBenchmarksByCategory to return a single group when all benchmarks share one category",
      ).toEqual(1);
    });

    it("Should return separate groups when benchmarks from multiple categories are present", () => {
      mockGetBestPracticeBySlug.mockImplementation((slug: BestPracticeSlug) => {
        if (slug === mockReverseResolutionBestPractice.bestPracticeSlug) {
          return mockDisplayProfilesBestPractice;
        }

        return mockNormalizeNamesBestPractice;
      });

      const benchmarks: BestPracticeBenchmarks = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: undefined,
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: undefined,
        [mockForwardResolutionBestPractice.bestPracticeSlug]: undefined,
      } as const satisfies BestPracticeBenchmarks;

      const result = groupBenchmarksByCategory(benchmarks);

      expect(
        Array.from(result.values()),
        "Expected groupBenchmarksByCategory to split benchmarks into separate category groups",
      ).toEqual([
        { "set-primary-name": undefined },
        { "display-avatar": undefined, "forward-resolution": undefined },
      ]);
    });
  });

  describe("calcCategoryScore", () => {
    it("Should return undefined for no completed benchmarks", () => {
      const benchmarks: BestPracticeBenchmarks = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: undefined,
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: undefined,
        [mockForwardResolutionBestPractice.bestPracticeSlug]: undefined,
      };

      expect(
        calcCategoryScore(benchmarks),
        "Expected calcCategoryScore to return undefined for an empty benchmark list",
      ).toEqual(undefined);
    });

    it("Should return the rounded category score for valid benchmarks", () => {
      const validCategoryBenchmarks = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Pass,
        ),
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Fail,
        ),
        [mockForwardResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Fail,
        ),
      } as const satisfies BestPracticeBenchmarks;

      const result = calcCategoryScore(validCategoryBenchmarks);

      expect(
        result,
        `Expected calcCategoryScore to return the rounded percentage for valid category benchmarks, got ${result} instead`,
      ).toEqual(33);
    });
  });

  describe("compareBenchmarks", () => {
    it("should allow correct sorting of benchmarks", () => {
      const input = [
        undefined,
        createMockBenchmark(BenchmarkResult.Fail),
        createMockBenchmark(BenchmarkResult.Pass),
        createMockBenchmark(BenchmarkResult.Fail),
        createMockBenchmark(BenchmarkResult.PartialPass),
      ];

      const expectedOutput = [
        createMockBenchmark(BenchmarkResult.Pass),
        createMockBenchmark(BenchmarkResult.PartialPass),
        createMockBenchmark(BenchmarkResult.Fail),
        createMockBenchmark(BenchmarkResult.Fail),
        undefined,
      ];

      const result = input.sort((a, b) => compareBenchmarks(a, b));

      expectedOutput.forEach((benchmark, index) =>
        expect(benchmark, `Expected sorted benchmark at index ${index} to match`).toEqual(
          result[index],
        ),
      );
    });
  });
});
