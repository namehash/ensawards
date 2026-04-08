import {
  deserializeReferralProgramEditionConfigSetArray,
  REFERRAL_PROGRAM_EDITION_SLUG_PATTERN,
  type ReferralProgramEditionSlug,
} from "@namehash/ens-referrals/v1";
import { type Address, isAddress } from "viem";
import { describe, expect, it } from "vitest";

import { REFERRAL_PROGRAM_WARNINGS } from "@/components/referral-awards-program/referrers/warnings";

const PRODUCTION_EDITIONS_URL = "https://ensawards.org/production-editions.json";

async function fetchProductionEditionSlugs(): Promise<ReferralProgramEditionSlug[] | null> {
  // Intentionally let all errors throw.
  const response = await fetch(PRODUCTION_EDITIONS_URL);

  if (!response.ok) throw new Error("Failed to fetch production edition slugs}");

  return deserializeReferralProgramEditionConfigSetArray(await response.json()).map(
    (editionConfig) => editionConfig.slug,
  );
}

describe("REFERRAL_PROGRAM_WARNINGS", () => {
  const data = REFERRAL_PROGRAM_WARNINGS;

  it("Should have valid referral program edition slugs", () => {
    const editionSlugs: ReferralProgramEditionSlug[] = Array.from(data.keys());
    const productuionEditionSlugs = editionSlugs.length > 0 ? fetchProductionEditionSlugs() : null;

    editionSlugs.forEach((slug) => {
      expect(slug, `edition "${slug}" should match the slug pattern`).toMatch(
        REFERRAL_PROGRAM_EDITION_SLUG_PATTERN,
      );

      expect(
        productuionEditionSlugs,
        `edition "${slug}" should be present in the production editions list`,
      ).resolves.toContain(slug);
    });
  });

  it("Should have valid Ethereum addresses as referrer keys", () => {
    const warnedReferrers: Address[] = Array.from(data.values())
      .map((referrerWarningsMap) => Array.from(referrerWarningsMap.keys()))
      .flat();

    warnedReferrers.forEach((address) => {
      expect(isAddress(address), `Address ${address} is not valid`).toEqual(true);
    });
  });

  it("Should have non-empty warning messages", () => {
    data.forEach((referrerWarningsMap) => {
      referrerWarningsMap.forEach(([address, warning]) => {
        expect(warning.length > 0, `Warning message for address ${address} is empty`).toBe(true);
      });
    });
  });
});
