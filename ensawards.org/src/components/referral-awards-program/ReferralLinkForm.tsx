import { CopyButton } from "@/components/atoms/CopyButton.tsx";
import { FormButton } from "@/components/atoms/form-elements/FormButton.tsx";
import { Input } from "@/components/atoms/form-elements/Input.tsx";
import type { FormField, ValidationErrors } from "@/components/molecules/form/types.ts";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { capitalizeFormLabel } from "@/utils";
import { useIsMobile } from "@/utils/hooks/useMobile.tsx";
import { resolveEthAddress } from "@/utils/resolution.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { type NormalizedName } from "@ensnode/ensnode-sdk";
import { buildEnsReferralUrl } from "@namehash/ens-referrals";
import { CircleAlertIcon, Link2 as LinkIcon, RefreshCw as RefreshIcon } from "lucide-react";
import React, { type FormEvent, useState } from "react";
import { isAddress } from "viem";
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
    placeholder: {
      desktop: "Enter your ENS name or Ethereum Mainnet address",
      mobile: "Enter your ENS name or address",
    },
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

export function ReferralLinkForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [overallFormErrorMessage, setOverallFormErrorMessage] = useState("");
  const [successfulFormSubmit, setSuccessfulFormSubmit] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    getInitialValidationErrorsState(formFields),
  );
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const isMobile = useIsMobile();

  const submitForm = async (e: FormEvent) => {
    setOverallFormErrorMessage("");
    e.preventDefault();
    setIsLoading(true);

    const formData: FormData = new FormData(e.target as HTMLFormElement);

    const data: ReferralLinkFormDataProps = {
      "referral award recipient":
        formData.get(ENSAwardsReferralLinkFormFields.ReferralAwardRecipient)?.toString() || "",
    };

    // Validate form data against the schema (initial validation)
    try {
      await generateReferralLinkFormSchema.validate(data, {
        abortEarly: false,
      });
    } catch (validationError) {
      // Check for initial validation error
      if (validationError instanceof Yup.ValidationError) {
        const singleInputError = validationError.inner[0];
        setInputError(singleInputError.message);
      }
      setIsLoading(false);
      return;
    }

    // Proceed with detailed validation if the initial one is successful
    const recipientInput = data[ENSAwardsReferralLinkFormFields.ReferralAwardRecipient];

    // Check if the input is a valid address
    if (isAddress(recipientInput, { strict: false })) {
      // Interpret the input as an address to generate the referral link
      setGeneratedLink(buildEnsReferralUrl(recipientInput).href);
      setSuccessfulFormSubmit(true);

      // Reset validation errors on successful validation
      setValidationErrors(getInitialValidationErrorsState(formFields));

      setIsLoading(false);
      return;
    }

    // Check if the input is a "normalizable" ENS name
    let normalizedName: NormalizedName;

    try {
      normalizedName = normalize(recipientInput) as NormalizedName;
    } catch (error) {
      // Display a generic message (ignore the details on purpose)
      setInputError("Invalid name or address");
      setIsLoading(false);
      return;
    }

    // The name was normalizable to `normalizedName` so proceed with resolution
    try {
      const resolvedAddress = await resolveEthAddress(normalizedName);

      if (resolvedAddress === null) {
        setInputError("No Ethereum Mainnet address configured for this name.");
        setIsLoading(false);
        return;
      }

      setGeneratedLink(buildEnsReferralUrl(resolvedAddress).href);

      setSuccessfulFormSubmit(true);

      setValidationErrors(getInitialValidationErrorsState(formFields));
    } catch (error) {
      // Handle all possible errors of the resolution
      if (error instanceof TypeError) {
        // Likely a network error
        console.error("Network error: ", error);
        setOverallFormErrorMessage("Connection lost. Please check your connection and try again.");
      } else {
        console.error(error);
        setOverallFormErrorMessage("Request error. Please try again.");
      }
    }

    setIsLoading(false);
  };

  const setInputError = (message: string) => {
    const errors: ValidationErrors = getInitialValidationErrorsState(formFields);
    errors[ENSAwardsReferralLinkFormFields.ReferralAwardRecipient] = message;
    setValidationErrors(errors);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setValidationErrors({ ...validationErrors, [name]: "" });
    setOverallFormErrorMessage("");
  };

  const verticalFlex = "flex flex-col justify-start items-center";

  return (
    <div
      className={cn(
        "w-full min-w-1/2 max-w-[600px] h-fit gap-12 p-5 pt-8 sm:p-8 box-border bg-neutral-50 rounded-2xl",
        verticalFlex,
      )}
    >
      {overallFormErrorMessage && (
        <span className="flex flex-row justify-start items-center gap-3 py-3 px-4 rounded-lg border border-input bg-white self-stretch">
          <CircleAlertIcon className="text-destructive h-4 w-4" />
          <p className="text-destructive font-medium text-sm">{overallFormErrorMessage}</p>
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
                  placeholder={isMobile ? field.placeholder?.mobile : field.placeholder?.desktop}
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
