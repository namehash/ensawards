import { getAwards } from "data/awards/registry";
import type { Award } from "data/awards/types";

import.meta.glob("../incentive-programs/*/awards.ts", { eager: true });

export const AWARDS: Award[] = getAwards();
