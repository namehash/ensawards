# Contributing to ENSAwards

Thank you for your interest in contributing to ENSAwards! We welcome contributions from the community and greatly appreciate your time and effort in helping us improve.

## How to contribute?

If you’re here, you likely want to propose changes to our data — perhaps adding new entities, updating benchmark details, or suggesting new best practices for our leaderboards.

Below, you’ll find detailed instructions for each contribution type. If your change doesn’t fit one of these categories, feel free to open a pull request (PR) and describe your proposal there.

### Adding a new `Project`

1. Define it as an independent constant in the [@/data/index.ts](ensawards.org/src/data/projects/index.ts) file and then add the new project to the `Index` list in the same file.
2. Follow its data model that you can look up in the [@/types/index.ts](ensawards.org/src/types/projects.ts) file. You can also have a quick glance at it below.
```typescript
export interface Project {
    id: ProjectId;
    name: string;
    description: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    socials: {
        website: URL;
        twitter: URL;
    };
}
```
3. Include an icon as a React functional component inside [@/components/atoms/icons/ens-integrating-entities/](ensawards.org/src/components/atoms/icons/ens-integrating-entities/) directory. For reference, see [@/components/atoms/icons/ens-integrating-entities/projects/EnsProjectIcon.tsx](ensawards.org/src/components/atoms/icons/ens-integrating-entities/projects/EnsProjectIcon.tsx). Keep in mind that projects and the entities they include can share the same icon. In that case it should be placed in [@/components/atoms/icons/ens-integrating-entities/shared](ensawards.org/src/components/atoms/icons/ens-integrating-entities/shared) directory.
4. You are welcome to propose updates to already added projects using the same approach.

### Relationship between `Projects`, `Protocols` and `Apps`

Although related, these entity types represent different real-world concepts.

* `Protocols` refer to specific sets of deployed smart contracts.
* `Apps` refer to specific software applications.
* `Projects` represent a higher-level initiatives or organizations that might produce multiple related protocols and apps. A project can include multiple protocols and multiple apps.

For this reason, every new `App` or `Protocol` must be associated with a corresponding `Project`.

### Adding a new `Protocol`

1. Define it as an independent constant in the [@/data/index.ts](ensawards.org/src/data/protocols/index.ts) file.
2. Add it to the `DAO_PROTOCOLS` or `DEFI_PROTOCOLS` list in the same file appropriately to its type.
3. Make sure to follow its data model that you can look up in the [@/types/index.ts](ensawards.org/src/types/protocols.ts) file. Remember that the Protocol can represent either a `DAO` or a `DeFi protocol`. Below you can see its most important interface and type:

```typescript
export interface ProtocolAbstract<ProtocolIdT extends ProtocolId, ProtocolT extends ProtocolType> {
    id: ProtocolIdT;
    slug: string;
    protocolType: ProtocolT;
    project: Project; // each protocol belongs to a single project.
    name: string;
    description: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    socials: {
        website: URL;
        twitter: URL;
        ens?: Name;
    };
    ogImagePath?: string;
    twitterOgImagePath?: string;
}

export interface DAOProtocol extends ProtocolAbstract<DAOProtocolId, typeof ProtocolTypes.DAO> {}

export interface DeFiProtocol extends ProtocolAbstract<DeFiProtocolId, typeof ProtocolTypes.DeFi> {}

export type Protocol = DAOProtocol | DeFiProtocol;

```

> **NOTE**
>
> We recommend to skip defining the OG image-related fields. They are optional, and we have a fallback mechanism in place, so the SEO of Protocol's details page won't be degraded.
>
> When your PR with a new `Protocol` gets accepted, the NameHash Labs team will follow it up, providing customized OG images.

4. Include an icon as a React functional component inside [@/components/atoms/icons/ens-integrating-entities/](ensawards.org/src/components/atoms/icons/ens-integrating-entities/) directory. For reference, see [@/components/atoms/icons/ens-integrating-entities/dao-protocols/EnsDaoIcon.tsx](ensawards.org/src/components/atoms/icons/ens-integrating-entities/dao-protocols/EnsDaoIcon.tsx). Keep in mind that projects and the entities they include can share the same icon. In that case it should be placed in [@/components/atoms/icons/ens-integrating-entities/shared](ensawards.org/src/components/atoms/icons/ens-integrating-entities/shared) directory.
5. In your PR describe your reasoning for adding this `Protocol`.
6. You are welcome to propose updates to existing protocols using the same approach.

### Add a new `Contract`

1. Add the new contract object to the `CONTRACTS` list inside the [@/data/contracts.ts](ensawards.org/src/data/protocols/contracts.ts) file.
2. Make sure to follow the data model defined in the [@/types/contracts.ts](ensawards.org/src/types/contracts.ts) file.
```typescript
export interface Contract {
    protocol: Protocol;
    type: ContractType;
    subtype: ContractSubtype;
    cachedIdentity: ContractIdentityResolved;
}
```
* In addition to adding entirely new contracts, you may also suggest updates, ex. let us know that a contract has been named.


### Add a new `App`

