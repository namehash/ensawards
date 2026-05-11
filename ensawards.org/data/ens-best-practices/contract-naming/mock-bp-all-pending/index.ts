// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import { AppTypes } from "data/apps/types.ts";
import contributors from "data/contributors/index.ts";
import { defineBestPractice } from "data/ens-best-practices/registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import ContractNamingCategory from "../index.ts";
import technicalDetails from "./technicalDetails.tsx";

const mockBestPracticeAllPending: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "mock-bp-all-pending",
  bestPracticeSlug: "mock-bp-all-pending",
  name: "Mock BP all pending",
  description:
    "Mock best practice with all benchmarks in pending state. This is used to test the display of pending benchmarks in the UI.",
  category: ContractNamingCategory,
  appliesTo: [AppTypes.Wallet],
  technicalDetails: technicalDetails,
  contributions: [
    { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-03T11:25:00.000Z") },
    { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-12T14:51:00.000Z") },
  ],
};

defineBestPractice(mockBestPracticeAllPending);

export default mockBestPracticeAllPending;
