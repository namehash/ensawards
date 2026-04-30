import { asInterpretedName } from "enssdk";
import { mainnet } from "viem/chains";

import contributors from "../../data/contributors";
import {
  type Contract,
  ContractResolutionStatusIds,
} from "../../data/protocols/contracts-types.ts";
import ENSDao from "../../data/protocols/ens-dao";
import LiquityDefi from "../../data/protocols/liquity-defi";
import UniswapDao from "../../data/protocols/uniswap-dao";

export const CONTRACTS_TEST_DATA: Contract[] = [
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000000",
        chain: mainnet,
        codeName: "Project1UnnamedContract1",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000001",
        chain: mainnet,
        codeName: "Project1UnnamedContract2",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000002",
        chain: mainnet,
        codeName: "Project1NamedContract1",
      },
      name: asInterpretedName("name.p1c1.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000003",
        chain: mainnet,
        codeName: "Project1NamedContract2",
      },
      name: asInterpretedName("name.p1c2.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000004",
        chain: mainnet,
        codeName: "Project1NamedContract3",
      },
      name: asInterpretedName("name.p1c3.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000005",
        chain: mainnet,
        codeName: "Project1NamedContract4",
      },
      name: asInterpretedName("name.p1c4.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000006",
        chain: mainnet,
        codeName: "Project1NamedContract5",
      },
      name: asInterpretedName("name.p1c5.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000007",
        chain: mainnet,
        codeName: "Project1NamedContract6",
      },
      name: asInterpretedName("name.p1c6.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000008",
        chain: mainnet,
        codeName: "Project1NamedContract7",
      },
      name: asInterpretedName("name.p1c7.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000009",
        chain: mainnet,
        codeName: "Project1ForwardNamedContract1",
      },
      name: asInterpretedName("forward.name.p1c1.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000010",
        chain: mainnet,
        codeName: "Project2UnnamedContract1",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000011",
        chain: mainnet,
        codeName: "Project2UnnamedContract2",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000012",
        chain: mainnet,
        codeName: "Project2UnnamedContract3",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000013",
        chain: mainnet,
        codeName: "Project2UnnamedContract4",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000014",
        chain: mainnet,
        codeName: "Project2UnnamedContract5",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000015",
        chain: mainnet,
        codeName: "Project2UnnamedContract6",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000016",
        chain: mainnet,
        codeName: "Project2UnnamedContract7",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000017",
        chain: mainnet,
        codeName: "Project2NamedContract1",
      },
      name: asInterpretedName("name.p2c1.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000018",
        chain: mainnet,
        codeName: "Project2NamedContract2",
      },
      name: asInterpretedName("name.p2c2.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000019",
        chain: mainnet,
        codeName: "Project2ForwardNamedContract1",
      },
      name: asInterpretedName("forward.name.p2c1.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: LiquityDefi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000020",
        chain: mainnet,
        codeName: "Project3UnnamedContract1",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: LiquityDefi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000021",
        chain: mainnet,
        codeName: "Project3UnnamedContract2",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: LiquityDefi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000022",
        chain: mainnet,
        codeName: "Project3UnnamedContract3",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: LiquityDefi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000023",
        chain: mainnet,
        codeName: "Project3UnnamedContract4",
      },
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: LiquityDefi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000024",
        chain: mainnet,
        codeName: "Project3NamedContract1",
      },
      name: asInterpretedName("name.p3c1.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: LiquityDefi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000025",
        chain: mainnet,
        codeName: "Project3NamedContract2",
      },
      name: asInterpretedName("name.p3c2.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: LiquityDefi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000026",
        chain: mainnet,
        codeName: "Project3NamedContract3",
      },
      name: asInterpretedName("name.p3c3.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: LiquityDefi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000027",
        chain: mainnet,
        codeName: "Project3NamedContract4",
      },
      name: asInterpretedName("name.p3c4.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: LiquityDefi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000028",
        chain: mainnet,
        codeName: "Project3NamedContract5",
      },
      name: asInterpretedName("name.p3c5.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
  {
    protocol: LiquityDefi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000029",
        chain: mainnet,
        codeName: "Project3ForwardNamedContract1",
      },
      name: asInterpretedName("forward.name.p3c1.eth"),
    },
    contributions: [{ from: contributors.y3drk, lastUpdated: 1772614147 }],
  },
];
