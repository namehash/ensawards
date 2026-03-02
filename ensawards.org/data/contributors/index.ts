import { mainnet } from "viem/chains";

import type { Contributor } from "./types";

const contributors: Record<string, Contributor> = {
  stevedylan: {
    chainId: mainnet.id,
    address: "0x464d18C13b4420E07eE85d5E6Fddfc3078eE9e23",
  },
};

export default contributors;
