import { ResolveAndDisplayIdentity } from "@namehash/namehash-ui";
import type { Contribution, Contributor } from "data/contributors/types";
import { countContributorAppearances } from "data/contributors/utils";
import { User as NoContributionsIcon } from "lucide-react";
import { useMemo } from "react";
import { getAddress } from "viem";

import { createEnsNodeProviderOptions, EnsNodeProvider } from "@ensnode/ensnode-react";
import { buildUnresolvedIdentity, type UnresolvedIdentity } from "@ensnode/ensnode-sdk";

import GitHubOutlineIcon from "@/assets/githubOutlineIcon.svg";
import { GenericTooltip } from "@/components/atoms/GenericTooltip";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getEnsAdvocateDetailsRelativePath, getEnsAwardsBaseUrl } from "@/utils";
import { getENSNodeUrl } from "@/utils/env";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { cn } from "@/utils/tailwindClassConcatenation";

import { shadcnButtonVariants } from "../../ui/shadcnButtonStyles";

const orderContributorsByAppearances = (contributors: Contributor[]): Contributor[] => {
  const appearancesMap = countContributorAppearances(contributors);
  return Array.from(appearancesMap.values())
    .sort((a, b) => b.count - a.count) // Sort by number of appearances
    .map(({ contributor }) => contributor);
};

const formatContributionType = (contributionType: ContributionType): string => {
  switch (contributionType) {
    case ContributionTypes.App:
    case ContributionTypes.Protocol:
      return "leaderboards";

    case ContributionTypes.Contract:
      return "smart contracts";

    case ContributionTypes.BestPractice:
      return "ENS best practices";

    case ContributionTypes.BenchmarkResult:
      return "benchmarks";

    default:
      const _exhaustive: never = contributionType;
      throw new Error(`Unsupported ContributionType: ${_exhaustive}`);
  }
};

export const ContributionTypes = {
  App: "app",
  BestPractice: "best-practice",
  BenchmarkResult: "benchmark-result",
  Protocol: "protocol",
  Contract: "contract",
} as const;

/**
 * Contribution types that can be surfaced by the {@link ContributorsCard}.
 *
 * Identifies a type of entity on ENS Awards that users can be
 * encouraged to suggest updates for.
 */
export type ContributionType = (typeof ContributionTypes)[keyof typeof ContributionTypes];

export interface ContributorsCardProps {
  contributionType: ContributionType;
  existingContributions: Contribution[];
  gitHubTargetHref?: string;
  sidebarVariant?: boolean;
}

export const ContributorsCard = ({
  contributionType,
  existingContributions,
  gitHubTargetHref = "https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md",
  sidebarVariant = false,
}: ContributorsCardProps) => {
  const ensNodeProviderOptions = useMemo(
    () =>
      createEnsNodeProviderOptions({
        url: getENSNodeUrl(),
      }),
    [],
  );

  const orderedContributorProfiles = useMemo(
    () =>
      orderContributorsByAppearances(
        existingContributions.map((contribution) => contribution.from),
      ),
    [existingContributions],
  );

  return (
    <EnsNodeProvider options={ensNodeProviderOptions}>
      <TooltipProvider delayDuration={250} skipDelayDuration={0}>
        <div
          className={cn(
            "w-full max-w-[1216px] h-fit flex flex-col gap-3 sm:gap-5 p-4 sm:px-5 sm:py-4 rounded-2xl border border-gray-200 bg-white",
            !sidebarVariant && "lg:flex-row lg:justify-between lg:items-start",
          )}
        >
          <div className="w-full flex-1 min-w-0">
            <div className="w-full flex flex-col gap-1">
              <h4 className="text-lg leading-7 font-semibold text-slate-800">Contributors</h4>
              <p className="text-base leading-6 font-normal text-muted-foreground">
                All {formatContributionType(contributionType)} on ENSAwards are open for public
                contribution.
              </p>
            </div>
          </div>

          <div className={cn("w-full flex flex-col gap-3 sm:gap-4", !sidebarVariant && "lg:w-1/2")}>
            <div className="flex flex-wrap items-start gap-3 py-1.5">
              {orderedContributorProfiles.length === 0 ? (
                <div className="w-full flex flex-col justify-center items-center gap-3 py-3">
                  <NoContributionsIcon size={24} className="text-muted-foreground" />
                  <p className="text-base text-muted-foreground leading-normal font-normal">
                    No contributions yet
                  </p>
                </div>
              ) : (
                orderedContributorProfiles.map((profile) => {
                  const identity = buildUnresolvedIdentity(
                    profile.address,
                    DEFAULT_ENS_NAMESPACE,
                    profile.chainId,
                  );

                  return (
                    <GenericTooltip
                      key={`contributor-${profile.chainId}-${getAddress(profile.address)}`}
                      triggerAsChild
                      content={
                        <ContributorTooltipContent contributor={profile} identity={identity} />
                      }
                      tooltipOffset={1}
                    >
                      <div className="w-10 h-10 rounded-full">
                        <ResolveAndDisplayIdentity
                          identity={identity}
                          namespaceId={DEFAULT_ENS_NAMESPACE}
                          withLink={true}
                          identityLinkDetails={{
                            isExternal: false,
                            link: new URL(
                              getEnsAdvocateDetailsRelativePath(profile.address),
                              getEnsAwardsBaseUrl(),
                            ),
                          }}
                          withTooltip={false}
                          withAvatar={true}
                          withIdentifier={false}
                        />
                      </div>
                    </GenericTooltip>
                  );
                })
              )}
            </div>

            <div className="w-full h-px bg-border"></div>

            <div
              className={cn(
                "w-full flex flex-col gap-3",
                !sidebarVariant && "sm:flex-row sm:justify-between sm:items-center",
              )}
            >
              <p className="text-base leading-6 font-normal text-muted-foreground">
                Submit a contribution
              </p>
              <div className="flex flex-row-reverse sm:flex-row justify-end sm:justify-start items-center gap-2 max-sm:self-stretch">
                <a
                  href={gitHubTargetHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    shadcnButtonVariants({
                      variant: "secondary",
                      size: "default",
                      className: "cursor-pointer rounded-full max-sm:self-stretch",
                    }),
                  )}
                >
                  <img src={GitHubOutlineIcon.src} alt="GitHub icon" />
                  Edit on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </EnsNodeProvider>
  );
};

