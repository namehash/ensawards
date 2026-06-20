---
name: generate-app-benchmark
description: >-
  Generate ENS Awards app benchmark `index.tsx` files for a target best practice
  from a `manual.json` test log and nearby proof images. Use when asked to
  unwrap/scaffold benchmark boilerplate for one or more apps against a best
  practice (e.g. "deposit-addresses"), turning manual test results into typed
  AcceptanceTestBenchmarks.
disable-model-invocation: true
---

# Generate App Benchmark

Turn a hand-written `manual.json` test log plus nearby proof images into a typed
`index.tsx` benchmark file for a target best practice, for each app in a list.

## Inputs

1. **apps** — list of app slugs (directory names under `ensawards.org/data/apps/`).
2. **best practice** — target `bestPracticeSlug` (e.g. `deposit-addresses`).
3. **contributor** — a key from the `contributors` record (e.g. `llev`).
4. **datetime** (optional) — ISO-8601 UTC timestamp for the contribution's
   `lastUpdated`. Default to the machine's current time:
   `date -u +%Y-%m-%dT%H:%M:%SZ`.

## Workflow

Copy this checklist and track progress:

```
- [ ] Step 1: Resolve the best practice's ordered acceptance test slugs
- [ ] Step 2: Resolve datetime (use input or current UTC time)
- [ ] For each app:
  - [ ] Step 3: Locate manual.json + proof media
  - [ ] Step 3b: Normalize proof media to .png / .gif
  - [ ] Step 4: Generate the best-practice index.tsx
  - [ ] Step 5: Wire it into the app's main benchmarks/index.tsx
- [ ] Step 6: Typecheck
```

### Step 1: Resolve acceptance test slugs + note builders (once)

The `manual.json` test `id`s map **positionally** (1-based) to the best
practice's acceptance tests, in declaration order. Read them from the best
practice's technical details:

```
ensawards.org/data/ens-best-practices/**/<best-practice-slug>/technicalDetails.tsx
```

Sort the acceptance tests by `order` (slug as the tiebreaker) before mapping `manual.json` ids to slugs.

#### Prefer the best practice's shared note builders

A best practice may ship a `notes.tsx` module next to its `technicalDetails.tsx`:

```
ensawards.org/data/ens-best-practices/<category>/<best-practice-slug>/notes.tsx
```

If it exists, **the benchmark notes must be generated with these builders** —
do **not** hand-write `<div>`/`<p>`/`<img>` markup or import the canonical
`*Span` constants into the app file. Each acceptance test always exercises the
same ENS name, expected address, and chain, so those are already baked into the
builders. The app file only supplies what varies per app:

- `method` — how the test was run (e.g. `'the "send" flow'`)
- `proof` — the screenshot(s) (`{ image, alt }`, or an array for multiple)
- which builder you call (encodes the result + acceptance test)

Read `notes.tsx` to see the available builders. `deposit-addresses` exports, for
example:

- `buildPassNoteForAT1`…`buildPassNoteForAT8` — a name resolves correctly.
- `buildFailNoteForAT1`…`buildFailNoteForAT8` — a name fails to resolve; each
  takes an optional `extra` follow-up sentence for app-specific detail.
- `buildEnsNotSupportedNote` — the app doesn't accept ENS names at all (AT1).
- `buildNotApplicableForNonEvmChain({ chain })` — Bitcoin / Solana not supported.
- `buildNotApplicableForFailedTest({ testNumber, scope })` — a prerequisite test
  failed (`scope` defaults to `"at all"`; use `"on Base"` for the AT5 cascade).
- `buildBenchmarkNote({ children, proof })` — escape hatch for an unusual result
  no builder covers. Only here may you import `*Span` constants from
  `technicalDetails` to write custom prose.

If `notes.tsx` doesn't exist for the target best practice, fall back to writing
notes inline (see the legacy guidance at the end of Step 4), referencing the
exported `*Span` constants from `technicalDetails.tsx` (add `export` if missing).

### Step 3: Locate manual.json + proof media (per app)

Search the app's benchmarks dir:

```
ensawards.org/data/apps/<app>/benchmarks/**/manual.json
```

Pick the `manual.json` whose directory corresponds to the target best practice
(directory name may differ slightly from the slug, e.g. `deposit-address` vs
`deposit-addresses`). Proof media sit in the **same directory**, named with a
trailing test id: `at-<id>.<ext>` or `ac-<id>.<ext>`. Match each file to a test
by its id. A test may have no media. Source files can be images (`.png`, `.jpg`,
`.webp`, ...) or screen recordings (`.mov`, `.mp4`, ...).

