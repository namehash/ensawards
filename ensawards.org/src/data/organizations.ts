import { EnsDaoIcon } from "@/components/atoms/icons/EnsDaoIcon.tsx";
import { UniswapIcon } from "@/components/atoms/icons/UniswapIcon.tsx";
import { ENSProject, UniswapProject } from "@/data/projects.ts";
import { OrgIds, type Organization, OrganizationTypes } from "@/types/organizations.ts";

export const ENSDaoOrg: Organization = {
  id: OrgIds.Ens,
  slug: "ens",
  orgType: OrganizationTypes.Dao,
  project: ENSProject,
  name: "ENS DAO",
  description:
    "The Ethereum Name Service (ENS) is a decentralized domain name system. The ENS DAO governs the ENS protocol and treasury.",
  icon: EnsDaoIcon,
  socials: {
    website: new URL("https://ensdao.org/"),
    twitter: new URL("https://x.com/ENS_DAO"),
    ens: "ensdao.eth",
  },
};

export const UniswapDaoOrg: Organization = {
  id: OrgIds.Uniswap,
  slug: "uniswap",
  orgType: OrganizationTypes.Dao,
  project: UniswapProject,
  name: "Uniswap DAO",
  description:
    "Uniswap governance is a collective of companies, communities, and token holders working together to steward the future of the Uniswap protocol.",
  icon: UniswapIcon,
  socials: {
    website: new URL("https://www.uniswapfoundation.org/"),
    twitter: new URL("https://x.com/UniswapFND"),
    ens: "uniswap.eth",
  },
};

/**
 * Array of supported organizations.
 *
 * Invariant: This array should contain exactly one {@link Organization} for each {@link OrgId}.
 */
export const ORGANIZATIONS: Organization[] = [ENSDaoOrg, UniswapDaoOrg];