interface ContributorTooltipContentProps {
  contributor: Contributor;
  identity: UnresolvedIdentity;
}

const ContributorTooltipContent = ({ contributor, identity }: ContributorTooltipContentProps) => {
  return (
    <div className="w-full flex flex-row justify-start items-center py-1.5 gap-3">
      <ResolveAndDisplayIdentity
        identity={identity}
        namespaceId={DEFAULT_ENS_NAMESPACE}
        withLink={false}
        withTooltip={false}
        withAvatar={true}
        withIdentifier={false}
      />
      <div className="flex flex-col justify-start items-start gap-0.5">
        <ResolveAndDisplayIdentity
          identity={identity}
          namespaceId={DEFAULT_ENS_NAMESPACE}
          withLink={false}
          withTooltip={false}
          withAvatar={false}
          className="text-sm text-white leading-normal font-semibold hover:no-underline cursor-default"
        />
        <a
          href={getEnsAdvocateDetailsRelativePath(contributor.address)}
          className="text-xs leading-normal text-blue-500 font-normal hover:underline hover:underline-offset-[25%]"
        >
          View ENS Advocate profile
        </a>
      </div>
    </div>
  );
};

export const ContributorsCardLoading = ({
  contributionType,
  sidebarVariant = false,
}: Omit<ContributorsCardProps, "gitHubTargetHref" | "existingContributions">) => {
  const loadingStyles = "animate-pulse bg-gray-200";
  return (
    <div
      className={cn(
        "w-full max-w-[1216px] h-fit flex flex-col gap-3 sm:gap-5 p-4 sm:px-5 sm:py-4 rounded-2xl border border-gray-200 bg-white",
        !sidebarVariant && "lg:flex-row lg:justify-between lg:items-start",
      )}
    >
      <div className="w-full flex-1 min-w-0">
        <div className="w-full flex flex-col gap-1">
          <h4 className="text-lg leading-7 font-semibold text-slate-800">Contributors</h4>
          <p className="text-base leading-6 font-normal text-muted-foreground">
            All {formatContributionType(contributionType)} on ENSAwards are open for public
            contribution.
          </p>
        </div>
      </div>

      <div className={cn("w-full flex flex-col gap-3 sm:gap-4", !sidebarVariant && "lg:w-1/2")}>
        <div className="flex flex-wrap items-start gap-3 py-1.5">
          <Skeleton className={cn(loadingStyles, "w-10 h-10 rounded-full")} />
          <Skeleton className={cn(loadingStyles, "w-10 h-10 rounded-full")} />
          <Skeleton className={cn(loadingStyles, "w-10 h-10 rounded-full")} />
        </div>

        <div className="w-full h-px bg-border"></div>

        <div
          className={cn(
            "w-full flex flex-col gap-3",
            !sidebarVariant && "sm:flex-row sm:justify-between sm:items-center",
          )}
        >
          <p className="text-base leading-6 font-normal text-muted-foreground">
            Submit a contribution
          </p>
          <div className="flex flex-row-reverse sm:flex-row justify-end sm:justify-start items-center gap-2 max-sm:self-stretch">
            <Skeleton
              className={cn(loadingStyles, "w-[154px] h-[36px] rounded-full max-sm:self-stretch")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
