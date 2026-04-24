import { getDefinedIncentivePrograms } from "data/incentive-programs/registry";
import type { IncentiveProgram } from "data/incentive-programs/types";

import.meta.glob("./*/index.ts", { eager: true });

export const INCENTIVE_PROGRAMS: IncentiveProgram[] = getDefinedIncentivePrograms();
