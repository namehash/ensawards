import { mainnet } from "viem/chains";

import type { Contributor, ContributorAlias } from "./types";

const contributors = {
  stevedylan: {
    chainId: mainnet.id,
    address: "0x464d18c13b4420e07ee85d5e6fddfc3078ee9e23",
  },
  lightwalker: {
    chainId: mainnet.id,
    address: "0x1a199654959140e5c1a2f4135faa7ba2748939c5",
  },
  y3drk: {
    chainId: mainnet.id,
    address: "0x26a1bc2b06dd438669094bd68f1e2481f47fec5b",
  },
  theloner: {
    chainId: mainnet.id,
    address: "0x6d99e3d9287c0e7f39d24472a066b4de24bfe657",
  },
  nischal: {
    chainId: mainnet.id,
    address: "0xd1da830e7d175ec8a51103bcfbbbe32a9362a6b2",
  },
  spooky: {
    chainId: mainnet.id,
    address: "0x0b399d2667733659f4a5fdcb030f3e26d26cc0fe",
  },
} as const satisfies Record<ContributorAlias, Contributor>;

export default contributors;
