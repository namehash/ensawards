// TODO: Once the newest versions of our packages is published, swap (most of) this code for theirs
//  and remove zod from dependencies

import {type Address, isAddress} from "viem";
import {asLowerCaseAddress, type Duration, type UnixTimestamp} from "@ensnode/ensnode-sdk";

/**
 * The default number of items per page for paginated aggregated referrer queries.
 */
export const ITEMS_PER_PAGE_DEFAULT = 25;

/**
 * The maximum number of items per page for paginated aggregated referrer queries.
 */
export const ITEMS_PER_PAGE_MAX = 100;

/**
 * Represents the aggregated metrics for a single referrer.
 */
export interface AggregatedReferrerMetrics {
    /** The Ethereum address of the referrer */
    referrer: Address;

    /**
     * The total number of qualified referrals made by this referrer
     * @invariant Guaranteed to be a positive integer (> 0)
     */
    totalReferrals: number;

    /**
     * The total incremental duration (in seconds) of all referrals made by this referrer
     * @invariant Guaranteed to be a non-negative integer (>= 0), measured in seconds
     */
    totalIncrementalDuration: Duration;
}

/**
 * Represents the aggregated metrics for a single referrer with contribution percentages.
 * Extends {@link AggregatedReferrerMetrics} with additional fields that show the referrer's
 * contribution as a percentage of the grand totals.
 */
export interface AggregatedReferrerMetricsContribution extends AggregatedReferrerMetrics {
    /**
     * The referrer's contribution to the grand total referrals as a decimal between 0 and 1 (inclusive).
     * Calculated as: totalReferrals / grandTotalReferrals
     * @invariant 0 <= totalReferralsContribution <= 1
     */
    totalReferralsContribution: number;

    /**
     * The referrer's contribution to the grand total incremental duration as a decimal between 0 and 1 (inclusive).
     * Calculated as: totalIncrementalDuration / grandTotalIncrementalDuration
     * @invariant 0 <= totalIncrementalDurationContribution <= 1
     */
    totalIncrementalDurationContribution: number;
}

/**
 * Base pagination parameters for paginated queries.
 */
export interface PaginationParams {
    /**
     * Requested page number (1-indexed)
     * @invariant Must be a positive integer (>= 1)
     * @default 1
     */
    page?: number;

    /**
     * Maximum number of items per page
     * @invariant Must be a positive integer (>= 1) and less than or equal to {@link ITEMS_PER_PAGE_MAX}
     * @default {@link ITEMS_PER_PAGE_DEFAULT}
     */
    itemsPerPage?: number;
}

/**
 * Request parameters for paginated aggregated referrers query.
 */
export interface PaginatedAggregatedReferrersRequest extends PaginationParams {}

/**
 * Paginated aggregated referrers data with metadata.
 */
export interface PaginatedAggregatedReferrers {
    /**
     * Array of aggregated referrers for the current page with contribution percentages
     * @invariant Array may be empty for the first page if there are no qualified referrers.
     */
    referrers: AggregatedReferrerMetricsContribution[];

    /**
     * Total number of aggregated referrers across all pages
     * @invariant Guaranteed to be a non-negative integer (>= 0)
     */
    total: number;

    /**
     * Pagination parameters
     * @invariant Stores the pagination parameters from the request
     */
    paginationParams: PaginationParams;

    /**
     * Indicates whether there is a next page available
     * @invariant true if and only if (page * itemsPerPage < total)
     */
    hasNext: boolean;

    /**
     * Indicates whether there is a previous page available
     * @invariant true if and only if (page > 1)
     */
    hasPrev: boolean;

    /** Unix timestamp of when the leaderboard was last updated */
    updatedAt: UnixTimestamp;
}

/**
 * A status code for paginated aggregated referrers API responses.
 */
