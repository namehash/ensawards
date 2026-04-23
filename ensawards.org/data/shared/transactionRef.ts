import { type Hash } from "viem";

import { type ChainId } from "@ensnode/ensnode-sdk";

export interface TransactionRef {
  /**
   * Chain ID of the blockchain where the award distribution transaction took place.
   *
   * Required to uniquely identify the transaction together with {@link transactionHash}.
   */
  chainId: ChainId;

  /** Transaction hash of the transaction on the chain identified by {@link chainId}.
   * that took place on {@link awardedAt} to distribute the {@link Award}
   */
  transactionHash: Hash;
}
