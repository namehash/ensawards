import { type ProtocolType, ProtocolTypes } from "@/types/bestPractices.ts";
import type { Project } from "@/types/projects.ts";
import type { Name } from "@ensnode/ensnode-sdk";
import type { JSX } from "astro/jsx-runtime";

export const ProtocolIds = {
  Ens: "protocol-ens-dao",
  Uniswap: "protocol-uniswap-dao",
  Nouns: "protocol-nouns-dao",
  Arbitrum: "protocol-arbitrum-dao",
  Aave: "protocol-aave-dao",
  Taiko: "protocol-taiko-dao",
} as const;

/**
 * The derived string union of possible {@link ProtocolIds}.
 */
export type ProtocolId = (typeof ProtocolIds)[keyof typeof ProtocolIds];

export interface ProtocolAbstract<ProtocolT extends ProtocolType> {
  id: ProtocolId;
  slug: string;
  protocolType: ProtocolT;
  project: Project; // each protocol belongs to a single project.
  name: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  socials: {
    website: URL;
    twitter: URL;
    ens?: Name;
  };
  ogImagePath?: string;
  twitterOgImagePath?: string;
}

export interface DAO extends ProtocolAbstract<typeof ProtocolTypes.Dao> {}

export interface Defi extends ProtocolAbstract<typeof ProtocolTypes.Defi> {}

export type Protocol = DAO | Defi;
