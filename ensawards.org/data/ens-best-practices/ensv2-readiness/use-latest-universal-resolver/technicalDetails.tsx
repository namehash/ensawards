import type { AcceptanceTest, AcceptanceTestBenchmarkPass } from "data/acceptance-tests/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsLinkStyles,
} from "data/ens-best-practices/styles";
import type { BestPracticeTechnicalDetails } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

// TODO: Appreciate any advice about the content :)
const implementationRecommendations = (
  <div>
    <p>
      To ensure your application works seamlessly with ENSv2, you'll need to make a few key updates.
      Luckily, for the most applications they are as simple as updating to the latest version of a{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://docs.ens.domains/resolvers/universal/#implementation-guide"
        target="_blank"
        rel="noopener noreferrer"
      >
        supported library
      </a>
      . Here are some of the most popular ones that have already added support for ENSv2:
    </p>
    <br />
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
        (v1.14.0+)
        {/* TODO: Appreciate advice if I remember the version where Matt introduced ensv2 support correctly */}
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
        (v1.14.0+)
        {/* TODO: Appreciate advice if I remember the version where Matt introduced ensv2 support correctly */}
      </li>
      <li>
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://github.com/wevm/viem/blob/main/src/CHANGELOG.md#2350"
          target="_blank"
          rel="noopener noreferrer"
        >
          viem
        </a>{" "}
        (v2.35.0+)
      </li>
      <li>
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://github.com/ensdomains/ensjs/releases/tag/%40ensdomains%2Fensjs%404.2.3"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENSjs
        </a>{" "}
        (v4.2.3+)
      </li>
      <li>
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://web3py.readthedocs.io/en/stable/release_notes.html#web3-py-v7-16-0-2026-05-01"
          target="_blank"
          rel="noopener noreferrer"
        >
          web3.py
        </a>{" "}
        (v7.16.0+)
      </li>
    </ul>
    <br />
    {/* TODO: Should we also mention our other integration options here? */}
    <p>
      If you want to dive deeper into the technical details, and interact with the universal
      resolver directly you can have a look at the{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://docs.ens.domains/resolvers/universal/#implementation-guide"
        target="_blank"
        rel="noopener noreferrer"
      >
        official ENS documentation
      </a>
      .
    </p>
  </div>
);

const benefitFromUsingEns = (
  <p>
    Adopting the latest universal resolver will allow your application to correctly resolve and look
    up ENSv2 names across multiple chains.
  </p>
);

const useCaseSummary = (
  <div>
    <p>
      For ENSv2, there is a{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://docs.ens.domains/resolvers/universal"
        target="_blank"
        rel="noopener noreferrer"
      >
        new Universal Resolver
      </a>{" "}
      that acts as the canonical entry point for resolving ENS names.
    </p>
    <p>
      Your application needs to use it in order to be ready for ENSv2. Its address won't change in
      the future if its implementation is changed.
    </p>
  </div>
);

const acceptanceTest1 = {
  acceptanceTestSlug: "correctly-resolve-ensv2-test-name-address",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        To test if an application uses the latest Universal Resolver, try resolving the address for{" "}
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
          ur.integration-tests.eth
        </span>
        . It should return
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
          0x2222222222222222222222222222222222222222
        </span>
        .
      </p>
      <p>
        If it returns
        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
          0x1111111111111111111111111111111111111111
        </span>{" "}
        instead, you're still using the old resolver and should update your app.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-05T15:04:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          NOT READY{" "}
          <a className={bestPracticeTechnicalDetailsLinkStyles} href="/app/walletchan-wallet">
            NOT READY
          </a>{" "}
          NOT READY.
        </p>
        {/* <img
          alt="WalletChan displaying a smart contract ENS name next to its address during interaction"
          src={mainnetInteractionsDisplayNamedSmartContractsImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        /> */}
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
} as const satisfies AcceptanceTest;

const technicalDetails = {
  useCaseSummary,
  benefitFromUsingEns,
  implementationRecommendations,
  acceptanceTests: [acceptanceTest1],
} as const satisfies BestPracticeTechnicalDetails;

export default technicalDetails;
