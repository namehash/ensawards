import * as Yup from "yup";

export const appSuggestionFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  // Warning: there are reported issues regarding the .url() validation method in Yup
  // https://github.com/jquense/yup/issues?q=is%3Aissue%20state%3Aopen%20url
  url: Yup.string().url("valid app URL is required").required("app URL is required"),
  description: Yup.string().optional(),
});

export const bestPracticeSuggestionFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().optional(),
});
