import { ACCEPTANCE_TESTS } from "data/acceptance-tests";
import type { AcceptanceTest, AcceptanceTestSlug } from "data/acceptance-tests/types";

export const getAcceptanceTestBySlug = (slug: AcceptanceTestSlug): AcceptanceTest | undefined => {
  return ACCEPTANCE_TESTS.find((acceptanceTest) => acceptanceTest.acceptanceTestSlug === slug);
};
