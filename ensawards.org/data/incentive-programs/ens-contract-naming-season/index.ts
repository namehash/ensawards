import { defineIncentiveProgram } from "data/incentive-programs/registry";
import type { IncentiveProgram } from "data/incentive-programs/types";

const EnsContractNamingSeason: IncentiveProgram = {
  incentiveProgramSlug: "ens-contract-naming-season",
  displayName: "ENS Contract Naming Season",
  description:
    "Elevate your protocol’s onchain identity! This 6-month ENS DAO-backed initiative rewards DAOs, protocols, and dApps who name their smart contracts.",
  totalAwardPool: 10000,
};

defineIncentiveProgram(EnsContractNamingSeason);

export default EnsContractNamingSeason;
