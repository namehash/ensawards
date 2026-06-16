import { BenchmarkResults } from "data/benchmarks/types.ts";
import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  createMockAcceptanceTestBenchmark,
  createMockBestPractice,
  mockCoinbaseWalletApp,
  mockDisplayProfilesBestPractice,
  mockEtherscanApp,
  mockForwardResolutionBestPractice,
  mockMetamaskApp,
  mockNormalizeNamesBestPractice,
  mockRainbowApp,
  mockReverseResolutionBestPractice,
} from "../shared/test-utils";
import { type App, type AppBenchmarks, type AppSlug, AppTypes } from "./types.ts";

const {
  mockApps,
  mockEnsAwardsPoints,
  mockBenchmarks,
  mockGetAcceptanceTestBenchmarksByApp,
  mockGetBestPracticeBySlug,
} = vi.hoisted(() => ({
  mockApps: [] as App[],
  mockEnsAwardsPoints: vi.fn(),
  mockBenchmarks: {} as AppBenchmarks,
  mockGetAcceptanceTestBenchmarksByApp: vi.fn(),
  mockGetBestPracticeBySlug: vi.fn(),
}));

vi.mock("./index.ts", () => ({
  APPS: mockApps,
}));

vi.mock("data/benchmarks/index.ts", () => ({
  APP_BENCHMARKS: mockBenchmarks,
}));

vi.mock(import("data/benchmarks/utils.ts"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    calcEnsAwardsPoints: mockEnsAwardsPoints,
    getAppBenchmarks: (slug: AppSlug) => mockBenchmarks[slug],
  };
});

vi.mock("data/acceptance-tests/utils.ts", () => ({
  getAcceptanceTestBenchmarksByApp: mockGetAcceptanceTestBenchmarksByApp,
}));

vi.mock(import("data/ens-best-practices/utils.ts"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    getBestPracticeBySlug: mockGetBestPracticeBySlug,
  };
});

import { mock } from "node:test";

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types.ts";
import type { BestPracticeSlug } from "data/ens-best-practices/types.ts";

import {
  appliesToAllApps,
  asAppType,
  calcAppScore,
  getAppById,
  getAppByName,
  getAppBySlug,
  sortApps,
} from "./utils.ts";

const setMockApps = (...apps: App[]) => {
  mockApps.splice(0, mockApps.length, ...apps);
};

