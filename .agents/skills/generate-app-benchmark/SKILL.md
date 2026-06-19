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
  - [ ] Step 3: Locate manual.json + proof images
  - [ ] Step 4: Generate the best-practice index.tsx
  - [ ] Step 5: Wire it into the app's main benchmarks/index.tsx
- [ ] Step 6: Typecheck
```

### Step 1: Resolve acceptance test slugs (once)

The `manual.json` test `id`s map **positionally** (1-based) to the best
practice's acceptance tests, in declaration order. Read them from the best
practice's technical details:

```
ensawards.org/data/ens-best-practices/**/<best-practice-slug>/technicalDetails.tsx
```

Grep `acceptanceTestSlug` there; the order top-to-bottom is the `id` order
(`id: 1` → first slug, etc.).

### Step 3: Locate manual.json + proof images (per app)

Search the app's benchmarks dir:

```
ensawards.org/data/apps/<app>/benchmarks/**/manual.json
```

Pick the `manual.json` whose directory corresponds to the target best practice
(directory name may differ slightly from the slug, e.g. `deposit-address` vs
`deposit-addresses`). Proof images sit in the **same directory**, named with a
trailing test id: `at-<id>.<ext>` or `ac-<id>.<ext>` (`.png`/`.gif`/`.jpg`).
Match each image to a test by its id. A test may have no image.

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

Notes prose: write a short natural sentence per test combining the relevant
`method` (per-test override if present, else the global `method`) and the
`reason`. For failures, emphasize the negative outcome with `<i>NOT</i>` as in
the examples. Include an `<img>` only when a matching proof image exists.

The `reason` and `method` strings are **not strict** — they are author notes,
not literal copy. Freely rephrase, correct, and expand them so the prose reads
naturally and accurately reflects what the test actually verified. Add clarifying
detail where helpful; just don't contradict the recorded `status`.

File template (one import per proof image, in id order):

```tsx
import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import at1Proof from "./at-1.png";
// ...more proof imports

const <camelCaseBestPracticeSlug> = {
  "<slug-for-id-1>": {
    result: BenchmarkResults.Pass,
    contributions: [{ from: contributors.<contributor>, lastUpdated: parseTimestamp("<datetime>") }],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full"><sentence from method + reason></p>
        <img
          alt="<app> correctly resolves ..."
          src={at1Proof.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  // ...more entries
} as const satisfies AcceptanceTestBenchmarks;

export default <camelCaseBestPracticeSlug>;
```

Result-specific entry examples — match these renderings:

**Passed** (proof image present):

```tsx
"correctly-resolve-direct-onchain-subname-address": {
  result: BenchmarkResults.Pass,
  contributions: [{ from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-15T06:40:48Z") }],
  notes: (
    <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
      <p className="w-full">
        Tested using the search flow on etherscan.io. The resolved address is correct.
      </p>
      <img
        alt="Etherscan correctly resolves the deposit address"
        src={at1Proof.src}
        className="w-auto h-full max-h-[325px] rounded-xl"
      />
    </div>
  ),
} as const satisfies AcceptanceTestBenchmark,
```

**Failed** (emphasize the failure):

```tsx
"correctly-resolve-names-for-different-evm-chains": {
  result: BenchmarkResults.Fail,
  contributions: [{ from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-09T06:37:10Z") }],
  notes: (
    <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
      <p className="w-full">
        Tested using the search flow on basescan.org. The shown address was the mainnet
        address, <i>NOT</i> the Base address of that name.
      </p>
      <img
        alt="Etherscan fails to resolve the Base deposit address"
        src={at5Proof.src}
        className="w-auto h-full max-h-[325px] rounded-xl"
      />
    </div>
  ),
} as const satisfies AcceptanceTestBenchmark,
```

**Not applicable** (typically no proof image — omit `<img>`):

```tsx
"correctly-resolve-names-for-bitcoin": {
  result: BenchmarkResults.NotApplicable,
  contributions: [{ from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-08T16:18:00Z") }],
  notes: (
    <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
      <p className="w-full">Etherscan doesn't support Bitcoin.</p>
    </div>
  ),
} as const satisfies AcceptanceTestBenchmark,
```

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

### deposit-address

When a test is `not-applicable` because a **dependent test failed** (e.g. the
`reason` says something like "at#5 is failed"), don't write a literal note.
Instead, derive the cause from the dependency and emit a styled note that
references the failed acceptance test. Import
`bestPracticeTechnicalDetailsCodeStyles` alongside
`acceptanceTestDetailsContainerStyles` from `data/ens-best-practices/styles`.

If the dependency is **Acceptance Test 1** (the app doesn't appear to support ENS
resolution at all):

```tsx
<div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
  <p className="w-full">
    Based on the results of the{" "}
    <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 1</span>, the
    app doesn't appear to support ENS resolution at all and therefore we classify this
    acceptance test as{" "}
    <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
  </p>
</div>
```

If the dependency is the **different-EVM-chains / Base test** (Acceptance Test 5)
that failed, reference Test 5 and say the app doesn't support resolution on Base:

```tsx
<div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
  <p className="w-full">
    Based on the results of the{" "}
    <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 5</span>, the
    app doesn't appear to support ENS resolution on Base and therefore we classify this
    acceptance test as{" "}
    <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
  </p>
</div>
```

For non-EVM chains the app doesn't support, use the same styled `Not Applicable`
treatment (no dependent-test reference):

```tsx
// Bitcoin
<p className="w-full">
  The app doesn't have context of the non-EVM chain Bitcoin and therefore we classify this
  acceptance test as{" "}
  <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
</p>
```

```tsx
// Solana
<p className="w-full">
  The app doesn't have context of the non-EVM chain Solana and therefore we classify this
  acceptance test as{" "}
  <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
</p>
```

## Notes

- Only emit entries for ids present in `manual.json`. Other acceptance tests of
  the best practice stay `undefined` in the main file (or are omitted from the
  generated module and left `undefined` in the main file).
- Keep import grouping/order consistent with existing benchmark files: `data/*`
  imports, then `@ensnode/*`, then `@/*`, then relative imports.
