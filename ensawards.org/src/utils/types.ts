import type {Name} from "@ensnode/ensnode-sdk";

export interface QuoteAuthorData {
  name: Name;
  role: string;
  ensProfile: URL;
}
export interface QuoteCardData {
  quote: string;
  author: QuoteAuthorData;
  avatarPath: string;
}
