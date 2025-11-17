import { cn } from "@/utils/tailwindClassConcatenation.ts";
import React, { useId } from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  variant?: "primary" | "secondary";
  inputSize?: "small" | "medium" | "large";
  slotPosition?: "left" | "right";
  error?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  className,
  disabled = false,
  children,
  error,
  id,
  ...props
}) => {
  const inputId = id || useId();

  const inputClasses = cn(
    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm " +
      "focus-visible:border-gray-600 has-[input:focus]:border-gray-600" +
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 " +
      "has-[input:focus:hover]:border-gray-600 hover:border-gray-400",
    {
      "border-red-300 hover:border-red-600 has-[input:focus]:border-red-600 has-[input:focus:hover]:border-red-600":
        !!error,
    },
    className,
  );

  return (
    <div className="gap-1 self-stretch">
      <input id={inputId} className={inputClasses} disabled={disabled} {...props} />
      {error && <span className="mt-2 text-sm font-normal text-red-600">{error}</span>}
    </div>
  );
};
