// Reference form inputs from `Contact us` form at www.namehashlabs.org
// where we forward requests from our form as well
enum NameHashFormFields {
  Name = "name",
  Email = "email",
  Telegram = "telegram",
  Message = "message",
  Source = "source",
}

export enum EnsAwardsFormFields {
  Name = "name",
  Url = "url",
  Description = "description",
  Source = "source",
}

// Reference form inputs from `Contact us` form at www.namehashlabs.org
// where we forward requests from our form as well
export interface ContactFormDataProps {
  name: string;
  email: string;
  telegram: string;
  message: string;
  source: string;
}

export interface SuggestionFormDataProps {
  name: string;
  url: string;
  description: string;
  source: string;
}

export type PossibleSuggestions = "app" | "best practice";

export interface FormField {
  label: EnsAwardsFormFields;
  type: "text" | "url";
  required: boolean;
}
