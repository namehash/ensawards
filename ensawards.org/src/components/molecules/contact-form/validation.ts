import * as Yup from "yup";

export const appSuggestionFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  //URL specific validation removed due to UX concerns
  url: Yup.string().required("App URL is required"),
  description: Yup.string().optional(),
});

export const bestPracticeSuggestionFormSchema = Yup.object().shape({
  description: Yup.string().required("Best practice description is required"),
});

export const benchmarkResultUpdateRequestSchema = Yup.object().shape({
  app: Yup.string().required("App is required"),
  benchmark: Yup.string().required("Benchmark is required"),
  "requested benchmark result update": Yup.string().optional(),
});

export const contractSuggestionFormSchema = Yup.object().shape({
  project: Yup.string().required("Project is required"),
  // Address checksum validation not included due to UX concerns
  "contract address": Yup.string().required("Contract address is required"),
  description: Yup.string().optional(),
});