### Step 3b: Normalize proof media to .png / .gif

The benchmark file may only reference `.png` or `.gif` assets. Normalize each
proof file `at-<id>.<ext>` in place, then `git rm` the original if its extension
changed:

| Source                                                      | Action                  |
| ----------------------------------------------------------- | ----------------------- |
| `.png`                                                      | keep as-is              |
| `.gif`                                                      | keep as-is              |
| other image (`.jpg`/`.jpeg`/`.webp`/`.heic`/`.tiff`/`.bmp`) | convert → `at-<id>.png` |
| video (`.mov`/`.mp4`/`.m4v`/`.webm`/`.avi`/`.mkv`)          | convert → `at-<id>.gif` |

Conversions can be finicky; pick commands by OS (default to **macOS**).

**Image → PNG**

macOS (built-in `sips`, no install):

```bash
sips -s format png "at-1.jpg" --out "at-1.png" && git rm "at-1.jpg"
```

Windows (ImageMagick):

```powershell
magick "at-1.jpg" "at-1.png"; git rm "at-1.jpg"
```

**Video → GIF** (both OSes use `ffmpeg`; install via `brew install ffmpeg` /
`winget install Gyan.FFmpeg` if missing):

```bash
ffmpeg -y -i "at-5.mov" \
  -vf "fps=12,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  -loop 0 "at-5.gif" && git rm "at-5.mov"
```

Tune `fps` / `scale` down if the resulting `.gif` is large. After this step every
proof file is a `.png` or `.gif`, and that final extension is what the import in
Step 4 must reference.

`manual.json` schema:

```json
{
  "method": "Default description of how every test was run.",
  "tests": [
    { "id": 1, "status": "passed", "reason": "Shown correct address" },
    { "id": 5, "status": "failed", "reason": "...", "method": "Per-test method override" },
    { "id": 6, "status": "not-applicable", "reason": "app doesn't support Bitcoin" }
  ]
}
```

Status → result mapping:

| `status`           | `BenchmarkResults`               |
| ------------------ | -------------------------------- |
| `passed`           | `BenchmarkResults.Pass`          |
| `partially-passed` | `BenchmarkResults.PartialPass`   |
| `failed`           | `BenchmarkResults.Fail`          |
| `not-applicable`   | `BenchmarkResults.NotApplicable` |

### Step 4: Generate `index.tsx`

