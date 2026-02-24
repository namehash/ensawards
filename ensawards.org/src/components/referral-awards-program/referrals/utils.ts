import { type ReferralProgramEditionConfig } from "@namehash/ens-referrals/v1";
import { zeroAddress } from "viem";

import {
  accountIdEqual,
  isRegistrarActionReferralAvailable,
  type NamedRegistrarAction,
} from "@ensnode/ensnode-sdk";

export function isQualifiedReferral(
  referralProgramEdition: ReferralProgramEditionConfig,
  registrarAction: NamedRegistrarAction,
): boolean {
  // Check if the registrar action occurred within program's duration
  if (
    registrarAction.action.block.timestamp < referralProgramEdition.rules.startTime ||
    registrarAction.action.block.timestamp > referralProgramEdition.rules.endTime
  )
    return false;

  // Check if the registrar action associated with the same subregistry
  // as the incentive program rules
  if (
    !accountIdEqual(
      registrarAction.action.registrationLifecycle.subregistry.subregistryId,
      referralProgramEdition.rules.subregistryId,
    )
  )
    return false;

  //Check if the registrar action has a non-null and non-zero decodedReferrer address
  return (
    isRegistrarActionReferralAvailable(registrarAction.action.referral) &&
    registrarAction.action.referral.decodedReferrer !== zeroAddress
  );
}
