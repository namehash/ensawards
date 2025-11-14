export interface QuoteAuthorData {
  name: string;
  role: string;
  ensProfile: string;
}
export interface QuoteCardData {
  quote: string;
  author: QuoteAuthorData;
  avatarPath: string;
}
