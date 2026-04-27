import { AwardTypes } from "data/awards/types";
import { sortFinancialAwardsByPrice } from "data/awards/utils";
import EnsContractNamingSeason from "data/incentive-programs/ens-contract-naming-season";
import { getAwardsByIncentiveProgramSlug } from "data/incentive-programs/utils";
import { stringifyAccountId } from "enssdk";
import { useMemo } from "react";

import { createEnsNodeProviderOptions, EnsNodeProvider } from "@ensnode/ensnode-react";

import { ContractNamingSeasonAwardCard } from "@/components/atoms/cards/contractNamingSeasonAwardCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getENSNodeUrl } from "@/utils/env";

export interface AwardDistributionsListProps {
  listSize?: number;
}

const SORTED_FINANCIAL_AWARDS = [
  ...(getAwardsByIncentiveProgramSlug(EnsContractNamingSeason.incentiveProgramSlug)?.filter(
    (award) => award.type === AwardTypes.FinancialAward,
  ) ?? []),
].sort(sortFinancialAwardsByPrice);

export const AwardDistributionsList = ({ listSize }: AwardDistributionsListProps) => {
  const options = useMemo(() => createEnsNodeProviderOptions({ url: getENSNodeUrl() }), []);

  return (
    <EnsNodeProvider options={options}>
      <TooltipProvider delayDuration={250} skipDelayDuration={0}>
        <div className="w-full h-fit flex flex-col gap-2 justify-start items-center">
          {SORTED_FINANCIAL_AWARDS.slice(0, listSize).map((award) => (
            <ContractNamingSeasonAwardCard
              key={`${award.transaction.transactionHash}-${stringifyAccountId(award.awardedTo)}`}
              award={award}
            />
          ))}
        </div>
      </TooltipProvider>
    </EnsNodeProvider>
  );
};
