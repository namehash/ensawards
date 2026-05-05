// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import contributors from "data/contributors/index.ts";
import acceptanceTestExampleImage from "data/ens-best-practices/contract-naming/content-images/mainnet-interactions-display-named-smart-contracts-example.png";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { AppTypes } from "../../apps/types.ts";
import { defineBestPractice } from "../registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "../types.ts";
import DisplayProfilesCategory from "./index.ts";

// TODO: Ofc this is all placeholder content for now. Wandering if we should put it in a separate files,
// to stop the main definition file from bloating too much
const linkStyles =
  "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200";

const implementationRecommendations = (
  <div>
    <p>
      When users interact with a contract on an L2 chain, use the
      <a
        className={linkStyles}
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
      best practices
    </p>
    <ul>
      <li>
        <a
          className={linkStyles}
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
          className={linkStyles}
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
          className={linkStyles}
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
          className={linkStyles}
          href="https://wagmi.sh/react/api/hooks/useEnsName#chainid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wagmi
        </a>{" "}
        (v2.18.0+)
      </li>
    </ul>
    <p>
      Libraries and tools for additional languages or frameworks can be found in the{" "}
      <a
        className={linkStyles}
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

const desiredOutcomeContent = (
  <p>
    Users can easily identify and interact with named smart contracts on an L2 chain, improving
    security and user experience.
  </p>
);

const useCaseSummaryContent = (
  <p>
    ENSIP-19 enables primary names to be set on any chain. Contracts deployed to an L2 chain benefit
    from this, as the contract can then configure its name directly on the chain it is deployed to
    without any need to update state on mainnet. If a contract has an ENS name, you can use the
    contract's ENS profile to power additional UX improvements such as displaying the contract's
    avatar, metadata, audit information, and more. More information can be found at this
    <a
      className={linkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397"
    >
      ENSIP Proposal
    </a>
    .
  </p>
);

const mockBestPracticeAllPending2: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "mock-bp-all-pending-2",
  bestPracticeSlug: "mock-bp-all-pending-2",
  name: "Mock BP all pending 2",
  description:
    "Mock best practice with all benchmarks in pending state. This is used to test the display of pending benchmarks in the UI with a best pratice other than Contract Naming.",
  category: DisplayProfilesCategory,
  appliesTo: [AppTypes.Explorer],
  technicalDetails: {
    useCaseSummary: useCaseSummaryContent,
    desiredOutcome: desiredOutcomeContent,
    implementationRecommendations: implementationRecommendations,
    acceptanceTests: [
      {
        acceptanceTestSlug: "mock-acceptance-test-3",
        name: "Mock acceptance test 3",
        description: (
          // TODO: This is yet another problem to solve, Where should we store related images?
          // Would it be okay to create a dedicated folder inside the best practice category directory for all BPs
          // or should each BP have a separate folder?
          // or maybe we should store these images inside data/acceptance-tests ?
          <div>
            <p>
              Mock acceptance test description. This is used to test the display of pending
              benchmarks in the UI.
            </p>
            <img
              alt="mock-acceptance-test-3 acceptance test"
              src={acceptanceTestExampleImage.src}
            />
          </div>
        ),
      },
    ],
  },
  contributions: [
    { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-03T11:25:00.000Z") },
    { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-12T14:51:00.000Z") },
  ],
};

defineBestPractice(mockBestPracticeAllPending2);

export default mockBestPracticeAllPending2;
