import type { AcceptanceTest, AcceptanceTestBenchmarkPass } from "data/acceptance-tests/types";
import useLatestUniversalResolverExamplePassImage from "data/apps/metamask-wallet/benchmarks/use-latest-universal-resolver-proof.png";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsLinkStyles,
} from "data/ens-best-practices/styles";
import type { BestPracticeTechnicalDetails } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

const useCaseSummary = (
  <div className="flex flex-col gap-2">
    <p>
      ENSv2 doesn't replace ENSv1 — the two coexist onchain at the same time. For your app, that
      means the way ENS names resolve is changing, and apps that don't keep up will silently return
      stale or incorrect results.
    </p>
    <p>
      The ENS team has deployed a new, stable{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://docs.ens.domains/resolvers/universal"
        target="_blank"
        rel="noopener noreferrer"
      >
        Universal Resolver
      </a>{" "}
      — an upgradeable proxy contract owned by the ENS DAO that acts as the canonical entry point
      for resolving any ENS name. Point your resolution at this proxy address instead of hardcoding
      a specific implementation. Because the ENS DAO controls the proxy, it can upgrade it to the
      new ENSv2-compatible Universal Resolver after ENSv2 launches — so apps pointed at the proxy
      stay correct through the transition with no code changes, while apps still pinned to the old
      implementation will silently fall behind.
    </p>
    <p>
      For the ENS team's full guidance on preparing your app for ENSv2, see their{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://docs.ens.domains/web/ensv2-readiness/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENSv2 readiness guide
      </a>
      .
    </p>
    <p>
      <strong>Beyond resolution — the Omnigraph also handles your indexed ENS data.</strong>
    </p>
    <p>
      Resolution is only half of ENSv2 readiness. The other half is the indexed ENS data your app
      reads — the names an address owns, profiles, histories, and search. Most apps get that today
      from the{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/ens-subgraph/key-limitations"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENS Subgraph
      </a>
      , which is ENSv1-only and single-chain: it has no concept of ENSv2, and already can't see
      Basenames (.base.eth), Lineanames (.linea.eth), or 3DNS (.box) names. The moment ENSv2
      launches, it stops being a reliable view of ENS.
    </p>
    <p>
      The{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/omnigraph"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENS Omnigraph API
      </a>{" "}
      covers both halves in one integration — a single typed GraphQL API over both ENSv1 and ENSv2,
      across every ENS chain. Write your query once and get correct, normalized, ready-to-render
      results regardless of protocol version or chain, with the protocol's footguns (name
      normalization, stable IDs, the effective resolver, multichain primary names) handled for you.
      Adopting it for resolution makes the rest of your app ENSv2-ready too.
    </p>
  </div>
);

const benefitFromUsingEnsTitle = "Why it's necessary to use the new Universal Resolver";
const benefitFromUsingEns = (
  <p>
    Point your app at the stable Universal Resolver once, and your ENS name resolution keeps
    returning correct results straight through the ENSv2 launch — no migration scramble, no broken
    names, and no code changes when the upgrade lands.
  </p>
);

const implementationRecommendations = (
  <div className="flex flex-col gap-2">
    <p>There are two ways to satisfy this best practice. Pick whichever fits your app.</p>
    <br />
    <p>
      <strong>1. Recommended — resolve through the ENS Omnigraph API.</strong>
    </p>
    <p>
      Instead of wiring up resolution yourself, route your ENS data through ENSNode's{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/omnigraph"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENS Omnigraph API
      </a>{" "}
      — a single typed GraphQL API over both ENSv1 and ENSv2, on every ENS chain. It performs
      protocol-correct resolution for you using the latest Universal Resolver under the hood
      (including the CCIP-Read offchain lookups), so your app returns the right answer by default —
      and resolutions for indexed names run an order of magnitude faster thanks to{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/omnigraph/protocol-acceleration"
        target="_blank"
        rel="noopener noreferrer"
      >
        Protocol Acceleration
      </a>
      .
    </p>
    <p>
      The same integration also handles the indexed-data half of ENSv2 readiness — the part the
      legacy ENS Subgraph can't, because it goes stale the moment ENSv2 launches. Drop it in with:
    </p>
    <ul className="list-disc pl-5">
      <li>
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://ensnode.io/docs/integrate/integration-options/enssdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          enssdk
        </a>{" "}
        — typed TypeScript client
      </li>
      <li>
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://ensnode.io/docs/integrate/integration-options/enskit"
          target="_blank"
          rel="noopener noreferrer"
        >
          enskit
        </a>{" "}
        — React components and hooks
      </li>
    </ul>
    <br />
    <p>
      <strong>2. Minimal — point your resolution at the latest Universal Resolver.</strong>
    </p>
    <p>
      If your app resolves names directly via viem or wagmi, updating to a version that targets the
      latest Universal Resolver is often all you need:
    </p>
    <ul className="list-disc pl-5">
      <li>
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://github.com/wevm/viem/blob/main/src/CHANGELOG.md#2350"
          target="_blank"
          rel="noopener noreferrer"
        >
          viem (v2.35.0+)
        </a>{" "}
        — upgrade to this version.
      </li>
      <li>
        wagmi — pin{" "}
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://github.com/wevm/viem/blob/main/src/CHANGELOG.md#2350"
          target="_blank"
          rel="noopener noreferrer"
        >
          viem (v2.35.0+)
        </a>{" "}
        yourself. wagmi accepts any viem 2.x, so upgrading wagmi alone won't pull in the new
        Universal Resolver.
      </li>
      <li>
        custom — resolve records from the new Universal Resolver proxy (
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
          0xeeeeeeee14d718c2b47d9923deab1335e144eeee
        </span>
        ) instead of an individual implementation.
      </li>
    </ul>
  </div>
);

const acceptanceTest1 = {
  acceptanceTestSlug: "correctly-resolve-ensv2-test-name-address",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        To check whether an application uses the latest Universal Resolver, try resolving the
        address for{" "}
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
          ur.integration-tests.eth
        </span>
        . It should return{" "}
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
          0x2222222222222222222222222222222222222222
        </span>
        .
      </p>
      <p>
        If it returns{" "}
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
          0x1111111111111111111111111111111111111111
        </span>{" "}
        instead, or fails to resolve the name, the app is still using the old resolver and should
        update.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-05T15:34:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Below you can see how{" "}
          <a className={bestPracticeTechnicalDetailsLinkStyles} href="/app/metamask-wallet">
            MetaMask
          </a>{" "}
          correctly resolves the{" "}
          <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
            ur.integration-tests.eth
          </span>{" "}
          test name to the address of the new Universal Resolver.
        </p>
        <img
          alt="MetaMask Wallet is using the latest Universal Resolver"
          src={useLatestUniversalResolverExamplePassImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
} as const satisfies AcceptanceTest;

const technicalDetails = {
  useCaseSummary,
  benefitFromUsingEns,
  benefitFromUsingEnsTitle,
  implementationRecommendations,
  acceptanceTests: [acceptanceTest1],
} as const satisfies BestPracticeTechnicalDetails;

export default technicalDetails;
