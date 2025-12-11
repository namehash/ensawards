import { APPS } from "@/data/apps.ts";
import { benchmarkers } from "@/data/benchmarkers.ts";
import {
  displayNamedSmartContractsMainnet,
  displayNamedSmartContractsL2,
} from "@/data/bestPractices.ts";
import type { BenchmarkReport } from "@/types/benchmarkReports.ts";
import { toUnixTimestamp } from "@/types/apps.ts";

/**
 * Sample benchmark reports for demonstration.
 * In production, these would likely come from a database or CMS.
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
    createdAt: toUnixTimestamp("2025-12-08T18:19:28.672Z"),
    lastUpdatedAt: toUnixTimestamp("2025-12-08T18:19:28.672Z"),
    content: {
      introduction:
        "This report evaluates Rainbow Wallet's implementation of ENS name display for smart contracts on Ethereum mainnet. The assessment examines whether the wallet shows ENS names instead of hexadecimal addresses when users interact with named smart contracts.",
      sections: [
        {
          heading: "Testing Methodology",
          content:
            "To test Rainbow Wallet's ENS name display functionality, I conducted a comprehensive evaluation using known smart contracts with established ENS names. The testing process involved interacting with popular DeFi protocols, including Uniswap (uniswap.eth), OpenSea (opensea.eth), and Compound (compound.eth). I examined transaction displays, contract interaction screens, and address representations throughout the wallet interface.",
          images: [
            {
              src: "/src/assets/rainbow-testing-methodology.png",
              alt: "Rainbow Wallet testing methodology screenshot",
              caption: "Example of testing setup with named smart contracts",
            },
          ],
        },
        {
          heading: "Results Analysis",
          content:
            "Rainbow Wallet consistently displays ENS names for smart contracts that have properly configured reverse resolution. When interacting with uniswap.eth, the wallet correctly shows 'uniswap.eth' instead of the raw contract address '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'. This implementation enhances user confidence and security by making contract interactions more readable and trustworthy.",
          images: [
            {
              src: "/src/assets/rainbow-ens-display.png",
              alt: "Rainbow Wallet showing ENS names",
              caption:
                "Rainbow Wallet correctly displaying uniswap.eth instead of the contract address",
            },
          ],
        },
        {
          heading: "Technical Implementation",
          content:
            "The implementation appears to use proper ENS reverse resolution lookup, checking for primary names set on contract addresses. The wallet queries the ENS registry for reverse records and displays the resolved name when available. Fallback behavior correctly shows the contract address when no ENS name is configured, maintaining functionality for unnamed contracts.",
        },
      ],
      conclusion:
        "Rainbow Wallet successfully implements ENS name display for smart contracts on Ethereum mainnet. The feature works reliably across different contract types and provides clear, user-friendly contract identification. This implementation significantly improves the user experience and security of smart contract interactions.",
    },
    meta: {
      title: "Rainbow Wallet - ENS Smart Contract Display Report",
      description:
        "Detailed benchmark report on Rainbow Wallet's implementation of ENS name display for smart contracts on Ethereum mainnet.",
      ogImagePath: "/benchmark-reports/rainbow-wallet-mainnet-og.png",
      twitterOgImagePath: "/benchmark-reports/rainbow-wallet-mainnet-twitter.png",
    },
  },
  {
    id: "rainbow-wallet-smart-contracts-l2",
    slug: "rainbow-wallet-smart-contracts-l2",
    app: APPS.find((app) => app.id === "rainbow-wallet")!,
    bestPractice: displayNamedSmartContractsL2,
    benchmark: APPS.find((app) => app.id === "rainbow-wallet")!.benchmarks.find(
      (b) => b.bestPractice.id === "display-named-smart-contracts-l2-chains",
    )!,
    author: benchmarkers.stevedylandev,
    createdAt: toUnixTimestamp("2025-12-08T18:19:28.672Z"),
    lastUpdatedAt: toUnixTimestamp("2025-12-08T18:19:28.672Z"),
    content: {
      introduction:
        "This report evaluates Rainbow Wallet's implementation of ENS name display for smart contracts on Layer 2 networks. The assessment focuses on ENSIP-19 compliance and chain-specific primary name resolution.",
      sections: [
        {
          heading: "Testing Approach",
          content:
            "Testing was conducted across multiple L2 networks including Arbitrum, Optimism, and Base. I examined how Rainbow Wallet handles contracts with chain-specific ENS names versus those with only mainnet primary names. The evaluation included testing contracts that implement ENSIP-19 chain-specific naming as well as contracts relying on mainnet fallback resolution.",
          images: [
            {
              src: "/src/assets/rainbow-l2-testing.png",
              alt: "L2 testing setup in Rainbow Wallet",
              caption: "Testing Rainbow Wallet with L2 smart contracts",
            },
          ],
        },
        {
          heading: "Identified Limitations",
          content:
            "Rainbow Wallet currently does not implement ENSIP-19 chain-specific primary name resolution. When interacting with contracts on L2 networks, the wallet fails to check for chain-specific ENS names and does not fall back to mainnet primary names. This results in displaying raw contract addresses even when ENS names are available, reducing user experience and security benefits.",
          images: [
            {
              src: "/src/assets/rainbow-l2-limitation.png",
              alt: "Rainbow Wallet showing addresses instead of ENS names on L2",
              caption:
                "Rainbow Wallet displaying contract address instead of available ENS name on Arbitrum",
            },
          ],
        },
        {
          heading: "Recommended Implementation",
          content:
            "To achieve compliance with ENS best practices, Rainbow Wallet should implement ENSIP-19 support. This involves first checking for chain-specific primary names on the current L2 network, then falling back to mainnet primary name resolution if no chain-specific name exists. Libraries like Viem and ensnode-sdk provide built-in ENSIP-19 support that could be integrated into the wallet's contract interaction flows.",
        },
      ],
      conclusion:
        "Rainbow Wallet does not currently support ENS name display for smart contracts on L2 networks. Implementing ENSIP-19 would significantly improve user experience and security when interacting with named contracts across the multi-chain ecosystem.",
    },
    meta: {
      title: "Rainbow Wallet - L2 ENS Smart Contract Display Report",
      description:
        "Detailed benchmark report on Rainbow Wallet's L2 implementation of ENS name display for smart contracts.",
      ogImagePath: "/benchmark-reports/rainbow-wallet-l2-og.png",
      twitterOgImagePath: "/benchmark-reports/rainbow-wallet-l2-twitter.png",
    },
  },
  {
    id: "metamask-smart-contracts-mainnet",
    slug: "metamask-smart-contracts-mainnet",
    app: APPS.find((app) => app.id === "metamask")!,
    bestPractice: displayNamedSmartContractsMainnet,
    benchmark: APPS.find((app) => app.id === "metamask")!.benchmarks.find(
      (b) => b.bestPractice.id === "display-named-smart-contracts-mainnet",
    )!,
    author: benchmarkers.stevedylandev,
    createdAt: toUnixTimestamp("2025-12-08T18:24:39.561Z"),
    lastUpdatedAt: toUnixTimestamp("2025-12-08T18:24:39.561Z"),
    content: {
      introduction:
        "This report evaluates MetaMask's implementation of ENS name display for smart contracts on Ethereum mainnet. MetaMask has been a pioneer in ENS integration and this assessment examines their current implementation quality.",
      sections: [
        {
          heading: "Comprehensive Testing",
          content:
            "MetaMask was tested with a diverse range of smart contracts including DeFi protocols, NFT marketplaces, and governance contracts. The evaluation covered transaction confirmation screens, contract interaction interfaces, and address display throughout the wallet. Notable contracts tested included ens.eth, uniswap.eth, compound.eth, and aave.eth.",
          images: [
            {
              src: "/src/assets/metamask-testing.png",
              alt: "MetaMask testing with various smart contracts",
              caption: "Testing MetaMask with multiple named smart contracts",
            },
          ],
        },
        {
          heading: "Excellent Implementation",
          content:
            "MetaMask demonstrates robust ENS name resolution for smart contracts. The wallet consistently displays ENS names in transaction confirmations, contract interaction screens, and address fields. The implementation includes proper primary name lookup with graceful fallback to addresses when ENS names are unavailable. Visual indicators clearly distinguish between ENS names and raw addresses.",
          images: [
            {
              src: "/src/assets/metamask-ens-display.png",
              alt: "MetaMask showing ENS names for smart contracts",
              caption: "MetaMask transaction screen displaying ens.eth instead of contract address",
            },
          ],
        },
        {
          heading: "User Experience Excellence",
          content:
            "The ENS name display in MetaMask significantly enhances user confidence and security. Users can easily verify they're interacting with legitimate contracts like 'uniswap.eth' rather than attempting to validate long hexadecimal addresses. The implementation reduces transaction anxiety and potential user errors in contract interactions.",
        },
      ],
      conclusion:
        "MetaMask provides excellent ENS name display for smart contracts on Ethereum mainnet. The implementation is comprehensive, reliable, and greatly enhances user experience and security for smart contract interactions.",
    },
    meta: {
      title: "MetaMask - ENS Smart Contract Display Report",
      description:
        "Detailed benchmark report on MetaMask's excellent implementation of ENS name display for smart contracts on Ethereum mainnet.",
      ogImagePath: "/benchmark-reports/metamask-mainnet-og.png",
      twitterOgImagePath: "/benchmark-reports/metamask-mainnet-twitter.png",
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
