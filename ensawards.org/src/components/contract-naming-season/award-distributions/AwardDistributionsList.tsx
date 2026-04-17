import { CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS } from "data/contract-naming-season-awards";
import { sortContractNamingSeasonAwards } from "data/contract-naming-season-awards/utils";
import { useMemo } from "react";

import { createConfig, ENSNodeProvider } from "@ensnode/ensnode-react";

import { ContractNamingSeasonAwardCard } from "@/components/atoms/cards/ContractNamingSeasonAwardCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getENSNodeUrl } from "@/utils/env";

export interface DistributedAwardsListProps {
  listSize?: number;
}

export const AwardDistributionsList = ({ listSize }: DistributedAwardsListProps) => {
  const config = useMemo(() => createConfig({ url: getENSNodeUrl() }), []);

  const sortedDistributedAwards = [...CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS].sort(
    sortContractNamingSeasonAwards,
  );

  return (
    <ENSNodeProvider config={config}>
      <TooltipProvider delayDuration={250} skipDelayDuration={0}>
        <div className="w-full h-fit flex flex-col gap-2 justify-start items-center">
          {sortedDistributedAwards.slice(0, listSize).map((award, index) => (
            <ContractNamingSeasonAwardCard
              key={`contract-naming-season-distributed-award-${index}`}
              distributedAward={award}
            />
          ))}
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
};
