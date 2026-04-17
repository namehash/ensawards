import { RelativeTime, ResolveAndDisplayIdentity, useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";

import { buildUnresolvedIdentity, getENSRootChainId } from "@ensnode/ensnode-sdk";

import { $ENS_TO_USDC_CONVERSION_RATE } from "@/../data/contract-naming-season-awards";
import type { ContractNamingSeasonAward } from "@/../data/contract-naming-season-awards/types";
import { getAdvocateDetailsUrl } from "@/components/atoms/cards/referrerCard/shared";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace";
import { currencyFormatter } from "@/utils/textModifications";

export interface ContractNamingSeasonAwardCardProps {
  distributedAward: ContractNamingSeasonAward;
}

const $ensFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
});

export const ContractNamingSeasonAwardCard = ({
  distributedAward,
}: ContractNamingSeasonAwardCardProps) => {
  const namespaceId = DEFAULT_ENS_NAMESPACE;
  const recipientIdentity = buildUnresolvedIdentity(
    distributedAward.depositedTo,
    namespaceId,
    getENSRootChainId(namespaceId),
  );

  const now = useNow({ timeToRefresh: secondsInMinute });

  const etherscanUrl = `https://etherscan.io/tx/${distributedAward.transactionHash}`;
  const depositedToDetailsUrl = getAdvocateDetailsUrl(distributedAward.depositedTo);

  const estimatedValueUSD = distributedAward.award * $ENS_TO_USDC_CONVERSION_RATE;

  const awardedContentWrapper = ({ children }: React.PropsWithChildren): React.ReactNode => (
    <a
      href={etherscanUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm leading-normal font-medium text-blue-600 hover:underline hover:underline-offset-[25%]"
    >
      {children}
    </a>
  );

  return (
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white">
      {/* Desktop: Deposited to */}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-3">
        <ResolveAndDisplayIdentity
          identity={recipientIdentity}
          namespaceId={namespaceId}
          withIdentifier={false}
          withAvatar={true}
          withTooltip={false}
          identityLinkDetails={{
            isExternal: false,
            link: depositedToDetailsUrl,
          }}
        />
        <div className="sm:min-w-[170px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
            Deposited to
          </p>
          <ResolveAndDisplayIdentity
            identity={recipientIdentity}
            namespaceId={namespaceId}
            withIdentifier={true}
            withAvatar={false}
            withTooltip={false}
            identityLinkDetails={{
              isExternal: false,
              link: depositedToDetailsUrl,
            }}
            className="font-medium sm:max-w-[170px] sm:overflow-x-auto"
          />
        </div>
      </div>

      {/* Mobile: Deposited to */}
      <div className="min-w-[120px] sm:hidden flex flex-row flex-nowrap justify-between items-start self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Deposited to
        </p>
        <ResolveAndDisplayIdentity
          identity={recipientIdentity}
          namespaceId={namespaceId}
          withIdentifier={true}
          withAvatar={true}
          withTooltip={false}
          identityLinkDetails={{
            isExternal: false,
            link: depositedToDetailsUrl,
          }}
          className="font-medium"
        />
      </div>

      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Project
        </p>
        <p className="text-sm leading-normal font-medium text-black max-sm:text-right">
          {distributedAward.project ? (
            distributedAward.project.link ? (
              <a
                href={distributedAward.project.link.toString()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:underline-offset-[25%]"
              >
                {distributedAward.project.name}
              </a>
            ) : (
              distributedAward.project.name
            )
          ) : (
            "-"
          )}
        </p>
      </div>

      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Award
        </p>
        <p className="text-sm leading-normal font-medium text-black max-sm:text-right">
          {$ensFormatter.format(distributedAward.award)} $ENS
        </p>
      </div>

      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Est. award value
        </p>
        <p className="text-sm leading-normal font-medium text-black max-sm:text-right">
          {currencyFormatter.format(estimatedValueUSD)} USD
        </p>
      </div>

      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Awarded
        </p>
        <RelativeTime
          timestamp={distributedAward.awardedAt}
          enforcePast={true}
          conciseFormatting={true}
          relativeTo={now}
          contentWrapper={awardedContentWrapper}
        />
      </div>
    </div>
  );
};
