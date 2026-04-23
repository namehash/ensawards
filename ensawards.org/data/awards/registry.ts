import type { Award } from "data/awards/types.ts";
import type { IncentiveProgramSlug } from "data/incentive-programs/types";

const awardsRegistry: Map<IncentiveProgramSlug, Set<Award>> = new Map();

export function defineAwards(awards: Award[]): void {
  awards.forEach((award) => {
    const awardsForIncentiveProgram =
      awardsRegistry.get(award.associatedIncentiveProgramSlug) || new Set();
    awardsForIncentiveProgram.add(award);
    awardsRegistry.set(award.associatedIncentiveProgramSlug, awardsForIncentiveProgram);
  });
}

export const getAwards = (): Award[] =>
  [...awardsRegistry.values()].flatMap((awards) => [...awards]);
