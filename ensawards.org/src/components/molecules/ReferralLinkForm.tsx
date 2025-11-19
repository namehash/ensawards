import { CopyButton } from "@/components/atoms/CopyButton.tsx";
import { FormButton } from "@/components/atoms/form-elements/FormButton.tsx";
import { Input } from "@/components/atoms/form-elements/Input.tsx";
import type { FormField, ValidationErrors } from "@/components/molecules/form/types.ts";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { capitalizeFormLabel } from "@/utils";
import { getENSNodeUrl } from "@/utils/envVariables.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeClient, type Name, type ResolveRecordsResponse } from "@ensnode/ensnode-sdk";
import { CircleAlertIcon, Link2 as LinkIcon, RefreshCw as RefreshIcon } from "lucide-react";
import React, { type FormEvent, useState } from "react";
import { type Address, getAddress, isAddress } from "viem";
import { normalize } from "viem/ens";
import * as Yup from "yup";

interface ReferralLinkFormDataProps {
  "referral award recipient": string;
}

const formFields: FormField[] = [
  {
    label: "referral award recipient",
    type: "text",
    required: true,
    placeholder: "Enter your name or address",
  },
];

enum ENSAwardsReferralLinkFormFields {
  ReferralAwardRecipient = "referral award recipient",
}

// Very rudimentary validation here so that the more advanced one can be performed later in submit
const generateReferralLinkFormSchema = Yup.object().shape({
  "referral award recipient": Yup.string().required("Name or address is required"),
});

const getInitialValidationErrorsState = (formFields: FormField[]): ValidationErrors => {
  const validationErrorsInitialState: ValidationErrors = {};
  formFields.forEach((field) => (validationErrorsInitialState[field.label] = ""));

  return validationErrorsInitialState;
};

// TODO: remove after ens-referrals package is published and use its function instead
/**
 * Build a URL to the official ENS manager app
 * where the given {@link Address} is set as the referrer.
 */
function buildEnsReferralUrl(address: Address): URL {
  const ensAppUrl = new URL("https://app.ens.domains");

  ensAppUrl.searchParams.set("referrer", getAddress(address));

  return ensAppUrl;
}

