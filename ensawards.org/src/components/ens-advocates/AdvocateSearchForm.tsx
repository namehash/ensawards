import { navigate } from "astro:transitions/client";
import { Input } from "@/components/atoms/form-elements/Input.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { useIsMobile } from "@namehash/namehash-ui";
import React, { type ChangeEvent, useState } from "react";
import { type Address, isAddress } from "viem";

export function AdvocateSearchForm() {
  const [rawInputAddress, setRawInputAddress] = useState<Address | string>("");
  const [inputErrorMessage, setInputErrorMessage] = useState("");
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the input is a valid address
    if (!isAddress(rawInputAddress, { strict: false })) {
      // if not, then set an error message
      setInputErrorMessage("Invalid address");
      return;
    }

    //otherwise route to an advocate's profile
    navigate(`/advocate/${rawInputAddress}`);
  };

  const handleRawInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setInputErrorMessage("");
    setRawInputAddress(e.target.value);
  };
  return (
    <form className="w-full max-w-[650px] flex flex-col gap-2" onSubmit={handleSubmit}>
      <fieldset className="w-full flex flex-col sm:flex-row gap-2 justify-start items-start">
        <Input
          autoFocus
          type="text"
          required
          id="ens-name"
          name="ens-name"
          placeholder={
            isMobile ? "Search for an address" : "Search for an Ethereum Mainnet address"
          }
          value={rawInputAddress}
          onChange={handleRawInputNameChange}
          error={inputErrorMessage}
        />
        <button
          type="submit"
          aria-disabled={rawInputAddress.length === 0}
          className={cn(
            shadcnButtonVariants({
              variant: "default",
              size: "default",
              className: "max-sm:self-stretch cursor-pointer",
            }),
          )}
        >
          View Profile
        </button>
      </fieldset>
    </form>
  );
}
