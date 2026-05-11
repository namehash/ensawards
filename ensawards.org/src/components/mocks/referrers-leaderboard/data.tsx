import {
  type AdminActionDisqualification,
  AdminActionTypes,
  type AdminActionWarning,
  type ReferralProgramAwardModel,
  ReferralProgramAwardModels,
  ReferralProgramEditionStatuses,
  type ReferralProgramEditionSummaryPieSplit,
  type ReferralProgramEditionSummaryRevShareCap,
  type ReferralProgramRulesPieSplit,
  type ReferralProgramRulesRevShareCap,
  type ReferrerLeaderboardPagePieSplit,
} from "@namehash/ens-referrals";
import { asNormalizedAddress } from "enssdk";

import { parseEth, parseTimestamp, parseUsdc } from "@ensnode/ensnode-sdk";

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
  awardPool: parseUsdc("10000"),
  maxQualifiedReferrers: 10,
  startTime: parseTimestamp("2025-12-01T00:00:00.000Z"),
  endTime: parseTimestamp("2025-12-31T23:59:59.000Z"),
  subregistryId: {
    chainId: 1,
    address: asNormalizedAddress("0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85"),
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
    grandTotalRevenueContribution: parseEth("0"),
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
  accurateAsOf: parseTimestamp("2025-11-25T17:20:10.000Z"),
} as const satisfies ReferrerLeaderboardPagePieSplit;

const mockEditionSummaryPieSplit = {
  awardModel: ReferralProgramAwardModels.PieSplit,
  slug: "2026-04",
  displayName: "December 2025 Edition",
  status: ReferralProgramEditionStatuses.Closed,
  rules: mockPieSplitRules,
} as const satisfies ReferralProgramEditionSummaryPieSplit;

const mockDisqualification: AdminActionDisqualification = {
  actionType: AdminActionTypes.Disqualification,
  referrer: asNormalizedAddress("0xf919a96d2970380b87917b04f02e6d3d08368b10"),
  reason: "Mock longer disqualification text",
};

const mockWarning: AdminActionWarning = {
  actionType: AdminActionTypes.Warning,
  referrer: asNormalizedAddress("0x1c0ea438837302b4516ac3f380313061ec11760f"),
  reason: "Mock longer warning text placeholder",
};

const mockRevShareCapRules = {
  awardModel: ReferralProgramAwardModels.RevShareCap,
  awardPool: parseUsdc("10000"),
  minBaseRevenueContribution: parseUsdc("500"),
  maxBaseRevenueShare: 0.5,
  baseAnnualRevenueContribution: parseUsdc("5"),
  startTime: parseTimestamp("2025-12-01T00:00:00.000Z"),
  endTime: parseTimestamp("2025-12-31T23:59:59.000Z"),
  subregistryId: {
    chainId: 1,
    address: asNormalizedAddress("0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85"),
  },
  rulesUrl: new URL("https://example.com/rules"),
  adminActions: [mockDisqualification, mockWarning],
  areAwardsDistributed: false,
} as const satisfies ReferralProgramRulesRevShareCap;

