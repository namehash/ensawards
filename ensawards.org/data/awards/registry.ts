import type { Award } from "data/awards/types.ts";
import type { IncentiveProgram, IncentiveProgramAwards } from "data/incentive-programs/types";

const awardsRegistry: IncentiveProgramAwards = new Map();

export function defineAwards(incentiveProgram: IncentiveProgram, awards: Award[]): void {
  // For now, allow overwriting awards on call, might change
  awardsRegistry.set(incentiveProgram.incentiveProgramSlug, awards);
}

export const getAwards = () => awardsRegistry;
