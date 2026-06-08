import { type AcceptanceTest, type AcceptanceTestBenchmarkPass } from "data/acceptance-tests/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsLinkStyles,
} from "data/ens-best-practices/styles";
import type { BestPracticeTechnicalDetails } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import enscribelookupAcceptanceTestImage from "./images/enscribe-lookup-example.png";

// TODO: The content isn't fully curated for now.

const useCaseSummary = (
  <div>
    Contracts should be{" "}
    <a
      className={bestPracticeTechnicalDetailsLinkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://docs.ens.domains/web/naming-contracts"
    >
      assigned ENS names
    </a>{" "}
    during or after deployment. For deployment-time naming, see the{" "}
    <a
      className={bestPracticeTechnicalDetailsLinkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.enscribe.xyz/docs/introduction/naming-contracts"
    >
      Enscribe documentation
    </a>{" "}
    which goes into greater detail on the process. For post-deployment naming we recommend using the{" "}
    <a
      className={bestPracticeTechnicalDetailsLinkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://app.enscribe.xyz"
    >
      Enscribe App
    </a>
    . Note that setting a{" "}
    <a
      className={bestPracticeTechnicalDetailsLinkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href="https://docs.ens.domains/web/reverse"
    >
      primary name
    </a>{" "}
    (reverse resolution) requires the contract to implement{" "}
    <a
      className={bestPracticeTechnicalDetailsLinkStyles}
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

const implementationRecommendations = (
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

const benefitFromUsingEns = (
  <p>
    The users of your protocol can easily verify they're interacting with the correct contracts,
    improving security and user confidence.
  </p>
);

const acceptanceTest1 = {
  acceptanceTestSlug: "contract-has-primary-name",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        When the contract's ENS name or address is looked up in the{" "}
        <a
          className={bestPracticeTechnicalDetailsLinkStyles}
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.enscribe.xyz/"
        >
          Enscribe App
        </a>{" "}
        the result should display the contract's name with an appropriate icon.
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
          Below you can see the verification on the{" "}
          <a
            className={bestPracticeTechnicalDetailsLinkStyles}
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.enscribe.xyz/"
          >
            Enscribe App
          </a>{" "}
          how{" "}
          <a className={bestPracticeTechnicalDetailsLinkStyles} href="/protocol/nouns-dao">
            Nouns DAO
          </a>{" "}
          has named one of its smart contracts.
        </p>
        <img
          alt="enscribe-lookup acceptance test"
          src={enscribelookupAcceptanceTestImage.src}
          className="w-auto h-full max-h-[350px] rounded-xl"
        />
        <p className="w-full">
          This is the first (but vital) step in ensuring users can easily identify the contract.
        </p>
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
