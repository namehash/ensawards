import { zeroAddress } from "viem";

import {
  accountIdEqual,
  isRegistrarActionReferralAvailable,
  type NamedRegistrarAction,
} from "@ensnode/ensnode-sdk";

import type { ReferralIncentiveProgram } from "@/types/referralIncentivePrograms.ts";

import { REFERRAL_INCENTIVE_PROGRAMS } from "../../../../data/referral-programs";

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
  if (
    !accountIdEqual(
      registrarAction.action.registrationLifecycle.subregistry.subregistryId,
      incentiveProgram.rules.subregistryId,
    )
  )
    return false;

  //Check if the registrar action has a non-null and non-zero decodedReferrer address
  return (
    isRegistrarActionReferralAvailable(registrarAction.action.referral) &&
    registrarAction.action.referral.decodedReferrer !== zeroAddress
  );
}

export function getReferralQualificationInfo(
  registrarAction: NamedRegistrarAction,
): ReferralIncentiveProgram[] {
  const qualifiedIncentivePrograms: ReferralIncentiveProgram[] = [];
  for (const incentiveProgram of REFERRAL_INCENTIVE_PROGRAMS) {
    // if the registrar action is qualified for a given referral incentive program,
    // add the program's name to the list.
    if (isQualifiedReferral(incentiveProgram, registrarAction))
      qualifiedIncentivePrograms.push(incentiveProgram);
  }

  return qualifiedIncentivePrograms;
}
