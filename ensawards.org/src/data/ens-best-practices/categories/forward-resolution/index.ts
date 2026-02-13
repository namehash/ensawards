import type { BestPracticeCategory } from "@/types/bestPractices.ts";
import { CategoryStatus } from "@/types/bestPractices.ts";

export const ForwardResolutionCategory: BestPracticeCategory = {
  id: "forward-resolution",
  slug: "forward-resolution",
  name: "Forward Resolution",
  description:
    "Lookup the details of an ENS name, such as its onchain addresses, avatar image, social records, and decentralized website.",
  status: CategoryStatus.ComingSoon,
  bestPractices: [
    //   recognizeAllENSNames
  ],
};
