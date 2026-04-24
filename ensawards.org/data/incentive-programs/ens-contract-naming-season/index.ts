import { defineIncentiveProgram } from "data/incentive-programs/registry";
import { type IncentiveProgram, IncentiveProgramTypes } from "data/incentive-programs/types";

const EnsContractNamingSeason: IncentiveProgram = {
  type: IncentiveProgramTypes.AwardPool,
  incentiveProgramSlug: "ens-contract-naming-season",
  displayName: "ENS Contract Naming Season",
  description:
    "Elevate your protocol’s onchain identity! This 6-month ENS DAO-backed initiative rewards DAOs, protocols, and dApps who name their smart contracts.",
  totalAwardPool: 10000, // $ENS Tokens
};

defineIncentiveProgram(EnsContractNamingSeason);

export default EnsContractNamingSeason;