Write `index.tsx` in the directory that holds `manual.json` (replace any empty
`index.ts` there — JSX requires `.tsx`). Export a default
`AcceptanceTestBenchmarks` keyed by acceptance test slug. Include **one entry per
test present in `manual.json`** (keyed by the slug at that id's position).

Notes: call the right note builder per entry (see Step 1). Pick the builder from
the acceptance test id (its 1-based position) and the recorded `status`, then pass:

- `method` — derive a short phrase from the per-test `method` override (else the
  global `method`) describing **how** the test was run. Omit the chain context the
  builder already bakes in (e.g. don't repeat "on Base" for the AT5 builder).
- `proof` — `{ image: <import>, alt: "<app> ..." }` when a matching proof image
  exists; multiple images → pass an array. Omit when there's no proof.
- `extra` (fail builders) — an optional extra sentence for app-specific detail
  (e.g. `'The app showed an "invalid domain format" error instead.'`).

The `reason` and `method` strings are **not strict** — they are author notes, not
literal copy. Use them to choose the builder and to phrase `method`/`extra`
naturally and accurately; just don't contradict the recorded `status`.

File template (deposit-addresses; import only the builders + proofs you use):

```tsx
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildPassNoteForAT1,
  // ...one builder per emitted test
} from "data/ens-best-practices/<category>/<best-practice-slug>/notes";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.png";
// ...more proof imports

const <camelCaseBestPracticeSlug> = {
  "<slug-for-id-1>": {
    result: BenchmarkResults.Pass,
    contributions: [{ from: contributors.<contributor>, lastUpdated: parseTimestamp("<datetime>") }],
    notes: buildPassNoteForAT1({
      method: "<how it was tested>",
      proof: { image: at1Proof, alt: "<app> correctly resolves ..." },
    }),
  },
  // ...more entries
} as const satisfies AcceptanceTestBenchmarks;

export default <camelCaseBestPracticeSlug>;
```

The single `} as const satisfies AcceptanceTestBenchmarks;` at the end type-checks
every entry, so individual entries don't need a per-entry
`as const satisfies AcceptanceTestBenchmark` (and the `AcceptanceTestBenchmark`
type import isn't needed in deposit-addresses files).

Result-specific entry examples — match these renderings:

**Passed** (proof image present):

```tsx
"at01-resolve-onchain-name": {
  result: BenchmarkResults.Pass,
  contributions: [{ from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-15T06:40:48Z") }],
  notes: buildPassNoteForAT1({
    method: "the name lookup search on etherscan.io",
    proof: { image: at1Proof, alt: "Etherscan correctly resolves the deposit address" },
  }),
},
```

**Failed** (the builder bakes in the ENS name, expected address, and `<i>NOT</i>`
emphasis; add `extra` for any app-specific detail):

```tsx
"at05-resolve-name-on-other-evm-chain": {
  result: BenchmarkResults.Fail,
  contributions: [{ from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-09T06:37:10Z") }],
  notes: buildFailNoteForAT5({
    method: "the name lookup search on basescan.org",
    proof: { image: at5Proof, alt: "Etherscan fails to resolve the Base deposit address" },
    extra: "The app showed the Ethereum Mainnet address instead.",
  }),
},
```

**Not applicable** (no proof needed — omit `proof`):

```tsx
"at06-resolve-bitcoin-address": {
  result: BenchmarkResults.NotApplicable,
  contributions: [{ from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-08T16:18:00Z") }],
  notes: buildNotApplicableForNonEvmChain({ chain: "Bitcoin" }),
},
```

**Escape hatch** (result a builder doesn't cover — write custom prose; this is the
only place you may import `*Span` constants from `technicalDetails`):

```tsx
notes: buildBenchmarkNote({
  proof: { image: at2Proof, alt: "..." },
  children: (
    <>
      Tested using {method}. For {ethereumUnnormalizedEnsNameSpan} the resolved address is correct
      ({ethereumAddressSpan}), but the app behaves inconsistently ... so we count this as a failure.
    </>
  ),
}),
```

**Legacy fallback** (only when the best practice has no `notes.tsx`): write the
note inline as `<div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>`
with a `<p>` and optional `<img>`, naming the concrete ENS name and expected
address via the `*Span` constants imported from `technicalDetails.tsx`.

### Step 5: Wire into the app's main benchmarks file

In `ensawards.org/data/apps/<app>/benchmarks/index.tsx`, replace the target best
practice's placeholder block (the slug mapping to `undefined` entries) with a
reference to the generated module, and add the import:

```tsx
import depositAddresses from "./resolution/deposit-address";
// ...
  "deposit-addresses": depositAddresses,
```

Use the actual directory where `manual.json` lives for the import path. Remove
any imports in the main file that become unused as a result.

### Step 6: Typecheck

```bash
cd ensawards.org && pnpm astro sync && pnpm exec tsc --noEmit
```

Fix any errors before finishing. The IDE may show a stale "is not a module"
error referencing a deleted `index.ts`; `tsc` is the source of truth.

## Special overrides

### deposit-addresses

Use the `notes.tsx` builders (see Step 1) for these recurring patterns instead of
writing markup:

- **App doesn't accept ENS names at all** (AT1 fails this way): use
  `buildEnsNotSupportedNote({ method, proof })`. The remaining acceptance tests
  then become Not Applicable via `buildNotApplicableForFailedTest({ testNumber: 1 })`
  (default `scope: "at all"`).
- **`not-applicable` because a dependent test failed** (e.g. `reason` says
  "at#5 is failed"): `buildNotApplicableForFailedTest({ testNumber, scope })`.
  For the AT5 / Base cascade pass `scope: "on Base"`.
- **Non-EVM chain not supported** (Bitcoin / Solana):
  `buildNotApplicableForNonEvmChain({ chain: "Bitcoin" })` /
  `{ chain: "Solana" }` (pass `proof` if a screenshot exists).

Never import `*Span` constants or `bestPracticeTechnicalDetailsCodeStyles` /
`acceptanceTestDetailsContainerStyles` into a deposit-addresses app file — the
builders own all of that. The only exception is the `buildBenchmarkNote` escape
hatch, where you write custom prose and may import the spans you need.

## Notes

- Only emit entries for ids present in `manual.json`. Other acceptance tests of
  the best practice stay `undefined` in the main file (or are omitted from the
  generated module and left `undefined` in the main file).
- Keep import grouping/order consistent with existing benchmark files: `data/*`
  imports, then `@ensnode/*`, then `@/*`, then relative imports.
