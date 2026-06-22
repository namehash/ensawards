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

import at01ResolveOnchainNameExampleFailImage from "./images/at01-resolve-onchain-name-example-fail.gif";
import at01ResolveOnchainNameExamplePassImage from "./images/at01-resolve-onchain-name-example-pass.gif";
import at02ResolveNameNeedingNormalizationExampleFailImage from "./images/at02-resolve-name-needing-normalization-example-fail.png";
import at02ResolveNameNeedingNormalizationExamplePassImage from "./images/at02-resolve-name-needing-normalization-example-pass.gif";
import at03ResolveOffchainEthSubnameExampleFailImage from "./images/at03-resolve-offchain-eth-subname-example-fail.gif";
import at03ResolveOffchainEthSubnameExamplePassImage from "./images/at03-resolve-offchain-eth-subname-example-pass.gif";
import at04ResolveOffchainDnsNameExampleFailImage from "./images/at04-resolve-offchain-dns-name-example-fail.gif";
import at04ResolveOffchainDnsNameExamplePassImage from "./images/at04-resolve-offchain-dns-name-example-pass.gif";
import at05ResolveNameOnOtherEvmChainExampleFailImage from "./images/at05-resolve-name-on-other-evm-chain-example-fail.gif";
import at05ResolveNameOnOtherEvmChainExamplePassImage from "./images/at05-resolve-name-on-other-evm-chain-example-pass.png";
import at06ResolveBitcoinAddressExampleFailImage from "./images/at06-resolve-bitcoin-address-example-fail.png";
import at06ResolveBitcoinAddressExamplePassImage from "./images/at06-resolve-bitcoin-address-example-pass.png";
import at07ResolveSolanaAddressExampleFailImage from "./images/at07-resolve-solana-address-example-fail.gif";
import at07ResolveSolanaAddressExamplePassImage from "./images/at07-resolve-solana-address-example-pass.png";
import at08HandleInvalidAddressFormatExampleFailImage from "./images/at08-handle-invalid-address-format-example-fail.png";
import at08HandleInvalidAddressFormatExamplePassImage from "./images/at08-handle-invalid-address-format-example-pass.png";

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

export const vitalikEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>vitalik.eth</span>
);

export const vitalikAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
  </span>
);

const acceptanceTest1 = {
  order: 0,
  acceptanceTestSlug: "at01-resolve-onchain-name",
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
          src={at01ResolveOnchainNameExamplePassImage.src}
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
          src={at01ResolveOnchainNameExampleFailImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

export const ethereumUnnormalizedEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>Ξthereum.eth</span>
);

export const ethereumNormalizedEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>ξthereum.eth</span>
);

export const ethereumAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    0x31C09F0616532F7a6f33d9ee4e1F45Ea529481af
  </span>
);

