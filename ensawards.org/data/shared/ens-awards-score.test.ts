import { describe, expect, it } from "vitest";

import { isValidEnsAwardsScore } from "./ens-awards-score.ts";

describe("EnsAwardsScore utils", () => {
  describe("isValidEnsAwardsScore", () => {
    it("should return true for valid EnsAwardsScore", () => {
      // Check values at the ends of the valid range
      expect(isValidEnsAwardsScore(0)).toBe(true);
      expect(isValidEnsAwardsScore(100)).toBe(true);

      // Check the legitimate value inside the range
      expect(isValidEnsAwardsScore(65)).toBe(true);
    });

    it("should return false for invalid EnsAwardsScore", () => {
      // Check values just outside the valid range
      expect(isValidEnsAwardsScore(-1)).toBe(false);
      expect(isValidEnsAwardsScore(101)).toBe(false);

      // Check non-integer values
      expect(isValidEnsAwardsScore(50.005)).toBe(false);

      // Check special numeric values (non-finite, NaN)
      expect(isValidEnsAwardsScore(NaN)).toBe(false);
      expect(isValidEnsAwardsScore(Infinity)).toBe(false);
      expect(isValidEnsAwardsScore(-Infinity)).toBe(false);
      expect(isValidEnsAwardsScore(1 / 0)).toBe(false);
      expect(isValidEnsAwardsScore(0 / 0)).toBe(false);
    });
  });
});
