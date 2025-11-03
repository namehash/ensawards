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

  it("In `socials`, `ens`, if defined, must be a non-empty normalized ENS name", () => {
    data.forEach((app) => {
      if (app.socials.ens !== undefined) {
        expect(
          app.socials.ens.length > 0 &&
            isNormalizedName(app.socials.ens),
          `Name={${app.socials.ens}} is empty or is not ENS normalized`,
        ).toEqual(true);
      }
    });
  });
});
