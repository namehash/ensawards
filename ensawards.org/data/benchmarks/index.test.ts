import { APPS } from "data/apps";
import type { AppBenchmark } from "data/benchmarks/types";
import { ENS_BEST_PRACTICES } from "data/ens-best-practices";
import {
  type BestPracticeApp,
  type BestPracticeSlug,
  BestPracticeTypes,
} from "data/ens-best-practices/types";
import { describe, expect, it } from "vitest";

import { BENCHMARKS } from ".";

describe("Benchmarks registry", () => {
  const data = BENCHMARKS;

  describe("BENCHMARKS", () => {
    it("Should have an explicit key for all apps", () => {
      const registryKeys = Object.keys(data);
      const appSlugs = APPS.map((app) => app.appSlug);

      appSlugs.forEach((slug) => {
        expect(registryKeys, `Missing benchmark key for app slug={${slug}}`).toContain(slug);
      });
    });
  });

  describe("All BestPracticeBenchmarks in BENCHMARKS", () => {
    it("Should have an explicit key for all app-related best practices", () => {
      const bestPracticeSlugs = ENS_BEST_PRACTICES.filter(
        (bestPractice): bestPractice is BestPracticeApp =>
          bestPractice.type === BestPracticeTypes.App,
      ).map((bp) => bp.bestPracticeSlug);

      Object.values(data).forEach((appBenchmarks) => {
        bestPracticeSlugs.forEach((slug) => {
          expect(
            appBenchmarks,
            `Missing benchmark for best practice slug={${slug}}`,
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

            const contributorsList = benchmark.contributions.map(
              (contribution) => contribution.from,
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
