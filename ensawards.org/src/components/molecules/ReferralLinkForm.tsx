import { CopyButton } from "@/components/atoms/CopyButton.tsx";
import { FormButton } from "@/components/atoms/form-elements/FormButton.tsx";
import { Input } from "@/components/atoms/form-elements/Input.tsx";
import type { FormField, ValidationErrors } from "@/components/molecules/form/types.ts";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { capitalizeFormLabel, truncateAddress } from "@/utils";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { Link2 as LinkIcon, RefreshCw as RefreshIcon } from "lucide-react";
import React, { type FormEvent, useEffect, useState } from "react";
import { type Address, getAddress, isAddress } from "viem";
import * as Yup from "yup";

interface ReferralLinkFormDataProps {
  "ethereum address": string;
}

const formFields: FormField[] = [
  {
    label: "ethereum address",
    type: "text",
    required: true,
  },
];

enum ENSAwardsReferralLinkFormFields {
  EthereumAddress = "ethereum address",
}

const generateReferralLinkFormSchema = Yup.object().shape({
  "ethereum address": Yup.string()
    .required("Ethereum address is required")
    .test({
      name: "address-test",
      exclusive: false,
      test(value, ctx) {
        if (value.length === 0) {
          return ctx.createError({ message: "Ethereum address is required" });
        }
        if (!isAddress(value, { strict: false })) {
          return ctx.createError({ message: "Invalid Ethereum addresss" });
        }

        return true;
      },
    }),
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
  const [successfulFormSubmit, setSuccessfulFormSubmit] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    getInitialValidationErrorsState(formFields),
  );
  const [referrerAddress, setReferrerAddress] = useState<string>("");
  const [generatedLink, setGeneratedLink] = useState<string>("");

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData: FormData = new FormData(e.target as HTMLFormElement);

    const data: ReferralLinkFormDataProps = {
      "ethereum address": formData.get("ethereum address")?.toString() || "",
    };

    try {
      // Validate form data against the schema
      await generateReferralLinkFormSchema.validate(data, {
        abortEarly: false,
      });

      // Proceed with form submission if validation is successful
      setReferrerAddress(data[ENSAwardsReferralLinkFormFields.EthereumAddress]);

      // Reset validation errors on successful validation
      setValidationErrors(getInitialValidationErrorsState(formFields));

      // Generate the referral link (we know that input data is a valid address)
      setGeneratedLink(
        buildEnsReferralUrl(data[ENSAwardsReferralLinkFormFields.EthereumAddress] as Address).href,
      );
      setSuccessfulFormSubmit(true);
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        const errors: ValidationErrors = getInitialValidationErrorsState(formFields);
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

        setValidationErrors(errors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const verticalFlex = "flex flex-col justify-start items-center";

  return (
    <div
      className={cn(
        "w-full max-w-[600px] h-fit gap-12 p-5 pt-8 sm:p-8 box-border bg-neutral-50 rounded-2xl",
        verticalFlex,
      )}
    >
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
              <p className="text-sm leading-none font-medium">
                Your referral link for {truncateAddress(referrerAddress as Address)}:
              </p>
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
              "transition-all duration-300 self-stretch flex flex-col justify-start items-start gap-5",
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
                  placeholder="0x"
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
              type="submit"
              variant="outline"
              className="cursor-pointer self-stretch"
            >
              {isLoading ? "Generating..." : "Generate link"}
            </FormButton>
          </div>
        )}
      </form>
    </div>
  );
}
