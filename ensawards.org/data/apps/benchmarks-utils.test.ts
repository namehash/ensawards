import { describe, expect, it } from "vitest";

import { BenchmarkResult } from "./benchmarks-types.ts";
import {
  calcCategoryScore,
  getBenchmarkWeight,
  groupBenchmarksByCategory,
} from "./benchmarks-utils.ts";
import { createMockBenchmark, createMockBestPractice } from "./test-utils.ts";

const mockSetPrimaryNameBestPractice = createMockBestPractice({
  categoryId: "reverse-resolution",
  categoryName: "Reverse resolution",
  categorySlug: "reverse-resolution",
  id: "set-primary-name",
  bestPracticeSlug: "set-primary-name",
  name: "Set primary name",
});

const mockShowPrimaryNameBestPractice = createMockBestPractice({
  categoryId: "reverse-resolution",
  categoryName: "Reverse resolution",
  categorySlug: "reverse-resolution",
  id: "show-primary-name",
  bestPracticeSlug: "show-primary-name",
  name: "Show primary name",
});

const mockResolvePrimaryNameBestPractice = createMockBestPractice({
  categoryId: "reverse-resolution",
  categoryName: "Reverse resolution",
  categorySlug: "reverse-resolution",
  id: "resolve-primary-name",
  bestPracticeSlug: "resolve-primary-name",
  name: "Resolve primary name",
});

const mockDisplayAvatarBestPractice = createMockBestPractice({
  categoryId: "display-profiles",
  categoryName: "Display profiles",
  categorySlug: "display-profiles",
  id: "display-avatar",
  bestPracticeSlug: "display-avatar",
  name: "Display avatar",
});

const mockPassingReverseResolutionBenchmark = createMockBenchmark(
  mockSetPrimaryNameBestPractice,
  BenchmarkResult.Pass,
);
const mockPartialDisplayProfilesBenchmark = createMockBenchmark(
  mockDisplayAvatarBestPractice,
  BenchmarkResult.PartialPass,
);
const mockFailingReverseResolutionBenchmark = createMockBenchmark(
  mockShowPrimaryNameBestPractice,
  BenchmarkResult.Fail,
);
const mockFailingReverseResolutionWeightBenchmark = createMockBenchmark(
  mockResolvePrimaryNameBestPractice,
  BenchmarkResult.Fail,
);

describe("benchmarks-utils", () => {
  describe("getBenchmarkWeight", () => {
    it("Should return the correct weight for each benchmark result type", () => {
      const benchmarkCases = [
        {
          benchmark: mockPassingReverseResolutionBenchmark,
          expectedWeight: 1,
        },
        {
          benchmark: mockPartialDisplayProfilesBenchmark,
          expectedWeight: 0.5,
        },
        {
          benchmark: mockFailingReverseResolutionWeightBenchmark,
          expectedWeight: 0,
        },
      ];

      benchmarkCases.forEach(({ benchmark, expectedWeight }) => {
        expect(getBenchmarkWeight(benchmark)).toEqual(expectedWeight);
      });
    });
  });

  describe("groupBenchmarksByCategory", () => {
    it("Should return a single group when all benchmarks belong to one category", () => {
      const mockBenchmarks = [
        mockPassingReverseResolutionBenchmark,
        mockFailingReverseResolutionBenchmark,
      ];

      expect(groupBenchmarksByCategory(mockBenchmarks)).toEqual([mockBenchmarks]);
    });

    it("Should return separate groups when benchmarks from multiple categories are present", () => {
      const mockBenchmarks = [
        mockPassingReverseResolutionBenchmark,
        mockPartialDisplayProfilesBenchmark,
        mockFailingReverseResolutionBenchmark,
      ];

      expect(groupBenchmarksByCategory(mockBenchmarks)).toEqual([
        [mockPassingReverseResolutionBenchmark, mockFailingReverseResolutionBenchmark],
        [mockPartialDisplayProfilesBenchmark],
      ]);
    });
  });

  describe("calcCategoryScore", () => {
    it("Should return 0 for an empty array", () => {
      expect(calcCategoryScore([])).toEqual(0);
    });

    it("Should return 0 when benchmarks belong to different categories", () => {
      const mixedCategoryBenchmarks = [
        mockPassingReverseResolutionBenchmark,
        mockPartialDisplayProfilesBenchmark,
      ];

      expect(calcCategoryScore(mixedCategoryBenchmarks)).toEqual(0);
    });

    it("Should return the rounded category score for valid benchmarks", () => {
      const validCategoryBenchmarks = [
        mockPassingReverseResolutionBenchmark,
        mockFailingReverseResolutionBenchmark,
        mockFailingReverseResolutionWeightBenchmark,
      ];

      expect(calcCategoryScore(validCategoryBenchmarks)).toEqual(33);
    });
  });
});