export const PaginatedAggregatedReferrersResponseCodes = {
    /**
     * Represents that the aggregated referrers data is available.
     * @note The response may contain an empty array for the first page if there are no qualified referrers.
     * When the array is empty, total will be 0, page will be 1, and both hasNext and hasPrev will be false.
     */
    Ok: "ok",

    /**
     * Represents that the aggregated referrers data is not available.
     */
    Error: "error",
} as const;

/**
 * The derived string union of possible {@link PaginatedAggregatedReferrersResponseCodes}.
 */
export type PaginatedAggregatedReferrersResponseCode =
    (typeof PaginatedAggregatedReferrersResponseCodes)[keyof typeof PaginatedAggregatedReferrersResponseCodes];

/**
 * A paginated aggregated referrers response when the data is available.
 */
export type PaginatedAggregatedReferrersResponseOk = {
    responseCode: typeof PaginatedAggregatedReferrersResponseCodes.Ok;
    data: PaginatedAggregatedReferrers;
};

/**
 * A paginated aggregated referrers response when the data is not available.
 */
export type PaginatedAggregatedReferrersResponseError = {
    responseCode: typeof PaginatedAggregatedReferrersResponseCodes.Error;
    error: string;
    errorMessage: string;
};

/**
 * A paginated aggregated referrers API response.
 *
 * Use the `responseCode` field to determine the specific type interpretation
 * at runtime.
 */
export type PaginatedAggregatedReferrersResponse =
    | PaginatedAggregatedReferrersResponseOk
    | PaginatedAggregatedReferrersResponseError;


export async function getAggregatedReferrers(
    request?: PaginatedAggregatedReferrersRequest,
): Promise<PaginatedAggregatedReferrersResponse> {
    const url = new URL(`/ensanalytics/aggregated-referrers`, "https://api.alpha-sepolia.yellow.ensnode.io/");

    if (request?.page) url.searchParams.set("page", request.page.toString());
if (request?.itemsPerPage)
    url.searchParams.set("itemsPerPage", request.itemsPerPage.toString());

const response = await fetch(url);

// ENSNode API should always allow parsing a response as JSON object.
// If for some reason it's not the case, throw an error.
let responseData: unknown;
try {
    responseData = await response.json();
} catch {
    throw new Error("Malformed response data: invalid JSON");
}

// The API can return errors with 500 status, but they're still in the
// PaginatedAggregatedReferrersResponse format with responseCode: 'error'
// So we don't need to check response.ok here, just deserialize and let
// the caller handle the responseCode

return deserializePaginatedAggregatedReferrersResponse(
    responseData as SerializedPaginatedAggregatedReferrersResponse,
);
}

/**
 * Serialized representation of {@link PaginatedAggregatedReferrersResponseError}.
 *
 * Note: All fields are already serializable, so this type is identical to the source type.
 */
export type SerializedPaginatedAggregatedReferrersResponseError =
    PaginatedAggregatedReferrersResponseError;

/**
 * Serialized representation of {@link PaginatedAggregatedReferrersResponseOk}.
 *
 * Note: All fields are already serializable, so this type is identical to the source type.
 */
export type SerializedPaginatedAggregatedReferrersResponseOk =
    PaginatedAggregatedReferrersResponseOk;

/**
 * Serialized representation of {@link PaginatedAggregatedReferrersResponse}.
 */
export type SerializedPaginatedAggregatedReferrersResponse =
    | SerializedPaginatedAggregatedReferrersResponseOk
    | SerializedPaginatedAggregatedReferrersResponseError;


/**
 * All zod schemas we define must remain internal implementation details.
 * We want the freedom to move away from zod in the future without impacting
 * any users of the ensnode-sdk package.
 *
 * The only way to share Zod schemas is to re-export them from
 * `./src/internal.ts` file.
 */
import z from "zod/v4";

/**
 * Parses a numeric value as an integer.
 */
export const makeIntegerSchema = (valueLabel: string = "Value") =>
    z.int({
        error: `${valueLabel} must be an integer.`,
    });

/**
 * Parses a numeric value as a positive integer.
 */
