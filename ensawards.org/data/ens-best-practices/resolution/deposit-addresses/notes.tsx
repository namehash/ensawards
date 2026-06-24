// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

// Shared note builders for the `deposit-addresses` best practice.
//
// Each acceptance test always uses the same ENS name, expected address, and chain
// (defined once in `technicalDetails.tsx`). These helpers bake those constants in,
// so an app benchmark only needs to supply what actually varies per app:
//   - how the test was run (`method`)
//   - the proof screenshot(s) (`proof`)
//   - the result kind (which builder you call)
//
// If a result is unusual and no builder fits, fall back to `buildBenchmarkNote`
// and write the prose yourself.

import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsCodeStyles,
} from "data/ens-best-practices/styles";
import type { JSX, ReactNode } from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

import {
  dperriComAddressSpan,
  dperriComEnsNameSpan,
  ethereumAddressSpan,
  ethereumNormalizedEnsNameSpan,
  ethereumUnnormalizedEnsNameSpan,
  gregskrilAddressBitcoinSpan,
  gregskrilAddressSolanaSpan,
  gregskrilEnsNameSpan,
  jesseBaseAddressSpan,
  jesseBaseEnsNameSpan,
  lightkeeperAddressSpan,
  lightkeeperEnsNameSpan,
  vitalikAddressSpan,
  vitalikEnsNameSpan,
  zissouEnsNameSpan,
} from "./technicalDetails";

/** A single piece of visual proof (an imported `.png` / `.gif`) for a benchmark note. */
export interface BenchmarkProof {
  /** The imported image asset. */
  image: { src: string };
  /** Accessible description of what the screenshot shows. */
  alt: string;
}

type ProofInput = BenchmarkProof | BenchmarkProof[];

/** How the test was run, e.g. `'the "send" flow'` or
 * `"the quick-search feature on eth.blockscout.com"`. Slotted into "Tested using {method}.". */
type Method = ReactNode;

function toProofs(proof?: ProofInput): BenchmarkProof[] {
  if (!proof) return [];
  return Array.isArray(proof) ? proof : [proof];
}

/**
 * Low-level note shell: a single paragraph of prose followed by zero or more proof
 * screenshots. Use the acceptance-test-specific builders below whenever possible;
 * reach for this directly only for unusual results they don't cover.
 */
export function buildBenchmarkNote({
  children,
  proof,
}: {
  children: ReactNode;
  proof?: ProofInput;
}): JSX.Element {
  const proofs = toProofs(proof);
  return (
    <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
      <p className="w-full">{children}</p>
      {/* A single proof renders as a direct sibling of the prose (matching the
          container's gap); multiple proofs get their own stacked wrapper. */}
      {proofs.length === 1 && (
        <img
          alt={proofs[0].alt}
          src={proofs[0].image.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      )}
      {proofs.length > 1 && (
        <div className="flex flex-col justify-start items-center gap-5">
          {proofs.map((proofItem, index) => (
            <img
              key={index}
              alt={proofItem.alt}
              src={proofItem.image.src}
              className="w-auto h-full max-h-[325px] rounded-xl"
            />
          ))}
        </div>
      )}
    </div>
  );
}

/** The `Not Applicable` keyword, styled consistently. */
const notApplicableSpan = (
  <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>
);

// ---------------------------------------------------------------------------
// Pass notes — one per acceptance test.
// ---------------------------------------------------------------------------

/** AT1: direct onchain .eth subname resolves to its Ethereum Mainnet address. */
export function buildPassNoteForAT1({ method, proof }: { method: Method; proof?: ProofInput }) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The resolved Ethereum Mainnet address of {vitalikEnsNameSpan} is
        correct ({vitalikAddressSpan}).
      </>
    ),
  });
}

/** AT2: a name requiring normalization is normalized and resolved correctly. */
export function buildPassNoteForAT2({ method, proof }: { method: Method; proof?: ProofInput }) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The input {ethereumUnnormalizedEnsNameSpan} was correctly normalized
        to {ethereumNormalizedEnsNameSpan} and resolved to the correct Ethereum Mainnet address (
        {ethereumAddressSpan}).
      </>
    ),
  });
}

