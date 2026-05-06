// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import contributors from "data/contributors/index.ts";
import { ProtocolTypes } from "data/protocols/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { defineBestPractice } from "../registry.ts";
import { type BestPracticeProtocol, BestPracticeTypes } from "../types.ts";
import enscribelookupAcceptanceTestImage from "./content-images/enscribe-lookup-example.png";
import ContractNamingCategory from "./index.ts";

// TODO: Ofc this is all placeholder content for now. Wandering if we should put it in a separate files,
// to stop the main definition file from bloating too much
const linkStyles =
  "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200";
const implementationRecommendations = (
  <div>
    Contracts should be{" "}
    <a
      className={linkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://docs.ens.domains/web/naming-contracts"
    >
      assigned ENS names
    </a>{" "}
    during or after deployment. For deployment-time naming, see the{" "}
    <a
      className={linkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.enscribe.xyz/docs/introduction/naming-contracts"
    >
      Enscribe documentation
    </a>{" "}
    which goes into greater detail on the process. For post-deployment naming we recommend using the{" "}
    <a
      className={linkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://app.enscribe.xyz"
    >
      Enscribe App
    </a>
    . Note that setting a{" "}
    <a
      className={linkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://docs.ens.domains/web/reverse"
    >
      primary name
    </a>{" "}
    (reverse resolution) requires the contract to implement{" "}
    <a
      className={linkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable"
    >
      Ownable
    </a>
    . Contracts without Ownable can still have forward resolution configured (
    <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
      name → address
    </span>
    ) but cannot set a reverse record (
    <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
      address → name
    </span>
    ).
  </div>
);

const useCaseSummaryContent = (
  <p>
    Assigning ENS names to contracts gives users confidence they're interacting with the correct
    contract. This is particularly valuable for security, as users can confirm{" "}
    <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">
      uniswap.eth
    </span>{" "}
    instead of validating a long hexadecimal address. If you've deployed contracts without Ownable,
    you can still improve UX by configuring forward resolution, though full naming (with reverse
    resolution) provides the best user experience.
  </p>
);

const desiredOutcomeContent = (
  <p>
    The users of your protocol can easily verify they're interacting with the correct contracts,
    improving security and user confidence.
  </p>
);

const nameYourSmartContracts: BestPracticeProtocol = {
  type: BestPracticeTypes.Protocol,
  id: "name-your-smart-contracts",
  bestPracticeSlug: "name-your-smart-contracts",
  name: "Name your smart contracts",
  description: "Upgrade security and UX when users interact with your smart contracts.",
  category: ContractNamingCategory,
  appliesTo: [ProtocolTypes.DAO, ProtocolTypes.DeFi],
  technicalDetails: {
    useCaseSummary: useCaseSummaryContent,
    desiredOutcome: desiredOutcomeContent,
    implementationRecommendations: implementationRecommendations,
    acceptanceTests: [
      {
        acceptanceTestSlug: "enscribe-lookup",
        name: "Smart Contract ENS name is validated by ENScribe",
        description: (
          // TODO: This is yet another problem to solve, Where should we store related images?
          // Would it be okay to create a dedicated folder inside the best practice category directory for all BPs
          // or should each BP have a separate folder?
          <div>
            <p>
              When the contract's ENS name or address is looked up in the{" "}
              <a
                className={linkStyles}
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.enscribe.xyz/"
              >
                Enscribe App
              </a>{" "}
              the result should display the contract's name with an appropriate icon.
            </p>
            <img
              alt="enscribe-lookup acceptance test"
              src={enscribelookupAcceptanceTestImage.src}
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

defineBestPractice(nameYourSmartContracts);

export default nameYourSmartContracts;
