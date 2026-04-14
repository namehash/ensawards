import { describe, expect, it } from "vitest";

import {
  type AppBenchmarkPending,
  BenchmarkResult,
  BenchmarkStatuses,
} from "./benchmarks-types.ts";
import {
  buildEffectiveAppBenchmarks,
  calcCategoryScore,
  compareBenchmarks,
  getBenchmarkPoints,
  groupBenchmarksByCategory,
} from "./benchmarks-utils.ts";
import MetaMaskWalletBenchmarks from "./metamask-wallet/benchmarks.ts";
import { createMockBenchmark, createMockBestPractice } from "./test-utils.ts";
import { AppTypes } from "./types.ts";

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

const mockPartialReverseResolutionBenchmark = createMockBenchmark(
  mockResolvePrimaryNameBestPractice,
  BenchmarkResult.PartialPass,
);

const mockPendingReverseResolutionBenchmark = {
  status: BenchmarkStatuses.Pending,
  bestPractice: mockResolvePrimaryNameBestPractice,
} as const satisfies AppBenchmarkPending;

describe("benchmarks-utils", () => {
  describe("getBenchmarkPoints", () => {
    it("Should return correct points for each benchmark result type", () => {
      const benchmarkCases = [
        {
          benchmark: mockPassingReverseResolutionBenchmark,
          expectedPoints: 1,
        },
        {
          benchmark: mockPartialDisplayProfilesBenchmark,
          expectedPoints: 0.5,
        },
        {
          benchmark: mockFailingReverseResolutionBenchmark,
          expectedPoints: 0,
        },
      ];

      benchmarkCases.forEach(({ benchmark, expectedPoints }) => {
        expect(
          getBenchmarkPoints(benchmark),
          `Expected getBenchmarkPoints to return ${expectedPoints} for benchmark "${benchmark.bestPractice.id}"`,
        ).toEqual(expectedPoints);
      });
    });
  });

  describe("groupBenchmarksByCategory", () => {
    it("Should return a single group when all benchmarks belong to one category", () => {
      const mockBenchmarks = [
        mockPassingReverseResolutionBenchmark,
        mockFailingReverseResolutionBenchmark,
      ];

      expect(
        groupBenchmarksByCategory(mockBenchmarks),
        "Expected groupBenchmarksByCategory to return a single group when all benchmarks share one category",
      ).toEqual([mockBenchmarks]);
    });

    it("Should return separate groups when benchmarks from multiple categories are present", () => {
      const mockBenchmarks = [
        mockPassingReverseResolutionBenchmark,
        mockPartialDisplayProfilesBenchmark,
        mockFailingReverseResolutionBenchmark,
      ];

      expect(
        groupBenchmarksByCategory(mockBenchmarks),
        "Expected groupBenchmarksByCategory to split benchmarks into separate category groups",
      ).toEqual([
        [mockPassingReverseResolutionBenchmark, mockFailingReverseResolutionBenchmark],
        [mockPartialDisplayProfilesBenchmark],
      ]);
    });
  });

  describe("calcCategoryScore", () => {
    it("Should return undefined for an empty array", () => {
      expect(
        calcCategoryScore([]),
        "Expected calcCategoryScore to return undefined for an empty benchmark list",
      ).toEqual(undefined);
    });

    it("Should return undefined when benchmarks belong to different categories", () => {
      const mixedCategoryBenchmarks = [
        mockPassingReverseResolutionBenchmark,
        mockPartialDisplayProfilesBenchmark,
      ];

      expect(
        calcCategoryScore(mixedCategoryBenchmarks),
        "Expected calcCategoryScore to return undefined when benchmarks span multiple categories",
      ).toEqual(undefined);
    });

    it("Should return the rounded category score for valid benchmarks", () => {
      const validCategoryBenchmarks = [
        mockPassingReverseResolutionBenchmark,
        mockFailingReverseResolutionBenchmark,
        mockFailingReverseResolutionBenchmark,
      ];

      const result = calcCategoryScore(validCategoryBenchmarks);

      expect(
        result,
        `Expected calcCategoryScore to return the rounded percentage for valid category benchmarks, got ${result} instead`,
      ).toEqual(33);
    });
  });

  describe("buildEffectiveAppBenchmarks", () => {
    it("Shouldn't overwrite completed benchmarks", () => {
      const effectiveBenchmarks = buildEffectiveAppBenchmarks(
        MetaMaskWalletBenchmarks,
        AppTypes.Wallet,
      );

      MetaMaskWalletBenchmarks.forEach((benchmark) => {
        const matchingBenchmark = effectiveBenchmarks.find(
          (candidate) => candidate.bestPractice.id === benchmark.bestPractice.id,
        );

        expect(
          matchingBenchmark,
          `Expected buildEffectiveAppBenchmarks to include the completed benchmark "${benchmark.bestPractice.id}"`,
        ).toBe(benchmark);
      });
    });
  });

  describe("compareBenchmarks", () => {
    it("should allow correct sorting of benchmarks", () => {
      const input = [
        mockPendingReverseResolutionBenchmark,
        mockFailingReverseResolutionBenchmark,
        mockPassingReverseResolutionBenchmark,
        mockFailingReverseResolutionBenchmark,
        mockPartialReverseResolutionBenchmark,
      ];

      const expectedOutput = [
        mockPassingReverseResolutionBenchmark,
        mockPartialReverseResolutionBenchmark,
        mockFailingReverseResolutionBenchmark,
        mockFailingReverseResolutionBenchmark,
        mockPendingReverseResolutionBenchmark,
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
