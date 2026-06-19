---
name: rearrange-app-benchmarks
description: >-
  Migrate an ENS Awards app's benchmarks/index.tsx from the old single-file
  layout to the new per-best-practice split-module layout, without changing any
  benchmark data. Use when asked to "rearrange <app> to new structure" / port an
  app's benchmarks to the new structure. Works for any app under
  ensawards.org/data/apps/.
disable-model-invocation: true
---

# Rearrange App Benchmarks

Restructure an app's benchmarks to the new layout (canonical example:
`etherscan-explorer`) from the old layout (e.g. `blockscout-explorer`). This is a
**pure refactor**: the app must compile, lint, and render exactly as before. Do
**not** add, remove, or change any benchmark data, results, contributions, notes,
or images.

## Input

- **app** — one app slug (directory under `ensawards.org/data/apps/`).

## Target layout (new)

`benchmarks/index.tsx` references split modules and orders best practices as:

1. `"ensv2-ready-resolution"` — imported from `./resolution/ensv2-ready-resolution`
2. `"deposit-addresses"` — imported from `./resolution/deposit-address`
3. legacy contract-naming best practices (`display-named-smart-contracts-mainnet`,
   `display-named-smart-contracts-l2-chains`) — left **inline and unchanged**, moved
   to the **bottom**, under their existing `TODO: Contract Naming ...` comment.

Each split module lives at `benchmarks/resolution/<dir>/index.tsx` and
`export default`s an `AcceptanceTestBenchmarks` object. Its proof image(s) sit in
the same directory.

## Workflow

```
- [ ] Step 1: Read the app's benchmarks/index.tsx; note which best practices exist
- [ ] Step 2: Extract ensv2-ready-resolution into a split module (if present)
- [ ] Step 3: Extract deposit-addresses into a split module (if present)
- [ ] Step 4: Rewrite the main index.tsx (reorder + imports)
- [ ] Step 5: Typecheck + lint
```

### Step 2: Extract `ensv2-ready-resolution` (only if the key exists)

1. Create `benchmarks/resolution/ensv2-ready-resolution/`.
2. Move the proof image(s) imported by this block into that directory, renamed
   `ac-1.png`, `ac-2.png`, ... (keep the original extension), using `git mv` to
   preserve history.
3. Create `benchmarks/resolution/ensv2-ready-resolution/index.tsx` that
   `export default`s the **same** benchmark object, copied **verbatim** (results,
   contributions, notes, alt text unchanged). Update the proof image import(s) to
   the local `./ac-1.png`.

Module template (mirror the verbatim content; only imports + image paths change):

```tsx
import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImage from "./ac-1.png";

const ensv2ReadyResolution = {
  // ...the exact same entry/entries that were inline in the main file...
} as const satisfies AcceptanceTestBenchmarks;

export default ensv2ReadyResolution;
```

Only import the symbols the moved content actually uses (e.g. if every entry is
`undefined`, the module needs just `AcceptanceTestBenchmarks`).

### Step 3: Extract `deposit-addresses` (only if the key exists)

1. Create `benchmarks/resolution/deposit-address/` if it doesn't exist.
2. If a legacy `benchmarks/deposit-address/` source folder exists (e.g.
   `manual.json` + `at-*.png`), `git mv` it to `benchmarks/resolution/deposit-address/`
   so source assets are co-located for a later `generate-app-benchmark` run.
   **Do not** consume `manual.json` here — this skill adds no benchmarks.
3. Create `benchmarks/resolution/deposit-address/index.tsx` that `export default`s
   the **same** `deposit-addresses` record copied verbatim from the main file
   (typically every acceptance test mapped to `undefined`).

All-`undefined` module example:

```tsx
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";

const depositAddresses = {
  "correctly-resolve-direct-onchain-subname-address": undefined,
  "correctly-resolve-names-requiring-normalization": undefined,
  "correctly-implement-ccip-read-for-eth-subnames": undefined,
  "correctly-implement-ccip-read-for-offchain-dns-names": undefined,
  "correctly-resolve-names-for-different-evm-chains": undefined,
  "correctly-resolve-names-for-bitcoin": undefined,
  "correctly-resolve-names-for-solana": undefined,
  "correctly-handle-resolution-for-chains-with-invalid-address-formatting": undefined,
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
```

### Step 4: Rewrite the main `benchmarks/index.tsx`

- Add imports for the new modules (`./resolution/ensv2-ready-resolution`,
  `./resolution/deposit-address`).
- Remove the proof-image import(s) that moved into the ensv2 module.
- Keep imports still used by the inline legacy blocks (`AcceptanceTestBenchmark`,
  `BenchmarkResults`, `contributors`, `acceptanceTestDetailsContainerStyles`,
  `parseTimestamp`, `cn`, the example proof image).
- Reorder the `benchmarks` object: `ensv2-ready-resolution` first,
  `deposit-addresses` second, then the legacy contract-naming blocks (verbatim) at
  the bottom under their `TODO: Contract Naming ...` comment. Preserve any leading
  commented-out blocks (e.g. `recognize-all-ens-names`).

Resulting shape:

```tsx
import depositAddresses from "./resolution/deposit-address";
import ensv2ReadyResolution from "./resolution/ensv2-ready-resolution";
// ...kept imports...

const benchmarks = {
  // ...preserved commented-out blocks...
  "ensv2-ready-resolution": ensv2ReadyResolution,
  "deposit-addresses": depositAddresses,

  // TODO: `Contract Naming` category is temporarily hidden ...
  "display-named-smart-contracts-mainnet": { /* unchanged inline */ },
  "display-named-smart-contracts-l2-chains": { /* unchanged inline */ },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(<App>, benchmarks);

export default benchmarks;
```

Only include the keys that existed before. Never introduce a best practice the
app didn't already have.

### Step 5: Verify

```bash
cd ensawards.org && pnpm astro sync && pnpm exec tsc --noEmit
```

Then lint the touched files. Everything must pass as before. The IDE may show a
stale "is not a module" error for a just-deleted/renamed file; `tsc` is the
source of truth.

## Notes

- Pure refactor: identical compiled behavior. If you find yourself writing new
  result/notes content, stop — that belongs to `generate-app-benchmark`.
- JSX requires `.tsx`. A split module with only `undefined` entries has no JSX, but
  still use `.tsx` to match the target layout and ease later population.
- Use `git mv` for image/folder moves to preserve history.
