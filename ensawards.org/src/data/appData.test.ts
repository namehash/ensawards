import { APPS } from "@/data/appData.ts";
import { areStringsUnique, isValidSlug } from "@/utils";
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
});
