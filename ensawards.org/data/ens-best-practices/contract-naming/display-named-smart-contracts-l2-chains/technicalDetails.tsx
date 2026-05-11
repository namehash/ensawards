import type { AcceptanceTestBenchmarkPass } from "data/acceptance-tests/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsLinkStyles,
} from "data/ens-best-practices/styles";
import type { BestPracticeTechnicalDetails } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import l2ChainsInteractionsDisplayNamedSmartContractsImage from "./images/mock-l2-chains-interactions-display-named-smart-contracts-example.png";

// TODO: The content isn't fully curated for now.
const implementationRecommendations = (
  <div>
    <p>
      When users interact with a contract on an L2 chain, use the{" "}
      <a
        className={bestPracticeTechnicalDetailsLinkStyles}
        href="https://docs.ens.domains/ensip/19"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENSIP-19
      </a>{" "}
      standard to lookup the primary name of the contract. ENSIP-19 provides chain-specific primary
      names for L2 networks (including Optimism, Arbitrum, Base, Linea, and Scroll), with an
      automatic fallback to a default primary name (defined on mainnet) if no chain-specific primary
      name is defined. There are several libraries to choose from that support ENSIP-19 and all ENS
      best practices:
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

const desiredOutcome = (
  <p>
    Users can easily identify and interact with named smart contracts on an L2 chain, improving
    security and user experience.
  </p>
);

const useCaseSummary = (
  <p>
    ENSIP-19 enables primary names to be set on any chain. Contracts deployed to an L2 chain benefit
    from this, as the contract can then configure its name directly on the chain it is deployed to
    without any need to update state on mainnet. If a contract has an ENS name, you can use the
    contract's ENS profile to power additional UX improvements such as displaying the contract's
    avatar, metadata, audit information, and more. More information can be found at this{" "}
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

const acceptanceTest1Description = (
  <div className={acceptanceTestDetailsContainerStyles}>
    <p className="w-full">
      When users interact with named smart contracts on an L2 chain the app should display the
      contract's name as its primary identifier.
    </p>
  </div>
);

const examplePassAcceptanceTest1 = {
  result: BenchmarkResults.Pass,
  contributions: [
    { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-05-11T10:17:00Z") },
  ],
  notes: (
    <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
      <p className="w-full">TODO: Find a suitable example for L2 chain interactions</p>
      <img
        alt="l2-chain-interactions-display-named-smart-contracts acceptance test"
        src={l2ChainsInteractionsDisplayNamedSmartContractsImage.src}
        className="w-auto h-full max-h-[325px] rounded-xl"
      />
    </div>
  ),
} as const satisfies AcceptanceTestBenchmarkPass;

const technicalDetails = {
  useCaseSummary: useCaseSummary,
  desiredOutcome: desiredOutcome,
  implementationRecommendations: implementationRecommendations,
  acceptanceTests: [
    {
      acceptanceTestSlug: "l2-chain-interactions-display-named-smart-contracts",
      description: acceptanceTest1Description,
      examplePass: examplePassAcceptanceTest1,
    },
  ],
} as const satisfies BestPracticeTechnicalDetails;

export default technicalDetails;