const acceptanceTest2 = {
  order: 1,
  acceptanceTestSlug: "at02-resolve-name-needing-normalization",
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
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly normalizes the input name from{" "}
          {ethereumUnnormalizedEnsNameSpan} to {ethereumNormalizedEnsNameSpan} and then resolves the
          Ethereum Mainnet address of {ethereumNormalizedEnsNameSpan} to {ethereumAddressSpan}.
        </p>
        <img
          alt="Rabby correctly resolves the address for Ξthereum.eth"
          src={at02ResolveNameNeedingNormalizationExamplePassImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T12:36:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test when it does not accept normalizable ENS names such as{" "}
          {ethereumUnnormalizedEnsNameSpan} as input or fails to correctly normalize this input to{" "}
          {ethereumNormalizedEnsNameSpan} or fails to correctly resolve this input to anything other
          than the correct value ({ethereumAddressSpan}).
        </p>
        <img
          alt="Gemini Wallet fails to correctly normalize and resolve the address for Ξthereum.eth"
          src={at02ResolveNameNeedingNormalizationExampleFailImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

export const jesseBaseEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>jesse.base.eth</span>
);

export const jesseBaseAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    0x2211d1D0020DAEA8039E46Cf1367962070d77DA9
  </span>
);

const acceptanceTest3 = {
  order: 2,
  acceptanceTestSlug: "at03-resolve-offchain-eth-subname",
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
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly resolves the Ethereum Mainnet address of{" "}
          {jesseBaseEnsNameSpan} to {jesseBaseAddressSpan}.
        </p>
        <img
          alt="Safe{Wallet} correctly resolves the address for jesse.base.eth"
          src={at03ResolveOffchainEthSubnameExamplePassImage.src}
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
          An app fails this test when it does not accept ENS names such as {jesseBaseEnsNameSpan} as
          input or fails to correctly resolve this input to anything other than the correct value (
          {jesseBaseAddressSpan}).
        </p>
        <img
          alt="Phantom fails to resolve the address for jesse.base.eth"
          src={at03ResolveOffchainEthSubnameExampleFailImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

export const dperriComEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>dperri.com</span>
);

export const dperriComAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    0x0b08dA7068b73A579Bd5E8a8290ff8afd37bc32A
  </span>
);

const acceptanceTest4 = {
  order: 3,
  acceptanceTestSlug: "at04-resolve-offchain-dns-name",
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
          src={at04ResolveOffchainDnsNameExamplePassImage.src}
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
          src={at04ResolveOffchainDnsNameExampleFailImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

export const lightkeeperEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>lightkeeper.eth</span>
);

export const lightkeeperAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
  </span>
);

const acceptanceTest5 = {
  order: 4,
  acceptanceTestSlug: "at05-resolve-name-on-other-evm-chain",
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
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T07:51:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly resolves the Base chain address of{" "}
          {lightkeeperEnsNameSpan} to {lightkeeperAddressSpan}.
        </p>
        <img
          alt="Crypto.com Wallet correctly resolves the address for lightkeeper.eth on the Base chain"
          src={at05ResolveNameOnOtherEvmChainExamplePassImage.src}
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
          An app fails this test when it fails to correctly resolve this input to anything other
          than the correct value ({lightkeeperAddressSpan}).
        </p>
        <img
          alt="Rabby resolves lightkeeper.eth to incorrect address on the Base chain"
          src={at05ResolveNameOnOtherEvmChainExampleFailImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

export const gregskrilEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>gregskril.eth</span>
);

export const gregskrilAddressBitcoinSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>3NnpwUMGdGKuYaPDQagNXAgVXz9HdnJDNS</span>
);

const acceptanceTest6 = {
  order: 5,
  acceptanceTestSlug: "at06-resolve-bitcoin-address",
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
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly resolves the Bitcoin address of{" "}
          {gregskrilEnsNameSpan} to {gregskrilAddressBitcoinSpan}.
        </p>
        <img
          alt="Coinbase Wallet correctly resolves the address for gregskril.eth on Bitcoin"
          src={at06ResolveBitcoinAddressExamplePassImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T14:54:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test when it does not accept ENS names such as {gregskrilEnsNameSpan} as
          input when sending to non-EVM chains such as Bitcoin or fails to correctly resolve this
          input to anything other than the correct value ({gregskrilAddressBitcoinSpan}).
        </p>
        <img
          alt="Phantom fails to resolve the address for gregskril.eth on Bitcoin"
          src={at06ResolveBitcoinAddressExampleFailImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

export const gregskrilAddressSolanaSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    2JQANQn1kccapb7GT8XScf9qBy59uMo9vh9WwVQhwStJ
  </span>
);

const acceptanceTest7 = {
  order: 6,
  acceptanceTestSlug: "at07-resolve-solana-address",
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
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test when it correctly resolves the Solana address of{" "}
          {gregskrilEnsNameSpan} to {gregskrilAddressSolanaSpan}.
        </p>
        <img
          alt="OKX Wallet correctly resolves the address for gregskril.eth on Solana"
          src={at07ResolveSolanaAddressExamplePassImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T14:51:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test when it does not accept ENS names such as {gregskrilEnsNameSpan} as
          input when sending to non-EVM chains such as Solana or fails to correctly resolve this
          input to anything other than the correct value ({gregskrilAddressSolanaSpan}).
        </p>
        <img
          alt="Coinbase Wallet fails to resolve the address for gregskril.eth on Solana"
          src={at07ResolveSolanaAddressExampleFailImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkFail,
} as const satisfies AcceptanceTest;

export const zissouEnsNameSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>zissou.eth</span>
);

export const zissouAddressSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>
    <i>(invalid address)</i>
  </span>
);

const acceptanceTest8 = {
  order: 7,
  acceptanceTestSlug: "at08-handle-invalid-address-format",
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
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T07:57:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app passes this test so long as it gracefully handles the resolved address being an
          invalid EVM address. Here we define gracefully as not breaking the overall user
          experience.
        </p>
        <img
          alt="Crypto.com Wallet gracefully handles the invalid address for zissou.eth on the Base chain"
          src={at08HandleInvalidAddressFormatExamplePassImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmarkPass,
  exampleFail: {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2026-06-18T15:49:00Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T12:25:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          An app fails this test if the resolution of an invalid EVM address is not handled
          gracefully and breaks the overall user experience.
        </p>
        <p className="w-full">
          Although the UI shows a resolved address, this fails because {zissouEnsNameSpan} cannot be
          resolved on Base (because the address record saved on Base for this name is not a valid
          EVM address) and is silently falling back to the Ethereum Mainnet address, which risks
          irrecoverable loss of funds.
        </p>
        <img
          alt="MetaMask resolves zissou.eth to the Ethereum Mainnet address instead of the Base address."
          src={at08HandleInvalidAddressFormatExampleFailImage.src}
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
