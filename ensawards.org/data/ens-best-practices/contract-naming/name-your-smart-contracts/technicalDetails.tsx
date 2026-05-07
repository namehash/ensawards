import { bestPracticeTechnicalDetailsLinkStyles } from "data/ens-best-practices/styles";

import enscribelookupAcceptanceTestImage from "./images/enscribe-lookup-example.png";
// TODO: The content isn't fully curated for now.

export const implementationRecommendations = (
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

export const useCaseSummary = (
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

export const desiredOutcome = (
  <p>
    The users of your protocol can easily verify they're interacting with the correct contracts,
    improving security and user confidence.
  </p>
);

export const enscribeLookupAcceptanceTestDescription = (
  <div>
    <p>
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
    <img alt="enscribe-lookup acceptance test" src={enscribelookupAcceptanceTestImage.src} />
  </div>
);
