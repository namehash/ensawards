// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import SuperfluidProject from "../../projects/superfluid";
import { defineProtocol } from "../registry.ts";
import { type DeFiProtocol, DeFiProtocolIds, ProtocolTypes } from "../types.ts";
import SuperfluidIcon from "./icon.tsx";

const SuperfluidDeFi: DeFiProtocol = {
  id: DeFiProtocolIds.Superfluid,
  protocolSlug: "superfluid-defi",
  protocolType: ProtocolTypes.DeFi,
  project: SuperfluidProject,
  name: "Superfluid",
  description:
    "The money streaming protocol — stream tokens by the second in real time to power onchain payments, payroll, subscriptions, and rewards.",
  icon: SuperfluidIcon,
  socials: {
    website: new URL("https://superfluid.org"),
    twitter: new URL("https://x.com/Superfluid_HQ"),
  },
};

defineProtocol(SuperfluidDeFi);

export default SuperfluidDeFi;
