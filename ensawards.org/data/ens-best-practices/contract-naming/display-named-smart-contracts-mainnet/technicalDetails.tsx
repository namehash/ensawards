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

import mainnetInteractionsDisplayNamedSmartContractsImage from "./images/mainnet-interactions-display-named-smart-contracts-example.png";

// TODO: The content isn't fully curated for now.
const implementationRecommendations = (
  <div>
    <p>
      Looking up the name of a smart contract on Ethereum mainnet uses the same process as looking
      up the name of any other account. There are a variety of libraries capable of looking up the{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://docs.ens.domains/web/reverse"
        target="_blank"
        rel="noopener noreferrer"
      >
        primary name
      </a>{" "}
      of a contract address according to all ENS best practices:
    </p>
    <br />
    <ul className="list-disc pl-5">
      <li>
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://github.com/namehash/ensnode/blob/main/packages/ensnode-sdk/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          ensnode-sdk
        </a>{" "}
        (v1.0.0+)
      </li>
      <li>
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://github.com/namehash/ensnode/blob/main/packages/ensnode-react/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          ensnode-react
        </a>{" "}
        (v1.0.0+)
      </li>
      <li>
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://viem.sh/docs/ens/actions/getEnsName#chain-specific-resolution"
          target="_blank"
          rel="noopener noreferrer"
        >
          Viem
        </a>{" "}
        (v2.35.0+)
      </li>
      <li>
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          href="https://wagmi.sh/react/api/hooks/useEnsName#chainid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wagmi
        </a>{" "}
        (v2.18.0+)
      </li>
    </ul>
    <br />
    <p>
      Libraries and tools for additional languages or frameworks can be found in the{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://docs.ens.domains/web/libraries"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENS documentation
      </a>
      .
    </p>
  </div>
);

const benefitFromUsingEns = (
  <p>
    Users can easily identify and interact with named smart contracts on Ethereum mainnet, improving
    security and user experience.
  </p>
);

const useCaseSummary = (
  <p>
    If a contract has an ENS name, you can use its ENS profile to power additional UX improvements
    such as avatars, metadata, audit information, and more. More information can be found at the{" "}
    <a
      className={bestPracticeTechnicalDetailsLinkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397"
    >
      ENSIP Proposal
    </a>
    .
  </p>
);

const acceptanceTest1 = {
  acceptanceTestSlug: "mainnet-interactions-display-named-smart-contracts",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        When users interact with named smart contracts on Ethereum mainnet the app should display
        the contract's name as its primary identifier.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-05-11T10:17:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Below you can see how{" "}
          <a className={bestPracticeTechnicalDetailsLinkStyles} href="/app/walletchan-wallet">
            WalletChan
          </a>{" "}
          displays the name of the contract it interacts with in addition to its address.
        </p>
        <img
          alt="mainnet-interactions-display-named-smart-contracts acceptance test"
          src={mainnetInteractionsDisplayNamedSmartContractsImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
        <p className="w-full">That allows the user to easily identify the contract.</p>
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
