import { EnsDaoIcon } from "@/components/atoms/icons/ens-integrating-entities/dao-protocols/EnsDaoIcon.tsx";
import { ENSProject } from "@/data/projects/ens";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { DAOProtocol } from "@/types/protocols.ts";
import { DAOProtocolIds } from "@/types/protocols.ts";

export const ENSDao: DAOProtocol = {
  id: DAOProtocolIds.EnsDao,
  slug: "ens",
  protocolType: ProtocolTypes.DAO,
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
  ogImagePath: "https://ensawards.org/protocol-ens-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-ens-dao_twitter_og_image.png",
};
