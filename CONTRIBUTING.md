# Contributing to ENSAwards

Thank you for your interest in contributing to ENSAwards! We welcome contributions from the community and greatly appreciate your time and effort in helping us improve.

## How to contribute?

If you’re here, you likely want to propose changes to our data — perhaps adding new entities, updating benchmark details, or suggesting new best practices for our leaderboards.

Below, you’ll find detailed instructions for each contribution type. If your change doesn’t fit one of these categories, feel free to open a pull request (PR) and describe your proposal there.

### Adding a new `DAO` 
1. Define it as an independent constant in the [@/data/organizations.ts](ensawards.org/src/data/organizations.ts) file.
2. Add it to the `ORGANIZATIONS` list in the same file.
3. Make sure to follow its data model that you can look up in the [@/types/organizations.ts](ensawards.org/src/types/organizations.ts) file. Below you can see its most important interface and type:
```typescript
export interface DAO {
    id: OrgId;
    slug: string;
    orgType: typeof OrganizationTypes.Dao;
    project: Project; // each organization belongs to a single project.
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

export type Organization = DAO;
```

> **NOTE**
>
> We recommend to skip defining the OG image-related fields. They are optional, and we have a fallback mechanism in place, so the SEO of DAO's details page won't be degraded.
>
> When your PR with a new `DAO` gets accepted, the NameHash Labs team will follow it up, providing customized OG images.

4. Include an icon as a React functional component inside [@/components/atoms/icons/projects-and-daos/](ensawards.org/src/components/atoms/icons/projects-and-daos/) directory. For reference, see [@/components/atoms/icons/EnsDaoIcon.tsx](ensawards.org/src/components/atoms/icons/projects-and-daos/EnsDaoIcon.tsx).
5. In your PR describe your reasoning for adding this `DAO`.
6. If you’re part of an existing DAO, you can also suggest updates to its details.

### Adding a new `Project`
1. Each new `DAO` must have a corresponding `Project`.
2. Define it as an independent constant in the [@/data/projects.ts](ensawards.org/src/data/projects.ts) file and then add the new project to the `PROJECTS` list in the same file.
3. Follow its data model that you can look up in the [@/types/projects.ts](ensawards.org/src/types/projects.ts) file. You can also have a quick glance at it below.
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
* Same as in the `DAO`, you also have to include the project's icon. Please put it in the [@/components/atoms/icons/projects-and-daos/](ensawards.org/src/components/atoms/icons/projects-and-daos/) directory. For reference, see [@/components/atoms/icons/EnsProjectIcon.tsx](ensawards.org/src/components/atoms/icons/projects-and-daos/EnsProjectIcon.tsx).
* If you are a part of an already added project feel free to suggest changes to any of its details.

### Add a new `Contract`
1. Add the new contract object to the `CONTRACTS` list inside the [@/data/contracts.ts](ensawards.org/src/data/contracts.ts) file.
2. Make sure to follow the data model defined in the [@/types/contracts.ts](ensawards.org/src/types/contracts.ts) file.
```typescript
export interface Contract {
    org: Organization;
    type: ContractType;
    subtype: ContractSubtype;
    cachedIdentity: ContractIdentityResolved;
}
```
* If you’re part of a project or DAO that owns any of the listed contracts, you may suggest updates, ex. let us know that you've named your contract.


### Add a new `App`
1. Add your `App` to the `APPS` list available in the [@/data/apps.ts](ensawards.org/src/data/apps.ts) file.
2. Follow the corresponding data model available in the [@/types/apps.ts](ensawards.org/src/types/apps.ts) file.
```typescript
export interface App {
    id: string;
    slug: string;
    name: string;
    description: string;
    type: AppType;
    iconPath: string;
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

4. In your PR describe your reasoning for adding that new `App`.

### Add a new `Best Practice`

Best practices are structured hierarchically and can be added on two levels:

#### `BestPractice`
Defines a specific requirement that an app or DAO must meet to pass a benchmark test. They are grouped into categories.

1. To add a `BestPractice` create it as an independent exported constant in the [@/data/bestPractices.ts](ensawards.org/src/data/bestPractices.ts) file.
2. Add it to the appropriate category’s list.
3. Make sure to follow its data model defined in the [@/types/bestPractices.ts](ensawards.org/src/types/bestPractices.ts) file.
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

1. Add new `BestPracticeCategory` to the `BEST_PRACTICE_CATEGORIES` list available in the [@/data/bestPractices.ts](ensawards.org/src/data/bestPractices.ts) file.
2. Follow its data model available in the [@/types/bestPractices.ts](ensawards.org/src/types/bestPractices.ts) file.
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
1. To suggest a benchmark update for an existing app, modify its `App.benchmarks` field in the [@/data/apps.ts](ensawards.org/src/data/apps.ts) file.
2. Make sure to follow benchmark's data model. It's available in the [@/types/apps.ts](ensawards.org/src/types/apps.ts) file.
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

## Using `Biome` and `Prettier` Together

We use `Biome` as our primary code formatter, and our long-term goal is to rely on it exclusively.

However, support for Astro files is still experimental. Currently, Biome only formats the frontmatter section of `.astro` files, so we use `Prettier` to format the JSX portions.

### Applying both formatters

To ensure CI checks pass and the codebase is formatted correctly, run `pnpm lint` command from the repository root. This will run both Biome and Prettier formatting.

> **NOTE (Windows users)**: After running these steps, you may see many diffs with `Contents have differences only in line separators` comment. 
> 
> These files won't be included in your commit.
> For easier self-review either ignore them or (if valid in your case) run the `git add --all` command. This normalizes line endings and removes those entries from the diff.

## Getting Help

If you have questions or need help, please:

1. Open a [GitHub Issue](https://github.com/namehash/ensawards/issues) for bugs/features
2. Join our community discussions on [GitHub](https://github.com/namehash/ensawards)
3. Join our community on [Telegram](http://t.me/ensnode)

We’re excited to have you with us — your contributions help ENSAwards grow and evolve.
Let’s make ENSAwards the gold standard for transparency and recognition in the ENS ecosystem.
