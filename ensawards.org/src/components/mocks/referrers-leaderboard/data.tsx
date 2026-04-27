import {
  AdminActionTypes,
  type ReferralProgramAwardModel,
  ReferralProgramAwardModels,
  ReferralProgramEditionStatuses,
  type ReferralProgramEditionSummary,
  type ReferralProgramEditionSummaryPieSplit,
  type ReferralProgramEditionSummaryRevShareCap,
  type ReferralProgramRulesPieSplit,
  type ReferralProgramRulesRevShareCap,
  type ReferrerLeaderboardPagePieSplit,
} from "@namehash/ens-referrals";

import { CurrencyIds } from "@ensnode/ensnode-sdk";

import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import type { DisplayReferrerLeaderboardPageProps } from "@/components/referral-awards-program/referrers/DisplayReferrerLeaderboardPage";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export const MockReferrersListStates = {
  Loading: "Loading",
  FetchError: "FetchError",
  Empty: "Empty",
  Loaded: "Loaded",
} as const;

export type MockReferrersListState =
  (typeof MockReferrersListStates)[keyof typeof MockReferrersListStates];

const fetchErrorProps = {
  leaderboardPageData: null,
  isLoading: false,
  editionSummary: null, // not important in this scenario
  leaderboardPageFetchError: (
    <ErrorInfo title="Error loading referrer data" description={["Please try again later."]}>
      <button
        className={cn(
          shadcnButtonVariants({
            variant: "outline",
            size: "default",
            className: "rounded-full cursor-pointer",
          }),
        )}
        onClick={() => alert("Retry fetching")}
      >
        Try again
      </button>
    </ErrorInfo>
  ),
} satisfies DisplayReferrerLeaderboardPageProps;

const mockPieSplitRules = {
  awardModel: ReferralProgramAwardModels.PieSplit,
  awardPool: { currency: CurrencyIds.USDC, amount: 10000000000n },
  maxQualifiedReferrers: 10,
  startTime: 1764547200,
  endTime: 1767225599,
  subregistryId: {
    chainId: 1,
    address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
  },
  rulesUrl: new URL("https://example.com/rules"),
  areAwardsDistributed: true,
} as const satisfies ReferralProgramRulesPieSplit;

const emptyPieSplitLeaderboardData = {
  awardModel: ReferralProgramAwardModels.PieSplit,
  rules: mockPieSplitRules,
  referrers: [],
  aggregatedMetrics: {
    grandTotalReferrals: 0,
    grandTotalIncrementalDuration: 0,
    grandTotalQualifiedReferrersFinalScore: 0,
    minFinalScoreToQualify: 0,
    grandTotalRevenueContribution: { currency: CurrencyIds.ETH, amount: 0n },
  },
  pageContext: {
    page: 1,
    recordsPerPage: 4,
    totalRecords: 0,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
    startIndex: undefined,
    endIndex: undefined,
  },
  status: ReferralProgramEditionStatuses.Active,
  accurateAsOf: 1764091210,
} as const satisfies ReferrerLeaderboardPagePieSplit;

const mockEditionSummaryPieSplit = {
  awardModel: ReferralProgramAwardModels.PieSplit,
  slug: "2026-04",
  displayName: "December 2025 Edition",
  status: ReferralProgramEditionStatuses.Closed,
  rules: mockPieSplitRules,
} as const satisfies ReferralProgramEditionSummaryPieSplit;

const mockRevShareCapRules = {
  awardModel: ReferralProgramAwardModels.RevShareCap,
  awardPool: { currency: CurrencyIds.USDC, amount: 10000000000n },
  minBaseRevenueContribution: { currency: CurrencyIds.USDC, amount: 5000000000n },
  maxBaseRevenueShare: 0.5,
  baseAnnualRevenueContribution: { currency: CurrencyIds.USDC, amount: 5000000n },
  startTime: 1764547200,
  endTime: 1767225599,
  subregistryId: {
    chainId: 1,
    address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
  },
  rulesUrl: new URL("https://example.com/rules"),
  adminActions: [],
  areAwardsDistributed: false,
} as const satisfies ReferralProgramRulesRevShareCap;

const mockEditionSummaryRevShareCap = {
  slug: "2026-04",
  awardModel: ReferralProgramAwardModels.RevShareCap,
  displayName: "April 2026 Edition",
  status: ReferralProgramEditionStatuses.Active,
  rules: mockRevShareCapRules,
  awardPoolRemaining: { currency: CurrencyIds.USDC, amount: 8715625715n },
} as const satisfies ReferralProgramEditionSummaryRevShareCap;

export const mockReferrersLeaderboardData = new Map<
  ReferralProgramAwardModel,
  Map<MockReferrersListState, DisplayReferrerLeaderboardPageProps>
