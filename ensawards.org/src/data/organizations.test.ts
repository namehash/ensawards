import { ORGANIZATIONS } from "@/data/organizations.ts";
import { OrgIds } from "@/types/organizations.ts";
import { areStringsUnique, isValidSlug } from "@/utils";
import { isNormalizedName } from "@ensnode/ensnode-sdk";
import { describe, expect, it } from "vitest";

describe("organizations data", () => {
  const data = ORGANIZATIONS;
  it("Should have exactly one organization per OrgId", () => {
    const expectedLengthOfFoundOrganizations = 1;

    Object.values(OrgIds).forEach((orgId) => {
      const foundOrganizations = data.filter((org) => org.id === orgId);

      expect(foundOrganizations.length).toEqual(expectedLengthOfFoundOrganizations);
      expect(foundOrganizations[0].id).toEqual(orgId);
    });
  });

  it("Should have valid and unique slugs", () => {
    const slugArray: string[] = [];

    data.forEach((org) => {
      expect(isValidSlug(org.slug), `Slug={${org.slug}} is not valid`).toEqual(true);

      slugArray.push(org.slug);
    });

    expect(areStringsUnique(slugArray), `Slugs for organizations are not unique`).toEqual(true);
  });

  it("In `socialLinks`, `associatedENSName`, if defined, must be a non-empty normalized ENS name", () => {
    data.forEach((org) => {
      if (org.socialLinks.associatedENSName !== undefined) {
        expect(
          org.socialLinks.associatedENSName.length > 0 &&
            isNormalizedName(org.socialLinks.associatedENSName),
          `Name={${org.socialLinks.associatedENSName}} is empty or is not ENS normalized`,
        ).toEqual(true);
      }
    });
  });
});