/** AT3: CCIP-Read for a .eth subname resolves to its Ethereum Mainnet address. */
export function buildPassNoteForAT3({ method, proof }: { method: Method; proof?: ProofInput }) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The CCIP-Read enabled .eth subname {jesseBaseEnsNameSpan} resolved to
        the correct Ethereum Mainnet address ({jesseBaseAddressSpan}).
      </>
    ),
  });
}

/** AT4: CCIP-Read for an offchain DNS name resolves to its Ethereum Mainnet address. */
export function buildPassNoteForAT4({ method, proof }: { method: Method; proof?: ProofInput }) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The offchain DNS name {dperriComEnsNameSpan} resolved to the correct
        Ethereum Mainnet address via CCIP-Read ({dperriComAddressSpan}).
      </>
    ),
  });
}

/** AT5: a name resolves to its address on a different EVM chain (Base). */
export function buildPassNoteForAT5({ method, proof }: { method: Method; proof?: ProofInput }) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method} in context of the Base chain. The resolved Base chain address of{" "}
        {lightkeeperEnsNameSpan} is correct ({lightkeeperAddressSpan}).
      </>
    ),
  });
}

/** AT6: a name resolves to its Bitcoin address. */
export function buildPassNoteForAT6({ method, proof }: { method: Method; proof?: ProofInput }) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The resolved Bitcoin address of {gregskrilEnsNameSpan} is correct (
        {gregskrilAddressBitcoinSpan}).
      </>
    ),
  });
}

/** AT7: a name resolves to its Solana address. */
export function buildPassNoteForAT7({ method, proof }: { method: Method; proof?: ProofInput }) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The resolved Solana address of {gregskrilEnsNameSpan} is correct (
        {gregskrilAddressSolanaSpan}).
      </>
    ),
  });
}

/** AT8: the app gracefully handles a name whose address is not a valid EVM address. */
export function buildPassNoteForAT8({ method, proof }: { method: Method; proof?: ProofInput }) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The app gracefully handled the resolved address of{" "}
        {zissouEnsNameSpan} being an invalid EVM address without breaking the user experience.
      </>
    ),
  });
}

// ---------------------------------------------------------------------------
// Fail notes — one per acceptance test.
// `extra` is appended as a follow-up sentence for app-specific detail
// (e.g. "The app showed an "invalid domain format" error instead.").
// ---------------------------------------------------------------------------

type FailArgs = { method: Method; proof?: ProofInput; extra?: ReactNode };

function withExtra(extra?: ReactNode): ReactNode {
  return extra ? <> {extra}</> : null;
}

/** AT1 failed: a direct onchain .eth subname did not resolve to its correct address. */
export function buildFailNoteForAT1({ method, proof, extra }: FailArgs) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The resolved Ethereum Mainnet address of {vitalikEnsNameSpan} is{" "}
        <i>NOT</i> correct (expected {vitalikAddressSpan}).{withExtra(extra)}
      </>
    ),
  });
}

/** AT2 failed: a name requiring normalization did not resolve to its correct address. */
export function buildFailNoteForAT2({ method, proof, extra }: FailArgs) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The input {ethereumUnnormalizedEnsNameSpan} (normalized to{" "}
        {ethereumNormalizedEnsNameSpan}) was <i>NOT</i> resolved to its expected Ethereum Mainnet
        address ({ethereumAddressSpan}).{withExtra(extra)}
      </>
    ),
  });
}

/** AT3 failed: CCIP-Read for a .eth subname did not resolve to its correct address. */
export function buildFailNoteForAT3({ method, proof, extra }: FailArgs) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The CCIP-Read enabled .eth subname {jesseBaseEnsNameSpan} was{" "}
        <i>NOT</i> resolved to its expected Ethereum Mainnet address ({jesseBaseAddressSpan}).
        {withExtra(extra)}
      </>
    ),
  });
}