describe("App utils", () => {
  const mockBestPractice1 = createMockBestPractice({
    id: "mock-bp-1",
    name: "Mock Best Practice 1",
    bestPracticeSlug: "mock-best-practice-1",
    categoryId: "mock-category-1",
    categoryName: "Mock Category 1",
    categorySlug: "mock-category-1",
  });
  const mockNotApplicableBenchmarkResult = createMockAcceptanceTestBenchmark(
    BenchmarkResults.NotApplicable,
  );

  beforeEach(() => {
    mockApps.splice(0, mockApps.length);
    mockEnsAwardsPoints.mockReset();
    mockEnsAwardsPoints.mockImplementation((benchmark: AcceptanceTestBenchmark) => {
      switch (benchmark.result) {
        case BenchmarkResults.Pass:
          return 1;
        case BenchmarkResults.PartialPass:
          return 0.5;
        case BenchmarkResults.Fail:
        default:
          return 0;
      }
    });

    mockGetAcceptanceTestBenchmarksByApp.mockReset();
    mockGetAcceptanceTestBenchmarksByApp.mockImplementation((appSlug: AppSlug) => {
      switch (appSlug) {
        case mockCoinbaseWalletApp.appSlug:
          return Object.values(mockBenchmarks[mockCoinbaseWalletApp.appSlug]).flatMap(
            (bestPracticeBenchmarks) => Object.values(bestPracticeBenchmarks),
          );
        case mockRainbowApp.appSlug:
          return Object.values(mockBenchmarks[mockRainbowApp.appSlug]).flatMap(
            (bestPracticeBenchmarks) => Object.values(bestPracticeBenchmarks),
          );
        case mockMetamaskApp.appSlug:
          return Object.values(mockBenchmarks[mockMetamaskApp.appSlug]).flatMap(
            (bestPracticeBenchmarks) => Object.values(bestPracticeBenchmarks),
          );

        case mockEtherscanApp.appSlug:
          return Object.values(mockBenchmarks[mockEtherscanApp.appSlug]).flatMap(
            (bestPracticeBenchmarks) => Object.values(bestPracticeBenchmarks),
          );

        default:
          throw new Error(`No benchmarks defined for app with slug ${appSlug}`);
      }
    });

    mockGetBestPracticeBySlug.mockReset();
    mockGetBestPracticeBySlug.mockImplementation((bestPracticeSlug: BestPracticeSlug) => {
      switch (bestPracticeSlug) {
        case mockReverseResolutionBestPractice.bestPracticeSlug:
          return mockReverseResolutionBestPractice;

        case mockDisplayProfilesBestPractice.bestPracticeSlug:
          return mockDisplayProfilesBestPractice;

        case mockForwardResolutionBestPractice.bestPracticeSlug:
          return mockForwardResolutionBestPractice;

        case mockNormalizeNamesBestPractice.bestPracticeSlug:
          return mockNormalizeNamesBestPractice;

        case mockBestPractice1.bestPracticeSlug:
          return mockBestPractice1;

        default:
          throw new Error(`No best practice defined for slug ${bestPracticeSlug}`);
      }
    });
  });

  describe("validateAppType", () => {
    it("Should return the app type for a valid AppType value", () => {
      expect(asAppType("wallet")).toEqual(AppTypes.Wallet);
      expect(asAppType("explorer")).toEqual(AppTypes.Explorer);
      expect(asAppType("defi-app")).toEqual(AppTypes.DeFi);
      expect(asAppType("exchange")).toEqual(AppTypes.Exchange);
    });

    it("Should throw an error for an invalid AppType value", () => {
      expect(() => asAppType("invalid-type")).toThrow("Invalid AppType value: invalid-type");
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
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        },
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        },
        [mockForwardResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        },
        [mockNormalizeNamesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: undefined,
        },
        [mockBestPractice1.bestPracticeSlug]: {
          mockAcceptanceTestSlug5: mockNotApplicableBenchmarkResult,
        },
      };

      const result = calcAppScore(mockCoinbaseWalletApp).score;

      expect(result, `Expected ENSAwards score to be 67 got ${result}`).toEqual(67);
    });

    it("Should return undefined when the app has no defined benchmarks or all benchmark results are `NotApplicable`", () => {
      mockBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: undefined,
        },
        [mockForwardResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: undefined,
        },
        [mockNormalizeNamesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: mockNotApplicableBenchmarkResult,
        },
      };
      const resultMixed = calcAppScore(mockCoinbaseWalletApp);

      expect(
        resultMixed.score,
        `Expected ENSAwards score to be undefined got ${resultMixed}`,
      ).toBeUndefined();

      mockBenchmarks[mockRainbowApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: undefined,
        },
        [mockForwardResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: undefined,
        },
        [mockNormalizeNamesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: undefined,
        },
      };
      const resultAllUndefined = calcAppScore(mockRainbowApp);

      expect(
        resultAllUndefined.score,
        `Expected ENSAwards score to be undefined got ${resultAllUndefined.score}`,
      ).toBeUndefined();
    });

    it("Should throw when the calculated score is greater than 100", () => {
      mockEnsAwardsPoints.mockReturnValue(2);
      mockBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        },
      };

      expect(() => calcAppScore(mockCoinbaseWalletApp)).toThrow(
        "Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was 200 instead",
      );
    });

    it("Should throw when the calculated score is less than 0", () => {
      mockEnsAwardsPoints.mockReturnValue(-1);
      mockBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        },
      };

      expect(() => calcAppScore(mockCoinbaseWalletApp)).toThrow(
        "Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was -100 instead",
      );
    });
  });

  describe("appliesToAllApps", () => {
    it("Should return true when all app types are included in targets", () => {
      expect(
        appliesToAllApps([AppTypes.Wallet, AppTypes.Explorer, AppTypes.DeFi, AppTypes.Exchange]),
      ).toEqual(true);
    });

    it("Should return false when not all app types are included in targets", () => {
      expect(appliesToAllApps([AppTypes.Wallet])).toEqual(false);
    });
  });

  describe("sortApps", () => {
    it("Should sort apps in descending order of their scores", () => {
      mockBenchmarks[mockCoinbaseWalletApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        },
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        },
        [mockForwardResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        },
        [mockNormalizeNamesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: undefined,
        },
        [mockBestPractice1.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: mockNotApplicableBenchmarkResult,
        },
      };

      mockBenchmarks[mockRainbowApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        },
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        },
        [mockForwardResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        },
        [mockNormalizeNamesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: mockNotApplicableBenchmarkResult,
        },
        [mockBestPractice1.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: undefined,
        },
      };

      mockBenchmarks[mockMetamaskApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: undefined,
        },
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: undefined,
        },
        [mockForwardResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: undefined,
        },
        [mockBestPractice1.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: undefined,
        },
        [mockNormalizeNamesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: undefined,
        },
      };

      mockBenchmarks[mockEtherscanApp.appSlug] = {
        [mockReverseResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug1: mockNotApplicableBenchmarkResult,
        },
        [mockDisplayProfilesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug2: mockNotApplicableBenchmarkResult,
        },
        [mockForwardResolutionBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug3: mockNotApplicableBenchmarkResult,
        },
        [mockBestPractice1.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: mockNotApplicableBenchmarkResult,
        },
        [mockNormalizeNamesBestPractice.bestPracticeSlug]: {
          mockAcceptanceTestSlug4: mockNotApplicableBenchmarkResult,
        },
      };

      const apps = [mockMetamaskApp, mockRainbowApp, mockCoinbaseWalletApp, mockEtherscanApp];
      const expectedOrder = [
        mockCoinbaseWalletApp,
        mockRainbowApp,
        mockEtherscanApp,
        mockMetamaskApp,
      ];
      const sortedApps = apps.sort(sortApps);

      sortedApps.forEach((app, index) => {
        expect(
          app,
          `Expected app at index ${index} to be ${expectedOrder[index].name}, got ${app.name} instead`,
        ).toEqual(expectedOrder[index]);
      });
    });
  });
});
