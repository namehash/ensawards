import { FormButton } from "@/components/molecules/contact-form/form-elements/FormButton.tsx";
import { Input } from "@/components/molecules/contact-form/form-elements/Input.tsx";
import { TextArea } from "@/components/molecules/contact-form/form-elements/TextArea.tsx";
import type {
  ContactFormDataProps,
  FormField,
  PossibleSuggestions,
  SuggestionFormDataProps,
} from "@/components/molecules/contact-form/types.ts";
import {
  appSuggestionFormSchema,
  bestPracticeSuggestionFormSchema,
} from "@/components/molecules/contact-form/validation.ts";
import { cn } from "@/lib/utils.ts";
import { CheckIcon, XCircleIcon } from "@heroicons/react/24/solid";
import React, { type FormEvent, useEffect, useState } from "react";
import * as Yup from "yup";

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

const formTextContentsAdaptations = new Map<
  "header" | "description",
  Map<PossibleSuggestions, string>
>([
  [
    "header",
    new Map<"app" | "best practice", string>([
      ["app", "an app for review"],
      ["best practice", "best practice"],
    ]),
  ],
  [
    "description",
    new Map<"app" | "best practice", string>([
      ["app", "the app details"],
      ["best practice", "a best practice"],
    ]),
  ],
]);

const validationSchemaMap = new Map([
  ["app", appSuggestionFormSchema],
  ["best practice", bestPracticeSuggestionFormSchema],
]);

interface ValidationErrors {
  [key: string]: string;
}

interface FormProps {
  whatsSuggested: PossibleSuggestions;
  formFields: FormField[];
  submissionEndpoint: string;
}

const closeOverlayIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer text-[#A3A3A3] transition-all duration-200 hover:text-red-600">
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getInitialValidationErrorsState = (
  formFields: FormField[],
): ValidationErrors => {
  const validationErrorsInitialState: ValidationErrors = {};
  formFields.forEach(
    (field) => (validationErrorsInitialState[field.label] = ""),
  );

  return validationErrorsInitialState;
};

const capitalizeLabel = (label: string): string => {
  //Special treatment for URL field
  if (label === "url") {
    return label.toUpperCase();
  }

  return label.charAt(0).toUpperCase() + label.slice(1);
};

export const ContactForm = ({
  whatsSuggested,
  formFields,
  submissionEndpoint,
}: FormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successfulFormSubmit, setSuccessfulFormSubmit] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    getInitialValidationErrorsState(formFields),
  );

  const labelStyles =
    "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50";

  const closeOverlay = (whatsSuggested: PossibleSuggestions) => {
    // Reset form on closing the overlay
    setErrorMessage("");
    setValidationErrors(getInitialValidationErrorsState(formFields));

    document
      .querySelector(`#${whatsSuggested.replace(" ", "-")}-overlay`)!
      .classList.add("hidden");
    document.body.classList.remove("no-scroll");

    const scrollToY = parseInt(
      document.body.style.top.replace("px", "").replace("-", ""),
    );
    document.body.style.top = "";

    if (!isNaN(scrollToY)) {
      window.scrollTo({top: scrollToY, behavior: "instant"});
    }
  };

  const submitForm = async (e: FormEvent) => {
    setErrorMessage("");
    e.preventDefault();
    setIsLoading(true);

    const formData: FormData = new FormData(e.target as HTMLFormElement);

    const data: SuggestionFormDataProps = {
      name: formData.get(EnsAwardsFormFields.Name)?.toString().trim() || "",
      url: formData.get(EnsAwardsFormFields.Url)?.toString().trim() || "",
      description:
        formData.get(EnsAwardsFormFields.Description)?.toString().trim() || "",
      source: formData.get("source")?.toString().trim() || "",
    };

    try {
      // Validate form data against the schema
      await validationSchemaMap
        .get(whatsSuggested)!
        .validate(data, { abortEarly: false });
      // Reset validation errors on successful validation
      setValidationErrors(getInitialValidationErrorsState(formFields));

      // Proceed with form submission if validation is successful
      // Map ENSAwards form fields to ContactUs form fields
      // since we use a common Slack channel as an output & forward our requests to namehashlabs.org
      const dataToSend: ContactFormDataProps = {
        name: data.name,
        email: data.url,
        telegram: "",
        message: data.description,
        source: data.source,
      };
      await sendData(dataToSend);
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        const errors: ValidationErrors =
          getInitialValidationErrorsState(formFields);
        for (const err of validationError.inner) {
          if (
            err.path &&
            Object.values(EnsAwardsFormFields).includes(
              err.path as EnsAwardsFormFields,
            )
          ) {
            errors[err.path as EnsAwardsFormFields] = err.message;
          }
        }

        setErrorMessage(
          "One or more fields have an error. Please check and try again.",
        );

        setValidationErrors(errors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const sendData = async (data: ContactFormDataProps) => {
    const fetchPromise = fetch(submissionEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // 10 seconds timeout limit
    const timeoutLimit = 10000;

    const timeoutPromise = new Promise<Response>((resolve, reject) => {
      setTimeout(() => {
        reject(
          new Error(
            "It seems your request is taking longer than usual. Please try again later.",
          ),
        );
      }, timeoutLimit);
    });

    try {
      const response = await Promise.race([fetchPromise, timeoutPromise]);

      if (!response.ok) {
        throw new Error(
          "There was a server error trying to send a message. Please try again later.",
        );
      }

      setSuccessfulFormSubmit(true);
    } catch (error) {
      if (error instanceof TypeError) {
        // Likely a network error
        console.error("Network error: ", error);
        setErrorMessage(
          "Connection lost. Please check your connection and try again.",
        );
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setValidationErrors({ ...validationErrors, [name]: "" });
    setErrorMessage("");
  };

  useEffect(() => {
    const sourceInput = document.getElementById("source") as HTMLInputElement;
    if (sourceInput) {
      sourceInput.value = window.location.href;
    }
  });

  return (
    <form
      onSubmit={submitForm}
      className="h-full w-full flex flex-col flex-nowrap justify-start items-start gap-5 self-stretch"
      noValidate>
      <div className="mx-auto lg:mr-0 gap-y-5 w-full h-full gap-5 flex flex-col relative">
        <div className="flex flex-col flex-nowrap justify-start items-start gap-2">
          <div className="flex flex-row flex-nowrap justify-between items-center self-stretch">
            <h2 className="text-lg leading-7 font-semibold text-foreground">
              Suggest{" "}
              {formTextContentsAdaptations.get("header")!.get(whatsSuggested)}
            </h2>
            <button
              type="reset"
              onClick={() => {
                closeOverlay(whatsSuggested);
              }}>
              {closeOverlayIcon}
            </button>
          </div>
          <p className="text-sm leading-5 font-normal text-gray-500">
            Provide{" "}
            {formTextContentsAdaptations
              .get("description")!
              .get(whatsSuggested)}{" "}
            you'd like us to add to ENSAwards.
          </p>
        </div>

        <div
          className={cn([
            "w-full h-full flex flex-col items-center justify-center absolute  transition-all duration-300",
            successfulFormSubmit ? "opacity-100" : "opacity-0 z-[-1]",
          ])}>
          <div className="p-3 bg-green-100 rounded-full mb-6">
            <CheckIcon className="text-green-400 w-6 h-6" />
          </div>
          <p className="text-lg font-semibold">Your message was sent</p>
          <p className="text-sm text-gray-500 mt-2 text-center">
            We have received your message and will get back to you soon.
          </p>
          <FormButton
            onClick={() => {
              setSuccessfulFormSubmit(false);
            }}
            type="reset"
            className="mt-5">
            Send another message
          </FormButton>
        </div>

        <div
          className={cn([
            "transition-all duration-300",
            successfulFormSubmit ? "opacity-0 z-[-1]" : "opacity-100",
          ])}>
          <div
            className={`mx-auto lg:mr-0 gap-y-5 w-full h-full gap-5 flex flex-col relative`}>
            {errorMessage && (
              <span className="flex space-x-3 items-center p-4 rounded-md border border-red-100 bg-red-50">
                <div className="w-5">
                  <XCircleIcon className="text-red-400 h-5 w-5" />
                </div>

                <p className="text-red-800 font-medium text-sm">
                  {errorMessage}
                </p>
              </span>
            )}

            {formFields.map((field) => (
              <div
                key={`FormField-${field.label}`}
                className="flex flex-col flex-nowrap justify-start items-start gap-2 self-stretch">
                <label htmlFor={field.label} className={labelStyles}>
                  {capitalizeLabel(field.label)}
                  {!field.required && " (optional)"}
                </label>
                {field.label === EnsAwardsFormFields.Description ? (
                  <TextArea
                    rows={4}
                    id={field.label}
                    disabled={isLoading}
                    onChange={handleInputChange}
                    defaultValue=""
                    name={field.label}
                    error={validationErrors[field.label]}
                    required={field.required}
                  />
                ) : (
                  <div className="w-full">
                    <Input
                      id={field.label}
                      type={field.type}
                      disabled={isLoading}
                      name={field.label}
                      autoComplete="off"
                      onChange={handleInputChange}
                      error={validationErrors[field.label]}
                      required={field.required}
                    />
                  </div>
                )}
              </div>
            ))}
            {/* Hidden input to capture the source URL of the form submission.
            Its value is set programmatically in a useEffect hook. */}
            <input type="hidden" id="source" name="source" value="" />
            <div className="flex flex-row flex-nowrap justify-end items-center gap-2 self-stretch">
              <FormButton
                disabled={isLoading}
                type="reset"
                variant="outline"
                className="cursor-pointer rounded-full"
                onClick={() => {
                  closeOverlay(whatsSuggested);
                }}>
                Cancel
              </FormButton>
              <FormButton
                disabled={isLoading}
                type="submit"
                className="cursor-pointer rounded-full">
                {isLoading ? "Sending..." : "Send"}
              </FormButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
