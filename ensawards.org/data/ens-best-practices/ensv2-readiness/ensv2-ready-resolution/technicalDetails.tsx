import type {
  AcceptanceTest,
  AcceptanceTestBenchmarkFail,
  AcceptanceTestBenchmarkPass,
} from "data/acceptance-tests/types";
import useLatestUniversalResolverExamplePassImage from "data/apps/metamask-wallet/benchmarks/use-latest-universal-resolver-proof.png";
import useLatestUniversalResolverExampleFailImage from "data/apps/rainbow-wallet/benchmarks/use-latest-universal-resolver-proof.png";
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
      ENS is upgrading to{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ens.domains/ensv2"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENSv2
      </a>{" "}
      and the way ENS names get resolved is changing. Apps that don't upgrade their ENS resolution
      logic before ENSv2 launches will quietly start giving people the wrong names and addresses as
      soon as ENSv2 launches — a silent failure that would erode user trust and could even send
      funds to the wrong place.
    </p>
    <p>
      This best practice checks that your app will keep resolving every ENS name correctly through
      the ENSv2 transition, with no disruption for your users.
    </p>
    <p>
      The simplest way to get this right—and to continuously and automatically fetch data from ENS
      correctly even as ENS keeps evolving— is to use the{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/omnigraph"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENS Omnigraph API
      </a>{" "}
      (powered by{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENSNode
      </a>
      ) which handles ENSv2-ready resolution for you. The implementation recommendations below cover
      how your engineering team can adopt it, or other supported options.
    </p>
  </div>
);

const benefitFromUsingEnsTitle = "Why this matters";
const benefitFromUsingEns = (
  <p>
    Get this right now so that your users keep seeing the correct names and addresses before,
    during, and after the ENSv2 launch—no broken names, no funds sent to the wrong place, and no
    last-minute scramble to migrate.
  </p>
);

const implementationRecommendations = (
  <div className="flex flex-col gap-2">
    <p>
      There are a few ways to make sure your app's ENS resolution is ENSv2-ready. Options below are
      ordered from the easiest to the most hands-on. Use the first option that fits your stack.
    </p>
    <br />
    <p className="text-black">
      <strong>1. Use the ENS Omnigraph API (recommended).</strong>
    </p>
    <p>
      Fetch your ENS data through the{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io/docs/integrate/omnigraph"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENS Omnigraph API
      </a>{" "}
      (powered by{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://ensnode.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENSNode
      </a>
      ) and ENSv2-ready resolution just works — no RPCs or contracts to track, no upgrades to chase.
      It's a single typed GraphQL API over both ENSv1 and ENSv2 for every chain and offchain names
      too. It also handles the indexed ENS data your app reads (e.g. the names an address owns,
      profiles, histories, etc.), with resolutions accelerated by{" "}
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
    <p className="text-black">
      <strong>2. Using viem or wagmi? Update your version.</strong>
    </p>
    <p>
      If you resolve names using ENS helper functions from viem or wagmi and aren't ready to adopt
      the Omnigraph yet, make sure you're on{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://github.com/wevm/viem/blob/main/src/CHANGELOG.md#2350"
        target="_blank"
        rel="noopener noreferrer"
      >
        viem (v2.35.0+)
      </a>
      . On wagmi, pin the viem version yourself — wagmi accepts any viem 2.x, so upgrading wagmi
      alone won't get you there.
    </p>
    <br />
    <p className="text-black">
      <strong>3. Writing raw RPC calls yourself?</strong>
    </p>
    <p>
      If your app makes its own low-level RPC calls instead of using the Omnigraph or a helper
      library like viem, point your resolution RPC calls at ENS's new stable Universal Resolver
      proxy (
      <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
        0xeeeeeeee14d718c2b47d9923deab1335e144eeee
      </span>
      ) rather than hardcoding a specific Universal Resolver implementation. Because ENS controls
      the proxy, it transparently upgrades to the ENSv2-compatible implementation when ENSv2
      launches, so apps pointed at it stay correct with no code changes. For additional guidance,
      see the{" "}
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
        To check whether an app has ENSv2 ready resolution, resolve the name{" "}
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm whitespace-nowrap">
          ur.integration-tests.eth
        </span>{" "}
        and verify it resolves to the correct address,{" "}
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm whitespace-nowrap">
          0x2222222222222222222222222222222222222222
        </span>
        .
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
          An ENSv2-ready app such as{" "}
          <a className={bestPracticeTechnicalDetailsLinkStyles} href="/app/metamask-wallet">
            MetaMask
          </a>{" "}
          resolves the name{" "}
          <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm whitespace-nowrap">
            ur.integration-tests.eth
          </span>{" "}
          to the correct address:
          <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm whitespace-nowrap">
            0x2222222222222222222222222222222222222222
          </span>
          .
        </p>
        <img
          alt="MetaMask correctly resolves the name for ENSv2"
          src={useLatestUniversalResolverExamplePassImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-05T15:34:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app that is <i>NOT</i> ENSv2 ready resolves the name{" "}
          <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm whitespace-nowrap">
            ur.integration-tests.eth
          </span>{" "}
          to an invalid address such as:{" "}
          <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm whitespace-nowrap">
            0x1111111111111111111111111111111111111111
          </span>
          , or fails to resolve the name at all. <br />
          <br />
          <b>Apps failing this test require an urgent update! 🚨</b>
        </p>
        <img
          alt="Rainbow Wallet fails to resolve the name for ENSv2"
          src={useLatestUniversalResolverExampleFailImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

const technicalDetails = {
  useCaseSummary,
  benefitFromUsingEnsTitle,
  benefitFromUsingEns,
  implementationRecommendations,
  acceptanceTests: [acceptanceTest1],
} as const satisfies BestPracticeTechnicalDetails;

export default technicalDetails;
