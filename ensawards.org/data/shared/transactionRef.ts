import { type Hash } from "viem";

import { type ChainId } from "@ensnode/ensnode-sdk";

/**
 * Reference to a distinct transaction.
 */
export interface TransactionRef {
  /**
   * Chain ID where the transaction took place.
   */
  chainId: ChainId;

  /**
   * Transaction hash of the transaction that took place on `chainId`.
   */
  transactionHash: Hash;
}
