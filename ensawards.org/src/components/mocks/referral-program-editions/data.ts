import {
  ReferralProgramAwardModels,
  ReferralProgramEditionStatuses,
  type ReferralProgramEditionSummaryPieSplit,
  type ReferralProgramEditionSummaryRevShareCap,
} from "@namehash/ens-referrals";

import { parseTimestamp, parseUsdc } from "@ensnode/ensnode-sdk";

export const mockReferralProgramEditionSummariesList: (
  | ReferralProgramEditionSummaryPieSplit
  | ReferralProgramEditionSummaryRevShareCap
)[] = [
  {
    awardModel: ReferralProgramAwardModels.PieSplit,
    slug: "2025-12",
    displayName: "ENS Holiday Awards",
    status: ReferralProgramEditionStatuses.Closed,
    rules: {
      awardModel: ReferralProgramAwardModels.PieSplit,
      awardPool: parseUsdc("10000"),
      maxQualifiedReferrers: 10,
      startTime: parseTimestamp("2025-12-01T00:00:00.000Z"),
      endTime: parseTimestamp("2025-12-31T23:59:59.000Z"),
      subregistryId: {
        chainId: 1,
        address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      },
      rulesUrl: new URL("https://ensawards.org/ens-holiday-awards-rules"),
      areAwardsDistributed: true,
    },
  },
  {
    awardModel: ReferralProgramAwardModels.RevShareCap,
    slug: "2026-03",
    displayName: "March 2026",
    status: ReferralProgramEditionStatuses.Active,
    rules: {
      awardModel: ReferralProgramAwardModels.RevShareCap,
      awardPool: parseUsdc("10000"),
      minBaseRevenueContribution: parseUsdc("500"),
      maxBaseRevenueShare: 0.5,
      baseAnnualRevenueContribution: parseUsdc("5"),
      startTime: parseTimestamp("2026-03-01T00:00:00.000Z"),
      endTime: parseTimestamp("2026-03-31T23:59:59.000Z"),
      subregistryId: {
        chainId: 1,
        address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      },
      rulesUrl: new URL("https://ensawards.org/ens-holiday-awards-rules"),
      areAwardsDistributed: false,
      adminActions: [],
    },
    awardPoolRemaining: parseUsdc("2864.864605"),
  },
  {
    awardModel: ReferralProgramAwardModels.RevShareCap,
    slug: "2028-06",
    displayName: "Mock Scheduled Edition",
    status: ReferralProgramEditionStatuses.Scheduled,
    rules: {
      awardModel: ReferralProgramAwardModels.RevShareCap,
      awardPool: parseUsdc("10000"),
      minBaseRevenueContribution: parseUsdc("500"),
      maxBaseRevenueShare: 0.5,
      baseAnnualRevenueContribution: parseUsdc("5"),
      startTime: parseTimestamp("2028-05-09T06:38:51.000Z"),
      endTime: parseTimestamp("2028-06-09T06:38:51.000Z"),
      subregistryId: {
        chainId: 1,
        address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      },
      rulesUrl: new URL("https://ensawards.org/ens-holiday-awards-rules"),
      adminActions: [],
      areAwardsDistributed: false,
    },
    awardPoolRemaining: parseUsdc("10000"),
  },
];
