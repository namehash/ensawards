// Reference form inputs from `Contact us` form at www.namehashlabs.org
// where we forward requests from our form as well
import type {FormField} from "@/components/molecules/form/types.ts";

enum NameHashFormFields {
  Name = "name",
  Email = "email",
  Telegram = "telegram",
  Message = "message",
  Source = "source",
}

export enum EnsAwardsContactFormFields {
  Name = "name",
  Url = "url",
  Description = "description",
  Source = "source",
  App = "app",
  Project = "project",
  Benchmark = "benchmark",
  BenchmarkResultUpdate = "requested benchmark result update",
  ContractAddress = "contract address",
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
  app: string;
  project: string;
  benchmark: string;
  "requested benchmark result update": string;
  source: string;
  "contract address": string;
}

export type PossibleSuggestions = "app" | "best practice" | "benchmark result" | "dao" | "contract";

export interface ContactFormField extends Omit<FormField, "label"> {
  label: EnsAwardsContactFormFields;
}
