import { CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS } from "data/contract-naming-season-awards";
import { sortContractNamingSeasonAwards } from "data/contract-naming-season-awards/utils";
import { useMemo } from "react";

import { createConfig, ENSNodeProvider } from "@ensnode/ensnode-react";

import { ContractNamingSeasonAwardCard } from "@/components/atoms/cards/ContractNamingSeasonAwardCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getENSNodeUrl } from "@/utils/env";

export interface AwardDistributionsListProps {
  listSize?: number;
}

const SORTED_DISTRIBUTED_AWARDS = [...CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS].sort(
  sortContractNamingSeasonAwards,
);

export const AwardDistributionsList = ({ listSize }: AwardDistributionsListProps) => {
  const config = useMemo(() => createConfig({ url: getENSNodeUrl() }), []);

  return (
    <ENSNodeProvider config={config}>
      <TooltipProvider delayDuration={250} skipDelayDuration={0}>
        <div className="w-full h-fit flex flex-col gap-2 justify-start items-center">
          {SORTED_DISTRIBUTED_AWARDS.slice(0, listSize).map((award) => (
            <ContractNamingSeasonAwardCard
              key={`${award.transactionHash}-${award.depositedTo}`}
              distributedAward={award}
            />
          ))}
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
};
