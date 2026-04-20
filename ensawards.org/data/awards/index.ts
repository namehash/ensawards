import { getAwards } from "data/awards/registry";

import.meta.glob("../ens-best-practices/*/awards.ts", { eager: true });

export const AWARDS = getAwards();
