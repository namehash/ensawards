import {type Organization, OrganizationNames, OrganizationTypes} from "@/types/organizations.ts";
import ENSDaoIcon from "../assets/ensDaoIcon.svg";
import UniswapDaoIcon from "../assets/uniswapIcon.svg";
import {PROJECTS} from "@/data/projects.ts";

export const ORGANIZATIONS: Record<string, Organization> = {
    EnsDao:
        {
            orgType: OrganizationTypes.DAO,
            project: PROJECTS.ENS,
            name: OrganizationNames.Ens,
            description: "The Ethereum Name Service (ENS) is a decentralized domain name system. The ENS DAO governs the ENS protocol and treasury.",
            icon: ENSDaoIcon,
            socialLinks: {
                websiteLink: new URL("https://ensdao.org/"),
                twitterLink: new URL("https://x.com/ENS_DAO")
            }
        },
    UniswapDao: {
        orgType: OrganizationTypes.DAO,
        project: PROJECTS.Uniswap,
        name: OrganizationNames.Uniswap,
        description: "The largest onchain marketplace. Buy and sell crypto on Ethereum and 12+ other chains.",
        icon: UniswapDaoIcon,
        socialLinks: {
            websiteLink: new URL("https://app.uniswap.org/"),
            twitterLink: new URL("https://x.com/Uniswap")
        }
    }
} as const;