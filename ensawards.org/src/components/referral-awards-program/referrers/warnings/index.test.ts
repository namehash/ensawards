import {
  REFERRAL_PROGRAM_EDITION_SLUG_PATTERN,
  type ReferralProgramEditionSlug,
} from "@namehash/ens-referrals";
import type { Address } from "enssdk";
import productionEditions from "public/production-editions.json";
import { isAddress } from "viem";
import { describe, expect, it } from "vitest";

import { REFERRAL_PROGRAM_WARNINGS } from "@/components/referral-awards-program/referrers/warnings";

describe("REFERRAL_PROGRAM_WARNINGS", () => {
  const data = REFERRAL_PROGRAM_WARNINGS;

  it("Should have recognized referral program edition slugs", () => {
    const editionSlugs: ReferralProgramEditionSlug[] = Array.from(data.keys());
    const productionEditionSlugs =
      editionSlugs.length > 0 ? productionEditions.map((edition) => edition.slug) : null;

    editionSlugs.forEach((slug) => {
      expect(slug, `edition "${slug}" should match the slug pattern`).toMatch(
        REFERRAL_PROGRAM_EDITION_SLUG_PATTERN,
      );

      expect(
        productionEditionSlugs,
        `edition "${slug}" should be present in the production editions list`,
      ).toContain(slug);
    });
  });

  it("Should have valid, fully lowercase Ethereum addresses as referrer keys", () => {
    const warnedReferrers: Address[] = Array.from(data.values())
      .map((referrerWarningsMap) => Array.from(referrerWarningsMap.keys()))
      .flat();

    warnedReferrers.forEach((address) => {
      expect(isAddress(address), `Address ${address} is not valid`).toEqual(true);
      expect(address, `Address ${address} is not fully lowercase`).toBe(address.toLowerCase());
    });
  });

  it("Should have non-empty warning messages", () => {
    data.forEach((referrerWarningsMap) => {
      referrerWarningsMap.forEach((warning, address) => {
        expect(warning.trim().length > 0, `Warning message for address ${address} is empty`).toBe(
          true,
        );
      });
    });
  });
});
