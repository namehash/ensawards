import { ReferralProgramAwardModels, ReferralProgramStatuses } from "@namehash/ens-referrals/v1";
import { useMemo, useState } from "react";

import { createConfig, ENSNodeProvider } from "@ensnode/ensnode-react";
import { CurrencyIds } from "@ensnode/ensnode-sdk";

import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import {
  DisplayReferrerLeaderboardPage,
  type DisplayReferrerLeaderboardPageProps,
} from "@/components/referral-awards-program/referrers/DisplayReferrerLeaderboardPage.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

type ReferrersListState = "loading" | "fetchError" | "empty" | "loaded";

const DEFAULT_STATE = "loaded";
export function MockDisplayReferrerLeaderboardPage() {
  const ensNodeReactConfig = useMemo(
    () =>
      createConfig({
        url: getENSNodeUrl(),
      }),
    [],
  );
  const [selectedState, setSelectedState] = useState<ReferrersListState>(DEFAULT_STATE);
  const props = useMemo(() => {
    switch (selectedState) {
      case "empty":
        return {
          leaderboardPageData: {
            awardModel: ReferralProgramAwardModels.PieSplit,
            rules: {
              awardModel: ReferralProgramAwardModels.PieSplit,
              totalAwardPoolValue: { currency: CurrencyIds.USDC, amount: 10000000000n },
              maxQualifiedReferrers: 10,
              startTime: 1764547200,
              endTime: 1767225599,
              subregistryId: {
                chainId: 1,
                address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
              },
              rulesUrl: new URL("https://example.com/rules"),
            },
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
            status: ReferralProgramStatuses.Active,
            accurateAsOf: 1764091210,
          },
          isLoading: false,
        } satisfies DisplayReferrerLeaderboardPageProps;

      case "loading":
        return {
          leaderboardPageData: null,
          isLoading: true,
          paginationParams: {
            page: 1,
            recordsPerPage: 4,
          },
        } satisfies DisplayReferrerLeaderboardPageProps;

      case "fetchError":
        return {
          leaderboardPageData: null,
          isLoading: false,
          leaderboardPageFetchError: (
            <ErrorInfo
              title="Error loading referrer data"
              description={["Mock error message. Please try again later."]}
            >
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

      default:
        return {
          leaderboardPageData: {
            awardModel: ReferralProgramAwardModels.PieSplit,
            rules: {
              awardModel: ReferralProgramAwardModels.PieSplit,
              totalAwardPoolValue: { currency: CurrencyIds.USDC, amount: 10000000000n },
              maxQualifiedReferrers: 10,
              startTime: 1764547200,
              endTime: 1767225599,
              subregistryId: {
                chainId: 1,
                address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
              },
              rulesUrl: new URL("https://example.com/rules"),
            },
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
            status: ReferralProgramStatuses.Active,
            accurateAsOf: 1764580368,
          },
          isLoading: false,
        } satisfies DisplayReferrerLeaderboardPageProps;
    }
  }, [selectedState]);

  return (
    <ENSNodeProvider config={ensNodeReactConfig}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-3 sm:gap-6">
          <div className="flex flex-wrap gap-2">
            {["loading", "fetchError", "empty", "loaded"].map((variant, idx) => (
              <button
                key={`variant-button-${idx}`}
                className={cn(
                  shadcnButtonVariants({
                    variant: selectedState === variant ? "default" : "outline",
                    size: "sm",
                    className: "cursor-pointer",
                  }),
                )}
                onClick={() => setSelectedState(variant as ReferrersListState)}
              >
                {variant}
              </button>
            ))}
          </div>
          <DisplayReferrerLeaderboardPage {...props} />
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
