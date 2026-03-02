import { ResolveAndDisplayIdentity } from "@namehash/namehash-ui";
import type { AppBenchmark } from "data/apps/benchmarks-types";
import type { Contributor } from "data/contributors/types";
import { countContributorAppearances } from "data/contributors/utils";
import type { BestPractice } from "data/ens-best-practices/types";
import type { Contract } from "data/protocols/contracts-types";
import type { Protocol } from "data/protocols/types";

import { createConfig, ENSNodeProvider } from "@ensnode/ensnode-react";
import { buildUnresolvedIdentity } from "@ensnode/ensnode-sdk";

import { GenericTooltip } from "@/components/atoms/GenericTooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getEnsAdvocateDetailsRelativePath, getEnsAwardsBaseUrl } from "@/utils";
import { openSuggestionOverlay } from "@/utils/domActions";
import { getENSNodeUrl } from "@/utils/env";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";

import GitHubOutlineIcon from "../../../assets/githubOutlineIcon.svg";
import { cn } from "../../../utils/tailwindClassConcatenation";
import { getSuggestionText } from "../../../utils/textModifications";
import { type PossibleSuggestions } from "../../molecules/contact-form/types";
import { shadcnButtonVariants } from "../../ui/shadcnButtonStyles";

export interface SuggestionCardProps {
  whatsSuggested: PossibleSuggestions;
  dataCollection: AppBenchmark[] | Contract[] | BestPractice[] | Protocol[]; //TODO: This list might be extended in the future, depending on the type of suggestions we want to enable. Consider refactoring if it gets too long or complicated.
  gitHubTargetHref?: string;
}

export const SuggestionCard = ({
  whatsSuggested,
  dataCollection,
  gitHubTargetHref = "https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md",
}: SuggestionCardProps) => {
  const ensNodeReactConfig = createConfig({
    url: getENSNodeUrl(),
  });

  const rawContributorProfiles = dataCollection.map((item) => item.contributors).flat();
  const orderedContributorProfiles = Array.from(
    countContributorAppearances(rawContributorProfiles).entries(),
  )
    .sort((a, b) => b[1] - a[1]) // Sort by number of appearances
    .map(([contributor]) => contributor);

  return (
    <ENSNodeProvider config={ensNodeReactConfig}>
      <TooltipProvider delayDuration={250} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] h-fit flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-start p-4 sm:px-[21px] sm:py-[17px] rounded-2xl border border-gray-200 bg-white">
          <div className="w-full flex-1 min-w-0">
            <div className="w-full flex flex-col gap-1">
              <h4 className="text-lg leading-7 font-semibold text-slate-800">Contributors</h4>
              <p className="text-base leading-6 font-normal text-muted-foreground">
                {getSuggestionText(whatsSuggested)}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[560px] flex flex-col gap-4">
            <div className="flex flex-wrap items-start gap-3 py-1.5">
              {orderedContributorProfiles.map((profile, idx) => {
                const identity = buildUnresolvedIdentity(
                  profile.address,
                  DEFAULT_ENS_NAMESPACE,
                  profile.chainId,
                );

                // TODO: The Figma design for the tooltip seems to be outdated. Ask about a new version
                const tooltipContent = (
                  <ResolveAndDisplayIdentity
                    identity={identity}
                    namespaceId={DEFAULT_ENS_NAMESPACE}
                    withLink={true}
                    withTooltip={false}
                    withAvatar={true}
                    identityLinkDetails={{
                      isExternal: false,
                      link: new URL(
                        getEnsAdvocateDetailsRelativePath(identity.address),
                        getEnsAwardsBaseUrl(),
                      ),
                    }}
                    className="text-blue-400 hover:underline hover:underline-offset-[25%]"
                  />
                );
                return (
                  <GenericTooltip
                    key={`contributor-${idx}`}
                    content={tooltipContent}
                    tooltipOffset={1}
                  >
                    <ResolveAndDisplayIdentity
                      identity={identity}
                      namespaceId={DEFAULT_ENS_NAMESPACE}
                      withLink={true}
                      withTooltip={false}
                      withAvatar={true}
                      withIdentifier={false}
                      identityLinkDetails={{
                        isExternal: false,
                        link: new URL(
                          getEnsAdvocateDetailsRelativePath(identity.address),
                          getEnsAwardsBaseUrl(),
                        ),
                      }}
                      className="text-blue-400 hover:underline hover:underline-offset-[25%]"
                    />
                  </GenericTooltip>
                );
              })}
            </div>

            <div className="w-full h-px bg-border"></div>

            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
              <p className="text-base leading-6 font-normal text-muted-foreground">
                Submit a contribution
              </p>
              <div className="flex flex-col-reverse sm:flex-row items-center gap-2 max-sm:self-stretch">
                <button
                  onClick={() => openSuggestionOverlay(whatsSuggested)}
                  className={cn(
                    shadcnButtonVariants({
                      variant: "ghost",
                      size: "default",
                      className: "cursor-pointer rounded-full max-sm:self-stretch",
                    }),
                  )}
                >
                  Contact us
                </button>
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
    </ENSNodeProvider>
  );
};
