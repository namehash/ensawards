# Contributing to ENSAwards

Thank you for your interest in contributing to ENSAwards! We welcome contributions from the community and greatly appreciate your time and effort in helping us improve.

## How to contribute?

If you’re here, you likely want to propose changes to our data — perhaps adding new entities, updating benchmark details, or suggesting new best practices for our leaderboards.

Below, you’ll find detailed instructions for each contribution type. If your change doesn’t fit one of these categories, feel free to open a pull request (PR) and describe your proposal there.

### Adding a new `Project`

1. Create a new subdirectory in the [ensawards.org/data/projects/](ensawards.org/data/projects) named after the project you want to add. The directory name should be the lowercase project name. If the name contains multiple words, join them with hyphens ("-").
2. Inside the new directory create an `index.ts` file and define the new project as an independent exported constant.
3. Add the new project to the `PROJECTS` array in the [ensawards.org/data/projects/index.ts](ensawards.org/data/projects/index.ts) file.
4. Follow its data model that you can look up in the [@/types/projects.ts](ensawards.org/src/types/projects.ts) file. You can also have a quick glance at it below.
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
5. Include an icon as a React functional component inside [@/components/atoms/icons/ens-integrating-entities/projects](ensawards.org/src/components/atoms/icons/ens-integrating-entities/projects) directory. For reference, see [@/components/atoms/icons/ens-integrating-entities/projects/EnsProjectIcon.tsx](ensawards.org/src/components/atoms/icons/ens-integrating-entities/projects/EnsProjectIcon.tsx). Keep in mind that projects and the entities they include can share the same icon. In that case it should be placed in [@/components/atoms/icons/ens-integrating-entities/shared](ensawards.org/src/components/atoms/icons/ens-integrating-entities/shared) directory.
6. You are welcome to propose updates to already added projects using the same approach.

### Relationship between `Projects`, `Protocols` and `Apps`

Although related, these entity types represent different real-world concepts.

* `Protocols` refer to specific sets of deployed smart contracts.
* `Apps` refer to specific software applications.
* `Projects` represent a higher-level initiatives or organizations that might produce multiple related protocols and apps. A project can include multiple protocols and multiple apps.

For this reason, every new `App` or `Protocol` must be associated with a corresponding `Project`.

### Adding a new `Protocol`

1. Create a new subdirectory in the [ensawards.org/data/protocols/](ensawards.org/data/protocols) named after the project you want to add. The directory name should follow the format `[lowercase protocol name]-[protocol type]`, where protocol type is the lowercase representation of [ProtocolType](ensawards.org/src/types/protocols.ts) enum. If the name contains multiple words, join them with hyphens ("-").
2. Inside the new directory create an `index.ts` file and define the new protocol as an independent exported constant.
3. Add it to the `DAO_PROTOCOLS` or `DEFI_PROTOCOLS` list in the [ensawards.org/data/protocols/index.ts](ensawards.org/data/protocols/index.ts) file appropriately to its type.
4. Make sure to follow its data model that you can look up in the [@/types/protocols.ts](ensawards.org/src/types/protocols.ts) file. Remember that the `Protocol` can represent either a `DAO` or a `DeFi protocol`. Below you can see its most important interface and type:

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

5. Include an icon as a React functional component inside [@/components/atoms/icons/ens-integrating-entities/](ensawards.org/src/components/atoms/icons/ens-integrating-entities/) directory. For reference, see [@/components/atoms/icons/ens-integrating-entities/dao-protocols/EnsDaoIcon.tsx](ensawards.org/src/components/atoms/icons/ens-integrating-entities/dao-protocols/EnsDaoIcon.tsx). Keep in mind that projects and the entities they include can share the same icon. In that case it should be placed in [@/components/atoms/icons/ens-integrating-entities/shared](ensawards.org/src/components/atoms/icons/ens-integrating-entities/shared) directory.
6. In your PR describe your reasoning for adding this `Protocol`.
7. You are welcome to propose updates to existing protocols using the same approach.

### Adding a new `Contract`

1. Add the new contract object to the `[protocolObjectName]Contracts` array in the [ensawards.org/data/protocols/[protocol-directory]/contracts.ts](ensawards.org/data/protocols/aave-dao/contracts.ts) file where `[protocolObjectName]` and `[protocol-directory]` represent the name of the relevant protocol's object name and directory.
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


### Adding a new `App`

1. Create a new subdirectory in the [ensawards.org/data/apps/](ensawards.org/data/apps) named after the app you want to add. The directory name should follow the format `[lowercase app name]-[app type]`, where app type is the lowercase representation of [AppType](ensawards.org/src/types/apps.ts) enum. If the name contains multiple words, join them with hyphens ("-").
2. Inside the new directory create an `index.ts` file and define the new app as an independent exported constant.
3. Add your `App` to the `APPS` array available in the [ensawards.org/data/apps/index.ts](ensawards.org/data/apps/index.ts) file.
4. Follow the corresponding data model available in the [@/types/apps.ts](ensawards.org/src/types/apps.ts) file.
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

