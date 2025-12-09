import type { ReferralIncentiveProgram } from "@/types/referralIncentivePrograms.ts";
import {
  type NamedRegistrarAction,
  isRegistrarActionReferralAvailable, accountIdEqual,
} from "@ensnode/ensnode-sdk";
import { isAddressEqual, zeroAddress } from "viem";

export function isQualifiedReferral(
  incentiveProgram: ReferralIncentiveProgram,
  registrarAction: NamedRegistrarAction,
): boolean {
  // Check if the registrar action occurred within program's duration
  if (
    registrarAction.action.block.timestamp < incentiveProgram.rules.startTime ||
    registrarAction.action.block.timestamp > incentiveProgram.rules.endTime
  )
    return false;

  // Check if the registrar action associated with the same subregistry
  // as the incentive program rules
  if (!accountIdEqual(registrarAction.action.registrationLifecycle.subregistry.subregistryId, incentiveProgram.rules.subregistryId))
    return false;

  //Check if the registrar action has a non-null and non-zero decodedReferrer address
  return (
    isRegistrarActionReferralAvailable(registrarAction.action.referral) &&
    registrarAction.action.referral.decodedReferrer !== zeroAddress
  );
}
