import { APPS } from "data/apps";
import type { AppBenchmark } from "data/benchmarks/types";
import { ENS_BEST_PRACTICES } from "data/ens-best-practices";
import {
  type BestPracticeApp,
  type BestPracticeSlug,
  BestPracticeTypes,
} from "data/ens-best-practices/types";
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
    it("Should have an explicit entry for all app-related best practices", () => {
      const bestPracticeSlugs = ENS_BEST_PRACTICES.filter(
        (bestPractice): bestPractice is BestPracticeApp =>
          bestPractice.type === BestPracticeTypes.App,
      ).map((bp) => bp.bestPracticeSlug);

      Object.values(data).forEach((appBenchmarks) => {
        bestPracticeSlugs.forEach((slug) => {
          expect(
            appBenchmarks,
            `Missing benchmark entry for best practice slug={${slug}}`,
          ).toHaveProperty(slug);
        });
      });
    });

    it("Should have valid data structure for defined benchmarks", () => {
      Object.entries(data).forEach(([appSlug, appBenchmarks]) => {
        Object.entries(appBenchmarks)
          .filter((entry): entry is [BestPracticeSlug, AppBenchmark] => entry[1] !== undefined)
          .forEach(([bestPracticeSlug, benchmark]) => {
            expect(
              benchmark.result,
              `Benchmark for ${appSlug} on ${bestPracticeSlug} missing result`,
            ).toBeDefined();
            expect(
              benchmark.contributions.length,
              `Benchmark for ${appSlug} on ${bestPracticeSlug} missing contributions`,
            ).toBeGreaterThan(0);

            const contributorsList = benchmark.contributions.map((contribution) =>
              formatAccountId(contribution.from),
            );
            const uniqueContributors = new Set(contributorsList);
            expect(
              uniqueContributors.size,
              `Benchmark for ${appSlug} on ${bestPracticeSlug} has duplicate contributors`,
            ).toEqual(contributorsList.length);
          });
      });
    });
  });
});
