// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying best practices

import { ContractNamingCategory } from "./contract-naming";
import { displayNamedSmartContractsL2 } from "./contract-naming/display-named-smart-contracts-l2-chains.ts";
import { displayNamedSmartContractsMainnet } from "./contract-naming/display-named-smart-contracts-mainnet.ts";
import { nameYourSmartContracts } from "./contract-naming/name-your-smart-contracts.ts";
import { DisplayProfilesCategory } from "./display-profiles";
import { ForwardResolutionCategory } from "./forward-resolution";
import { ManageNamesCategory } from "./manage-names";
import { RegisterNamesCategory } from "./register-names";
import { RenewNamesCategory } from "./renew-names";
import { ReverseResolutionCategory } from "./reverse-resolution";
import { type BestPractice, type BestPracticeCategory } from "./types.ts";

export const ENS_BEST_PRACTICES: BestPractice[] = [
  nameYourSmartContracts,
  displayNamedSmartContractsMainnet,
  displayNamedSmartContractsL2,
];

export const BEST_PRACTICE_CATEGORIES: BestPracticeCategory[] = [
  ContractNamingCategory,
  ForwardResolutionCategory,
  ReverseResolutionCategory,
  DisplayProfilesCategory,
  RegisterNamesCategory,
  RenewNamesCategory,
  ManageNamesCategory,
];
