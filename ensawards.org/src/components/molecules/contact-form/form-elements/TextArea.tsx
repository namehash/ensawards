import { cn } from "@/utils/tailwindClassConcatenation.ts";
import React from "react";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  error?: string;
  disabled?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  error,
  disabled = false,
  ...props
}) => {
  const combinedClassName = cn([
    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm " +
      "focus-visible:border-gray-600 has-[input:focus]:border-gray-600" +
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" +
      "has-[input:focus:hover]:border-gray-600 hover:border-gray-400",
    {
      "border-red-300 hover:border-red-600 focus:border-red-600 focus:hover:border-red-600": error,
    },
    className,
  ]);

  return (
    <div className="flex flex-col self-stretch">
      <textarea className={combinedClassName} disabled={disabled} {...props} />
      {error && <span className="mt-2 text-sm font-normal text-red-600">{error}</span>}
    </div>
  );
};