/** AT4 failed: CCIP-Read for an offchain DNS name did not resolve to its correct address. */
export function buildFailNoteForAT4({ method, proof, extra }: FailArgs) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The offchain DNS name {dperriComEnsNameSpan} was <i>NOT</i> resolved
        to its expected Ethereum Mainnet address ({dperriComAddressSpan}).{withExtra(extra)}
      </>
    ),
  });
}

/** AT5 failed: a name did not resolve to its address on a different EVM chain (Base). */
export function buildFailNoteForAT5({ method, proof, extra }: FailArgs) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method} in context of the Base chain. For {lightkeeperEnsNameSpan} the
        resolved address is <i>NOT</i> the expected Base chain address ({lightkeeperAddressSpan}).
        {withExtra(extra)}
      </>
    ),
  });
}

/** AT6 failed: a name did not resolve to its Bitcoin address. */
export function buildFailNoteForAT6({ method, proof, extra }: FailArgs) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. For {gregskrilEnsNameSpan} the resolved address is <i>NOT</i> the
        expected Bitcoin address ({gregskrilAddressBitcoinSpan}).{withExtra(extra)}
      </>
    ),
  });
}

/** AT7 failed: a name did not resolve to its Solana address. */
export function buildFailNoteForAT7({ method, proof, extra }: FailArgs) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. For {gregskrilEnsNameSpan} the resolved address is <i>NOT</i> the
        expected Solana address ({gregskrilAddressSolanaSpan}).{withExtra(extra)}
      </>
    ),
  });
}

/** AT8 failed: the app did not gracefully handle a name with an invalid EVM address. */
export function buildFailNoteForAT8({ method, proof, extra }: FailArgs) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The app did <i>NOT</i> gracefully handle the resolved address of{" "}
        {zissouEnsNameSpan} being an invalid EVM address, breaking the user experience.
        {withExtra(extra)}
      </>
    ),
  });
}

// ---------------------------------------------------------------------------
// Special-case fail note: the app doesn't accept ENS names at all (common for
// wallets). Used for AT1; the remaining tests then become Not Applicable via
// `buildNotApplicableForFailedTest({ testNumber: 1 })`.
// ---------------------------------------------------------------------------

export function buildEnsNotSupportedNote({
  method,
  proof,
}: {
  method: Method;
  proof?: ProofInput;
}) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Tested using {method}. The app doesn't support the use of ENS names at all as the recipient
        identifier, so it never resolves the expected Ethereum Mainnet address of{" "}
        {vitalikEnsNameSpan} ({vitalikAddressSpan}), which we classify as a failure.
      </>
    ),
  });
}

// ---------------------------------------------------------------------------
// Not Applicable notes.
// ---------------------------------------------------------------------------

/** The app has no concept of the given non-EVM chain (Bitcoin / Solana). */
export function buildNotApplicableForNonEvmChain({
  chain,
  proof,
}: {
  chain: "Bitcoin" | "Solana";
  proof?: ProofInput;
}) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        The app doesn't have context of the non-EVM chain {chain} and therefore we classify this
        acceptance test as {notApplicableSpan}.
      </>
    ),
  });
}

/** The app has no concept of the given EVM chain (e.g. Base). */
export function buildNotApplicableForEvmChain({
  chain,
  proof,
}: {
  chain: "Base";
  proof?: ProofInput;
}) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        The app doesn't have context of the EVM chain {chain} and therefore we classify this
        acceptance test as {notApplicableSpan}.
      </>
    ),
  });
}

/**
 * This test can't be evaluated because a prerequisite acceptance test failed.
 * `scope` describes what the app doesn't support, e.g. `"at all"` (when Acceptance
 * Test 1 fails) or `"on Base"` (when Acceptance Test 5 fails).
 */
export function buildNotApplicableForFailedTest({
  testNumber,
  scope = "at all",
  proof,
}: {
  testNumber: number;
  scope?: ReactNode;
  proof?: ProofInput;
}) {
  return buildBenchmarkNote({
    proof,
    children: (
      <>
        Based on the results of the{" "}
        <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test {testNumber}</span>
        , the app doesn't appear to support ENS resolution {scope} and therefore we classify this
        acceptance test as {notApplicableSpan}.
      </>
    ),
  });
}
