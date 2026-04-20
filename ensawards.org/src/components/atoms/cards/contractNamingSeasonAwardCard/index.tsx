import {
  RelativeTime,
  ResolveAndDisplayIdentity,
  useIsMobile,
  useNow,
} from "@namehash/namehash-ui";
import { $ENS_TO_USDC_CONVERSION_RATE, type AwardMoneyPrize } from "data/awards/types";
import { $ensFormatter } from "data/awards/utils";
import { secondsInMinute } from "date-fns/constants";
import { useMemo } from "react";

import { buildUnresolvedIdentity, getENSRootChainId } from "@ensnode/ensnode-sdk";

import { AwardedProjectField } from "@/components/atoms/cards/contractNamingSeasonAwardCard/AwardedProjectField";
import { getAdvocateDetailsUrl } from "@/components/atoms/cards/referrerCard/shared";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace";
import { currencyFormatter } from "@/utils/textModifications";

export interface ContractNamingSeasonAwardCardProps {
  distributedAward: AwardMoneyPrize;
}

export const ContractNamingSeasonAwardCard = ({
  distributedAward,
}: ContractNamingSeasonAwardCardProps) => {
  const namespaceId = DEFAULT_ENS_NAMESPACE;
  const recipientIdentity = useMemo(
    () =>
      buildUnresolvedIdentity(
        distributedAward.awardedTo,
        namespaceId,
        getENSRootChainId(namespaceId),
      ),
    [distributedAward.awardedTo, namespaceId],
  );

  const now = useNow({ timeToRefresh: secondsInMinute });
  const isMobile = useIsMobile();

  const etherscanUrl = `https://etherscan.io/tx/${distributedAward.transactionHash}`;
  const awardedToDetailsUrl = getAdvocateDetailsUrl(distributedAward.awardedTo);

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
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-5 sm:pb-4 sm:gap-y-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white">
      <div className="w-full sm:w-fit flex flex-nowrap flex-row justify-between sm:justify-start items-center gap-3">
        <div className="w-10 h-10 hidden sm:block">
          <ResolveAndDisplayIdentity
            identity={recipientIdentity}
            namespaceId={namespaceId}
            withIdentifier={false}
            withAvatar={true}
            withTooltip={false}
            identityLinkDetails={{
              isExternal: false,
              link: awardedToDetailsUrl,
            }}
          />
        </div>
        <div className="min-w-[120px] sm:min-w-[170px] w-full sm:w-fit flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default text-left">
            Deposited to
          </p>
          <ResolveAndDisplayIdentity
            identity={recipientIdentity}
            namespaceId={namespaceId}
            withIdentifier={true}
            withAvatar={isMobile}
            withTooltip={false}
            identityLinkDetails={{
              isExternal: false,
              link: awardedToDetailsUrl,
            }}
            className="font-medium sm:max-w-[170px] sm:overflow-x-auto"
          />
        </div>
      </div>

      <AwardedProjectField project={distributedAward.project} />

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
        <p className="h-[21px] leading-5">
          <RelativeTime
            timestamp={distributedAward.awardedAt}
            enforcePast={true}
            conciseFormatting={true}
            relativeTo={now}
            contentWrapper={awardedContentWrapper}
          />
        </p>
      </div>
    </div>
  );
};
