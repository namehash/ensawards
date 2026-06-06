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
      ENS is upgrading to ENSv2, and the way ENS names get resolved is changing. Apps that don't
      keep up will quietly start showing people the wrong names and addresses — a silent failure
      that erodes user trust and can even send funds to the wrong place.
    </p>
    <p>
      This best practice checks that your app keeps resolving every ENS name correctly through the
      ENSv2 transition, with no disruption for your users.
    </p>
    <p>
      The simplest way to get this right—and to stay correct automatically as ENS keeps evolving— is
      to use ENSNode's{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/omnigraph"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENS Omnigraph API
      </a>
      , which handles ENSv2-ready resolution for you. The implementation recommendations below cover
      how your engineering team can adopt it, or other supported options.
    </p>
  </div>
);

const benefitFromUsingEnsTitle = "Why this matters";
const benefitFromUsingEns = (
  <p>
    Get this right and your users keep seeing the correct names and addresses before, during, and
    after the ENSv2 launch—no broken names, no funds sent to the wrong place, and no last-minute
    scramble to migrate.
  </p>
);

const implementationRecommendations = (
  <div className="flex flex-col gap-2">
    <p>
      There are a few ways to make your app's ENS resolution ENSv2-ready, from easiest to most
      hands-on. Use the highest one that fits your stack.
    </p>
    <br />
    <p>
      <strong>1. Use the ENS Omnigraph API (recommended).</strong>
    </p>
    <p>
      Route your ENS data through ENSNode's{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/omnigraph"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENS Omnigraph API
      </a>{" "}
      and ENSv2-ready resolution just works — no contracts to track, no upgrades to chase. It's a
      single typed GraphQL API over both ENSv1 and ENSv2 on every ENS chain, and it also handles the
      indexed ENS data your app reads (the names an address owns, profiles, histories, and search),
      with resolutions accelerated by{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/omnigraph/protocol-acceleration"
        target="_blank"
        rel="noopener noreferrer"
      >
        Protocol Acceleration
      </a>
      . Drop it in with{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/integration-options/enssdk"
        target="_blank"
        rel="noopener noreferrer"
      >
        enssdk
      </a>{" "}
      (TypeScript) or{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/integration-options/enskit"
        target="_blank"
        rel="noopener noreferrer"
      >
        enskit
      </a>{" "}
      (React).
    </p>
    <br />
    <p>
      <strong>2. Using viem or wagmi? Update your version.</strong>
    </p>
    <p>
      If you resolve names directly with viem or wagmi and aren't ready to adopt the Omnigraph yet,
      make sure you're on{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://github.com/wevm/viem/blob/main/src/CHANGELOG.md#2350"
        target="_blank"
        rel="noopener noreferrer"
      >
        viem (v2.35.0+)
      </a>
      . On wagmi, pin viem yourself — wagmi accepts any viem 2.x, so upgrading wagmi alone won't get
      you there.
    </p>
    <br />
    <p>
      <strong>3. Writing raw RPC calls yourself?</strong>
    </p>
    <p>
      If your app makes its own low-level RPC calls instead of using the Omnigraph or viem, point
      your resolution at the ENS DAO's new stable Universal Resolver proxy (
      <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
        0xeeeeeeee14d718c2b47d9923deab1335e144eeee
      </span>
      ) rather than hardcoding a specific Universal Resolver implementation. Because the ENS DAO
      controls the proxy, it transparently upgrades to the ENSv2-compatible implementation when
      ENSv2 launches, so apps pointed at it stay correct with no code changes. For the ENS team's
      full guidance, see their{" "}
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
  </div>
);

const acceptanceTest1 = {
  acceptanceTestSlug: "correctly-resolve-ensv2-test-name-address",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        To check whether an app is ready, we resolve a special ENS test name,{" "}
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
          ur.integration-tests.eth
        </span>
        , and look at the address it returns.
      </p>
      <p>
        An ENSv2-ready app returns the new address{" "}
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
          0x2222222222222222222222222222222222222222
        </span>
        . An app still relying on the old resolution path returns{" "}
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
          0x1111111111111111111111111111111111111111
        </span>{" "}
        instead, or fails to resolve the name at all — which means it needs updating.
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
          test name to its correct ENSv2 address.
        </p>
        <img
          alt="MetaMask correctly resolves the ENSv2 test name"
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
