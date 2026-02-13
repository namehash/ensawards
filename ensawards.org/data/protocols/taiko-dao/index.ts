import { TaikoIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/TaikoIcon.tsx";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { DAOProtocol } from "@/types/protocols.ts";
import { DAOProtocolIds } from "@/types/protocols.ts";

import { TaikoProject } from "../../projects/taiko";

export const TaikoDao: DAOProtocol = {
  id: DAOProtocolIds.TaikoDao,
  slug: "taiko",
  protocolType: ProtocolTypes.DAO,
  project: TaikoProject,
  name: "Taiko DAO",
  description:
    "Taiko DAO, created in collaboration with Aragon, plays a critical role in governing Taiko in a decentralized way.",
  icon: TaikoIcon,
  socials: {
    website: new URL("https://dao.taiko.xyz/"),
    twitter: new URL("https://x.com/taikoxyz"),
    ens: "taiko.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-taiko-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-taiko-dao_twitter_og_image.png",
};
