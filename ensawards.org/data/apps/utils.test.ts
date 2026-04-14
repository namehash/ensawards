import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  type AppBenchmarkCompleted,
  type AppBenchmarkPending,
  BenchmarkResult,
  BenchmarkStatuses,
} from "./benchmarks-types.ts";
import { createMockApp, createMockBenchmark, createMockBestPractice } from "./test-utils.ts";
import { type App, AppTypes } from "./types.ts";

const { mockApps, mockgetBenchmarkPoints } = vi.hoisted(() => ({
  mockApps: [] as App[],
  mockgetBenchmarkPoints: vi.fn(),
}));

vi.mock("./index.ts", () => ({
  APPS: mockApps,
}));

vi.mock("./benchmarks-utils.ts", () => ({
  getBenchmarkPoints: mockgetBenchmarkPoints,
}));

import {
  appliesToAllApps,
  calcAppEnsAwardsScore,
  calcAppsPassed,
  calcBestPracticeEnsAwardsScore,
  getAppById,
  getAppByName,
  getAppBySlug,
  getAppTypeBySlug,
} from "./utils.ts";

const setMockApps = (...apps: App[]) => {
  mockApps.splice(0, mockApps.length, ...apps);
};

const mockReverseResolutionBestPractice = createMockBestPractice({
  id: "set-primary-name",
  name: "Set primary name",
  bestPracticeSlug: "set-primary-name",
  categoryId: "reverse-resolution",
  categoryName: "Reverse resolution",
  categorySlug: "reverse-resolution",
});

const mockDisplayProfilesBestPractice = createMockBestPractice({
  id: "display-avatar",
  name: "Display avatar",
  bestPracticeSlug: "display-avatar",
  categoryId: "display-profiles",
  categoryName: "Display profiles",
  categorySlug: "display-profiles",
});

const mockRainbowApp = createMockApp({
  id: "rainbow-wallet",
  appSlug: "rainbow-wallet",
  name: "Rainbow",
  type: AppTypes.Wallet,
});

const mockMetamaskApp = createMockApp({
  id: "metamask-wallet",
  appSlug: "metamask-wallet",
  name: "MetaMask",
  type: AppTypes.Wallet,
});

const mockEtherscanApp = createMockApp({
  id: "etherscan-explorer",
  appSlug: "etherscan-explorer",
  name: "Etherscan",
  type: AppTypes.Explorer,
});

const mockCoinbaseWalletApp = createMockApp({
  id: "coinbase-wallet",
  appSlug: "coinbase-wallet",
  name: "Coinbase Wallet",
  type: AppTypes.Wallet,
});

const mockAppsForBenchmarkAggregation = [
  {
    ...mockRainbowApp,
    benchmarks: [createMockBenchmark(mockReverseResolutionBestPractice, BenchmarkResult.Pass)],
  },
  {
    ...mockMetamaskApp,
    benchmarks: [
      createMockBenchmark(mockReverseResolutionBestPractice, BenchmarkResult.PartialPass),
      {
        bestPractice: mockDisplayProfilesBestPractice,
        status: BenchmarkStatuses.Pending,
      } as AppBenchmarkPending,
    ],
  },
  {
    ...mockCoinbaseWalletApp,
    benchmarks: [createMockBenchmark(mockReverseResolutionBestPractice, BenchmarkResult.Fail)],
  },
  {
    ...mockEtherscanApp,
    benchmarks: [createMockBenchmark(mockDisplayProfilesBestPractice, BenchmarkResult.Pass)],
  },
];

const mockAppWithPassingAndPartialBenchmarks = {
  ...mockRainbowApp,
  benchmarks: [
    createMockBenchmark(mockReverseResolutionBestPractice, BenchmarkResult.Pass),
    createMockBenchmark(mockDisplayProfilesBestPractice, BenchmarkResult.PartialPass),
  ],
};

const mockAppWithSinglePassingBenchmark = {
  ...mockRainbowApp,
  benchmarks: [createMockBenchmark(mockReverseResolutionBestPractice, BenchmarkResult.Pass)],
};

describe("App utils", () => {
  beforeEach(() => {
    mockApps.splice(0, mockApps.length);
    mockgetBenchmarkPoints.mockReset();
    mockgetBenchmarkPoints.mockImplementation((benchmark: AppBenchmarkCompleted) => {
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

  describe("calcAppsPassed", () => {
    beforeEach(() => {
      setMockApps(...mockAppsForBenchmarkAggregation);
    });

    it("Should return the number of apps that passed or partially passed the best practice benchmark", () => {
      expect(calcAppsPassed(mockReverseResolutionBestPractice)).toEqual(2);
    });

    it("Should exclude all pending benchmarks from the calculation", () => {
      expect(
        calcAppsPassed(mockDisplayProfilesBestPractice),
        "calcAppsPassed doesn't exclude pending benchmarks",
      ).toEqual(1);
    });
  });

  describe("calcBestPracticeEnsAwardsScore", () => {
    beforeEach(() => {
      setMockApps(...mockAppsForBenchmarkAggregation);
    });

    it("Should return the support percentage for benchmarked apps", () => {
      expect(calcBestPracticeEnsAwardsScore(mockReverseResolutionBestPractice)).toEqual(50);
    });

    it("Should return undefined when no apps are benchmarked for the best practice", () => {
      setMockApps(mockRainbowApp);

      expect(calcBestPracticeEnsAwardsScore(mockReverseResolutionBestPractice)).toBeUndefined();
    });

    it("Should exclude pending benchmarks from the calculation", () => {
      expect(
        calcBestPracticeEnsAwardsScore(mockDisplayProfilesBestPractice),
        "calcBestPracticeEnsAwardsScore doesn't exclude pending benchmarks",
      ).toEqual(100);
    });
  });

  describe("calcAppEnsAwardsScore", () => {
    it("Should return the rounded ENSAwards score for an app with benchmarks", () => {
      expect(calcAppEnsAwardsScore(mockAppWithPassingAndPartialBenchmarks)).toEqual(75);
    });

    it("Should return undefined when the app has no benchmarks", () => {
      expect(calcAppEnsAwardsScore(mockRainbowApp)).toBeUndefined();
    });

    it("Should throw when the calculated score is greater than 100", () => {
      mockgetBenchmarkPoints.mockReturnValue(2);

      expect(() => calcAppEnsAwardsScore(mockAppWithSinglePassingBenchmark)).toThrow(
        "Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was 200 instead",
      );
    });

    it("Should throw when the calculated score is less than 0", () => {
      mockgetBenchmarkPoints.mockReturnValue(-1);

      expect(() => calcAppEnsAwardsScore(mockAppWithSinglePassingBenchmark)).toThrow(
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
