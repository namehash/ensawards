import {
  getBlockExplorerTransactionDetailsUrl,
  RelativeTime,
  ResolveAndDisplayIdentity,
  useIsMobile,
  useNow,
} from "@namehash/namehash-ui";
import { type AwardFinancial } from "data/awards/types";
import { ENS_TOKENS_TO_USDC_CONVERSION_RATE, ensTokenFormatter } from "data/shared/ensTokens";
import { secondsInMinute } from "date-fns/constants";
import { useCallback, useMemo } from "react";

import { buildUnresolvedIdentity } from "@ensnode/ensnode-sdk";

import { AwardedEntityField } from "@/components/atoms/cards/contractNamingSeasonAwardCard/AwardedEntityField";
import { getAdvocateDetailsUrl } from "@/components/atoms/cards/referrerCard/shared";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace";
import { usdFormatter } from "@/utils/textModifications";

export interface ContractNamingSeasonAwardCardProps {
  award: AwardFinancial;
}

export const ContractNamingSeasonAwardCard = ({ award }: ContractNamingSeasonAwardCardProps) => {
  const namespaceId = DEFAULT_ENS_NAMESPACE;

  const recipientIdentity = useMemo(
    () => buildUnresolvedIdentity(award.awardedTo.address, namespaceId, award.awardedTo.chainId),
    [award.awardedTo, namespaceId],
  );

  const now = useNow({ timeToRefresh: secondsInMinute });
  const isMobile = useIsMobile();

  const transactionUrl = getBlockExplorerTransactionDetailsUrl(
    award.transaction.chainId,
    award.transaction.transactionHash,
  );
  const awardedToDetailsUrl = getAdvocateDetailsUrl(award.awardedTo.address);

  const estimatedValueUSD = award.price * ENS_TOKENS_TO_USDC_CONVERSION_RATE;

  const awardedContentWrapper = useCallback(
    ({ children }: React.PropsWithChildren): React.ReactNode =>
      transactionUrl ? (
        <a
          href={transactionUrl.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm leading-normal font-medium text-blue-600 hover:underline hover:underline-offset-[25%]"
        >
          {children}
        </a>
      ) : (
        <span className="text-sm leading-normal font-medium text-black">{children}</span>
      ),
    [transactionUrl],
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

      <AwardedEntityField entity={award.awardedEntityMetadata} />

      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Award
        </p>
        <p className="text-sm leading-normal font-medium text-black max-sm:text-right">
          {ensTokenFormatter.format(award.price)} $ENS
        </p>
      </div>

      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Est. award value
        </p>
        <p className="text-sm leading-normal font-medium text-black max-sm:text-right">
          {usdFormatter.format(estimatedValueUSD)} USD
        </p>
      </div>

      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Awarded
        </p>
        <p className="h-[21px] leading-5">
          <RelativeTime
            timestamp={award.awardedAt}
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
