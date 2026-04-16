import { type AppBenchmarks } from "data/apps/types";
import { type AppBenchmark, BenchmarkResult } from "data/benchmarks/types";
import { calcAppsPassed, calcBestPracticeScore } from "data/ens-best-practices/utils";
import {
  createMockBenchmark,
  mockCoinbaseWalletApp,
  mockMetamaskApp,
  mockRainbowApp,
  mockReverseResolutionBestPractice,
} from "data/shared/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { mockAppBenchmarks } = vi.hoisted(() => ({
  mockAppBenchmarks: {} as AppBenchmarks,
}));

vi.mock("data/benchmarks/index.ts", () => ({
  APP_BENCHMARKS: mockAppBenchmarks,
}));

vi.mock(import("data/benchmarks/utils.ts"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    getAppBenchmarksByBestPractice: (bestPracticeSlug: string) => {
      const benchmarks: (AppBenchmark | undefined)[] = [];

      for (const appBenchmarks of Object.values(mockAppBenchmarks)) {
        benchmarks.push(appBenchmarks[bestPracticeSlug]);
      }

      return benchmarks;
    },
  };
});

describe("BestPractice and BestPracticeCategory Utils", () => {
  beforeEach(() => {
    mockAppBenchmarks[mockCoinbaseWalletApp.appSlug] = {};
    mockAppBenchmarks[mockRainbowApp.appSlug] = {};
    mockAppBenchmarks[mockMetamaskApp.appSlug] = {};
  });
  describe("calcAppsPassed", () => {
    it("Should return the number of apps that passed or partially passed the best practice benchmark", () => {
      mockAppBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Pass,
        ),
      };
      mockAppBenchmarks[mockMetamaskApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.PartialPass,
        ),
      };

      expect(calcAppsPassed(mockReverseResolutionBestPractice)).toEqual(2);
    });

    it("Should exclude all pending benchmarks from the calculation", () => {
      mockAppBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Pass,
        ),
      };
      mockAppBenchmarks[mockMetamaskApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: undefined,
      };

      expect(
        calcAppsPassed(mockReverseResolutionBestPractice),
        "calcAppsPassed doesn't exclude pending benchmarks",
      ).toEqual(1);
    });
  });

  describe("calcBestPracticeScore", () => {
    it("Should return the EnsAwardsScore for benchmarked apps", () => {
      mockAppBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Pass,
        ),
      };
      mockAppBenchmarks[mockMetamaskApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Fail,
        ),
      };

      const result = calcBestPracticeScore(mockReverseResolutionBestPractice);

      expect(result, `Expected score to be 50, got ${result} instead`).toEqual(50);
    });

    it("Should return undefined when no apps are benchmarked for the best practice", () => {
      mockAppBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: undefined,
      };
      mockAppBenchmarks[mockMetamaskApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: undefined,
      };

      const result = calcBestPracticeScore(mockReverseResolutionBestPractice);

      expect(
        result,
        "calcBestPracticeScore should return undefined when no apps are benchmarked",
      ).toBeUndefined();
    });

    it("Should exclude pending benchmarks from the calculation", () => {
      mockAppBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Pass,
        ),
      };
      mockAppBenchmarks[mockMetamaskApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: undefined,
      };

      const result = calcBestPracticeScore(mockReverseResolutionBestPractice);

      expect(result, "calcBestPracticeScore doesn't exclude pending benchmarks").toEqual(100);
    });
  });
});
