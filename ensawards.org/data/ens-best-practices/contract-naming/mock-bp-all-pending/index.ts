// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import { AppTypes } from "data/apps/types.ts";
import contributors from "data/contributors/index.ts";
import {
  desiredOutcome,
  implementationRecommendations,
  mockAcceptanceTest1Description,
  useCaseSummary,
} from "data/ens-best-practices/contract-naming/mock-bp-all-pending/technicalDetails.tsx";
import { defineBestPractice } from "data/ens-best-practices/registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import ContractNamingCategory from "../index.ts";

const mockBestPracticeAllPending: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "mock-bp-all-pending",
  bestPracticeSlug: "mock-bp-all-pending",
  name: "Mock BP all pending",
  description:
    "Mock best practice with all benchmarks in pending state. This is used to test the display of pending benchmarks in the UI.",
  category: ContractNamingCategory,
  appliesTo: [AppTypes.Wallet],
  technicalDetails: {
    useCaseSummary: useCaseSummary,
    desiredOutcome: desiredOutcome,
    implementationRecommendations: implementationRecommendations,
    acceptanceTests: [
      {
        acceptanceTestSlug: "mock-acceptance-test-1",
        name: "Mock acceptance test 1",
        description: mockAcceptanceTest1Description,
      },
    ],
  },
  contributions: [
    { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-03T11:25:00.000Z") },
    { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-12T14:51:00.000Z") },
  ],
};

defineBestPractice(mockBestPracticeAllPending);

export default mockBestPracticeAllPending;