>([
  [
    ReferralProgramAwardModels.PieSplit,
    new Map<MockReferrersListState, DisplayReferrerLeaderboardPageProps>([
      [
        MockReferrersListStates.Empty,
        {
          leaderboardPageData: emptyPieSplitLeaderboardData,
          isLoading: false,
          editionSummary: mockEditionSummaryPieSplit,
        } satisfies DisplayReferrerLeaderboardPageProps,
      ],
      [
        MockReferrersListStates.Loading,
        {
          leaderboardPageData: emptyPieSplitLeaderboardData,
          isLoading: true,
          editionSummary: null,
          paginationParams: {
            page: 1,
            recordsPerPage: 4,
          },
        } satisfies DisplayReferrerLeaderboardPageProps,
      ],
      [MockReferrersListStates.FetchError, fetchErrorProps],
      [
        MockReferrersListStates.Loaded,
        {
          leaderboardPageData: {
            awardModel: ReferralProgramAwardModels.PieSplit,
            rules: mockPieSplitRules,
            referrers: [
              {
                referrer: "0x4d982788c01402c4e0f657e1192d7736084ae5a8",
                totalReferrals: 5,
                totalIncrementalDuration: 22813200,
                score: 0.722921529303591,
                rank: 1,
                isQualified: true,
                finalScoreBoost: 0.111111111111111,
                finalScore: 0.803246143670656,
                awardPoolShare: 0.0276828248101365,
                awardPoolApproxValue: { currency: CurrencyIds.USDC, amount: 3276828248n },
                totalRevenueContribution: { currency: CurrencyIds.ETH, amount: 0n },
              },
              {
                referrer: "0xabe3fdb4d2cd5f2e7193a4ac380ecb68e899896a",
                totalReferrals: 7,
                totalIncrementalDuration: 15120000,
                score: 0.479133726222989,
                rank: 4,
                isQualified: true,
                finalScoreBoost: 0,
                finalScore: 0.479133726222989,
                awardPoolShare: 0.01651271544616,
                awardPoolApproxValue: { currency: CurrencyIds.USDC, amount: 165127154n },
                totalRevenueContribution: { currency: CurrencyIds.ETH, amount: 0n },
              },
              {
                referrer: "0x7e491cde0fbf08e51f54c4fb6b9e24afbd18966d",
                totalReferrals: 5,
                totalIncrementalDuration: 12960000,
                score: 0.410686051048276,
                rank: 11,
                isQualified: false,
                finalScoreBoost: 0,
                finalScore: 0.410686051048276,
                awardPoolShare: 0,
                awardPoolApproxValue: { currency: CurrencyIds.USDC, amount: 0n },
                totalRevenueContribution: { currency: CurrencyIds.ETH, amount: 0n },
              },
              {
                referrer: "0x2a614b7984854177d22fa23a4034a13ea82e4f97",
                totalReferrals: 5,
                totalIncrementalDuration: 12096000,
                score: 0.383306980978391,
                rank: 555,
                isQualified: false,
                finalScoreBoost: 0,
                finalScore: 0.383306980978391,
                awardPoolShare: 0,
                awardPoolApproxValue: { currency: CurrencyIds.USDC, amount: 0n },
                totalRevenueContribution: { currency: CurrencyIds.ETH, amount: 0n },
              },
            ],
            aggregatedMetrics: {
              grandTotalReferrals: 84,
              grandTotalIncrementalDuration: 651636003,
              grandTotalQualifiedReferrersFinalScore: 29.0160469236699,
              minFinalScoreToQualify: 0.479133726222989,
              grandTotalRevenueContribution: { currency: CurrencyIds.ETH, amount: 0n },
            },
            pageContext: {
              page: 1,
              recordsPerPage: 4,
              totalRecords: 33,
              totalPages: 9,
              hasNext: true,
              hasPrev: false,
              startIndex: 0,
              endIndex: 3,
            },
            status: ReferralProgramEditionStatuses.Active,
            accurateAsOf: 1764580368,
          },
          isLoading: false,
          editionSummary: mockEditionSummaryPieSplit,
        } satisfies DisplayReferrerLeaderboardPageProps,
      ],
    ]),
  ],
  [
    ReferralProgramAwardModels.RevShareCap,
    new Map<MockReferrersListState, DisplayReferrerLeaderboardPageProps>([
      [
        MockReferrersListStates.Empty,
        {
          leaderboardPageData: {
            awardModel: ReferralProgramAwardModels.RevShareCap,
            rules: mockRevShareCapRules,
            referrers: [],
            aggregatedMetrics: {
              grandTotalReferrals: 0,
              grandTotalIncrementalDuration: 0,
              awardPoolRemaining: { currency: CurrencyIds.USDC, amount: 10000000000n },
              grandTotalRevenueContribution: { currency: CurrencyIds.ETH, amount: 0n },
            },
            pageContext: {
              page: 1,
              recordsPerPage: 4,
              totalRecords: 0,
              totalPages: 1,
              hasNext: false,
              hasPrev: false,
              startIndex: undefined,
              endIndex: undefined,
            },
            status: ReferralProgramEditionStatuses.Active,
            accurateAsOf: 1764091210,
          },
          isLoading: false,
          editionSummary: mockEditionSummaryRevShareCap,
        } satisfies DisplayReferrerLeaderboardPageProps,
      ],
      [
        MockReferrersListStates.Loading,
        {
          leaderboardPageData: null,
          isLoading: true,
          editionSummary: null,
          paginationParams: {
            page: 1,
            recordsPerPage: 4,
          },
        } satisfies DisplayReferrerLeaderboardPageProps,
      ],
      [MockReferrersListStates.FetchError, fetchErrorProps],
      [
        MockReferrersListStates.Loaded,
        {
          leaderboardPageData: {
            awardModel: ReferralProgramAwardModels.RevShareCap,
            rules: mockRevShareCapRules,
            referrers: [
              {
                referrer: "0x7e491cde0fbf08e51f54c4fb6b9e24afbd18966d",
                totalReferrals: 3045,
                totalIncrementalDuration: 22420645501,
                totalRevenueContribution: {
                  currency: CurrencyIds.ETH,
                  amount: 11762726770456096320n,
                },
                totalBaseRevenueContribution: {
                  currency: CurrencyIds.USDC,
                  amount: 3552409862n,
                },
                rank: 1,
                isQualified: true,
                uncappedAward: {
                  currency: CurrencyIds.USDC,
                  amount: 1776204931n,
                },
                cappedAward: {
                  currency: CurrencyIds.USDC,
                  amount: 1776204010n,
                },
                adminAction: null,
              },
              {
                referrer: "0xf919a96d2970380b87917b04f02e6d3d08368b10",
                totalReferrals: 898,
                totalIncrementalDuration: 15477955200,
                totalRevenueContribution: {
                  currency: CurrencyIds.ETH,
                  amount: 5177998061608530459n,
                },
                totalBaseRevenueContribution: {
                  currency: CurrencyIds.USDC,
                  amount: 2452384374n,
                },
                rank: 2,
                isQualified: false,
                uncappedAward: {
                  currency: CurrencyIds.USDC,
                  amount: 1226192187n,
                },
                cappedAward: {
                  currency: CurrencyIds.USDC,
                  amount: 1226192099n,
                },
                adminAction: {
                  actionType: AdminActionTypes.Disqualification,
                  referrer: "0xf919a96d2970380b87917b04f02e6d3d08368b10",
                  reason: "Mock longer disqualification text",
                },
              },
              {
                referrer: "0x1c0ea438837302b4516ac3f380313061ec11760f",
                totalReferrals: 5,
                totalIncrementalDuration: 128736000,
                totalRevenueContribution: {
                  currency: CurrencyIds.ETH,
                  amount: 90671049875579170n,
                },
                totalBaseRevenueContribution: {
                  currency: CurrencyIds.USDC,
                  amount: 20397407n,
                },
                rank: 4,
                isQualified: false,
                uncappedAward: {
                  currency: CurrencyIds.USDC,
                  amount: 10198703n,
                },
                cappedAward: {
                  currency: CurrencyIds.USDC,
                  amount: 0n,
                },
                adminAction: null,
              },
              {
                referrer: "0x798ff1e6d7afd28c333ee6ebe03125d30ec6ef10",
                totalReferrals: 1,
                totalIncrementalDuration: 2502000,
                totalRevenueContribution: {
                  currency: CurrencyIds.ETH,
                  amount: 190714270880730n,
                },
                totalBaseRevenueContribution: {
                  currency: CurrencyIds.USDC,
                  amount: 396426n,
                },
                rank: 10,
                isQualified: false,
                uncappedAward: {
                  currency: CurrencyIds.USDC,
                  amount: 198213n,
                },
                cappedAward: {
                  currency: CurrencyIds.USDC,
                  amount: 0n,
                },
                adminAction: null,
              },
            ],
            aggregatedMetrics: {
              grandTotalReferrals: 3965,
              grandTotalIncrementalDuration: 38476706701,
              grandTotalRevenueContribution: {
                currency: CurrencyIds.ETH,
                amount: 17118804944747959622n,
              },
              awardPoolRemaining: {
                currency: CurrencyIds.USDC,
                amount: 6997603891n,
              },
            },
            pageContext: {
              page: 1,
              recordsPerPage: 4,
              totalRecords: 4,
              totalPages: 1,
              hasNext: false,
              hasPrev: false,
              startIndex: undefined,
              endIndex: undefined,
            },
            status: ReferralProgramEditionStatuses.Active,
            accurateAsOf: 1773069047,
          },
          isLoading: false,
          editionSummary: mockEditionSummaryRevShareCap,
        } satisfies DisplayReferrerLeaderboardPageProps,
      ],
    ]),
  ],
]);
