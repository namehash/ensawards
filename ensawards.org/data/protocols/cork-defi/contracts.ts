// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { mainnet } from "viem/chains";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import CorkDeFi from ".";

const contracts: Contract[] = [
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7CcCCCccCcc0b4c00d01f321035b8e4523eF8448",
        chain: mainnet,
        codeName: "TimelockUpgrade",
      },
      name: "timelock-upgrade.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7CccCCccccCCe566CdAFFA9EF2CB245Ad5575c3b",
        chain: mainnet,
        codeName: "TimelockControllerAdmin",
      },
      name: "timelock-admin.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7CcCcCCcCccCC1d856F2994A66fAa7011F1A89D9",
        chain: mainnet,
        codeName: "TimelockOperational",
      },
      name: "timelock-operational.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xCCcCcCcccCccEF378949D1a61ED2283C831AF03A",
        chain: mainnet,
        codeName: "ConstraintRateAdapterProxy",
      },
      name: "constraint-rate-adapter.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1CcCCccCCcca9Cc3446B235af1C4cb8E2B01236E",
        chain: mainnet,
        codeName: "ConstraintRateAdapter",
      },
      name: "constraint-rate-adapter-impl.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xcCccCcCccCC6e38a2772Eb42D2f408eeB89cb0eE",
        chain: mainnet,
        codeName: "WhitelistManagerProxy",
      },
      name: "whitelist.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1CcCccccCcCbf45E2516caeE86cef63da120CDAD",
        chain: mainnet,
        codeName: "WhitelistManager",
      },
      name: "whitelist-impl.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xcCcCcCccCccbC06627F8aad7aAF13fe3a457f779",
        chain: mainnet,
        codeName: "DefaultCorkController",
      },
      name: "controller.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xccCCcCcCCccCfAE2Ee43F0E727A8c2969d74B9eC",
        chain: mainnet,
        codeName: "CorkPoolManagerProxy",
      },
      name: "pool-manager.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1cCccCccCcCf9A60Fe57cd7CEf504d1DaaA78244",
        chain: mainnet,
        codeName: "CorkPoolManager",
      },
      name: "pool-manager-impl.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xcCCCccCCCcCc1782617fe14A386AC910a20D4324",
        chain: mainnet,
        codeName: "SharesFactory",
      },
      name: "shares-factory.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xCCcCcCCCcccCBaD6F772a511B337d9CCc9570407",
        chain: mainnet,
        codeName: "CorkAdapter",
      },
      name: "adapter.phoenix.cork.eth",
    },
    contributors: [contributors.nischal],
  },
];

defineContracts(contracts);

export default contracts;