export function ReferralLinkForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successfulFormSubmit, setSuccessfulFormSubmit] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    getInitialValidationErrorsState(formFields),
  );
  const [generatedLink, setGeneratedLink] = useState<string>("");

  const client = new ENSNodeClient({
    url: getENSNodeUrl(),
  });

  const submitForm = async (e: FormEvent) => {
    setErrorMessage("");
    e.preventDefault();
    setIsLoading(true);

    const formData: FormData = new FormData(e.target as HTMLFormElement);

    const data: ReferralLinkFormDataProps = {
      "referral award recipient":
        formData.get(ENSAwardsReferralLinkFormFields.ReferralAwardRecipient)?.toString() || "",
    };

    try {
      // Validate form data against the schema (initial validation)
      await generateReferralLinkFormSchema.validate(data, {
        abortEarly: false,
      });

      // Proceed with detailed validation if the initial one is successful
      const recipientInput = data[ENSAwardsReferralLinkFormFields.ReferralAwardRecipient];

      // Check if the input is a valid address
      if (isAddress(recipientInput, { strict: false })) {
        // Generate the referral link
        setGeneratedLink(buildEnsReferralUrl(recipientInput).href);
        setSuccessfulFormSubmit(true);

        // Reset validation errors on successful validation
        setValidationErrors(getInitialValidationErrorsState(formFields));

        return;
      }

      // Check if the input is a "normalizable" ENS name
      const normalizedENSName = normalize(recipientInput);

      await lookupENSName(normalizedENSName);
    } catch (validationError) {
      // This will only handle validation errors as lookup errors are handled separately
      const errors: ValidationErrors = getInitialValidationErrorsState(formFields);

      // Handle wider array of the detailed validation errors.
      errors[ENSAwardsReferralLinkFormFields.ReferralAwardRecipient] =
        "Invalid name or address";

      // Check for initial validation error
      if (validationError instanceof Yup.ValidationError) {
        for (const err of validationError.inner) {
          if (
            err.path &&
            Object.values(ENSAwardsReferralLinkFormFields).includes(
              err.path as ENSAwardsReferralLinkFormFields,
            )
          ) {
            errors[err.path as ENSAwardsReferralLinkFormFields] = err.message;
          }
        }
      }

      setErrorMessage("The input is invalid. Please check and try again.");
      setValidationErrors(errors);
    } finally {
      setIsLoading(false);
    }
  };

  const lookupENSName = async (name: Name) => {
    const lookupPromise = client.resolveRecords(name, {
      addresses: [60], // ETH CoinType
    });

    // 5 seconds timeout limit
    const timeoutLimit = 5000;

    const timeoutPromise = new Promise<Response>((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Request timeout. Please try again later."));
      }, timeoutLimit);
    });

    try {
      // Prevent the request from taking too long
      const response = await Promise.race([lookupPromise, timeoutPromise]);

      const resolvedAddress = (response as ResolveRecordsResponse<{ addresses: 60[] }>).records
        .addresses[60];

      if (resolvedAddress === null) {
        setErrorMessage("No Ethereum address configured for this name.");
        return;
      }

      setGeneratedLink(buildEnsReferralUrl(resolvedAddress as Address).href);

      setSuccessfulFormSubmit(true);

      setValidationErrors(getInitialValidationErrorsState(formFields));
    } catch (lookupError) {
      // Handle all possible errors of the resolution
      if (lookupError instanceof TypeError) {
        // Likely a network error
        console.error("Network error: ", lookupError);
        setErrorMessage("Connection lost. Please check your connection and try again.");
      } else if (lookupError instanceof Error) {
        setErrorMessage(lookupError.message);
      } else {
        setErrorMessage("Request error. Please try again later.");
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setValidationErrors({ ...validationErrors, [name]: "" });
    setErrorMessage("");
  };

  const verticalFlex = "flex flex-col justify-start items-center";

  return (
    <div
      className={cn(
        "w-full max-w-[600px] h-fit gap-12 p-5 pt-8 sm:p-8 box-border bg-neutral-50 rounded-2xl",
        verticalFlex,
      )}
    >
      {errorMessage && (
        <span className="flex flex-row justify-start items-center gap-3 py-3 px-4 rounded-lg border border-input bg-white self-stretch">
          <CircleAlertIcon className="text-destructive h-4 w-4" />
          <p className="text-destructive font-medium text-sm">{errorMessage}</p>
        </span>
      )}
      <div className={cn(verticalFlex, "gap-5")}>
        <div className="w-12 h-12 flex flex-col justify-center items-center bg-[rgba(0,82,204,0.20)] rounded-full">
          <LinkIcon size={20} className="text-blue-600 flex-shrink-0" />
        </div>
        <div className={cn(verticalFlex, "gap-3")}>
          <h3 className="text-2xl leading-normal font-semibold text-center">
            Generate your ENS&nbsp;Referral&nbsp;Program link
          </h3>
          <p className="text-base leading-normal font-normal text-muted-foreground text-center">
            Participation in ENS Referrals is open to everyone! Simply enter your address below to
            generate your ENS Referral Program link.
          </p>
        </div>
      </div>
      <form
        onSubmit={submitForm}
        className="h-fit w-full flex flex-col flex-nowrap justify-start items-start gap-5 self-stretch"
        noValidate
      >
        {successfulFormSubmit ? (
          <div
            className={cn(
              "w-full h-fit flex flex-col items-start justify-start gap-3 transition-all duration-300",
            )}
          >
            <div className="w-full h-fit flex flex-col items-start justify-start gap-2">
              <p className="text-sm leading-none font-medium">Your ENS Referral Program link:</p>
              <div className="w-full h-[38px] flex flex-row justify-start items-center gap-0.5 p-[5px] pl-3 box-border bg-neutral-100 border border-input rounded-md shadow-xs">
                <p className="w-full text-sm leading-normal font-normal text-muted-foreground truncate">
                  {generatedLink}
                </p>
                <CopyButton value={generatedLink} className="px-2 py-1 h-[26px]" />
              </div>
            </div>
            <button
              onClick={() => {
                setSuccessfulFormSubmit(false);
              }}
              type="reset"
              className={cn(
                shadcnButtonVariants({
                  variant: "outline",
                  size: "default",
                  className: "cursor-pointer self-stretch",
                }),
              )}
            >
              <RefreshIcon size={16} />
              Generate another link
            </button>
          </div>
        ) : (
          <div
            className={cn(
              "transition-all duration-300 self-stretch flex flex-col justify-start items-start gap-3",
            )}
          >
            {formFields.map((field) => (
              <div
                key={`FormField-${field.label}`}
                className="w-full min-w-full flex flex-col flex-nowrap justify-start items-start gap-2 self-stretch"
              >
                <label htmlFor={field.label} className={cn("text-sm leading-none font-medium")}>
                  {capitalizeFormLabel(field.label)}
                </label>
                <Input
                  id={field.label}
                  type={field.type}
                  disabled={isLoading}
                  name={field.label}
                  placeholder={field.placeholder}
                  autoComplete="off"
                  onChange={handleInputChange}
                  error={validationErrors[field.label]}
                  required={field.required}
                  className="bg-white"
                />
              </div>
            ))}
            <FormButton
              disabled={isLoading}
              loading={isLoading}
              type="submit"
              variant="outline"
              className="cursor-pointer self-stretch"
            >
              {isLoading ? "Loading" : "Generate link"}
            </FormButton>
          </div>
        )}
      </form>
    </div>
  );
}
