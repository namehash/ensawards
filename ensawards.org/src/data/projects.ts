import ENSProjectIcon from "../assets/ensProjectIcon.svg";
import UniswapProjectIcon from "../assets/uniswapIcon.svg";
import {type Project, ProjectNames} from "@/types/projects.ts";

export const PROJECTS: Record<string, Project>= {
    ENS:
        {
            name: ProjectNames.Ens,
            description: "The Ethereum Name Service (ENS) is a decentralized domain name system.",
            icon: ENSProjectIcon,
            socialLinks: {
                websiteLink: new URL("https://ens.domains/"),
                twitterLink: new URL("https://x.com/ensdomains")
            }
        },
    Uniswap: {
        name: ProjectNames.Uniswap,
        description: "The largest onchain marketplace. Buy and sell crypto on Ethereum and 12+ other chains.",
        icon: UniswapProjectIcon,
        socialLinks: {
            websiteLink: new URL("https://app.uniswap.org/"),
            twitterLink: new URL("https://x.com/Uniswap")
        }
    }
} as const;