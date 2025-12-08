import { APPS } from "@/data/apps.ts";
import { areStringsUnique, isValidSlug } from "@/utils";
import { isNormalizedName } from "@ensnode/ensnode-sdk";
import { describe, expect, it } from "vitest";

describe("App data", () => {
  const data = APPS;

  it("Should have valid and unique slugs", () => {
    const slugArray: string[] = [];

    data.forEach((app) => {
      expect(isValidSlug(app.slug), `Slug={${app.slug}} is not valid`).toEqual(true);

      slugArray.push(app.slug);
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

  it("Should have non-empty iconPath", () => {
    data.forEach((app) => {
      expect(app.iconPath.length > 0, `IconPath for app with id={${app.id}} is empty`).toEqual(
        true,
      );
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

  it("Should have valid benchmark data structure", () => {
    data.forEach((app) => {
      app.benchmarks.forEach((benchmark, index) => {
        expect(
          benchmark.bestPracticeDetails,
          `Benchmark ${index} for app ${app.id} missing bestPracticeDetails`,
        ).toBeDefined();
        expect(
          benchmark.result,
          `Benchmark ${index} for app ${app.id} missing result`,
        ).toBeDefined();
        expect(
          benchmark.benchmarkedBy,
          `Benchmark ${index} for app ${app.id} missing benchmarkedBy`,
        ).toBeDefined();
        expect(
          benchmark.benchmardAt,
          `Benchmark ${index} for app ${app.id} missing benchmardAt`,
        ).toBeDefined();
        expect(
          typeof benchmark.benchmardAt === "number",
          `Benchmark ${index} for app ${app.id} benchmardAt should be a number`,
        ).toEqual(true);
      });
    });
  });
});
