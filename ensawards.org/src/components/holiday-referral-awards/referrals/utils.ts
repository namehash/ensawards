
//TODO: not sure about the function name... Assume it should be shorter...
// Maybe just `isRegistrarActionQualified` would suffice? Appreciate advice
import {isRegistrarActionReferralAvailable, type NamedRegistrarAction} from "@ensnode/ensnode-sdk";
import {isAddressEqual, zeroAddress} from "viem";
import type {ReferralIncentiveProgram} from "@/types/referralIncentivePrograms.ts";

export function isRegistrarActionQualifiedForIncentiveProgram(incentiveProgram: ReferralIncentiveProgram, registrarAction: NamedRegistrarAction) : boolean{
    // Check if the registrar action occurred within program's duration
    if (registrarAction.action.block.timestamp < incentiveProgram.rules.startTime || registrarAction.action.block.timestamp > incentiveProgram.rules.endTime) return false;

    // Check if the registrar action associated with the same subregistry
    // as the incentive program rules
    if (!isAddressEqual(registrarAction.action.registrationLifecycle.subregistry.subregistryId.address, incentiveProgram.rules.subregistryId.address) || registrarAction.action.registrationLifecycle.subregistry.subregistryId.chainId !== incentiveProgram.rules.subregistryId.chainId) return false;

    //Check if the registrar action has a non-null and non-zero decodedReferrer address
    return isRegistrarActionReferralAvailable(registrarAction.action.referral) && registrarAction.action.referral.decodedReferrer !== zeroAddress;
}