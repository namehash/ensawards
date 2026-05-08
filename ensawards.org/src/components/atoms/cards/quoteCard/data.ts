import { asInterpretedName } from "enssdk";

import { type QuoteCardData } from "./types";

export const voicesFromTheCommunity: QuoteCardData[] = [
  {
    quote:
      "ENS has always been about empowering the Ethereum community to name and own their digital identities. Contract Naming Season continues that mission — helping developers, DAOs, and protocols give their smart contracts names users can trust.",
    author: {
      name: asInterpretedName("nick.eth"),
      role: "Creator of ENS",
      ensProfile: new URL("https://app.ens.domains/nick.eth"),
    },
    avatarPath: "/src/assets/nickEthAvatar.png",
  },
  {
    quote:
      "All smart contracts should be named onchain, for security, readability, and transparency. Contract Naming Season with Enscribe is a great opportunity to finally get it done.",
    author: {
      name: asInterpretedName("brantly.eth"),
      role: "Ethereum Identity Foundation",
      ensProfile: new URL("https://app.ens.domains/brantly.eth"),
    },
    avatarPath: "/src/assets/brantlyEthAvatar.png",
  },
  {
    quote:
      "Naming Season captures what makes ENS, DAOs and Ethereum special — community-led initiatives that drive our ecosystem forward! It’s actions like naming contracts that build the culture of safety and transparency we all depend on.",
    author: {
      name: asInterpretedName("james.eth"),
      role: "Fire Eyes DAO",
      ensProfile: new URL("https://app.ens.domains/james.eth"),
    },
    avatarPath: "/src/assets/jamesEthAvatar.png",
  },
  {
    quote:
      "Named contracts upgrade security and enhance UX. Promoting awareness of contract naming opportunities across protocols, DAOs, and apps through Contract Naming Season is a key step forward for the Ethereum community.",
    author: {
      name: asInterpretedName("lightwalker.eth"),
      role: "NameHash Labs",
      ensProfile: new URL("https://app.ens.domains/lightwalker.eth"),
    },
    avatarPath: "/src/assets/lightwalkerEthAvatar.png",
  },
];
