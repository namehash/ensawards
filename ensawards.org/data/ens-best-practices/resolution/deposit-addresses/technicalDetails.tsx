import type {
  AcceptanceTest,
  AcceptanceTestBenchmarkFail,
  AcceptanceTestBenchmarkPass,
} from "data/acceptance-tests/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsCodeStyles,
  bestPracticeTechnicalDetailsLinkStyles,
} from "data/ens-best-practices/styles";
import type { BestPracticeTechnicalDetails } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import acceptanceTestExampleImagePlaceholder from "./images/acceptance-test-example-placeholder.png";
import correctlyImplementCcipReadForOffchainDnsNamesExampleFailImage from "./images/correctly-implement-ccip-read-for-offchain-dns-names-example-fail.gif";
import correctlyImplementCcipReadForOffchainDnsNamesExamplePassImage from "./images/correctly-implement-ccip-read-for-offchain-dns-names-example-pass.gif";
import correctlyResolveDirectOnchainSubnameAddressExampleFailImage from "./images/correctly-resolve-direct-onchain-subname-address-example-fail.gif";
import correctlyResolveDirectOnchainSubnameAddressExamplePassImage from "./images/correctly-resolve-direct-onchain-subname-address-example-pass.gif";

const ensBestPracticeOverview = (
  <div className="flex flex-col gap-2">
    <p>
      When an app needs its users to identify a particular address on a particular chain where an
      action should be taken (such as a transfer or deposit), ENS offers the possibility of a better
      user experience. Instead of forcing users to enter a long string of hexadecimal digits, with
      ENS, users can have the option of entering a simple name such as{" "}
      <span className={bestPracticeTechnicalDetailsCodeStyles}>vitalik.eth</span>. ENS can then be
      used to translate this input name into the relevant deposit address, such as
      <span className={bestPracticeTechnicalDetailsCodeStyles}>
        0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
      </span>
      . This process of determining the deposit address for a name is an example of what is called
      &quot;resolution&quot;.
    </p>
    <p>
      This best practice checks that your app correctly resolves ENS names to the correct address
      and chain for different contexts.
    </p>
    <p>
      The simplest way to get this right—and to continuously and automatically stay up to date with
      all ENS best practices even as ENS keeps evolving—is to use the{" "}
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
      ) which handles the implementation details of ENS resolution for you. The implementation
      recommendations below cover how your engineering team can adopt it, or other supported
      options.
    </p>
  </div>
);

const benefitFromUsingEnsTitle = "Why this matters";
const benefitFromUsingEns = (
  <p>
    Apps that fail to correctly implement ENS resolution fail their users and erode trust in
    important ways. Failure to integrate ENS at all damages the user experience of the app and
    exposes users to key risks such as{" "}
    <a
      className={bestPracticeTechnicalDetailsLinkStyles}
      href="https://www.blockaid.io/blog/address-poisoning-the-growing-threat-draining-millions-from-crypto-users"
      target="_blank"
      rel="noopener noreferrer"
    >
      address poisoning attacks
    </a>
    .
    <br />
    <br />
    If ENS resolution is integrated, but not according to all ENS best practices, then it can cause
    big issues. For example, deposits may silently be sent to the wrong address and be irrecoverably
    lost. Or only a subset of ENS names might be properly supported which damages the network
    effects and market distribution of ENS.
  </p>
);

const implementationRecommendations = (
  <div className="flex flex-col gap-2">
    <p>There are a few ways to make sure your app's ENS resolution follows all best practices.</p>
    <br />
    <p className="text-black">
      <strong>1. Take full responsibility yourself.</strong>
    </p>
    <p>
      One option is to take the full responsibility for implementing all of these details correctly
      yourself and continuously and rigorously testing your app for continued compliance.
    </p>
    <br />
    <p className="text-black">
      <strong>2. Use the ENS Omnigraph API (recommended).</strong>
    </p>
    <p>
      Another, more highly recommended option is to simply perform your ENS resolutions through the{" "}
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
      ).
    </p>
    <p>
      Fetch your ENS data through the ENS Omnigraph API and everything just works. It's a single
      typed GraphQL API over both ENSv1 and ENSv2 for every chain and offchain names too. It also
      handles the indexed ENS data your app reads (e.g. the names an address owns, profiles,
      histories, etc.), with resolutions accelerated by{" "}
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
  </div>
);

const vitalikEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>vitalik.eth</span>
);

const vitalikAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
  </span>
);