export const makePositiveIntegerSchema = (valueLabel: string = "Value") =>
    makeIntegerSchema(valueLabel).positive({
        error: `${valueLabel} must be a positive integer (>0).`,
    });

/**
 * Parses a numeric value as a non-negative integer.
 */
export const makeNonNegativeIntegerSchema = (valueLabel: string = "Value") =>
    makeIntegerSchema(valueLabel).nonnegative({
        error: `${valueLabel} must be a non-negative integer (>=0).`,
    });
/**
 * Parses a serialized representation of an EVM address into a lowercase Address.
 */
export const makeLowercaseAddressSchema = (valueLabel: string = "EVM address") =>
    z
        .string()
        .check((ctx) => {
            if (!isAddress(ctx.value)) {
                ctx.issues.push({
                    code: "custom",
                    message: `${valueLabel} must be a valid EVM address`,
                    input: ctx.value,
                });
            }
        })
        .transform((val) => asLowerCaseAddress(val as Address));

/**
 * Parses a numeric value as {@link Duration}
 */
export const makeDurationSchema = (valueLabel: string = "Value") =>
    z.coerce
        .number({
            error: `${valueLabel} must be a number.`,
        })
        .pipe(makeNonNegativeIntegerSchema(valueLabel));

/**
 * Schema for AggregatedReferrerMetrics
 */
export const makeAggregatedReferrerMetricsSchema = (
    valueLabel: string = "AggregatedReferrerMetrics",
) =>
    z.object({
        referrer: makeLowercaseAddressSchema(`${valueLabel}.referrer`),
        totalReferrals: makePositiveIntegerSchema(`${valueLabel}.totalReferrals`),
        totalIncrementalDuration: makeDurationSchema(`${valueLabel}.totalIncrementalDuration`),
    });

/**
 * Schema for AggregatedReferrerMetricsContribution
 */
export const makeAggregatedReferrerMetricsContributionSchema = (
    valueLabel: string = "AggregatedReferrerMetricsContribution",
) =>
    makeAggregatedReferrerMetricsSchema(valueLabel).extend({
        totalReferralsContribution: z
            .number({
                error: `${valueLabel}.totalReferralsContribution must be a number`,
            })
            .min(0, `${valueLabel}.totalReferralsContribution must be >= 0`)
            .max(1, `${valueLabel}.totalReferralsContribution must be <= 1`),
        totalIncrementalDurationContribution: z
            .number({
                error: `${valueLabel}.totalIncrementalDurationContribution must be a number`,
            })
            .min(0, `${valueLabel}.totalIncrementalDurationContribution must be >= 0`)
            .max(1, `${valueLabel}.totalIncrementalDurationContribution must be <= 1`),
    });

/**
 * Parses value as {@link UnixTimestamp}.
 */
export const makeUnixTimestampSchema = (valueLabel: string = "Timestamp") =>
    makeIntegerSchema(valueLabel);

/**
 * Schema for PaginationParams
 */
export const makePaginationParamsSchema = (valueLabel: string = "PaginationParams") =>
    z.object({
        page: makePositiveIntegerSchema(`${valueLabel}.page`).default(1),
        itemsPerPage: makePositiveIntegerSchema(`${valueLabel}.itemsPerPage`)
            .max(ITEMS_PER_PAGE_MAX, `${valueLabel}.itemsPerPage must not exceed ${ITEMS_PER_PAGE_MAX}`)
            .default(ITEMS_PER_PAGE_DEFAULT),
    });

/**
 * Schema for PaginatedAggregatedReferrers
 */
