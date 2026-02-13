import { NounsIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/NounsIcon.tsx";
import { NounsProject } from "@/data/projects/nouns";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { DAOProtocol } from "@/types/protocols.ts";
import { DAOProtocolIds } from "@/types/protocols.ts";

export const NounsDao: DAOProtocol = {
  id: DAOProtocolIds.NounsDao,
  slug: "nouns",
  protocolType: ProtocolTypes.DAO,
  project: NounsProject,
  name: "Nouns DAO",
  description:
    "Nouns is a community-owned brand that makes a positive impact by funding ideas and fostering collaboration.",
  icon: NounsIcon,
  socials: {
    website: new URL("https://nouns.wtf/"),
    twitter: new URL("https://x.com/nounsdao"),
    ens: "nouns.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-nouns-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-nouns-dao_twitter_og_image.png",
};
