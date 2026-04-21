import { getAwards } from "data/awards/registry";

import.meta.glob("../incentive-programs/*/awards.ts", { eager: true });

export const AWARDS = getAwards();
