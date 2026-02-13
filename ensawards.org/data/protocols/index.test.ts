import { describe, expect, it } from "vitest";

import { isNormalizedName } from "@ensnode/ensnode-sdk";

import { ProtocolTypes } from "@/types/bestPractices.ts";
import { DAOProtocolIds, DeFiProtocolIds, ProtocolIds } from "@/types/protocols.ts";
import { areStringsUnique, isValidSlug } from "@/utils";

import { DAO_PROTOCOLS, DEFI_PROTOCOLS, PROTOCOLS } from ".";

describe("protocols data", () => {
  const data = PROTOCOLS;
  it("Should have exactly one protocol per ProtocolId", () => {
    const expectedLengthOfFoundProtocols = 1;

    Object.values(ProtocolIds).forEach((protocolId) => {
      const foundProtocol = data.filter((protocol) => protocol.id === protocolId);

      expect(foundProtocol.length).toEqual(expectedLengthOfFoundProtocols);
      expect(foundProtocol[0].id).toEqual(protocolId);
    });
  });

  it("Should have exactly one DAO protocol per DAO-related ProtocolId", () => {
    const data = DAO_PROTOCOLS;
    const expectedLengthOfFoundDaoProtocols = 1;

    Object.values(DAOProtocolIds).forEach((protocolId) => {
      const foundProtocol = data.filter(
        (protocol) => protocol.id === protocolId && protocol.protocolType === ProtocolTypes.DAO,
      );

      expect(foundProtocol.length).toEqual(expectedLengthOfFoundDaoProtocols);
      expect(foundProtocol[0].id).toEqual(protocolId);
    });
  });

  it("Should have exactly one DeFi protocol per DeFi-related ProtocolId", () => {
    const data = DEFI_PROTOCOLS;
    const expectedLengthOfFoundDeFiProtocols = 1;

    Object.values(DeFiProtocolIds).forEach((protocolId) => {
      const foundProtocol = data.filter(
        (protocol) => protocol.id === protocolId && protocol.protocolType === ProtocolTypes.DeFi,
      );

      expect(foundProtocol.length).toEqual(expectedLengthOfFoundDeFiProtocols);
      expect(foundProtocol[0].id).toEqual(protocolId);
    });
  });

  it("Should have valid and unique slugs for each ProtocolType", () => {
    const protocolGroups = [DAO_PROTOCOLS, DEFI_PROTOCOLS];

    protocolGroups.forEach((protocolTypeData) => {
      const slugArray: string[] = [];

      protocolTypeData.forEach((protocol) => {
        expect(isValidSlug(protocol.slug), `Slug={${protocol.slug}} is not valid`).toEqual(true);

        slugArray.push(protocol.slug);
      });

      expect(
        areStringsUnique(slugArray),
        `Slugs for ${protocolTypeData[0]?.protocolType ?? "unknown"} protocols are not unique`,
      ).toEqual(true);
    });
  });

  it("In `socials`, `ens`, if defined, must be a non-empty normalized ENS name", () => {
    data.forEach((protocol) => {
      if (protocol.socials.ens !== undefined) {
        expect(
          protocol.socials.ens.length > 0 && isNormalizedName(protocol.socials.ens),
          `Name={${protocol.socials.ens}} is empty or is not ENS normalized`,
        ).toEqual(true);
      }
    });
  });
});
