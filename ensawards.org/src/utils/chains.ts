import { arbitrum, base, linea, mainnet, optimism, scroll } from "viem/chains";

// TODO: Remove once new version of namehash-ui is released (it will be exporting the SUPPORTED_CHAINS object)
export const SUPPORTED_CHAINS = [mainnet, base, linea, optimism, arbitrum, scroll];
