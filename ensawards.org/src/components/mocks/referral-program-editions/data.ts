import {
  ReferralProgramAwardModels,
  ReferralProgramEditionStatuses,
  type ReferralProgramEditionSummaryPieSplit,
  type ReferralProgramEditionSummaryRevShareCap,
} from "@namehash/ens-referrals";

import { CurrencyIds } from "@ensnode/ensnode-sdk";

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
      awardPool: {
        currency: CurrencyIds.USDC,
        amount: 10000000000n,
      },
      maxQualifiedReferrers: 10,
      startTime: 1764547200,
      endTime: 1767225599,
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
      awardPool: {
        currency: CurrencyIds.USDC,
        amount: 10000000000n,
      },
      minBaseRevenueContribution: {
        currency: CurrencyIds.USDC,
        amount: 500000000n,
      },
      maxBaseRevenueShare: 0.5,
      baseAnnualRevenueContribution: { currency: CurrencyIds.USDC, amount: 5000000n },
      startTime: 1772323200,
      endTime: 1775001599,
      subregistryId: {
        chainId: 1,
        address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      },
      rulesUrl: new URL("https://ensawards.org/ens-holiday-awards-rules"),
      areAwardsDistributed: false,
      adminActions: [],
    },
    awardPoolRemaining: {
      currency: CurrencyIds.USDC,
      amount: 2864864605n,
    },
  },
  {
    awardModel: ReferralProgramAwardModels.RevShareCap,
    slug: "2028-06",
    displayName: "Mock Scheduled Edition",
    status: ReferralProgramEditionStatuses.Scheduled,
    rules: {
      awardModel: ReferralProgramAwardModels.RevShareCap,
      awardPool: {
        currency: CurrencyIds.USDC,
        amount: 10000000000n,
      },
      minBaseRevenueContribution: {
        currency: CurrencyIds.USDC,
        amount: 500000000n,
      },
      maxBaseRevenueShare: 0.5,
      baseAnnualRevenueContribution: { currency: CurrencyIds.USDC, amount: 5000000n },
      startTime: 1841467131,
      endTime: 1844145531,
      subregistryId: {
        chainId: 1,
        address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      },
      rulesUrl: new URL("https://ensawards.org/ens-holiday-awards-rules"),
      adminActions: [],
      areAwardsDistributed: false,
    },
    awardPoolRemaining: {
      currency: CurrencyIds.USDC,
      amount: 10000000000n,
    },
  },
];
