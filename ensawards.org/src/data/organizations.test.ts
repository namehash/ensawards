import { describe, expect, it } from "vitest";
import {ORGANIZATIONS} from "@/data/organizations.ts";
import {OrgIds} from "@/types/organizations.ts";
import {areStringsUnique, isValidSlug} from "@/utils";

describe("organizations data", () => {
    const data = ORGANIZATIONS;
    it("Should have exactly one organization per OrgId", () => {
        const expectedLengthOfFoundOrganizations = 1;

        Object.values(OrgIds).forEach((orgId) => {
            const foundOrganizations = data.filter((org) => org.id === orgId);

            expect(foundOrganizations.length).toEqual(expectedLengthOfFoundOrganizations);
            expect(foundOrganizations[0].id).toEqual(orgId);
        })
    });

    it("Should have valid and unique slugs", () => {
        const slugArray: string[] = [];

        data.forEach((org) => {
            expect(isValidSlug(org.slug), `Slug={${org.slug}} is not valid`).toEqual(true);

            slugArray.push(org.slug);
        })

        expect(areStringsUnique(slugArray), `Slugs for organizations are not unique`).toEqual(true);
    });
});