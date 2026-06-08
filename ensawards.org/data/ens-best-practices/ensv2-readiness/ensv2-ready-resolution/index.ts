// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import { AppTypes } from "data/apps/types.ts";
import contributors from "data/contributors/index.ts";
import { defineBestPractice } from "data/ens-best-practices/registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import ENSv2ReadinessCategory from "../index.ts";
import technicalDetails from "./technicalDetails.tsx";

const ensv2ReadyResolution: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "ensv2-ready-resolution",
  bestPracticeSlug: "ensv2-ready-resolution",
  name: "Correctly Resolve All Names For ENSv2",
  description: "Make sure your app keeps resolving ENS names correctly once ENSv2 launches.",
  category: ENSv2ReadinessCategory,
  appliesTo: [AppTypes.Wallet, AppTypes.Explorer],
  technicalDetails: technicalDetails,
  contributions: [
    { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-05T13:01:00.000Z") },
    { from: contributors.shrugs, lastUpdated: parseTimestamp("2026-06-06T17:14:00.000Z") },
    { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-07T17:20:00.000Z") },
  ],
};

defineBestPractice(ensv2ReadyResolution);

export default ensv2ReadyResolution;
