import type { InterpretedName } from "enssdk";

export interface QuoteAuthorData {
  name: InterpretedName;
  role: string;
  ensProfile: URL;
}
export interface QuoteCardData {
  quote: string;
  author: QuoteAuthorData;
  avatarPath: string;
}
