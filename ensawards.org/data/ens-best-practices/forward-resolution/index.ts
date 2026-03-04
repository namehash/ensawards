// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import contributors from "data/contributors/index.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatus } from "../types.ts";

const ForwardResolutionCategory: BestPracticeCategory = {
  id: "forward-resolution",
  categorySlug: "forward-resolution",
  name: "Forward Resolution",
  description:
    "Lookup the details of an ENS name, such as its onchain addresses, avatar image, social records, and decentralized website.",
  status: CategoryStatus.ComingSoon,
  contributions: [
    { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-11-03T11:25:00.000Z") },
    { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-09T11:03:00.000Z") },
  ],
};

defineBestPracticeCategory(ForwardResolutionCategory);

export default ForwardResolutionCategory;