const mockEditionSummaryRevShareCap = {
  slug: "2026-04",
  awardModel: ReferralProgramAwardModels.RevShareCap,
  displayName: "April 2026 Edition",
  status: ReferralProgramEditionStatuses.Active,
  rules: mockRevShareCapRules,
  awardPoolRemaining: parseUsdc("8715.625715"),
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
                referrer: asNormalizedAddress("0x4d982788c01402c4e0f657e1192d7736084ae5a8"),
                totalReferrals: 5,
                totalIncrementalDuration: 22813200,
                score: 0.722921529303591,
                rank: 1,
                isQualified: true,
                finalScoreBoost: 0.111111111111111,
                finalScore: 0.803246143670656,
                awardPoolShare: 0.0276828248101365,
                awardPoolApproxValue: parseUsdc("3276.828248"),
                totalRevenueContribution: parseEth("0"),
              },
              {
                referrer: asNormalizedAddress("0xabe3fdb4d2cd5f2e7193a4ac380ecb68e899896a"),
                totalReferrals: 7,
                totalIncrementalDuration: 15120000,
                score: 0.479133726222989,
                rank: 4,
                isQualified: true,
                finalScoreBoost: 0,
                finalScore: 0.479133726222989,
                awardPoolShare: 0.01651271544616,
                awardPoolApproxValue: parseUsdc("165.127154"),
                totalRevenueContribution: parseEth("0"),
              },
              {
                referrer: asNormalizedAddress("0x7e491cde0fbf08e51f54c4fb6b9e24afbd18966d"),
                totalReferrals: 5,
                totalIncrementalDuration: 12960000,
                score: 0.410686051048276,
                rank: 11,
                isQualified: false,
                finalScoreBoost: 0,
                finalScore: 0.410686051048276,
                awardPoolShare: 0,
                awardPoolApproxValue: parseUsdc("0"),
                totalRevenueContribution: parseEth("0"),
              },
              {
                referrer: asNormalizedAddress("0x2a614b7984854177d22fa23a4034a13ea82e4f97"),
                totalReferrals: 5,
                totalIncrementalDuration: 12096000,
                score: 0.383306980978391,
                rank: 555,
                isQualified: false,
                finalScoreBoost: 0,
                finalScore: 0.383306980978391,
                awardPoolShare: 0,
                awardPoolApproxValue: parseUsdc("0"),
                totalRevenueContribution: parseEth("0"),
              },
            ],
            aggregatedMetrics: {
              grandTotalReferrals: 84,
              grandTotalIncrementalDuration: 651636003,
              grandTotalQualifiedReferrersFinalScore: 29.0160469236699,
              minFinalScoreToQualify: 0.479133726222989,
              grandTotalRevenueContribution: parseEth("0"),
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
            accurateAsOf: parseTimestamp("2025-12-01T09:12:48.000Z"),
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
              awardPoolRemaining: parseUsdc("10000"),
              grandTotalRevenueContribution: parseEth("0"),
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
            accurateAsOf: parseTimestamp("2025-11-25T17:20:10.000Z"),
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
                referrer: asNormalizedAddress("0x7e491cde0fbf08e51f54c4fb6b9e24afbd18966d"),
                totalReferrals: 3045,
                totalIncrementalDuration: 22420645501,
                totalRevenueContribution: parseEth("11.762726770456096320"),
                totalBaseRevenueContribution: parseUsdc("3552.409862"),
                rank: 1,
                isQualified: true,
                uncappedAward: parseUsdc("1776.204931"),
                cappedAward: parseUsdc("1776.20401"),
                adminAction: null,
              },
              {
                referrer: asNormalizedAddress("0xf919a96d2970380b87917b04f02e6d3d08368b10"),
                totalReferrals: 898,
                totalIncrementalDuration: 15477955200,
                totalRevenueContribution: parseEth("5.177998061608530459"),
                totalBaseRevenueContribution: parseUsdc("2452.384374"),
                rank: 2,
                isQualified: false,
                uncappedAward: parseUsdc("1226.192187"),
                cappedAward: parseUsdc("1226.192099"),
                adminAction: mockDisqualification,
              },
              {
                referrer: asNormalizedAddress("0x1c0ea438837302b4516ac3f380313061ec11760f"),
                totalReferrals: 5,
                totalIncrementalDuration: 128736000,
                totalRevenueContribution: parseEth("0.090671049875579170"),
                totalBaseRevenueContribution: parseUsdc("20.397407"),
                rank: 4,
                isQualified: false,
                uncappedAward: parseUsdc("10.198703"),
                cappedAward: parseUsdc("0"),
                adminAction: mockWarning,
              },
              {
                referrer: asNormalizedAddress("0x798ff1e6d7afd28c333ee6ebe03125d30ec6ef10"),
                totalReferrals: 1,
                totalIncrementalDuration: 2502000,
                totalRevenueContribution: parseEth("0.000190714270880730"),
                totalBaseRevenueContribution: parseUsdc("0.396426"),
                rank: 10,
                isQualified: false,
                uncappedAward: parseUsdc("0.198213"),
                cappedAward: parseUsdc("0"),
                adminAction: null,
              },
            ],
            aggregatedMetrics: {
              grandTotalReferrals: 3965,
              grandTotalIncrementalDuration: 38476706701,
              grandTotalRevenueContribution: parseEth("17.118804944747959622"),
              awardPoolRemaining: parseUsdc("6997.603891"),
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
            accurateAsOf: parseTimestamp("2026-03-09T15:10:47.000Z"),
          },
          isLoading: false,
          editionSummary: mockEditionSummaryRevShareCap,
        } satisfies DisplayReferrerLeaderboardPageProps,
      ],
    ]),
  ],
]);
