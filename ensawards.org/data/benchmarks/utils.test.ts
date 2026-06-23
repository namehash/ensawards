import type { AcceptanceTestBenchmarkApplicable } from "data/acceptance-tests/types.ts";
import {
  calcBenchmarkFailRatio,
  calcBestPracticeCategoryScore,
  calcEnsAwardsPoints,
  groupBenchmarksByCategory,
  sortAcceptanceTestBenchmarks,
  sortBenchmarkFailRatios,
  sortBenchmarkResults,
} from "data/benchmarks/utils.ts";
import type { BestPracticeBenchmarks, BestPracticeSlug } from "data/ens-best-practices/types.ts";
import {
  type EnsAwardsPoints,
  EnsAwardsUndefinedScoreLabels,
} from "data/shared/ens-awards-score.ts";
import {
  createMockAcceptanceTestBenchmark,
  createMockBestPractice,
  mockDisplayProfilesBestPractice,
  mockForwardResolutionBestPractice,
  mockNormalizeNamesBestPractice,
  mockReverseResolutionBestPractice,
} from "data/shared/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  type AcceptanceTestBenchmarks,
  type BenchmarkFailRatio,
  BenchmarkResults,
} from "./types.ts";

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
      const benchmarkCases: {
        benchmark: AcceptanceTestBenchmarkApplicable;
        expectedPoints: EnsAwardsPoints;
      }[] = [
        // Type assertions are acceptable here since we are in a fully controlled setting
        {
          benchmark: createMockAcceptanceTestBenchmark(
            BenchmarkResults.Pass,
          ) as AcceptanceTestBenchmarkApplicable,
          expectedPoints: 1,
        },
        {
          benchmark: createMockAcceptanceTestBenchmark(
            BenchmarkResults.PartialPass,
          ) as AcceptanceTestBenchmarkApplicable,
          expectedPoints: 0.5,
        },
        {
          benchmark: createMockAcceptanceTestBenchmark(
            BenchmarkResults.Fail,
          ) as AcceptanceTestBenchmarkApplicable,
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

    const mockBestPractice4 = createMockBestPractice({
      id: "mock-best-practice-4",
      name: "Mock Best Practice 4",
      bestPracticeSlug: "mock-best-practice-4",
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

          case mockBestPractice4.bestPracticeSlug:
            return mockBestPractice4;

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
        calcBestPracticeCategoryScore(benchmarks).score,
        "Expected calcBestPracticeCategoryScore to return undefined for a list of pending benchmarks",
      ).toEqual(undefined);

      expect(
        calcBestPracticeCategoryScore(benchmarks).label,
        "Expected calcBestPracticeCategoryScore to return a result with a 'pending' label for a list of pending benchmarks",
      ).toEqual(EnsAwardsUndefinedScoreLabels.Pending);
    });

    it("Should return undefined for completed, but not applicable benchmarks", () => {
      const benchmarks: BestPracticeBenchmarks = {
        [mockBestPractice1.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(
            BenchmarkResults.NotApplicable,
          ),
        },
        [mockBestPractice2.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: createMockAcceptanceTestBenchmark(
            BenchmarkResults.NotApplicable,
          ),
        },
        [mockBestPractice3.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: createMockAcceptanceTestBenchmark(
            BenchmarkResults.NotApplicable,
          ),
        },
      };

      expect(
        calcBestPracticeCategoryScore(benchmarks).score,
        "Expected calcBestPracticeCategoryScore to return undefined for a list of not applicable benchmarks",
      ).toEqual(undefined);

      expect(
        calcBestPracticeCategoryScore(benchmarks).label,
        "Expected calcBestPracticeCategoryScore to return a result with a 'not-applicable' label for a list of not applicable benchmarks",
      ).toEqual(EnsAwardsUndefinedScoreLabels.NotApplicable);
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
        [mockBestPractice4.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: createMockAcceptanceTestBenchmark(
            BenchmarkResults.NotApplicable,
          ),
        },
      } as const satisfies BestPracticeBenchmarks;

      const result = calcBestPracticeCategoryScore(validCategoryBenchmarks).score;

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
        createMockAcceptanceTestBenchmark(BenchmarkResults.NotApplicable),
        createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        createMockAcceptanceTestBenchmark(BenchmarkResults.PartialPass),
      ];

      const expectedOutput = [
        createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        createMockAcceptanceTestBenchmark(BenchmarkResults.PartialPass),
        createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        createMockAcceptanceTestBenchmark(BenchmarkResults.NotApplicable),
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

  describe("sortBenchmarkResults", () => {
    it("should allow correct sorting of benchmark results", () => {
      const input = [
        undefined,
        BenchmarkResults.Fail,
        BenchmarkResults.Pass,
        BenchmarkResults.Fail,
        BenchmarkResults.PartialPass,
        BenchmarkResults.NotApplicable,
      ];

      const expectedOutput = [
        BenchmarkResults.Pass,
        BenchmarkResults.PartialPass,
        BenchmarkResults.Fail,
        BenchmarkResults.Fail,
        BenchmarkResults.NotApplicable,
        undefined,
      ];

      const result = input.sort((a, b) => sortBenchmarkResults(a, b));

      expectedOutput.forEach((benchmark, index) =>
        expect(benchmark, `Expected sorted benchmark at index ${index} to match`).toEqual(
          result[index],
        ),
      );
    });
  });

  describe("calcBenchmarkFailRatio", () => {
    it("should return the correct fail ratio for a given set of benchmarks", () => {
      const expectedResult = {
        benchmarksFailed: 2,
        allBenchmarks: 7,
      } as const satisfies BenchmarkFailRatio;

      const inputBenchmarks = {
        "mock-acceptance-test-1": createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        "mock-acceptance-test-2": createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        "mock-acceptance-test-3": createMockAcceptanceTestBenchmark(BenchmarkResults.NotApplicable),
        "mock-acceptance-test-4": undefined,
        "mock-acceptance-test-5": createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        "mock-acceptance-test-6": createMockAcceptanceTestBenchmark(BenchmarkResults.PartialPass),
        "mock-acceptance-test-7": createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
      } as const satisfies AcceptanceTestBenchmarks;

      const result = calcBenchmarkFailRatio(inputBenchmarks);

      expect(
        result,
        "Expected calcBenchmarkFailRatio to return the correct fail ratio for a given set of benchmarks",
      ).toEqual(expectedResult);
    });
  });

  describe("sortBenchmarkFailRatios", () => {
    it("should allow correct sorting of benchmark fail ratios", () => {
      const input = [
        { benchmarksFailed: 2, allBenchmarks: 10 },
        { benchmarksFailed: 1, allBenchmarks: 4 },
        { benchmarksFailed: 3, allBenchmarks: 5 },
        { benchmarksFailed: 2, allBenchmarks: 2 },
      ];

      const expectedOutput = [
        { benchmarksFailed: 2, allBenchmarks: 10 }, // 20%
        { benchmarksFailed: 1, allBenchmarks: 4 }, // 25%
        { benchmarksFailed: 3, allBenchmarks: 5 }, // 60%
        { benchmarksFailed: 2, allBenchmarks: 2 }, // 100%
      ];

      const result = input.sort((a, b) => sortBenchmarkFailRatios(a, b));

      expectedOutput.forEach((failRatio, index) =>
        expect(failRatio, `Expected sorted fail ratio at index ${index} to match`).toEqual(
          result[index],
        ),
      );
    });
  });
});