export const makePaginatedAggregatedReferrersSchema = (
    valueLabel: string = "PaginatedAggregatedReferrers",
) =>
    z
        .object({
            referrers: z.array(
                makeAggregatedReferrerMetricsContributionSchema(`${valueLabel}.referrers[item]`),
            ),
            total: makeNonNegativeIntegerSchema(`${valueLabel}.total`),
            paginationParams: makePaginationParamsSchema(`${valueLabel}.paginationParams`),
            hasNext: z.boolean(),
            hasPrev: z.boolean(),
            updatedAt: makeUnixTimestampSchema(`${valueLabel}.updatedAt`),
        })
        .check((ctx) => {
            const { paginationParams, hasNext, hasPrev, total } = ctx.value;

            // Validate hasPrev
            const expectedHasPrev = paginationParams.page > 1;
            if (hasPrev !== expectedHasPrev) {
                ctx.issues.push({
                    code: "custom",
                    message: `${valueLabel}.hasPrev must be ${expectedHasPrev} when page is ${paginationParams.page}`,
                    input: ctx.value,
                });
            }

            // Validate hasNext
            const endIndex = paginationParams.page * paginationParams.itemsPerPage;
            const expectedHasNext = endIndex < total;
            if (hasNext !== expectedHasNext) {
                ctx.issues.push({
                    code: "custom",
                    message: `${valueLabel}.hasNext must be ${expectedHasNext} when page=${paginationParams.page}, itemsPerPage=${paginationParams.itemsPerPage}, total=${total}`,
                    input: ctx.value,
                });
            }
        });

/**
 * Schema for {@link PaginatedAggregatedReferrersResponseOk}
 */
export const makePaginatedAggregatedReferrersResponseOkSchema = (
    valueLabel: string = "PaginatedAggregatedReferrersResponse",
) =>
    z.object({
        responseCode: z.literal(PaginatedAggregatedReferrersResponseCodes.Ok),
        data: makePaginatedAggregatedReferrersSchema(`${valueLabel}.data`),
    });

/**
 * Schema for {@link PaginatedAggregatedReferrersResponseError}
 */
export const makePaginatedAggregatedReferrersResponseErrorSchema = (
    _valueLabel: string = "PaginatedAggregatedReferrersResponse",
) =>
    z.object({
        responseCode: z.literal(PaginatedAggregatedReferrersResponseCodes.Error),
        error: z.string(),
        errorMessage: z.string(),
    });

/**
 * Schema for {@link PaginatedAggregatedReferrersResponse}
 */
export const makePaginatedAggregatedReferrersResponseSchema = (
    valueLabel: string = "PaginatedAggregatedReferrersResponse",
) =>
    z.union([
        makePaginatedAggregatedReferrersResponseOkSchema(valueLabel),
        makePaginatedAggregatedReferrersResponseErrorSchema(valueLabel),
    ]);
/**
 * Deserialize a {@link PaginatedAggregatedReferrersResponse} object.
 *
 * Note: While the serialized and deserialized types are identical (all fields
 * are primitives), this function performs critical validation using Zod schemas
 * to enforce invariants on the data. This ensures data integrity when receiving
 * responses from the API.
 */
export function deserializePaginatedAggregatedReferrersResponse(
    maybeResponse: SerializedPaginatedAggregatedReferrersResponse,
    valueLabel?: string,
): PaginatedAggregatedReferrersResponse {
    const schema = makePaginatedAggregatedReferrersResponseSchema(valueLabel);
    const parsed = schema.safeParse(maybeResponse);

    if (parsed.error) {
        throw new Error(
            `Cannot deserialize PaginatedAggregatedReferrersResponse:\n${parsed.error}\n`,
        );
    }

    return parsed.data;
}

/**
 * The minimal value of {@link totalReferralsContribution} as a percentage (* 100) that the referrer needs to be qualified for the
 * ENS holiday referral awards program's rewards.
 */

//TODO: this is just an assumption for differentiating the "Qualified contribution" field display,
// and can ba adjusted as needed anytime
export const REFERRER_PROGRAM_QUALIFICATION_THRESHOLD = 5;

/**
 * The estimated value of 10,000 $ENS in USD (as of 11/25/25)
 */
export const ENS_HOLIDAY_REFERRAL_AWARDS_PRIZE_POOL_IN_USD = 10000;
