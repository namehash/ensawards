// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { mainnet, optimism } from "viem/chains";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import GivethDeFi from ".";

const contracts: Contract[] = [
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x900dB999074d9277c5DA2A43F252D74366230DA0",
        chain: mainnet,
        codeName: "GIV",
      },
      name: "givtoken.giv.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x87dE995F6744B75bBe0255A973081142aDb61f4d",
        chain: mainnet,
        codeName: "TokenDistro",
      },
      name: "distro.giv.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x93E79499b00a2fdAAC38e6005B0ad8E88b177346",
        chain: mainnet,
        codeName: "DevouchMultisig",
      },
      name: "vouch.giv.eth",
      profile: {
        avatar: new URL("https://euc.li/vouch.giv.eth"),
      },
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x528cdc92eab044e1e39fe43b9514bfdab4412b98",
        chain: optimism,
        codeName: "GIV",
      },
      name: "givtoken.giv.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe3ac7b3e6b4065f4765d76fdc215606483bf3bd1",
        chain: optimism,
        codeName: "TokenDistro",
      },
      name: "distro.giv.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x93E79499b00a2fdAAC38e6005B0ad8E88b177346",
        chain: optimism,
        codeName: "DevouchMultisig",
      },
      name: "vouch.giv.eth",
      profile: {
        avatar: new URL("https://euc.li/vouch.giv.eth"),
      },
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x301c739cf6bfb6b47a74878bdeb13f92f13ae5e7",
        chain: optimism,
        codeName: "UnipoolGIVpower",
      },
      name: "givpower.giv.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x4F9368DDd665D5652f9786cd57f1b7d7469d95F7",
        chain: optimism,
        codeName: "DeVouchResolverUpgradeable",
      },
      name: "devouch.giv.eth",
    },
    contributors: [contributors.nischal],
  },
];

defineContracts(contracts);

export default contracts;
