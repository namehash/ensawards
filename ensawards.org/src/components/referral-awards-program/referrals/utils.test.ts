import {
  ReferralProgramAwardModels,
  ReferralProgramEditionStatuses,
  type ReferralProgramEditionSummaryPieSplit,
} from "@namehash/ens-referrals";
import { asInterpretedName } from "enssdk";
import { zeroAddress } from "viem";
import { describe, expect, it } from "vitest";

import { ENSNamespaceIds } from "@ensnode/datasources";
import {
  getEthnamesSubregistryId,
  type NamedRegistrarAction,
  parseTimestamp,
  parseUsdc,
  type RegistrarAction,
} from "@ensnode/ensnode-sdk";

import { isQualifiedReferral } from "@/components/referral-awards-program/referrals/utils.ts";

describe("isQualifiedReferral", () => {
  const mockReferralProgramEditionSummary: ReferralProgramEditionSummaryPieSplit = {
    awardModel: ReferralProgramAwardModels.PieSplit,
    slug: "test-slug",
    displayName: "Test Incentive Program",
    status: ReferralProgramEditionStatuses.Closed,
    rules: {
      awardModel: ReferralProgramAwardModels.PieSplit,
      awardPool: parseUsdc("10000"),
      maxQualifiedReferrers: 10,
      startTime: parseTimestamp("2025-01-01T00:00:00Z"),
      endTime: parseTimestamp("2026-01-01T00:00:00Z"),
      subregistryId: getEthnamesSubregistryId(ENSNamespaceIds.Mainnet),
      rulesUrl: new URL("https://example.com/rules"),
      areAwardsDistributed: true,
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
      expiresAt: parseTimestamp("2026-12-09T00:00:00Z"),
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
      timestamp: parseTimestamp("2025-12-09T00:00:00Z"),
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
          timestamp: parseTimestamp("2024-12-31T00:00:00Z"),
        },
      },
      name: asInterpretedName("too.early.action.eth"),
    };

    expect(isQualifiedReferral(mockReferralProgramEditionSummary, registrarAction)).toStrictEqual(
      false,
    );
  });

  it("Should recognize registrar actions that happened after the incentive program ended as falsy", () => {
    const registrarAction: NamedRegistrarAction = {
      action: {
        ...baseRegistrarAction,
        block: {
          number: 1,
          timestamp: parseTimestamp("2027-01-01T00:00:00Z"),
        },
      },
      name: asInterpretedName("too.late.action.eth"),
    };

    expect(isQualifiedReferral(mockReferralProgramEditionSummary, registrarAction)).toStrictEqual(
      false,
    );
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
      name: asInterpretedName("wrong.subregistry.action.eth"),
    };

    expect(isQualifiedReferral(mockReferralProgramEditionSummary, registrarAction)).toStrictEqual(
      false,
    );
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
      name: asInterpretedName("null.decoded.referrer.action.eth"),
    };

    const zeroAddressReferrerRegistrarAction: NamedRegistrarAction = {
      action: {
        ...baseRegistrarAction,
        referral: {
          encodedReferrer: baseRegistrarAction.referral.encodedReferrer!,
          decodedReferrer: zeroAddress,
        },
      },
      name: asInterpretedName("zero.address.decoded.referrer.action.eth"),
    };

    expect(
      isQualifiedReferral(mockReferralProgramEditionSummary, nullReferrerRegistrarAction),
    ).toStrictEqual(false);
    expect(
      isQualifiedReferral(mockReferralProgramEditionSummary, zeroAddressReferrerRegistrarAction),
    ).toStrictEqual(false);
  });

  it("Should accept registrar actions as valid referrals if all requirements are met", () => {
    const registrarAction: NamedRegistrarAction = {
      action: baseRegistrarAction,
      name: asInterpretedName("qualified.action.eth"),
    };

    expect(isQualifiedReferral(mockReferralProgramEditionSummary, registrarAction)).toStrictEqual(
      true,
    );
  });
});
