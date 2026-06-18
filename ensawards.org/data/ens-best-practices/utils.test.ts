import { type AppBenchmarks } from "data/apps/types";
import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types";
import { calcBestPracticeScore } from "data/ens-best-practices/utils";
import {
  createMockAcceptanceTestBenchmark,
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
    getAcceptanceTestBenchmarksByBestPractice: (bestPracticeSlug: string) => {
      const benchmarks: AcceptanceTestBenchmarks[] = [];

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

  describe("calcBestPracticeScore", () => {
    it("Should return the EnsAwardsScore for benchmarked apps", () => {
      mockAppBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        },
      };

      mockAppBenchmarks[mockRainbowApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(BenchmarkResults.PartialPass),
        },
      };
      mockAppBenchmarks[mockMetamaskApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        },
      };

      const result = calcBestPracticeScore(mockReverseResolutionBestPractice);

      expect(result.score, `Expected score to be 50, got ${result.score} instead`).toEqual(50);
    });

    it("Should return undefined score when no apps are benchmarked for the best practice or all defined benchmarks returned a not applicable result", () => {
      mockAppBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
      };

      mockAppBenchmarks[mockRainbowApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
      };

      mockAppBenchmarks[mockMetamaskApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(
            BenchmarkResults.NotApplicable,
          ),
        },
      };

      const result = calcBestPracticeScore(mockReverseResolutionBestPractice);

      expect(
        result.score,
        "calcBestPracticeScore should return undefined when no apps are benchmarked or all defined benchmarks returned a not applicable result",
      ).toBeUndefined();
    });

    it("Should exclude pending & not applicable benchmarks from the calculation", () => {
      mockAppBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        },
      };
      mockAppBenchmarks[mockRainbowApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
      };

      mockAppBenchmarks[mockMetamaskApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(
            BenchmarkResults.NotApplicable,
          ),
        },
      };

      const result = calcBestPracticeScore(mockReverseResolutionBestPractice);

      expect(
        result.score,
        "calcBestPracticeScore doesn't exclude pending & not applicable benchmarks",
      ).toEqual(100);
    });
  });
});
