import { type AppBenchmark, BenchmarkResult } from "data/benchmarks/types.ts";
import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  createMockBenchmark,
  mockCoinbaseWalletApp,
  mockDisplayProfilesBestPractice,
  mockEtherscanApp,
  mockForwardResolutionBestPractice,
  mockMetamaskApp,
  mockNormalizeNamesBestPractice,
  mockRainbowApp,
  mockReverseResolutionBestPractice,
} from "../shared/test-utils.ts";
import { type App, type AppBenchmarks, type AppSlug, AppTypes } from "./types.ts";

const { mockApps, mockEnsAwardsPoints, mockBenchmarks } = vi.hoisted(() => ({
  mockApps: [] as App[],
  mockEnsAwardsPoints: vi.fn(),
  mockBenchmarks: {} as AppBenchmarks,
}));

vi.mock("./index.ts", () => ({
  APPS: mockApps,
}));

vi.mock("data/benchmarks/index.ts", () => ({
  APP_BENCHMARKS: mockBenchmarks,
}));

vi.mock("data/benchmarks/utils.ts", () => ({
  getEnsAwardsPoints: mockEnsAwardsPoints,
  getAppBenchmarks: (slug: AppSlug) => mockBenchmarks[slug],
}));

import {
  appliesToAllApps,
  calcAppScore,
  getAppById,
  getAppByName,
  getAppBySlug,
  getAppTypeBySlug,
} from "./utils.ts";

const setMockApps = (...apps: App[]) => {
  mockApps.splice(0, mockApps.length, ...apps);
};

describe("App utils", () => {
  beforeEach(() => {
    mockApps.splice(0, mockApps.length);
    mockEnsAwardsPoints.mockReset();
    mockEnsAwardsPoints.mockImplementation((benchmark: AppBenchmark) => {
      switch (benchmark.result) {
        case BenchmarkResult.Pass:
          return 1;
        case BenchmarkResult.PartialPass:
          return 0.5;
        case BenchmarkResult.Fail:
        default:
          return 0;
      }
    });
  });

  describe("getAppTypeBySlug", () => {
    it("Should return the app type for a valid slug", () => {
      expect(getAppTypeBySlug("wallet")).toEqual(AppTypes.Wallet);
    });

    it("Should return undefined for an invalid slug", () => {
      expect(getAppTypeBySlug("invalid-type")).toBeUndefined();
    });
  });

  describe("getAppByX", () => {
    beforeEach(() => {
      setMockApps(mockRainbowApp, mockMetamaskApp, mockEtherscanApp);
    });

    describe("getAppBySlug", () => {
      it("Should return the app for a valid slug", () => {
        expect(getAppBySlug("rainbow-wallet")).toEqual(mockRainbowApp);
      });

      it("Should return undefined for an invalid slug", () => {
        expect(getAppBySlug("unknown-app")).toBeUndefined();
      });
    });

    describe("getAppById", () => {
      it("Should return the app for a valid id", () => {
        expect(getAppById("metamask-wallet")).toEqual(mockMetamaskApp);
      });

      it("Should return undefined for an invalid id", () => {
        expect(getAppById("unknown-id")).toBeUndefined();
      });
    });

    describe("getAppByName", () => {
      it("Should return the app for a valid name", () => {
        expect(getAppByName("Etherscan")).toEqual(mockEtherscanApp);
      });

      it("Should return undefined for an invalid name", () => {
        expect(getAppByName("Unknown App")).toBeUndefined();
      });
    });
  });

  describe("calcAppScore", () => {
    beforeEach(() => {
      mockBenchmarks[mockCoinbaseWalletApp.appSlug] = {};
    });

    it("Should return the rounded ENSAwards score for an app with benchmarks", () => {
      mockBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Pass,
        ),
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Pass,
        ),
        [mockForwardResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Fail,
        ),
        [mockNormalizeNamesBestPractice.bestPracticeSlug]: undefined,
      };

      const result = calcAppScore(mockCoinbaseWalletApp);

      expect(result, `Expected ENSAwards score to be 67 got ${result}`).toEqual(67);
    });

    it("Should return undefined when the app has no defined benchmarks", () => {
      mockBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: undefined,
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: undefined,
        [mockForwardResolutionBestPractice.bestPracticeSlug]: undefined,
        [mockNormalizeNamesBestPractice.bestPracticeSlug]: undefined,
      };
      const result = calcAppScore(mockCoinbaseWalletApp);

      expect(result, `Expected ENSAwards score to be undefined got ${result}`).toBeUndefined();
    });

    it("Should throw when the calculated score is greater than 100", () => {
      mockEnsAwardsPoints.mockReturnValue(2);
      mockBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Pass,
        ),
      };

      expect(() => calcAppScore(mockCoinbaseWalletApp)).toThrow(
        "Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was 200 instead",
      );
    });

    it("Should throw when the calculated score is less than 0", () => {
      mockEnsAwardsPoints.mockReturnValue(-1);
      mockBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: createMockBenchmark(
          BenchmarkResult.Pass,
        ),
      };

      expect(() => calcAppScore(mockCoinbaseWalletApp)).toThrow(
        "Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was -100 instead",
      );
    });
  });

  describe("appliesToAllApps", () => {
    it("Should return true when all app types are included in targets", () => {
      expect(appliesToAllApps([AppTypes.Wallet, AppTypes.Explorer])).toEqual(true);
    });

    it("Should return false when not all app types are included in targets", () => {
      expect(appliesToAllApps([AppTypes.Wallet])).toEqual(false);
    });
  });
});
