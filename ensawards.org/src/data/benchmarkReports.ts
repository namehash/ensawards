/**
 *  TODO: Merge this into apps.ts instead of requiring a separate file.
 *  Figure out a better data model.
 */
import { APPS } from "@/data/apps.ts";
import { benchmarkers } from "@/data/benchmarkers.ts";
import {
  displayNamedSmartContractsL2,
  displayNamedSmartContractsMainnet,
} from "@/data/bestPractices.ts";
import { toUnixTimestamp } from "@/types/apps.ts";
import type { BenchmarkReport } from "@/types/benchmarkReports.ts";

/**
 * Sample benchmark reports for demonstration.
 * TODO: Move content into dedicated markdown folder
 */
export const BENCHMARK_REPORTS: BenchmarkReport[] = [
  {
    id: "rainbow-wallet-smart-contracts-mainnet",
    slug: "rainbow-wallet-smart-contracts-mainnet",
    app: APPS.find((app) => app.id === "rainbow-wallet")!,
    bestPractice: displayNamedSmartContractsMainnet,
    benchmark: APPS.find((app) => app.id === "rainbow-wallet")!.benchmarks.find(
      (b) => b.bestPractice.id === "display-named-smart-contracts-mainnet",
    )!,
    author: benchmarkers.stevedylandev,
    createdAt: toUnixTimestamp("2025-12-11T14:05:59.420Z"),
    lastUpdatedAt: toUnixTimestamp("2025-12-11T14:05:59.420Z"),
    content: {
      introduction:
        "Aliquip Lorem fugiat labore deserunt laborum ex do anim mollit veniam adipisicing et voluptate. Minim proident cillum aliquip enim tempor fugiat ex ex sit labore irure aute sit. Irure cupidatat elit voluptate consectetur eu eiusmod reprehenderit cupidatat ut ullamco aute in.",
      sections: [
        {
          heading: "Testing Methodology",
          content:
            "Occaecat aliquip aute mollit do do quis velit aute sit aliqua aliquip nisi. Occaecat excepteur sit non sit consequat duis amet laborum. Deserunt duis sunt fugiat est aliquip aute ad Lorem excepteur incididunt excepteur. Aliqua id in amet velit proident ad et deserunt laborum enim adipisicing aute ipsum.",
          images: [
            {
              src: "/src/assets/benchmarks/contract-naming-rainbow-mainnet-1.png",
              alt: "Rainbow Wallet testing methodology screenshot",
              caption: "Example of testing setup with named smart contracts",
            },
          ],
        },
        {
          heading: "Results Analysis",
          content:
            "Non minim tempor laboris. Sint in nulla ea deserunt do magna laboris consectetur id labore amet Lorem esse enim. Esse consequat esse incididunt ea laborum laboris minim ipsum in incididunt in. Elit laborum dolore id aliqua ad duis consectetur pariatur. Officia magna magna exercitation voluptate quis culpa cupidatat nulla laboris et excepteur laborum incididunt quis. Et et sit laborum ipsum adipisicing proident Lorem do.",
        },
        {
          heading: "Technical Implementation",
          content:
            "Laboris duis cillum amet eu occaecat consectetur cillum nulla nulla magna proident. Esse id voluptate sunt consequat Lorem incididunt labore. Fugiat do ea ut aliquip excepteur duis irure anim dolor veniam enim. Id laboris reprehenderit velit pariatur proident. Aute ea tempor laborum ullamco. Aliquip eu excepteur officia aliquip commodo qui ea excepteur. Excepteur velit consectetur labore do duis laborum proident aliqua deserunt excepteur sint. Aliqua eiusmod officia enim non officia quis ea officia adipisicing eiusmod aute labore.",
        },
      ],
      conclusion:
        "Eiusmod eiusmod nulla cupidatat proident esse qui. Quis eu est occaecat anim mollit qui deserunt sint est ullamco labore laborum occaecat. Ipsum ex eiusmod quis irure voluptate irure cillum. Tempor incididunt proident ipsum esse eiusmod amet non aute. Nisi in duis ea Lorem laborum proident do fugiat. Occaecat laborum adipisicing cillum officia tempor pariatur nulla aliqua in esse sunt ad officia magna.",
    },
    meta: {
      title: "Rainbow Wallet - ENS Smart Contract Display Report",
      description:
        "Detailed benchmark report on Rainbow Wallet's implementation of ENS name display for smart contracts on Ethereum mainnet.",
      ogImagePath: "/benchmark-reports/rainbow-wallet-mainnet-og.png",
      twitterOgImagePath: "/benchmark-reports/rainbow-wallet-mainnet-twitter.png",
    },
  },
];

/**
 * Helper function to get a benchmark report by its slug.
 */
export function getBenchmarkReportBySlug(slug: string): BenchmarkReport | undefined {
  return BENCHMARK_REPORTS.find((report) => report.slug === slug);
}

/**
 * Helper function to get all benchmark reports for a specific app.
 */
export function getBenchmarkReportsByAppSlug(appSlug: string): BenchmarkReport[] {
  return BENCHMARK_REPORTS.filter((report) => report.app.slug === appSlug);
}

/**
 * Helper function to get all benchmark reports for a specific best practice.
 */
export function getBenchmarkReportsByBestPracticeSlug(bestPracticeSlug: string): BenchmarkReport[] {
  return BENCHMARK_REPORTS.filter((report) => report.bestPractice.slug === bestPracticeSlug);
}
