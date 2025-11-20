import {
    Award,
    CopyCheck,
    type Icon as IconType,
    MousePointer2,
    Pointer,
    ShieldCheck,
    TrendingUp,
    Trophy
} from "@lucide/astro";
import {SquareReplyIcon} from "@/components/atoms/icons/SquareReplyIcon.tsx";
import {type QuoteCardData} from "@/utils/types.ts";

export interface ContentItemData {
    name: string;
    description: string;
    icon: typeof IconType;
}

export const whyNameYourSmartContractsNowItems: ContentItemData[] = [
    {
        name: "Upgrade Security",
        description: "Named contracts demonstrate authenticity and reduce risks for your community.",
        icon: ShieldCheck,
    },
    {
        name: "Enhance UX",
        description:
            "Replace cryptic addresses with branded contract names (e.g., token.yourdao.eth) and ENS profiles.",
        icon: Pointer,
    },
    {
        name: "Follow Best Practices",
        description:
            "Shape Ethereum's identity layer. Your adoption drives new standards for apps and protocols.",
        icon: Award,
    },
    {
        name: "Earn Awards",
        description:
            "Gain recognition on the ENSAwards leaderboards and an opportunity to earn $ENS awards.",
        icon: TrendingUp,
    },
];
export const howItWorksItems: ContentItemData[] = [
    {
        name: "Select contracts to name",
        description:
            'Prioritize "user-facing" contracts such as for DAO governance, DeFi transactions, or key multisig wallets.',
        icon: MousePointer2,
    },
    {
        name: "Assign ENS names",
        description: "Configure ENS names for each contract according to best practices.",
        icon: CopyCheck,
    },
    {
        name: "Submit for review",
        description:
            "Share your updates with the ENS Contract Naming Working Group for their review on impact.",
        icon: SquareReplyIcon,
    },
    {
        name: "Earn awards",
        description:
            "Submissions selected by the ENS Contract Naming Working Group will receive $ENS awards.",
        icon: Trophy,
    },
];

export const voicesFromTheCommunity: QuoteCardData[] = [
    {
        quote:
            "ENS has always been about empowering the Ethereum community to name and own their digital identities. Contract Naming Season continues that mission — helping developers, DAOs, and protocols give their smart contracts names users can trust.",
        author: {
            name: "nick.eth",
            role: "Creator of ENS",
            ensProfile: "https://app.ens.domains/nick.eth",
        },
        avatarPath: "/src/assets/nickEthAvatar.svg",
    },
    {
        quote:
            "All smart contracts should be named onchain, for security, readability, and transparency. Contract Naming Season with Enscribe is a great opportunity to finally get it done.",
        author: {
            name: "brantly.eth",
            role: "Ethereum Identity Foundation",
            ensProfile: "https://app.ens.domains/brantly.eth",
        },
        avatarPath: "/src/assets/brantlyEthAvatar.svg",
    },
    {
        quote:
            "Naming Season captures what makes ENS, DAOs and Ethereum special — community-led initiatives that drive our ecosystem forward! It’s actions like naming contracts that build the culture of safety and transparency we all depend on.",
        author: {
            name: "james.eth",
            role: "Fire Eyes DAO",
            ensProfile: "https://app.ens.domains/james.eth",
        },
        avatarPath: "/src/assets/jamesEthAvatar.png",
    },
    {
        quote:
            "Named contracts upgrade security and enhance UX. Promoting awareness of contract naming opportunities across protocols, DAOs, and apps through Contract Naming Season is a key step forward for the Ethereum community.",
        author: {
            name: "lightwalker.eth",
            role: "NameHash Labs",
            ensProfile: "https://app.ens.domains/lightwalker.eth",
        },
        avatarPath: "/src/assets/lightwalkerEthAvatar.svg",
    },
];