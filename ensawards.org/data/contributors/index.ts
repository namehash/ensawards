import { mainnet } from "viem/chains";

import type { Contributor } from "./types";

// TODO: Should we consider having some special naming convention for the keys here?
// Ex. We could add 'dev' suffix to all contributors from NameHashLabs
// and then `<companyName>` suffix for all external contributors (provided that they belong to one).
const contributors = {
  stevedylan: {
    chainId: mainnet.id,
    address: "0x464d18C13b4420E07eE85d5E6Fddfc3078eE9e23",
  },
  lightwalker: {
    chainId: mainnet.id,
    address: "0x1a199654959140E5c1A2F4135fAA7Ba2748939C5",
  },
  y3drk: {
    chainId: mainnet.id,
    address: "0x26A1BC2b06DD438669094bD68f1E2481F47FEC5b",
  },
  theloner: {
    chainId: mainnet.id,
    address: "0x6D99E3D9287C0e7f39d24472a066B4DE24Bfe657",
  },
  nischalEnscribe: {
    chainId: mainnet.id,
    address: "0xD1DA830E7D175eC8a51103bCfbBbE32A9362a6b2",
  },
} as const satisfies Record<string, Contributor>;

export default contributors;