1. Add your `App` to the `APPS` list available in the [@/data/index.ts](ensawards.org/src/data/apps/index.ts) file.
2. Follow the corresponding data model available in the [@/types/index.ts](ensawards.org/src/types/apps.ts) file.
```typescript
export interface App {
    id: string;
    slug: string;
    project: Project; // each app belongs to a single project.
    name: string;
    description: string;
    type: AppType;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    benchmarks: AppBenchmark[];
    socials: {
        website: URL;
        twitter: URL;
        ens?: Name;
    };
    ogImagePath?: string;
    twitterOgImagePath?: string;
}
```
> **NOTE**
>
> We recommend to skip defining the OG image-related fields. They are optional, and we have a fallback mechanism in place, so the SEO of App's details page won't be degraded. 
> 
> When your PR with a new `App` gets accepted, the NameHash Labs team will follow it up, providing customized OG images.

3. Include an icon as a React functional component inside [@/components/atoms/icons/ens-integrating-entities/apps/](ensawards.org/src/components/atoms/icons/ens-integrating-entities/apps) directory. For reference, see [@/components/atoms/icons/ens-integrating-entities/apps/CoinbaseWalletIcon.tsx](ensawards.org/src/components/atoms/icons/ens-integrating-entities/apps/CoinbaseWalletIcon.tsx). Keep in mind that projects and the entities they include can share the same icon. In that case it should be placed in [@/components/atoms/icons/ens-integrating-entities/shared](ensawards.org/src/components/atoms/icons/ens-integrating-entities/shared) directory.
4. In your PR describe your reasoning for adding that new `App`.
5. You are welcome to propose updates to already added apps using the same approach.

### Add a new `Best Practice`

Best practices are structured hierarchically and can be added on two levels:

#### `BestPractice`

Defines a specific requirement that an app or protocol must meet to pass a benchmark test. They are grouped into categories.

1. To add a `BestPractice` create it as an independent exported constant in the [@/data/index.ts](ensawards.org/src/data/best-practices/index.ts) file.
2. Add it to the appropriate category’s list.
3. Make sure to follow its data model defined in the [@/types/index.ts](ensawards.org/src/types/bestPractices.ts) file.
```typescript
export interface BestPractice {
    id: string;
    slug: string;
    name: string;
    description: string;
    categoryName: string;
    categorySlug: string;
    appliesTo: BestPracticeAppliesTo[];
    technicalDetails: {
        main: {
            header: string;
            content: string;
        };
        sides: {
            header: string;
            content: string;
        }[];
    };
}
```
4. In your PR describe your reasoning for adding it.
5. If you want your best practice to be a part of a new category, learn how to add one below.

#### `BestPracticeCategory`

Categories sort best practices into topic-related groups based on their characteristics. They are a level above the basic `BestPractice` objects in the "Best Practices" hierarchy.

1. Add new `BestPracticeCategory` to the `BEST_PRACTICE_CATEGORIES` list available in the [@/data/index.ts](ensawards.org/src/data/best-practices/index.ts) file.
2. Follow its data model available in the [@/types/index.ts](ensawards.org/src/types/bestPractices.ts) file.
```typescript
export enum CategoryStatus {
    ComingSoon,
    Active
}

export interface BestPracticeCategory {
    id: string;
    slug: string;
    name: string;
    description: string;
    status: CategoryStatus;
    bestPractices: BestPractice[];
}
```
3. In your PR describe your reasoning for adding it.

### Suggest a `benchmark update`

1. To suggest a benchmark update for an existing app, modify its `App.benchmarks` field in the [@/data/index.ts](ensawards.org/src/data/apps/index.ts) file.
2. Make sure to follow benchmark's data model. It's available in the [@/types/index.ts](ensawards.org/src/types/apps.ts) file.
```typescript
export enum BenchmarkResult {
    Pass = "Pass",
    PartialPass = "Partial pass",
    Fail = "Fail",
}

export interface AppBenchmark {
    bestPractice: BestPractice;
    result: BenchmarkResult;
}
```

## Using `Biome` and `Prettier` together

We use `Biome` as our primary code formatter, and our long-term goal is to rely on it exclusively.

However, support for Astro files is still experimental. Currently, Biome only formats the frontmatter section of `.astro` files, so we use `Prettier` to format the JSX portions.

### Applying both formatters

To ensure CI checks pass and the codebase is formatted correctly, run `pnpm lint` command from the repository root. This will run both Biome and Prettier formatting.

> **NOTE (Windows users)**: After running these steps, you may see many diffs with `Contents have differences only in line separators` comment. 
>
> These files won't be included in your commit.
> For easier self-review either ignore them or (if valid in your case) run the `git add --all` command. This normalizes line endings and removes those entries from the diff.

## Getting help

If you have questions or need help, please:

1. Open a [GitHub Issue](https://github.com/namehash/ensawards/issues) for bugs/features
2. Join our community discussions on [GitHub](https://github.com/namehash/ensawards)
3. Join our community on [Telegram](http://t.me/ensnode)

We’re excited to have you with us — your contributions help ENSAwards grow and evolve.
Let’s make ENSAwards the gold standard for transparency and recognition in the ENS ecosystem.
