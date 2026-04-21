import { AWARDS } from "data/awards";
import { AwardTypes } from "data/awards/types";
import { sortFinancialAwards } from "data/awards/utils";
import EnsContractNamingSeason from "data/incentive-programs/ens-contract-naming-season";
import { useMemo } from "react";

import { createConfig, ENSNodeProvider } from "@ensnode/ensnode-react";

import { ContractNamingSeasonAwardCard } from "@/components/atoms/cards/contractNamingSeasonAwardCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getENSNodeUrl } from "@/utils/env";

export interface AwardDistributionsListProps {
  listSize?: number;
}

const SORTED_DISTRIBUTED_AWARDS = [
  ...(AWARDS.get(EnsContractNamingSeason.incentiveProgramSlug)?.filter(
    (award) => award.type === AwardTypes.FinancialAward,
  ) ?? []),
].sort(sortFinancialAwards);

export const AwardDistributionsList = ({ listSize }: AwardDistributionsListProps) => {
  const config = useMemo(() => createConfig({ url: getENSNodeUrl() }), []);

  return (
    <ENSNodeProvider config={config}>
      <TooltipProvider delayDuration={250} skipDelayDuration={0}>
        <div className="w-full h-fit flex flex-col gap-2 justify-start items-center">
          {SORTED_DISTRIBUTED_AWARDS.slice(0, listSize).map((award) => (
            <ContractNamingSeasonAwardCard
              key={`${award.chainId}-${award.transactionHash}-${award.awardedTo}`}
              distributedAward={award}
            />
          ))}
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
};
