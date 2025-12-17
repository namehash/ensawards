import { Input } from "@/components/atoms/form-elements/Input.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { Name } from "@ensnode/ensnode-sdk";
import { type ChangeEvent, useState } from "react";

export function AdvocateSearchForm() {
  const [rawInputName, setRawInputName] = useState<Name>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Input validation and normalization.
    // see: https://github.com/namehash/ensnode/issues/1140 --> Could probably use slightly changed logic from GenerateReferralLinkForm.tsx

    const href = `/name/${rawInputName}`;

    // router.push(href);
    console.log("Form submitted with", rawInputName);
  };

  const handleRawInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setRawInputName(e.target.value);
  };
  return (
    <form className="w-full max-w-[650px] flex flex-col gap-2" onSubmit={handleSubmit}>
      <fieldset className="w-full flex flex-col sm:flex-row gap-2 justify-start items-center">
        <Input
          autoFocus
          type="text"
          required
          id="ens-name"
          name="ens-name"
          placeholder="Search for a name..."
          value={rawInputName}
          onChange={handleRawInputNameChange}
        />
        <button
          type="submit"
          disabled={rawInputName.length === 0}
          className={cn(
            shadcnButtonVariants({
              variant: "default",
              size: "default",
              className: "max-sm:self-stretch",
            }),
          )}
        >
          View Profile
        </button>
      </fieldset>
    </form>
  );
}
