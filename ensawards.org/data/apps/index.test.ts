import { describe, expect, it } from "vitest";

import { isNormalizedName } from "@ensnode/ensnode-sdk";

import { areStringsUnique, isValidSlug } from "@/utils";

import { ENS_BEST_PRACTICES } from "../ens-best-practices";
import { BestPracticeTypes } from "../ens-best-practices/types";
import { APPS } from ".";
import { BenchmarkStatuses } from "./benchmarks-types";

describe("App data", () => {
  const data = APPS;

  it("Should have valid and unique slugs", () => {
    const slugArray: string[] = [];

    data.forEach((app) => {
      expect(isValidSlug(app.appSlug), `Slug={${app.appSlug}} is not valid`).toEqual(true);

      slugArray.push(app.appSlug);
    });

    expect(areStringsUnique(slugArray), `Slugs for Apps are not unique`).toEqual(true);
  });

  it("Should have valid and unique ids", () => {
    const idArray: string[] = [];

    data.forEach((app) => {
      expect(app.id.length > 0, `ID={${app.id}} is empty`).toEqual(true);
      idArray.push(app.id);
    });

    expect(areStringsUnique(idArray), `IDs for Apps are not unique`).toEqual(true);
  });

  it("Should have non-empty names", () => {
    data.forEach((app) => {
      expect(app.name.length > 0, `Name for app with id={${app.id}} is empty`).toEqual(true);
    });
  });

  it("Should have non-empty descriptions", () => {
    data.forEach((app) => {
      expect(
        app.description.length > 0,
        `Description for app with id={${app.id}} is empty`,
      ).toEqual(true);
    });
  });

  it("Should have valid AppType", () => {
    data.forEach((app) => {
      expect(
        typeof app.type === "string" && app.type.length > 0,
        `Type for app with id={${app.id}} is invalid`,
      ).toEqual(true);
    });
  });

  it("Should have valid socials with URLs", () => {
    data.forEach((app) => {
      expect(
        app.socials.website instanceof URL,
        `Website for app with id={${app.id}} is not a valid URL`,
      ).toEqual(true);
      expect(
        app.socials.twitter instanceof URL,
        `Twitter for app with id={${app.id}} is not a valid URL`,
      ).toEqual(true);
    });
  });

  it("In `socials`, `ens`, if defined, must be a non-empty normalized ENS name", () => {
    data.forEach((app) => {
      if (app.socials.ens !== undefined) {
        expect(
          app.socials.ens.length > 0 && isNormalizedName(app.socials.ens),
          `Name={${app.socials.ens}} is empty or is not ENS normalized`,
        ).toEqual(true);
      }
    });
  });

  it("Should have benchmarks array", () => {
    data.forEach((app) => {
      expect(
        Array.isArray(app.benchmarks),
        `Benchmarks for app with id={${app.id}} is not an array`,
      ).toEqual(true);
    });
  });

  it("Should have an effective benchmark defined for all best practices that apply to apps", () => {
    data.forEach((app) => {
      const bestPracticeData = ENS_BEST_PRACTICES.filter(
        (bestPractice) =>
          bestPractice.type === BestPracticeTypes.App && bestPractice.appliesTo.includes(app.type),
      );
      bestPracticeData.forEach((bestPractice) => {
        const foundBenchmark = app.benchmarks.find(
          (benchmark) => benchmark.bestPractice.id === bestPractice.id,
        );

        expect(
          foundBenchmark,
          `App ${app.name} has no benchmark for "${bestPractice.name}" best practice`,
        ).toBeDefined();
      });
    });
  });

  it("Should have valid benchmark data structure for completed benchmarks", () => {
    data.forEach((app) => {
      app.benchmarks
        .filter((benchmark) => benchmark.status === BenchmarkStatuses.Completed)
        .forEach((benchmark, index) => {
          expect(
            benchmark.bestPractice,
            `Benchmark ${index} for app ${app.id} missing bestPractice`,
          ).toBeDefined();
          expect(
            benchmark.result,
            `Benchmark ${index} for app ${app.id} missing result`,
          ).toBeDefined();
          expect(
            benchmark.lastUpdated,
            `Benchmark ${index} for app ${app.id} missing lastUpdated`,
          ).toBeDefined();
          expect(
            typeof benchmark.lastUpdated === "number",
            `Benchmark ${index} for app ${app.id} lastUpdated should be a number`,
          ).toEqual(true);
          expect(
            benchmark.contributions,
            `Benchmark ${index} for app ${app.id} missing contributions`,
          ).toBeDefined();
        });
    });
  });
});
