import { isValidSlug } from "data/shared/slugs";
import { isInterpretedName } from "enssdk";
import { describe, expect, it } from "vitest";

import { areStringsUnique } from "@/utils";

import { APPS } from ".";

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

  it("In `socials`, `ens`, if defined, must be a non-empty interpreted ENS name", () => {
    data.forEach((app) => {
      if (app.socials.ens !== undefined) {
        expect(
          app.socials.ens.length > 0 && isInterpretedName(app.socials.ens),
          `Name={${app.socials.ens}} is empty or is not a valid ENS interpreted name`,
        ).toEqual(true);
      }
    });
  });
});
