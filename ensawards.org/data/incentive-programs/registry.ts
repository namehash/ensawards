import type { IncentiveProgram, IncentiveProgramSlug } from "data/incentive-programs/types";

const definedIncentivePrograms: Map<IncentiveProgramSlug, IncentiveProgram> = new Map();

export function defineIncentiveProgram(incentiveProgram: IncentiveProgram): void {
  // enforce incentive program's slug uniqueness
  if (definedIncentivePrograms.has(incentiveProgram.incentiveProgramSlug)) {
    throw new Error(
      `Incentive program with slug="${incentiveProgram.incentiveProgramSlug}" is already defined`,
    );
  }

  definedIncentivePrograms.set(incentiveProgram.incentiveProgramSlug, incentiveProgram);
}

export function getDefinedIncentivePrograms(): IncentiveProgram[] {
  return [...definedIncentivePrograms.values()];
}
