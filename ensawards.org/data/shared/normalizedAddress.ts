// NOTE: Contents of this file are a copy from `enssdk` that cannot be imported right now due to change management issues.
// It should be replaced with imports from `enssdk` when possible.

import { type Address, isAddress } from "viem";

/**
 * Represents a normalized (non-checksummed) EVM Address, in the format `0x{string}`, where all
 * characters are lowercase and length is exactly 42.
 *
 * @dev because the Address type is so widely used, nominally typing it would involve a _ton_ of
 *      asNormalizedAddress() casts across the codebase. By avoiding the __brand, we can easily use
 *      EventWithArgs<{ address: NormalizedAddress }> in all of the Ponder event handler args to
 *      declare that the incoming event.args.address is a NormalizedAddress.
 *
 */
export type NormalizedAddress = Address;

/**
 * Determines whether an {@link Address} is a {@link NormalizedAddress}.
 */
export function isNormalizedAddress(maybeAddress: string): maybeAddress is NormalizedAddress {
  const isLowerCase = maybeAddress === maybeAddress.toLowerCase();
  return isLowerCase && isAddress(maybeAddress, { strict: false });
}

/**
 * Converts an {@link Address} to a {@link NormalizedAddress}.
 *
 * @throws if `address` does not represent an EVM Address
 */
export function toNormalizedAddress(maybeAddress: string): NormalizedAddress {
  if (!isAddress(maybeAddress, { strict: false })) {
    throw new Error(`'${maybeAddress}' does not represent an EVM Address.`);
  }

  return maybeAddress.toLowerCase() as NormalizedAddress;
}
