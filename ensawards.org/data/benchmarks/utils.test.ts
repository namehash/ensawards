import {
  calcBestPracticeCategoryScore,
  calcEnsAwardsPoints,
  groupBenchmarksByCategory,
  sortBenchmarks,
} from "data/benchmarks/utils.ts";
import type { BestPracticeBenchmarks, BestPracticeSlug } from "data/ens-best-practices/types.ts";
import {
  createMockBenchmark,
  mockDisplayProfilesBestPractice,
  mockForwardResolutionBestPractice,
  mockNormalizeNamesBestPractice,
  mockReverseResolutionBestPractice,
} from "data/shared/test-utils.ts";
import { describe, expect, it, vi } from "vitest";

import { BenchmarkResults } from "./types.ts";

const { mockGetBestPracticeBySlug } = vi.hoisted(() => ({
  mockGetBestPracticeBySlug: vi.fn(),
}));

vi.mock("data/ens-best-practices/utils.ts", () => ({
  getBestPracticeBySlug: mockGetBestPracticeBySlug,
}));

describe("benchmarks-utils", () => {
  describe("calcEnsAwardsPoints", () => {
    it("Should return correct points for each benchmark result type", () => {
      const benchmarkCases = [
        {
          benchmark: createMockBenchmark(BenchmarkResults.Pass),
          expectedPoints: 1,
        },
        {
          benchmark: createMockBenchmark(BenchmarkResults.PartialPass),
          expectedPoints: 0.5,
        },
        {
          benchmark: createMockBenchmark(BenchmarkResults.Fail),
          expectedPoints: 0,
        },
      ];

      benchmarkCases.forEach(({ benchmark, expectedPoints }) => {
        expect(
          calcEnsAwardsPoints(benchmark),
          `Expected calcEnsAwardsPoints to return ${expectedPoints}`,
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

  describe("calcBestPracticeCategoryScore", () => {
    it("Should return undefined for no completed benchmarks", () => {
      const benchmarks: BestPracticeBenchmarks = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: undefined,
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: undefined,
        [mockForwardResolutionBestPractice.bestPracticeSlug]: undefined,
      };

      expect(
        calcBestPracticeCategoryScore(benchmarks),
        "Expected calcBestPracticeCategoryScore to return undefined for an empty benchmark list",
      ).toEqual(undefined);
    });

    it("Should return the rounded category score for valid benchmarks", () => {
      const validCategoryBenchmarks = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResults.Pass,
        ),
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResults.Fail,
        ),
        [mockForwardResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResults.Fail,
        ),
      } as const satisfies BestPracticeBenchmarks;

      const result = calcBestPracticeCategoryScore(validCategoryBenchmarks);

      expect(
        result,
        `Expected calcBestPracticeCategoryScore to return the rounded percentage for valid category benchmarks, got ${result} instead`,
      ).toEqual(33);
    });
  });

  describe("sortBenchmarks", () => {
    it("should allow correct sorting of benchmarks", () => {
      const input = [
        undefined,
        createMockBenchmark(BenchmarkResults.Fail),
        createMockBenchmark(BenchmarkResults.Pass),
        createMockBenchmark(BenchmarkResults.Fail),
        createMockBenchmark(BenchmarkResults.PartialPass),
      ];

      const expectedOutput = [
        createMockBenchmark(BenchmarkResults.Pass),
        createMockBenchmark(BenchmarkResults.PartialPass),
        createMockBenchmark(BenchmarkResults.Fail),
        createMockBenchmark(BenchmarkResults.Fail),
        undefined,
      ];

      const result = input.sort((a, b) => sortBenchmarks(a, b));

      expectedOutput.forEach((benchmark, index) =>
        expect(benchmark, `Expected sorted benchmark at index ${index} to match`).toEqual(
          result[index],
        ),
      );
    });
  });
});