5. Include an icon as a React functional component inside [@/components/atoms/icons/ens-integrating-entities/apps/](ensawards.org/src/components/atoms/icons/ens-integrating-entities/apps) directory. For reference, see [@/components/atoms/icons/ens-integrating-entities/apps/CoinbaseWalletIcon.tsx](ensawards.org/src/components/atoms/icons/ens-integrating-entities/apps/CoinbaseWalletIcon.tsx). Keep in mind that projects and the entities they include can share the same icon. In that case it should be placed in [@/components/atoms/icons/ens-integrating-entities/shared](ensawards.org/src/components/atoms/icons/ens-integrating-entities/shared) directory.
6. In your PR describe your reasoning for adding that new `App`.
7. You are welcome to propose updates to already added apps using the same approach.

### Adding a new `Best Practice`

Best practices are structured hierarchically and can be added on two levels:

#### `BestPractice`

Defines a specific requirement that an app or protocol must meet to pass a benchmark test. They are grouped into categories.

1. To add a `BestPractice` create it as an independent exported constant in the [ensawards.org/data/ens-best-practices/categories/[category]/[newBestPracticeName].ts](ensawards.org/data/ens-best-practices/categories/contract-naming/nameYourSmartContracts.ts) file, where `[category]` and `[newBestPracticeName]` represent the category that the new best practice belongs to and the practice's name written in camel case.
2. Add it to `BestPracticeCategory.bestPractices` array of the appropriate category in the [ensawards.org/data/ens-best-practices/categories/[category]/index.ts](ensawards.org/data/ens-best-practices/categories/contract-naming/index.ts) file.
3. Add it to `ENS_BEST_PRACTICES` array in the [ensawards.org/data/ens-best-practices/index.ts](ensawards.org/data/ens-best-practices/index.ts) file.
4. Make sure to follow its data model defined in the [@/types/bestPractices.ts](ensawards.org/src/types/bestPractices.ts) file.
```typescript
export interface BestPracticeAbstract<
    BestPracticeT extends BestPracticeType,
    AppliesToT extends BestPracticeTarget,
> {
    type: BestPracticeT;
    id: string;
    slug: string;
    name: string;
    description: string;
    categoryName: string;
    categorySlug: string;
    appliesTo: AppliesToT[];
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

export interface BestPracticeProtocol
    extends BestPracticeAbstract<typeof BestPracticeTypes.Protocol, ProtocolType> {}

export interface BestPracticeApp
    extends BestPracticeAbstract<typeof BestPracticeTypes.App, AppType> {}

export type BestPractice = BestPracticeProtocol | BestPracticeApp;
```
5. In your PR describe your reasoning for adding it.
6. If you want your best practice to be a part of a new category, learn how to add one below.

#### `BestPracticeCategory`

Categories sort best practices into topic-related groups based on their characteristics. They are a level above the basic `BestPractice` objects in the "Best Practices" hierarchy.

1. To add a new category, create a new subdirectory in the [ensawards.org/data/ens-best-practices/categories](ensawards.org/data/ens-best-practices/categories) named after the best practice category you want to add. The directory name should be the lower case category name. If the name contains multiple words, join them with hyphens ("-").
2. Inside the new directory create an `index.ts` file and define the new category as an independent exported constant.
3. Add new `BestPracticeCategory` to the `BEST_PRACTICE_CATEGORIES` array available in the [ensawards.org/data/ens-best-practices/categories/index.ts](ensawards.org/data/ens-best-practices/categories/index.ts) file.
4. Follow its data model available in the [@/types/bestPractices.ts](ensawards.org/src/types/bestPractices.ts) file.
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
5. In your PR describe your reasoning for adding it.

### Suggest a `benchmark update`

1. To suggest a benchmark update for an existing app, modify its `[appObjectName]Benchmarks` array in the [ensawards.org/data/apps/[app-directory]/benchmarks.ts](ensawards.org/data/apps/rainbow-wallet/benchmarks.ts) file where `[appObjectName]` and `[app-directory]` represent the name of the relevant app's object name and directory.
2. Make sure to follow benchmark's data model. It's available in the [@/types/apps.ts](ensawards.org/src/types/apps.ts) file.
```typescript
export enum BenchmarkResult {
    Pass = "Pass",
    PartialPass = "Partial pass",
    Fail = "Fail",
}

export interface AppBenchmark {
    /** The best practice being benchmarked */
    bestPractice: BestPractice;
    /** The result of the benchmark */
    result: BenchmarkResult;
    /** The account ID of the person who performed the benchmark */
    benchmarkedBy: AccountId;
    /** Unix timestamp when the benchmark was performed */
    benchmarkedAt: UnixTimestamp;
}
```
3. If you're suggesting an update or adding a new benchmark for the first time you must also create a `benchmarker` profile for yourself inside the [ensawards.org/data/benchmarkers/index.ts](ensawards.org/data/benchmarkers/index.ts) file. Make sure to match the required benchmarker definition.
```typescript
export const benchmarkers = {
    "benchmarked nickname": AccountId,
} as const satisfies Record<string, AccountId>;
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
