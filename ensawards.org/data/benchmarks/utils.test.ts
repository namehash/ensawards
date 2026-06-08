import {
  calcBestPracticeCategoryScore,
  calcEnsAwardsPoints,
  groupBenchmarksByCategory,
  sortAcceptanceTestBenchmarks,
} from "data/benchmarks/utils.ts";
import type { BestPracticeBenchmarks, BestPracticeSlug } from "data/ens-best-practices/types.ts";
import {
  createMockAcceptanceTestBenchmark,
  createMockBestPractice,
  mockDisplayProfilesBestPractice,
  mockForwardResolutionBestPractice,
  mockNormalizeNamesBestPractice,
  mockReverseResolutionBestPractice,
} from "data/shared/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { BenchmarkResults } from "./types.ts";

const { mockGetBestPracticeBySlug } = vi.hoisted(() => ({
  mockGetBestPracticeBySlug: vi.fn(),
}));

vi.mock(import("data/ens-best-practices/utils.ts"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    getBestPracticeBySlug: mockGetBestPracticeBySlug,
  };
});

describe("benchmarks-utils", () => {
  describe("calcEnsAwardsPoints", () => {
    it("Should return correct points for each benchmark result type", () => {
      const benchmarkCases = [
        {
          benchmark: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
          expectedPoints: 1,
        },
        {
          benchmark: createMockAcceptanceTestBenchmark(BenchmarkResults.PartialPass),
          expectedPoints: 0.5,
        },
        {
          benchmark: createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
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
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
        [mockForwardResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
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
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: undefined,
        },
        [mockForwardResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: undefined,
        },
      } as const satisfies BestPracticeBenchmarks;

      const result = groupBenchmarksByCategory(benchmarks);

      expect(
        Array.from(result.values()),
        "Expected groupBenchmarksByCategory to split benchmarks into separate category groups",
      ).toEqual([
        {
          "set-primary-name": {
            mockAcceptanceTestSlug1: undefined,
          },
        },
        {
          "display-avatar": {
            mockAcceptanceTestSlug2: undefined,
          },
          "forward-resolution": {
            mockAcceptanceTestSlug3: undefined,
          },
        },
      ]);
    });
  });

  describe("calcBestPracticeCategoryScore", () => {
    const mockBestPracticeCategoryDetails = {
      categoryId: "mock-category",
      categoryName: "Mock Category",
      categorySlug: "mock-category",
    };

    const mockBestPractice1 = createMockBestPractice({
      id: "mock-best-practice-1",
      name: "Mock Best Practice 1",
      bestPracticeSlug: "mock-best-practice-1",
      ...mockBestPracticeCategoryDetails,
    });

    const mockBestPractice2 = createMockBestPractice({
      id: "mock-best-practice-2",
      name: "Mock Best Practice 2",
      bestPracticeSlug: "mock-best-practice-2",
      ...mockBestPracticeCategoryDetails,
    });

    const mockBestPractice3 = createMockBestPractice({
      id: "mock-best-practice-3",
      name: "Mock Best Practice 3",
      bestPracticeSlug: "mock-best-practice-3",
      ...mockBestPracticeCategoryDetails,
    });

    beforeEach(() => {
      mockGetBestPracticeBySlug.mockReset();

      mockGetBestPracticeBySlug.mockImplementation((slug: BestPracticeSlug) => {
        switch (slug) {
          case mockBestPractice1.bestPracticeSlug:
            return mockBestPractice1;

          case mockBestPractice2.bestPracticeSlug:
            return mockBestPractice2;

          case mockBestPractice3.bestPracticeSlug:
            return mockBestPractice3;

          case mockReverseResolutionBestPractice.bestPracticeSlug:
            return mockReverseResolutionBestPractice;

          default:
            throw new Error(`No best practice found for slug: ${slug}`);
        }
      });
    });

    it("Should return undefined for no completed benchmarks", () => {
      const benchmarks: BestPracticeBenchmarks = {
        [mockBestPractice1.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
        [mockBestPractice2.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: undefined,
        },
        [mockBestPractice3.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: undefined,
        },
      };

      expect(
        calcBestPracticeCategoryScore(benchmarks),
        "Expected calcBestPracticeCategoryScore to return undefined for an empty benchmark list",
      ).toEqual(undefined);
    });

    it("Should return the rounded category score for valid benchmarks", () => {
      const validCategoryBenchmarks = {
        [mockBestPractice1.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        },
        [mockBestPractice2.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        },
        [mockBestPractice3.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        },
      } as const satisfies BestPracticeBenchmarks;

      const result = calcBestPracticeCategoryScore(validCategoryBenchmarks);

      expect(
        result,
        `Expected calcBestPracticeCategoryScore to return the rounded percentage for valid category benchmarks, got ${result} instead`,
      ).toEqual(33);
    });

    it("Should throw an error if benchmarks belong to different categories", () => {
      const benchmarks: BestPracticeBenchmarks = {
        [mockBestPractice1.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
        [mockBestPractice2.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: undefined,
        },
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: undefined,
        },
      };

      expect(() => calcBestPracticeCategoryScore(benchmarks)).toThrow(
        "All benchmarks must belong to the same category",
      );
    });
  });

  describe("sortAcceptanceTestBenchmarks", () => {
    it("should allow correct sorting of benchmarks", () => {
      const input = [
        undefined,
        createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        createMockAcceptanceTestBenchmark(BenchmarkResults.PartialPass),
      ];

      const expectedOutput = [
        createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        createMockAcceptanceTestBenchmark(BenchmarkResults.PartialPass),
        createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        undefined,
      ];

      const result = input.sort((a, b) => sortAcceptanceTestBenchmarks(a, b));

      expectedOutput.forEach((benchmark, index) =>
        expect(benchmark, `Expected sorted benchmark at index ${index} to match`).toEqual(
          result[index],
        ),
      );
    });
  });
});
