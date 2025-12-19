import { REFERRAL_INCENTIVE_PROGRAMS } from "@/data/referralIncentivePrograms.ts";
import type { ReferralIncentiveProgram } from "@/types/referralIncentivePrograms.ts";
import {
  type NamedRegistrarAction,
  accountIdEqual,
  isRegistrarActionReferralAvailable,
} from "@ensnode/ensnode-sdk";
import { zeroAddress } from "viem";

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

export function getReferralQualificationInfo(registrarAction: NamedRegistrarAction): string {
  for (const incentiveProgram of REFERRAL_INCENTIVE_PROGRAMS) {
    // if the registrar action is qualified for a given referral incentive program,
    // return the program's name
    // TODO: this logic assumes that a registrar action can only be qualified for one referral program at time,
    //  if that assumption is incorrect let me know!
    if (isQualifiedReferral(incentiveProgram, registrarAction)) return incentiveProgram.name;
  }

  // if the registrar action is not qualified for any program, return "-"
  return "-";
}
