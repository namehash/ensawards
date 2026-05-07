import type { AcceptanceTestBenchmark, AcceptanceTestSlug } from "data/acceptance-tests/types";
import { APPS } from "data/apps";
import { type AppSlug } from "data/apps/types";
import { getAppBySlug } from "data/apps/utils";
import { ENS_BEST_PRACTICES } from "data/ens-best-practices";
import { type BestPracticeSlug, BestPracticeTypes } from "data/ens-best-practices/types";
import { describe, expect, it } from "vitest";

import { formatAccountId } from "@ensnode/ensnode-sdk";

import { APP_BENCHMARKS } from ".";

describe("Benchmarks registry", () => {
  const data = APP_BENCHMARKS;

  describe("APP_BENCHMARKS", () => {
    it("Should have an explicit entry for all apps", () => {
      const registryKeys = Object.keys(data);
      const appSlugs = APPS.map((app) => app.appSlug);

      appSlugs.forEach((slug) => {
        expect(registryKeys, `Missing benchmark entry for app slug={${slug}}`).toContain(slug);
      });
    });
  });

  describe("All BestPracticeBenchmarks in APP_BENCHMARKS", () => {
    const getApplicableBestPracticesSlugsForApp = (appSlug: AppSlug): BestPracticeSlug[] => {
      const app = getAppBySlug(appSlug);

      if (app === undefined) {
        throw new Error(`Invariant(AppSlug): App with slug={${appSlug}} is not defined`);
      }

      const applicableBestPracticesSlugs = ENS_BEST_PRACTICES.filter((bestPractice) => {
        if (bestPractice.type !== BestPracticeTypes.App) {
          return false;
        }

        return bestPractice.appliesTo.includes(app.type);
      }).map((bp) => bp.bestPracticeSlug);

      return applicableBestPracticesSlugs;
    };

    it("Should have an explicit entry for all applicable best practices", () => {
      Object.entries(data).forEach(([appSlug, appBenchmarks]) => {
        getApplicableBestPracticesSlugsForApp(appSlug).forEach((slug) => {
          expect(
            appBenchmarks,
            `Missing benchmark entry for best practice slug={${slug}} for app slug={${appSlug}}`,
          ).toHaveProperty(slug);
        });
      });
    });

    it("Shouldn't have benchmark entries for non-applicable best practices", () => {
      Object.entries(data).forEach(([appSlug, appBenchmarks]) => {
        const applicableBestPracticesSlugs = getApplicableBestPracticesSlugsForApp(appSlug);

        Object.keys(appBenchmarks).forEach((bestPracticeSlug) => {
          expect(
            applicableBestPracticesSlugs,
            `Benchmark entry for best practice slug={${bestPracticeSlug}} exists for app slug={${appSlug}} but is not applicable for that app`,
          ).toContain(bestPracticeSlug);
        });
      });
    });
  });

  describe("All AcceptanceTestBenchmarks entries in all BestPracticeBenchmarks", () => {
    it("Should have an explicit entry for all acceptance tests defined for a given best practice", () => {
      const acceptanceTestSlugsByBestPractice: Map<BestPracticeSlug, AcceptanceTestSlug[]> =
        new Map();

      ENS_BEST_PRACTICES.forEach((bestPractice) => {
        const acceptanceTestSlugs = bestPractice.technicalDetails.acceptanceTests.map(
          (acceptanceTest) => acceptanceTest.acceptanceTestSlug,
        );
        acceptanceTestSlugsByBestPractice.set(bestPractice.bestPracticeSlug, acceptanceTestSlugs);
      });

      Object.entries(data).forEach(([appSlug, appBenchmarks]) => {
        Object.entries(appBenchmarks).forEach(([bestPracticeSlug, appBenchmark]) => {
          const acceptanceTestSlugs = Object.keys(appBenchmark);

          expect(
            acceptanceTestSlugs,
            `Missing acceptance test entries for best practice slug={${bestPracticeSlug}}`,
          ).toEqual(acceptanceTestSlugsByBestPractice.get(bestPracticeSlug));
        });
      });
    });

    it("Should have valid data structure for defined benchmarks", () => {
      Object.entries(data).forEach(([appSlug, appBenchmarks]) => {
        Object.entries(appBenchmarks).forEach(([bestPracticeSlug, appBenchmark]) => {
          Object.entries(appBenchmark)
            .filter(
              (entry): entry is [AcceptanceTestSlug, AcceptanceTestBenchmark] =>
                entry[1] !== undefined,
            )
            .forEach(([acceptanceTestSlug, benchmark]) => {
              expect(
                benchmark.result,
                `Benchmark for ${appSlug} on ${bestPracticeSlug} | ${acceptanceTestSlug} missing result`,
              ).toBeDefined();
              expect(
                benchmark.contributions.length,
                `Benchmark for ${appSlug} on ${bestPracticeSlug} | ${acceptanceTestSlug} missing contributions`,
              ).toBeGreaterThan(0);

              const contributorsList = benchmark.contributions.map((contribution) =>
                formatAccountId(contribution.from),
              );
              const uniqueContributors = new Set(contributorsList);
              expect(
                uniqueContributors.size,
                `Benchmark for ${appSlug} on ${bestPracticeSlug} | ${acceptanceTestSlug} has duplicate contributors`,
              ).toEqual(contributorsList.length);

              expect(
                benchmark.notes,
                `Benchmark for ${appSlug} on ${bestPracticeSlug} | ${acceptanceTestSlug} missing notes`,
              ).toBeDefined();
            });
        });
      });
    });
  });
});
