import { navigate } from "astro:transitions/client";
import { useIsMobile } from "@namehash/namehash-ui";
import { toNormalizedAddress } from "enssdk";
import React, { type ChangeEvent, useState } from "react";

import { Input } from "@/components/atoms/form-elements/Input.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export function AdvocateSearchForm() {
  const [rawInputAddress, setRawInputAddress] = useState<string>("");
  const [inputErrorMessage, setInputErrorMessage] = useState("");
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // If the input is a valid normalizable address
      const normalizedAddress = toNormalizedAddress(rawInputAddress);
      // route to an advocate's profile
      navigate(`/advocate/${normalizedAddress}`);
    } catch (error) {
      // if the address is not valid and/or normalizable, then set an error message
      setInputErrorMessage("Invalid address");
    }
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
