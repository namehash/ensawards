// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import { AppTypes } from "data/apps/types.ts";
import contributors from "data/contributors/index.ts";
import { defineBestPractice } from "data/ens-best-practices/registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import ENSResolutionCategory from "../index.ts";
import technicalDetails from "./technicalDetails.tsx";

const depositAddresses: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "deposit-addresses",
  bestPracticeSlug: "deposit-addresses",
  name: "Correctly Resolve Deposit Addresses",
  description:
    "Ensure your app correctly resolves which address and chain a deposit to an ENS name should be sent to.",
  category: ENSResolutionCategory,
  appliesTo: [AppTypes.Wallet, AppTypes.Explorer, AppTypes.DeFi, AppTypes.Exchange],
  technicalDetails: technicalDetails,
  contributions: [
    { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-18T15:20:00.000Z") },
    { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T14:19:00.000Z") },
  ],
};

defineBestPractice(depositAddresses);

export default depositAddresses;
