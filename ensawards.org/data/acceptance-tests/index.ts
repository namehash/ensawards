import { ENS_BEST_PRACTICES } from "data/ens-best-practices";

export const ACCEPTANCE_TESTS = [
  ...ENS_BEST_PRACTICES.flatMap((bestPractice) => bestPractice.technicalDetails.acceptanceTests),
];
