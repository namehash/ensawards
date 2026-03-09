import {
  ReferralProgramAwardModels,
  type ReferralProgramEditionConfig,
} from "@namehash/ens-referrals/v1";

import { CurrencyIds } from "@ensnode/ensnode-sdk";

import { DEFAULT_REFERRAL_PROGRAM_EDITIONS } from "@/utils/referralProgram";

export const mockReferralProgramEditionsList: ReferralProgramEditionConfig[] = [
  ...DEFAULT_REFERRAL_PROGRAM_EDITIONS,
  {
    slug: "2025-05",
    displayName: "Mock May Edition",
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
    },
  },
];
