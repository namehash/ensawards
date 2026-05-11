// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import { AppTypes } from "data/apps/types.ts";
import contributors from "data/contributors/index.ts";
import technicalDetails from "data/ens-best-practices/display-profiles/mock-bp-all-pending-2/technicalDetails.tsx";
import { defineBestPractice } from "data/ens-best-practices/registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import DisplayProfilesCategory from "../index.ts";

const mockBestPracticeAllPending2: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "mock-bp-all-pending-2",
  bestPracticeSlug: "mock-bp-all-pending-2",
  name: "Mock BP all pending 2",
  description:
    "Mock best practice with all benchmarks in pending state. This is used to test the display of pending benchmarks in the UI with a best practice other than Contract Naming.",
  category: DisplayProfilesCategory,
  appliesTo: [AppTypes.Explorer],
  technicalDetails: technicalDetails,
  contributions: [
    { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-03T11:25:00.000Z") },
    { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-12T14:51:00.000Z") },
  ],
};

defineBestPractice(mockBestPracticeAllPending2);

export default mockBestPracticeAllPending2;
