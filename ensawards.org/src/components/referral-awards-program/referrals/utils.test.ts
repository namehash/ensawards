import { isQualifiedReferral } from "@/components/referral-awards-program/referrals/utils.ts";
import type { ReferralIncentiveProgram } from "@/types/referralIncentivePrograms.ts";
import { ENSNamespaceIds } from "@ensnode/datasources";
import {
  type InterpretedName,
  type NamedRegistrarAction,
  type RegistrarAction,
  getEthnamesSubregistryId,
} from "@ensnode/ensnode-sdk";
import { millisecondsInSecond } from "date-fns/constants";
import { zeroAddress } from "viem";
import { describe, expect, it } from "vitest";

describe("isQualifiedReferral", () => {
  const incentiveProgram: ReferralIncentiveProgram = {
    name: "Test Incentive Program",
    rules: {
      totalAwardPoolValue: 1000,
      maxQualifiedReferrers: 10,
      startTime: new Date(2025, 0, 1).getTime() / millisecondsInSecond,
      endTime: new Date(2026, 0, 1).getTime() / millisecondsInSecond,
      subregistryId: getEthnamesSubregistryId(ENSNamespaceIds.Mainnet),
    },
  };

  // Note: most of these values are just placeholders and aren't valid
  // when it comes to actual registration events.
  const baseRegistrarAction: RegistrarAction = {
    id: "1",
    type: "registration",
    incrementalDuration: 10000,
    registrant: "0x26A1BC2b06DD438669094bD68f1E2481F47FEC5b",
    registrationLifecycle: {
      subregistry: {
        subregistryId: getEthnamesSubregistryId(ENSNamespaceIds.Mainnet),
        node: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      },
      node: "0xee6c4522aab0003e8d14cd40a6af439055fd2577951148c14b6cea9a53475835",
      expiresAt: new Date(2026, 11, 9).getTime() / millisecondsInSecond,
    },
    pricing: {
      baseCost: null,
      premium: null,
      total: null,
    },
    referral: {
      encodedReferrer: "0x1a199654959140E5c1A2F4135fAA7Ba2748939C5",
      decodedReferrer: "0x1a199654959140E5c1A2F4135fAA7Ba2748939C5",
    },
    block: {
      number: 1,
      timestamp: new Date(2025, 11, 9).getTime() / millisecondsInSecond,
    },
    transactionHash: "0x1a199654959140E5c1A2F4135fAA7Ba2747563982740502",
    eventIds: ["1"],
  };

  it("Should recognize registrar actions that happened before the incentive program started as falsy", () => {
    const registrarAction: NamedRegistrarAction = {
      action: {
        ...baseRegistrarAction,
        block: {
          number: 1,
          timestamp: new Date(2024, 11, 31).getTime() / millisecondsInSecond,
        },
      },
      name: "too.early.action.eth" as InterpretedName,
    };

    expect(isQualifiedReferral(incentiveProgram, registrarAction)).toStrictEqual(false);
  });

  it("Should recognize registrar actions that happened after the incentive program ended as falsy", () => {
    const registrarAction: NamedRegistrarAction = {
      action: {
        ...baseRegistrarAction,
        block: {
          number: 1,
          timestamp: new Date(2027, 0, 1).getTime() / millisecondsInSecond,
        },
      },
      name: "too.late.action.eth" as InterpretedName,
    };

    expect(isQualifiedReferral(incentiveProgram, registrarAction)).toStrictEqual(false);
  });

  it("Should recognize registrar actions associated with different subregistry than the incentive program as falsy", () => {
    const registrarAction: NamedRegistrarAction = {
      action: {
        ...baseRegistrarAction,
        registrationLifecycle: {
          ...baseRegistrarAction.registrationLifecycle,
          subregistry: {
            node: baseRegistrarAction.registrationLifecycle.node,
            subregistryId: getEthnamesSubregistryId(ENSNamespaceIds.Sepolia),
          },
        },
      },
      name: "wrong.subregistry.action.eth" as InterpretedName,
    };

    expect(isQualifiedReferral(incentiveProgram, registrarAction)).toStrictEqual(false);
  });

  it("Should recognize registrar actions with null or zero-address decodedReferrer as falsy", () => {
    const nullReferrerRegistrarAction: NamedRegistrarAction = {
      action: {
        ...baseRegistrarAction,
        referral: {
          encodedReferrer: null,
          decodedReferrer: null,
        },
      },
      name: "null.decoded.referrer.action.eth" as InterpretedName,
    };

    const zeroAddressReferrerRegistrarAction: NamedRegistrarAction = {
      action: {
        ...baseRegistrarAction,
        referral: {
          encodedReferrer: baseRegistrarAction.referral.encodedReferrer!,
          decodedReferrer: zeroAddress,
        },
      },
      name: "zero.address.decoded.referrer.action.eth" as InterpretedName,
    };

    expect(isQualifiedReferral(incentiveProgram, nullReferrerRegistrarAction)).toStrictEqual(false);
    expect(isQualifiedReferral(incentiveProgram, zeroAddressReferrerRegistrarAction)).toStrictEqual(
      false,
    );
  });

  it("Should accept registrar actions as valid referrals if all requirements are met", () => {
    const registrarAction: NamedRegistrarAction = {
      action: baseRegistrarAction,
      name: "qualified.action.eth" as InterpretedName,
    };

    expect(isQualifiedReferral(incentiveProgram, registrarAction)).toStrictEqual(true);
  });
});
