// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { arbitrum, mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import ArbitrumDao from ".";

const contracts: Contract[] = [
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xf3fc178157fb3c87548baa86f9d24ba38e649b58",
        chain: arbitrum,
        codeName: "ArbitrumDaoTreasury",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbbce8aa77782f13d4202a230d978f361b011db27",
        chain: mainnet,
        codeName: "ARBGatewayL1",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xcad7828a19b363a2b44717afb1786b5196974d8e",
        chain: arbitrum,
        codeName: "ARBGatewayL2",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x3fffbadaf827559da092217e474760e2b2c3cedd",
        chain: mainnet,
        codeName: "L1UpgradeExecutor",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xe6841d92b0c345144506576ec13ecf5103ac7f49",
        chain: mainnet,
        codeName: "L1Timelock",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xf07ded9dc292157749b6fd268e37df6ea38395b9",
        chain: arbitrum,
        codeName: "CoreGovernor",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x789fc99093b09ad01c34dc7251d0c89ce743e5a4",
        chain: arbitrum,
        codeName: "TreasuryGovernor",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xcf57572261c7c2bcf21ffd220ea7d1a27d40a827",
        chain: arbitrum,
        codeName: "ArbOneUpgradeExecutor",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x34d45e99f7d8c45ed05b5ca72d54bbd1fb3f98f0",
        chain: arbitrum,
        codeName: "L2CoreTimelock",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbfc1feca8b09a5c5d3effe7429ebe24b9c09ef58",
        chain: arbitrum,
        codeName: "L2TreasuryTimelock",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xf06e95ef589d9c38af242a8aaee8375f14023f85",
        chain: mainnet,
        codeName: "SecurityCouncilL1Emergency",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x423552c0f05baccac5bfa91c6dcf1dc53a0a1641",
        chain: arbitrum,
        codeName: "SecurityCouncilL2Emergency",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8a1cda8dee421cd06023470608605934c16a05a0",
        chain: arbitrum,
        codeName: "NomineeElectionGovernor",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x467923b9ae90bdb36ba88eca11604d45f13b712c",
        chain: arbitrum,
        codeName: "MemberElectionGovernor",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xd509e5f5aee2a205f554f36e8a7d56094494edfc",
        chain: arbitrum,
        codeName: "Manager",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7481716f05e315fc4c4a64e56dcd9bc1d6f24c0a",
        chain: arbitrum,
        codeName: "UpgradeExecRouteBuilder",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x6f3a242ca91a119f872f0073bc14bc8a74a315ad",
        chain: arbitrum,
        codeName: "MemberRemovalGovernor",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9bf7b8884fa381a45f8cb2525905fb36c996297a",
        chain: arbitrum,
        codeName: "MemberSyncActionL2",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9bf7b8884fa381a45f8cb2525905fb36c996297a",
        chain: mainnet,
        codeName: "MemberSyncActionL1",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x1d62ffeb72e4c360ccbbacf7c965153b00260417",
        chain: arbitrum,
        codeName: "ConstitutionHash",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5613af0474eb9c528a34701a5b1662e3c8fa0678",
        chain: mainnet,
        codeName: "L1ProxyAdmin",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: ArbitrumDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xdb216562328215e010f819b5abe947bad4ca961e",
        chain: arbitrum,
        codeName: "ArbOneProxyAdmin",
      },
    },
    contributions: [
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
