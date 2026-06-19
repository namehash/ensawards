import { asNormalizedAddress } from "enssdk";
import { mainnet } from "viem/chains";

import type { Contributor, ContributorAlias } from "./types";

const contributors = {
  stevedylan: {
    chainId: mainnet.id,
    address: asNormalizedAddress("0x464d18c13b4420e07ee85d5e6fddfc3078ee9e23"),
  },
  lightwalker: {
    chainId: mainnet.id,
    address: asNormalizedAddress("0x1a199654959140e5c1a2f4135faa7ba2748939c5"),
  },
  y3drk: {
    chainId: mainnet.id,
    address: asNormalizedAddress("0x26a1bc2b06dd438669094bd68f1e2481f47fec5b"),
  },
  theloner: {
    chainId: mainnet.id,
    address: asNormalizedAddress("0x6d99e3d9287c0e7f39d24472a066b4de24bfe657"),
  },
  nischal: {
    chainId: mainnet.id,
    address: asNormalizedAddress("0xd1da830e7d175ec8a51103bcfbbbe32a9362a6b2"),
  },
  spooky: {
    chainId: mainnet.id,
    address: asNormalizedAddress("0x0b399d2667733659f4a5fdcb030f3e26d26cc0fe"),
  },
  apoorvlathey: {
    chainId: mainnet.id,
    address: asNormalizedAddress("0x63a556c75443b176b5a4078e929e38beb37a1ff2"),
  },
  caldonia: {
    chainId: mainnet.id,
    address: asNormalizedAddress("0x9a41c5549bcc7d3f8d80e639714a4823de559134"),
  },
  shrugs: {
    chainId: mainnet.id,
    address: asNormalizedAddress("0xbd4cd9ae5bff533bf4ee926eeddc3dca5e2cdb4c"),
  },
  llev: {
    chainId: mainnet.id,
    address: asNormalizedAddress("0xc0de20a37e2dac848f81a93bd85fe4acdde7c0de"),
  },
} as const satisfies Record<ContributorAlias, Contributor>;

export default contributors;
