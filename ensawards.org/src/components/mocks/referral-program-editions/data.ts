import {
  ReferralProgramAwardModels,
  ReferralProgramEditionStatuses,
  type ReferralProgramEditionSummaryPieSplit,
  type ReferralProgramEditionSummaryRevShareLimit,
} from "@namehash/ens-referrals/v1";

import { CurrencyIds } from "@ensnode/ensnode-sdk";

export const mockReferralProgramEditionSummariesList: (
  | ReferralProgramEditionSummaryPieSplit
  | ReferralProgramEditionSummaryRevShareLimit
)[] = [
  {
    awardModel: ReferralProgramAwardModels.PieSplit,
    slug: "2025-12",
    displayName: "ENS Holiday Awards",
    status: ReferralProgramEditionStatuses.Closed,
    rules: {
      awardModel: ReferralProgramAwardModels.PieSplit,
      totalAwardPoolValue: {
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
    awardModel: ReferralProgramAwardModels.RevShareLimit,
    slug: "2026-03",
    displayName: "March 2026",
    status: ReferralProgramEditionStatuses.Active,
    rules: {
      awardModel: ReferralProgramAwardModels.RevShareLimit,
      totalAwardPoolValue: {
        currency: CurrencyIds.USDC,
        amount: 10000000000n,
      },
      minQualifiedRevenueContribution: {
        currency: CurrencyIds.USDC,
        amount: 500000000n,
      },
      qualifiedRevenueShare: 0.5,
      startTime: 1772323200,
      endTime: 1775001599,
      subregistryId: {
        chainId: 1,
        address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      },
      rulesUrl: new URL("https://ensawards.org/ens-holiday-awards-rules"),
      areAwardsDistributed: false,
      disqualifications: [],
    },
    awardPoolRemaining: {
      currency: CurrencyIds.USDC,
      amount: 2864864605n,
    },
  },
  {
    awardModel: ReferralProgramAwardModels.RevShareLimit,
    slug: "2028-06",
    displayName: "Mock Scheduled Edition",
    status: ReferralProgramEditionStatuses.Scheduled,
    rules: {
      awardModel: ReferralProgramAwardModels.RevShareLimit,
      totalAwardPoolValue: {
        currency: CurrencyIds.USDC,
        amount: 10000000000n,
      },
      minQualifiedRevenueContribution: {
        currency: CurrencyIds.USDC,
        amount: 500000000n,
      },
      qualifiedRevenueShare: 0.5,
      startTime: 1841467131,
      endTime: 1844145531,
      subregistryId: {
        chainId: 1,
        address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      },
      rulesUrl: new URL("https://ensawards.org/ens-holiday-awards-rules"),
      disqualifications: [],
      areAwardsDistributed: false,
    },
    awardPoolRemaining: {
      currency: CurrencyIds.USDC,
      amount: 10000000000n,
    },
  },
];
