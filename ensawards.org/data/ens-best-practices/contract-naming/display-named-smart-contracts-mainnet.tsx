// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import contributors from "data/contributors/index.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { AppTypes } from "../../apps/types.ts";
import { defineBestPractice } from "../registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "../types.ts";
import acceptanceTestExampleImage from "./content-images/mainnet-interactions-display-named-smart-contracts-example.png";
import ContractNamingCategory from "./index.ts";

// TODO: Ofc this is all placeholder content for now. Wandering if we should put it in a separate files,
// to stop the main definition file from bloating too much
const linkStyles =
  "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200";

const implementationRecommendations = (
  <div>
    <p>
      Looking up the name of a smart contract on Ethereum mainnet uses the same process as looking
      up the name of any other account. There are a variety of libraries capable of looking up the{" "}
      <a
        className={linkStyles}
        href="https://docs.ens.domains/web/reverse"
        target="_blank"
        rel="noopener noreferrer"
      >
        primary name
      </a>{" "}
      of a contract address according to all ENS best practices:
    </p>
    <ul className="list-disc pl-5">
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
    Users can easily identify and interact with named smart contracts on Ethereum mainnet, improving
    security and user experience.
  </p>
);

const useCaseSummaryContent = (
  <p>
    If a contract has an ENS name, you can use its ENS profile to power additional UX improvements
    such as avatars, metadata, audit information, and more. More information can be found at the{" "}
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

const displayNamedSmartContractsMainnet: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "display-named-smart-contracts-mainnet",
  bestPracticeSlug: "display-named-smart-contracts-mainnet",
  name: "Display named smart contracts on Ethereum mainnet",
  description:
    "Display ENS names instead of addresses when users interact with named smart contracts on Ethereum mainnet.",
  category: ContractNamingCategory,
  appliesTo: [AppTypes.Wallet, AppTypes.Explorer],
  technicalDetails: {
    useCaseSummary: useCaseSummaryContent,
    desiredOutcome: desiredOutcomeContent,
    implementationRecommendations: implementationRecommendations,
    acceptanceTests: [
      // TODO: I think it's valid to define acceptance tests inside the best practice definition file
      // (and not put them inside `data/acceptance-tests`), since it's customized exactly to that BP.
      // Alternatively, we could transform the best-practice file into a best practice directory with the following structure:
      // [bp-slug] --> the directory
      //    - index.tsx --> the main definition file for the best practice
      //    - technical-details.tsx --> file dedicated only for technical details content (use case summary, desired outcome, implementation recommendations)
      //    - acceptance-tests.tsx --> file dedicated only for acceptance tests
      //    - assets --> folder for related images and other assets

      // All of these are kind of optional, but it would make sense to make this all more organized.
      // The obvious drawback is that the potential contributor has quite a lot of files to get through,
      // which was always our concern. Keen to hear your thoughts on this.
      {
        acceptanceTestSlug: "mainnet-interactions-display-named-smart-contracts",
        title: "Display ENS names for smart contracts on mainnet",
        description: (
          // TODO: This is yet another problem to solve, Where should we store related images?
          // Would it be okay to create a dedicated folder inside the best practice category directory for all BPs
          // or should each BP have a separate folder?
          <div>
            <p>
              When users interact with named smart contracts on Ethereum mainnet the app should
              display the contract's name as its primary identifier.
            </p>
            <img
              alt="mainnet-interactions-display-named-smart-contracts acceptance test"
              src={acceptanceTestExampleImage.src}
              className="w-auto h-[800px]"
            />
          </div>
        ),
      },
      {
        acceptanceTestSlug: "mainnet-interactions-display-named-smart-contracts-at2",
        title: "Acceptance Test 2",
        description: (
          // TODO: This is yet another problem to solve, Where should we store related images?
          // Would it be okay to create a dedicated folder inside the best practice category directory for all BPs
          // or should each BP have a separate folder?
          <div>
            <p>
              When users interact with named smart contracts on Ethereum mainnet the app should
              display the contract's name as its primary identifier. TEST DESCRIPTION WITHOUT IMAGE
            </p>
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

defineBestPractice(displayNamedSmartContractsMainnet);

export default displayNamedSmartContractsMainnet;