const acceptanceTest1 = {
  order: 0,
  acceptanceTestSlug: "correctly-resolve-direct-onchain-subname-address",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        The baseline test for supporting ENS resolution of deposit addresses is to test with an
        onchain direct subname of .eth (such as {vitalikEnsNameSpan}) where the name is input in
        fully normalized form and the context for resolving the deposit address is on the Ethereum
        Mainnet chain.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:46:00Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:48:26Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it resolves the Ethereum Mainnet address of
          {vitalikEnsNameSpan} to {vitalikAddressSpan}.
        </p>
        <img
          alt="Ambire Wallet correctly resolves the address for vitalik.eth"
          src={correctlyResolveDirectOnchainSubnameAddressExamplePassImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test when it does not accept ENS names at all as input or fails to
          correctly resolve the Ethereum Mainnet address of {vitalikEnsNameSpan} to anything other
          than the correct value ({vitalikAddressSpan}).
        </p>
        <img
          alt="Binance Wallet doesn't allow ENS name as recipient in the send flow"
          src={correctlyResolveDirectOnchainSubnameAddressExampleFailImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

const ethereumUnnormalizedEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>Ξthereum.eth</span>
);

const ethereumNormalizedEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>ξthereum.eth</span>
);

const ethereumAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    0x31C09F0616532F7a6f33d9ee4e1F45Ea529481af
  </span>
);

const acceptanceTest2 = {
  order: 1,
  acceptanceTestSlug: "correctly-resolve-names-requiring-normalization",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        This variation of the baseline test changes the input name to{" "}
        {ethereumUnnormalizedEnsNameSpan}.
      </p>
      <p className="w-full">
        This acceptance test verifies correct implementation of ENS name normalization and input
        validation rules. This name is valid for input as an ENS name. It is not ENS normalized but
        it is ENS normalizable.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:46:00Z") },
    ],
    // TODO: Insert true example of an app passing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly normalizes the input name from{" "}
          {ethereumUnnormalizedEnsNameSpan} to {ethereumNormalizedEnsNameSpan} and then resolves the
          Ethereum Mainnet address of {ethereumNormalizedEnsNameSpan} to {ethereumAddressSpan}.
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
    ],
    // TODO: Insert true example of an app failing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test when it does not accept normalizable ENS names such as{" "}
          {ethereumUnnormalizedEnsNameSpan} as input or fails to correctly normalize this input to{" "}
          {ethereumNormalizedEnsNameSpan} or fails to correctly resolve this input to anything other
          than the correct value ({ethereumAddressSpan}).
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

const jesseBaseEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>jesse.base.eth</span>
);

const jesseBaseAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    0x2211d1D0020DAEA8039E46Cf1367962070d77DA9
  </span>
);

const acceptanceTest3 = {
  order: 2,
  acceptanceTestSlug: "correctly-implement-ccip-read-for-eth-subnames",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        This variation of the baseline test changes the input name to {jesseBaseEnsNameSpan}.
      </p>
      <p className="w-full">
        This acceptance test verifies correct implementation of CCIP-read for a subname nested
        beneath <span className={bestPracticeTechnicalDetailsCodeStyles}>.eth</span>.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:46:00Z") },
    ],
    // TODO: Insert true example of an app passing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly resolves the Ethereum Mainnet address of{" "}
          {jesseBaseEnsNameSpan} to {jesseBaseAddressSpan}.
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
    ],
    // TODO: Insert true example of an app failing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test when it does not accept ENS names such as {jesseBaseEnsNameSpan} as
          input or fails to correctly resolve this input to anything other than the correct value (
          {jesseBaseAddressSpan}).
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

const dperriComEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>dperri.com</span>
);

const dperriComAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    0x0b08dA7068b73A579Bd5E8a8290ff8afd37bc32A
  </span>
);

const acceptanceTest4 = {
  order: 3,
  acceptanceTestSlug: "correctly-implement-ccip-read-for-offchain-dns-names",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        This variation of the baseline test changes the input name to {dperriComEnsNameSpan}.
      </p>
      <p className="w-full">
        This acceptance test verifies correct implementation of CCIP-read for DNS names that have
        not been imported onchain but are still valid ENS names.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:46:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly resolves the Ethereum Mainnet address of{" "}
          {dperriComEnsNameSpan} to {dperriComAddressSpan}.
        </p>
        <img
          alt="WalletChan correctly resolves the address for dperri.com"
          src={correctlyImplementCcipReadForOffchainDnsNamesExamplePassImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test when it does not accept ENS names such as {dperriComEnsNameSpan} as
          input or fails to correctly resolve this input to anything other than the correct value (
          {dperriComAddressSpan}).
        </p>
        <img
          alt="Ambire Wallet fails to resolve the address for dperri.com"
          src={correctlyImplementCcipReadForOffchainDnsNamesExampleFailImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

const lightkeeperEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>lightkeeper.eth</span>
);

const lightkeeperAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
  </span>
);

const acceptanceTest5 = {
  order: 4,
  acceptanceTestSlug: "correctly-resolve-names-for-different-evm-chains",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        This variation of the baseline test makes two changes: (1) the input name changes to{" "}
        {lightkeeperEnsNameSpan} and (2) the context of the resolution changes from Ethereum Mainnet
        to another EVM chain (the Base chain that&apos;s operated by Coinbase).
      </p>
      <p className="w-full">
        This acceptance test verifies correct implementation of resolving the address for a name in
        the context of different EVM chains.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:46:00Z") },
    ],
    // TODO: Insert true example of an app passing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly resolves the Base chain address of{" "}
          {lightkeeperEnsNameSpan} to {lightkeeperAddressSpan}.
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
    ],
    // TODO: Insert true example of an app failing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test when it fails to correctly resolve this input to anything other
          than the correct value ({lightkeeperAddressSpan}).
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

const gregskrilEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>gregskril.eth</span>
);

const gregskrilAddressBitcoinSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>3NnpwUMGdGKuYaPDQagNXAgVXz9HdnJDNS</span>
);

const acceptanceTest6 = {
  order: 5,
  acceptanceTestSlug: "correctly-resolve-names-for-bitcoin",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        This variation of the baseline test makes two changes: (1) the input name changes to{" "}
        {gregskrilEnsNameSpan} and (2) the context of the resolution changes from Ethereum Mainnet
        to the non-EVM chain Bitcoin.
      </p>
      <p className="w-full">
        This acceptance test verifies correct implementation of resolving the address for a name in
        the context of a non-EVM chain such as Bitcoin.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:46:00Z") },
    ],
    // TODO: Insert true example of an app passing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly resolves the Bitcoin address of{" "}
          {gregskrilEnsNameSpan} to {gregskrilAddressBitcoinSpan}.
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
    ],
    // TODO: Insert true example of an app failing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test when it does not accept ENS names such as {gregskrilEnsNameSpan} as
          input when sending to non-EVM chains such as Bitcoin or fails to correctly resolve this
          input to anything other than the correct value ({gregskrilAddressBitcoinSpan}).
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

const gregskrilAddressSolanaSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    2JQANQn1kccapb7GT8XScf9qBy59uMo9vh9WwVQhwStJ
  </span>
);

const acceptanceTest7 = {
  order: 6,
  acceptanceTestSlug: "correctly-resolve-names-for-solana",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        This variation of the baseline test makes two changes: (1) the input name changes to{" "}
        {gregskrilEnsNameSpan} and (2) the context of the resolution changes from Ethereum Mainnet
        to the non-EVM chain Solana.
      </p>
      <p className="w-full">
        This acceptance test verifies correct implementation of resolving the address for a name in
        the context of a non-EVM chain such as Solana.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:46:00Z") },
    ],
    // TODO: Insert true example of an app passing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly resolves the Solana address of{" "}
          {gregskrilEnsNameSpan} to {gregskrilAddressSolanaSpan}.
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
    ],
    // TODO: Insert true example of an app failing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test when it does not accept ENS names such as {gregskrilEnsNameSpan} as
          input when sending to non-EVM chains such as Solana or fails to correctly resolve this
          input to anything other than the correct value ({gregskrilAddressSolanaSpan}).
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

const zissouEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>zissou.eth</span>
);

const zissouAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    <i>(invalid address)</i>
  </span>
);

const acceptanceTest8 = {
  order: 7,
  acceptanceTestSlug: "correctly-handle-resolution-for-chains-with-invalid-address-formatting",
  description: (
    <div className={acceptanceTestDetailsContainerStyles}>
      <p className="w-full">
        This variation of the baseline test makes two changes: (1) the input name changes to{" "}
        {zissouEnsNameSpan} and (2) the context of the resolution changes from Ethereum Mainnet to
        the EVM chain Base.
      </p>
      <p className="w-full">
        This acceptance test verifies correct implementation of resolving the address for a name on
        an EVM chain that is not formatted as a valid EVM address (not a 20-byte hex value), instead
        resolving to {zissouAddressSpan}.
      </p>
    </div>
  ),
  examplePass: {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:46:00Z") },
    ],
    // TODO: Insert true example of an app passing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test so long as it gracefully handles the resolved address being an
          invalid EVM address. Here we define gracefully as not breaking the overall user
          experience.
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
    ],
    // TODO: Insert true example of an app failing this acceptance test when performing the benchmarks
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test if the resolution of an invalid EVM address is not handled
          gracefully and breaks the overall user experience.
        </p>
        <img
          alt="Placeholder"
          src={acceptanceTestExampleImagePlaceholder.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

const technicalDetails = {
  ensBestPracticeOverview,
  benefitFromUsingEnsTitle,
  benefitFromUsingEns,
  implementationRecommendations,
  acceptanceTests: [
    acceptanceTest1,
    acceptanceTest2,
    acceptanceTest3,
    acceptanceTest4,
    acceptanceTest5,
    acceptanceTest6,
    acceptanceTest7,
    acceptanceTest8,
  ],
} as const satisfies BestPracticeTechnicalDetails;

export default technicalDetails;
