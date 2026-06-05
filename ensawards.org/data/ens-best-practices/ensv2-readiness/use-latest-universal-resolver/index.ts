// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import { AppTypes } from "data/apps/types.ts";
import contributors from "data/contributors/index.ts";
import { defineBestPractice } from "data/ens-best-practices/registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import ENSv2ReadinessCategory from "../index.ts";
import technicalDetails from "./technicalDetails.tsx";

const useLatestUniversalResolver: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "use-latest-universal-resolver",
  bestPracticeSlug: "use-latest-universal-resolver",
  name: "Use latest Universal Resolver",
  description: "Adopt the latest Universal Resolver to make the transition to ENSv2 seamless.",
  category: ENSv2ReadinessCategory,
  appliesTo: [AppTypes.Wallet, AppTypes.Explorer],
  technicalDetails: technicalDetails,
  contributions: [
    { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-05T13:01:00.000Z") },
  ],
};

defineBestPractice(useLatestUniversalResolver);

export default useLatestUniversalResolver;
