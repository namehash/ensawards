import {
  ReferrersList,
  type ReferrersListProps,
} from "@/components/holiday-referral-awards/referrers/ReferrersList.tsx";
import { FetchingErrorInfo } from "@/components/holiday-referral-awards/referrers/utils.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { useMemo, useState } from "react";

type ReferrersListState = "loading" | "fetchError" | "empty" | "loaded";

const DEFAULT_STATE = "loaded";
export function MockReferrersList() {
  const ensNodeReactConfig = createConfig({
    url: "https://api.alpha-sepolia.yellow.ensnode.io/",
  }); //TODO: replace with getENSNodeUrl for prod
  const [selectedState, setSelectedState] = useState<ReferrersListState>(DEFAULT_STATE);
  const props: ReferrersListProps = useMemo(() => {
    switch (selectedState) {
      case "empty":
        return {
          referrersData: {
            rules: {
              totalAwardPoolValue: 10000,
              maxQualifiedReferrers: 10,
              startTime: 1735689600,
              endTime: 1767225599,
              subregistryId: {
                chainId: 11155111, //TODO replace with mainnet's subregistry's address later on
                address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85"
              }
            },
            referrers: [],
            aggregatedMetrics: {
              grandTotalReferrals: 0,
              grandTotalIncrementalDuration: 0,
              grandTotalQualifiedReferrersFinalScore: 0,
              minFinalScoreToQualify: 0,
            },
            paginationContext: {
              page: 1,
              itemsPerPage: 4,
              totalRecords: 0,
              totalPages: 1,
              hasNext: false,
              hasPrev: false,
              startIndex: undefined,
              endIndex: undefined
            },
            accurateAsOf: 1764091210,
          },
          isLoading: false,
          generateLinkCTA: (
            <p
              className={cn(
                shadcnButtonVariants({
                  variant: "outline",
                  size: "default",
                  className: "cursor-pointer rounded-full",
                }),
              )}
            >
              Placeholder
            </p>
          ),
        };

      case "loading":
        return {
          referrersData: null,
          isLoading: true,
          generateLinkCTA: <p>Placeholder</p>,
        };

      case "fetchError":
        return {
          referrersData: null,
          isLoading: false,
          generateLinkCTA: <p>Placeholder</p>,
          error: (
            <FetchingErrorInfo
              errorMessage="Mock error message."
              retryFunction={() => {
                alert("Retry fetching");
              }}
            />
          ),
        };

      default:
        return {
          referrersData: {
            rules: {
              totalAwardPoolValue: 10000,
              maxQualifiedReferrers: 10,
              startTime: 1735689600,
              endTime: 1767225599,
              subregistryId: {
                chainId: 11155111, //TODO replace with mainnet's subregistry's address later on
                address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85"
              }
            },
            referrers: [
              {
                referrer: "0x03c098d2bed4609e6ed9beb2c4877741f45f290d",
                totalReferrals: 5,
                totalIncrementalDuration: 22813200,
                score: 0.722921529303591,
                rank: 9,
                isQualified: true,
                finalScoreBoost: 0.111111111111111,
                finalScore: 0.803246143670656,
                awardPoolShare: 0.0276828248101365,
                awardPoolApproxValue: 276.828248101365
              },
              {
                referrer: "0xabe3fdb4d2cd5f2e7193a4ac380ecb68e899896a",
                totalReferrals: 7,
                totalIncrementalDuration: 15120000,
                score: 0.479133726222989,
                rank: 10,
                isQualified: true,
                finalScoreBoost: 0,
                finalScore: 0.479133726222989,
                awardPoolShare: 0.01651271544616,
                awardPoolApproxValue: 165.1271544616
              },
              {
                referrer: "0xffa596cdf9a69676e689b1a92e5e681711227d75",
                totalReferrals: 5,
                totalIncrementalDuration: 12960000,
                score: 0.410686051048276,
                rank: 11,
                isQualified: false,
                finalScoreBoost: 0,
                finalScore: 0.410686051048276,
                awardPoolShare: 0,
                awardPoolApproxValue: 0
              },
              {
                referrer: "0x2a614b7984854177d22fa23a4034a13ea82e4f97",
                totalReferrals: 5,
                totalIncrementalDuration: 12096000,
                score: 0.383306980978391,
                rank: 12,
                isQualified: false,
                finalScoreBoost: 0,
                finalScore: 0.383306980978391,
                awardPoolShare: 0,
                awardPoolApproxValue: 0
              }
            ],
            aggregatedMetrics: {
              grandTotalReferrals: 84,
              grandTotalIncrementalDuration: 651636003,
              grandTotalQualifiedReferrersFinalScore: 29.0160469236699,
              minFinalScoreToQualify: 0.479133726222989
            },
            paginationContext: {
              page: 1,
              itemsPerPage: 4,
              totalRecords: 33,
              totalPages: 9,
              hasNext: true,
              hasPrev: false,
              startIndex: 0,
              endIndex: 3
            },
            accurateAsOf: 1764580368
          },
          isLoading: false,
          header: "Top referrers",
          generateLinkCTA: <p>Placeholder</p>,
        };
    }
  }, [selectedState]);

  return (
    <ENSNodeProvider config={ensNodeReactConfig}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-3 sm:gap-6">
          <div className="flex flex-wrap gap-2">
            {["loading", "fetchError", "empty", "loaded"].map((variant) => (
              <button
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
          <ReferrersList {...props} />
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
